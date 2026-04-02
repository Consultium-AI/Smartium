import { Link } from 'react-router-dom'
import { ClipboardCheck, Dna, Zap } from 'lucide-react'

const Blok5Week6Casus13CeltherapieOefenvragenCallout = ({ to }) => {
  return (
    <div className="mt-12 relative overflow-hidden rounded-2xl border border-violet-200/90 dark:border-violet-500/30 bg-gradient-to-br from-violet-50/90 via-white to-cyan-50/70 dark:from-violet-950/50 dark:via-slate-900/80 dark:to-cyan-950/40 ring-1 ring-slate-900/5 dark:ring-white/5">
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-violet-400/10 dark:bg-violet-500/15 blur-3xl"
        aria-hidden
      />
      <div className="relative p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex gap-4 min-w-0">
          <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 dark:bg-violet-500/25 text-violet-700 dark:text-violet-300">
            <Zap className="w-6 h-6" aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-700 dark:text-violet-300 flex items-center gap-1.5 mb-1">
              <Dna className="w-3.5 h-3.5" aria-hidden />
              HSCT & CAR-T
            </p>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg mb-1">
              Oefen transplantatie en celtherapie
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xl">
              Van HLA en GVHD tot het CAR-T-pad en toxiciteit: meerkeuzevragen rechtstreeks uit de
              cursus.
            </p>
          </div>
        </div>
        <Link
          to={to}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 dark:from-violet-500 dark:to-cyan-600 dark:hover:from-violet-400 dark:hover:to-cyan-500 transition-all shadow-md shrink-0"
        >
          <ClipboardCheck className="w-5 h-5" aria-hidden />
          Start oefenvragen
        </Link>
      </div>
    </div>
  )
}

export default Blok5Week6Casus13CeltherapieOefenvragenCallout
