#!/usr/bin/env node
/**
 * Leegt alle Blok 5 casusbijeenkomst-samenvattingen op de website.
 * Laat DOCX, screenshots, cache en oefenvragen ongemoeid.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { CASUS_BIJEENKOMST, lmeIdForCasus } from './lib/casusBijeenkomstConfig.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

function emitEmptySummary(cfg) {
  const outBase = path.join(
    ROOT,
    'src',
    'summaries',
    'samenvattingen-blok5',
    `week-${cfg.week}`,
    cfg.slug,
    'casusbijeenkomst'
  )
  const compName = `Blok5Week${cfg.week}Casus${cfg.num}CasusbijeenkomstSummary`
  const lmeId = lmeIdForCasus(cfg)

  const sectionsDir = path.join(outBase, 'sections')
  if (fs.existsSync(sectionsDir)) {
    fs.rmSync(sectionsDir, { recursive: true, force: true })
  }

  fs.writeFileSync(path.join(outBase, 'sections-manifest.json'), '[]\n', 'utf8')

  const content = `// Lege casusbijeenkomst — inhoud verwijderd via clear-blok5-casusbijeenkomst-website.mjs
import SummaryLayout from '../../../../../components/SummaryLayout'

const tableOfContents = []

const ${compName} = () => (
  <SummaryLayout
    title=${JSON.stringify(cfg.displayTitle)}
    moduleKind="casusbijeenkomst"
    description=""
    caseLabel=${JSON.stringify(cfg.caseLabel)}
    blokLabel="Blok 5"
    practiceLink="/oefenvragen?lme=${lmeId}"
    tableOfContents={tableOfContents}
  />
)

export default ${compName}
`
  fs.writeFileSync(path.join(outBase, `${compName}.jsx`), content, 'utf8')
  return outBase
}

function emitRegistry() {
  const imports = CASUS_BIJEENKOMST.map((cfg) => {
    const compName = `Blok5Week${cfg.week}Casus${cfg.num}CasusbijeenkomstSummary`
    const rel = `./samenvattingen-blok5/week-${cfg.week}/${cfg.slug}/casusbijeenkomst/${compName}.jsx`
    return { cfg, compName, rel }
  })
  const registry = `// Auto-generated — scripts/clear-blok5-casusbijeenkomst-website.mjs
${imports.map((e) => `import ${e.compName} from '${e.rel}'`).join('\n')}

export const BLOK5_CASUSBIJEENKOMST_SUMMARIES = {
${imports.map((e) => `  '${lmeIdForCasus(e.cfg)}': ${e.compName},`).join('\n')}
}
`
  fs.writeFileSync(
    path.join(ROOT, 'src', 'summaries', 'blok5CasusbijeenkomstRegistry.js'),
    registry,
    'utf8'
  )
}

for (const cfg of CASUS_BIJEENKOMST) {
  const out = emitEmptySummary(cfg)
  console.log(`Cleared: casus ${cfg.num} → ${out}`)
}
emitRegistry()
console.log(`\nDone: ${CASUS_BIJEENKOMST.length} lege casusbijeenkomsten op de website.`)
