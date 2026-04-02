/**
 * Aantallen voor blok-headers (weken · casussen · LME's / samenvattingen), afgeleid van de nested structuur.
 */

function imageSlotCountFromQuestionsMap(map) {
  if (!map || typeof map !== 'object') return 0
  return Object.keys(map).length
}

/**
 * Aantal oefenpagina's (één simple LME = 1; image-based = aantal keys in questionsMap).
 */
export function countPracticeLeafSlotsInBlok(blok) {
  const weeks = blok?.weeks?.length ?? 0
  let cases = 0
  let leaves = 0
  for (const w of blok?.weeks ?? []) {
    cases += w.cases?.length ?? 0
    for (const c of w.cases ?? []) {
      for (const lme of c.lmes ?? []) {
        if (lme.type === 'image-based' && lme.questionsMap) {
          leaves += imageSlotCountFromQuestionsMap(lme.questionsMap)
        } else {
          leaves += 1
        }
      }
    }
  }
  return { weeks, cases, leaves }
}

/**
 * Aantal samenvatting-links (simple = 1; image-based = imageCount indien gezet).
 */
export function countSummaryLeafSlotsInBlok(blok) {
  const weeks = blok?.weeks?.length ?? 0
  let cases = 0
  let leaves = 0
  for (const w of blok?.weeks ?? []) {
    cases += w.cases?.length ?? 0
    for (const c of w.cases ?? []) {
      for (const lme of c.lmes ?? []) {
        if (lme.type === 'image-based' && typeof lme.imageCount === 'number') {
          leaves += lme.imageCount
        } else {
          leaves += 1
        }
      }
    }
  }
  return { weeks, cases, leaves }
}

export function formatPracticeBlokSubtitle(blok) {
  const { weeks, cases, leaves } = countPracticeLeafSlotsInBlok(blok)
  const w = weeks === 1 ? '1 week' : `${weeks} weken`
  const c = cases === 1 ? '1 casus' : `${cases} casussen`
  return `${w} · ${c} · ${leaves} LME's`
}

export function formatSummaryBlokSubtitle(blok) {
  const { weeks, cases, leaves } = countSummaryLeafSlotsInBlok(blok)
  const w = weeks === 1 ? '1 week' : `${weeks} weken`
  const c = cases === 1 ? '1 casus' : `${cases} casussen`
  return `${w} · ${c} · ${leaves} LME's`
}
