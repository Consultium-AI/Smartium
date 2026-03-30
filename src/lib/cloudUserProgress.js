/**
 * Synchroniseert oefen/tentamen/chat naar Firestore voor Firebase Auth-gebruikers
 * (zelfde account op meerdere apparaten). Demo / alleen-lokale Google OAuth: geen sync.
 */
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db, isFirebaseConfigured } from './firebase'
import { getChatStorageKey } from '../utils/accountProgressStorage'

const PREFIX_PRACTICE = 'smartium_practice_v1'
const PREFIX_EXAM = 'smartium_exam_v1'
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
  const prefixP = `${PREFIX_PRACTICE}:${userId}:`
  const prefixE = `${PREFIX_EXAM}:${userId}:`
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
      }
    }
    const chatsJson = localStorage.getItem(getChatStorageKey(userId))
    return { practice, exams, chatsJson: chatsJson || null }
  } catch {
    return { practice: {}, exams: {}, chatsJson: null }
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
    if (bundle.chatsJson && typeof bundle.chatsJson === 'string') {
      localStorage.setItem(getChatStorageKey(userId), bundle.chatsJson)
    }
  } catch {
    /* quota */
  }
}

/** Server-keys winnen; lokale keys die de server niet heeft blijven behouden. */
function mergeServerWithLocal(localBundle, serverData) {
  const practice = { ...(serverData.practice || {}) }
  for (const [k, v] of Object.entries(localBundle.practice)) {
    if (!(k in practice) && v) practice[k] = v
  }
  const exams = { ...(serverData.exams || {}) }
  for (const [k, v] of Object.entries(localBundle.exams)) {
    if (!(k in exams) && v) exams[k] = v
  }
  const chatsJson = serverData.chatsJson || localBundle.chatsJson || null
  return { practice, exams, chatsJson }
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
      v: 1,
      practice: stripForFirestore(bundle.practice),
      exams: stripForFirestore(bundle.exams),
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
