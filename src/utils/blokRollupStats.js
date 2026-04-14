/**
 * Aantallen voor blok-headers (weken · casussen · LM's), afgeleid van de nested structuur.
 * Per LM-module telt één item in `lmes` (geen opsplitsing in afbeeldingen of subvragen).
 */

function countBlokRollup(blok) {
  const weeks = blok?.weeks?.length ?? 0
  let cases = 0
  let lmCount = 0
  for (const w of blok?.weeks ?? []) {
    cases += w.cases?.length ?? 0
    for (const c of w.cases ?? []) {
      lmCount += (c.lmes ?? []).length
    }
  }
  return { weeks, cases, lmCount }
}

export function formatPracticeBlokSubtitle(blok) {
  const { weeks, cases, lmCount } = countBlokRollup(blok)
  const w = weeks === 1 ? '1 week' : `${weeks} weken`
  const c = cases === 1 ? '1 casus' : `${cases} casussen`
  return `${w} · ${c} · ${lmCount} LM's`
}

export function formatSummaryBlokSubtitle(blok) {
  const { weeks, cases, lmCount } = countBlokRollup(blok)
  const w = weeks === 1 ? '1 week' : `${weeks} weken`
  const c = cases === 1 ? '1 casus' : `${cases} casussen`
  return `${w} · ${c} · ${lmCount} LM's`
}
