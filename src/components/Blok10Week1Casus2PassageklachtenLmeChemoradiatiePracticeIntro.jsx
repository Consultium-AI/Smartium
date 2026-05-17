import { Activity, Microscope, Zap } from 'lucide-react'

/**
 * Oefenpagina-context voor Blok 10 week 1 · Casus 2 · Chemoradiatie (oefenvragen-docx).
 */
const Blok10Week1Casus2PassageklachtenLmeChemoradiatiePracticeIntro = () => (
  <div className="max-w-3xl mx-auto mt-8 mb-10 md:mb-12">
    <div
      className="relative overflow-hidden rounded-2xl border border-teal-200/80 dark:border-teal-900/50
        bg-gradient-to-br from-teal-50/90 via-white to-slate-50/70
        dark:from-teal-950/35 dark:via-slate-900/80 dark:to-slate-950/40
        shadow-sm dark:shadow-black/30 ring-1 ring-teal-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-teal-400/15 blur-2xl
          dark:bg-teal-500/10"
        aria-hidden
      />
      <div className="relative px-6 py-6 sm:px-8 sm:py-7">
        <p className="text-xs font-semibold uppercase tracking-wider text-teal-900/90 dark:text-teal-300/90 mb-5">
          Casus 2 · Passageklachten
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { Icon: Microscope, label: 'Diagnostiek · endoscopie · histologie' },
            { Icon: Zap, label: 'Chemoradiotherapie · fracties · regimen' },
            { Icon: Activity, label: 'nCRT · dCRT · operatiekeuze · bijwerkingen' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-xl border border-teal-200/70 bg-white/80 px-3 py-2
                text-xs font-medium text-slate-700 dark:border-slate-600/80 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <Icon className="h-3.5 w-3.5 text-teal-700 dark:text-teal-400 shrink-0" aria-hidden />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Blok10Week1Casus2PassageklachtenLmeChemoradiatiePracticeIntro
