/**
 * Lokale voortgang per gebruiker (Firebase uid of 'guest') voor oefenvragen en tentamens.
 * Chats: smartium-chat-chats:<userId> (legacy key smartium-chat-chats wordt eenmalig naar :guest gemigreerd).
 */

const PREFIX_PRACTICE = 'smartium_practice_v1'
const PREFIX_EXAM = 'smartium_exam_v1'
/** Oude globale chatsleutel (vóór per-account) */
export const LEGACY_CHAT_STORAGE_KEY = 'smartium-chat-chats'

export function getProgressUserId(user, authLoading) {
  if (authLoading) return null
  return user?.uid ?? 'guest'
}

function safeParse(raw) {
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function storageKeyPractice(userId, lmeParam) {
  return `${PREFIX_PRACTICE}:${userId}:${lmeParam}`
}

function storageKeyExam(userId, examNumber) {
  return `${PREFIX_EXAM}:${userId}:${examNumber}`
}

export function loadPracticeProgress(userId, lmeParam) {
  if (!userId || !lmeParam || lmeParam === 'alle-random') return null
  const data = safeParse(localStorage.getItem(storageKeyPractice(userId, lmeParam)))
  if (!data || typeof data !== 'object') return null
  return data
}

export function savePracticeProgress(userId, lmeParam, payload) {
  if (!userId || !lmeParam || lmeParam === 'alle-random') return
  try {
    localStorage.setItem(storageKeyPractice(userId, lmeParam), JSON.stringify(payload))
  } catch {
    /* quota / private mode */
  }
}

export function clearPracticeProgress(userId, lmeParam) {
  if (!userId || !lmeParam) return
  localStorage.removeItem(storageKeyPractice(userId, lmeParam))
}

export function loadExamProgress(userId, examNumber) {
  if (!userId || !examNumber) return null
  const data = safeParse(localStorage.getItem(storageKeyExam(userId, examNumber)))
  if (!data || typeof data !== 'object') return null
  return data
}

export function saveExamProgress(userId, examNumber, payload) {
  if (!userId || !examNumber) return
  try {
    localStorage.setItem(storageKeyExam(userId, examNumber), JSON.stringify(payload))
  } catch {
    /* quota */
  }
}

export function clearExamProgress(userId, examNumber) {
  if (!userId || !examNumber) return
  localStorage.removeItem(storageKeyExam(userId, examNumber))
}

export function examHasInProgress(userId, examNumber) {
  const p = loadExamProgress(userId, examNumber)
  if (!p) return false
  const n = Object.keys(p.selectedAnswers || {}).length
  return n > 0 && !p.submitted
}

export function getChatStorageKey(userId) {
  return `${LEGACY_CHAT_STORAGE_KEY}:${userId}`
}

/**
 * Eenmalig: oude globale chatlijst → gast-account zodat bestaande gebruikers niets kwijtraken.
 */
export function migrateLegacyChatToScopedGuest() {
  try {
    const legacy = localStorage.getItem(LEGACY_CHAT_STORAGE_KEY)
    if (!legacy) return
    const guestKey = getChatStorageKey('guest')
    if (localStorage.getItem(guestKey)) return
    localStorage.setItem(guestKey, legacy)
    localStorage.removeItem(LEGACY_CHAT_STORAGE_KEY)
  } catch {
    /* quota */
  }
}

function clearGuestScopedData(guestId) {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i)
    if (k) keys.push(k)
  }
  const pPref = `${PREFIX_PRACTICE}:${guestId}:`
  const ePref = `${PREFIX_EXAM}:${guestId}:`
  const chatKey = getChatStorageKey(guestId)
  for (const key of keys) {
    if (key.startsWith(pPref) || key.startsWith(ePref) || key === chatKey) {
      try {
        localStorage.removeItem(key)
      } catch {
        /* ignore */
      }
    }
  }
}

/**
 * Kopieert oefen/tentamen/chat van gast naar het echte account (bij registratie of inloggen).
 * Bestaande data op het account wordt niet overschreven. Daarna wordt de gast-kopie gewist.
 */
export function migrateGuestDataToUser(guestId, newUserId) {
  if (!guestId || !newUserId || guestId === newUserId) return
  try {
    const allKeys = []
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)
      if (k) allKeys.push(k)
    }
    const prefixP = `${PREFIX_PRACTICE}:${guestId}:`
    const prefixE = `${PREFIX_EXAM}:${guestId}:`
    for (const key of allKeys) {
      if (key.startsWith(prefixP)) {
        const suffix = key.slice(prefixP.length)
        const dest = `${PREFIX_PRACTICE}:${newUserId}:${suffix}`
        if (!localStorage.getItem(dest)) {
          localStorage.setItem(dest, localStorage.getItem(key))
        }
      } else if (key.startsWith(prefixE)) {
        const suffix = key.slice(prefixE.length)
        const dest = `${PREFIX_EXAM}:${newUserId}:${suffix}`
        if (!localStorage.getItem(dest)) {
          localStorage.setItem(dest, localStorage.getItem(key))
        }
      }
    }
    const gChat = getChatStorageKey(guestId)
    const uChat = getChatStorageKey(newUserId)
    const gRaw = localStorage.getItem(gChat)
    if (gRaw && !localStorage.getItem(uChat)) {
      localStorage.setItem(uChat, gRaw)
    }
    clearGuestScopedData(guestId)
  } catch {
    /* quota */
  }
}
