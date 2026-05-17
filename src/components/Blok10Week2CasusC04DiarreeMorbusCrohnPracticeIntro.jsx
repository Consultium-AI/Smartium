import { CircleDot, Eye, Pill } from 'lucide-react'

/**
 * Oefenpagina-context voor Blok 10 week 2 · Casus C04 · Morbus Crohn (oefenvragen-docx).
 */
const Blok10Week2CasusC04DiarreeMorbusCrohnPracticeIntro = () => (
  <div className="max-w-3xl mx-auto mt-8 mb-10 md:mb-12">
    <div
      className="relative overflow-hidden rounded-2xl border border-emerald-200/85 dark:border-emerald-900/55
        bg-gradient-to-br from-emerald-50/90 via-white to-sky-50/70
        dark:from-emerald-950/40 dark:via-slate-900/80 dark:to-slate-950/40
        shadow-sm dark:shadow-black/30 ring-1 ring-emerald-900/6 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -left-10 -bottom-14 h-40 w-40 rounded-full bg-emerald-400/14 blur-2xl
          dark:bg-emerald-500/10"
        aria-hidden
      />
      <div className="relative px-6 py-6 sm:px-8 sm:py-7">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-900/88 dark:text-emerald-300/90 mb-5">
          Casus C04 · Diarree
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { Icon: CircleDot, label: 'IBD · calprotectine · ileocoloscopie · Montreal A2 L1 B1' },
            { Icon: Pill, label: 'Budesonide · azathioprine · anti-TNF · ballondilatatie' },
            { Icon: Eye, label: 'Extra-intestinaal · uveitis anterior · fistel MRI rectum' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-200/75 bg-white/82 px-3 py-2
                text-xs font-medium text-slate-700 dark:border-slate-600/75 dark:bg-slate-800/62 dark:text-slate-200"
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

export default Blok10Week2CasusC04DiarreeMorbusCrohnPracticeIntro
