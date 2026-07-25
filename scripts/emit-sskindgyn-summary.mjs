#!/usr/bin/env node
/**
 * Emit de container-component + registry voor SSKindgyn samenvattingen.
 * Wordt aangeroepen door scripts/generate-sskindgyn-samenvattingen.mjs.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import {
  discoverModules,
  moduleCompName,
  lmeIdForModule,
  outDirForModule,
} from './lib/sskindgynModules.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

function iconForTitle(title) {
  const t = title.toLowerCase()
  if (t.includes('leerdoel')) return 'BookOpen'
  if (t.includes('samenvatting')) return 'CircleCheck'
  if (t.includes('tabel')) return 'Table2'
  if (t.includes('diagnost') || t.includes('onderzoek')) return 'Microscope'
  if (t.includes('behandel') || t.includes('beleid') || t.includes('therap')) return 'HeartPulse'
  if (t.includes('anatom') || t.includes('fysiolog') || t.includes('bouw')) return 'Layers'
  if (t.includes('casus') || t.includes('klacht') || t.includes('symptoom')) return 'Activity'
  return 'FileText'
}

const ICON_IMPORTS = [
  'Activity',
  'BookOpen',
  'CircleCheck',
  'FileText',
  'HeartPulse',
  'Layers',
  'Microscope',
  'Table2',
]

export function emitSummaryComponent(mod, meta = {}) {
  const outBase = outDirForModule(ROOT, mod)
  const manifestPath = path.join(outBase, 'sections-manifest.json')
  if (!fs.existsSync(manifestPath)) {
    throw new Error(`Missing manifest: ${manifestPath}`)
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  const lmeId = lmeIdForModule(mod)
  const compName = moduleCompName(mod)

  const imports = manifest.map((s) => `import ${s.file} from './sections/${s.file}'`).join('\n')
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

  const description =
    meta.description || `Studeerbare samenvatting van de e-module ${mod.displayTitle}.`

  const content = `// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module ${mod.slug}
import {
${ICON_IMPORTS.map((n) => `  ${n},`).join('\n')}
} from 'lucide-react'
import SummaryLayout from '../../../../components/SummaryLayout'
${imports}

const tableOfContents = [
${toc}
]

const ${compName} = () => (
  <SummaryLayout
    title=${JSON.stringify(mod.displayTitle)}
    description=${JSON.stringify(description)}
    caseLabel=${JSON.stringify(mod.caseLabel)}
    blokLabel=${JSON.stringify('Kindergeneeskunde & Gynaecologie')}
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
  for (const mod of discoverModules(ROOT)) {
    const compName = moduleCompName(mod)
    const outBase = outDirForModule(ROOT, mod)
    const compFile = path.join(outBase, `${compName}.jsx`)
    if (!fs.existsSync(compFile)) continue
    const rel = `./samenvattingen-sskindgyn/week-${mod.weekNum}/${mod.slug}/${compName}.jsx`
    entries.push({ mod, compName, rel })
  }
  const imports = entries.map((e) => `import ${e.compName} from '${e.rel}'`).join('\n')
  const map = entries.map((e) => `  '${lmeIdForModule(e.mod)}': ${e.compName},`).join('\n')
  const registry = `// Auto-generated — scripts/emit-sskindgyn-summary.mjs
${imports}

export const SSKINDGYN_SUMMARIES = {
${map}
}
`
  fs.writeFileSync(
    path.join(ROOT, 'src', 'summaries', 'sskindgynSummariesRegistry.js'),
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
    console.error('Usage: node scripts/emit-sskindgyn-summary.mjs registry')
  }
}
