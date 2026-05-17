import { Activity, Layers, Pill } from 'lucide-react'

/**
 * Oefenpagina-context voor Blok 10 week 1 · Casus 1 · Omeprazol en PPI (LMV PPI — bron-oefenvragen-docx).
 */
const Blok10Week1Casus1MaagklachtenLmvPpiPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mt-8 mb-10 md:mb-12">
    <div
      className="relative overflow-hidden rounded-2xl border border-indigo-200/85 dark:border-indigo-900/55
        bg-gradient-to-br from-indigo-50/90 via-white to-slate-50/70
        dark:from-indigo-950/40 dark:via-slate-900/80 dark:to-slate-950/40
        shadow-sm dark:shadow-black/30 ring-1 ring-indigo-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-indigo-400/15 blur-2xl
          dark:bg-indigo-500/12"
        aria-hidden
      />
      <div className="relative px-6 py-6 sm:px-8 sm:py-7">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-900/90 dark:text-indigo-300/90 mb-5">
          Casus 1 · Maagklachten
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { Icon: Pill, label: 'Protonpomp · H+/K+-ATPase · omeprazol als voorbeeld' },
            {
              Icon: Activity,
              label: 'GERD · NSAID / maagbescherming · ulcus · farmacodynamiek',
            },
            { Icon: Layers, label: 'Doseerfrequentie · PK · interacties en bijwerkingen' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-xl border border-indigo-200/70 bg-white/80 px-3 py-2
                text-xs font-medium text-slate-700 dark:border-slate-600/80 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <Icon className="h-3.5 w-3.5 text-indigo-700 dark:text-indigo-400 shrink-0" aria-hidden />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Blok10Week1Casus1MaagklachtenLmvPpiPracticeIntro
