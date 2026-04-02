import { Activity, Dna, Droplets, Flame, Microscope, Shield } from 'lucide-react'

/**
 * Oefenpagina-intro specifiek voor LME 45 (principes en klinische aspecten van auto-inflammatie): visuele context, geen examenvragen.
 */
const Blok5Week5Casus10PrincipesEnKlinischeAspectenVanAutoInflammatiePracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-orange-200/80 dark:border-orange-900/45
        bg-gradient-to-br from-orange-50/90 via-white to-rose-50/70
        dark:from-orange-950/30 dark:via-slate-900/80 dark:to-rose-950/25
        shadow-sm dark:shadow-black/30 ring-1 ring-orange-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -left-6 bottom-0 h-28 w-28 rounded-full bg-rose-400/15 blur-2xl
          dark:bg-rose-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-orange-800/90 dark:text-orange-300/90 mb-3">
          Casus 10 · Patiënt met auto-inflammatoire ziekte
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { Icon: Shield, label: 'Autoinflammatie · IL-1' },
            { Icon: Activity, label: 'Pro- / anti-inflammatoir' },
            { Icon: Flame, label: 'Ontstekingstekenen' },
            { Icon: Droplets, label: 'Acute fase · BSE' },
            { Icon: Microscope, label: 'Amyloïd · nier' },
            { Icon: Dna, label: 'FMF · Schnitzler · VEXAS' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200/70 bg-white/80 px-2.5 py-1
                text-xs font-medium text-slate-700 dark:border-slate-600/80 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <Icon className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400 shrink-0" aria-hidden />
              {label}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Meerkeuzevragen over cytokinen, acute fase, huid en nier, en erfelijke syndromen — antwoord zoals in je
          oefenmateriaal.
        </p>
      </div>
    </div>
  </div>
)

export default Blok5Week5Casus10PrincipesEnKlinischeAspectenVanAutoInflammatiePracticeIntro
