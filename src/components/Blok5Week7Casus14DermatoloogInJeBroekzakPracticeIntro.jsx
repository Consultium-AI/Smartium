import { Activity, Brain, Cpu, Scale, ShieldAlert, Smartphone, Sun } from 'lucide-react'

/**
 * Oefenpagina-intro specifiek voor LME 60 (Dermatoloog in je broekzak): thema AI/huidapps, geen examenvragen.
 */
const Blok5Week7Casus14DermatoloogInJeBroekzakPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-sky-200/80 dark:border-sky-900/45
        bg-gradient-to-br from-sky-50/90 via-white to-amber-50/70
        dark:from-sky-950/35 dark:via-slate-900/80 dark:to-amber-950/20
        shadow-sm dark:shadow-black/30 ring-1 ring-sky-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-6 top-0 h-28 w-28 rounded-full bg-amber-400/15 blur-2xl
          dark:bg-amber-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-800/90 dark:text-sky-300/90 mb-3">
          Casus 14 · AI in de zorg
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { Icon: Smartphone, label: 'Huidkanker-app · ABCDE' },
            { Icon: Brain, label: 'Deep Learning · CNN' },
            { Icon: Cpu, label: 'Trainen · labels · testset' },
            { Icon: Scale, label: 'Sensitiviteit · specificiteit · PPV' },
            { Icon: ShieldAlert, label: 'Bias · generalisatie' },
            { Icon: Activity, label: 'Risicogroep · gerichte inzet' },
            { Icon: Sun, label: 'Sunface · UV-selfie' },
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
          Meerkeuzevragen over huidapps, testkwaliteit, machine learning en preventie — antwoord zoals in je
          oefenmateriaal.
        </p>
      </div>
    </div>
  </div>
)

export default Blok5Week7Casus14DermatoloogInJeBroekzakPracticeIntro
