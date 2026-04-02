import { Link } from 'react-router-dom'
import { ClipboardCheck, TestTube2, Waves } from 'lucide-react'

const Blok5Week6Casus13MProteineDiagnostiekOefenvragenCallout = ({ to }) => {
  return (
    <div className="mt-12 relative overflow-hidden rounded-2xl border border-cyan-200/90 dark:border-cyan-500/25 bg-gradient-to-br from-cyan-50/85 via-white to-slate-50/80 dark:from-cyan-950/35 dark:via-slate-900/85 dark:to-slate-900/80 ring-1 ring-slate-900/5 dark:ring-white/5">
      <div
        className="pointer-events-none absolute right-4 bottom-0 h-32 w-48 rounded-full bg-cyan-400/12 dark:bg-cyan-500/15 blur-2xl"
        aria-hidden
      />
      <div className="relative p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex gap-4 min-w-0">
          <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 dark:bg-cyan-500/25 text-cyan-800 dark:text-cyan-300">
            <TestTube2 className="w-6 h-6" aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400 flex items-center gap-1.5 mb-1">
              <Waves className="w-3.5 h-3.5" aria-hidden />
              SPE · IF · FLC
            </p>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg mb-1">
              Oefen M-proteïne en responscriteria
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xl">
              Van monoklonale band tot VGPR en sCR: meerkeuzevragen uit je officiële
              oefenbestand.
            </p>
          </div>
        </div>
        <Link
          to={to}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-600 to-slate-700 hover:from-cyan-700 hover:to-slate-800 dark:from-cyan-500 dark:to-slate-600 dark:hover:from-cyan-400 dark:hover:to-slate-500 transition-all shadow-md shrink-0"
        >
          <ClipboardCheck className="w-5 h-5" aria-hidden />
          Start oefenvragen
        </Link>
      </div>
    </div>
  )
}

export default Blok5Week6Casus13MProteineDiagnostiekOefenvragenCallout
