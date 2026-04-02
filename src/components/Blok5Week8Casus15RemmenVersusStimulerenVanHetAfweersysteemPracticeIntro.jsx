import { Activity, Dna, Layers, Pill, Shield, ShieldAlert, Syringe, Zap } from 'lucide-react'

/**
 * Oefenpagina-intro specifiek voor LME 61 (remmen versus stimuleren van het afweersysteem); geen examenvragen.
 */
const Blok5Week8Casus15RemmenVersusStimulerenVanHetAfweersysteemPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mb-8">
    <div
      className="relative overflow-hidden rounded-2xl border border-emerald-200/80 dark:border-emerald-900/45
        bg-gradient-to-br from-emerald-50/90 via-white to-violet-50/70
        dark:from-emerald-950/30 dark:via-slate-900/80 dark:to-violet-950/25
        shadow-sm dark:shadow-black/30 ring-1 ring-emerald-900/5 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-6 top-0 h-28 w-28 rounded-full bg-violet-400/15 blur-2xl
          dark:bg-violet-500/10"
        aria-hidden
      />
      <div className="relative px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800/90 dark:text-emerald-300/90 mb-3">
          Casus 15 · Kiezen tussen twee kwaden
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { Icon: Pill, label: 'Steroïden · azathioprine · MMF' },
            { Icon: Layers, label: 'Biologicals · chimeer / gehumaniseerd' },
            { Icon: Activity, label: 'TNF · cytokinen · IL-6' },
            { Icon: Dna, label: 'JAK-remmers' },
            { Icon: Shield, label: 'Checkpoint · CTLA-4 · PD-1' },
            { Icon: ShieldAlert, label: 'irAE · anti-CTLA-4' },
            { Icon: Syringe, label: 'CAR-T · CRS · tocilizumab' },
            { Icon: Zap, label: 'Suppressie vs stimulatie' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-200/70 bg-white/80 px-2.5 py-1
                text-xs font-medium text-slate-700 dark:border-slate-600/80 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <Icon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden />
              {label}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Meerkeuzevragen over immuunsuppressiva, biologicals, checkpointremmers en CAR-T — antwoord zoals in je
          oefenmateriaal.
        </p>
      </div>
    </div>
  </div>
)

export default Blok5Week8Casus15RemmenVersusStimulerenVanHetAfweersysteemPracticeIntro
