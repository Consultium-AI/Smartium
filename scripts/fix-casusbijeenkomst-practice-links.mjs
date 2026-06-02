#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { CASUS_BIJEENKOMST, lmeIdForCasus } from './lib/casusBijeenkomstConfig.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

for (const cfg of CASUS_BIJEENKOMST) {
  const dir = path.join(
    ROOT,
    'src/summaries/samenvattingen-blok5',
    `week-${cfg.week}`,
    cfg.slug,
    'casusbijeenkomst'
  )
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('Summary.jsx'))) {
    const p = path.join(dir, f)
    const lmeId = lmeIdForCasus(cfg)
    let t = fs.readFileSync(p, 'utf8')
    t = t.replace(/practiceLink="[^"]*"/, `practiceLink="/oefenvragen?lme=${lmeId}"`)
    fs.writeFileSync(p, t)
    console.log('Fixed', lmeId)
  }
}
