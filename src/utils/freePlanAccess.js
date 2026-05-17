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

/**
 * Blok 10: alleen week-casus 1 (Maagklachten, `…-casus1-…`) is gratis.
 * `casus2`, `casus-c03`, enz. zijn premium (zelfde als “casus 2 en verder”).
 */
function isBlok10PremiumCasusLme(lmeId) {
  if (!lmeId || typeof lmeId !== 'string') return false
  if (!lmeId.startsWith('blok10-week')) return false
  return !/^blok10-week\d+-casus1-/.test(lmeId)
}

/**
 * `casus-random-${blok}-w${week}-c${casusIndex}` — indices 0-based (w0 = week 1, c0 = eerste casus).
 * Blok 10: alleen week 1 + eerste casus (Maagklachten) is gratis zonder premium.
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
  if (isBlok10PremiumCasusLme(lmeId)) return true
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
    if (parsed.blokKey === 'blok10' && parsed.weekIdx === 0 && parsed.casusIdx === 0) return false
    return true
  }
  return isFreePlanBlockedLme(lmeParam)
}

export function isFreePlanCasusRandomPracticeUnlocked(blokKey, weekIdx, casusIdx) {
  return blokKey === 'blok10' && weekIdx === 0 && casusIdx === 0
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
