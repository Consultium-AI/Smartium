import { Droplets, FlaskConical, UtensilsCrossed } from 'lucide-react'

/**
 * Oefenpagina-context voor Blok 10 week 2 · Casus C04 · Vertering en opname (oefenvragen-docx).
 */
const Blok10Week2CasusC04DiarreeVerteringEnOpnamePracticeIntro = () => (
  <div className="max-w-3xl mx-auto mt-8 mb-10 md:mb-12">
    <div
      className="relative overflow-hidden rounded-2xl border border-amber-200/85 dark:border-amber-900/50
        bg-gradient-to-br from-amber-50/90 via-white to-orange-50/65
        dark:from-amber-950/35 dark:via-slate-900/80 dark:to-slate-950/40
        shadow-sm dark:shadow-black/30 ring-1 ring-amber-900/6 dark:ring-white/5"
    >
      <div
        className="pointer-events-none absolute -right-6 -top-14 h-40 w-44 rounded-full bg-orange-400/16 blur-2xl
          dark:bg-amber-500/10"
        aria-hidden
      />
      <div className="relative px-6 py-6 sm:px-8 sm:py-7">
        <p className="text-xs font-semibold uppercase tracking-wider text-amber-950/85 dark:text-amber-200/85 mb-5">
          Casus C04 · Diarree
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { Icon: UtensilsCrossed, label: 'Mond-maag-dundarm · enzymen · peptiden · glucose' },
            { Icon: Droplets, label: 'Galzouten · micellen · intestinale opname-transporters' },
            { Icon: FlaskConical, label: 'CF · pancreatische insufficiëntie · steatorroe · Bristol' },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-xl border border-amber-200/80 bg-white/85 px-3 py-2
                text-xs font-medium text-slate-700 dark:border-slate-600/78 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <Icon className="h-3.5 w-3.5 text-amber-800 dark:text-amber-400 shrink-0" aria-hidden />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Blok10Week2CasusC04DiarreeVerteringEnOpnamePracticeIntro
