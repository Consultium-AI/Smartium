/**
 * Schrijft dezelfde gebruikersexport naar een Google Sheet (eerste tab wordt overschreven).
 *
 * Vereist:
 * - Zelfde credentials als exportFirebaseUserAccessStatus.mjs
 * - Google Sheets API ingeschakeld voor het GCP-project van de service account
 * - Spreadsheet gedeeld met het e-mailadres van de service account (…@….iam.gserviceaccount.com) als Editor
 *
 * npm run automation:export-user-access-to-sheets
 */
import path from 'node:path'
import { google } from 'googleapis'
import {
  ROOT_DIR,
  loadRootEnvFiles,
  buildUserAccessRows,
  planLabel,
  accessSummary,
  toMillis,
} from './lib/firebaseUserAccessExport.mjs'

const SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets'

function showHelp() {
  console.log(`
Export Firebase users → Google Sheet (tab "Gebruikers").

Usage:
  node scripts/exportFirebaseUserAccessToGoogleSheets.mjs

Environment:
  GOOGLE_SHEETS_SPREADSHEET_ID    ID uit de spreadsheet-URL (tussen /d/ en /edit)
  GOOGLE_SHEETS_TAB_NAME          Optioneel, default: Gebruikers

  + dezelfde vars als automation:export-user-access-status
`)
}

function resolveKeyFilePath() {
  const p = process.env.GOOGLE_APPLICATION_CREDENTIALS
  if (!p) return null
  return path.isAbsolute(p) ? p : path.join(ROOT_DIR, p)
}

async function createSheetsClient() {
  if (process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON) {
    const credentials = JSON.parse(process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON)
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: [SHEETS_SCOPE],
    })
    return google.sheets({ version: 'v4', auth })
  }

  const keyFile = resolveKeyFilePath()
  if (keyFile) {
    const auth = new google.auth.GoogleAuth({
      keyFile,
      scopes: [SHEETS_SCOPE],
    })
    return google.sheets({ version: 'v4', auth })
  }

  const auth = new google.auth.GoogleAuth({
    scopes: [SHEETS_SCOPE],
  })
  return google.sheets({ version: 'v4', auth })
}

function rowToSheetValues(row) {
  const paidUntilMs = toMillis(row.paidUntil) || 0
  return [
    row.email,
    planLabel(row.plan),
    accessSummary(row.status, paidUntilMs),
    row.status,
    row.paidUntil || '',
    row.paidAt || '',
    row.paidAtSource || '',
    row.lastSignInAt || '',
    row.authCreatedAt || '',
    row.uid,
  ]
}

async function run() {
  const args = new Set(process.argv.slice(2))
  if (args.has('--help') || args.has('-h')) {
    showHelp()
    return
  }

  await loadRootEnvFiles()

  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID?.trim()
  if (!spreadsheetId) {
    throw new Error(
      'Zet GOOGLE_SHEETS_SPREADSHEET_ID in .env (ID uit de URL van je Google Sheet).',
    )
  }

  const tab = (process.env.GOOGLE_SHEETS_TAB_NAME || 'Gebruikers').trim()
  const tabA1 = `'${tab.replace(/'/g, "''")}'`
  const rangeClear = `${tabA1}!A:J`

  const rows = await buildUserAccessRows()
  const headers = [
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
  ]
  const values = [headers, ...rows.map(rowToSheetValues)]

  const sheets = await createSheetsClient()

  const { data: meta } = await sheets.spreadsheets.get({ spreadsheetId })
  const hasTab = meta?.sheets?.some((s) => s.properties?.title === tab)
  if (!hasTab) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ addSheet: { properties: { title: tab } } }],
      },
    })
  }

  await sheets.spreadsheets.values.clear({ spreadsheetId, range: rangeClear })
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `${tabA1}!A1`,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values },
  })

  console.log(`Google Sheet bijgewerkt: ${rows.length} rijen in tab "${tab}"`)
  console.log(`Spreadsheet ID: ${spreadsheetId}`)
}

run().catch((err) => {
  console.error('[exportFirebaseUserAccessToGoogleSheets] failed:', err?.message || err)
  process.exitCode = 1
})
