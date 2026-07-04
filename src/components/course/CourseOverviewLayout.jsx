import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight, GraduationCap, Search, X } from 'lucide-react'

export function CourseProgressBadge({ progress, completedLabel = 'Af', resumeLabel = 'Hervat' }) {
  if (!progress?.started) return null
  const done = progress.doneCount ?? progress.revealedCount ?? progress.seenUnits ?? 0
  const total = progress.total ?? progress.totalQuestions ?? progress.totalUnits ?? 0
  if (progress.completed) {
    return (
      <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
        {completedLabel} · {done}/{total}
      </span>
    )
  }
  return (
    <span className="text-[11px] font-medium text-sky-700 dark:text-sky-300">
      {resumeLabel} · {done}/{total}
    </span>
  )
}

export function CourseBlockHeader({ backTo, backLabel = 'Alle blokken', title, subtitle, statsLine }) {
  return (
    <div className="mb-6">
      {backTo ? (
        <Link
          to={backTo}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 mb-4"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          {backLabel}
        </Link>
      ) : null}
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{title}</h1>
      {subtitle ? <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{subtitle}</p> : null}
      {statsLine ? <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{statsLine}</p> : null}
    </div>
  )
}

export function CourseBlockIndex({ pageTitle, pageSubtitle, sections, className = '' }) {
  return (
    <div className={`max-w-3xl mx-auto ${className}`.trim()}>
      <div className="text-center mb-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-3">{pageTitle}</h1>
        {pageSubtitle ? (
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">{pageSubtitle}</p>
        ) : null}
      </div>
      {sections.map((section) => (
        <section key={section.title} className="mb-10" aria-labelledby={section.headingId}>
          <div className="mb-4 px-1 border-b border-slate-200/80 dark:border-slate-700/80 pb-3">
            <h2 id={section.headingId} className="text-base font-bold text-slate-800 dark:text-slate-100">
              {section.title}
            </h2>
            {section.subtitle ? (
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{section.subtitle}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-3">
            {section.blocks.map((block) => (
              <Link
                key={block.to}
                to={block.to}
                className={`group rounded-2xl border border-slate-200/90 dark:border-slate-700/90 bg-white/90 dark:bg-slate-900/80 p-5 shadow-sm hover:border-primary-400/70 transition-colors${block.className ?? ''}`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary-100 dark:bg-primary-500/20 shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-slate-900 dark:text-slate-100">{block.label}</h3>
                    {block.meta ? (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{block.meta}</p>
                    ) : null}
                    {block.extra ? <div className="mt-1">{block.extra}</div> : null}
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary-500 shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export function CourseModuleSearch({ query, onChange, placeholder = 'Zoek module…' }) {
  return (
    <div className="relative mb-5">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      <input
        type="search"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/60 py-2.5 pl-10 pr-10 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/40"
      />
      {query ? (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          aria-label="Zoekopdracht wissen"
        >
          <X className="w-4 h-4" />
        </button>
      ) : null}
    </div>
  )
}

export function CourseWeekExpandControls({ onExpandAll, onCollapseAll }) {
  return (
    <div className="flex justify-end gap-2 mb-4">
      <button
        type="button"
        onClick={onExpandAll}
        className="text-xs font-medium text-slate-500 hover:text-primary-600 dark:hover:text-primary-400"
      >
        Alles open
      </button>
      <span className="text-slate-300 dark:text-slate-600">·</span>
      <button
        type="button"
        onClick={onCollapseAll}
        className="text-xs font-medium text-slate-500 hover:text-primary-600 dark:hover:text-primary-400"
      >
        Alles dicht
      </button>
    </div>
  )
}

export function CourseWeekAccordionHeader({ weekName, moduleCount, isOpen, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
    >
      <ChevronDown
        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? '' : '-rotate-90'}`}
      />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-slate-800 dark:text-slate-100">{weekName}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {moduleCount} module{moduleCount === 1 ? '' : 's'}
        </p>
      </div>
    </button>
  )
}
