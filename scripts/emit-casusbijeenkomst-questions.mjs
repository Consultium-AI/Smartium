#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { CASUS_BIJEENKOMST, lmeIdForCasus } from './lib/casusBijeenkomstConfig.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const QUESTIONS_PER_PART = 5

function jsString(s) {
  return JSON.stringify(s)
}

function emitQuestionObject(q, indent = '  ') {
  const lines = [`${indent}{`, `${indent}  id: ${q.id},`]
  if (q.category) lines.push(`${indent}  category: ${jsString(q.category)},`)
  lines.push(`${indent}  question: ${jsString(q.question)},`)
  lines.push(`${indent}  options: [`)
  for (const o of q.options) {
    lines.push(`${indent}    { letter: ${jsString(o.letter)}, text: ${jsString(o.text)} },`)
  }
  lines.push(`${indent}  ],`)
  lines.push(`${indent}  correctAnswer: ${jsString(q.correctAnswer)},`)
  if (q.modelAnswer) lines.push(`${indent}  modelAnswer: ${jsString(q.modelAnswer)},`)
  lines.push(`${indent}},`)
  return lines.join('\n')
}

export function emitQuestionsForCasus(cfg, questions) {
  const lmeId = lmeIdForCasus(cfg)
  const slug = lmeId
  const outDir = path.join(ROOT, 'src', 'questions', slug)
  fs.mkdirSync(outDir, { recursive: true })

  const baseName = `Blok5Week${cfg.week}Casus${cfg.num}Casusbijeenkomst`
  const exportPrefix = `blok5Week${cfg.week}Casus${cfg.num}Casusbijeenkomst`
  const parts = []
  for (let i = 0; i < questions.length; i += QUESTIONS_PER_PART) {
    parts.push(questions.slice(i, i + QUESTIONS_PER_PART))
  }

  const partImports = []
  const partExports = []
  const mapEntries = []

  parts.forEach((chunk, idx) => {
    const partNum = String(idx + 1).padStart(2, '0')
    const partFile = `${baseName}QuestionsPart${partNum}.js`
    const exportName = `${exportPrefix}QuestionsPart${partNum}`
    const body = chunk.map((q) => emitQuestionObject(q)).join('\n')
    const content = `// Auto-generated casusbijeenkomst oefenvragen — casus ${cfg.num}
// Bron: samenvatting ${lmeId}

export const ${exportName} = [
${body}
]
`
    fs.writeFileSync(path.join(outDir, partFile), content, 'utf8')
    partImports.push(`import { ${exportName} } from './${partFile.replace('.js', '')}'`)
    partExports.push(exportName)
  })

  const mapName = `${exportPrefix}QuestionsMap`
  const indexContent = `// Auto-generated — scripts/emit-casusbijeenkomst-questions.mjs
${partImports.join('\n')}

export const ${mapName} = {
  '${lmeId}': [
${partExports.map((e) => `    ...${e},`).join('\n')}
  ],
}
`
  fs.writeFileSync(path.join(outDir, 'index.js'), indexContent, 'utf8')
  return { outDir, mapName, lmeId, count: questions.length }
}

export function emitQuestionsRegistry() {
  const entries = []
  for (const cfg of CASUS_BIJEENKOMST) {
    const lmeId = lmeIdForCasus(cfg)
    const indexPath = path.join(ROOT, 'src', 'questions', lmeId, 'index.js')
    if (!fs.existsSync(indexPath)) continue
    const mapName = `blok5Week${cfg.week}Casus${cfg.num}CasusbijeenkomstQuestionsMap`
    entries.push({
      cfg,
      lmeId,
      mapName,
      importPath: `../questions/${lmeId}`,
    })
  }

  const imports = entries
    .map((e) => `import { ${e.mapName} } from '${e.importPath}'`)
    .join('\n')
  const map = entries.map((e) => `  '${e.lmeId}': ${e.mapName},`).join('\n')

  const registry = `// Auto-generated — scripts/emit-casusbijeenkomst-questions.mjs
${imports}

export const BLOK5_CASUSBIJEENKOMST_QUESTIONS_MAPS = {
${map}
}

export function getCasusbijeenkomstQuestions(lmeParam) {
  const map = BLOK5_CASUSBIJEENKOMST_QUESTIONS_MAPS[lmeParam]
  if (!map) return null
  return Object.values(map).flat()
}
`
  fs.writeFileSync(path.join(ROOT, 'src', 'questions', 'blok5CasusbijeenkomstQuestionsRegistry.js'), registry, 'utf8')
  return entries.length
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const jsonPath = process.argv[2]
  const casusNum = Number(process.argv[3])
  if (!jsonPath || !casusNum) {
    console.error('Usage: node emit-casusbijeenkomst-questions.mjs <questions.json> <casusNum>')
    process.exit(1)
  }
  const cfg = CASUS_BIJEENKOMST.find((c) => c.num === casusNum)
  const questions = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))
  console.log(emitQuestionsForCasus(cfg, questions))
  console.log(`Registry: ${emitQuestionsRegistry()} maps`)
}
