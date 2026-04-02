import { ClipboardList, Flame, Syringe, Layers } from 'lucide-react'

/**
 * Oefenpagina-intro voor LME 35 (hidradenitis suppurativa / HS): casuscontext, geen examenvragen.
 */
const Blok5Week4Casus8HydradenitisSuppurativaPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-violet-200/80 dark:border-violet-900/50
        bg-gradient-to-br from-violet-50/90 via-white to-fuchsia-50/60
        dark:from-violet-950/40 dark:via-slate-900/80 dark:to-fuchsia-950/25
        shadow-sm dark:shadow-black/30 ring-1 ring-violet-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-violet-400/15 blur-2xl
          dark:bg-violet-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-violet-900/85 dark:text-violet-300/90 mb-3">
          Casus 8 · Zwelling in de oksel
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { Icon: Flame, label: 'Chronische folliculaire ontsteking' },
            { Icon: Layers, label: 'Hurley · tunnels · nodi' },
            { Icon: Syringe, label: 'Medisch-chirurgische ladder' },
            { Icon: ClipboardList, label: 'Roken · overgewicht · deodorant' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-lg border border-violet-200/70 bg-white/80 px-2.5 py-1
                text-xs font-medium text-slate-700 dark:border-slate-600/80 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <Icon className="h-3.5 w-3.5 text-violet-700 dark:text-violet-400 shrink-0" aria-hidden />
              {label}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Meerkeuzevragen voor week 4 — antwoordopties zoals in je oefenmateriaal.
        </p>
      </div>
    </div>
  </div>
)

export default Blok5Week4Casus8HydradenitisSuppurativaPracticeIntro
