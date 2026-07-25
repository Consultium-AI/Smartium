#!/usr/bin/env node
/**
 * Layer 2: beoordeel/herschrijf/verwerp de layer-1 SSInterne flashcard-drafts
 * met de SMARTIUM FLASHCARD REVIEWER (layer 2) masterprompt, en schrijf het
 * definitieve, gefilterde deck (alleen publication_status: "publishable").
 * Zelfde patroon als review-sskindgyn-flashcards.mjs.
 *
 * Bron: .cursor/ssinterne-cache/week-N/<slug>/flashcards-draft.json (layer 1)
 * Output: src/data/flashcards-ssinterne/<lmeId>.json + index.js
 *
 * Usage:
 *   node scripts/review-ssinterne-flashcards.mjs --module ecg
 *   node scripts/review-ssinterne-flashcards.mjs --all --skip-existing
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import mammoth from 'mammoth'
import { loadSmartiumEnv } from './lib/loadSmartiumEnv.mjs'
import { discoverModules, lmeIdForModule, cacheRawMdPath, cacheFlashcardsDraftPath, BLOK_LABEL } from './lib/ssinterneModules.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OPENAI_URL = 'https://api.openai.com/v1/chat/completions'
const MAX_COMPLETION_TOKENS = 32000
const DATA_DIR = path.join(ROOT, 'src', 'data', 'flashcards-ssinterne')
const REVIEW_BATCH_SIZE = 12

function findReviewerDocx() {
  const techDir = fs.readdirSync(ROOT).find((n) => /^tech\s*-\d+/i.test(n))
  if (!techDir) throw new Error('tech -*/ prompt map niet gevonden')
  return path.join(ROOT, techDir, 'Smartium code-tech', 'SMARTIUM FLASHCARD REVIEWER (layer 2).docx')
}

const args = process.argv.slice(2)
const allFlag = args.includes('--all')
const listFlag = args.includes('--list')
const moduleArg = args.includes('--module') ? args[args.indexOf('--module') + 1] : null
const limitArg = args.includes('--limit') ? Number(args[args.indexOf('--limit') + 1]) : null
const skipExisting = args.includes('--skip-existing')

async function loadReviewerPrompt() {
  const p = findReviewerDocx()
  const { value } = await mammoth.extractRawText({ path: p })
  const text = value.trim()
  if (!text) throw new Error('Reviewer-.docx leverde lege tekst op.')
  return text
}

async function callOpenAI({ apiKey, model, messages }, retries = 3) {
  let lastErr
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(OPENAI_URL, {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model,
          messages,
          max_completion_tokens: MAX_COMPLETION_TOKENS,
          response_format: { type: 'json_object' },
        }),
        signal: AbortSignal.timeout(480000),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error?.message || JSON.stringify(data))
      const choice = data.choices?.[0]
      const content = choice?.message?.content
      if (!content) throw new Error('Lege respons van het model.')
      if (choice.finish_reason === 'length') throw new Error('respons afgekapt (max_completion_tokens bereikt)')
      return { content, usage: data.usage }
    } catch (e) {
      lastErr = e
      if (attempt < retries) {
        const wait = attempt * 5000
        console.warn(`  API retry ${attempt}/${retries} in ${wait / 1000}s: ${e.message}`)
        await new Promise((r) => setTimeout(r, wait))
      }
    }
  }
  throw lastErr
}

function parseModelJson(content) {
  let txt = content.trim()
  const fence = txt.match(/```(?:json)?\s*([\s\S]*?)```/i)
  if (fence) txt = fence[1].trim()
  const first = txt.indexOf('{')
  const last = txt.lastIndexOf('}')
  const sliced = first !== -1 && last > first ? txt.slice(first, last + 1) : txt
  for (const candidate of [txt, sliced]) {
    try {
      return JSON.parse(candidate)
    } catch {
      /* volgende kandidaat proberen */
    }
  }
  throw new Error('geen geldige JSON gevonden in respons')
}

function buildUserPrompt(mod, sourceText, draftCards, batchIndex, totalBatches) {
  return `generation_mode: layer2_flashcard_review
strict_json_mode: true
target_platform: smartium
target_year: 4
curriculum_phase: master_clerkship

BLOCK_NAME:
${BLOK_LABEL}

WEEK:
${mod.weekLabel}

CASE:
(geen casusindeling — losse e-module)

LME_TITLE:
${mod.displayTitle}

BATCH:
${batchIndex + 1}/${totalBatches} (beoordeel alleen de kaarten in deze batch)

SOURCE_TEXT:
${sourceText}

DRAFT_CARDS_JSON:
${JSON.stringify(draftCards)}

OPTIONAL_CONTEXT:
(geen)

TASK:
Beoordeel elke kaart in DRAFT_CARDS_JSON volgens je instructies (accept/rewrite/reject/needs_human_review). Output uitsluitend geldig JSON volgens het opgegeven schema, met exact één entry in reviewed_cards/rejected_cards/needs_human_review_cards per aangeleverde kaart.`
}

