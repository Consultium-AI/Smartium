import { Building2, Home, Map, Phone, Wind } from 'lucide-react'

/**
 * Oefenpagina-intro voor LME 54 (slechte woningen, lucht, luchtverontreiniging): visuele context, geen examenvragen.
 */
const Blok5Week6Casus12SlechteWoningenLuchtLuchtverontreinigingBovensteLuchtweginfectiesPracticeIntro =
  () => (
    <div className="max-w-3xl mx-auto mb-8">
      <div
        className="relative overflow-hidden rounded-2xl border border-emerald-200/80 dark:border-emerald-900/45
          bg-gradient-to-br from-emerald-50/90 via-white to-sky-50/70
          dark:from-emerald-950/28 dark:via-slate-900/80 dark:to-slate-950/40
          shadow-sm dark:shadow-black/30 ring-1 ring-emerald-900/5 dark:ring-white/5"
      >
        <div
          className="pointer-events-none absolute right-0 -bottom-8 h-36 w-36 rounded-full bg-sky-400/12 blur-2xl
            dark:bg-sky-500/10"
          aria-hidden
        />
        <div className="relative px-5 py-4 sm:px-6 sm:py-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800/90 dark:text-emerald-300/90 mb-3">
            Casus 12 · Verwarde patiënt met griepachtige klachten
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { Icon: Home, label: 'Binnenmilieu · ventilatie' },
              { Icon: Wind, label: 'Buitenlucht · fijnstof' },
              { Icon: Phone, label: 'GGD · meldingen' },
              { Icon: Map, label: 'Atlas Leefomgeving' },
              { Icon: Building2, label: 'Rotterdam-Rijnmond' },
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
            Meerkeuzevragen over wonen, luchtkwaliteit, GGD-meldingen en gezondheidseffecten — inhoud uit je
            oefenmateriaal.
          </p>
        </div>
      </div>
    </div>
  )

export default Blok5Week6Casus12SlechteWoningenLuchtLuchtverontreinigingBovensteLuchtweginfectiesPracticeIntro
