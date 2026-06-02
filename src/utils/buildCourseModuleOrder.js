import { splitCasusModules } from './courseModuleKind'

/**
 * Volgorde van module-ids zoals in het cursusoverzicht (casusbijeenkomst → flankerend).
 */
export function flattenCasusModuleIds(casus, flankerendIdsByCase) {
  const { casusbijeenkomstItems, flankerendItems } = splitCasusModules(casus, flankerendIdsByCase)
  const ids = []
  for (const item of [...casusbijeenkomstItems, ...flankerendItems]) {
    if (!item?.id || item.available === false) continue
    if (item.type === 'image-based') continue
    ids.push(item.id)
  }
  return ids
}

export function flattenBlokWeeks(weeks, flankerendIdsByCase) {
  if (!weeks?.length) return []
  return weeks.flatMap((week) =>
    (week.cases ?? []).flatMap((casus) => flattenCasusModuleIds(casus, flankerendIdsByCase)),
  )
}

export function flattenCourseStructure(blok, flankerendIdsByCase) {
  if (!blok?.weeks) return []
  return flattenBlokWeeks(blok.weeks, flankerendIdsByCase)
}
