import fs from 'node:fs/promises'
import path from 'node:path'
import * as XLSX from 'xlsx'
import { ROOT_DIR, planLabel, accessSummary, toMillis } from './firebaseUserAccessExport.mjs'

export const OUTPUT_DIR = path.join(ROOT_DIR, 'output', 'firebase-user-status')

export function toSheetRow(row) {
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

export async function writeUserAccessExcel(rows, opts = {}) {
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
  const filename = opts.latestOnly ? 'user-access-status-latest.xlsx' : `user-access-status-${stamp}.xlsx`
  const xlsxPath = path.join(OUTPUT_DIR, filename)
  XLSX.writeFile(workbook, xlsxPath, { compression: true })
  return xlsxPath
}

