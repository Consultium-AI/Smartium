/**
 * Smartium - Blok 10 Anki flashcard generator
 * ------------------------------------------------
 * Genereert per LME (leerstof-module) flashcards met het OpenAI gpt-5-mini model,
 * volgens de "SMARTIUM ANKI CARD GENERATOR MASTERPROMPT".
 *
 * Voor elke LME:
 *   1) leest de samenvattings-JSX van die LME (hoofdbestand + sections/) als bron;
 *   2) bouwt de masterprompt + gebruikersinstructie-template (sectie 33);
 *   3) roept gpt-5-mini aan via de OpenAI Chat Completions API;
 *   4) parseert de strict-JSON output en schrijft een deck naar
 *      src/data/flashcards-blok10/<id>.json.
 *
 * Gebruik:
 *   node scripts/generate-blok10-flashcards.mjs            # eerste 3 LME's (test)
 *   node scripts/generate-blok10-flashcards.mjs --all      # alle geregistreerde LME's
 *   node scripts/generate-blok10-flashcards.mjs --limit=5  # eerste 5
 *   node scripts/generate-blok10-flashcards.mjs --only=blok10-week1-casus1-maagklachten-fysiologie-van-maagzuur
 *   node scripts/generate-blok10-flashcards.mjs --dry-run  # geen API-call, alleen bron-extractie tonen
 *
 * API-sleutel: VITE_OPENAI_API_KEY uit .env.local (of OPENAI_API_KEY in de omgeving).
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SUMMARIES_ROOT = path.join(ROOT, 'src', 'summaries', 'samenvattingen-b10')
const OUTPUT_DIR = path.join(ROOT, 'src', 'data', 'flashcards-blok10')
const MASTERPROMPT_PATH = path.join(__dirname, 'lib', 'smartium-anki-masterprompt.txt')

const MODEL = 'gpt-5-mini'
const OPENAI_URL = 'https://api.openai.com/v1/chat/completions'
// Dezelfde proxy als de website (src/utils/examBlokAi.js). Houdt de geldige
// OPENAI_API_KEY server-side; standaard-engine zodat er geen lokale sleutel nodig is.
const PROXY_URL = (process.env.VITE_API_BASE_URL || 'https://smartium-openai-proxy.yellow-fog-b95b.workers.dev').replace(/\/$/, '') + '/api/chat'
const PROXY_ORIGIN = 'http://localhost:5174'
// gpt-5-mini is een reasoning-model: ruim budget voor redeneer- + uitvoertokens.
const MAX_COMPLETION_TOKENS = 32000

// ─── LME-register voor Blok 10 ──────────────────────────────────────────────
// Volgorde = volgorde op de website (zie src/pages/SummaryPage.jsx, blok10).
// `dir` is relatief t.o.v. SUMMARIES_ROOT. Nieuwe LME's toevoegen = één regel.
const BLOK10_LMES = [
  {
    id: 'blok10-week1-casus1-maagklachten-endoscopie-basis-en-bloedingen',
    name: 'Endoscopie basis en bloedingen',
    week: 'Week 1',
    case: 'Casus 1: Maagklachten',
    moduleKind: 'lme',
    dir: 'week-1/casus-1-maagklachten/casusbijeenkomst/lme-endoscopie-basis-en-bloedingen',
  },
  {
    id: 'blok10-week1-casus1-maagklachten-fysiologie-van-maagzuur',
    name: 'Fysiologie van maagzuur',
    week: 'Week 1',
    case: 'Casus 1: Maagklachten',
    moduleKind: 'lme',
    dir: 'week-1/casus-1-maagklachten/lme-fysiologie-van-maagzuur',
  },
  {
    id: 'blok10-week1-casus1-maagklachten-leefstijl-bij-reflux',
    name: 'Leefstijl bij reflux',
    week: 'Week 1',
    case: 'Casus 1: Maagklachten',
    moduleKind: 'lme',
    dir: 'week-1/casus-1-maagklachten/lme-leefstijl-bij-reflux',
  },
  // ── Verder uitbreiden met de overige Blok 10-LME's (zelfde vorm) ──
]

const BLOK_NAME = 'Blok 10: Maag-Darm-Lever'

// ─── CLI-argumenten ─────────────────────────────────────────────────────────
function parseArgs(argv) {
  const args = { all: false, limit: 3, only: null, dryRun: false }
  for (const a of argv.slice(2)) {
    if (a === '--all') args.all = true
    else if (a === '--dry-run') args.dryRun = true
    else if (a.startsWith('--limit=')) args.limit = parseInt(a.slice('--limit='.length), 10) || 3
    else if (a.startsWith('--only=')) args.only = a.slice('--only='.length)
  }
  return args
}

// ─── API-sleutel laden ──────────────────────────────────────────────────────
// Standaard-engine is de website-proxy (geldige sleutel server-side). Zet
// OPENAI_API_KEY in de omgeving om in plaats daarvan direct met OpenAI te praten.
function loadApiKey() {
  if (process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY.trim()) {
    return process.env.OPENAI_API_KEY.trim()
  }
  return null
}

// ─── Bron-extractie: JSX → leesbare tekst ───────────────────────────────────
function listJsxFiles(dir) {
  const out = []
  const walk = (d) => {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (entry.isFile() && entry.name.endsWith('.jsx')) out.push(full)
    }
  }
  walk(dir)
  // Hoofdbestand eerst (bevat de titel/omschrijving), dan secties op naam gesorteerd.
  out.sort((a, b) => {
    const aSect = a.includes(`${path.sep}sections${path.sep}`)
    const bSect = b.includes(`${path.sep}sections${path.sep}`)
    if (aSect !== bSect) return aSect ? 1 : -1
    return a.localeCompare(b)
  })
  return out
}

function jsxToText(raw) {
  let s = raw
  // 1) Verwijder import-statements (ook meerregelig).
  s = s.replace(/import\b[\s\S]*?from\s*['"][^'"]+['"];?/g, '')
  // 2) String-literal JSX-expressies behouden als tekst:  {' '}  {"..."}  {'...'}
  s = s.replace(/\{\s*(['"])([\s\S]*?)\1\s*\}/g, (_, _q, inner) => inner)
  // 3) Backtick template-strings (zonder interpolatie) behouden als tekst.
  s = s.replace(/\{\s*`([^`$]*)`\s*\}/g, (_, inner) => inner)
  // 4) Strip JSX/HTML-tags maar behoud de tekst-inhoud (ook <>...</> fragmenten).
  s = s.replace(/<[^>]*>/g, ' ')
  // 5) Decodeer veelvoorkomende HTML/unicode-entiteiten.
  s = s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&rarr;/g, '→')
    .replace(/&[a-z]+;/g, ' ')
  // 6) Verwijder overgebleven JS-expressie-refs in JSX-children: {r.cat}, {i % 2 ...}
  //    (alleen braces zonder string-literals; data-tekst is in stap 2/4 al bewaard).
  s = s.replace(/\{[^{}"'`]*\}/g, ' ')
  // 7) Regel-niveau opschoning: code-regels eruit, data-literals naar tekst.
  s = s
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => {
      if (!line) return false
      if (/^(export|return|function|const|let|var)\b/.test(line)) return false
      if (/=>/.test(line)) return false
      if (/^[)\]}([{;,]+$/.test(line)) return false
      if (/^(icon|className|key|style|to|href|target|rel|onClick)\s*:/.test(line)) return false
      // Pure object-sleutels zonder waarde op dezelfde regel: "hoog:", "laag: (".
      if (/^[A-Za-z_$][\w$]*\s*:\s*[([]?$/.test(line)) return false
      return true
    })
    // "cat: 'Ulcera'," -> "Ulcera"   (alleen gequote waardes)
    .map((line) => line.replace(/^[A-Za-z_$][\w$]*\s*:\s*(['"])([\s\S]*?)\1,?$/, '$2'))
    // Volledig in quotes verpakte regel -> kale tekst.
    .map((line) => line.replace(/^(['"])([\s\S]*)\1,?$/, '$2'))
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join('\n')
  // 8) Whitespace normaliseren.
  s = s.replace(/[ \t]{2,}/g, ' ').replace(/\n{3,}/g, '\n\n').trim()
  return s
}

function extractSourceText(absDir) {
  const files = listJsxFiles(absDir)
  const parts = []
  for (const f of files) {
    const text = jsxToText(fs.readFileSync(f, 'utf8'))
    if (text.length > 0) parts.push(text)
  }
  return parts.join('\n\n').trim()
}

// ─── Prompt opbouwen (masterprompt sectie 33) ───────────────────────────────
function buildUserPrompt(lme, sourceText) {
  return `generation_mode: lme_draft
strict_json_mode: true
target_platform: smartium
target_card_style: golden_blok5_anki_style
main_card_type: cloze
allow_front_back: true
allow_image_occlusion_suggestions: true
language: nl
minimum_cards_normal_lme: 25
minimum_cards_heavy_lme: 50
maximum_cards_heavy_lme: 80
prefer_too_many_over_too_few: true
source_priority_rule: weekstof_above_general_medicine
external_knowledge_rule: optional_clarification_only_not_testable

BLOCK_NAME:
${BLOK_NAME}

WEEK:
${lme.week}

CASE:
${lme.case}

LME_TITLE:
${lme.name}

SOURCE_TEXT:
${sourceText}

OPTIONAL_CONTEXT:
(geen)

TASK:
Genereer Smartium-Anki-kaarten volgens de masterprompt. Volg de interne workflow: broninventarisatie, leerdoel-dekkingsplan, kaartgeneratie, medische juistheidscontrole, brongetrouwheidscontrole, stijlcontrole, overlapcontrole en eindcontrole. Output uitsluitend geldig JSON volgens het opgegeven schema.`
}

// Haal robuust geldige JSON uit de model-respons (strip code fences / omliggende tekst).
function parseModelJson(content) {
  let txt = content.trim()
  const fence = txt.match(/```(?:json)?\s*([\s\S]*?)```/i)
  if (fence) txt = fence[1].trim()
  try {
    return JSON.parse(txt)
  } catch {
    const first = txt.indexOf('{')
    const last = txt.lastIndexOf('}')
    if (first !== -1 && last > first) return JSON.parse(txt.slice(first, last + 1))
    throw new Error('geen geldige JSON gevonden in respons')
  }
}

// ─── Model-aanroep (via website-proxy of direct met sleutel) ────────────────
async function generateDeck({ apiKey, masterprompt, lme, sourceText }) {
  const messages = [
    { role: 'system', content: masterprompt },
    { role: 'user', content: buildUserPrompt(lme, sourceText) },
  ]

  let res
  if (apiKey) {
    // Directe OpenAI-aanroep (response_format JSON-mode beschikbaar).
    res = await fetch(OPENAI_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: MODEL,
        messages,
        response_format: { type: 'json_object' },
        max_completion_tokens: MAX_COMPLETION_TOKENS,
      }),
    })
  } else {
    // Via dezelfde proxy als de website (proxy forwardt geen response_format).
    res = await fetch(PROXY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Origin: PROXY_ORIGIN },
      body: JSON.stringify({ model: MODEL, messages, max_completion_tokens: MAX_COMPLETION_TOKENS }),
    })
  }

  const data = await res.json()
  if (!res.ok || data.error) {
    throw new Error(`API ${res.status}: ${data.error?.message || JSON.stringify(data).slice(0, 300)}`)
  }
  const choice = data.choices?.[0]
  const content = choice?.message?.content
  if (!content) throw new Error('Lege respons van het model.')
  if (choice.finish_reason === 'length') {
    throw new Error('respons afgekapt (max_completion_tokens bereikt) — verhoog MAX_COMPLETION_TOKENS')
  }

  return { parsed: parseModelJson(content), usage: data.usage }
}

// ─── Main ───────────────────────────────────────────────────────────────────
async function main() {
  const args = parseArgs(process.argv)
  const apiKey = loadApiKey()
  const engine = apiKey ? 'direct OpenAI (OPENAI_API_KEY)' : `proxy (${PROXY_URL})`

  const masterprompt = fs.readFileSync(MASTERPROMPT_PATH, 'utf8')

  let targets = BLOK10_LMES
  if (args.only) targets = targets.filter((l) => l.id === args.only)
  else if (!args.all) targets = targets.slice(0, args.limit)

  if (targets.length === 0) {
    console.error('Geen LME\'s geselecteerd.')
    process.exit(1)
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  console.log(`Model: ${MODEL} | Engine: ${args.dryRun ? 'n.v.t. (dry-run)' : engine} | LME's: ${targets.length}\n`)

  const results = []
  for (const lme of targets) {
    const absDir = path.join(SUMMARIES_ROOT, lme.dir)
    if (!fs.existsSync(absDir)) {
      console.error(`✗ ${lme.id}: bronmap ontbreekt (${lme.dir})`)
      continue
    }
    const sourceText = extractSourceText(absDir)
    process.stdout.write(`→ ${lme.name} (${sourceText.length} tekens bron) ... `)

    if (args.dryRun) {
      console.log('dry-run')
      console.log('  ' + sourceText.slice(0, 400).replace(/\n/g, '\n  ') + '\n')
      continue
    }

    try {
      const { parsed, usage } = await generateDeck({ apiKey, masterprompt, lme, sourceText })
      const cardCount = Array.isArray(parsed.cards) ? parsed.cards.length : 0

      const deck = {
        lmeId: lme.id,
        lmeName: lme.name,
        block: BLOK_NAME,
        week: lme.week,
        case: lme.case,
        moduleKind: lme.moduleKind,
        model: MODEL,
        generatedAt: new Date().toISOString(),
        sourceChars: sourceText.length,
        ...parsed,
      }

      const outPath = path.join(OUTPUT_DIR, `${lme.id}.json`)
      fs.writeFileSync(outPath, JSON.stringify(deck, null, 2) + '\n', 'utf8')
      console.log(`✓ ${cardCount} kaarten (tokens: ${usage?.total_tokens ?? '?'})`)
      results.push({ id: lme.id, cards: cardCount })
    } catch (e) {
      console.error(`✗ ${lme.id}: ${e.message}`)
    }
  }

  if (!args.dryRun && results.length > 0) {
    writeIndex()
    console.log(`\nKlaar. ${results.length} deck(s) geschreven naar src/data/flashcards-blok10/`)
  }
}

// ─── Index-module schrijven (importeert alle decks voor de UI) ──────────────
function writeIndex() {
  const files = fs
    .readdirSync(OUTPUT_DIR)
    .filter((f) => f.endsWith('.json'))
    .sort()
  const imports = files
    .map((f, i) => `import deck${i} from './${f}'`)
    .join('\n')
  const arr = files.map((_, i) => `  deck${i},`).join('\n')
  const content = `// AUTO-GEGENEREERD door scripts/generate-blok10-flashcards.mjs - niet handmatig bewerken.
${imports}

export const blok10FlashcardDecks = [
${arr}
]

export default blok10FlashcardDecks
`
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.js'), content, 'utf8')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
