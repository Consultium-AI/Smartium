import { Landmark, Scale, TrendingUp } from 'lucide-react'

/**
 * Oefenpagina-context voor Blok 5 week 4 · Casus 7 · LMO Voorbereiding VOW. Kleur: LMO = sky.
 */
const Blok5Week4Casus7LmoVoorbereidingVowHoeveelMagEenLevensjaarKostenPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mt-8 mb-10 md:mb-12">
    <div
      className="relative overflow-hidden rounded-2xl border border-sky-200/80 dark:border-sky-900/50
        bg-gradient-to-br from-sky-50/90 via-white to-slate-50/70
        dark:from-sky-950/35 dark:via-slate-900/80 dark:to-slate-950/40
        shadow-sm dark:shadow-black/30 ring-1 ring-sky-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-sky-400/15 blur-2xl
          dark:bg-sky-500/10"
        aria-hidden
      />
      <div className="relative px-6 py-6 sm:px-8 sm:py-7">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-800/90 dark:text-sky-300/90 mb-2">
          LMO · Casus 7 · Zwelling van de lies en/of een dik been
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">
          Voorbereiding VOW: Hoeveel mag een levensjaar kosten?
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { Icon: TrendingUp, label: 'QALY · utiliteit · IKER · kosteneffectiviteitsvlak' },
            { Icon: Scale, label: 'WTP · NMB · proportional shortfall · fair innings' },
            { Icon: Landmark, label: 'Trechter van Dunning · basispakket · rechtvaardigheid' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-xl border border-sky-200/70 bg-white/80 px-3 py-2
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

export default Blok5Week4Casus7LmoVoorbereidingVowHoeveelMagEenLevensjaarKostenPracticeIntro
