import { useCallback, useEffect, useState } from 'react'

function loadState(storageKey) {
  try {
    const raw = localStorage.getItem(storageKey)
    if (raw === null) return null
    const parsed = JSON.parse(raw)
    return {
      weeks: Array.isArray(parsed.weeks) ? parsed.weeks : [],
      cases: Array.isArray(parsed.cases) ? parsed.cases : [],
    }
  } catch {
    return null
  }
}

function buildAllCollapsed(weeks, weekId, caseId) {
  const weeksSet = new Set()
  const casesSet = new Set()
  weeks.forEach((week, weekIndex) => {
    weeksSet.add(weekId(weekIndex))
    week.cases.forEach((_, caseIndex) => {
      casesSet.add(caseId(weekIndex, caseIndex))
    })
  })
  return { weeks: weeksSet, cases: casesSet }
}

export function useCourseTreeCollapse(blokKey, pageScope, weeks) {
  const storageKey = `smartium-${pageScope}-collapse-v2-${blokKey}`

  const weekId = useCallback((weekIndex) => `${blokKey}-w-${weekIndex}`, [blokKey])
  const caseId = useCallback(
    (weekIndex, caseIndex) => `${blokKey}-w-${weekIndex}-c-${caseIndex}`,
    [blokKey],
  )

  const [collapsedWeeks, setCollapsedWeeks] = useState(() => {
    const saved = loadState(storageKey)
    if (saved === null) {
      return buildAllCollapsed(weeks, weekId, caseId).weeks
    }
    return new Set(saved.weeks)
  })

  const [collapsedCases, setCollapsedCases] = useState(() => {
    const saved = loadState(storageKey)
    if (saved === null) {
      return buildAllCollapsed(weeks, weekId, caseId).cases
    }
    return new Set(saved.cases)
  })

  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        weeks: [...collapsedWeeks],
        cases: [...collapsedCases],
      }),
    )
  }, [storageKey, collapsedWeeks, collapsedCases])

  const isWeekExpanded = useCallback(
    (weekIndex) => !collapsedWeeks.has(weekId(weekIndex)),
    [collapsedWeeks, weekId],
  )

  const isCaseExpanded = useCallback(
    (weekIndex, caseIndex) => !collapsedCases.has(caseId(weekIndex, caseIndex)),
    [collapsedCases, caseId],
  )

  const toggleWeek = useCallback(
    (weekIndex) => {
      const id = weekId(weekIndex)
      setCollapsedWeeks((prev) => {
        const next = new Set(prev)
        if (next.has(id)) next.delete(id)
        else next.add(id)
        return next
      })
    },
    [weekId],
  )

  const toggleCase = useCallback(
    (weekIndex, caseIndex) => {
      const id = caseId(weekIndex, caseIndex)
      setCollapsedCases((prev) => {
        const next = new Set(prev)
        if (next.has(id)) next.delete(id)
        else next.add(id)
        return next
      })
    },
    [caseId],
  )

  const expandAllWeeks = useCallback(() => setCollapsedWeeks(new Set()), [])
  const collapseAllWeeks = useCallback(
    (weekCount) => {
      setCollapsedWeeks(new Set(Array.from({ length: weekCount }, (_, i) => weekId(i))))
    },
    [weekId],
  )

  const expandAllCases = useCallback(() => setCollapsedCases(new Set()), [])

  const collapseAllCases = useCallback(
    (weekList) => {
      const ids = []
      weekList.forEach((week, weekIndex) => {
        week.cases.forEach((_, caseIndex) => {
          ids.push(caseId(weekIndex, caseIndex))
        })
      })
      setCollapsedCases(new Set(ids))
    },
    [caseId],
  )

  return {
    isWeekExpanded,
    isCaseExpanded,
    toggleWeek,
    toggleCase,
    expandAllWeeks,
    collapseAllWeeks,
    expandAllCases,
    collapseAllCases,
  }
}

/** @deprecated Use useCourseTreeCollapse */
export function useSummaryTreeCollapse(blokKey, weeks = []) {
  return useCourseTreeCollapse(blokKey, 'summary', weeks)
}
