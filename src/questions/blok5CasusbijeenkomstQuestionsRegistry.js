// Auto-generated — scripts/emit-casusbijeenkomst-questions.mjs
import { blok5Week1Casus1CasusbijeenkomstQuestionsMap } from '../questions/blok5-week1-casus1-casusbijeenkomst'
import { blok5Week1Casus2CasusbijeenkomstQuestionsMap } from '../questions/blok5-week1-casus2-casusbijeenkomst'
import { blok5Week2Casus3CasusbijeenkomstQuestionsMap } from '../questions/blok5-week2-casus3-casusbijeenkomst'
import { blok5Week2Casus4CasusbijeenkomstQuestionsMap } from '../questions/blok5-week2-casus4-casusbijeenkomst'
import { blok5Week3Casus6CasusbijeenkomstQuestionsMap } from '../questions/blok5-week3-casus6-casusbijeenkomst'
import { blok5Week4Casus7CasusbijeenkomstQuestionsMap } from '../questions/blok5-week4-casus7-casusbijeenkomst'
import { blok5Week4Casus8CasusbijeenkomstQuestionsMap } from '../questions/blok5-week4-casus8-casusbijeenkomst'
import { blok5Week5Casus9CasusbijeenkomstQuestionsMap } from '../questions/blok5-week5-casus9-casusbijeenkomst'
import { blok5Week5Casus10CasusbijeenkomstQuestionsMap } from '../questions/blok5-week5-casus10-casusbijeenkomst'
import { blok5Week6Casus11CasusbijeenkomstQuestionsMap } from '../questions/blok5-week6-casus11-casusbijeenkomst'
import { blok5Week6Casus12CasusbijeenkomstQuestionsMap } from '../questions/blok5-week6-casus12-casusbijeenkomst'
import { blok5Week6Casus13CasusbijeenkomstQuestionsMap } from '../questions/blok5-week6-casus13-casusbijeenkomst'

export const BLOK5_CASUSBIJEENKOMST_QUESTIONS_MAPS = {
  'blok5-week1-casus1-casusbijeenkomst': blok5Week1Casus1CasusbijeenkomstQuestionsMap,
  'blok5-week1-casus2-casusbijeenkomst': blok5Week1Casus2CasusbijeenkomstQuestionsMap,
  'blok5-week2-casus3-casusbijeenkomst': blok5Week2Casus3CasusbijeenkomstQuestionsMap,
  'blok5-week2-casus4-casusbijeenkomst': blok5Week2Casus4CasusbijeenkomstQuestionsMap,
  'blok5-week3-casus6-casusbijeenkomst': blok5Week3Casus6CasusbijeenkomstQuestionsMap,
  'blok5-week4-casus7-casusbijeenkomst': blok5Week4Casus7CasusbijeenkomstQuestionsMap,
  'blok5-week4-casus8-casusbijeenkomst': blok5Week4Casus8CasusbijeenkomstQuestionsMap,
  'blok5-week5-casus9-casusbijeenkomst': blok5Week5Casus9CasusbijeenkomstQuestionsMap,
  'blok5-week5-casus10-casusbijeenkomst': blok5Week5Casus10CasusbijeenkomstQuestionsMap,
  'blok5-week6-casus11-casusbijeenkomst': blok5Week6Casus11CasusbijeenkomstQuestionsMap,
  'blok5-week6-casus12-casusbijeenkomst': blok5Week6Casus12CasusbijeenkomstQuestionsMap,
  'blok5-week6-casus13-casusbijeenkomst': blok5Week6Casus13CasusbijeenkomstQuestionsMap,
}

export function getCasusbijeenkomstQuestions(lmeParam) {
  const map = BLOK5_CASUSBIJEENKOMST_QUESTIONS_MAPS[lmeParam]
  if (!map) return null
  return Object.values(map).flat()
}
