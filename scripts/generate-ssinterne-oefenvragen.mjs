#!/usr/bin/env node
/**
 * Genereer SSInterne oefenvragen uit de al gegenereerde samenvattingen
 * (.cursor/ssinterne-cache/week-N/<slug>/raw.md), met de e-module
 * oefenvragen-masterprompt. Zelfde patroon als generate-sskindgyn-oefenvragen.mjs.
 *
 * Prompt: "tech -.../Smartium code-tech/smartium prompt oefenvragen e-module_vo.docx"
 * Output: src/questions/ssinterne-weekN-<slug>/*.js (zelfde bestandsconventie als
 * de bestaande blok9/blok10/sskindgyn oefenvragen).
 *
 * Usage:
 *   node scripts/generate-ssinterne-oefenvragen.mjs --list
 *   node scripts/generate-ssinterne-oefenvragen.mjs --module ecg
 *   node scripts/generate-ssinterne-oefenvragen.mjs --limit 1
 *   node scripts/generate-ssinterne-oefenvragen.mjs --all --skip-existing
 */
import fs from 'fs'
import path from 'path'
import { execFileSync } from 'child_process'
import { fileURLToPath } from 'url'
import { loadSmartiumEnv } from './lib/loadSmartiumEnv.mjs'
import { discoverModules, lmeIdForModule, moduleBasePascal, cacheRawMdPath, BLOK_LABEL } from './lib/ssinterneModules.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const EXTRACT_DOCX = path.join(ROOT, 'scripts', 'extract-docx-paras.mjs')
const OPENAI_URL = 'https://api.openai.com/v1/chat/completions'
const OUT_ROOT = path.join(ROOT, 'src', 'questions')

function findPromptDocx() {
  const techDir = fs.readdirSync(ROOT).find((n) => /^tech\s*-\d+/i.test(n))
  if (!techDir) throw new Error('tech -*/ prompt map niet gevonden')
  return path.join(ROOT, techDir, 'Smartium code-tech', 'smartium prompt oefenvragen e-module_vo.docx')
}

const args = process.argv.slice(2)
const allFlag = args.includes('--all')
const listFlag = args.includes('--list')
const moduleArg = args.includes('--module') ? args[args.indexOf('--module') + 1] : null
const limitArg = args.includes('--limit') ? Number(args[args.indexOf('--limit') + 1]) : null
const skipExisting = args.includes('--skip-existing')

function lowerFirst(s) {
  return s.charAt(0).toLowerCase() + s.slice(1)
}

async function callOpenAI({ apiKey, model, messages, maxTokens }, retries = 3) {
  let lastErr
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(OPENAI_URL, {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model,
          messages,
          temperature: 0.4,
          max_completion_tokens: maxTokens,
          response_format: { type: 'json_object' },
        }),
        signal: AbortSignal.timeout(300000),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error?.message || JSON.stringify(data))
      const content = data.choices?.[0]?.message?.content
      if (!content) throw new Error('Lege respons van het model.')
      return content
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

function buildUserPrompt(mod, sourceText) {
  return `De samenvatting van de e-module "${mod.displayTitle}" (${mod.weekLabel}, ${BLOK_LABEL}) is hieronder compleet. Maak nu de definitieve oefenvragen volgens je instructies.

SAMENVATTING:
${sourceText}

BELANGRIJKE OUTPUT-OVERRIDE (vervangt uitsluitend sectie 19 "Outputformat" van je instructies; alle andere regels — aantal, verdeling, kwaliteitseisen, vraagstijl — blijven volledig van kracht):
Output uitsluitend geldig JSON, geen markdown, geen code fences, geen commentaar. Gebruik exact dit schema:
{
  "questions": [
    { "id": 1, "type": "mc", "question": "...", "options": [{"letter":"A","text":"..."},{"letter":"B","text":"..."},{"letter":"C","text":"..."},{"letter":"D","text":"..."}], "correctAnswer": "B" },
    { "id": 11, "type": "open", "question": "...", "modelAnswer": "kort modelantwoord in 1-4 zinnen" }
  ]
}
Vraag 1 t/m 10: type "mc" met precies 4 opties (A-D). Vraag 11 t/m 15: type "open" met modelAnswer. Nummer de vragen doorlopend 1 t/m 15.`
}

function parseModelJson(content) {
  let txt = content.trim()
  const fence = txt.match(/```(?:json)?\s*([\s\S]*?)```/i)
  if (fence) txt = fence[1].trim()
  const first = txt.indexOf('{')
  const last = txt.lastIndexOf('}')
  const sliced = first !== -1 && last > first ? txt.slice(first, last + 1) : txt
  for (const candidate of [txt, sliced]) {
    try {
      return JSON.parse(candidate)
    } catch {
      /* volgende kandidaat proberen */
    }
  }
  throw new Error('geen geldige JSON gevonden in respons')
}

function toSiteQuestion(q) {
  if (q.type === 'open') {
    return {
      id: q.id,
      category: 'Open vraag',
      question: q.question,
      options: [
        { letter: 'A', text: 'Ik heb een eigen antwoord geformuleerd en vergelijk dit met het modelantwoord.' },
      ],
      correctAnswer: 'A',
      modelAnswer: q.modelAnswer,
    }
  }
  return {
    id: q.id,
    question: q.question,
    options: (q.options || []).map((o) => ({ letter: o.letter, text: o.text })),
    correctAnswer: q.correctAnswer,
  }
}

function jsLiteral(value, indent = '') {
  return JSON.stringify(value, null, 2)
    .split('\n')
    .map((line, i) => (i === 0 ? line : indent + line))
    .join('\n')
    .replace(/"([A-Za-z_][A-Za-z0-9_]*)":/g, '$1:')
}

