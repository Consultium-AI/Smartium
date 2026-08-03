#!/usr/bin/env node
/**
 * Bouwt src/questions/blok6QuestionsRegistry.js: één samengevoegde map
 * (lmeId -> vragen-array) over alle gegenereerde Blok 6 oefenvragen-sets.
 * Wordt in PracticeQuestionsRegistry.jsx met één fallback-regel gebruikt
 * (net als lme5QuestionsMap etc. voor andere blokken). Zelfde patroon als
 * emit-ssinterne-questions-registry.mjs.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { discoverModules, lmeIdForModule, moduleBasePascal } from './lib/blok6Modules.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const QUESTIONS_ROOT = path.join(ROOT, 'src', 'questions')

function lowerFirst(s) {
  return s.charAt(0).toLowerCase() + s.slice(1)
}

function main() {
  const modules = discoverModules(ROOT)
  const entries = []
  for (const mod of modules) {
    const lmeId = lmeIdForModule(mod)
    const dir = path.join(QUESTIONS_ROOT, lmeId)
    if (!fs.existsSync(path.join(dir, 'index.js'))) continue
    const camelBase = lowerFirst(moduleBasePascal(mod))
    entries.push({ lmeId, mapName: `${camelBase}QuestionsMap` })
  }

  const imports = entries
    .map((e) => `import { ${e.mapName} } from './${e.lmeId}'`)
    .join('\n')
  const spreads = entries.map((e) => `  ...${e.mapName},`).join('\n')

  const content = `// Auto-generated — scripts/emit-blok6-questions-registry.mjs
${imports}

export const BLOK6_QUESTIONS_MAP = {
${spreads}
}
`
  fs.writeFileSync(path.join(QUESTIONS_ROOT, 'blok6QuestionsRegistry.js'), content, 'utf8')
  console.log(`Wrote blok6QuestionsRegistry.js: ${entries.length}/${modules.length} modules`)
}

main()
