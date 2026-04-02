import { blok5Exams } from '../questions/exam-blok5'
import { blok9Exams } from '../questions/exam-blok9'

/**
 * Per blok: array van tentamen-objecten.
 */
export const EXAMS_BY_BLOK = {
  5: blok5Exams,
  9: blok9Exams,
}

export function getExamsForBlok(blok) {
  const n = Number(blok)
  return EXAMS_BY_BLOK[n] ?? []
}