function writePartFile(outDir, exportName, questions, bronComment) {
  const arrLiteral = jsLiteral(questions)
  const content = `// Bron: ${bronComment}\n\nexport const ${exportName} = ${arrLiteral}\n`
  fs.writeFileSync(path.join(outDir, `${exportName.charAt(0).toUpperCase() + exportName.slice(1)}.js`), content, 'utf8')
}

async function processModule(mod, env, systemPrompt) {
  const lmeIdCheck = lmeIdForModule(mod)
  if (skipExisting && fs.existsSync(path.join(OUT_ROOT, lmeIdCheck, 'index.js'))) {
    console.log(`Skip ${mod.slug}: bestaat al (--skip-existing)`)
    return null
  }
  const rawPath = cacheRawMdPath(ROOT, mod)
  if (!fs.existsSync(rawPath)) {
    console.warn(`Skip ${mod.slug}: geen samenvatting-cache (${rawPath}) — genereer eerst de samenvatting`)
    return null
  }
  const sourceText = fs.readFileSync(rawPath, 'utf8')

  const apiKey = env.OPENAI_API_KEY
  const model = env.LME_MODEL || 'gpt-5.4-mini'
  if (!apiKey) throw new Error('OPENAI_API_KEY missing (SS2B9/.env of .env)')

  console.log(`\n=== ${mod.weekLabel}: ${mod.name} ===`)
  console.log('  Generating oefenvragen...')
  const content = await callOpenAI({
    apiKey,
    model,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: buildUserPrompt(mod, sourceText) },
    ],
    maxTokens: 12000,
  })
  const parsed = parseModelJson(content)
  const questions = Array.isArray(parsed.questions) ? parsed.questions : []
  if (questions.length < 10) throw new Error(`te weinig vragen gegenereerd (${questions.length})`)

  const mcQuestions = questions.filter((q) => q.type !== 'open').map(toSiteQuestion)
  const openQuestions = questions.filter((q) => q.type === 'open').map(toSiteQuestion)

  const lmeId = lmeIdForModule(mod)
  const pascalBase = moduleBasePascal(mod)
  const camelBase = lowerFirst(pascalBase)
  const outDir = path.join(OUT_ROOT, lmeId)
  fs.mkdirSync(outDir, { recursive: true })

  const bronComment = `SSInterne samenvatting — ${mod.weekLabel}, ${mod.name} (auto-gegenereerd)`

  const parts = []
  // Part 1: vragen 1-5 (mc), Part 2: vragen 6-10 (mc), Part 3: vragen 11-15 (open)
  const mcPart1 = mcQuestions.slice(0, 5)
  const mcPart2 = mcQuestions.slice(5, 10)
  if (mcPart1.length) {
    const name = `${camelBase}QuestionsPart01`
    writePartFile(outDir, name, mcPart1, `${bronComment} (vragen 1-${mcPart1.length})`)
    parts.push(name)
  }
  if (mcPart2.length) {
    const name = `${camelBase}QuestionsPart02`
    writePartFile(outDir, name, mcPart2, `${bronComment} (vragen 6-${5 + mcPart2.length})`)
    parts.push(name)
  }
  if (openQuestions.length) {
    const name = `${camelBase}QuestionsPart03`
    writePartFile(outDir, name, openQuestions, `${bronComment} (open vragen)`)
    parts.push(name)
  }

  const mapName = `${camelBase}QuestionsMap`
  const allQuestions = [...mcPart1, ...mcPart2, ...openQuestions]
  const imports = parts.map((p) => `import { ${p} } from './${p.charAt(0).toUpperCase() + p.slice(1)}'`).join('\n')
  const spread = parts.map((p) => `    ...${p},`).join('\n')
  const indexContent = `${imports}\n\nexport const ${mapName} = {\n  '${lmeId}': [\n${spread}\n  ],\n}\n`
  fs.writeFileSync(path.join(outDir, 'index.js'), indexContent, 'utf8')

  console.log(`  ${allQuestions.length} vragen (${mcQuestions.length} mc, ${openQuestions.length} open) -> ${outDir}`)
  return { mod, lmeId, mapName, pascalBase, outDir, count: allQuestions.length }
}

async function main() {
  const env = loadSmartiumEnv(ROOT)
  const allModules = discoverModules(ROOT)

  if (listFlag) {
    console.log(`SSInterne modules: ${allModules.length}`)
    for (const m of allModules) console.log(`  [w${m.weekNum}] ${m.slug}`)
    return
  }

  const systemPrompt = execFileSync('node', [EXTRACT_DOCX, findPromptDocx()], { encoding: 'utf8' }).trim()

  let targets = allFlag
    ? allModules
    : moduleArg
      ? allModules.filter((m) => m.slug === moduleArg || m.slug.includes(moduleArg))
      : limitArg
        ? allModules.slice(0, limitArg)
        : []

  if (!targets.length) {
    console.error(`Geen modules geselecteerd (gevonden: ${allModules.length}).`)
    console.error('Usage: --list | --module <slug> | --limit N | --all')
    process.exit(1)
  }

  console.log(`Genereren: ${targets.length}/${allModules.length} modules`)
  let ok = 0
  const results = []
  for (const mod of targets) {
    try {
      const r = await processModule(mod, env, systemPrompt)
      if (r) { ok++; results.push(r) }
    } catch (e) {
      console.error(`FAILED ${mod.slug}:`, e.message)
    }
  }

  console.log(`\nKlaar: ${ok}/${targets.length} modules.`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
