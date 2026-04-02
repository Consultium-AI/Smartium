import { Droplets, HeartPulse, Wind } from 'lucide-react'

/**
 * Oefenpagina-context voor LME 31 (flebologie). Tekstblokken zijn letterlijk uit het oefenvragen-.docx.
 */
const Blok5Week4Casus7FlebologischeAandoeningenPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-cyan-200/80 dark:border-cyan-900/50
        bg-gradient-to-br from-cyan-50/90 via-white to-slate-50/70
        dark:from-cyan-950/35 dark:via-slate-900/80 dark:to-slate-950/40
        shadow-sm dark:shadow-black/30 ring-1 ring-cyan-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-cyan-400/15 blur-2xl
          dark:bg-cyan-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-cyan-800/90 dark:text-cyan-300/90 mb-3">
          Casus 7 · Zwelling van de lies en/of een dik been
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { Icon: Droplets, label: 'Veneuze insufficiëntie' },
            { Icon: Wind, label: 'Lymfoedeem' },
            { Icon: HeartPulse, label: 'Lipoedeem · vaatmalformaties' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-200/70 bg-white/80 px-2.5 py-1
                text-xs font-medium text-slate-700 dark:border-slate-600/80 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <Icon className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" aria-hidden />
              {label}
            </span>
          ))}
        </div>
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          <p>
            Er is nog geen samenvatting meegegeven. Plak de volledige samenvatting hier, dan maak ik meteen circa 15
            inhoudelijk verantwoorde oefenvragen.
          </p>
          <div>
            <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Antwoorden</p>
            <p>Geen antwoorden beschikbaar zonder samenvatting.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Blok5Week4Casus7FlebologischeAandoeningenPracticeIntro
