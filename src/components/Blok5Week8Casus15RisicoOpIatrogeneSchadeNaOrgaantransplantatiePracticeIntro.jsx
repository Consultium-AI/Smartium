import { Activity, ClipboardList, Pill, ShieldAlert, Stethoscope, Sun, Syringe, Target } from 'lucide-react'

/**
 * Oefenpagina-intro specifiek voor LME 62 (iatrogene schade na orgaantransplantatie); geen examenvragen.
 */
const Blok5Week8Casus15RisicoOpIatrogeneSchadeNaOrgaantransplantatiePracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-amber-200/80 dark:border-amber-900/45
        bg-gradient-to-br from-amber-50/90 via-white to-rose-50/70
        dark:from-amber-950/30 dark:via-slate-900/80 dark:to-rose-950/25
        shadow-sm dark:shadow-black/30 ring-1 ring-amber-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-6 top-0 h-28 w-28 rounded-full bg-rose-400/15 blur-2xl
          dark:bg-rose-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-amber-800/90 dark:text-amber-300/90 mb-3">
          Casus 15 · Kiezen tussen twee kwaden
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { Icon: Stethoscope, label: 'Transplantatie · immunosuppressie' },
            { Icon: ShieldAlert, label: 'Iatrogene schade · toxiciteit' },
            { Icon: Sun, label: 'PCC · UV · tumor surveillance' },
            { Icon: Target, label: 'Azathioprine · cyclosporine · tacrolimus' },
            { Icon: ClipboardList, label: 'Screening · risicocategorie' },
            { Icon: Activity, label: 'Follow-up · zonprotectie' },
            { Icon: Pill, label: 'Acitretine · chemopreventie' },
            { Icon: Syringe, label: 'mTOR · sirolimus · everolimus' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-lg border border-amber-200/70 bg-white/80 px-2.5 py-1
                text-xs font-medium text-slate-700 dark:border-slate-600/80 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <Icon className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 shrink-0" aria-hidden />
              {label}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Meerkeuzevragen over transplantatie, huidkankerrisico, screening en chemopreventie — antwoord zoals in je
          oefenmateriaal.
        </p>
      </div>
    </div>
  </div>
)

export default Blok5Week8Casus15RisicoOpIatrogeneSchadeNaOrgaantransplantatiePracticeIntro
