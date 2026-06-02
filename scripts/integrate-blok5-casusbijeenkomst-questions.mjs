#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { CASUS_BIJEENKOMST, lmeIdForCasus } from './lib/casusBijeenkomstConfig.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const registryPath = path.join(ROOT, 'src', 'pages', 'PracticeQuestionsRegistry.jsx')

const BLOK5_CASE_NAMES = {
  1: 'Casus 1: De huid als succesvolle barrière',
  2: 'Casus 2: De veranderde barrière',
  3: 'Casus 3: Paarse vlek',
  4: 'Casus 4: Donkere vlek',
  6: 'Casus 6: Knobbel in de borst',
  7: 'Casus 7: Zwelling van de lies en/of een dik been',
  8: 'Casus 8: Zwelling in de oksel',
  9: 'Casus 9: Patiënt met auto-immuunziekte',
  10: 'Casus 10: Patiënt met auto-inflammatoire ziekte',
  11: 'Casus 11: Kind met algehele malaise, koorts en zwelling in de buik',
  12: 'Casus 12: Verwarde patiënt met griepachtige klachten',
  13: 'Casus 13: Multipel myeloom',
}

let sp = fs.readFileSync(registryPath, 'utf8')

if (!sp.includes('blok5CasusbijeenkomstQuestionsRegistry')) {
  const anchor = "import { blok5Week1Casus1DeHuidbarriereVanJongTotOudQuestionsMap }"
  sp = sp.replace(
    anchor,
    "import {\n  BLOK5_CASUSBIJEENKOMST_QUESTIONS_MAPS,\n  getCasusbijeenkomstQuestions,\n} from '../questions/blok5CasusbijeenkomstQuestionsRegistry.js'\n" + anchor
  )
}

if (!sp.includes('getCasusbijeenkomstQuestions(lmeParam)')) {
  const anchor = "  if (lmeParam === 'blok5-week1-casus1-de-huidbarriere-van-jong-tot-oud') {"
  sp = sp.replace(
    anchor,
    `  const casusCbQ = getCasusbijeenkomstQuestions(lmeParam)
  if (casusCbQ) return casusCbQ

${anchor}`
  )
}

for (const cfg of CASUS_BIJEENKOMST) {
  const id = lmeIdForCasus(cfg)
  const mapName = `blok5Week${cfg.week}Casus${cfg.num}CasusbijeenkomstQuestionsMap`
  const caseName = BLOK5_CASE_NAMES[cfg.num]
  if (!caseName || sp.includes(`id: '${id}'`)) continue

  const item = `              {
                id: '${id}',
                name: 'Casusbijeenkomst',
                type: 'simple',
                questionsMap: BLOK5_CASUSBIJEENKOMST_QUESTIONS_MAPS['${id}'],
              },
`
  const re = new RegExp(
    `(name: '${caseName.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}',\\r?\\n\\s+lmes: \\[)`,
    'm'
  )
  if (!re.test(sp)) {
    console.warn(`Case not found: ${caseName}`)
    continue
  }
  sp = sp.replace(re, `$1\n${item}`)
}

fs.writeFileSync(registryPath, sp, 'utf8')
console.log('Patched PracticeQuestionsRegistry.jsx')
