import { Link } from 'react-router-dom'
import { CheckCircle2, ClipboardCheck, ChevronRight, Lock } from 'lucide-react'
import { resolveModuleKind } from '../utils/courseModuleKind'
import { getSummaryModuleLinkStyles } from '../utils/summaryModuleLinkStyles'

export default function PracticeCourseModuleLink({
  lmeItem,
  questionCount,
  showPremiumLocks,
  isBlocked,
  progress,
  showProgress = false,
}) {
  const locked = showPremiumLocks && isBlocked(lmeItem.id)
  const s = getSummaryModuleLinkStyles(resolveModuleKind(lmeItem))

  return (
    <Link
      to={locked ? '/billing' : `/oefenvragen?lme=${lmeItem.id}`}
      className={`group w-full flex items-center gap-3 rounded-xl border px-4 py-3 transition-colors ${
        locked
          ? 'border-slate-300/90 dark:border-slate-600/90 bg-slate-100/80 dark:bg-slate-800/50 opacity-90'
          : `border-slate-200/90 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/50 ${s.hoverBorder} ${s.hoverBg} dark:hover:bg-slate-900/50`
      }`}
    >
      <span className={`p-2 rounded-lg shrink-0 ${locked ? 'bg-slate-200/80 dark:bg-slate-700/50 text-slate-500' : `${s.iconWrap} ${s.iconText}`}`}>
        <ClipboardCheck className="w-4 h-4" />
      </span>
      <div className="flex-1 min-w-0">
        <p
          className={`font-semibold text-sm truncate ${
            locked
              ? 'text-slate-600 dark:text-slate-400'
              : `text-slate-900 dark:text-slate-100 ${s.titleHover}`
          }`}
        >
          {lmeItem.name}
        </p>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5">
          <span className="text-xs text-slate-500 dark:text-slate-400">{questionCount} vragen</span>
          {showProgress && !locked && progress?.started && !progress?.completed && (
            <span className="text-[11px] font-medium text-sky-700 dark:text-sky-300">
              Hervat · {progress.revealedCount}/{progress.totalQuestions}
            </span>
          )}
          {showProgress && !locked && progress?.completed && (
            <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
              Af · {progress.revealedCount}/{progress.totalQuestions} · {progress.correctCount} goed
            </span>
          )}
          {locked && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-700 dark:text-amber-300">
              <Lock className="w-3 h-3" />
              Premium
            </span>
          )}
        </div>
      </div>
      <ChevronRight
        className={`w-4 h-4 shrink-0 ${locked ? 'text-slate-400' : `text-slate-400 ${s.chevronHover}`}`}
      />
    </Link>
  )
}
