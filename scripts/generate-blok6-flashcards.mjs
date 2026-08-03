#!/usr/bin/env node
/**
 * Genereer Blok 6 Anki-flashcards (layer 1 / draft) uit de al gegenereerde
 * samenvattingen (.cursor/blok6-cache/week-N/casus-C/<slug>/raw.md), met de
 * SMARTIUM ANKI CARD GENERATOR (layer 1) masterprompt. Zelfde patroon als
 * generate-ssinterne-flashcards.mjs.
 *
 * Output: .cursor/blok6-cache/week-N/casus-C/<slug>/flashcards-draft.json
 * (layer 2 reviewer leest dit bestand en schrijft pas de publieke deck)
 *
 * Usage:
 *   node scripts/generate-blok6-flashcards.mjs --list
 *   node scripts/generate-blok6-flashcards.mjs --module basis-ecg
 *   node scripts/generate-blok6-flashcards.mjs --all --skip-existing
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import mammoth from 'mammoth'
import { loadSmartiumEnv } from './lib/loadSmartiumEnv.mjs'
import { discoverModules, lmeIdForModule, cacheRawMdPath, cacheFlashcardsDraftPath, BLOK_LABEL } from './lib/blok6Modules.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OPENAI_URL = 'https://api.openai.com/v1/chat/completions'
const MAX_COMPLETION_TOKENS = 32000

function findMasterpromptDocx() {
  const techDir = fs.readdirSync(ROOT).find((n) => /^tech\s*-\d+/i.test(n))
  if (!techDir) throw new Error('tech -*/ prompt map niet gevonden')
  return path.join(ROOT, techDir, 'Smartium code-tech', 'SMARTIUM ANKI CARD GENERATOR (layer 1).docx')
}

const args = process.argv.slice(2)
const allFlag = args.includes('--all')
const listFlag = args.includes('--list')
const moduleArg = args.includes('--module') ? args[args.indexOf('--module') + 1] : null
const limitArg = args.includes('--limit') ? Number(args[args.indexOf('--limit') + 1]) : null
const skipExisting = args.includes('--skip-existing')

async function loadMasterprompt() {
  const p = findMasterpromptDocx()
  const { value } = await mammoth.extractRawText({ path: p })
  const text = value.trim()
  if (!text) throw new Error('Masterprompt-.docx leverde lege tekst op.')
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

function buildUserPrompt(mod, sourceText) {
  return `generation_mode: lme_draft
strict_json_mode: true
target_platform: smartium
target_year: 2
curriculum_phase: bachelor_clinical_integration
language: nl

BLOCK_NAME:
${BLOK_LABEL}

WEEK:
${mod.weekLabel}

CASE:
${mod.casusName}

LME_TITLE:
${mod.displayTitle}

SOURCE_TEXT:
${sourceText}

OPTIONAL_CONTEXT:
(geen)

TASK:
Genereer Smartium-Anki-kaarten volgens de masterprompt. Volg de interne workflow: broninventarisatie, leerdoel-dekkingsplan, kaartgeneratie, medische juistheidscontrole, brongetrouwheidscontrole, standalone anki card gate, student-facing card quality gate, stijlcontrole, overlapcontrole en eindcontrole. Output uitsluitend geldig JSON volgens het opgegeven schema.`
}

async function processModule(mod, env, masterprompt) {
  const outPath = cacheFlashcardsDraftPath(ROOT, mod)
  if (skipExisting && fs.existsSync(outPath)) {
    console.log(`Skip ${mod.slug}: draft bestaat al (--skip-existing)`)
    return null
  }
  const rawPath = cacheRawMdPath(ROOT, mod)
  if (!fs.existsSync(rawPath)) {
    console.warn(`Skip ${mod.slug}: geen samenvatting-cache (${rawPath})`)
    return null
  }
  const sourceText = fs.readFileSync(rawPath, 'utf8')

  const apiKey = env.OPENAI_API_KEY
  const model = env.FLASHCARD_MODEL || 'gpt-5-mini'
  if (!apiKey) throw new Error('OPENAI_API_KEY missing (SS2B9/.env of .env)')

  console.log(`\n=== ${mod.caseLabel} — ${mod.displayTitle} ===`)
  console.log('  Generating layer-1 draft cards...')
  const { content, usage } = await callOpenAI({
    apiKey,
    model,
    messages: [
      { role: 'system', content: masterprompt },
      { role: 'user', content: buildUserPrompt(mod, sourceText) },
    ],
  })
  const parsed = parseModelJson(content)
  const cardCount = Array.isArray(parsed.cards) ? parsed.cards.length : 0
  if (cardCount === 0) throw new Error('geen kaarten gegenereerd')

  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, JSON.stringify(parsed, null, 2), 'utf8')
  console.log(`  ${cardCount} draft-kaarten (tokens: ${usage?.total_tokens ?? '?'}) -> ${outPath}`)
  return { mod, outPath, cardCount }
}

async function main() {
  const env = loadSmartiumEnv(ROOT)
  const allModules = discoverModules(ROOT)

  if (listFlag) {
    console.log(`Blok 6 modules: ${allModules.length}`)
    for (const m of allModules) console.log(`  [w${m.weekNum} c${m.casusNum}] ${m.slug}`)
    return
  }

  const masterprompt = await loadMasterprompt()

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

  console.log(`Genereren (layer 1): ${targets.length}/${allModules.length} modules`)
  let ok = 0
  for (const mod of targets) {
    try {
      const r = await processModule(mod, env, masterprompt)
      if (r) ok++
    } catch (e) {
      console.error(`FAILED ${mod.slug}:`, e.message)
    }
  }

  console.log(`\nKlaar (layer 1): ${ok}/${targets.length} modules.`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
