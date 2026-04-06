import { Link } from 'react-router-dom'
import { ClipboardCheck, ChevronRight, Lock } from 'lucide-react'
import { getSummaryModuleLinkStyles } from '../utils/summaryModuleLinkStyles'

export default function PracticeCourseModuleLink({ lmeItem, questionCount, showPremiumLocks, isBlocked }) {
  const locked = showPremiumLocks && isBlocked(lmeItem.id)
  const s = getSummaryModuleLinkStyles(lmeItem.moduleKind)

  return (
    <Link
      to={locked ? '/billing' : `/oefenvragen?lme=${lmeItem.id}`}
      className={`group flex items-center justify-between gap-3 p-3.5 rounded-xl border transition-all
        ${locked
          ? 'bg-slate-100 dark:bg-slate-800/50 border-slate-300/90 dark:border-slate-600/90 opacity-90'
          : `bg-white dark:bg-slate-800/60 border-slate-200/90 dark:border-slate-600/90 ${s.hoverBorder} hover:shadow-md ${s.hoverShadow} ${s.hoverBg} dark:hover:bg-slate-800/95`}`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className={`p-2 rounded-lg shrink-0 ${s.iconWrap}`}>
          <ClipboardCheck className={`w-4 h-4 ${s.iconText}`} />
        </div>
        <div className="min-w-0">
          <span
            className={`font-medium text-slate-800 dark:text-slate-100 text-sm leading-snug block transition-colors ${locked ? '' : s.titleHover}`}
          >
            {lmeItem.name}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 inline-flex items-center gap-1.5">
            {questionCount} vragen
            {locked && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                <Lock className="w-3 h-3" />
                Premium
              </span>
            )}
          </span>
        </div>
      </div>
      <ChevronRight
        className={`w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0 transition-colors ${locked ? '' : s.chevronHover}`}
      />
    </Link>
  )
}
