import { Dna, GitBranch, Microscope, Shield, Syringe, Target } from 'lucide-react'

/**
 * Oefenpagina-intro specifiek voor LME 44 (pathogenese auto-immuunziekten): visuele context, geen examenvragen.
 */
const Blok5Week5Casus9PathogeneseAutoImmuunziektenPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-sky-200/80 dark:border-sky-900/45
        bg-gradient-to-br from-sky-50/90 via-white to-indigo-50/70
        dark:from-sky-950/30 dark:via-slate-900/80 dark:to-indigo-950/30
        shadow-sm dark:shadow-black/30 ring-1 ring-sky-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-16 h-40 w-64 rounded-[100%] bg-indigo-400/10 blur-3xl
          dark:bg-indigo-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-800/90 dark:text-sky-300/90 mb-3">
          Casus 9 · Patiënt met auto-immuunziekte
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { Icon: Shield, label: 'Tolerantie · privileged sites' },
            { Icon: GitBranch, label: 'Mimicry · triggers' },
            { Icon: Dna, label: 'HLA · AIRE · CTLA-4' },
            { Icon: Microscope, label: 'Vast-fase assays' },
            { Icon: Syringe, label: 'Type II' },
            { Icon: Target, label: 'Type III · complexen' },
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
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Meerkeuzevragen over tolerantie, genetica, auto-antistoffen en effectormechanismen — antwoord zoals in je
          oefenmateriaal.
        </p>
      </div>
    </div>
  </div>
)

export default Blok5Week5Casus9PathogeneseAutoImmuunziektenPracticeIntro
