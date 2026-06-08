#!/usr/bin/env node
/**
 * Genereer oefenvragen-DOCX per flankerend-onderwijs LM (Blok 10).
 *
 * Bron samenvatting: .cursor/flankerend-blok10-cache/{slug}/raw.md
 * Prompt: SS2B9/SS1B5-smartium/oefenvragen_prompt.txt
 * Output: SS1B10/oefenvragen flankerend onderwijs/*.docx
 *
 * Usage:
 *   node scripts/generate-blok10-flankerend-oefenvragen-docx.mjs --all
 *   node scripts/generate-blok10-flankerend-oefenvragen-docx.mjs --module casus-5-lmo-evaluatie
 *   node scripts/generate-blok10-flankerend-oefenvragen-docx.mjs --all --export-only
 */
import fs from 'fs'
import path from 'path'
import { execFileSync } from 'child_process'
import { fileURLToPath } from 'url'
import { loadSmartiumEnv } from './lib/loadSmartiumEnv.mjs'
import {
  discoverFlankerendModules,
  oefenvragenDocxFileName,
  SUMMARY_CACHE_DIR,
} from './lib/blok10FlankerendModules.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PROMPT_FILE = path.join(ROOT, 'SS2B9', 'SS1B5-smartium', 'oefenvragen_prompt.txt')
const OEFEN_CACHE_DIR = path.join(ROOT, '.cursor', 'flankerend-blok10-oefenvragen-cache')
const OUTPUT_DIR = path.join(ROOT, 'SS1B10', 'oefenvragen flankerend onderwijs')
const MD2DOCX = path.join(ROOT, 'scripts', 'markdown_to_docx.py')
const OPENAI_URL = 'https://api.openai.com/v1/chat/completions'

const args = process.argv.slice(2)
const allFlag = args.includes('--all')
const exportOnly = args.includes('--export-only')
const moduleArg = args.includes('--module') ? args[args.indexOf('--module') + 1] : null

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
          temperature: 0.45,
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

function stripDuplicateHeading(md) {
  return md.replace(/^#+\s*Oefenvragen\s*\n+/i, '').trim()
}

function writeIndex(exported) {
  const lines = [
    '# Oefenvragen flankerend onderwijs (Blok 10)',
    '',
    'Gegenereerd uit samenvattingen in `.cursor/flankerend-blok10-cache/` met `SS2B9/SS1B5-smartium/oefenvragen_prompt.txt`.',
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
  const summaryPath = path.join(SUMMARY_CACHE_DIR, mod.slug, 'raw.md')
  if (!fs.existsSync(summaryPath)) {
    console.warn(`Skip ${mod.slug}: geen samenvatting ${summaryPath}. Draai eerst generate-blok10-flankerend-docx.mjs --all`)
    return null
  }

  const cacheMod = path.join(OEFEN_CACHE_DIR, mod.slug)
  fs.mkdirSync(cacheMod, { recursive: true })
  const rawPath = path.join(cacheMod, 'oefenvragen.md')

  if (!exportOnly) {
    const summary = fs.readFileSync(summaryPath, 'utf8')
    const apiKey = env.OPENAI_API_KEY
    const model = env.LME_MODEL || 'gpt-5.4-mini'
    if (!apiKey) throw new Error('OPENAI_API_KEY missing (SS2B9/.env)')

    console.log(`\n=== Oefenvragen ${mod.casusLabel}: ${mod.name} ===`)
    const userContent = `Hier is de samenvatting van de e-module "${mod.name}" (${mod.casusLabel}, flankerend onderwijs):\n\n---\n${summary}\n---`

    const raw = await callOpenAI({
      apiKey,
      model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userContent },
      ],
      maxTokens: Number(process.env.LME_MAX_OUTPUT_TOKENS || 24000),
    })

    fs.writeFileSync(path.join(cacheMod, 'oefenvragen-response.txt'), raw, 'utf8')
    const body = stripDuplicateHeading(raw)
    const markdown = `## Oefenvragen\n\n${body}`
    fs.writeFileSync(rawPath, markdown, 'utf8')
    console.log(`  Wrote ${rawPath} (${markdown.length} chars)`)
  } else if (!fs.existsSync(rawPath)) {
    console.warn(`Skip ${mod.slug}: geen cache ${rawPath}`)
    return null
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  const fileName = oefenvragenDocxFileName(mod)
  const outFile = path.join(OUTPUT_DIR, fileName)
  const title = `${mod.displayTitle} — oefenvragen`
  execFileSync('python', [MD2DOCX, rawPath, outFile, title], { stdio: 'inherit', cwd: ROOT })
  console.log(`  DOCX → ${outFile}`)
  return { ...mod, fileName, outFile }
}

async function main() {
  const env = loadSmartiumEnv(ROOT)
  const systemPrompt = fs.readFileSync(PROMPT_FILE, 'utf8').trim()
  fs.mkdirSync(OEFEN_CACHE_DIR, { recursive: true })

  const allModules = discoverFlankerendModules()
  const targets = allFlag
    ? allModules
    : moduleArg
      ? allModules.filter((m) => m.slug === moduleArg || m.slug.includes(moduleArg))
      : []

  if (!targets.length) {
    console.error(`Geen modules. Gevonden: ${allModules.length}. Usage: --all | --module <slug>`)
    if (allModules.length) {
      for (const m of allModules) console.error(`  ${m.slug}`)
    }
    process.exit(1)
  }

  console.log(`Oefenvragen voor ${targets.length}/${allModules.length} flankerend LM's`)
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
  console.log(`\nKlaar: ${exported.length}/${targets.length} oefenvragen-DOCX in ${OUTPUT_DIR}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
