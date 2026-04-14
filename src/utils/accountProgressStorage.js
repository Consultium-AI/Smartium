/**
 * Lokale voortgang per gebruiker (Firebase uid of 'guest') voor oefenvragen en tentamens.
 * Chats: smartium-chat-chats:<userId> (legacy key smartium-chat-chats wordt eenmalig naar :guest gemigreerd).
 */
import { isRandomMode } from '../pages/PracticeQuestionsRegistry'

const PREFIX_PRACTICE = 'smartium_practice_v1'
const PREFIX_EXAM = 'smartium_exam_v1'
/** Blok-tentamens (Blok 5, 9, …) met casusgebaseerde vragen */
const PREFIX_EXAM_BLOK = 'smartium_exam_blok_v2'
/** Gelezen samenvattingen per account */
const PREFIX_SUMMARY_READ = 'smartium_summary_read_v1'
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

function storageKeyExamBlok(userId, blok, examNr) {
  return `${PREFIX_EXAM_BLOK}:${userId}:${blok}:${examNr}`
}

function storageKeySummaryRead(userId) {
  return `${PREFIX_SUMMARY_READ}:${userId}`
}

export function loadExamBlokProgress(userId, blok, examNr) {
  if (!userId || blok == null || !examNr) return null
  const data = safeParse(localStorage.getItem(storageKeyExamBlok(userId, blok, examNr)))
  if (!data || typeof data !== 'object') return null
  return data
}

export function saveExamBlokProgress(userId, blok, examNr, payload) {
  if (!userId || blok == null || !examNr) return
  try {
    localStorage.setItem(storageKeyExamBlok(userId, blok, examNr), JSON.stringify(payload))
  } catch {
    /* quota */
  }
  scheduleCloudIfNeeded(userId)
}

export function clearExamBlokProgress(userId, blok, examNr) {
  if (!userId || blok == null || !examNr) return
  localStorage.removeItem(storageKeyExamBlok(userId, blok, examNr))
  scheduleCloudIfNeeded(userId)
}

export function examBlokHasInProgress(userId, blok, examNr) {
  const p = loadExamBlokProgress(userId, blok, examNr)
  if (!p) return false
  const n = Object.keys(p.answers || {}).length
  return n > 0 && !p.submitted
}

export function loadSummarySeenMap(userId) {
  if (!userId) return {}
  const data = safeParse(localStorage.getItem(storageKeySummaryRead(userId)))
  if (!data || typeof data !== 'object') return {}
  return data
}

export function hasSummarySeen(userId, lmeId) {
  if (!userId || !lmeId) return false
  const m = loadSummarySeenMap(userId)
  return Boolean(m[lmeId])
}

export function markSummarySeen(userId, lmeId) {
  if (!userId || !lmeId || lmeId === 'index') return
  const now = Date.now()
  try {
    const prev = loadSummarySeenMap(userId)
    if (prev[lmeId]) return
    localStorage.setItem(storageKeySummaryRead(userId), JSON.stringify({ ...prev, [lmeId]: now }))
  } catch {
    /* quota */
  }
  scheduleCloudIfNeeded(userId)
}

export function loadPracticeProgress(userId, lmeParam) {
  if (!userId || !lmeParam || isRandomMode(lmeParam)) return null
  const data = safeParse(localStorage.getItem(storageKeyPractice(userId, lmeParam)))
  if (!data || typeof data !== 'object') return null
  return data
}

function scheduleCloudIfNeeded(userId) {
  if (!userId || userId === 'guest') return
  import('../lib/cloudUserProgress')
    .then((m) => m.scheduleCloudProgressSync(userId))
    .catch(() => {})
}

export function savePracticeProgress(userId, lmeParam, payload) {
  if (!userId || !lmeParam || isRandomMode(lmeParam)) return
  try {
    localStorage.setItem(storageKeyPractice(userId, lmeParam), JSON.stringify(payload))
  } catch {
    /* quota / private mode */
  }
  scheduleCloudIfNeeded(userId)
}

export function clearPracticeProgress(userId, lmeParam) {
  if (!userId || !lmeParam) return
  localStorage.removeItem(storageKeyPractice(userId, lmeParam))
  scheduleCloudIfNeeded(userId)
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
  scheduleCloudIfNeeded(userId)
}

export function clearExamProgress(userId, examNumber) {
  if (!userId || !examNumber) return
  localStorage.removeItem(storageKeyExam(userId, examNumber))
  scheduleCloudIfNeeded(userId)
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
  const ebPref = `${PREFIX_EXAM_BLOK}:${guestId}:`
  const sKey = storageKeySummaryRead(guestId)
  const chatKey = getChatStorageKey(guestId)
  for (const key of keys) {
    if (key.startsWith(pPref) || key.startsWith(ePref) || key.startsWith(ebPref) || key === chatKey || key === sKey) {
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
    const prefixEb = `${PREFIX_EXAM_BLOK}:${guestId}:`
    const summaryGuest = storageKeySummaryRead(guestId)
    const summaryUser = storageKeySummaryRead(newUserId)
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
      } else if (key.startsWith(prefixEb)) {
        const suffix = key.slice(prefixEb.length)
        const dest = `${PREFIX_EXAM_BLOK}:${newUserId}:${suffix}`
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
    const gSummaryRaw = localStorage.getItem(summaryGuest)
    if (gSummaryRaw) {
      const guestMap = safeParse(gSummaryRaw)
      const userMap = safeParse(localStorage.getItem(summaryUser)) || {}
      if (guestMap && typeof guestMap === 'object') {
        localStorage.setItem(summaryUser, JSON.stringify({ ...guestMap, ...userMap }))
      }
    }
    clearGuestScopedData(guestId)
  } catch {
    /* quota */
  }
}
