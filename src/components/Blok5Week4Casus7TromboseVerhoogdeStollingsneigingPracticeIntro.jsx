import { Activity, Droplets, Pill, Scan } from 'lucide-react'

const Blok5Week4Casus7TromboseVerhoogdeStollingsneigingPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-amber-200/80 dark:border-amber-900/45
        bg-gradient-to-br from-amber-50/90 via-white to-slate-50/80
        dark:from-amber-950/30 dark:via-slate-900/80 dark:to-slate-950/40
        shadow-sm dark:shadow-black/30 ring-1 ring-amber-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-amber-400/15 blur-2xl
          dark:bg-amber-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-amber-900/85 dark:text-amber-300/90 mb-3">
          Casus 7 · Trombose / verhoogde stollingsneiging
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { Icon: Activity, label: 'Virchow · DVT' },
            { Icon: Droplets, label: 'D-dimeer · CUS' },
            { Icon: Pill, label: 'Heparine · LMWH · VKA · DOAC' },
            { Icon: Scan, label: 'PTS · Villalta' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-lg border border-amber-200/70 bg-white/80 px-2.5 py-1
                text-xs font-medium text-slate-700 dark:border-slate-600/80 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <Icon className="h-3.5 w-3.5 text-amber-700 dark:text-amber-400 shrink-0" aria-hidden />
              {label}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Meerkeuzevragen voor dit onderdeel van week 4 — gebruik de antwoordopties zoals in je materiaal.
        </p>
      </div>
    </div>
  </div>
)

export default Blok5Week4Casus7TromboseVerhoogdeStollingsneigingPracticeIntro
