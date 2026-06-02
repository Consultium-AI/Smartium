#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { CASUS_BIJEENKOMST, lmeIdForCasus } from './lib/casusBijeenkomstConfig.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

function pascalFromSlug(slug) {
  return slug
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('')
}

function iconForTitle(title) {
  const t = title.toLowerCase()
  if (t.includes('leerdoel')) return 'BookOpen'
  if (t.includes('samenvatting')) return 'CircleCheck'
  if (t.includes('tabel')) return 'Table2'
  if (t.includes('diagnost')) return 'Microscope'
  if (t.includes('behandel') || t.includes('beleid')) return 'HeartPulse'
  if (t.includes('casus') || t.includes('klacht')) return 'Activity'
  return 'FileText'
}

export function emitSummaryComponent(cfg) {
  const outBase = path.join(
    ROOT,
    'src',
    'summaries',
    'samenvattingen-blok5',
    `week-${cfg.week}`,
    cfg.slug,
    'casusbijeenkomst'
  )
  const manifestPath = path.join(outBase, 'sections-manifest.json')
  if (!fs.existsSync(manifestPath)) {
    throw new Error(`Missing manifest: ${manifestPath}`)
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  const lmeId = lmeIdForCasus(cfg)
  const compName = `Blok5Week${cfg.week}Casus${cfg.num}CasusbijeenkomstSummary`
  const imports = manifest
    .map((s, i) => `import ${s.file} from './sections/${s.file}'`)
    .join('\n')
  const toc = manifest
    .map((s) => `    { id: '${s.id}', title: ${JSON.stringify(s.title)}, icon: ${iconForTitle(s.title)} },`)
    .join('\n')
  const sections = manifest
    .map(
      (s) => `    <section id="${s.id}" className="scroll-mt-24 mb-12">
      <${s.file} />
    </section>`
    )
    .join('\n')

  const content = `// Auto-generated casusbijeenkomst summary — do not edit by hand.
import {
  Activity,
  BookOpen,
  CircleCheck,
  FileText,
  HeartPulse,
  Microscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
${imports}

const tableOfContents = [
${toc}
]

const ${compName} = () => (
  <SummaryLayout
    title=${JSON.stringify(cfg.displayTitle)}
    moduleKind="casusbijeenkomst"
    description=${JSON.stringify(cfg.description)}
    caseLabel=${JSON.stringify(cfg.caseLabel)}
    blokLabel="Blok 5"
    practiceLink="/oefenvragen?lme=${lmeId}"
    tableOfContents={tableOfContents}
  >
${sections}
  </SummaryLayout>
)

export default ${compName}
`
  const outFile = path.join(outBase, `${compName}.jsx`)
  fs.writeFileSync(outFile, content, 'utf8')
  return { compName, lmeId, outFile }
}

export function emitRegistry() {
  const entries = []
  for (const cfg of CASUS_BIJEENKOMST) {
    const compName = `Blok5Week${cfg.week}Casus${cfg.num}CasusbijeenkomstSummary`
    const rel = `./samenvattingen-blok5/week-${cfg.week}/${cfg.slug}/casusbijeenkomst/${compName}.jsx`
    const full = path.join(ROOT, 'src', 'summaries', rel.replace(/^\.\//, ''))
    if (!fs.existsSync(full)) continue
    entries.push({ cfg, compName, rel })
  }
  const imports = entries
    .map((e) => `import ${e.compName} from '${e.rel}'`)
    .join('\n')
  const map = entries
    .map((e) => `  '${lmeIdForCasus(e.cfg)}': ${e.compName},`)
    .join('\n')
  const registry = `// Auto-generated — scripts/emit-casusbijeenkomst-summary.mjs
${imports}

export const BLOK5_CASUSBIJEENKOMST_SUMMARIES = {
${map}
}
`
  fs.writeFileSync(
    path.join(ROOT, 'src', 'summaries', 'blok5CasusbijeenkomstRegistry.js'),
    registry,
    'utf8'
  )
  return entries.length
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const arg = process.argv[2]
  if (arg === 'registry') {
    console.log(`Registry: ${emitRegistry()} summaries`)
  } else {
    const num = Number(arg)
    const cfg = CASUS_BIJEENKOMST.find((c) => c.num === num)
    if (!cfg) throw new Error(`Unknown casus ${arg}`)
    console.log(emitSummaryComponent(cfg))
  }
}
