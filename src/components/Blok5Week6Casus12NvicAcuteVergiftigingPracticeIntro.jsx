import { Database, Droplets, Flame, Phone, ShieldAlert, Stethoscope } from 'lucide-react'

/**
 * Oefenpagina-intro voor LME 53 (NVIC acute vergiftiging): visuele context, geen examenvragen.
 */
const Blok5Week6Casus12NvicAcuteVergiftigingPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-amber-200/80 dark:border-amber-900/45
        bg-gradient-to-br from-amber-50/90 via-white to-violet-50/65
        dark:from-amber-950/30 dark:via-slate-900/80 dark:to-slate-950/40
        shadow-sm dark:shadow-black/30 ring-1 ring-amber-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -left-10 top-0 h-32 w-32 rounded-full bg-violet-400/12 blur-2xl
          dark:bg-violet-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-amber-900/85 dark:text-amber-300/90 mb-3">
          Casus 12 · Verwarde patiënt met griepachtige klachten
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { Icon: Phone, label: 'NVIC · advies' },
            { Icon: Database, label: 'Stoffendatabank' },
            { Icon: Stethoscope, label: 'CO · differentiaal' },
            { Icon: ShieldAlert, label: 'GAGS · incidenten' },
            { Icon: Droplets, label: 'HF · calcium' },
            { Icon: Flame, label: 'Brand · rook' },
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
          Meerkeuzevragen over het NVIC, koolstofmonoxide, GAGS en waterstoffluoride — inhoud uit je oefenmateriaal.
        </p>
      </div>
    </div>
  </div>
)

export default Blok5Week6Casus12NvicAcuteVergiftigingPracticeIntro
