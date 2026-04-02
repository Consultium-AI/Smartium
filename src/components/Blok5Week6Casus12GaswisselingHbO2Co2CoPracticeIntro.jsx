import { Activity, Baby, Droplets, Flame, HeartPulse, Wind } from 'lucide-react'

/**
 * Oefenpagina-intro voor LME 52 (gaswisseling, Hb/O2/CO2/CO): visuele context, geen examenvragen.
 */
const Blok5Week6Casus12GaswisselingHbO2Co2CoPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-sky-200/80 dark:border-sky-900/50
        bg-gradient-to-br from-sky-50/90 via-white to-rose-50/70
        dark:from-sky-950/35 dark:via-slate-900/80 dark:to-slate-950/40
        shadow-sm dark:shadow-black/30 ring-1 ring-sky-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-rose-400/15 blur-2xl
          dark:bg-rose-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-800/90 dark:text-sky-300/90 mb-3">
          Casus 12 · Verwarde patiënt met griepachtige klachten
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { Icon: Droplets, label: 'Hb · O2-transport' },
            { Icon: Activity, label: 'S-curve · 2,3-BPG' },
            { Icon: Wind, label: 'Afgifte in weefsel' },
            { Icon: Flame, label: 'CO · carboxy-Hb' },
            { Icon: HeartPulse, label: 'SpO2 · co-oximetrie' },
            { Icon: Baby, label: 'HbF · zwangerschap' },
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
          Meerkeuzevragen over zuurstofcurve, methemoglobine, Bohr-effect, CO-intoxicatie en foetaal hemoglobine —
          inhoud uit je oefenmateriaal.
        </p>
      </div>
    </div>
  </div>
)

export default Blok5Week6Casus12GaswisselingHbO2Co2CoPracticeIntro
