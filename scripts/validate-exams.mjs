/**
 * Smartium — oefententamen-validator (House Standard v2.0)
 *
 * Draait alle harde kwaliteitspoorten uit docs/OEFENTENTAMEN-GENERATOR-v2.md
 * over één of meer tentamens en faalt met exit code 1 zodra een poort breekt.
 *
 *   node scripts/validate-exams.mjs                 # alle blokken
 *   node scripts/validate-exams.mjs ssinterne       # één blok
 *   node scripts/validate-exams.mjs ssinterne 1     # één tentamen
 *   node scripts/validate-exams.mjs --legacy        # ook oude blokken tegen de norm houden (rapport-only)
 *
 * De poorten zijn de machinaal controleerbare helft van de masterprompt.
 * Wat niet machinaal te toetsen is (medische juistheid, bronfideliteit) staat
 * in de prompt en hoort in de menselijke review.
 */

import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'
import os from 'node:os'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

// ─── House Standard ────────────────────────────────────────────
export const HOUSE = {
  casussen: 10,
  vragen: 40,
  totalPoints: 100,
  pointsPerCasus: 10,
  cesuur: 0.6,
  mcOptions: 4,
  mcPoints: 2,
  // toegestane spreiding van het juiste antwoord over A–D bij ~29 MC-vragen
  letterMin: 4,
  letterMax: 11,
  // maximaal aandeel MC waarbij het juiste antwoord toevallig de langste optie is
  maxLongestShare: 0.3,
  // een optie mag niet meer dan deze factor langer zijn dan het gemiddelde van de rest
  maxLengthRatio: 1.6,
  optionWordsMin: 1,
  optionWordsMax: 16,
  scenarioWordsMax: 70,
  // maximale Jaccard-overlap tussen twee vraagstammen binnen hetzelfde blok
  maxJaccard: 0.6,
}

const ABSOLUTE = /\b(altijd|nooit|uitsluitend|volledig|geen enkele|alle patiënten|iedere patiënt|in alle gevallen|zonder uitzondering)\b/i
const META =
  /\b(volgens de samenvatting|in de samenvatting|in de tekst|hierboven|hieronder|zoals eerder genoemd|onderstaande tabel|bovenstaande tabel|deze tabel|dit overzicht|de module|de bron|zie bijlage|in de bijlage)\b/i

const words = (s) => String(s ?? '').trim().split(/\s+/).filter(Boolean).length
const norm = (s) =>
  String(s ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9àáäâéèëêíìïîóòöôúùüûç ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

// ─── Bundelen (de exams zijn ESM met extensieloze imports) ─────
async function loadExams() {
  const esbuild = await import('esbuild')
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'smartium-exams-'))
  const entry = path.join(tmp, 'entry.mjs')
  const out = path.join(tmp, 'bundle.mjs')
  const reg = path.join(ROOT, 'src/registry/examBlokRegistry.js').replace(/\\/g, '/')
  fs.writeFileSync(entry, `export { EXAMS_BY_BLOK } from '${reg}'\n`)
  await esbuild.build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', outfile: out, logLevel: 'error' })
  const mod = await import(`file://${out.replace(/\\/g, '/')}`)
  fs.rmSync(tmp, { recursive: true, force: true })
  return mod.EXAMS_BY_BLOK
}

