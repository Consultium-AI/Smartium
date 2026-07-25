#!/usr/bin/env node
/**
 * Genereer SSInterne (Interne Geneeskunde) samenvattingen uit screenshots per
 * e-module, in dezelfde look als blok 5/10/SSKindgyn.
 *
 * Pijplijn per module (identiek aan generate-sskindgyn-samenvattingen.mjs):
 *   screenshots -> GPT vision notities (batches) -> definitieve markdown-samenvatting
 *   -> structure.json -> sectie-JSX + SectionShared -> container-component -> registry
 *
 * Prompt: "tech -.../Smartium code-tech/Smartium prompt samenvatting emodule_vo.docx"
 *
 * Usage:
 *   node scripts/generate-ssinterne-samenvattingen.mjs --list
 *   node scripts/generate-ssinterne-samenvattingen.mjs --module ecg
 *   node scripts/generate-ssinterne-samenvattingen.mjs --limit 1
 *   node scripts/generate-ssinterne-samenvattingen.mjs --all
 *   node scripts/generate-ssinterne-samenvattingen.mjs --module ecg --jsx-only
 */
import fs from 'fs'
import path from 'path'
import { execFileSync } from 'child_process'
import { fileURLToPath } from 'url'
import { loadSmartiumEnv } from './lib/loadSmartiumEnv.mjs'
import { markdownToBlocks } from './lib/sskindgynMarkdown.mjs'
import {
  discoverModules,
  outDirForModule,
  SECTION_SHARED,
} from './lib/ssinterneModules.mjs'
import { emitSummaryComponent, emitRegistry } from './emit-ssinterne-summary.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const EXTRACT_DOCX = path.join(ROOT, 'scripts', 'extract-docx-paras.mjs')
const GEN_SECTIONS = path.join(ROOT, 'scripts', 'gen_sskindgyn_sections.py')
const CACHE_DIR = path.join(ROOT, '.cursor', 'ssinterne-cache')
const OPENAI_URL = 'https://api.openai.com/v1/chat/completions'
const IMAGE_BATCH = 12

function findPromptDocx() {
  const techDir = fs.readdirSync(ROOT).find((n) => /^tech\s*-\d+/i.test(n))
  if (!techDir) throw new Error('tech -*/ prompt map niet gevonden')
  return path.join(ROOT, techDir, 'Smartium code-tech', 'Smartium prompt samenvatting emodule_vo.docx')
}

const args = process.argv.slice(2)
const allFlag = args.includes('--all')
const listFlag = args.includes('--list')
const jsxOnly = args.includes('--jsx-only')
const moduleArg = args.includes('--module') ? args[args.indexOf('--module') + 1] : null
const limitArg = args.includes('--limit') ? Number(args[args.indexOf('--limit') + 1]) : null
const skipExisting = args.includes('--skip-existing')

function sortMedia(files) {
  return files.sort((a, b) => a.localeCompare(b, 'nl', { numeric: true }))
}

function listMedia(folderPath) {
  const imageExts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif'])
  const docExts = new Set(['.pdf', '.docx'])
  const images = []
  const docs = []
  function walk(dir) {
    for (const entry of fs.readdirSync(dir)) {
      if (entry.startsWith('~')) continue
      const full = path.join(dir, entry)
      const st = fs.statSync(full)
      if (st.isDirectory()) walk(full)
      else {
        const ext = path.extname(entry).toLowerCase()
        if (imageExts.has(ext)) images.push(full)
        else if (docExts.has(ext)) docs.push(full)
      }
    }
  }
  walk(folderPath)
  return { images: sortMedia(images), docs: sortMedia(docs) }
}

function extractPdfText(filePath) {
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
    except Exception:
        print('', end='')
`
  try {
    return execFileSync('python', ['-c', py, filePath], { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 }).trim()
  } catch {
    return ''
  }
}

function extractDocxText(filePath) {
  try {
    return execFileSync('node', [EXTRACT_DOCX, filePath], { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 }).trim()
  } catch {
    return ''
  }
}

function extractDocTexts(docs) {
  const parts = []
  for (const doc of docs) {
    const ext = path.extname(doc).toLowerCase()
    let text = ext === '.pdf' ? extractPdfText(doc) : extractDocxText(doc)
    if (!text.trim()) text = `[${path.basename(doc)} — geen tekstextractie beschikbaar]`
    parts.push(`### ${path.basename(doc)}\n\n${text}`)
  }
  return parts.join('\n\n---\n\n')
}

function imageToDataUrl(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  const mime =
    ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : ext === '.gif' ? 'image/gif' : 'image/jpeg'
  const b64 = fs.readFileSync(filePath).toString('base64')
  return `data:${mime};base64,${b64}`
}

async function callOpenAI({ apiKey, model, messages, maxTokens }, retries = 3) {
  let lastErr
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
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
        signal: AbortSignal.timeout(300000),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error?.message || JSON.stringify(data))
      return data.choices?.[0]?.message?.content || ''
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

