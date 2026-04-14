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

/** Korte samenvattingen (`…-mini`) zijn alleen voor betaalde plannen. */
export function isKorteSamenvattingLme(lmeId) {
  return Boolean(lmeId && typeof lmeId === 'string' && lmeId.endsWith('-mini'))
}

export function isFreePlanBlockedLme(lmeId) {
  if (isKorteSamenvattingLme(lmeId)) return true
  const casusNr = getBlok5CasusNumberFromLme(lmeId)
  if (!casusNr) return false
  return BLOCKED_BLOK5_CASUS_FOR_FREE.has(casusNr)
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
