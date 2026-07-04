import { useMemo, useState } from 'react'
import { BookOpen } from 'lucide-react'
import {
  CourseModuleSearch,
  CourseWeekAccordionHeader,
  CourseWeekExpandControls,
} from './course/CourseOverviewLayout'
import { useCourseTreeCollapse } from '../hooks/useCourseTreeCollapse'

function countLmes(casus) {
  return casus.lmes?.length ?? 0
}

function countWeekModules(week) {
  return week.cases.reduce((n, casus) => n + countLmes(casus), 0)
}

function flattenSearchModules(weeks) {
  const results = []
  for (const week of weeks) {
    for (const casus of week.cases) {
      for (const lme of casus.lmes ?? []) {
        results.push({ lme, weekName: week.name, casusName: casus.name })
      }
    }
  }
  return results
}

export default function SummaryCourseWeekTree({
  blokKey,
  weeks,
  pageScope = 'summary',
  renderCaseSections,
  renderWeekFooter,
  renderSearchModule,
}) {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLowerCase()

  const { isWeekExpanded, toggleWeek, expandAllWeeks, collapseAllWeeks } = useCourseTreeCollapse(
    blokKey,
    pageScope,
    weeks,
  )

  const searchResults = useMemo(() => {
    if (!normalizedQuery) return []
    return flattenSearchModules(weeks).filter(({ lme }) => lme.name.toLowerCase().includes(normalizedQuery))
  }, [weeks, normalizedQuery])

  const hasMultipleWeeks = weeks.length > 1

  return (
    <div>
      <CourseModuleSearch query={query} onChange={setQuery} />

      {normalizedQuery ? (
        <div className="space-y-2 mb-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-2">
            {searchResults.length} resultaat{searchResults.length === 1 ? '' : 'en'}
          </p>
          {searchResults.length === 0 ? (
            <p className="text-sm text-slate-500 dark:text-slate-400 py-6 text-center">Geen modules gevonden.</p>
          ) : (
            searchResults.map(({ lme, weekName, casusName }, index) =>
              renderSearchModule ? (
                renderSearchModule(lme, `${lme.id}-${index}`, { weekName, casusName })
              ) : null,
            )
          )}
        </div>
      ) : (
        <>
          {hasMultipleWeeks ? (
            <CourseWeekExpandControls
              onExpandAll={expandAllWeeks}
              onCollapseAll={() => collapseAllWeeks(weeks.length)}
            />
          ) : null}

          <div className="space-y-3">
            {weeks.map((week, weekIndex) => {
              const weekOpen = isWeekExpanded(weekIndex)
              const moduleCount = countWeekModules(week)

              return (
                <div
                  key={week.name}
                  className="rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-white/60 dark:bg-slate-900/40 overflow-hidden"
                >
                  <CourseWeekAccordionHeader
                    weekName={week.name}
                    moduleCount={moduleCount}
                    isOpen={weekOpen}
                    onToggle={() => toggleWeek(weekIndex)}
                  />
                  {weekOpen ? (
                    <div className="px-3 pb-3 space-y-4 border-t border-slate-100 dark:border-slate-800/80">
                      {week.cases.map((casus, casusIndex) => (
                        <div key={casus.name} className="pt-3">
                          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-2 px-1">
                            <BookOpen className="w-3.5 h-3.5" />
                            {casus.name}
                          </p>
                          <div className="space-y-2">
                            {renderCaseSections(casus, weekIndex, casusIndex)}
                          </div>
                        </div>
                      ))}
                      {renderWeekFooter ? renderWeekFooter(week, weekIndex) : null}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
