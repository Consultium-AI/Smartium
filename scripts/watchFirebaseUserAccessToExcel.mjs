import crypto from 'node:crypto'
import { buildUserAccessRows } from './lib/firebaseUserAccessExport.mjs'
import { writeUserAccessExcel } from './lib/userAccessExcel.mjs'

const DEFAULT_INTERVAL_MS = 60_000

function showHelp() {
  console.log(`
Watch Firebase changes and auto-update local Excel export.

Usage:
  node scripts/watchFirebaseUserAccessToExcel.mjs [--interval-ms=60000]

Behavior:
  - Polls Firebase Auth + Firestore users
  - If rows changed (new registration/payment/update), rewrites:
    output/firebase-user-status/user-access-status-latest.xlsx
`)
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function hashRows(rows) {
  return crypto.createHash('sha256').update(JSON.stringify(rows)).digest('hex')
}

async function run() {
  const arg = process.argv.slice(2).find((a) => a.startsWith('--interval-ms='))
  const intervalMs = Math.max(
    10_000,
    Number(arg?.split('=')[1]) || DEFAULT_INTERVAL_MS,
  )

  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    showHelp()
    return
  }

  console.log(`[watchFirebaseUserAccessToExcel] gestart (interval ${intervalMs}ms)`)
  let lastHash = ''
  let firstRun = true

  while (true) {
    try {
      const rows = await buildUserAccessRows()
      const nextHash = hashRows(rows)
      if (firstRun || nextHash !== lastHash) {
        const path = await writeUserAccessExcel(rows, { latestOnly: true })
        const reason = firstRun ? 'initial export' : 'firebase change gedetecteerd'
        console.log(
          `[watchFirebaseUserAccessToExcel] ${reason}: ${rows.length} users -> ${path}`,
        )
        lastHash = nextHash
        firstRun = false
      } else {
        console.log('[watchFirebaseUserAccessToExcel] geen wijzigingen')
      }
    } catch (err) {
      console.error(
        '[watchFirebaseUserAccessToExcel] check mislukt:',
        err?.message || err,
      )
    }
    await sleep(intervalMs)
  }
}

run().catch((err) => {
  console.error('[watchFirebaseUserAccessToExcel] fatal:', err?.message || err)
  process.exitCode = 1
})

