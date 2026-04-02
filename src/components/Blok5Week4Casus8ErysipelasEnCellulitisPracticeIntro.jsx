import { Bug, Layers, Syringe, Wind } from 'lucide-react'

/**
 * Oefenpagina-intro voor LME 34 (erysipelas/cellulitis): casuscontext, geen examenvragen.
 */
const Blok5Week4Casus8ErysipelasEnCellulitisPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-amber-200/80 dark:border-amber-900/50
        bg-gradient-to-br from-amber-50/90 via-white to-rose-50/70
        dark:from-amber-950/40 dark:via-slate-900/80 dark:to-rose-950/30
        shadow-sm dark:shadow-black/30 ring-1 ring-amber-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-amber-400/15 blur-2xl
          dark:bg-amber-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-amber-900/85 dark:text-amber-300/90 mb-3">
          Casus 8 · Zwelling in de oksel
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { Icon: Layers, text: 'Erysipelas · cellulitis · huidlagen' },
            { Icon: Bug, text: "Port d'entrée · verwekkers" },
            { Icon: Syringe, text: 'Starttherapie · allergie' },
            { Icon: Wind, text: 'Compressie · oedeem' },
          ].map(({ Icon, text }) => (
            <span
              key={text}
              className="inline-flex items-center gap-1.5 rounded-lg border border-amber-200/70 bg-white/80 px-2.5 py-1
                text-xs font-medium text-slate-700 dark:border-slate-600/80 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <Icon className="h-3.5 w-3.5 text-amber-700 dark:text-amber-400 shrink-0" aria-hidden />
              {text}
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

export default Blok5Week4Casus8ErysipelasEnCellulitisPracticeIntro
