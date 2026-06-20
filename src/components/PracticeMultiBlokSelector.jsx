import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  GraduationCap,
  Shield,
  Sparkles,
  Activity,
  FlaskConical,
  Lock,
  RotateCcw,
  Check,
  Play,
  ChevronDown,
} from 'lucide-react'
import {
  practiceQuestionsCourseStructure,
  buildBlokkenRandomParam,
  getPracticeQuestionCountForBlok,
} from '../pages/PracticeQuestionsRegistry'
import { formatPracticeBlokSubtitle } from '../utils/blokRollupStats'
import { findBlokkenRandomSessionsInProgress } from '../utils/practiceRandomProgress'

const BLOK_OPTIONS = [
  {
    key: 'blok3',
    Icon: GraduationCap,
    iconBg: 'bg-primary-100 dark:bg-primary-500/20',
    iconColor: 'text-primary-600 dark:text-primary-400',
    ring: 'ring-primary-500/40 border-primary-400/70',
  },
  {
    key: 'blok4',
    Icon: Shield,
    iconBg: 'bg-indigo-100 dark:bg-indigo-500/20',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    ring: 'ring-indigo-500/40 border-indigo-400/70',
  },
  {
    key: 'blok5',
    Icon: Sparkles,
    iconBg: 'bg-rose-100 dark:bg-rose-500/20',
    iconColor: 'text-rose-600 dark:text-rose-400',
    ring: 'ring-rose-500/40 border-rose-400/70',
  },
  {
    key: 'blok9',
    Icon: Activity,
    iconBg: 'bg-teal-100 dark:bg-teal-500/20',
    iconColor: 'text-teal-600 dark:text-teal-400',
    ring: 'ring-teal-500/40 border-teal-400/70',
  },
  {
    key: 'blok10',
    Icon: FlaskConical,
    iconBg: 'bg-violet-100 dark:bg-violet-500/20',
    iconColor: 'text-violet-600 dark:text-violet-400',
    ring: 'ring-violet-500/40 border-violet-400/70',
  },
]

