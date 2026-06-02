#!/usr/bin/env node
/** Patch SummaryPage, lmeIndex, SummaryShared with casusbijeenkomst entries. */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { CASUS_BIJEENKOMST, lmeIdForCasus } from './lib/casusBijeenkomstConfig.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const summaryPagePath = path.join(ROOT, 'src', 'pages', 'SummaryPage.jsx')
const lmeIndexPath = path.join(ROOT, 'src', 'data', 'lmeIndex.js')
const summarySharedPath = path.join(ROOT, 'src', 'pages', 'summary', 'SummaryShared.jsx')

const registryImport =
  "import { BLOK5_CASUSBIJEENKOMST_SUMMARIES } from '../summaries/blok5CasusbijeenkomstRegistry.js'\n"

const routeBlock = `
  if (BLOK5_CASUSBIJEENKOMST_SUMMARIES[activeLme]) {
    const CasusbijeenkomstSummary = BLOK5_CASUSBIJEENKOMST_SUMMARIES[activeLme]
    return <CasusbijeenkomstSummary />
  }

`

function patchSummaryPage() {
  let sp = fs.readFileSync(summaryPagePath, 'utf8')
  if (!sp.includes('blok5CasusbijeenkomstRegistry')) {
    const anchor = "import Blok5Week1Casus1DeHuidbarriereVanJongTotOudSummary"
    sp = sp.replace(anchor, registryImport + anchor)
  }
  if (!sp.includes('BLOK5_CASUSBIJEENKOMST_SUMMARIES[activeLme]')) {
    sp = sp.replace(
      "  if (activeLme === 'blok5-week1-casus1-de-huidbarriere-van-jong-tot-oud') {",
      routeBlock + "  if (activeLme === 'blok5-week1-casus1-de-huidbarriere-van-jong-tot-oud') {"
    )
  }

  const BLOK5_CASE_NAMES = {
    1: 'Casus 1: De huid als succesvolle barrière',
    2: 'Casus 2: De veranderde barrière',
    3: 'Casus 3: Paarse vlek',
    4: 'Casus 4: Donkere vlek',
    6: 'Casus 6: Knobbel in de borst',
    7: 'Casus 7: Zwelling van de lies en of een dik been',
    8: 'Casus 8: Zwelling in de oksel',
    9: 'Casus 9: Patiënt met auto-immuunziekte',
    10: 'Casus 10: Patiënt met auto-inflammatoire ziekte',
    11: 'Casus 11: Kind met algehele malaise, koorts en zwelling in de buik',
    12: 'Casus 12: Verwarde patiënt met griepachtige klachten',
    13: 'Casus 13: Multipel myeloom',
  }

  for (const cfg of CASUS_BIJEENKOMST) {
    const id = lmeIdForCasus(cfg)
    const item = `                {
                  id: "${id}",
                  name: "Casusbijeenkomst",
                  available: true,
                  moduleKind: "casusbijeenkomst",
                },
`
    const caseName = BLOK5_CASE_NAMES[cfg.num]
    if (!caseName) continue
    if (sp.includes(`id: "${id}"`)) continue
    const re = new RegExp(
      `(name: "${caseName.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}",\\r?\\n\\s+lmes: \\[)`,
      'm'
    )
    if (!re.test(sp)) {
      console.warn(`Could not find case block for casus ${cfg.num}: ${caseName}`)
      continue
    }
    sp = sp.replace(re, `$1\n${item}`)
  }
  fs.writeFileSync(summaryPagePath, sp, 'utf8')
  console.log('Patched SummaryPage.jsx')
}

function patchLmeIndex() {
  let idx = fs.readFileSync(lmeIndexPath, 'utf8')
  const entries = []
  for (const cfg of CASUS_BIJEENKOMST) {
    const id = lmeIdForCasus(cfg)
    if (idx.includes(`id: "${id}"`)) continue
    const casusShort = `Casus ${cfg.num}`
    entries.push(
      `  { id: "${id}", name: "Casusbijeenkomst", blok: "Blok 5", week: "Week ${cfg.week}", casus: "${casusShort}", topics: "casusbespreking, klinisch redeneren, differentiaaldiagnose, kernstof bijeenkomst" },`
    )
  }
  if (!entries.length) {
    console.log('lmeIndex already has casusbijeenkomst entries')
    return
  }
  const anchor = '  { id: "blok5-week1-casus1-de-huidbarriere-van-jong-tot-oud"'
  idx = idx.replace(anchor, entries.join('\n') + '\n' + anchor)
  fs.writeFileSync(lmeIndexPath, idx, 'utf8')
  console.log(`Added ${entries.length} lmeIndex entries`)
}

function patchSummaryShared() {
  let sh = fs.readFileSync(summarySharedPath, 'utf8')
  const ids = CASUS_BIJEENKOMST.map((c) => `  '${lmeIdForCasus(c)}',`).join('\n')
  if (sh.includes(lmeIdForCasus(CASUS_BIJEENKOMST[0]))) {
    console.log('SummaryShared already updated')
    return
  }
  const anchor = "  'blok5-week1-casus1-huidtypen-met-invloed-van-uva-en-uvb',"
  sh = sh.replace(anchor, ids + '\n' + anchor)
  fs.writeFileSync(summarySharedPath, sh, 'utf8')
  console.log('Patched SummaryShared.jsx')
}

patchSummaryPage()
patchLmeIndex()
patchSummaryShared()
