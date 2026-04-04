import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import admin from 'firebase-admin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
export const SCRIPTS_LIB_DIR = __dirname
export const ROOT_DIR = path.resolve(__dirname, '..', '..')

/** Load .env / .env.local into process.env when keys are unset (Node scripts have no Vite). */
export async function loadRootEnvFiles() {
  for (const name of ['.env.local', '.env']) {
    const full = path.join(ROOT_DIR, name)
    try {
      const text = await fs.readFile(full, 'utf8')
      for (const line of text.split(/\n/)) {
        const trimmed = line.trim()
        if (!trimmed || trimmed.startsWith('#')) continue
        const eq = trimmed.indexOf('=')
        if (eq <= 0) continue
        const key = trimmed.slice(0, eq).trim()
        let val = trimmed.slice(eq + 1).trim()
        if (
          (val.startsWith('"') && val.endsWith('"')) ||
          (val.startsWith("'") && val.endsWith("'"))
        ) {
          val = val.slice(1, -1)
        }
        if (key && process.env[key] === undefined) process.env[key] = val
      }
    } catch {
      /* missing file */
    }
  }
}

async function readDefaultProjectFromFirebaserc() {
  try {
    const raw = await fs.readFile(path.join(ROOT_DIR, '.firebaserc'), 'utf8')
    const j = JSON.parse(raw)
    return j?.projects?.default || null
  } catch {
    return null
  }
}

export function resolveProjectId(serviceAccountJson = null) {
  return (
    process.env.FIREBASE_PROJECT_ID ||
    process.env.GOOGLE_CLOUD_PROJECT ||
    process.env.GCLOUD_PROJECT ||
    serviceAccountJson?.project_id ||
    process.env.VITE_FIREBASE_PROJECT_ID ||
    null
  )
}

/**
 * Initialize firebase-admin with explicit projectId (fixes "Unable to detect a Project Id").
 */
export async function initFirebaseAdmin() {
  if (admin.apps.length > 0) return admin.app()

  await loadRootEnvFiles()
  const firebasercDefault = (await readDefaultProjectFromFirebaserc()) || undefined

  const inline = process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON
  if (inline) {
    const parsed = JSON.parse(inline)
    const projectId = resolveProjectId(parsed) || firebasercDefault
    if (!projectId) {
      throw new Error(
        'Geen project id: zet FIREBASE_PROJECT_ID of VITE_FIREBASE_PROJECT_ID in .env, of project_id in de service account JSON.',
      )
    }
    return admin.initializeApp({
      credential: admin.credential.cert(parsed),
      projectId,
    })
  }

  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL?.trim()
  const privateKeyRaw = process.env.FIREBASE_PRIVATE_KEY?.trim()
  if (clientEmail && privateKeyRaw) {
    const privateKey = privateKeyRaw.replace(/\\n/g, '\n')
    const parsed = {
      client_email: clientEmail,
      private_key: privateKey,
      project_id: resolveProjectId() || firebasercDefault,
    }
    const projectId = resolveProjectId(parsed) || firebasercDefault
    if (!projectId) {
      throw new Error(
        'Geen project id gevonden bij FIREBASE_CLIENT_EMAIL/FIREBASE_PRIVATE_KEY. Zet ook FIREBASE_PROJECT_ID of VITE_FIREBASE_PROJECT_ID.',
      )
    }
    return admin.initializeApp({
      credential: admin.credential.cert(parsed),
      projectId,
    })
  }

  const credPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
  if (credPath) {
    const abs = path.isAbsolute(credPath) ? credPath : path.join(ROOT_DIR, credPath)
    let parsed
    try {
      parsed = JSON.parse(await fs.readFile(abs, 'utf8'))
    } catch (e) {
      throw new Error(
        `GOOGLE_APPLICATION_CREDENTIALS wijst naar een onleesbaar bestand: ${abs}. ${e?.message || e}`,
      )
    }
    const projectId = resolveProjectId(parsed) || firebasercDefault
    if (!projectId) {
      throw new Error(
        'Geen project_id in service-account JSON en geen FIREBASE_PROJECT_ID / VITE_FIREBASE_PROJECT_ID.',
      )
    }
    return admin.initializeApp({
      credential: admin.credential.cert(parsed),
      projectId,
    })
  }

  const projectId = resolveProjectId() || firebasercDefault
  if (!projectId) {
    throw new Error(
      'Geen Firebase-credentials: zet FIREBASE_ADMIN_SERVICE_ACCOUNT_JSON of GOOGLE_APPLICATION_CREDENTIALS, ' +
        'en FIREBASE_PROJECT_ID of VITE_FIREBASE_PROJECT_ID (of project_id in het service-account JSON).',
    )
  }

  return admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId,
  })
}

export function toMillis(value) {
  if (value == null) return null
  if (typeof value === 'number' && Number.isFinite(value)) return value
  if (typeof value === 'string') {
    if (value.trim() === '') return null
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

export function isoOrEmpty(ms) {
  if (!ms || !Number.isFinite(ms)) return ''
  return new Date(ms).toISOString()
}

export function resolvePaidAt(data, paidUntilMs, plan) {
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

/** Technical status for export */
export function resolveStatus(data, paidUntilMs) {
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

/** User-facing plan label (NL) */
export function planLabel(planRaw) {
  const p = (planRaw || '').toString().toLowerCase()
  if (p === 'monthly') return 'maandelijks'
  if (p === 'yearly') return 'jaarlijks'
  return 'gratis'
}

/** Short access description for sheets */
export function accessSummary(status, paidUntilMs) {
  const now = Date.now()
  if (status === 'paid_unknown' && paidUntilMs > now) return 'actief betaald (plan onbekend in Firestore)'
  if (status.startsWith('paid_')) {
    return paidUntilMs > now ? 'actief betaald' : 'onbekend'
  }
  if (status.startsWith('expired_')) return 'abonnement verlopen'
  return 'gratis / geen actief abonnement'
}

export function escapeCsvField(value) {
  const raw = String(value ?? '')
  if (raw.includes('"') || raw.includes(',') || raw.includes('\n')) {
    return `"${raw.replaceAll('"', '""')}"`
  }
  return raw
}

export function toCsv(rows) {
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

export async function buildUserAccessRows() {
  await initFirebaseAdmin()
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

  // Sort by registration date so newest users appear at the bottom in exports.
  rows.sort((a, b) => {
    const aCreatedMs = toMillis(a.authCreatedAt) || 0
    const bCreatedMs = toMillis(b.authCreatedAt) || 0
    if (aCreatedMs !== bCreatedMs) return aCreatedMs - bCreatedMs
    return a.email.localeCompare(b.email)
  })
  return rows
}
