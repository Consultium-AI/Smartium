import { loadPracticeProgress } from './accountProgressStorage'
import { getPracticeLmeIdsForBlok, getPracticeQuestionsForLme } from '../pages/PracticeQuestionsRegistry'

function getAnswer(saved, field, questionId) {
  const m = saved?.[field]
  if (!m || typeof m !== 'object') return undefined
  return m[questionId] ?? m[String(questionId)]
}

/**
 * Meerkeuzevragen uit één blok waar de gebruiker (volgens opgeslagen voortgang)
 * een fout antwoord had gekozen bij een getoonde uitslag.
 */
export function collectWrongAnsweredQuestionsForBlok(userId, blokKey) {
  if (!userId || !blokKey) return []
  const lmeIds = getPracticeLmeIdsForBlok(blokKey)
  const out = []
  for (const lmeId of lmeIds) {
    const saved = loadPracticeProgress(userId, lmeId)
    if (!saved) continue
    const questions = getPracticeQuestionsForLme(lmeId)
    if (!Array.isArray(questions) || questions.length === 0) continue
    for (const q of questions) {
      if (q.correctAnswer === undefined || q.correctAnswer === null) continue
      const revealed = getAnswer(saved, 'revealedAnswers', q.id)
      if (!revealed) continue
      const sel = getAnswer(saved, 'selectedAnswers', q.id)
      if (sel !== undefined && sel !== q.correctAnswer) {
        out.push({ ...q })
      }
    }
  }
  return out
}

export function countWrongAnsweredQuestionsForBlok(userId, blokKey) {
  return collectWrongAnsweredQuestionsForBlok(userId, blokKey).length
}
