import { GraduationCap, HeartPulse, Users } from 'lucide-react'

/**
 * Oefenpagina-context voor Blok 5 week 5 · Casus 11 · LME 50 (LATER-zorg, survivors).
 */
const Blok5Week5Casus11OverLevenNaKankerOpKinderleeftijdPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-sky-200/80 dark:border-sky-900/45
        bg-gradient-to-br from-sky-50/90 via-white to-amber-50/55
        dark:from-sky-950/28 dark:via-slate-900/80 dark:to-slate-950/40
        shadow-sm dark:shadow-black/30 ring-1 ring-sky-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-amber-400/14 blur-2xl
          dark:bg-amber-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-800/90 dark:text-sky-300/90 mb-3">
          Casus 11 · Kind met algehele malaise, koorts en zwelling in de buik
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { Icon: HeartPulse, label: 'LATER · late effecten' },
            { Icon: GraduationCap, label: 'School · werk' },
            { Icon: Users, label: 'Psychosociaal · survivors' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-lg border border-sky-200/70 bg-white/80 px-2.5 py-1
                text-xs font-medium text-slate-700 dark:border-slate-600/80 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <Icon className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Blok5Week5Casus11OverLevenNaKankerOpKinderleeftijdPracticeIntro