// ─── Poorten ───────────────────────────────────────────────────
function checkExam(exam, { strict }) {
  const errors = []
  const warnings = []
  const E = (gate, msg) => (strict ? errors : warnings).push(`[${gate}] ${msg}`)
  const W = (gate, msg) => warnings.push(`[${gate}] ${msg}`)

  const all = exam.casussen.flatMap((c) => c.questions)
  const mc = all.filter((q) => q.type === 'meerkeuze')

  // G1 — vaste vorm: elk tentamen even lang en gelijk opgebouwd
  if (exam.casussen.length !== HOUSE.casussen)
    E('G1-vorm', `${exam.casussen.length} casussen, norm is ${HOUSE.casussen}`)
  if (all.length !== HOUSE.vragen) E('G1-vorm', `${all.length} vragen, norm is ${HOUSE.vragen}`)
  if (exam.totalPoints !== HOUSE.totalPoints)
    E('G1-vorm', `totalPoints ${exam.totalPoints}, norm is ${HOUSE.totalPoints}`)
  if (exam.cesuur !== HOUSE.cesuur) E('G1-vorm', `cesuur ${exam.cesuur}, norm is ${HOUSE.cesuur}`)

  // G2 — punten kloppen exact (de klassieke fout in de oude tentamens)
  const sum = all.reduce((a, q) => a + (q.points || 0), 0)
  if (Math.abs(sum - exam.totalPoints) > 1e-9)
    errors.push(`[G2-punten] som van vraagpunten ${sum} ≠ totalPoints ${exam.totalPoints}`)
  for (const c of exam.casussen) {
    const cs = c.questions.reduce((a, q) => a + (q.points || 0), 0)
    if (Math.abs(cs - (c.totalPoints ?? NaN)) > 1e-9)
      errors.push(`[G2-punten] ${c.id}: som ${cs} ≠ totalPoints ${c.totalPoints}`)
    if (Math.abs(cs - HOUSE.pointsPerCasus) > 1e-9)
      E('G2-punten', `${c.id}: ${cs}p, norm is ${HOUSE.pointsPerCasus}p per casus`)
    if (words(c.scenario) > HOUSE.scenarioWordsMax)
      W('G2-scenario', `${c.id}: scenario ${words(c.scenario)} woorden (max ${HOUSE.scenarioWordsMax})`)
    if (!c.scenario) errors.push(`[G2-scenario] ${c.id}: geen scenario`)
  }

  // G3 — unieke ids en verplichte velden per type
  const ids = all.map((q) => q.id)
  const dupIds = [...new Set(ids.filter((x, i) => ids.indexOf(x) !== i))]
  if (dupIds.length) errors.push(`[G3-schema] dubbele vraag-ids: ${dupIds.join(', ')}`)

  for (const q of all) {
    const at = `${q.id}`
    if (!q.points || q.points <= 0) errors.push(`[G3-schema] ${at}: geen punten`)
    if (!q.question) errors.push(`[G3-schema] ${at}: geen vraagtekst`)
    if (!q.source) W('G3-bron', `${at}: geen source-veld (herleidbaarheid naar de samenvatting)`)

    switch (q.type) {
      case 'meerkeuze': {
        const opts = q.options ?? []
        if (opts.length !== HOUSE.mcOptions) errors.push(`[G3-schema] ${at}: ${opts.length} opties, norm is 4`)
        const letters = opts.map((o) => o.letter)
        if (new Set(letters).size !== letters.length) errors.push(`[G3-schema] ${at}: dubbele optieletters`)
        if (letters.join('') !== 'ABCD') errors.push(`[G3-schema] ${at}: optieletters zijn ${letters.join('')}, verwacht ABCD`)
        if (!letters.includes(q.correctAnswer)) errors.push(`[G3-schema] ${at}: correctAnswer ${q.correctAnswer} bestaat niet`)
        const texts = opts.map((o) => norm(o.text))
        if (new Set(texts).size !== texts.length) errors.push(`[G3-schema] ${at}: twee identieke opties`)
        if (!q.explanation) errors.push(`[G3-schema] ${at}: geen explanation`)
        break
      }
      case 'open': {
        if (!q.rubric) errors.push(`[G3-schema] ${at}: open vraag zonder rubric`)
        if (!q.modelAnswer) errors.push(`[G3-schema] ${at}: open vraag zonder modelAnswer`)
        if (!q.wordLimit) W('G3-schema', `${at}: open vraag zonder wordLimit`)
        // rubric moet net zoveel deelpunten benoemen als de vraag waard is
        const rubricPoints = [...String(q.rubric).matchAll(/(\d+(?:[.,]\d+)?)\s*p\b/g)].map((m) =>
          Number(m[1].replace(',', '.')),
        )
        const rsum = rubricPoints.reduce((a, b) => a + b, 0)
        if (rubricPoints.length && Math.abs(rsum - q.points) > 1e-9)
          E('G3-rubric', `${at}: rubriekpunten tellen op tot ${rsum}, vraag is ${q.points}p`)
        break
      }
      case 'koppelvraag': {
        const n = q.items?.length ?? 0
        if (!n) errors.push(`[G3-schema] ${at}: geen items`)
        if ((q.matchOptions?.length ?? 0) !== n)
          errors.push(`[G3-schema] ${at}: ${q.matchOptions?.length} matchOptions bij ${n} items`)
        const mapped = q.items.map((_, i) => q.correctMapping[i] ?? q.correctMapping[String(i)])
        if (mapped.some((x) => !x)) errors.push(`[G3-schema] ${at}: onvolledige correctMapping`)
        if (new Set(mapped).size !== n)
          errors.push(`[G3-schema] ${at}: mapping is niet bijectief — een categorie wordt hergebruikt`)
        if (mapped.join('') === q.matchOptions.map((o) => o.letter).join(''))
          E('G6-cue', `${at}: correcte koppeling loopt exact A-B-C-D — herschik de items`)
        break
      }
      case 'beeldvraag': {
        if (q.gradingMethod === 'order') {
          const a = [...(q.orderOptions ?? [])].sort()
          const b = [...(q.correctOrder ?? [])].sort()
          if (a.length !== b.length || a.some((x, i) => x !== b[i]))
            errors.push(`[G3-schema] ${at}: correctOrder is geen permutatie van orderOptions`)
          if ((q.orderOptions ?? []).join('|') === (q.correctOrder ?? []).join('|'))
            E('G6-cue', `${at}: de getoonde volgorde is al de juiste volgorde`)
          if (!q.rubric) errors.push(`[G3-schema] ${at}: volgordevraag zonder rubric`)
        }
        break
      }
      case 'rekenvraag': {
        if (typeof q.correctValue !== 'number') errors.push(`[G3-schema] ${at}: geen numerieke correctValue`)
        if (typeof q.tolerance !== 'number') errors.push(`[G3-schema] ${at}: geen tolerance`)
        if (!q.rubric) errors.push(`[G3-schema] ${at}: rekenvraag zonder rubric`)
        if (!q.modelAnswer) errors.push(`[G3-schema] ${at}: rekenvraag zonder uitgewerkt modelAnswer`)
        break
      }
      default:
        errors.push(`[G3-schema] ${at}: onbekend of niet-toegestaan vraagtype "${q.type}"`)
    }
  }

  // G4 — Answer Option Parity Gate
  let longestCount = 0
  for (const q of mc) {
    const cor = q.options.find((o) => o.letter === q.correctAnswer)
    if (!cor) continue
    const dis = q.options.filter((o) => o.letter !== q.correctAnswer)
    const cw = words(cor.text)
    const dws = dis.map((o) => words(o.text))
    if (cw > Math.max(...dws)) longestCount++

    for (const o of q.options) {
      const w = words(o.text)
      if (w < HOUSE.optionWordsMin || w > HOUSE.optionWordsMax)
        E('G4-pariteit', `${q.id}${o.letter}: ${w} woorden (norm ${HOUSE.optionWordsMin}–${HOUSE.optionWordsMax})`)
      const rest = q.options.filter((x) => x !== o).map((x) => words(x.text))
      const mean = rest.reduce((a, b) => a + b, 0) / rest.length
      if (w >= mean * HOUSE.maxLengthRatio && w - mean >= 3)
        E('G4-pariteit', `${q.id}${o.letter}: ${w} woorden vs gemiddeld ${mean.toFixed(1)} van de rest — lengte-uitschieter`)
    }

    // grammaticale parallelliteit: opties eindigen niet gemengd op een punt
    const withDot = q.options.filter((o) => /[.]$/.test(o.text.trim())).length
    if (withDot !== 0 && withDot !== q.options.length)
      E('G4-pariteit', `${q.id}: ${withDot} van 4 opties eindigt op een punt — niet parallel`)
  }
  if (mc.length && longestCount / mc.length > HOUSE.maxLongestShare)
    errors.push(
      `[G4-pariteit] het juiste antwoord is in ${longestCount}/${mc.length} MC-vragen de langste optie (${(
        (longestCount / mc.length) *
        100
      ).toFixed(0)}%, max ${HOUSE.maxLongestShare * 100}%)`,
    )

  // G5 — Blind Guess Audit (absolute woorden als verklikker)
  for (const q of mc) {
    const cor = q.options.find((o) => o.letter === q.correctAnswer)
    const dis = q.options.filter((o) => o.letter !== q.correctAnswer)
    if (!cor) continue
    const dAbs = dis.filter((o) => ABSOLUTE.test(o.text)).length
    if (dAbs >= 2 && !ABSOLUTE.test(cor.text))
      E('G5-blindguess', `${q.id}: ${dAbs} afleiders met absoluut woord terwijl het juiste antwoord er geen heeft`)
    if (ABSOLUTE.test(cor.text) && dAbs === 0)
      W('G5-blindguess', `${q.id}: alleen het juiste antwoord bevat een absoluut woord`)
  }

  // G6 — antwoordverdeling over A–D
  const letters = {}
  for (const q of mc) letters[q.correctAnswer] = (letters[q.correctAnswer] || 0) + 1
  for (const L of ['A', 'B', 'C', 'D']) {
    const n = letters[L] || 0
    if (n < HOUSE.letterMin || n > HOUSE.letterMax)
      E('G6-cue', `antwoord ${L} komt ${n}× voor (norm ${HOUSE.letterMin}–${HOUSE.letterMax}) — verdeling: ${JSON.stringify(letters)}`)
  }
  // geen lange reeks van hetzelfde antwoord
  let run = 1
  for (let i = 1; i < mc.length; i++) {
    run = mc[i].correctAnswer === mc[i - 1].correctAnswer ? run + 1 : 1
    if (run >= 4) E('G6-cue', `${mc[i].id}: vier of meer MC-vragen op rij met hetzelfde juiste antwoord`)
  }

  // G7 — meta-taal / niet standalone
  for (const q of all) {
    const hay = `${q.question} ${(q.options ?? []).map((o) => o.text).join(' ')} ${(q.items ?? []).join(' ')}`
    if (META.test(hay)) errors.push(`[G7-meta] ${q.id}: meta-verwijzing ("${hay.match(META)[0]}")`)
  }

  // G8 — tautologische uitleg (uitleg herhaalt alleen de juiste optie)
  for (const q of mc) {
    const cor = q.options.find((o) => o.letter === q.correctAnswer)
    if (!cor || !q.explanation) continue
    if (norm(q.explanation).includes(norm(cor.text)) && words(q.explanation) <= words(cor.text) + 6)
      E('G8-uitleg', `${q.id}: uitleg herhaalt alleen de juiste optie, zonder reden`)
  }

  return { errors, warnings, stats: { mc: mc.length, vragen: all.length, punten: sum, letters, longestCount } }
}

