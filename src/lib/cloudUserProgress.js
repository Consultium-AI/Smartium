/**
 * Synchroniseert oefen/tentamen/chat naar Firestore voor Firebase Auth-gebruikers
 * (zelfde account op meerdere apparaten). Demo / alleen-lokale Google OAuth: geen sync.
 */
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db, isFirebaseConfigured } from './firebase'
import { getChatStorageKey } from '../utils/accountProgressStorage'

const PREFIX_PRACTICE = 'smartium_practice_v1'
const PREFIX_EXAM = 'smartium_exam_v1'
const PREFIX_EXAM_BLOK = 'smartium_exam_blok_v2'
const PREFIX_SUMMARY_READ = 'smartium_summary_read_v1'
const PREFIX_SUMMARY_HIGHLIGHTS = 'smartium_summary_hl_v1'
const COLLECTION = 'userProgress'

let debounceTimer = null
let debounceUid = null

/** Firestore accepteert geen `undefined` in nested objecten. */
function stripForFirestore(obj) {
  try {
    return JSON.parse(JSON.stringify(obj))
  } catch {
    return {}
  }
}

function logSyncSkipped(uid, reason) {
  console.warn('[Smartium Firestore] Upload overgeslagen:', reason, {
    uid,
    firebaseConfigured: isFirebaseConfigured,
    hasDb: !!db,
    authUid: auth?.currentUser?.uid ?? null,
  })
}

function canSyncUid(uid) {
  if (!isFirebaseConfigured || !db) {
    return false
  }
  if (!uid || uid === 'guest') {
    return false
  }
  if (!auth?.currentUser || auth.currentUser.uid !== uid) {
    return false
  }
  return true
}

function collectBundledProgress(userId) {
  const practice = {}
  const exams = {}
  const examBlok = {}
  const summarySeen = {}
  const summaryHighlights = {}
  const prefixP = `${PREFIX_PRACTICE}:${userId}:`
  const prefixE = `${PREFIX_EXAM}:${userId}:`
  const prefixEb = `${PREFIX_EXAM_BLOK}:${userId}:`
  const summaryKey = `${PREFIX_SUMMARY_READ}:${userId}`
  const highlightsKey = `${PREFIX_SUMMARY_HIGHLIGHTS}:${userId}`
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)
      if (!k) continue
      if (k.startsWith(prefixP)) {
        const lme = k.slice(prefixP.length)
        const raw = localStorage.getItem(k)
        if (!raw) continue
        try {
          practice[lme] = JSON.parse(raw)
        } catch {
          /* skip */
        }
      } else if (k.startsWith(prefixE)) {
        const ex = k.slice(prefixE.length)
        const raw = localStorage.getItem(k)
        if (!raw) continue
        try {
          exams[ex] = JSON.parse(raw)
        } catch {
          /* skip */
        }
      } else if (k.startsWith(prefixEb)) {
        const exb = k.slice(prefixEb.length)
        const raw = localStorage.getItem(k)
        if (!raw) continue
        try {
          examBlok[exb] = JSON.parse(raw)
        } catch {
          /* skip */
        }
      } else if (k === summaryKey) {
        const raw = localStorage.getItem(k)
        if (!raw) continue
        try {
          const parsed = JSON.parse(raw)
          if (parsed && typeof parsed === 'object') {
            Object.assign(summarySeen, parsed)
          }
        } catch {
          /* skip */
        }
      } else if (k === highlightsKey) {
        const raw = localStorage.getItem(k)
        if (!raw) continue
        try {
          const parsed = JSON.parse(raw)
          if (parsed && typeof parsed === 'object') {
            Object.assign(summaryHighlights, parsed)
          }
        } catch {
          /* skip */
        }
      }
    }
    const chatsJson = localStorage.getItem(getChatStorageKey(userId))
    return { practice, exams, examBlok, summarySeen, summaryHighlights, chatsJson: chatsJson || null }
  } catch {
    return { practice: {}, exams: {}, examBlok: {}, summarySeen: {}, summaryHighlights: {}, chatsJson: null }
  }
}

