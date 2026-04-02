import { Activity, Dna, GitBranch, Link2, Microscope, Waves, Zap } from 'lucide-react'

/**
 * Oefenpagina-intro specifiek voor LME 46 (spectrum auto-inflammatie en auto-immuniteit): visuele context, geen examenvragen.
 */
const Blok5Week5Casus10SpectrumAutoInflammatieEnAutoImmuuniteitPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-violet-200/80 dark:border-violet-900/45
        bg-gradient-to-br from-violet-50/90 via-white to-cyan-50/70
        dark:from-violet-950/35 dark:via-slate-900/80 dark:to-cyan-950/25
        shadow-sm dark:shadow-black/30 ring-1 ring-violet-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-6 top-0 h-28 w-28 rounded-full bg-cyan-400/15 blur-2xl
          dark:bg-cyan-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-violet-800/90 dark:text-violet-300/90 mb-3">
          Casus 10 · Patiënt met auto-inflammatoire ziekte
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { Icon: GitBranch, label: 'Spectrum · overlap' },
            { Icon: Zap, label: 'Inflammasoom · pyroptose' },
            { Icon: Activity, label: 'Type I IFN · MDA-5 / RIG-I' },
            { Icon: Dna, label: 'FMF · TRAPS · ER-stress' },
            { Icon: Waves, label: 'Verworven autoinflammatie' },
            { Icon: Link2, label: 'Relopathy · Behçet' },
            { Icon: Microscope, label: 'NLRC4 · NLRP3' },
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
          Meerkeuzevragen over het spectrum, inflammasomen, interferon, FMF, TRAPS, ER-stress en klinische syndromen —
          antwoord zoals in je oefenmateriaal.
        </p>
      </div>
    </div>
  </div>
)

export default Blok5Week5Casus10SpectrumAutoInflammatieEnAutoImmuuniteitPracticeIntro
