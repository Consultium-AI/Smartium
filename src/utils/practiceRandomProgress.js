import { loadPracticeProgress, isAccountProgressUser } from './accountProgressStorage'
import {
  getPracticeQuestionsForLme,
  parseBlokkenRandomParam,
  formatPracticeBlokKeysLabel,
} from '../pages/PracticeQuestionsRegistry'

const PREFIX = 'smartium_practice_v1'

export function shuffleIndices(length) {
  const arr = Array.from({ length }, (_, i) => i)
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function applyQuestionOrder(baseQuestions, orderIndices) {
  return orderIndices.map((idx, displayIdx) => ({
    ...baseQuestions[idx],
    id: displayIdx + 1,
  }))
}

export function buildShuffledQuestions(baseQuestions, savedProgress) {
  if (savedProgress?.questionOrder?.length === baseQuestions.length) {
    return {
      questions: applyQuestionOrder(baseQuestions, savedProgress.questionOrder),
      questionOrder: savedProgress.questionOrder,
    }
  }
  const order = shuffleIndices(baseQuestions.length)
  return {
    questions: applyQuestionOrder(baseQuestions, order),
    questionOrder: order,
  }
}

export function getPracticeRandomSessionMeta(saved, totalQuestions) {
  if (!saved || !totalQuestions) return null
  const selected =
    saved.selectedAnswers && typeof saved.selectedAnswers === 'object' ? saved.selectedAnswers : {}
  const revealed =
    saved.revealedAnswers && typeof saved.revealedAnswers === 'object' ? saved.revealedAnswers : {}
  const revealedCount = Object.values(revealed).filter(Boolean).length
  const answered = Object.keys(selected).length
  const current = typeof saved.currentQuestion === 'number' ? saved.currentQuestion : 0
  const started = answered > 0 || current > 0 || revealedCount > 0
  if (!started) return null
  return {
    started: true,
    completed: revealedCount >= totalQuestions,
    revealedCount,
    totalQuestions,
    currentQuestion: Math.min(Math.max(0, current), totalQuestions - 1),
    updatedAt: typeof saved.updatedAt === 'number' ? saved.updatedAt : 0,
  }
}

export function formatPracticeBlokKeysShortLabel(blokKeys) {
  return blokKeys
    .map((k) => k.match(/^blok(\d+)$/)?.[1] || k.replace(/^blok/, ''))
    .join('+')
}

export function formatResumeSessionShort(session) {
  if (!session?.meta) return ''
  const blocks = formatPracticeBlokKeysShortLabel(session.blokKeys)
  const progress = `${session.meta.currentQuestion + 1}/${session.meta.totalQuestions}`
  return `${blocks} · ${progress}`
}

function buildResumeSessionEntry(userId, lmeParam) {
  const saved = loadPracticeProgress(userId, lmeParam)
  const total = getPracticeQuestionsForLme(lmeParam).length
  const meta = getPracticeRandomSessionMeta(saved, total)
  if (!meta || meta.completed) return null

  const blokKeys = parseBlokkenRandomParam(lmeParam)
  if (!blokKeys.length) return null

  return {
    lmeParam,
    meta,
    blokKeys,
    label: formatPracticeBlokKeysLabel(blokKeys),
    shortLabel: formatResumeSessionShort({
      blokKeys,
      meta,
    }),
  }
}

export function findBlokkenRandomSessionsInProgress(userId, limit = 5) {
  if (!isAccountProgressUser(userId)) return []
  const keyPrefix = `${PREFIX}:${userId}:`
  const suffixPrefix = 'blokken-random-'
  const sessions = []

  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (!key?.startsWith(keyPrefix)) continue
      const lmeParam = key.slice(keyPrefix.length)
      if (!lmeParam.startsWith(suffixPrefix)) continue

      const entry = buildResumeSessionEntry(userId, lmeParam)
      if (entry) sessions.push(entry)
    }
  } catch {
    /* private mode / quota */
  }

  sessions.sort((a, b) => b.meta.updatedAt - a.meta.updatedAt)
  return sessions.slice(0, limit)
}

/** @deprecated gebruik findBlokkenRandomSessionsInProgress */
export function findLatestBlokkenRandomInProgress(userId) {
  return findBlokkenRandomSessionsInProgress(userId, 1)[0] ?? null
}
