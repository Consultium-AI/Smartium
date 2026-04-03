import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import admin from 'firebase-admin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIR = path.resolve(__dirname, '..')
const OUTPUT_DIR = path.join(ROOT_DIR, 'output', 'firebase-user-status')

function showHelp() {
  console.log(`
Export Firebase user access status (CSV + JSON).

Usage:
  node scripts/exportFirebaseUserAccessStatus.mjs

Environment:
  FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON   JSON string of a Firebase service account (optional)
  GOOGLE_APPLICATION_CREDENTIALS        Path to service account JSON for ADC fallback (optional)
`)
}

function toMillis(value) {
  if (value == null) return null
  if (typeof value === 'number' && Number.isFinite(value)) return value
  if (typeof value === 'string') {
    const n = Number(value)
    if (Number.isFinite(n)) return n
    const d = Date.parse(value)
    return Number.isFinite(d) ? d : null
  }
  if (value instanceof Date) return value.getTime()
  if (typeof value.toDate === 'function') {
    const d = value.toDate()
    return d instanceof Date ? d.getTime() : null
  }
  if (typeof value.seconds === 'number') return value.seconds * 1000
  if (typeof value._seconds === 'number') return value._seconds * 1000
  return null
}

function isoOrEmpty(ms) {
  if (!ms || !Number.isFinite(ms)) return ''
  return new Date(ms).toISOString()
}

function resolvePaidAt(data, paidUntilMs, plan) {
  const directFields = [
    ['paidAt', data?.paidAt],
    ['lastPaymentAt', data?.lastPaymentAt],
    ['paymentDate', data?.paymentDate],
    ['updatedAt', data?.updatedAt],
  ]

  for (const [source, raw] of directFields) {
    const ms = toMillis(raw)
    if (ms) return { paidAtMs: ms, paidAtSource: source }
  }

  if (!paidUntilMs || (plan !== 'monthly' && plan !== 'yearly')) {
    return { paidAtMs: null, paidAtSource: '' }
  }

  const durationDays = plan === 'yearly' ? 365 : 30
  return {
    paidAtMs: paidUntilMs - durationDays * 24 * 60 * 60 * 1000,
    paidAtSource: 'estimated_from_paidUntil',
  }
}

function resolveStatus(data, paidUntilMs) {
  const plan = (data?.plan || '').toString().toLowerCase()
  const now = Date.now()

  if (plan === 'monthly' || plan === 'yearly') {
    if (paidUntilMs && paidUntilMs > now) return `paid_${plan}`
    if (paidUntilMs) return `expired_${plan}`
    return 'free'
  }

  if (paidUntilMs && paidUntilMs > now) return 'paid_unknown'
  return 'free'
}

function escapeCsvField(value) {
  const raw = String(value ?? '')
  if (raw.includes('"') || raw.includes(',') || raw.includes('\n')) {
    return `"${raw.replaceAll('"', '""')}"`
  }
  return raw
}

function toCsv(rows) {
  const headers = [
    'uid',
    'email',
    'status',
    'plan',
    'paidUntil',
    'paidAt',
    'paidAtSource',
    'lastSignInAt',
    'authCreatedAt',
  ]
  const lines = [headers.join(',')]
  for (const row of rows) {
    lines.push(headers.map((h) => escapeCsvField(row[h])).join(','))
  }
  return `${lines.join('\n')}\n`
}

async function initAdmin() {
  if (admin.apps.length > 0) return admin.app()

  const inlineServiceAccount = process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON
  if (inlineServiceAccount) {
    const parsed = JSON.parse(inlineServiceAccount)
    return admin.initializeApp({
      credential: admin.credential.cert(parsed),
      projectId: parsed.project_id,
    })
  }

  // Fallback: GOOGLE_APPLICATION_CREDENTIALS / gcloud ADC
  return admin.initializeApp()
}

async function listAllAuthUsers(auth) {
  const users = []
  let nextPageToken
  do {
    const page = await auth.listUsers(1000, nextPageToken)
    users.push(...page.users)
    nextPageToken = page.pageToken
  } while (nextPageToken)
  return users
}

async function run() {
  const args = new Set(process.argv.slice(2))
  if (args.has('--help') || args.has('-h')) {
    showHelp()
    return
  }

  await initAdmin()
  const auth = admin.auth()
  const db = admin.firestore()

  const [authUsers, userDocsSnap] = await Promise.all([
    listAllAuthUsers(auth),
    db.collection('users').get(),
  ])

  const firestoreUsers = new Map()
  for (const doc of userDocsSnap.docs) {
    firestoreUsers.set(doc.id, doc.data() || {})
  }

  const rows = []

  for (const u of authUsers) {
    const doc = firestoreUsers.get(u.uid) || {}
    firestoreUsers.delete(u.uid)

    const paidUntilMs = toMillis(doc.paidUntil) || 0
    const status = resolveStatus(doc, paidUntilMs)
    const plan = (doc.plan || '').toString().toLowerCase() || 'free'
    const { paidAtMs, paidAtSource } = resolvePaidAt(doc, paidUntilMs, plan)

    rows.push({
      uid: u.uid,
      email: u.email || '',
      status,
      plan,
      paidUntil: isoOrEmpty(paidUntilMs),
      paidAt: isoOrEmpty(paidAtMs),
      paidAtSource,
      lastSignInAt: u.metadata?.lastSignInTime || '',
      authCreatedAt: u.metadata?.creationTime || '',
    })
  }

  // Include Firestore-only users if present (missing auth record).
  for (const [uid, doc] of firestoreUsers.entries()) {
    const paidUntilMs = toMillis(doc.paidUntil) || 0
    const status = resolveStatus(doc, paidUntilMs)
    const plan = (doc.plan || '').toString().toLowerCase() || 'free'
    const { paidAtMs, paidAtSource } = resolvePaidAt(doc, paidUntilMs, plan)

    rows.push({
      uid,
      email: doc.email || '',
      status,
      plan,
      paidUntil: isoOrEmpty(paidUntilMs),
      paidAt: isoOrEmpty(paidAtMs),
      paidAtSource,
      lastSignInAt: '',
      authCreatedAt: '',
    })
  }

  rows.sort((a, b) => a.email.localeCompare(b.email))

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