function applyBundledProgressToLocal(userId, bundle) {
  if (!bundle || !userId) return
  try {
    for (const [lme, data] of Object.entries(bundle.practice || {})) {
      if (data && typeof data === 'object') {
        localStorage.setItem(`${PREFIX_PRACTICE}:${userId}:${lme}`, JSON.stringify(data))
      }
    }
    for (const [ex, data] of Object.entries(bundle.exams || {})) {
      if (data && typeof data === 'object') {
        localStorage.setItem(`${PREFIX_EXAM}:${userId}:${ex}`, JSON.stringify(data))
      }
    }
    for (const [exb, data] of Object.entries(bundle.examBlok || {})) {
      if (data && typeof data === 'object') {
        localStorage.setItem(`${PREFIX_EXAM_BLOK}:${userId}:${exb}`, JSON.stringify(data))
      }
    }
    if (bundle.summarySeen && typeof bundle.summarySeen === 'object') {
      const summaryKey = `${PREFIX_SUMMARY_READ}:${userId}`
      const localSummary = JSON.parse(localStorage.getItem(summaryKey) || '{}')
      localStorage.setItem(summaryKey, JSON.stringify({ ...(bundle.summarySeen || {}), ...(localSummary || {}) }))
    }
    if (bundle.summaryHighlights && typeof bundle.summaryHighlights === 'object') {
      const highlightsKey = `${PREFIX_SUMMARY_HIGHLIGHTS}:${userId}`
      const localHighlights = JSON.parse(localStorage.getItem(highlightsKey) || '{}')
      localStorage.setItem(
        highlightsKey,
        JSON.stringify({ ...(bundle.summaryHighlights || {}), ...(localHighlights || {}) })
      )
    }
    if (bundle.chatsJson && typeof bundle.chatsJson === 'string') {
      localStorage.setItem(getChatStorageKey(userId), bundle.chatsJson)
    }
  } catch {
    /* quota */
  }
}

function practiceProgressUpdatedAt(entry) {
  if (!entry || typeof entry !== 'object') return 0
  return typeof entry.updatedAt === 'number' ? entry.updatedAt : 0
}

function mergePracticeMaps(serverMap, localMap) {
  const merged = { ...(serverMap || {}) }
  for (const [key, localEntry] of Object.entries(localMap || {})) {
    const serverEntry = merged[key]
    if (!serverEntry) {
      if (localEntry) merged[key] = localEntry
      continue
    }
    if (practiceProgressUpdatedAt(localEntry) > practiceProgressUpdatedAt(serverEntry)) {
      merged[key] = localEntry
    }
  }
  return merged
}

/** Server-keys winnen; lokale keys die de server niet heeft blijven behouden. */
function mergeServerWithLocal(localBundle, serverData) {
  const practice = mergePracticeMaps(serverData.practice, localBundle.practice)
  const exams = { ...(serverData.exams || {}) }
  for (const [k, v] of Object.entries(localBundle.exams)) {
    if (!(k in exams) && v) exams[k] = v
  }
  const examBlok = { ...(serverData.examBlok || {}) }
  for (const [k, v] of Object.entries(localBundle.examBlok || {})) {
    if (!(k in examBlok) && v) examBlok[k] = v
  }
  const summarySeen = { ...(serverData.summarySeen || {}) }
  for (const [k, v] of Object.entries(localBundle.summarySeen || {})) {
    if (!(k in summarySeen) && v) summarySeen[k] = v
  }
  const summaryHighlights = { ...(serverData.summaryHighlights || {}) }
  for (const [k, v] of Object.entries(localBundle.summaryHighlights || {})) {
    if (!(k in summaryHighlights) && v) summaryHighlights[k] = v
  }
  const chatsJson = serverData.chatsJson || localBundle.chatsJson || null
  return { practice, exams, examBlok, summarySeen, summaryHighlights, chatsJson }
}

