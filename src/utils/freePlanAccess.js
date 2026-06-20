const BLOCKED_BLOK5_CASUS_FOR_FREE = new Set([5, 7, 9, 11, 13])

/** Blok 5 oefententamens 3–5 alleen met premium (1–2 gratis). */
export const BLOK5_PREMIUM_EXAM_NUMBERS = new Set([3, 4, 5])

/** Blok 10 oefententamens 3–5 alleen met premium (1–2 gratis). */
export const BLOK10_PREMIUM_EXAM_NUMBERS = new Set([3, 4, 5])

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
 * Leidt het officiële casusnummer van Blok 10 uit een LME-id af.
 * Voorbeelden: `…-casus1-…` / `…-casus2-…`, `…-casus-c03-…` (→ 3), `…-casus-c10-…` (→ 10).
 */
function getBlok10CasusOrdinalFromLme(lmeId) {
  if (!lmeId || typeof lmeId !== 'string') return null
  const cTagged = lmeId.match(/^blok10-week\d+-casus-c(\d+)-/)
  if (cTagged) {
    const n = Number.parseInt(cTagged[1], 10)
    return Number.isFinite(n) ? n : null
  }
  const numTagged = lmeId.match(/^blok10-week\d+-casus(\d+)-/)
  if (numTagged) {
    const n = Number.parseInt(numTagged[1], 10)
    return Number.isFinite(n) ? n : null
  }
  return null
}

/**
 * Zelfde casusnummers als in `practiceQuestionsCourseStructure` voor blok10:
 * week 0: casus 1 (en evt. 2); week ≥1: opeenvolgend 3–4, 5–6, …
 */
function getBlok10CasusOrdinalFromWeekCaseIndices(weekIdx, casusIdx) {
  if (weekIdx === 0) return casusIdx + 1
  return 2 * weekIdx + 1 + casusIdx
}

/**
 * Blok 10 free tier: oneven casussen (1, 3, 5, …) gratis, even casussen (2, 4, 6, …) premium.
 */
function isBlok10PremiumCasusLme(lmeId) {
  if (!lmeId || typeof lmeId !== 'string' || !lmeId.startsWith('blok10-week')) return false
  const n = getBlok10CasusOrdinalFromLme(lmeId)
  if (n === null) return true
  return n % 2 === 0
}

/**
 * `casus-random-${blok}-w${week}-c${casusIndex}` — indices 0-based (w0 = week 1, c0 = eerste casus).
 * Blok 10: zelfde alternating als directe LME’s (oneven casus = gratis).
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
  if (lmeParam.startsWith('blokken-random-')) return true
  if (lmeParam.startsWith('casus-random-')) {
    const parsed = parseCasusRandomParam(lmeParam)
    if (!parsed) return true
    if (parsed.blokKey === 'blok10') {
      const n = getBlok10CasusOrdinalFromWeekCaseIndices(parsed.weekIdx, parsed.casusIdx)
      return n % 2 === 0
    }
    return true
  }
  return isFreePlanBlockedLme(lmeParam)
}

export function isFreePlanCasusRandomPracticeUnlocked(blokKey, weekIdx, casusIdx) {
  if (blokKey !== 'blok10') return false
  const n = getBlok10CasusOrdinalFromWeekCaseIndices(weekIdx, casusIdx)
  return n % 2 === 1
}

export function isBlok5PremiumExam(examNr) {
  return BLOK5_PREMIUM_EXAM_NUMBERS.has(Number(examNr))
}

export function isBlok10PremiumExam(examNr) {
  return BLOK10_PREMIUM_EXAM_NUMBERS.has(Number(examNr))
}

export function isFreePlanAllowedExam(blok, examNr) {
  const b = Number(blok)
  const nr = Number(examNr)
  if (b === 5 && isBlok5PremiumExam(nr)) return false
  if (b === 10 && isBlok10PremiumExam(nr)) return false
  const allowed = FREE_ALLOWED_EXAMS_BY_BLOK[b]
  if (!allowed) return true
  return allowed.has(nr)
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
    const blok = Number.parseInt(tentamenBlokMatch[1], 10)
    return isFreePlanAllowedExam(blok, nr)
  }

  return true
}
