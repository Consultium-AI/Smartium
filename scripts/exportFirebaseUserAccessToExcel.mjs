import fs from 'node:fs/promises'
import path from 'node:path'
import * as XLSX from 'xlsx'
import {
  ROOT_DIR,
  buildUserAccessRows,
  planLabel,
  accessSummary,
  toMillis,
} from './lib/firebaseUserAccessExport.mjs'

const OUTPUT_DIR = path.join(ROOT_DIR, 'output', 'firebase-user-status')

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

function toSheetRow(row) {
  const paidUntilMs = toMillis(row.paidUntil) || 0
  return {
    email: row.email || '',
    plan: planLabel(row.plan),
    toegang: accessSummary(row.status, paidUntilMs),
    status_technisch: row.status || '',
    betaald_tot_volgende_verlenging_utc: row.paidUntil || '',
    laatste_betaling_of_schatting_utc: row.paidAt || '',
    bron_betalingstijd: row.paidAtSource || '',
    laatste_login: row.lastSignInAt || '',
    auth_aangemaakt: row.authCreatedAt || '',
    uid: row.uid || '',
  }
}

async function run() {
  const args = new Set(process.argv.slice(2))
  if (args.has('--help') || args.has('-h')) {
    showHelp()
    return
  }

  const rows = await buildUserAccessRows()
  const sheetRows = rows.map(toSheetRow)

  const workbook = XLSX.utils.book_new()
  const worksheet = XLSX.utils.json_to_sheet(sheetRows, {
    header: [
      'email',
      'plan',
      'toegang',
      'status_technisch',
      'betaald_tot_volgende_verlenging_utc',
      'laatste_betaling_of_schatting_utc',
      'bron_betalingstijd',
      'laatste_login',
      'auth_aangemaakt',
      'uid',
    ],
  })

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Gebruikers')

  await fs.mkdir(OUTPUT_DIR, { recursive: true })
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const xlsxPath = path.join(OUTPUT_DIR, `user-access-status-${stamp}.xlsx`)
  XLSX.writeFile(workbook, xlsxPath, { compression: true })

  console.log(`Excel export voltooid: ${rows.length} gebruikers`)
  console.log(`XLSX: ${xlsxPath}`)
}

run().catch((err) => {
  console.error('[exportFirebaseUserAccessToExcel] failed:', err?.message || err)
  process.exitCode = 1
})
