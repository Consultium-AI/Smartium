#!/usr/bin/env node
/**
 * Generate Blok 5 casusbijeenkomst summaries from Casusbijeenkomst/ images via GPT-5.4 mini.
 *
 * Usage:
 *   node scripts/generate-blok5-casusbijeenkomst.mjs --all
 *   node scripts/generate-blok5-casusbijeenkomst.mjs --casus 1
 *   node scripts/generate-blok5-casusbijeenkomst.mjs --casus 1 --jsx-only   # skip API if raw.md exists
 *   node scripts/generate-blok5-casusbijeenkomst.mjs --all --docx-only      # alleen GPT + DOCX in Casusbijeenkomst/samenvattingen/
 */
import fs from 'fs'
import path from 'path'
import { execFileSync } from 'child_process'
import { fileURLToPath } from 'url'
import { CASUS_BIJEENKOMST, lmeIdForCasus } from './lib/casusBijeenkomstConfig.mjs'
import { loadSmartiumEnv } from './lib/loadSmartiumEnv.mjs'
import { markdownToStructure } from './lib/markdownToStructure.mjs'
import { emitSummaryComponent, emitRegistry } from './emit-casusbijeenkomst-summary.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PROMPT_DOCX = path.join(ROOT, 'Casusbijeenkomst', 'Smartium prompt CASUS SAMENVATTING.docx')
const INPUT_DIR = path.join(ROOT, 'Casusbijeenkomst')
const CACHE_DIR = path.join(ROOT, '.cursor', 'casusbijeenkomst-cache')
const OPENAI_URL = 'https://api.openai.com/v1/chat/completions'
const IMAGE_BATCH = 12

const args = process.argv.slice(2)
const allFlag = args.includes('--all')
const jsxOnly = args.includes('--jsx-only')
const docxOnly = args.includes('--docx-only')
const casusArg = args.includes('--casus') ? Number(args[args.indexOf('--casus') + 1]) : null

function loadSystemPrompt() {
  const out = execFileSync(
    'node',
    [path.join(ROOT, 'scripts', 'extract-docx-paras.mjs'), PROMPT_DOCX],
    { encoding: 'utf8' }
  )
  return out.trim()
}

function sortMedia(files) {
  return files.sort((a, b) => a.localeCompare(b, 'nl', { numeric: true }))
}

function extractPdfText(filePath) {
  const cacheTxt = path.join(CACHE_DIR, `pdf-${path.basename(filePath)}.txt`)
  if (fs.existsSync(cacheTxt)) return fs.readFileSync(cacheTxt, 'utf8')

  const py = `import sys
try:
    from pypdf import PdfReader
    r = PdfReader(sys.argv[1])
    print('\\n'.join((p.extract_text() or '') for p in r.pages))
except Exception:
    try:
        import PyPDF2
        r = PyPDF2.PdfReader(open(sys.argv[1],'rb'))
        print('\\n'.join((p.extract_text() or '') for p in r.pages))
    except Exception as e:
        print('', end='')
`
  try {
    const text = execFileSync('python', ['-c', py, filePath], { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 })
    if (text.trim()) {
      fs.writeFileSync(cacheTxt, text, 'utf8')
      return text
    }
  } catch {
    /* pypdf not installed */
  }
  return ''
}

function listMedia(folderPath) {
  const exts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.pdf'])
  return sortMedia(
    fs.readdirSync(folderPath).filter((f) => exts.has(path.extname(f).toLowerCase()))
  )
}

function imageToDataUrl(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  const mime =
    ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg'
  const b64 = fs.readFileSync(filePath).toString('base64')
  return `data:${mime};base64,${b64}`
}

async function callOpenAI({ apiKey, model, messages, maxTokens }) {
  const res = await fetch(OPENAI_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.35,
      max_completion_tokens: maxTokens,
    }),
  })
  const data = await res.json()
  if (!res.ok) {
    throw new Error(data?.error?.message || JSON.stringify(data))
  }
  return data.choices?.[0]?.message?.content || ''
}

