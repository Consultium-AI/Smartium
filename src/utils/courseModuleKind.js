/** Moduletype uit id of expliciet veld; splitsing en sortering casus-overzicht (blok 5 ≈ blok 10). */

const VALID_KINDS = new Set(['lme', 'lmo', 'lmv', 'stm', 'casusbijeenkomst'])

const KIND_SORT_ORDER = {
  casusbijeenkomst: 0,
  lme: 1,
  lmo: 2,
  stm: 3,
  lmv: 4,
}

export function inferModuleKindFromId(id) {
  if (!id || typeof id !== 'string') return 'lme'
  if (id.includes('-casusbijeenkomst')) return 'casusbijeenkomst'
  if (id.includes('-lmo-')) return 'lmo'
  if (id.includes('-lmv-')) return 'lmv'
  if (id.includes('-stm-')) return 'stm'
  return 'lme'
}

export function resolveModuleKind(item) {
  const explicit = item?.moduleKind
  if (explicit && VALID_KINDS.has(explicit)) return explicit
  return inferModuleKindFromId(item?.id)
}

export function enrichCourseModuleItem(item) {
  if (!item) return item
  return { ...item, moduleKind: resolveModuleKind(item) }
}

function kindSortIndex(item) {
  return KIND_SORT_ORDER[resolveModuleKind(item)] ?? KIND_SORT_ORDER.lme
}

export function sortCasusModuleItems(items) {
  return items
    .map((item, index) => ({ item: enrichCourseModuleItem(item), index }))
    .sort((a, b) => {
      const diff = kindSortIndex(a.item) - kindSortIndex(b.item)
      return diff !== 0 ? diff : a.index - b.index
    })
    .map(({ item }) => item)
}

export function isFlankerendCourseModule(item, flankerendIds) {
  if (flankerendIds?.has(item.id)) return true
  const kind = resolveModuleKind(item)
  return kind === 'lmo' || kind === 'lmv' || kind === 'stm'
}

/**
 * Casusbijeenkomst-sectie: casusbijeenkomst + LME (+ expliciete flankerend-LME-ids die geen lmo/lmv/stm zijn).
 * Flankerend: LMO, LMV, STM en overige ids in flankerendIds.
 */
export function splitCasusModules(casus, flankerendIdsByCase) {
  const flankerendIds = flankerendIdsByCase?.[casus.name]
  const lmes = casus.lmes ?? []
  const casusbijeenkomstItems = []
  const flankerendItems = []

  for (const raw of lmes) {
    const item = enrichCourseModuleItem(raw)
    if (isFlankerendCourseModule(item, flankerendIds)) {
      flankerendItems.push(item)
    } else {
      casusbijeenkomstItems.push(item)
    }
  }

  return {
    casusbijeenkomstItems: sortCasusModuleItems(casusbijeenkomstItems),
    flankerendItems: sortCasusModuleItems(flankerendItems),
  }
}
