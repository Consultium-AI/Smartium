import { Link } from 'react-router-dom'
import { ClipboardCheck, Crosshair, Pill } from 'lucide-react'

const Blok5Week6Casus13MmTargetedTherapyOefenvragenCallout = ({ to }) => {
  return (
    <div className="mt-12 relative overflow-hidden rounded-2xl border border-rose-200/90 dark:border-rose-500/25 bg-gradient-to-br from-rose-50/80 via-white to-indigo-50/70 dark:from-rose-950/40 dark:via-slate-900/85 dark:to-indigo-950/45 ring-1 ring-slate-900/5 dark:ring-white/5">
      <div
        className="pointer-events-none absolute -left-10 top-0 h-36 w-36 rounded-full bg-indigo-400/15 dark:bg-indigo-500/20 blur-2xl"
        aria-hidden
      />
      <div className="relative p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex gap-4 min-w-0">
          <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/15 dark:bg-rose-500/25 text-rose-700 dark:text-rose-300">
            <Crosshair className="w-6 h-6" aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5 mb-1">
              <Pill className="w-3.5 h-3.5" aria-hidden />
              Targeted therapy
            </p>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg mb-1">
              Oefen myeloom: van IMiD tot CAR-T en resistentie
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xl">
              Meerkeuzevragen over middelen, targets en eerstelijn — precies zoals in je
              oefendocument.
            </p>
          </div>
        </div>
        <Link
          to={to}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-700 hover:to-indigo-700 dark:from-rose-500 dark:to-indigo-500 dark:hover:from-rose-400 dark:hover:to-indigo-400 transition-all shadow-md shrink-0"
        >
          <ClipboardCheck className="w-5 h-5" aria-hidden />
          Start oefenvragen
        </Link>
      </div>
    </div>
  )
}

export default Blok5Week6Casus13MmTargetedTherapyOefenvragenCallout