async function extractNotesFromBatch({ apiKey, model, cfg, batch, batchIndex, totalBatches }) {
  const content = [
    {
      type: 'text',
      text: `Casusbijeenkomst ${cfg.displayTitle} — batch ${batchIndex + 1}/${totalBatches}. Noteer ALLE feitelijke inhoud uit deze afbeeldingen (tekst, tabellen, diagnoses, vragen, antwoorden). Geen samenvatting, alleen gestructureerde notities in het Nederlands.`,
    },
    ...batch.map((f) => ({
      type: 'image_url',
      image_url: { url: imageToDataUrl(f), detail: 'high' },
    })),
  ]
  return callOpenAI({
    apiKey,
    model,
    messages: [
      { role: 'system', content: 'Je bent een nauwkeurige transcriptie-assistent voor medisch onderwijsmateriaal.' },
      { role: 'user', content },
    ],
    maxTokens: 8000,
  })
}

async function generateFinalSummary({ apiKey, model, systemPrompt, cfg, notes, pdfTexts }) {
  const extra = pdfTexts.length
    ? `\n\nAanvullende tekst uit PDF-notities:\n${pdfTexts.join('\n\n---\n\n')}`
    : ''
  const userText = `De upload is compleet. Hieronder staan alle notities uit de casusbijeenkomst "${cfg.displayTitle}" (screenshots in volgorde). Maak nu één definitieve samenvatting volgens je instructies.\n\n${notes}${extra}`

  return callOpenAI({
    apiKey,
    model,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userText },
    ],
    maxTokens: Number(process.env.LME_MAX_OUTPUT_TOKENS || 32000),
  })
}

