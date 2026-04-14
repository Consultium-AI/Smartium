import { blok4Exams } from '../questions/exam-blok4'
import { blok5Exams } from '../questions/exam-blok5'
import { blok9Exams } from '../questions/exam-blok9'

/**
 * Per blok: array van tentamen-objecten.
 */
export const EXAMS_BY_BLOK = {
  4: blok4Exams,
  5: blok5Exams,
  9: blok9Exams,
}

export function getExamsForBlok(blok) {
  const n = Number(blok)
  return EXAMS_BY_BLOK[n] ?? []
}
