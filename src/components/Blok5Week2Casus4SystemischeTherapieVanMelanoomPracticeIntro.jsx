import { Activity, Dna, ShieldAlert, Syringe } from 'lucide-react'

/**
 * Oefenpagina-intro specifiek voor LME 20 (systemische therapie melanoom): visuele context, geen examenvragen.
 */
const Blok5Week2Casus4SystemischeTherapieVanMelanoomPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-rose-200/80 dark:border-rose-900/50
        bg-gradient-to-br from-rose-50/90 via-white to-amber-50/70
        dark:from-rose-950/40 dark:via-slate-900/80 dark:to-amber-950/30
        shadow-sm dark:shadow-black/30 ring-1 ring-rose-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-rose-400/15 blur-2xl
          dark:bg-rose-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-rose-700/90 dark:text-rose-300/90 mb-3">
          Casus 4 · Donkere vlek
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { Icon: Syringe, label: 'Systemische route' },
            { Icon: Activity, label: 'TNM / M-stadium' },
            { Icon: ShieldAlert, label: 'Checkpoint & irAE' },
            { Icon: Dna, label: 'BRAF / MEK' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-lg border border-rose-200/70 bg-white/80 px-2.5 py-1
                text-xs font-medium text-slate-700 dark:border-slate-600/80 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <Icon className="h-3.5 w-3.5 text-rose-600 dark:text-rose-400 shrink-0" aria-hidden />
              {label}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Meerkeuzevragen voor dit onderdeel van week 2 — gebruik de antwoordopties zoals in je materiaal.
        </p>
      </div>
    </div>
  </div>
)

export default Blok5Week2Casus4SystemischeTherapieVanMelanoomPracticeIntro