async function extractNotesFromBatch({ apiKey, model, mod, batch, batchIndex, totalBatches }) {
  const content = [
    {
      type: 'text',
      text: `E-module "${mod.name}" (${mod.weekLabel}, Interne Geneeskunde) — batch ${batchIndex + 1}/${totalBatches}. Noteer ALLE feitelijke inhoud uit deze afbeeldingen (tekst, tabellen, leerdoelen, kernstof, klinische relevantie). Geen samenvatting, alleen gestructureerde notities in het Nederlands.`,
    },
    ...batch.map((f) => ({ type: 'image_url', image_url: { url: imageToDataUrl(f), detail: 'high' } })),
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

async function generateFinalSummary({ apiKey, model, systemPrompt, mod, notes }) {
  const userText = `De upload is compleet. Hieronder staan alle notities uit de e-module "${mod.name}" (${mod.weekLabel}, Interne Geneeskunde), screenshots in volgorde. Maak nu één definitieve samenvatting volgens je instructies.\n\n${notes}`
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

function deriveDescription(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim()
    if (!t) continue
    const clean = t.replace(/^#{1,6}\s+/, '').replace(/\*\*/g, '').trim()
    if (/^leerdoelen$/i.test(clean)) continue
    if (clean.length <= 90 && !/[.!?]$/.test(clean)) continue
    if (/^[-*•]\s/.test(t)) continue
    let d = clean
    if (d.length > 240) d = d.slice(0, 237).replace(/\s+\S*$/, '') + '…'
    return d
  }
  return ''
}

async function processModule(mod, env, systemPrompt) {
  const outBase = outDirForModule(ROOT, mod)
  const sectionsDir = path.join(outBase, 'sections')
  const cacheMod = path.join(CACHE_DIR, `week-${mod.weekNum}`, mod.slug)
  fs.mkdirSync(cacheMod, { recursive: true })
  const rawPath = path.join(cacheMod, 'raw.md')
  const structPath = path.join(cacheMod, 'structure.json')

  if (skipExisting && fs.existsSync(path.join(outBase, 'sections-manifest.json')) && !jsxOnly) {
    console.log(`Skip ${mod.slug}: bestaat al (--skip-existing)`)
    return null
  }

  if (!jsxOnly) {
    const { images, docs } = listMedia(mod.folder)
    if (!images.length && !docs.length) {
      console.warn(`Skip ${mod.slug}: geen bronbestanden in ${mod.folder}`)
      return null
    }
    console.log(`\n=== ${mod.weekLabel}: ${mod.name} (${images.length} images, ${docs.length} pdf/docx) ===`)

    const apiKey = env.OPENAI_API_KEY
    const model = env.LME_MODEL || 'gpt-5.4-mini'
    if (!apiKey) throw new Error('OPENAI_API_KEY missing (SS2B9/.env of .env)')

    const noteParts = []
    if (images.length) {
      const batches = []
      for (let i = 0; i < images.length; i += IMAGE_BATCH) batches.push(images.slice(i, i + IMAGE_BATCH))
      for (let b = 0; b < batches.length; b++) {
        console.log(`  Extract batch ${b + 1}/${batches.length}...`)
        noteParts.push(
          await extractNotesFromBatch({ apiKey, model, mod, batch: batches[b], batchIndex: b, totalBatches: batches.length })
        )
      }
    }
    if (docs.length) {
      console.log(`  Extract tekst uit ${docs.length} pdf/docx...`)
      noteParts.push(extractDocTexts(docs))
    }
    const notes = noteParts.join('\n\n--- BATCH ---\n\n')
    fs.writeFileSync(path.join(cacheMod, 'notes.md'), notes, 'utf8')

    console.log('  Generating final summary...')
    const summary = await generateFinalSummary({ apiKey, model, systemPrompt, mod, notes })
    fs.writeFileSync(rawPath, summary, 'utf8')
    console.log(`  Wrote ${rawPath} (${summary.length} chars)`)
  } else if (!fs.existsSync(rawPath)) {
    throw new Error(`--jsx-only maar ontbrekende cache ${rawPath}`)
  }

  const markdown = fs.readFileSync(rawPath, 'utf8')
  const blocks = markdownToBlocks(markdown)
  fs.writeFileSync(structPath, JSON.stringify(blocks, null, 2), 'utf8')
  fs.mkdirSync(sectionsDir, { recursive: true })
  fs.writeFileSync(path.join(sectionsDir, 'SectionShared.jsx'), SECTION_SHARED, 'utf8')
  execFileSync('python', [GEN_SECTIONS, structPath, sectionsDir], { stdio: 'inherit', cwd: ROOT })

  const description = deriveDescription(markdown)
  const emitted = emitSummaryComponent(mod, { description })
  console.log(`  JSX: ${emitted.outFile}`)
  return { ...mod, ...emitted }
}

async function main() {
  const env = loadSmartiumEnv(ROOT)
  const allModules = discoverModules(ROOT)

  if (listFlag) {
    console.log(`SSInterne modules: ${allModules.length}`)
    for (const m of allModules) console.log(`  [w${m.weekNum}] ${m.slug}`)
    return
  }

  const systemPrompt = execFileSync('node', [EXTRACT_DOCX, findPromptDocx()], { encoding: 'utf8' }).trim()
  fs.mkdirSync(CACHE_DIR, { recursive: true })

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

  console.log(`Genereren: ${targets.length}/${allModules.length} modules`)
  let ok = 0
  for (const mod of targets) {
    try {
      if (await processModule(mod, env, systemPrompt)) ok++
    } catch (e) {
      console.error(`FAILED ${mod.slug}:`, e.message)
    }
  }

  const count = emitRegistry()
  console.log(`\nKlaar: ${ok}/${targets.length} samenvattingen. Registry: ${count} entries.`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
