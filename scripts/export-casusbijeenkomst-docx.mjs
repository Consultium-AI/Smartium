#!/usr/bin/env node
/**
 * Export casusbijeenkomst summaries (raw.md cache) naar Word (.docx).
 * Standaard: alle DOCX in Casusbijeenkomst/samenvattingen/
 *
 * Usage:
 *   node scripts/export-casusbijeenkomst-docx.mjs --all
 *   node scripts/export-casusbijeenkomst-docx.mjs --casus 1
 *   node scripts/export-casusbijeenkomst-docx.mjs --all --also-mini   # kopie ook naar mini samenvattingen blok5
 */
import fs from 'fs'
import path from 'path'
import { execFileSync } from 'child_process'
import { fileURLToPath } from 'url'
import { CASUS_BIJEENKOMST } from './lib/casusBijeenkomstConfig.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const CACHE_DIR = path.join(ROOT, '.cursor', 'casusbijeenkomst-cache')
const OUTPUT_DIR = path.join(ROOT, 'Casusbijeenkomst', 'samenvattingen')
const MINI_ROOT = path.join(ROOT, 'mini samenvattingen blok5')
const MD2DOCX = path.join(ROOT, 'scripts', 'markdown_to_docx.py')

const args = process.argv.slice(2)
const allFlag = args.includes('--all')
const alsoMini = args.includes('--also-mini')
const casusArg = args.includes('--casus') ? Number(args[args.indexOf('--casus') + 1]) : null

function findMiniCasusDir(casusNum) {
  if (!fs.existsSync(MINI_ROOT)) return null
  const prefix = `Casus ${casusNum} -`
  for (const weekDir of fs.readdirSync(MINI_ROOT)) {
    const weekPath = path.join(MINI_ROOT, weekDir)
    if (!fs.statSync(weekPath).isDirectory()) continue
    for (const name of fs.readdirSync(weekPath)) {
      if (name.startsWith(prefix)) return path.join(weekPath, name)
    }
  }
  return null
}

function docxFileName(cfg) {
  const short = cfg.displayTitle.replace(/^Casusbijeenkomst:\s*/i, '').trim()
  const safe = short.replace(/[/\\]/g, '-')
  const num = String(cfg.num).padStart(2, '0')
  return `Casus ${num} – ${safe} – samenvatting.docx`
}

function writeIndex(exported) {
  const lines = [
    '# Casusbijeenkomst-samenvattingen (Blok 5)',
    '',
    'Gegenereerd uit `Casusbijeenkomst/` (screenshots/PDF) met system prompt `Smartium prompt CASUS SAMENVATTING.docx`.',
    '',
    '| Casus | Bestand |',
    '|-------|---------|',
    ...exported
      .sort((a, b) => a.num - b.num)
      .map((e) => `| ${e.num} | ${e.fileName} |`),
    '',
  ]
  fs.writeFileSync(path.join(OUTPUT_DIR, 'LEESMIJ.md'), lines.join('\n'), 'utf8')
}

function exportCasus(cfg) {
  const rawPath = path.join(CACHE_DIR, `casus-${cfg.num}`, 'raw.md')
  if (!fs.existsSync(rawPath)) {
    console.warn(`Skip casus ${cfg.num}: geen ${rawPath}. Draai eerst: node scripts/generate-blok5-casusbijeenkomst.mjs --casus ${cfg.num} --docx-only`)
    return null
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  const fileName = docxFileName(cfg)
  const outFile = path.join(OUTPUT_DIR, fileName)
  const title = cfg.displayTitle

  execFileSync('python', [MD2DOCX, rawPath, outFile, title], { stdio: 'inherit', cwd: ROOT })
  console.log(`  → ${outFile}`)

  if (alsoMini) {
    const miniDir = findMiniCasusDir(cfg.num)
    if (miniDir) {
      const miniFile = path.join(miniDir, `Casusbijeenkomst – ${fileName.replace(/^Casus \d+ – /, '').replace(/ – samenvatting\.docx$/, '')} samenvatting.docx`)
      try {
        fs.copyFileSync(outFile, miniFile)
      } catch {
        fs.copyFileSync(outFile, path.join(miniDir, fileName))
      }
    }
  }

  return { num: cfg.num, fileName, outFile }
}

function main() {
  const targets = allFlag
    ? CASUS_BIJEENKOMST
    : casusArg
      ? CASUS_BIJEENKOMST.filter((c) => c.num === casusArg)
      : []

  if (!targets.length) {
    console.error('Usage: node scripts/export-casusbijeenkomst-docx.mjs --all | --casus N')
    process.exit(1)
  }

  const exported = []
  for (const cfg of targets) {
    try {
      const r = exportCasus(cfg)
      if (r) exported.push(r)
    } catch (e) {
      console.error(`Casus ${cfg.num} FAILED:`, e.message)
    }
  }
  if (exported.length) writeIndex(exported)
  console.log(`\nExported ${exported.length}/${targets.length} DOCX → ${OUTPUT_DIR}`)
}

main()
