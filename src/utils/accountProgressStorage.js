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
/** Tekstmarkeringen in samenvattingen per account */
const PREFIX_SUMMARY_HIGHLIGHTS = 'smartium_summary_hl_v1'
/** Flashcard spaced-repetition per account (één map per user) */
export const PREFIX_FLASHCARD_SRS = 'smartium_flashcard_srs_v1'
/** Flashcard-studiesessie per deck (hervatten waar je gebleven was) */
const PREFIX_FLASHCARD_SESSION = 'smartium_flashcard_session_v1'
/** Oude globale chatsleutel (vóór per-account) */
export const LEGACY_CHAT_STORAGE_KEY = 'smartium-chat-chats'

export function getProgressUserId(user, authLoading) {
  if (authLoading) return null
  return user?.uid ?? 'guest'
}

/** Echte account (Firebase uid of demo:…), niet anonieme gast-sessie. */
export function isAccountProgressUser(userId) {
  return Boolean(userId && userId !== 'guest')
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

function storageKeySummaryHighlights(userId) {
  return `${PREFIX_SUMMARY_HIGHLIGHTS}:${userId}`
}

function storageKeySummaryRead(userId) {
  return `${PREFIX_SUMMARY_READ}:${userId}`
}

function storageKeyFlashcardSession(userId, sessionId) {
  return `${PREFIX_FLASHCARD_SESSION}:${userId}:${sessionId}`
}

export function storageKeyFlashcardSrs(userId) {
  return `${PREFIX_FLASHCARD_SRS}:${userId}`
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

export function isPersistedRandomPracticeMode(lmeParam) {
  return lmeParam?.startsWith('blok-random-') || lmeParam?.startsWith('blokken-random-')
}

export function loadPracticeProgress(userId, lmeParam) {
  if (!userId || !lmeParam) return null
  if (isPersistedRandomPracticeMode(lmeParam) && !isAccountProgressUser(userId)) return null
  if (isRandomMode(lmeParam) && !isPersistedRandomPracticeMode(lmeParam)) return null
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
  if (!userId || !lmeParam) return
  if (isPersistedRandomPracticeMode(lmeParam) && !isAccountProgressUser(userId)) return
  if (isRandomMode(lmeParam) && !isPersistedRandomPracticeMode(lmeParam)) return
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

export function loadFlashcardSession(userId, sessionId) {
  if (!userId || !sessionId) return null
  const data = safeParse(localStorage.getItem(storageKeyFlashcardSession(userId, sessionId)))
  if (!data || typeof data !== 'object') return null
  return data
}

export function saveFlashcardSession(userId, sessionId, payload) {
  if (!userId || !sessionId) return
  try {
    localStorage.setItem(storageKeyFlashcardSession(userId, sessionId), JSON.stringify(payload))
  } catch {
    /* quota / private mode */
  }
  scheduleCloudIfNeeded(userId)
}

export function clearFlashcardSession(userId, sessionId) {
  if (!userId || !sessionId) return
  localStorage.removeItem(storageKeyFlashcardSession(userId, sessionId))
  scheduleCloudIfNeeded(userId)
}

/** Alle opgeslagen flashcard-sessies voor voortgang in het deck-overzicht. */
export function loadFlashcardSessionMap(userId) {
  const out = {}
  if (!userId) return out
  const prefix = `${PREFIX_FLASHCARD_SESSION}:${userId}:`
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (!key || !key.startsWith(prefix)) continue
      const sessionId = key.slice(prefix.length)
      const data = safeParse(localStorage.getItem(key))
      if (data && typeof data === 'object') out[sessionId] = data
    }
  } catch {
    /* ignore */
  }
  return out
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
  const fcSessPref = `${PREFIX_FLASHCARD_SESSION}:${guestId}:`
  const fcSrsKey = storageKeyFlashcardSrs(guestId)
  const sKey = storageKeySummaryRead(guestId)
  const hlKey = storageKeySummaryHighlights(guestId)
  const chatKey = getChatStorageKey(guestId)
  for (const key of keys) {
    if (
      key.startsWith(pPref) ||
      key.startsWith(ePref) ||
      key.startsWith(ebPref) ||
      key.startsWith(fcSessPref) ||
      key === fcSrsKey ||
      key === chatKey ||
      key === sKey ||
      key === hlKey
    ) {
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
    const prefixFcSess = `${PREFIX_FLASHCARD_SESSION}:${guestId}:`
    const fcSrsGuest = storageKeyFlashcardSrs(guestId)
    const fcSrsUser = storageKeyFlashcardSrs(newUserId)
    const summaryGuest = storageKeySummaryRead(guestId)
    const summaryUser = storageKeySummaryRead(newUserId)
    const hlGuest = storageKeySummaryHighlights(guestId)
    const hlUser = storageKeySummaryHighlights(newUserId)
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
      } else if (key.startsWith(prefixFcSess)) {
        const suffix = key.slice(prefixFcSess.length)
        const dest = `${PREFIX_FLASHCARD_SESSION}:${newUserId}:${suffix}`
        if (!localStorage.getItem(dest)) {
          localStorage.setItem(dest, localStorage.getItem(key))
        }
      }
    }
    const gFcSrs = localStorage.getItem(fcSrsGuest)
    if (gFcSrs && !localStorage.getItem(fcSrsUser)) {
      localStorage.setItem(fcSrsUser, gFcSrs)
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
    const gHlRaw = localStorage.getItem(hlGuest)
    if (gHlRaw) {
      const guestHl = safeParse(gHlRaw)
      const userHl = safeParse(localStorage.getItem(hlUser)) || {}
      if (guestHl && typeof guestHl === 'object') {
        localStorage.setItem(hlUser, JSON.stringify({ ...guestHl, ...userHl }))
      }
    }
    clearGuestScopedData(guestId)
  } catch {
    /* quota */
  }
}
