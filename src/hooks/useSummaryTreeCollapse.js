import { useCallback, useEffect, useState } from 'react'

function loadState(storageKey) {
  try {
    const raw = localStorage.getItem(storageKey)
    if (!raw) return { weeks: [], cases: [] }
    const parsed = JSON.parse(raw)
    return {
      weeks: Array.isArray(parsed.weeks) ? parsed.weeks : [],
      cases: Array.isArray(parsed.cases) ? parsed.cases : [],
    }
  } catch {
    return { weeks: [], cases: [] }
  }
}

export function useSummaryTreeCollapse(blokKey) {
  const storageKey = `smartium-summary-collapse-${blokKey}`
  const [collapsedWeeks, setCollapsedWeeks] = useState(() => new Set(loadState(storageKey).weeks))
  const [collapsedCases, setCollapsedCases] = useState(() => new Set(loadState(storageKey).cases))

  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        weeks: [...collapsedWeeks],
        cases: [...collapsedCases],
      }),
    )
  }, [storageKey, collapsedWeeks, collapsedCases])

  const weekId = useCallback((weekIndex) => `${blokKey}-w-${weekIndex}`, [blokKey])
  const caseId = useCallback(
    (weekIndex, caseIndex) => `${blokKey}-w-${weekIndex}-c-${caseIndex}`,
    [blokKey],
  )

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
    (weeks) => {
      const ids = []
      weeks.forEach((week, weekIndex) => {
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
