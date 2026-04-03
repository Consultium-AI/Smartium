import fs from 'node:fs/promises'
import path from 'node:path'
import { ROOT_DIR, buildUserAccessRows, toCsv } from './lib/firebaseUserAccessExport.mjs'

const OUTPUT_DIR = path.join(ROOT_DIR, 'output', 'firebase-user-status')

function showHelp() {
  console.log(`
Export Firebase user access status (CSV + JSON).

Usage:
  node scripts/exportFirebaseUserAccessStatus.mjs

Environment:
  FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON   JSON string of a Firebase service account
  GOOGLE_APPLICATION_CREDENTIALS        Path to service account JSON
  FIREBASE_PROJECT_ID                   Optioneel als project id niet in JSON / .env staat
  VITE_FIREBASE_PROJECT_ID              Wordt uit .env gelezen (zelfde als frontend)

Zie .env.example voor details.
`)
}

async function run() {
  const args = new Set(process.argv.slice(2))
  if (args.has('--help') || args.has('-h')) {
    showHelp()
    return
  }

  const rows = await buildUserAccessRows()

  await fs.mkdir(OUTPUT_DIR, { recursive: true })
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const jsonPath = path.join(OUTPUT_DIR, `user-access-status-${stamp}.json`)
  const csvPath = path.join(OUTPUT_DIR, `user-access-status-${stamp}.csv`)

  await Promise.all([
    fs.writeFile(jsonPath, `${JSON.stringify(rows, null, 2)}\n`, 'utf8'),
    fs.writeFile(csvPath, toCsv(rows), 'utf8'),
  ])

  console.log(`Exported ${rows.length} users`)
  console.log(`JSON: ${jsonPath}`)
  console.log(`CSV:  ${csvPath}`)
}

run().catch((err) => {
  console.error('[exportFirebaseUserAccessStatus] failed:', err?.message || err)
  process.exitCode = 1
})