function checkDuplicates(exams, { strict }) {
  const errors = []
  const warnings = []
  const items = exams.flatMap((e) => e.casussen.flatMap((c) => c.questions.map((q) => ({ e, q }))))
  const toks = items.map(({ q }) => new Set(norm(q.question).split(' ').filter((w) => w.length > 3)))
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      const a = toks[i]
      const b = toks[j]
      if (a.size < 5 || b.size < 5) continue
      let inter = 0
      for (const w of a) if (b.has(w)) inter++
      const jac = inter / (a.size + b.size - inter)
      if (jac >= HOUSE.maxJaccard) {
        const msg = `[G9-dubbelop] ${jac.toFixed(2)} overlap: ${items[i].e.id}/${items[i].q.id} ↔ ${items[j].e.id}/${items[j].q.id}\n    A: ${String(items[i].q.question).slice(0, 90)}\n    B: ${String(items[j].q.question).slice(0, 90)}`
        if (strict) errors.push(msg)
        else warnings.push(msg)
      }
    }
  }
  return { errors, warnings }
}

// ─── Runner ────────────────────────────────────────────────────
const args = process.argv.slice(2)
const legacy = args.includes('--legacy')
const positional = args.filter((a) => !a.startsWith('--'))
const wantBlok = positional[0] ?? null
const wantNr = positional[1] ? Number(positional[1]) : null

