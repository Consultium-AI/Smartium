/**
 * Smartium - Algemene Anki flashcard generator (alle blokken)
 * -----------------------------------------------------------
 * Generaliseert scripts/generate-blok10-flashcards.mjs naar elk blok.
 *
 * Bron van waarheid:
 *   - src/data/lmeIndex.js   → metadata per LME (id, name, blok, week, casus)
 *   - src/pages/SummaryPage.jsx → koppeling id → samenvattingsmap
 *       (via de `import XxxSummary from '../summaries/...'`-regels en de
 *        `if (activeLme === 'id') ... <XxxSummary />`-keten)
 *
 * Voor elke LME van het gekozen blok:
 *   1) resolve de samenvattingsmap;
 *   2) extraheer de JSX-bron naar platte tekst;
 *   3) roep gpt-5-mini aan met de masterprompt (.docx);
 *   4) schrijf een deck naar src/data/flashcards-<blokslug>/<id>.json.
 *
 * Gebruik:
 *   node scripts/generate-flashcards.mjs --block=blok3            # heel blok 3
 *   node scripts/generate-flashcards.mjs --block=blok5 --limit=5  # eerste 5
 *   node scripts/generate-flashcards.mjs --block=blok9 --only=<id>
 *   node scripts/generate-flashcards.mjs --block=all             # blok3,4,5,9
 *   node scripts/generate-flashcards.mjs --block=blok4 --dry-run # geen API-call
 *   node scripts/generate-flashcards.mjs --block=blok5 --skip-existing
 *
 * API-sleutel: OPENAI_API_KEY in de omgeving → direct met OpenAI; anders de
 * website-proxy (geldige sleutel server-side).
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import mammoth from 'mammoth'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SRC = path.join(ROOT, 'src')
const SUMMARIES_ROOT = path.join(SRC, 'summaries')
const DATA_DIR = path.join(SRC, 'data')
const SUMMARYPAGE = path.join(SRC, 'pages', 'SummaryPage.jsx')
const MASTERPROMPT_PATH = path.join(ROOT, 'SMARTIUM ANKI CARD GENERATOR MASTERPROMPT.docx')

const MODEL = 'gpt-5-mini'
const OPENAI_URL = 'https://api.openai.com/v1/chat/completions'
const PROXY_URL = (process.env.VITE_API_BASE_URL || 'https://smartium-openai-proxy.yellow-fog-b95b.workers.dev').replace(/\/$/, '') + '/api/chat'
const PROXY_ORIGIN = 'http://localhost:5174'
const MAX_COMPLETION_TOKENS = 32000
const MIN_SOURCE_CHARS = 50
// Bovengrens: sommige componenten worden direct uit ../summaries/ geïmporteerd,
// waardoor de mapresolutie de hele summaries-root pakt (miljoenen tekens). Zo'n
// bron is een mis-resolutie én overschrijdt het token-limiet → overslaan.
const MAX_SOURCE_CHARS = 120000

// Nette blok-namen (courseStructure) voor deck.block; anders lmeIndex "Blok N".
const BLOCK_FULLNAMES = {
  'Blok 3': 'Blok 3: Groei en Ontwikkeling II',
  'Blok 4': 'Blok 4: Afweer en Aanpak van Infecties',
  'Blok 5': 'Blok 5: Bedreigingen van Binnen & Buiten',
  'Blok 9': 'Blok 9: Homeostase II',
  'Blok 10': 'Blok 10: Maag-Darm-Lever',
}

// ─── CLI-argumenten ─────────────────────────────────────────────────────────
function parseArgs(argv) {
  const args = { block: null, limit: null, only: null, dryRun: false, skipExisting: false, idsFile: null, concurrency: 1 }
  for (const a of argv.slice(2)) {
    if (a === '--dry-run') args.dryRun = true
    else if (a === '--skip-existing') args.skipExisting = true
    else if (a.startsWith('--limit=')) args.limit = parseInt(a.slice('--limit='.length), 10) || null
    else if (a.startsWith('--only=')) args.only = a.slice('--only='.length)
    else if (a.startsWith('--block=')) args.block = a.slice('--block='.length)
    else if (a.startsWith('--ids-file=')) args.idsFile = a.slice('--ids-file='.length)
    else if (a.startsWith('--concurrency=')) args.concurrency = parseInt(a.slice('--concurrency='.length), 10) || 1
  }
  return args
}

// "Blok 5" → "blok5"
function blockSlug(blok) {
  return blok.toLowerCase().replace(/\s+/g, '')
}

// Componentnamen kunnen diacritics bevatten (…InsufficiëntieSummary), dus
// Latin-letters met accenten (U+00C0–U+024F) meenemen naast \w.
const NAME = '[\\w\\u00C0-\\u024F]+'

// ─── id → bron uit SummaryPage.jsx ──────────────────────────────────────────
// Parseert de imports (component → bestand/map) en de activeLme-if-keten
// (id → component). Twee import-vormen komen voor:
//   - default:  import Xxx from '../summaries/.../XxxSummary'   (1 comp/bestand)
//   - named:    import { A, B, C } from './summary/SummaryBlok4Week1'
//               (meerdere componenten gebundeld in 1 bestand — o.a. Blok 3/4)
// Resultaat per component: { kind: 'dir', dir } als het pad een map is
// (submap per LME, zoals blok5/9/10), anders { kind: 'file', file, component }
// (component-functie moet uit het gedeelde bestand geïsoleerd worden).
function buildIdToSource() {
  const src = fs.readFileSync(SUMMARYPAGE, 'utf8')
  const compToSource = new Map()

  function registerImport(comp, rel) {
    const absFile = path.resolve(path.dirname(SUMMARYPAGE), rel) + '.jsx'
    const absNoExt = path.resolve(path.dirname(SUMMARYPAGE), rel)
    if (fs.existsSync(absNoExt) && fs.statSync(absNoExt).isDirectory()) {
      compToSource.set(comp, { kind: 'dir', dir: absNoExt })
    } else if (fs.existsSync(absFile)) {
      compToSource.set(comp, { kind: 'file', file: absFile, component: comp })
    } else if (fs.existsSync(absNoExt)) {
      // pad had al een extensie
      compToSource.set(comp, { kind: 'file', file: absNoExt, component: comp })
    }
  }

  // Default imports: import Xxx from 'pad'
  const defaultRe = new RegExp(`import\\s+(${NAME})\\s+from\\s+'(\\.[^']+)'`, 'g')
  let m
  while ((m = defaultRe.exec(src)) !== null) registerImport(m[1], m[2])

  // Named imports: import { A, B, C } from 'pad'  (kan meerdere regels beslaan)
  const namedRe = new RegExp(`import\\s*\\{([^}]+)\\}\\s*from\\s*'(\\.[^']+)'`, 'g')
  while ((m = namedRe.exec(src)) !== null) {
    const names = m[1].split(',').map((s) => s.trim()).filter(Boolean)
    for (const n of names) registerImport(n, m[2])
  }

  // if-keten: id → eerste gerenderde Summary-component in de branch.
  const idToSource = new Map()
  const branchRe = /activeLme === '([^']+)'/g
  while ((m = branchRe.exec(src)) !== null) {
    const id = m[1]
    if (idToSource.has(id.normalize('NFC'))) continue
    const window = src.slice(m.index, m.index + 600)
    const compRe = new RegExp(`<(${NAME})\\s*/>`, 'g')
    let cm
    while ((cm = compRe.exec(window)) !== null) {
      const source = compToSource.get(cm[1])
      // NFC-normaliseren: id's met diacritics (ë, é) kunnen anders gecodeerd
      // zijn dan in lmeIndex, waardoor de lookup anders mist.
      if (source) { idToSource.set(id.normalize('NFC'), source); break }
    }
  }
  return idToSource
}

// Isoleer de body van `const CompName = (...) => { ... }` (of function-vorm)
// uit een gebundeld bestand met meerdere componenten, via brace-counting.
function extractComponentSource(file, component) {
  const src = fs.readFileSync(file, 'utf8')
  const declRe = new RegExp(`const\\s+${component}\\s*=[^{]*\\{|function\\s+${component}\\s*\\([^)]*\\)\\s*\\{`)
  const m = src.match(declRe)
  if (!m) return ''
  const braceStart = src.indexOf('{', m.index)
  let depth = 0
  let end = -1
  for (let i = braceStart; i < src.length; i++) {
    if (src[i] === '{') depth++
    else if (src[i] === '}') { depth--; if (depth === 0) { end = i; break } }
  }
  if (end === -1) return ''
  return src.slice(braceStart, end + 1)
}

// ─── API-sleutel + masterprompt ─────────────────────────────────────────────
function loadApiKey() {
  const k = process.env.OPENAI_API_KEY
  return k && k.trim() ? k.trim() : null
}

async function loadMasterprompt() {
  if (!fs.existsSync(MASTERPROMPT_PATH)) throw new Error(`Masterprompt ontbreekt: ${MASTERPROMPT_PATH}`)
  const { value } = await mammoth.extractRawText({ path: MASTERPROMPT_PATH })
  const text = value.trim()
  if (!text) throw new Error('Masterprompt-.docx leverde lege tekst op.')
  return text
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
  s = s.replace(/import\b[\s\S]*?from\s*['"][^'"]+['"];?/g, '')
  s = s.replace(/\{\s*(['"])([\s\S]*?)\1\s*\}/g, (_, _q, inner) => inner)
  s = s.replace(/\{\s*`([^`$]*)`\s*\}/g, (_, inner) => inner)
  s = s.replace(/<[^>]*>/g, ' ')
  s = s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&rarr;/g, '→')
    .replace(/&[a-z]+;/g, ' ')
  s = s.replace(/\{[^{}"'`]*\}/g, ' ')
  s = s
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => {
      if (!line) return false
      if (/^(export|return|function|const|let|var)\b/.test(line)) return false
      if (/=>/.test(line)) return false
      if (/^[)\]}([{;,]+$/.test(line)) return false
      if (/^(icon|className|key|style|to|href|target|rel|onClick)\s*:/.test(line)) return false
      if (/^[A-Za-z_$][\w$]*\s*:\s*[([]?$/.test(line)) return false
      return true
    })
    .map((line) => line.replace(/^[A-Za-z_$][\w$]*\s*:\s*(['"])([\s\S]*?)\1,?$/, '$2'))
    .map((line) => line.replace(/^(['"])([\s\S]*)\1,?$/, '$2'))
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join('\n')
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

// Bron-tekst uit een resolved `source` (zie buildIdToSource): map of gebundeld bestand.
function extractSourceTextFrom(source) {
  if (source.kind === 'dir') return extractSourceText(source.dir)
  const raw = extractComponentSource(source.file, source.component)
  return raw ? jsxToText(raw) : ''
}

// ─── Prompt + model-aanroep ─────────────────────────────────────────────────
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
${lme.block}

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

// Repareert een terugkerende model-glitch: waarden worden soms met foutieve
// backslash-escapes rond de quotes geschreven (bv. `"image_anchor": \"Wood's lamp\"`),
// wat ongeldige JSON oplevert. We halen die `\"` op structuur-grenzen weg.
function repairEscapedQuotes(txt) {
  return txt
    .replace(/:\s*\\"/g, ': "') // waarde-begin:  : \"  ->  : "
    .replace(/\[\s*\\"/g, '["') // array-begin:   [\"   ->  ["
    .replace(/,\s*\\"/g, ', "') // volgende item: , \"  ->  , "
    .replace(/\\"(\s*[,}\]])/g, '"$1') // waarde-eind: \" gevolgd door , } ]
}

function parseModelJson(content) {
  let txt = content.trim()
  const fence = txt.match(/```(?:json)?\s*([\s\S]*?)```/i)
  if (fence) txt = fence[1].trim()
  const first = txt.indexOf('{')
  const last = txt.lastIndexOf('}')
  const sliced = first !== -1 && last > first ? txt.slice(first, last + 1) : txt
  for (const candidate of [txt, sliced, repairEscapedQuotes(sliced)]) {
    try {
      return JSON.parse(candidate)
    } catch {
      /* volgende kandidaat proberen */
    }
  }
  throw new Error('geen geldige JSON gevonden in respons')
}

async function generateDeck({ apiKey, masterprompt, lme, sourceText }) {
  const messages = [
    { role: 'system', content: masterprompt },
    { role: 'user', content: buildUserPrompt(lme, sourceText) },
  ]
  let res
  if (apiKey) {
    res = await fetch(OPENAI_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: MODEL, messages, response_format: { type: 'json_object' }, max_completion_tokens: MAX_COMPLETION_TOKENS }),
    })
  } else {
    res = await fetch(PROXY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Origin: PROXY_ORIGIN },
      body: JSON.stringify({ model: MODEL, messages, max_completion_tokens: MAX_COMPLETION_TOKENS }),
    })
  }
  const data = await res.json()
  if (!res.ok || data.error) throw new Error(`API ${res.status}: ${data.error?.message || JSON.stringify(data).slice(0, 300)}`)
  const choice = data.choices?.[0]
  const content = choice?.message?.content
  if (!content) throw new Error('Lege respons van het model.')
  if (choice.finish_reason === 'length') throw new Error('respons afgekapt (max_completion_tokens bereikt)')
  return { parsed: parseModelJson(content), usage: data.usage }
}

// ─── Index-module per blok schrijven ────────────────────────────────────────
function writeIndex(outDir, slug) {
  const files = fs.readdirSync(outDir).filter((f) => f.endsWith('.json')).sort()
  const imports = files.map((f, i) => `import deck${i} from './${f}'`).join('\n')
  const arr = files.map((_, i) => `  deck${i},`).join('\n')
  const content = `// AUTO-GEGENEREERD door scripts/generate-flashcards.mjs - niet handmatig bewerken.
${imports}

export const ${slug}FlashcardDecks = [
${arr}
]

export default ${slug}FlashcardDecks
`
  fs.writeFileSync(path.join(outDir, 'index.js'), content, 'utf8')
}

// ─── LME-selectie uit lmeIndex ──────────────────────────────────────────────
async function loadLmes() {
  const lmeIndex = (await import(path.join('file://', SRC, 'data', 'lmeIndex.js').replace(/\\/g, '/'))).default
  return lmeIndex
}

// ─── Main ───────────────────────────────────────────────────────────────────
async function main() {
  const args = parseArgs(process.argv)
  if (!args.block) {
    console.error('Geef een blok op: --block=blok3|blok4|blok5|blok9|all')
    process.exit(1)
  }

  const lmeIndex = await loadLmes()
  const idToSource = buildIdToSource()

  // Bepaal doel-blokken.
  const targetBloks =
    args.block === 'all'
      ? ['Blok 3', 'Blok 4', 'Blok 5', 'Blok 9']
      : [`Blok ${args.block.replace(/^blok/i, '').trim()}`]

  const apiKey = loadApiKey()
  const engine = apiKey ? 'direct OpenAI (OPENAI_API_KEY)' : `proxy (${PROXY_URL})`
  const masterprompt = args.dryRun ? null : await loadMasterprompt()

  const grandTotals = { ok: 0, skipped: 0, failed: 0, unresolved: 0 }

  for (const blok of targetBloks) {
    const slug = blockSlug(blok) // blok5
    const outDir = path.join(DATA_DIR, `flashcards-${slug}`)
    fs.mkdirSync(outDir, { recursive: true })

    // Metadata-bron: standaard lmeIndex; met --ids-file een expliciete lijst
    // (nodig voor Blok 4, dat in lmeIndex onvolledig is — courseStructure-export).
    let entries
    if (args.idsFile) {
      entries = JSON.parse(fs.readFileSync(args.idsFile, 'utf8')).map((e) => ({
        id: e.id,
        name: e.name,
        blok,
        week: e.week,
        casus: e.casus,
        moduleKind: e.kind || e.moduleKind || 'lme',
      }))
    } else {
      entries = lmeIndex.filter((l) => l.blok === blok)
    }
    if (args.only) entries = entries.filter((l) => l.id === args.only)
    if (args.limit) entries = entries.slice(0, args.limit)

    console.log(`\n===== ${blok} (${slug}) | Engine: ${args.dryRun ? 'dry-run' : engine} | ${entries.length} LME's | concurrency=${args.concurrency} =====`)

    // Pre-filter (snel, geen API): bepaal welke entries echt gegenereerd moeten.
    const tasks = []
    for (const meta of entries) {
      const lme = {
        id: meta.id,
        name: meta.name,
        block: BLOCK_FULLNAMES[blok] || blok,
        week: meta.week,
        case: meta.casus,
        moduleKind: meta.moduleKind || 'lme',
      }
      const outPath = path.join(outDir, `${meta.id}.json`)
      if (args.skipExisting && fs.existsSync(outPath)) continue

      const source = idToSource.get(meta.id.normalize('NFC'))
      if (!source || (source.kind === 'dir' ? !fs.existsSync(source.dir) : !fs.existsSync(source.file))) {
        console.error(`✗ ${meta.id}: geen samenvattingsbron gevonden — overgeslagen`)
        grandTotals.unresolved++
        continue
      }
      const sourceText = extractSourceTextFrom(source)
      if (sourceText.length < MIN_SOURCE_CHARS) {
        console.error(`✗ ${meta.id}: bron te kort (${sourceText.length} tekens) — overgeslagen`)
        grandTotals.skipped++
        continue
      }
      if (sourceText.length > MAX_SOURCE_CHARS) {
        console.error(`✗ ${meta.id}: bron te groot (${sourceText.length} tekens, mis-resolutie) — overgeslagen`)
        grandTotals.skipped++
        continue
      }
      tasks.push({ lme, sourceText, outPath })
    }

    if (args.dryRun) {
      for (const t of tasks) console.log(`→ ${t.lme.name} (${t.sourceText.length} tekens) ... dry-run`)
      continue
    }

    // Concurrency-pool: meerdere generaties tegelijk (elk eigen output-bestand).
    let ok = 0
    let next = 0
    async function worker() {
      while (next < tasks.length) {
        const t = tasks[next++]
        try {
          const { parsed, usage } = await generateDeck({ apiKey, masterprompt, lme: t.lme, sourceText: t.sourceText })
          const cardCount = Array.isArray(parsed.cards) ? parsed.cards.length : 0
          const deck = {
            lmeId: t.lme.id,
            lmeName: t.lme.name,
            block: t.lme.block,
            week: t.lme.week,
            case: t.lme.case,
            moduleKind: t.lme.moduleKind,
            model: MODEL,
            generatedAt: new Date().toISOString(),
            sourceChars: t.sourceText.length,
            ...parsed,
          }
          fs.writeFileSync(t.outPath, JSON.stringify(deck, null, 2) + '\n', 'utf8')
          console.log(`✓ ${t.lme.name}: ${cardCount} kaarten (tokens: ${usage?.total_tokens ?? '?'})`)
          ok++
          grandTotals.ok++
        } catch (e) {
          console.error(`✗ ${t.lme.id}: ${e.message}`)
          grandTotals.failed++
        }
      }
    }
    await Promise.all(Array.from({ length: Math.max(1, args.concurrency) }, worker))

    if (ok > 0 || fs.readdirSync(outDir).some((f) => f.endsWith('.json'))) {
      writeIndex(outDir, `${slug}`)
      console.log(`${blok}: ${ok} nieuwe deck(s) → src/data/flashcards-${slug}/`)
    }
  }

  console.log(`\nKlaar. ok=${grandTotals.ok} kort/leeg=${grandTotals.skipped} zonder-map=${grandTotals.unresolved} fout=${grandTotals.failed}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
