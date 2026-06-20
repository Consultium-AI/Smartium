import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const raw = fs.readFileSync(path.join(root, '.cursor/stampfeitjes-extract.txt'), 'utf8')

const SKIP = new Set([
  'Blok 10 - irritante stampfeitjes',
  'Afkapwaarden, criteria, vaste koppels, percentages, volgordes en ezelsbruggen',
])

function parseFactLine(line) {
  const cleaned = line.replace(/^\u2022\s*/, '').replace(/^\uf0b7\s*/, '').trim()
  if (!cleaned) return null

  let mnemonic = ''
  let text = cleaned
  const mnIdx = cleaned.search(/\|\s*Ezelsbrug\s*:/i)
  if (mnIdx >= 0) {
    text = cleaned.slice(0, mnIdx).trim()
    mnemonic = cleaned.slice(mnIdx).replace(/^\|\s*Ezelsbrug\s*:\s*/i, '').trim()
  }

  const colonIdx = text.indexOf(':')
  if (colonIdx <= 0) return { term: text, text: '', mnemonic }

  const term = text.slice(0, colonIdx).trim()
  const body = text.slice(colonIdx + 1).trim()
  return { term, text: body, mnemonic }
}

function mergeFact(existing, addition) {
  if (!existing) return addition
  if (addition.text) existing.text = `${existing.text} ${addition.text}`.replace(/\s+/g, ' ').trim()
  if (addition.mnemonic && !existing.mnemonic) existing.mnemonic = addition.mnemonic
  if (!existing.term && addition.term) existing.term = addition.term
  return existing
}

const intro = []
const weeks = []
const vasteKoppels = []
const eindlijst = []

let mode = 'intro'
let currentWeek = null
let currentSubsection = null
let pendingFact = null
let inTable = false

const lines = raw.split(/\r?\n/)

for (const line of lines) {
  if (line.startsWith('===== PAGE')) continue

  const trimmed = line.trim()
  if (!trimmed || SKIP.has(trimmed)) continue

  if (trimmed === 'Doel en gebruik') {
    mode = 'intro'
    continue
  }

  if (/^Week \d+ - /.test(trimmed)) {
    if (pendingFact && currentSubsection) {
      currentSubsection.facts.push(pendingFact)
      pendingFact = null
    }
    mode = 'weeks'
    inTable = false
    currentWeek = { week: trimmed.replace(/^Week (\d+) - .*/, 'Week $1'), title: trimmed, subsections: [] }
    weeks.push(currentWeek)
    currentSubsection = null
    continue
  }

  if (trimmed === 'Vaste koppels en mini-tabellen') {
    if (pendingFact && currentSubsection) {
      currentSubsection.facts.push(pendingFact)
      pendingFact = null
    }
    mode = 'koppels'
    inTable = true
    continue
  }

  if (trimmed === 'Supersnelle eindlijst - als je nog 10 minuten hebt') {
    if (pendingFact && currentSubsection) {
      currentSubsection.facts.push(pendingFact)
      pendingFact = null
    }
    mode = 'eindlijst'
    inTable = false
    continue
  }

  if (mode === 'intro') {
    if (trimmed.startsWith('\u2022') || trimmed.startsWith('\uf0b7')) {
      const fact = parseFactLine(trimmed)
      if (fact) intro.push(fact)
    }
    continue
  }

  if (mode === 'koppels') {
    if (trimmed === 'Koppel Moet je direct weten') continue
    if (inTable) {
      // Two-column rows are single lines in extract; split on first long space gap is unreliable.
      // Most rows: "term explanation" - use heuristic: first token(s) before known patterns
      vasteKoppels.push(trimmed)
    }
    continue
  }

  if (mode === 'eindlijst') {
    if (trimmed.startsWith('\u2022') || trimmed.startsWith('\uf0b7')) {
      const fact = parseFactLine(trimmed)
      if (fact) eindlijst.push(fact)
    } else if (pendingFact) {
      pendingFact = mergeFact(pendingFact, { term: '', text: trimmed, mnemonic: '' })
    }
    continue
  }

  if (mode === 'weeks') {
    const isBullet = trimmed.startsWith('\u2022') || trimmed.startsWith('\uf0b7')

    if (isBullet) {
      if (pendingFact && currentSubsection) {
        currentSubsection.facts.push(pendingFact)
      }
      pendingFact = parseFactLine(trimmed)
      if (pendingFact?.text.endsWith('| Ezelsbrug:') || pendingFact?.text.endsWith('| Ezelsbrug')) {
        pendingFact.text = pendingFact.text.replace(/\|\s*Ezelsbrug\s*:?\s*$/i, '').trim()
        pendingFact._awaitMnemonic = true
      }
      continue
    }

    if (pendingFact?._awaitMnemonic) {
      pendingFact.mnemonic = `${pendingFact.mnemonic || ''} ${trimmed}`.trim()
      pendingFact._awaitMnemonic = false
      continue
    }

    if (pendingFact) {
      pendingFact = mergeFact(pendingFact, { term: '', text: trimmed, mnemonic: '' })
      continue
    }

    // subsection header
    currentSubsection = { title: trimmed, facts: [] }
    currentWeek.subsections.push(currentSubsection)
  }
}

