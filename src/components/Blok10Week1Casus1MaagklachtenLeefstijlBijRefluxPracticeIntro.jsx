import { Apple, Baby, Layers } from 'lucide-react'

/**
 * Oefenpagina-context voor Blok 10 week 1 · Casus 1 · Leefstijl bij reflux (oefenvragen-docx).
 */
const Blok10Week1Casus1MaagklachtenLeefstijlBijRefluxPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mt-8 mb-10 md:mb-12">
    <div
      className="relative overflow-hidden rounded-2xl border border-emerald-200/80 dark:border-emerald-900/50
        bg-gradient-to-br from-emerald-50/90 via-white to-slate-50/70
        dark:from-emerald-950/35 dark:via-slate-900/80 dark:to-slate-950/40
        shadow-sm dark:shadow-black/30 ring-1 ring-emerald-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-emerald-400/15 blur-2xl
          dark:bg-emerald-500/10"
        aria-hidden
      />
      <div className="relative px-6 py-6 sm:px-8 sm:py-7">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-900/90 dark:text-emerald-300/90 mb-5">
          Casus 1 · Maagklachten
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { Icon: Layers, label: 'BRAVO-factoren · leefstijl eerst · BMI & reflux' },
            { Icon: Apple, label: 'Schijf van Vijf · supplementen · gezonde porties' },
            { Icon: Baby, label: 'Zwangerschap · gastroparese · diabetes & beleid' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-200/70 bg-white/80 px-3 py-2
                text-xs font-medium text-slate-700 dark:border-slate-600/80 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <Icon className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400 shrink-0" aria-hidden />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Blok10Week1Casus1MaagklachtenLeefstijlBijRefluxPracticeIntro
