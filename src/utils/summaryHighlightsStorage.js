/**
 * Tekstmarkeringen in samenvattingen per gebruiker en LME.
 */
const PREFIX = 'smartium_summary_hl_v1'

function safeParse(raw) {
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function storageKey(userId) {
  return `${PREFIX}:${userId}`
}

function scheduleCloudIfNeeded(userId) {
  if (!userId || userId === 'guest') return
  import('../lib/cloudUserProgress')
    .then((m) => m.scheduleCloudProgressSync(userId))
    .catch(() => {})
}

export function loadSummaryHighlightsMap(userId) {
  if (!userId) return {}
  const data = safeParse(localStorage.getItem(storageKey(userId)))
  if (!data || typeof data !== 'object') return {}
  return data
}

export function loadSummaryHighlights(userId, lmeId) {
  if (!userId || !lmeId) return []
  const map = loadSummaryHighlightsMap(userId)
  const list = map[lmeId]
  return Array.isArray(list) ? list : []
}

export function saveSummaryHighlights(userId, lmeId, highlights) {
  if (!userId || !lmeId) return
  try {
    const map = loadSummaryHighlightsMap(userId)
    const next = { ...map, [lmeId]: highlights }
    localStorage.setItem(storageKey(userId), JSON.stringify(next))
  } catch {
    /* quota */
  }
  scheduleCloudIfNeeded(userId)
}

export function addSummaryHighlight(userId, lmeId, highlight) {
  const current = loadSummaryHighlights(userId, lmeId)
  saveSummaryHighlights(userId, lmeId, [...current, highlight])
}

export function removeSummaryHighlight(userId, lmeId, highlightId) {
  const current = loadSummaryHighlights(userId, lmeId)
  saveSummaryHighlights(
    userId,
    lmeId,
    current.filter((h) => h.id !== highlightId)
  )
}

export function clearSummaryHighlights(userId, lmeId) {
  if (!userId || !lmeId) return
  const map = loadSummaryHighlightsMap(userId)
  if (!(lmeId in map)) return
  const next = { ...map }
  delete next[lmeId]
  try {
    localStorage.setItem(storageKey(userId), JSON.stringify(next))
  } catch {
    /* quota */
  }
  scheduleCloudIfNeeded(userId)
}

export const SUMMARY_HIGHLIGHTS_STORAGE_PREFIX = PREFIX
