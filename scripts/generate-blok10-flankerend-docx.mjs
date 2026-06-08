#!/usr/bin/env node
/**
 * Genereer Blok 10 flankerend-onderwijs LM-samenvattingen (LMO/LMV/STM/LME) als DOCX.
 *
 * Bron: SS1B10/Flankerend onderwijs casus (zip-mappen)
 * Prompt: SS2B9/SS1B5-smartium/system_prompt.txt
 * Output: SS1B10/samenvattingen flankerend onderwijs/*.docx
 *
 * Usage:
 *   node scripts/generate-blok10-flankerend-docx.mjs --all
 *   node scripts/generate-blok10-flankerend-docx.mjs --module "casus-5-lmo-evaluatie"
 *   node scripts/generate-blok10-flankerend-docx.mjs --all --export-only
 */
import fs from 'fs'
import path from 'path'
import { execFileSync } from 'child_process'
import { fileURLToPath } from 'url'
import { loadSmartiumEnv } from './lib/loadSmartiumEnv.mjs'

const EXTRACT_DOCX = path.join(path.dirname(fileURLToPath(import.meta.url)), 'extract-docx-paras.mjs')

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const INPUT_ROOT = path.join(ROOT, 'SS1B10')
const PROMPT_FILE = path.join(ROOT, 'SS2B9', 'SS1B5-smartium', 'system_prompt.txt')
const CACHE_DIR = path.join(ROOT, '.cursor', 'flankerend-blok10-cache')
const OUTPUT_DIR = path.join(ROOT, 'SS1B10', 'samenvattingen flankerend onderwijs')
const MD2DOCX = path.join(ROOT, 'scripts', 'markdown_to_docx.py')
const OPENAI_URL = 'https://api.openai.com/v1/chat/completions'
const IMAGE_BATCH = 12
const LM_PREFIX = /^(LME|LMO|LMV|STM)\b/i

const args = process.argv.slice(2)
const allFlag = args.includes('--all')
const exportOnly = args.includes('--export-only')
const moduleArg = args.includes('--module') ? args[args.indexOf('--module') + 1] : null

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function sortMedia(files) {
  return files.sort((a, b) => a.localeCompare(b, 'nl', { numeric: true }))
}

function discoverModules() {
  const modules = []
  if (!fs.existsSync(INPUT_ROOT)) return modules

  for (const zipName of fs.readdirSync(INPUT_ROOT)) {
    if (!zipName.startsWith('Flankerend onderwijs casus')) continue
    const zipPath = path.join(INPUT_ROOT, zipName)
    if (!fs.statSync(zipPath).isDirectory()) continue

    const innerName = fs
      .readdirSync(zipPath)
      .find((n) => n.startsWith('Flankerend onderwijs casus'))
    if (!innerName) continue

    const innerPath = path.join(zipPath, innerName)
    const casusMatch = innerName.match(/casus\s*(\d+)/i)
    if (!casusMatch) continue
    const casusNum = Number(casusMatch[1])

    for (const lmName of fs.readdirSync(innerPath)) {
      const lmPath = path.join(innerPath, lmName)
      if (!fs.statSync(lmPath).isDirectory()) continue
      if (!LM_PREFIX.test(lmName)) continue

      const slug = `casus-${casusNum}-${slugify(lmName)}`
      modules.push({
        casusNum,
        casusLabel: `Casus ${casusNum}`,
        name: lmName,
        folder: lmPath,
        slug,
        displayTitle: lmName,
      })
    }
  }

  return modules.sort((a, b) => a.casusNum - b.casusNum || a.name.localeCompare(b.name, 'nl'))
}

