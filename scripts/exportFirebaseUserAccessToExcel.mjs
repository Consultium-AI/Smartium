import {
  buildUserAccessRows,
} from './lib/firebaseUserAccessExport.mjs'
import { writeUserAccessExcel } from './lib/userAccessExcel.mjs'

function showHelp() {
  console.log(`
Export Firebase users naar lokaal Excel-bestand (.xlsx).

Usage:
  node scripts/exportFirebaseUserAccessToExcel.mjs

Output:
  output/firebase-user-status/user-access-status-<timestamp>.xlsx

Environment:
  Zelfde Firebase-admin credentials als automation:export-user-access-status.
`)
}

async function run() {
  const args = new Set(process.argv.slice(2))
  if (args.has('--help') || args.has('-h')) {
    showHelp()
    return
  }

  const rows = await buildUserAccessRows()
  const xlsxPath = await writeUserAccessExcel(rows)

  console.log(`Excel export voltooid: ${rows.length} gebruikers`)
  console.log(`XLSX: ${xlsxPath}`)
}

run().catch((err) => {
  console.error('[exportFirebaseUserAccessToExcel] failed:', err?.message || err)
  process.exitCode = 1
})
