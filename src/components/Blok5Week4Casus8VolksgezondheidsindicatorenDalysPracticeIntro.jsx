import { BarChart3, Globe, HeartPulse, Table2 } from 'lucide-react'

/**
 * Oefenpagina-intro voor LME 41 (volksgezondheidsindicatoren / DALY’s): casuscontext, geen examenvragen.
 */
const Blok5Week4Casus8VolksgezondheidsindicatorenDalysPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-emerald-200/80 dark:border-emerald-900/50
        bg-gradient-to-br from-emerald-50/90 via-white to-slate-50/80
        dark:from-emerald-950/35 dark:via-slate-900/80 dark:to-slate-950/50
        shadow-sm dark:shadow-black/30 ring-1 ring-emerald-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-emerald-400/15 blur-2xl
          dark:bg-emerald-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-900/85 dark:text-emerald-300/90 mb-3">
          Casus 8 · Zwelling in de oksel · Volksgezondheidsindicatoren DALY’s
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { Icon: HeartPulse, label: 'Levensverwachting · q(x)' },
            { Icon: Table2, label: 'YLL · YLD · DALY’s' },
            { Icon: Globe, label: 'WHO-regio’s · inkomen' },
            { Icon: BarChart3, label: 'GBD · ziektelast' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-200/70 bg-white/80 px-2.5 py-1
                text-xs font-medium text-slate-700 dark:border-slate-600/80 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <Icon className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400 shrink-0" aria-hidden />
              {label}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Meerkeuzevragen voor week 4 — antwoordopties zoals in je oefenmateriaal.
        </p>
      </div>
    </div>
  </div>
)

export default Blok5Week4Casus8VolksgezondheidsindicatorenDalysPracticeIntro