function listMedia(folderPath) {
  const imageExts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif'])
  const docExts = new Set(['.pdf', '.docx'])
  const images = []
  const docs = []
  function walk(dir) {
    for (const entry of fs.readdirSync(dir)) {
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
      text: `${mod.name} (flankerend onderwijs ${mod.casusLabel}) — batch ${batchIndex + 1}/${totalBatches}. Noteer ALLE feitelijke inhoud uit deze afbeeldingen (tekst, tabellen, leerdoelen, kernstof). Geen samenvatting, alleen gestructureerde notities in het Nederlands.`,
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

async function generateFinalSummary({ apiKey, model, systemPrompt, mod, notes }) {
  const userText = `Hieronder staan alle notities uit de e-module "${mod.name}" (${mod.casusLabel}, flankerend onderwijs). Maak nu één definitieve samenvatting volgens je instructies.\n\n${notes}`
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

function docxFileName(mod) {
  const safe = mod.name.replace(/[/\\]/g, '-')
  const num = String(mod.casusNum).padStart(2, '0')
  return `Casus ${num} – ${safe} – samenvatting.docx`
}

function writeIndex(exported) {
  const lines = [
    '# Samenvattingen flankerend onderwijs (Blok 10)',
    '',
    'Gegenereerd uit `SS1B10/Flankerend onderwijs casus */` met `SS2B9/SS1B5-smartium/system_prompt.txt`.',
    '',
    '| Casus | Module | Bestand |',
    '|-------|--------|---------|',
    ...exported
      .sort((a, b) => a.casusNum - b.casusNum || a.name.localeCompare(b.name, 'nl'))
      .map((e) => `| ${e.casusNum} | ${e.name} | ${e.fileName} |`),
    '',
  ]
  fs.writeFileSync(path.join(OUTPUT_DIR, 'LEESMIJ.md'), lines.join('\n'), 'utf8')
}

async function processModule(mod, env, systemPrompt) {
  const cacheMod = path.join(CACHE_DIR, mod.slug)
  fs.mkdirSync(cacheMod, { recursive: true })
  const rawPath = path.join(cacheMod, 'raw.md')

  if (!exportOnly) {
    const { images, docs } = listMedia(mod.folder)
    if (!images.length && !docs.length) {
      console.warn(`Skip ${mod.slug}: geen bronbestanden in ${mod.folder}`)
      return null
    }

    console.log(`\n=== ${mod.casusLabel}: ${mod.name} (${images.length} images, ${docs.length} pdf/docx) ===`)
    const apiKey = env.OPENAI_API_KEY
    const model = env.LME_MODEL || 'gpt-5.4-mini'
    if (!apiKey) throw new Error('OPENAI_API_KEY missing (SS2B9/.env)')

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
    console.warn(`Skip ${mod.slug}: geen cache ${rawPath}`)
    return null
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  const fileName = docxFileName(mod)
  const outFile = path.join(OUTPUT_DIR, fileName)
  execFileSync('python', [MD2DOCX, rawPath, outFile, mod.displayTitle], { stdio: 'inherit', cwd: ROOT })
  console.log(`  DOCX → ${outFile}`)
  return { ...mod, fileName, outFile }
}

async function main() {
  const env = loadSmartiumEnv(ROOT)
  const systemPrompt = fs.readFileSync(PROMPT_FILE, 'utf8').trim()
  fs.mkdirSync(CACHE_DIR, { recursive: true })

  const allModules = discoverModules()
  const targets = allFlag
    ? allModules
    : moduleArg
      ? allModules.filter((m) => m.slug === moduleArg || m.slug.includes(moduleArg))
      : []

  if (!targets.length) {
    console.error(`Geen modules. Gevonden: ${allModules.length}. Usage: --all | --module <slug>`)
    if (allModules.length) {
      console.error('Beschikbaar:')
      for (const m of allModules) console.error(`  ${m.slug}`)
    }
    process.exit(1)
  }

  console.log(`Flankerend LM modules: ${targets.length}/${allModules.length}`)
  const exported = []
  for (const mod of targets) {
    try {
      const r = await processModule(mod, env, systemPrompt)
      if (r) exported.push(r)
    } catch (e) {
      console.error(`FAILED ${mod.slug}:`, e.message)
    }
  }

  if (exported.length) writeIndex(exported)
  console.log(`\nKlaar: ${exported.length}/${targets.length} DOCX in ${OUTPUT_DIR}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