if (pendingFact && currentSubsection) {
  delete pendingFact._awaitMnemonic
  currentSubsection.facts.push(pendingFact)
}

// Parse vaste koppels table rows into [koppel, moetWeten]
const parsedKoppels = vasteKoppels.map((row) => {
  const knownSplits = [
    ['2 van 3 criteria', 'acute pancreatitis'],
    ['Lipase/amylase >3x normaal', 'pancreatitiscriterium, niet genoeg voor beleid'],
    ['55-75 jaar + FIT elke 2 jaar', 'Nederlandse darmkankerscreening'],
    ['FIT positief', 'coloscopie'],
    ['Advanced adenoom', '>=10 mm of HGD of >25% villieus'],
    ['SAAG >=1,1', 'portale hypertensie'],
    ['Neutrofielen ascites >250/µL', 'SBP'],
    ['Milan', '1 tumor <=5 cm of max 3 tumoren <=3 cm'],
    ['AFP-model', 'diameter, aantal noduli, AFP'],
    ['GBS 0-1', 'vaak poliklinisch bij hoge GI-bloeding'],
    ['nCRT', '5 weken, 50,4 Gy, operatie volgt'],
    ['dCRT', '6 weken, 59,4 Gy, definitief zonder standaard operatie'],
    ['CYP-remmer', 'spiegel substraat stijgt'],
    ['CYP-inductor', 'spiegel substraat daalt'],
    ['Rifampicine', 'CYP3A4-inductor'],
    ['Itraconazol', 'CYP3A4-remmer'],
    ['PPI', 'H+/K+-ATPase'],
    ['H2-antagonist', 'histaminesignaal'],
    ['Barrett', 'zalmroze, Prague C/M, Seattle q2cm'],
    ['Achalasie', 'LES failure to relax + geen peristaltiek, HRM'],
    ['MMR-deficiëntie', 'Lynch en therapiekeuze'],
    ['MRF', 'mesorectale fascie'],
    ['EMVI', 'extramurale vene-invasie'],
    ['R1', 'marge <=0,1 mm'],
    ['TME', 'volledig mesorectum'],
    ['PME', 'deel mesorectum blijft, >=5 cm van tumor'],
    ['MCT', 'minder micellen nodig, makkelijker via bloed'],
    ['GLP-1', 'verzadiging, maaglediging trager, insuline glucose-afhankelijk'],
  ]
  for (const [left, right] of knownSplits) {
    if (row.startsWith(left)) return [left, right]
  }
  const idx = row.indexOf(' ')
  if (idx > 0) return [row.slice(0, idx), row.slice(idx + 1)]
  return [row, '']
})

const outPath = path.join(root, 'src/summaries/samenvattingen-b10/stampfeitjes-hele-blok/data.js')
fs.mkdirSync(path.dirname(outPath), { recursive: true })

const file = `export const INTRO = ${JSON.stringify(intro, null, 2)}

export const WEKEN = ${JSON.stringify(weeks, null, 2)}

export const VASTE_KOPPELS = ${JSON.stringify(parsedKoppels, null, 2)}

export const EINDLIJST = ${JSON.stringify(eindlijst, null, 2)}
`

fs.writeFileSync(outPath, file, 'utf8')

const factCount = weeks.reduce((n, w) => n + w.subsections.reduce((m, s) => m + s.facts.length, 0), 0)
console.log(`Wrote ${outPath}`)
console.log(`Intro: ${intro.length}, facts: ${factCount}, koppels: ${parsedKoppels.length}, eindlijst: ${eindlijst.length}`)