async function pushProgressToCloudInternal(uid) {
  if (!canSyncUid(uid)) {
    if (!isFirebaseConfigured) {
      logSyncSkipped(uid, 'Geen VITE_FIREBASE_* in de build (of leeg).')
    } else if (!db) {
      logSyncSkipped(uid, 'Firestore-db niet geïnitialiseerd.')
    } else if (!auth?.currentUser) {
      logSyncSkipped(uid, 'Geen Firebase Auth-sessie — log opnieuw in met Google (met Firebase) of e-mail.')
    } else if (auth.currentUser.uid !== uid) {
      logSyncSkipped(uid, `UID komt niet overeen met Firebase (${auth.currentUser.uid} ≠ ${uid}).`)
    } else {
      logSyncSkipped(uid, 'Onbekend (guest of ontbrekende uid).')
    }
    return
  }

  const bundle = collectBundledProgress(uid)
  const ref = doc(db, COLLECTION, uid)
  await setDoc(
    ref,
    {
      v: 2,
      practice: stripForFirestore(bundle.practice),
      exams: stripForFirestore(bundle.exams),
      examBlok: stripForFirestore(bundle.examBlok),
      summarySeen: stripForFirestore(bundle.summarySeen),
      summaryHighlights: stripForFirestore(bundle.summaryHighlights),
      chatsJson: bundle.chatsJson ?? null,
      syncedFrom: 'smartium-web',
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  )
}

export async function pushProgressToCloud(uid) {
  try {
    await pushProgressToCloudInternal(uid)
  } catch (e) {
    const code = e && typeof e === 'object' && 'code' in e ? e.code : ''
    console.error(
      '[Smartium] Firestore WRITE mislukt.',
      code || e?.message,
      '→ Controleer Firestore Rules (moet userProgress/{uid} toestaan, niet overal `false`).',
      e
    )
  }
}

/**
 * Na Firebase-login: eerst guest → uid migratie (in AuthProvider), daarna merge cloud → localStorage.
 * READ en WRITE apart: bij mislukte read proberen we alsnog te schrijven.
 */
export async function hydrateFromCloud(uid) {
  if (!canSyncUid(uid)) {
    console.warn(
      '[Smartium] Firestore hydrate overgeslagen — geen geldige Firebase-sessie voor uid:',
      uid
    )
    return
  }

  try {
    const ref = doc(db, COLLECTION, uid)
    const snap = await getDoc(ref)
    const localBefore = collectBundledProgress(uid)
    if (snap.exists()) {
      const d = snap.data()
      const merged = mergeServerWithLocal(localBefore, {
        practice: d.practice,
        exams: d.exams,
        examBlok: d.examBlok,
        summarySeen: d.summarySeen,
        summaryHighlights: d.summaryHighlights,
        chatsJson: d.chatsJson,
      })
      applyBundledProgressToLocal(uid, merged)
    }
  } catch (e) {
    const code = e && typeof e === 'object' && 'code' in e ? e.code : ''
    console.error(
      '[Smartium] Firestore READ mislukt.',
      code || e?.message,
      '→ Rules: mag je userProgress lezen? (Niet de standaard “alles false”-modus laten staan.)',
      e
    )
  }

  await pushProgressToCloud(uid)

  try {
    window.dispatchEvent(new CustomEvent('smartium-cloud-synced', { detail: { uid } }))
  } catch {
    /* ignore */
  }
}

export function scheduleCloudProgressSync(uid) {
  if (!canSyncUid(uid)) return
  debounceUid = uid
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    debounceTimer = null
    void pushProgressToCloud(debounceUid)
  }, 1200)
}

export function triggerCloudProgressSyncNow(uid) {
  if (!canSyncUid(uid)) return Promise.resolve()
  clearTimeout(debounceTimer)
  debounceTimer = null
  return pushProgressToCloud(uid)
}
