#!/usr/bin/env node
/**
 * Generate oefenvragen for Blok 5 casusbijeenkomsten from cached summaries.
 *
 * Usage:
 *   node scripts/generate-blok5-casusbijeenkomst-questions.mjs --all
 *   node scripts/generate-blok5-casusbijeenkomst-questions.mjs --casus 1
 *   node scripts/generate-blok5-casusbijeenkomst-questions.mjs --casus 1 --emit-only
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { CASUS_BIJEENKOMST, lmeIdForCasus } from './lib/casusBijeenkomstConfig.mjs'
import { loadSmartiumEnv } from './lib/loadSmartiumEnv.mjs'
import {
  extractJsonFromResponse,
  normalizeQuestionsPayload,
  toAppQuestions,
} from './lib/parseOefenvragenJson.mjs'
import { emitQuestionsForCasus, emitQuestionsRegistry } from './emit-casusbijeenkomst-questions.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PROMPT_DOCX = path.join(ROOT, 'Casusbijeenkomst', 'Smartium prompt CASUS OEFENVRAGEN.docx')
const CACHE_DIR = path.join(ROOT, '.cursor', 'casusbijeenkomst-cache')
const OPENAI_URL = 'https://api.openai.com/v1/chat/completions'

const args = process.argv.slice(2)
const allFlag = args.includes('--all')
const emitOnly = args.includes('--emit-only')
const casusArg = args.includes('--casus') ? Number(args[args.indexOf('--casus') + 1]) : null

import { execFileSync } from 'child_process'

function loadHumanPrompt() {
  return execFileSync(
    'node',
    [path.join(ROOT, 'scripts', 'extract-docx-paras.mjs'), PROMPT_DOCX],
    { encoding: 'utf8' }
  ).trim()
}

const JSON_INSTRUCTION = `

OUTPUT-FORMAAT (verplicht):
Geef je antwoord UITSLUITEND als één JSON-object (geen andere tekst), tussen \`\`\`json en \`\`\`, met dit schema:
{
  "multipleChoice": [
    {
      "question": "string",
      "A": "string",
      "B": "string",
      "C": "string",
      "D": "string",
      "correct": "A|B|C|D",
      "category": "optioneel, bijv. Klinisch redeneren"
    }
  ],
  "open": [
    {
      "question": "string",
      "modelAnswer": "kort modelantwoord"
    }
  ]
}
Maak precies 20 multipleChoice en precies 10 open items.`

async function callOpenAI({ apiKey, model, systemPrompt, userContent, maxTokens }) {
  const res = await fetch(OPENAI_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userContent },
      ],
      temperature: 0.45,
      max_completion_tokens: maxTokens,
    }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data?.error?.message || JSON.stringify(data))
  return data.choices?.[0]?.message?.content || ''
}

async function generateForCasus(cfg, env, humanPrompt) {
  const cacheCasus = path.join(CACHE_DIR, `casus-${cfg.num}`)
  const summaryPath = path.join(cacheCasus, 'raw.md')
  const rawJsonPath = path.join(cacheCasus, 'oefenvragen-raw.json')
  const appJsonPath = path.join(cacheCasus, 'oefenvragen-app.json')

  if (!fs.existsSync(summaryPath)) {
    throw new Error(`Geen samenvatting: ${summaryPath}. Draai eerst generate-blok5-casusbijeenkomst.mjs`)
  }

  if (!emitOnly) {
    const summary = fs.readFileSync(summaryPath, 'utf8')
    const apiKey = env.OPENAI_API_KEY
    const model = env.LME_MODEL || 'gpt-5.4-mini'
    if (!apiKey) throw new Error('OPENAI_API_KEY ontbreekt')

    console.log(`\n=== Oefenvragen casus ${cfg.num} ===`)
    const userContent = `Hier is de samenvatting van de casusbespreking (${cfg.displayTitle}):\n\n---\n${summary}\n---\n\nMaak nu de oefenvragen volgens je instructies.${JSON_INSTRUCTION}`

    const raw = await callOpenAI({
      apiKey,
      model,
      systemPrompt: humanPrompt,
      userContent,
      maxTokens: 24000,
    })
    fs.writeFileSync(path.join(cacheCasus, 'oefenvragen-response.txt'), raw, 'utf8')

    const parsed = extractJsonFromResponse(raw)
    fs.writeFileSync(rawJsonPath, JSON.stringify(parsed, null, 2), 'utf8')

    const normalized = normalizeQuestionsPayload(parsed)
    const questions = toAppQuestions(normalized)
    if (questions.length < 25) {
      throw new Error(`Te weinig vragen (${questions.length}), verwacht ~30`)
    }
    fs.writeFileSync(appJsonPath, JSON.stringify(questions, null, 2), 'utf8')
    console.log(`  ${questions.length} vragen (${normalized.mc.length} MC, ${normalized.open.length} open)`)
  } else if (!fs.existsSync(appJsonPath)) {
    const raw = JSON.parse(fs.readFileSync(rawJsonPath, 'utf8'))
    const questions = toAppQuestions(normalizeQuestionsPayload(raw))
    fs.writeFileSync(appJsonPath, JSON.stringify(questions, null, 2), 'utf8')
  }

  const questions = JSON.parse(fs.readFileSync(appJsonPath, 'utf8'))
  const emitted = emitQuestionsForCasus(cfg, questions)
  console.log(`  JS: ${emitted.outDir} (${emitted.count} vragen)`)
  return true
}

async function main() {
  const env = loadSmartiumEnv(ROOT)
  const humanPrompt = loadHumanPrompt()

  const targets = allFlag
    ? CASUS_BIJEENKOMST
    : casusArg
      ? CASUS_BIJEENKOMST.filter((c) => c.num === casusArg)
      : []

  if (!targets.length) {
    console.error('Usage: node scripts/generate-blok5-casusbijeenkomst-questions.mjs --all | --casus N')
    process.exit(1)
  }

  let ok = 0
  for (const cfg of targets) {
    try {
      if (await generateForCasus(cfg, env, humanPrompt)) ok++
    } catch (e) {
      console.error(`Casus ${cfg.num} FAILED:`, e.message)
    }
  }

  const n = emitQuestionsRegistry()
  console.log(`\nKlaar: ${ok}/${targets.length} casussen. Registry: ${n} maps.`)
  console.log('Draai: node scripts/integrate-blok5-casusbijeenkomst-questions.mjs')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
