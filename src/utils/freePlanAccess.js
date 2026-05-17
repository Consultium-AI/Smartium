const BLOCKED_BLOK5_CASUS_FOR_FREE = new Set([5, 7, 9, 11, 13])

const FREE_ALLOWED_EXAMS_BY_BLOK = {
  4: new Set([1, 2]),
  5: new Set([1, 2]),
  9: new Set([1, 2]),
}

function getBlok5CasusNumberFromLme(lmeId) {
  if (!lmeId || typeof lmeId !== 'string') return null
  const match = lmeId.match(/^blok5-week\d+-casus(\d+)-/)
  if (!match) return null
  const casusNr = Number.parseInt(match[1], 10)
  return Number.isFinite(casusNr) ? casusNr : null
}

/** Blok 10: casus 1 gratis, casus 2 (alle weken) alleen met premium. */
function isBlok10Casus2Lme(lmeId) {
  return Boolean(lmeId && typeof lmeId === 'string' && /^blok10-week\d+-casus2-/.test(lmeId))
}

/**
 * `casus-random-${blok}-w${week}-c${casusIndex}` — casusIndex is 0-based (c0 = eerste casus).
 * Alleen blok 10 casus 1 (index 0) is gratis mee te oefenen zonder premium.
 */
function parseCasusRandomParam(lmeParam) {
  const suffix = lmeParam.replace('casus-random-', '')
  const wIdx = suffix.lastIndexOf('-w')
  const cIdx = suffix.lastIndexOf('-c')
  if (wIdx === -1 || cIdx === -1) return null
  const blokKey = suffix.substring(0, wIdx)
  const weekIdx = Number.parseInt(suffix.substring(wIdx + 2, cIdx), 10)
  const casusIdx = Number.parseInt(suffix.substring(cIdx + 2), 10)
  if (!Number.isFinite(weekIdx) || !Number.isFinite(casusIdx)) return null
  return { blokKey, weekIdx, casusIdx }
}

/** Korte samenvattingen (`…-mini`) zijn alleen voor betaalde plannen. */
export function isKorteSamenvattingLme(lmeId) {
  return Boolean(lmeId && typeof lmeId === 'string' && lmeId.endsWith('-mini'))
}

export function isFreePlanBlockedLme(lmeId) {
  if (isKorteSamenvattingLme(lmeId)) return true
  if (isBlok10Casus2Lme(lmeId)) return true
  const casusNr = getBlok5CasusNumberFromLme(lmeId)
  if (!casusNr) return false
  return BLOCKED_BLOK5_CASUS_FOR_FREE.has(casusNr)
}

/** Oefenvragen-URL: directe LME, casus-random, blok-random, blok-fouten. */
export function isFreePlanBlockedPracticeLme(lmeParam) {
  if (!lmeParam || typeof lmeParam !== 'string') return false
  if (lmeParam.startsWith('blok-fouten-')) return true
  if (lmeParam.startsWith('blok-random-')) return true
  if (lmeParam.startsWith('casus-random-')) {
    const parsed = parseCasusRandomParam(lmeParam)
    if (!parsed) return true
    if (parsed.blokKey === 'blok10' && parsed.casusIdx === 0) return false
    return true
  }
  return isFreePlanBlockedLme(lmeParam)
}

export function isFreePlanCasusRandomPracticeUnlocked(blokKey, casusIdx) {
  return blokKey === 'blok10' && casusIdx === 0
}

export function isFreePlanAllowedExam(blok, examNr) {
  const allowed = FREE_ALLOWED_EXAMS_BY_BLOK[Number(blok)]
  if (!allowed) return true
  return allowed.has(Number(examNr))
}

export function canFreePlanAccessRoute(pathname, search = '') {
  const params = new URLSearchParams(search || '')

  if (pathname === '/summary' || pathname === '/oefenvragen') {
    const lme = params.get('lme')
    if (!lme) return true
    if (pathname === '/oefenvragen') return !isFreePlanBlockedPracticeLme(lme)
    if (lme.startsWith('blok-fouten-')) return false
    return !isFreePlanBlockedLme(lme)
  }

  const tentamenBlokMatch = pathname.match(/^\/tentamen-blok(\d+)$/)
  if (tentamenBlokMatch) {
    const nr = Number.parseInt(params.get('nr') || '', 10)
    if (!Number.isFinite(nr)) return true
    const blok = Number(tentamenBlokMatch[1])
    return isFreePlanAllowedExam(blok, nr)
  }

  return true
}
