/**
 * Lokale voortgang per gebruiker (Firebase uid of 'guest') voor oefenvragen en tentamens.
 */

const PREFIX_PRACTICE = 'smartium_practice_v1'
const PREFIX_EXAM = 'smartium_exam_v1'

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
