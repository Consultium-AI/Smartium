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

function canSyncUid(uid) {
  return (
    isFirebaseConfigured &&
    db &&
    uid &&
    uid !== 'guest' &&
    auth?.currentUser &&
    auth.currentUser.uid === uid
  )
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

export async function pushProgressToCloud(uid) {
  if (!canSyncUid(uid)) return
  try {
    const bundle = collectBundledProgress(uid)
    const ref = doc(db, COLLECTION, uid)
    await setDoc(
      ref,
      {
        v: 1,
        practice: bundle.practice,
        exams: bundle.exams,
        chatsJson: bundle.chatsJson,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    )
  } catch (e) {
    console.warn('[Smartium] Firestore sync (upload) mislukt:', e)
  }
}

/**
 * Na Firebase-login: merge cloud → localStorage. Geen cloud-doc → eerste upload vanaf dit apparaat.
 */
export async function hydrateFromCloud(uid) {
  if (!canSyncUid(uid)) return
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
    await pushProgressToCloud(uid)
    window.dispatchEvent(new CustomEvent('smartium-cloud-synced', { detail: { uid } }))
  } catch (e) {
    console.warn('[Smartium] Firestore sync (download) mislukt. Firestore aan in Firebase Console?', e)
  }
}

export function scheduleCloudProgressSync(uid) {
  if (!canSyncUid(uid)) return
  debounceUid = uid
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    debounceTimer = null
    void pushProgressToCloud(debounceUid)
  }, 2500)
}

export function triggerCloudProgressSyncNow(uid) {
  if (!canSyncUid(uid)) return Promise.resolve()
  clearTimeout(debounceTimer)
  debounceTimer = null
  return pushProgressToCloud(uid)
}
