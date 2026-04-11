import fs from 'node:fs/promises'
import path from 'node:path'
import * as XLSX from 'xlsx'
import { ROOT_DIR, planLabel, accessSummary, toMillis } from './firebaseUserAccessExport.mjs'

export const OUTPUT_DIR = path.join(ROOT_DIR, 'output', 'firebase-user-status')

export function toSheetRow(row, excelRowNumber, numberingStartRow = 18) {
  const paidUntilMs = toMillis(row.paidUntil) || 0
  const nummer =
    excelRowNumber >= numberingStartRow
      ? excelRowNumber - numberingStartRow + 1
      : 0
  return {
    nummer,
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

export async function writeUserAccessExcel(rows, opts = {}) {
  const numberingStartRow = Number.isFinite(opts.numberingStartRow)
    ? Number(opts.numberingStartRow)
    : 18
  const sheetRows = rows.map((row, index) =>
    toSheetRow(row, index + 2, numberingStartRow),
  )
  const workbook = XLSX.utils.book_new()
  const worksheet = XLSX.utils.json_to_sheet(sheetRows, {
    header: [
      'nummer',
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
  const filename = opts.latestOnly ? 'user-access-status-latest.xlsx' : `user-access-status-${stamp}.xlsx`
  const xlsxPath = path.join(OUTPUT_DIR, filename)
  XLSX.writeFile(workbook, xlsxPath, { compression: true })
  return xlsxPath
}