export default function PracticeMultiBlokSelector({
  showPremiumLocks = false,
  progressUserId = null,
  hasAccountProgress = false,
  isLoggedIn = false,
  refreshKey = 'overview',
  waifuMode = false,
}) {
  const [selected, setSelected] = useState(() => new Set())
  const [selectedResumeParam, setSelectedResumeParam] = useState(null)

  const selectedKeys = useMemo(() => [...selected].sort(), [selected])

  const questionCount = useMemo(
    () => selectedKeys.reduce((sum, key) => sum + getPracticeQuestionCountForBlok(key), 0),
    [selectedKeys],
  )

  const resumeSessions = useMemo(() => {
    if (!hasAccountProgress || !progressUserId || showPremiumLocks) return []
    return findBlokkenRandomSessionsInProgress(progressUserId, 5)
  }, [hasAccountProgress, progressUserId, showPremiumLocks, refreshKey])

  useEffect(() => {
    if (resumeSessions.length === 0) {
      setSelectedResumeParam(null)
      return
    }
    setSelectedResumeParam((prev) => {
      if (prev && resumeSessions.some((s) => s.lmeParam === prev)) return prev
      return resumeSessions[0].lmeParam
    })
  }, [resumeSessions])

  const selectedResume = resumeSessions.find((s) => s.lmeParam === selectedResumeParam) ?? null

  const toggleBlok = (key) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const canStart = selectedKeys.length > 0 && questionCount > 0
  const startParam = buildBlokkenRandomParam(selectedKeys)
  const startHref = showPremiumLocks
    ? '/billing'
    : `/oefenvragen?lme=${encodeURIComponent(startParam)}&nieuw=1`
  const resumeHref = selectedResume
    ? `/oefenvragen?lme=${encodeURIComponent(selectedResume.lmeParam)}`
    : null

  return (
    <section
      aria-labelledby="practice-multi-blok-heading"
      className={
        waifuMode
          ? 'mb-10 sm:p-1'
          : 'mb-10 rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-sm ring-1 ring-slate-900/5 dark:border-slate-700/90 dark:bg-slate-900/80 dark:ring-white/5 sm:p-6'
      }
    >
      <div className={`mb-5 text-left ${waifuMode ? 'waifu-practice-inset rounded-2xl p-4 sm:p-5' : ''}`}>
        <h2
          id="practice-multi-blok-heading"
          className={`text-lg font-bold ${waifuMode ? 'waifu-practice-heading' : 'text-slate-900 dark:text-slate-100'}`}
        >
          {waifuMode ? '✧ Studeer voor meerdere blokken ✧' : 'Studeer voor meerdere blokken'}
        </h2>
        <p className={`mt-1 text-sm ${waifuMode ? 'waifu-practice-subtitle' : 'text-slate-500 dark:text-slate-400'}`}>
          Selecteer één of meer blokken. Je krijgt willekeurige oefenvragen uit alle LM&apos;s van die
          blokken.
        </p>
        {!isLoggedIn && (
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300/90">
            <Link to="/login" className="font-semibold underline hover:no-underline">
              Log in
            </Link>{' '}
            om je voortgang op te slaan en later verder te gaan op elk apparaat.
          </p>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {BLOK_OPTIONS.map(({ key, Icon, iconBg, iconColor, ring }) => {
          const blok = practiceQuestionsCourseStructure[key]
          const isSelected = selected.has(key)
          const count = getPracticeQuestionCountForBlok(key)
          return (
            <button
              key={key}
              type="button"
              onClick={() => toggleBlok(key)}
              aria-pressed={isSelected}
              className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                waifuMode ? 'waifu-practice-inset waifu-practice-blok-btn' : ''
              } ${
                isSelected
                  ? `border-transparent bg-slate-50 ring-2 ${ring} dark:bg-slate-800/90`
                  : 'border-slate-200/90 bg-white hover:border-slate-300 dark:border-slate-700/90 dark:bg-slate-900/50 dark:hover:border-slate-600'
              }`}
            >
              <div className={`shrink-0 rounded-lg p-2 ${iconBg}`}>
                <Icon className={`h-5 w-5 ${iconColor}`} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">{blok?.name}</p>
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                      isSelected
                        ? 'border-primary-500 bg-primary-500 text-white'
                        : 'border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-800'
                    }`}
                    aria-hidden
                  >
                    {isSelected ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : null}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  {formatPracticeBlokSubtitle(blok)}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                  {count} oefenvragen
                </p>
              </div>
            </button>
          )
        })}
      </div>

      <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div className={`text-sm ${waifuMode ? 'waifu-practice-outside' : 'text-slate-500 dark:text-slate-400'}`}>
          {selectedKeys.length === 0
            ? resumeSessions.length > 0
              ? 'Kies blokken voor een nieuwe sessie.'
              : 'Kies minimaal één blok om te starten.'
            : `${selectedKeys.length} blok${selectedKeys.length === 1 ? '' : 'ken'} geselecteerd · ${questionCount} vragen`}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
          {selectedResume && resumeHref && (
            <div className="flex items-center gap-2">
              {resumeSessions.length > 1 ? (
                <div className="relative min-w-[8.5rem]">
                  <select
                    value={selectedResumeParam ?? ''}
                    onChange={(e) => setSelectedResumeParam(e.target.value)}
                    aria-label="Kies een sessie om verder te gaan"
                    className={`w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-3 pr-9 text-sm font-semibold text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200${waifuMode ? ' waifu-practice-inset' : ''}`}
                  >
                    {resumeSessions.map((session) => (
                      <option key={session.lmeParam} value={session.lmeParam}>
                        {session.shortLabel}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                    aria-hidden
                  />
                </div>
              ) : (
                <span className={`rounded-xl border border-slate-200/90 bg-slate-50 px-3 py-3 text-sm font-semibold tabular-nums text-slate-700 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-200${waifuMode ? ' waifu-practice-inset' : ''}`}>
                  {selectedResume.shortLabel}
                </span>
              )}

              <Link
                to={showPremiumLocks ? '/billing' : resumeHref}
                className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-bold transition-colors ${
                  showPremiumLocks
                    ? 'border-slate-300 text-slate-400 dark:border-slate-700 dark:text-slate-500'
                    : 'border-primary-300 bg-primary-50 text-primary-700 hover:border-primary-400 hover:bg-primary-100 dark:border-primary-500/40 dark:bg-primary-500/10 dark:text-primary-300 dark:hover:bg-primary-500/20'
                }`}
              >
                {showPremiumLocks ? <Lock className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                Ga door
              </Link>
            </div>
          )}

          {canStart ? (
            <Link
              to={startHref}
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-colors ${
                showPremiumLocks
                  ? 'bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                  : 'bg-primary-500 text-white hover:bg-primary-600'
              }`}
            >
              {showPremiumLocks ? <Lock className="h-4 w-4" /> : <RotateCcw className="h-4 w-4" />}
              Start oefenvragen
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-200 px-5 py-3 text-sm font-bold text-slate-400 dark:bg-slate-800 dark:text-slate-500"
            >
              <RotateCcw className="h-4 w-4" />
              Start oefenvragen
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
