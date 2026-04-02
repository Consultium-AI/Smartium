import { Link } from 'react-router-dom'
import { ClipboardCheck, HeartHandshake, ShieldPlus } from 'lucide-react'

const Blok5Week6Casus13TransplantatiegeneeskundeOefenvragenCallout = ({ to }) => {
  return (
    <div className="mt-12 relative overflow-hidden rounded-2xl border border-emerald-200/90 dark:border-emerald-500/25 bg-gradient-to-br from-emerald-50/85 via-white to-rose-50/75 dark:from-emerald-950/30 dark:via-slate-900/85 dark:to-slate-900/80 ring-1 ring-slate-900/5 dark:ring-white/5">
      <div
        className="pointer-events-none absolute -left-8 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-rose-400/10 dark:bg-rose-500/12 blur-2xl"
        aria-hidden
      />
      <div className="relative p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex gap-4 min-w-0">
          <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 dark:bg-emerald-500/25 text-emerald-800 dark:text-emerald-300">
            <HeartHandshake className="w-6 h-6" aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400 flex items-center gap-1.5 mb-1">
              <ShieldPlus className="w-3.5 h-3.5" aria-hidden />
              DBD · DCD · HLA · IS
            </p>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg mb-1">
              Oefen transplantatie en immuunsuppressie
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xl">
              Van donatie en matching tot rejectie, infecties en vaccinaties: meerkeuzevragen uit je
              officiële oefenbestand.
            </p>
          </div>
        </div>
        <Link
          to={to}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-rose-700 hover:from-emerald-700 hover:to-rose-800 dark:from-emerald-500 dark:to-rose-600 dark:hover:from-emerald-400 dark:hover:to-rose-500 transition-all shadow-md shrink-0"
        >
          <ClipboardCheck className="w-5 h-5" aria-hidden />
          Start oefenvragen
        </Link>
      </div>
    </div>
  )
}

export default Blok5Week6Casus13TransplantatiegeneeskundeOefenvragenCallout
