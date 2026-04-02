import { Activity, Brain, Box } from 'lucide-react'

/**
 * Oefenpagina-context voor Blok 5 week 5 · Casus 11 · LME 51 (leukemie, lymfomen, hersen- en solide tumoren).
 */
const Blok5Week5Casus11TypenKinderoncologieBijKinderenPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-violet-200/80 dark:border-violet-900/45
        bg-gradient-to-br from-violet-50/90 via-white to-fuchsia-50/50
        dark:from-violet-950/28 dark:via-slate-900/80 dark:to-slate-950/40
        shadow-sm dark:shadow-black/30 ring-1 ring-violet-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -left-8 -bottom-10 h-36 w-36 rounded-full bg-fuchsia-400/12 blur-2xl
          dark:bg-fuchsia-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-violet-800/90 dark:text-violet-300/90 mb-3">
          Casus 11 · Kind met algehele malaise, koorts en zwelling in de buik
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { Icon: Activity, label: 'Leukemie · lymfomen' },
            { Icon: Brain, label: 'Hersentumoren' },
            { Icon: Box, label: 'Solide tumoren' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-lg border border-violet-200/70 bg-white/80 px-2.5 py-1
                text-xs font-medium text-slate-700 dark:border-slate-600/80 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <Icon className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400 shrink-0" aria-hidden />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Blok5Week5Casus11TypenKinderoncologieBijKinderenPracticeIntro
