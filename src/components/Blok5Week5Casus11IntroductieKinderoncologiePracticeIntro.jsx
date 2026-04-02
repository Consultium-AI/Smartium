import { Building2, Layers, PieChart } from 'lucide-react'

/**
 * Oefenpagina-context voor Blok 5 week 5 · Casus 11 · LME 48 (introductie kinderoncologie).
 */
const Blok5Week5Casus11IntroductieKinderoncologiePracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-indigo-200/80 dark:border-indigo-900/45
        bg-gradient-to-br from-indigo-50/90 via-white to-violet-50/60
        dark:from-indigo-950/30 dark:via-slate-900/80 dark:to-slate-950/40
        shadow-sm dark:shadow-black/30 ring-1 ring-indigo-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-violet-400/15 blur-2xl
          dark:bg-violet-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-800/90 dark:text-indigo-300/90 mb-3">
          Casus 11 · Kind met algehele malaise, koorts en zwelling in de buik
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { Icon: PieChart, label: 'Epidemiologie · indeling' },
            { Icon: Layers, label: 'Kind vs volwassene' },
            { Icon: Building2, label: 'Centralisatie · shared care' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-200/70 bg-white/80 px-2.5 py-1
                text-xs font-medium text-slate-700 dark:border-slate-600/80 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <Icon className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" aria-hidden />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Blok5Week5Casus11IntroductieKinderoncologiePracticeIntro
