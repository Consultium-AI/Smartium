import { blok4Exams } from '../questions/exam-blok4'
import { blok5Exams } from '../questions/exam-blok5'
import { blok9Exams } from '../questions/exam-blok9'
import { blok10Exams } from '../questions/exam-blok10'
import { ssinterneExams } from '../questions/exam-ssinterne'

/**
 * Per blok: array van tentamen-objecten.
 * Sleutel is het bloknummer (bachelor) of een blok-slug (master).
 */
export const EXAMS_BY_BLOK = {
  4: blok4Exams,
  5: blok5Exams,
  9: blok9Exams,
  10: blok10Exams,
  ssinterne: ssinterneExams,
}

export function getExamsForBlok(blok) {
  const n = Number(blok)
  if (Number.isFinite(n)) return EXAMS_BY_BLOK[n] ?? []
  return EXAMS_BY_BLOK[blok] ?? []
}