async function generateForCasus(cfg, env, systemPrompt) {
  const folderPath = path.join(INPUT_DIR, cfg.folder)
  if (!fs.existsSync(folderPath)) {
    console.warn(`Skip ${cfg.folder}: folder missing`)
    return false
  }

  const cacheCasus = path.join(CACHE_DIR, `casus-${cfg.num}`)
  fs.mkdirSync(cacheCasus, { recursive: true })
  const rawPath = path.join(cacheCasus, 'raw.md')
  const structPath = path.join(cacheCasus, 'structure.json')
  const outBase = path.join(
    ROOT,
    'src',
    'summaries',
    'samenvattingen-blok5',
    `week-${cfg.week}`,
    cfg.slug,
    'casusbijeenkomst'
  )
  const sectionsDir = path.join(outBase, 'sections')

  if (!jsxOnly && !docxOnly) {
    const media = listMedia(folderPath)
    const images = media
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .map((f) => path.join(folderPath, f))
    const pdfs = media
      .filter((f) => /\.pdf$/i.test(f))
      .map((f) => path.join(folderPath, f))

    if (!images.length && !pdfs.length) {
      console.warn(`Skip ${cfg.folder}: no images/pdf`)
      return false
    }

    console.log(`\n=== Casus ${cfg.num}: ${images.length} images, ${pdfs.length} pdf ===`)

    const apiKey = env.OPENAI_API_KEY
    const model = env.LME_MODEL || 'gpt-5.4-mini'
    if (!apiKey) throw new Error('OPENAI_API_KEY missing (SS2B9/.env)')

    let notes = ''
    if (images.length) {
      const batches = []
      for (let i = 0; i < images.length; i += IMAGE_BATCH) {
        batches.push(images.slice(i, i + IMAGE_BATCH))
      }
      const parts = []
      for (let b = 0; b < batches.length; b++) {
        console.log(`  Extract batch ${b + 1}/${batches.length}...`)
        parts.push(await extractNotesFromBatch({ apiKey, model, cfg, batch: batches[b], batchIndex: b, totalBatches: batches.length }))
      }
      notes = parts.join('\n\n--- BATCH ---\n\n')
      fs.writeFileSync(path.join(cacheCasus, 'notes.md'), notes, 'utf8')
    }

    const pdfTexts = []
    for (const pdf of pdfs) {
      let text = extractPdfText(pdf)
      if (!text.trim()) {
        text = `[PDF: ${path.basename(pdf)} — geen tekstextractie beschikbaar; inhoud ontbreekt in notities.]`
      }
      pdfTexts.push(text)
    }

    console.log('  Generating final summary...')
    const summary = await generateFinalSummary({ apiKey, model, systemPrompt, cfg, notes, pdfTexts })
    fs.writeFileSync(rawPath, summary, 'utf8')
    console.log(`  Wrote ${rawPath} (${summary.length} chars)`)
  } else if (jsxOnly && !fs.existsSync(rawPath)) {
    throw new Error(`--jsx-only but missing ${rawPath}`)
  }

  if (docxOnly && !fs.existsSync(rawPath)) {
    const media = listMedia(folderPath)
    const images = media.filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).map((f) => path.join(folderPath, f))
    const pdfs = media.filter((f) => /\.pdf$/i.test(f)).map((f) => path.join(folderPath, f))
    if (!images.length && !pdfs.length) {
      console.warn(`Skip ${cfg.folder}: no images/pdf`)
      return false
    }
    const apiKey = env.OPENAI_API_KEY
    const model = env.LME_MODEL || 'gpt-5.4-mini'
    if (!apiKey) throw new Error('OPENAI_API_KEY missing (SS2B9/.env)')
    console.log(`\n=== Casus ${cfg.num} (docx-only): ${images.length} images, ${pdfs.length} pdf ===`)
    let notes = ''
    if (images.length) {
      const batches = []
      for (let i = 0; i < images.length; i += IMAGE_BATCH) batches.push(images.slice(i, i + IMAGE_BATCH))
      const parts = []
      for (let b = 0; b < batches.length; b++) {
        console.log(`  Extract batch ${b + 1}/${batches.length}...`)
        parts.push(await extractNotesFromBatch({ apiKey, model, cfg, batch: batches[b], batchIndex: b, totalBatches: batches.length }))
      }
      notes = parts.join('\n\n--- BATCH ---\n\n')
      fs.writeFileSync(path.join(cacheCasus, 'notes.md'), notes, 'utf8')
    }
    const pdfTexts = []
    for (const pdf of pdfs) {
      let text = extractPdfText(pdf)
      if (!text.trim()) text = `[PDF: ${path.basename(pdf)} — geen tekstextractie.]`
      pdfTexts.push(text)
    }
    console.log('  Generating final summary...')
    const summary = await generateFinalSummary({ apiKey, model, systemPrompt, cfg, notes, pdfTexts })
    fs.writeFileSync(rawPath, summary, 'utf8')
    console.log(`  Wrote ${rawPath}`)
  }

  if (!docxOnly) {
    const markdown = fs.readFileSync(rawPath, 'utf8')
    const blocks = markdownToStructure(markdown)
    fs.writeFileSync(structPath, JSON.stringify(blocks, null, 2), 'utf8')
    fs.mkdirSync(sectionsDir, { recursive: true })
    execFileSync('python', [path.join(ROOT, 'scripts', 'gen_structure_sections.py'), structPath, sectionsDir], {
      stdio: 'inherit',
      cwd: ROOT,
    })
    const emitted = emitSummaryComponent(cfg)
    console.log(`  JSX: ${emitted.outFile}`)
  }

  try {
    const exportScript = path.join(ROOT, 'scripts', 'export-casusbijeenkomst-docx.mjs')
    execFileSync('node', [exportScript, '--casus', String(cfg.num)], { stdio: 'inherit', cwd: ROOT })
  } catch (e) {
    console.warn(`  DOCX export warning: ${e.message}`)
  }

  return true
}

async function main() {
  const env = loadSmartiumEnv(ROOT)
  const systemPrompt = loadSystemPrompt()
  fs.mkdirSync(CACHE_DIR, { recursive: true })

  const targets = allFlag
    ? CASUS_BIJEENKOMST
    : casusArg
      ? CASUS_BIJEENKOMST.filter((c) => c.num === casusArg)
      : []

  if (!targets.length) {
    console.error('Usage: node scripts/generate-blok5-casusbijeenkomst.mjs --all | --casus N')
    process.exit(1)
  }

  let ok = 0
  for (const cfg of targets) {
    try {
      if (await generateForCasus(cfg, env, systemPrompt)) ok++
    } catch (e) {
      console.error(`Casus ${cfg.num} FAILED:`, e.message)
    }
  }

  if (!docxOnly) emitRegistry()
  console.log(`\nDone: ${ok}/${targets.length} casusbijeenkomsten.${docxOnly ? ' DOCX in Casusbijeenkomst/samenvattingen/' : ' Registry updated.'}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
