import { Activity, Layers, Pill, Stethoscope } from 'lucide-react'

/**
 * Oefenpagina-intro voor LMV Auto-immuniteit als bijwerking bij immunotherapie (oranje / LMV-kleur).
 */
const Blok5Week5Casus9LmvAutoImmuniteitAlsBijwerkingBijImmunotherapiePracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-orange-200/80 dark:border-orange-900/45
        bg-gradient-to-br from-orange-50/90 via-white to-slate-50/80
        dark:from-orange-950/30 dark:via-slate-900/80 dark:to-slate-950/40
        shadow-sm dark:shadow-black/30 ring-1 ring-orange-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-orange-400/15 blur-2xl
          dark:bg-orange-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-orange-900/85 dark:text-orange-300/90 mb-3">
          Casus 9 · Patiënt met auto-immuunziekte · LMV · Auto-immuniteit als bijwerking bij immunotherapie
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { Icon: Layers, label: 'Checkpoint-inhibitie · irAE' },
            { Icon: Activity, label: 'Orgaanbetrokkenheid · ernstgraad' },
            { Icon: Stethoscope, label: 'Differentiaaldiagnose · maatwerk' },
            { Icon: Pill, label: 'Glucocorticoïden · DMARDs · biologicals' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200/70 bg-white/80 px-2.5 py-1
                text-xs font-medium text-slate-700 dark:border-slate-600/80 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <Icon className="h-3.5 w-3.5 text-orange-700 dark:text-orange-400 shrink-0" aria-hidden />
              {label}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Meerkeuzevragen en een vraag die het modelantwoord van de open vraag toetst — antwoordopties zoals in je
          oefenmateriaal.
        </p>
      </div>
    </div>
  </div>
)

export default Blok5Week5Casus9LmvAutoImmuniteitAlsBijwerkingBijImmunotherapiePracticeIntro
