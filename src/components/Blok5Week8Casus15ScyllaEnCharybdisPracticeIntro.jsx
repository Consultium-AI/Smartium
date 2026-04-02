import { Coins, Lightbulb, Scale, ScrollText, Users, Video } from 'lucide-react'

/**
 * Oefenpagina-intro specifiek voor LME 63 (Scylla en Charybdis / keuze-ethiek); geen examenvragen.
 */
const Blok5Week8Casus15ScyllaEnCharybdisPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-indigo-200/80 dark:border-indigo-900/45
        bg-gradient-to-br from-indigo-50/90 via-white to-slate-50/80
        dark:from-indigo-950/35 dark:via-slate-900/80 dark:to-slate-900/60
        shadow-sm dark:shadow-black/30 ring-1 ring-indigo-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-6 top-0 h-28 w-28 rounded-full bg-indigo-400/15 blur-2xl
          dark:bg-indigo-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-800/90 dark:text-indigo-300/90 mb-3">
          Casus 15 · Kiezen tussen twee kwaden
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { Icon: Lightbulb, label: 'Scylla & Charybdis · twee kwaden' },
            { Icon: Users, label: 'Keuzes op alle niveaus' },
            { Icon: Scale, label: 'Dilemma’s · do no harm · autonomie' },
            { Icon: Video, label: 'TikTok · vertrouwen' },
            { Icon: ScrollText, label: 'Artseneed · onzekerheid' },
            { Icon: Coins, label: 'Schaarste · prioriteit · kosten' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-200/70 bg-white/80 px-2.5 py-1
                text-xs font-medium text-slate-700 dark:border-slate-600/80 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <Icon className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" aria-hidden />
              {label}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Meerkeuzevragen over ethiek, screening, sociale media en keuzes in de zorg — antwoord zoals in je oefenmateriaal.
        </p>
      </div>
    </div>
  </div>
)

export default Blok5Week8Casus15ScyllaEnCharybdisPracticeIntro