// blokken die aan de House Standard v2.0 gebouwd zijn
const STRICT_BLOKKEN = new Set(['ssinterne'])

const EXAMS_BY_BLOK = await loadExams()
let failed = 0
let checked = 0

for (const [blok, exams] of Object.entries(EXAMS_BY_BLOK)) {
  if (wantBlok && String(blok) !== String(wantBlok)) continue
  const strict = STRICT_BLOKKEN.has(String(blok))
  if (!strict && !legacy) continue

  const list = wantNr ? exams.slice(wantNr - 1, wantNr) : exams
  const blokErrors = []

  for (const exam of list) {
    checked++
    const { errors, warnings, stats } = checkExam(exam, { strict })
    const status = errors.length ? '✗' : '✓'
    console.log(
      `\n${status} ${exam.id} — ${stats.vragen} vragen · ${stats.punten}p · ${stats.mc} MC · letters ${JSON.stringify(
        stats.letters,
      )} · langste-antwoord ${stats.longestCount}/${stats.mc}`,
    )
    for (const e of errors) console.log(`   ERROR   ${e}`)
    for (const w of warnings) console.log(`   warn    ${w}`)
    blokErrors.push(...errors)
  }

  const dup = checkDuplicates(list, { strict })
  for (const d of dup.errors) console.log(`   ERROR   ${d}`)
  for (const d of dup.warnings) console.log(`   warn    ${d}`)
  blokErrors.push(...dup.errors)

  if (blokErrors.length) failed += blokErrors.length
}

console.log(
  `\n${failed ? '✗' : '✓'} ${checked} tentamen(s) gecontroleerd — ${failed} blokkerende bevinding(en).`,
)
process.exit(failed ? 1 : 0)
