/**
 * Genereert blok5SummaryModuleIds.js uit SummaryPage courseStructure + flankerend-split.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const { splitCasusModules } = await import('../src/utils/courseModuleKind.js')
const { FLANKEREND_MODULE_IDS_BY_CASE } = await import('../src/data/flankerendModuleIdsByCase.js')

const summaryPage = fs.readFileSync(path.join(root, 'src/pages/SummaryPage.jsx'), 'utf8')
const blok5Start = summaryPage.indexOf('blok5: {')
const blok9Start = summaryPage.indexOf('blok9: {')
const blok5Section = summaryPage.slice(blok5Start, blok9Start)

const casusNames = [...blok5Section.matchAll(/name: "(Casus [^"]+)"/g)].map((m) => m[1])
const allIds = [...blok5Section.matchAll(/id: "(blok5-[^"]+)"/g)].map((m) => m[1])

const groups = []
let buffer = []
let prevCasusKey = null
let nameIdx = 0

for (const id of allIds) {
  const casusKey = id.match(/^(blok5-week\d+-casus\d+)/)?.[1]
  if (!casusKey) continue
  if (casusKey !== prevCasusKey) {
    if (buffer.length) {
      groups.push({
        name: casusNames[nameIdx++] ?? casusKey,
        lmes: buffer.map((itemId) => ({ id: itemId, available: true })),
      })
      buffer = []
    }
    prevCasusKey = casusKey
  }
  buffer.push(id)
}
if (buffer.length) {
  groups.push({
    name: casusNames[nameIdx++] ?? prevCasusKey,
    lmes: buffer.map((itemId) => ({ id: itemId, available: true })),
  })
}

const ids = []
for (const casus of groups) {
  const { casusbijeenkomstItems, flankerendItems } = splitCasusModules(casus, FLANKEREND_MODULE_IDS_BY_CASE)
  for (const item of [...casusbijeenkomstItems, ...flankerendItems]) {
    ids.push(item.id)
  }
}

const outPath = path.join(root, 'src/data/blok5SummaryModuleIds.js')
const content = `// Auto-generated — scripts/emit-blok5-summary-order.mjs. Volgorde = cursusoverzicht.\nexport const BLOK5_SUMMARY_MODULE_IDS = ${JSON.stringify(ids, null, 2)}\n`
fs.writeFileSync(outPath, content)
console.log(`Wrote ${ids.length} ids (${groups.length} casussen)`)
