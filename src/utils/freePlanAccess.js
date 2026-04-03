const BLOCKED_BLOK5_CASUS_FOR_FREE = new Set([5, 7, 9, 11, 13])

const FREE_ALLOWED_EXAMS_BY_BLOK = {
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

export function isFreePlanBlockedLme(lmeId) {
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
    return !isFreePlanBlockedLme(lme)
  }

  if (pathname === '/tentamen-blok5' || pathname === '/tentamen-blok9') {
    const nr = Number.parseInt(params.get('nr') || '', 10)
    if (!Number.isFinite(nr)) return true
    const blok = pathname.endsWith('blok9') ? 9 : 5
    return isFreePlanAllowedExam(blok, nr)
  }

  return true
}
