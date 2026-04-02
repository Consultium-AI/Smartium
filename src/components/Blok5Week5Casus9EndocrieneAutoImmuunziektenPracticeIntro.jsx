import { Dna, Eye, FlaskConical, Pill, Shield, Syringe } from 'lucide-react'

/**
 * Oefenpagina-intro specifiek voor LME 43 (endocriene auto-immuunziekten): visuele context, geen examenvragen.
 */
const Blok5Week5Casus9EndocrieneAutoImmuunziektenPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-violet-200/80 dark:border-violet-900/45
        bg-gradient-to-br from-violet-50/90 via-white to-amber-50/75
        dark:from-violet-950/35 dark:via-slate-900/80 dark:to-amber-950/25
        shadow-sm dark:shadow-black/30 ring-1 ring-violet-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-10 top-0 h-32 w-32 rounded-full bg-amber-400/20 blur-2xl
          dark:bg-amber-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-violet-800/90 dark:text-violet-300/90 mb-3">
          Casus 9 · Patiënt met auto-immuunziekte
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { Icon: Syringe, label: 'T1DM · bètacellen' },
            { Icon: Dna, label: 'HLA · insulinegen' },
            { Icon: Shield, label: 'Graves · Hashimoto' },
            { Icon: Eye, label: 'Oftalmopathie' },
            { Icon: Pill, label: 'Behandelrichting' },
            { Icon: FlaskConical, label: 'Checkpointremmers' },
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
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Meerkeuzevragen over pancreas en schildklier, kliniek, histologie en therapie — antwoord zoals in je
          oefenmateriaal.
        </p>
      </div>
    </div>
  </div>
)

export default Blok5Week5Casus9EndocrieneAutoImmuunziektenPracticeIntro
