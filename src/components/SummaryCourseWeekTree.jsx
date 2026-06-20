import { AnimatePresence, motion } from 'framer-motion'
import { Calendar, ChevronDown, ChevronRight, Stethoscope } from 'lucide-react'
import { useSummaryTreeCollapse } from '../hooks/useSummaryTreeCollapse'

const ACCENT_VARIANTS = {
  primary: {
    dot: 'bg-primary-500 dark:bg-primary-400',
    ring: 'ring-primary-500/20 dark:ring-primary-400/30',
  },
  indigo: {
    dot: 'bg-indigo-500 dark:bg-indigo-400',
    ring: 'ring-indigo-500/20 dark:ring-indigo-400/30',
  },
  rose: {
    dot: 'bg-rose-500 dark:bg-rose-400',
    ring: 'ring-rose-500/20 dark:ring-rose-400/30',
  },
  cyan: {
    dot: 'bg-cyan-500 dark:bg-cyan-400',
    ring: 'ring-cyan-500/20 dark:ring-cyan-400/30',
  },
  violet: {
    dot: 'bg-violet-500 dark:bg-violet-400',
    ring: 'ring-violet-500/20 dark:ring-violet-400/30',
  },
}

function countLmes(casus) {
  return casus.lmes?.length ?? 0
}

export default function SummaryCourseWeekTree({
  blokKey,
  weeks,
  accentVariant = 'primary',
  renderCaseSections,
  renderWeekFooter,
  weekSpacing = 'default',
}) {
  const accent = ACCENT_VARIANTS[accentVariant] ?? ACCENT_VARIANTS.primary
  const {
    isWeekExpanded,
    isCaseExpanded,
    toggleWeek,
    toggleCase,
    expandAllWeeks,
    collapseAllWeeks,
    expandAllCases,
    collapseAllCases,
  } = useSummaryTreeCollapse(blokKey)

  const hasMultipleWeeks = weeks.length > 1
  const totalCases = weeks.reduce((n, week) => n + week.cases.length, 0)
  const showBulkControls = hasMultipleWeeks || totalCases > 1

  return (
    <div className="space-y-1">
      {showBulkControls ? (
        <div className="mb-4 flex flex-wrap items-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-3 py-2 dark:border-slate-700/80 dark:bg-slate-900/60">
          <span className="text-xs text-slate-500 dark:text-slate-400 mr-1">Overzicht:</span>
          <button
            type="button"
            onClick={expandAllWeeks}
            className="rounded-lg px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Weeks uitklappen
          </button>
          <button
            type="button"
            onClick={() => collapseAllWeeks(weeks.length)}
            className="rounded-lg px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Weeks inklappen
          </button>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <button
            type="button"
            onClick={expandAllCases}
            className="rounded-lg px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Casussen uitklappen
          </button>
          <button
            type="button"
            onClick={() => collapseAllCases(weeks)}
            className="rounded-lg px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Casussen inklappen
          </button>
        </div>
      ) : null}

      {weeks.map((week, weekIndex) => {
        const weekOpen = isWeekExpanded(weekIndex)
        const caseCount = week.cases.length
        const lmeCount = week.cases.reduce((n, casus) => n + countLmes(casus), 0)

        return (
          <div
            key={weekIndex}
            className={`border-l-2 border-slate-200 pl-5 ml-5 dark:border-slate-600 ${
              weekSpacing === 'loose' ? 'mb-8 last:mb-0' : 'mb-6 last:mb-0'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleWeek(weekIndex)}
              aria-expanded={weekOpen}
              className="group mb-3 flex w-full items-center gap-3 -ml-7 text-left rounded-lg py-1 pr-2 hover:bg-slate-100/80 dark:hover:bg-slate-800/50 transition-colors"
            >
              <div
                className={`w-3 h-3 shrink-0 rounded-full border-4 border-white shadow-sm ring-2 dark:border-slate-950 ${accent.dot} ${accent.ring}`}
              />
              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 dark:border dark:border-slate-700/80 dark:bg-slate-800/90">
                <Calendar className="h-4 w-4 shrink-0 text-slate-600 dark:text-slate-400" />
                <span className="truncate font-medium text-slate-700 dark:text-slate-200 text-sm">
                  {week.name}
                </span>
                {!weekOpen ? (
                  <span className="ml-auto shrink-0 text-[11px] text-slate-500 dark:text-slate-400">
                    {caseCount} {caseCount === 1 ? 'casus' : 'casussen'}
                    {lmeCount > 0 ? ` · ${lmeCount} LME's` : ''}
                  </span>
                ) : null}
              </div>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-slate-400 transition-transform dark:text-slate-500 ${
                  weekOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {weekOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  {week.cases.map((casus, casusIndex) => {
                    const caseOpen = isCaseExpanded(weekIndex, casusIndex)
                    const casusLmeCount = countLmes(casus)

                    return (
                      <div key={casusIndex} className="mb-4 last:mb-0">
                        <button
                          type="button"
                          onClick={() => toggleCase(weekIndex, casusIndex)}
                          aria-expanded={caseOpen}
                          className="group mb-2 flex w-full items-center gap-3 rounded-lg py-1 pr-1 text-left hover:bg-slate-100/70 dark:hover:bg-slate-800/40 transition-colors"
                        >
                          <div className="rounded-lg bg-amber-100 p-2 dark:bg-amber-500/15 dark:ring-1 dark:ring-amber-500/25">
                            <Stethoscope className="h-4 w-4 text-amber-800 dark:text-amber-400" />
                          </div>
                          <span className="min-w-0 flex-1 font-medium text-slate-800 dark:text-slate-200 text-sm">
                            {casus.name}
                          </span>
                          {!caseOpen && casusLmeCount > 0 ? (
                            <span className="shrink-0 text-[11px] text-slate-500 dark:text-slate-400">
                              {casusLmeCount} LME&apos;s
                            </span>
                          ) : null}
                          <ChevronRight
                            className={`h-4 w-4 shrink-0 text-slate-400 transition-transform dark:text-slate-500 ${
                              caseOpen ? 'rotate-90' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {caseOpen ? (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.18 }}
                              className="overflow-hidden"
                            >
                              {renderCaseSections(casus)}
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    )
                  })}

                  {renderWeekFooter ? renderWeekFooter(week, weekIndex) : null}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