function writeIndex() {
  if (!fs.existsSync(DATA_DIR)) return 0
  const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.json')).sort()
  const imports = files.map((f, i) => `import deck${i} from './${f}'`).join('\n')
  const arr = files.map((_, i) => `  deck${i},`).join('\n')
  const content = `// AUTO-GEGENEREERD door scripts/review-ssinterne-flashcards.mjs - niet handmatig bewerken.
${imports}

export const ssinterneFlashcardDecks = [
${arr}
]

export default ssinterneFlashcardDecks
`
  fs.writeFileSync(path.join(DATA_DIR, 'index.js'), content, 'utf8')
  return files.length
}

async function processModule(mod, env, reviewerPrompt) {
  const lmeId = lmeIdForModule(mod)
  const outPath = path.join(DATA_DIR, `${lmeId}.json`)
  if (skipExisting && fs.existsSync(outPath)) {
    console.log(`Skip ${mod.slug}: final deck bestaat al (--skip-existing)`)
    return null
  }
  const draftFile = cacheFlashcardsDraftPath(ROOT, mod)
  if (!fs.existsSync(draftFile)) {
    console.warn(`Skip ${mod.slug}: geen layer-1 draft (${draftFile})`)
    return null
  }
  const draft = JSON.parse(fs.readFileSync(draftFile, 'utf8'))
  const draftCards = Array.isArray(draft.cards) ? draft.cards : []
  if (!draftCards.length) {
    console.warn(`Skip ${mod.slug}: draft heeft geen kaarten`)
    return null
  }
  const rawPath = cacheRawMdPath(ROOT, mod)
  const sourceText = fs.existsSync(rawPath) ? fs.readFileSync(rawPath, 'utf8') : ''

  const apiKey = env.OPENAI_API_KEY
  const model = env.FLASHCARD_REVIEW_MODEL || env.FLASHCARD_MODEL || 'gpt-5-mini'
  if (!apiKey) throw new Error('OPENAI_API_KEY missing (SS2B9/.env of .env)')

  console.log(`\n=== ${mod.weekLabel}: ${mod.name} (${draftCards.length} draft-kaarten) ===`)

  const batches = []
  for (let i = 0; i < draftCards.length; i += REVIEW_BATCH_SIZE) batches.push(draftCards.slice(i, i + REVIEW_BATCH_SIZE))

  const finalCards = []
  const reports = []
  for (let b = 0; b < batches.length; b++) {
    console.log(`  Reviewing batch ${b + 1}/${batches.length} (${batches[b].length} kaarten)...`)
    const { content, usage } = await callOpenAI({
      apiKey,
      model,
      messages: [
        { role: 'system', content: reviewerPrompt },
        { role: 'user', content: buildUserPrompt(mod, sourceText, batches[b], b, batches.length) },
      ],
    })
    const parsed = parseModelJson(content)
    const reviewed = Array.isArray(parsed.reviewed_cards) ? parsed.reviewed_cards : []
    const batchFinal = reviewed
      .filter((r) => r.publication_status === 'publishable' && r.final_card)
      .map((r) => r.final_card)
    finalCards.push(...batchFinal)
    if (parsed.review_report) reports.push(parsed.review_report)
    console.log(`    ${batchFinal.length}/${batches[b].length} publiceerbaar (tokens: ${usage?.total_tokens ?? '?'})`)
  }

  if (!finalCards.length) throw new Error('geen publiceerbare kaarten na review')

  fs.mkdirSync(DATA_DIR, { recursive: true })
  const deck = {
    lmeId,
    lmeName: mod.displayTitle,
    block: BLOK_LABEL,
    week: mod.weekLabel,
    case: null,
    moduleKind: 'lme',
    layer1Model: draft.model || null,
    layer2Model: model,
    generatedAt: new Date().toISOString(),
    draftCardCount: draftCards.length,
    reviewReports: reports,
    cards: finalCards,
  }
  fs.writeFileSync(outPath, JSON.stringify(deck, null, 2) + '\n', 'utf8')
  console.log(`  TOTAAL: ${finalCards.length}/${draftCards.length} publiceerbaar -> ${outPath}`)
  return { mod, outPath, count: finalCards.length }
}

async function main() {
  const env = loadSmartiumEnv(ROOT)
  const allModules = discoverModules(ROOT)

  if (listFlag) {
    console.log(`SSInterne modules: ${allModules.length}`)
    for (const m of allModules) console.log(`  [w${m.weekNum}] ${m.slug}`)
    return
  }

  const reviewerPrompt = await loadReviewerPrompt()

  let targets = allFlag
    ? allModules
    : moduleArg
      ? allModules.filter((m) => m.slug === moduleArg || m.slug.includes(moduleArg))
      : limitArg
        ? allModules.slice(0, limitArg)
        : []

  if (!targets.length) {
    console.error(`Geen modules geselecteerd (gevonden: ${allModules.length}).`)
    console.error('Usage: --list | --module <slug> | --limit N | --all')
    process.exit(1)
  }

  console.log(`Reviewen (layer 2): ${targets.length}/${allModules.length} modules`)
  let ok = 0
  for (const mod of targets) {
    try {
      const r = await processModule(mod, env, reviewerPrompt)
      if (r) ok++
    } catch (e) {
      console.error(`FAILED ${mod.slug}:`, e.message)
    }
  }

  const count = writeIndex()
  console.log(`\nKlaar (layer 2): ${ok}/${targets.length} modules. Index: ${count} decks.`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
