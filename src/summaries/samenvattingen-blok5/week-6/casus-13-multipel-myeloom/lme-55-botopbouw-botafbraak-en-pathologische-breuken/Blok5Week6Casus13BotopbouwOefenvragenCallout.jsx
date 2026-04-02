import { Link } from 'react-router-dom'
import { Bone, ClipboardCheck, Sparkles } from 'lucide-react'

/**
 * Unieke oefen-CTA voor LME 55 (botremodelling, fractuurfasen, metastasen).
 * Alleen voor deze samenvatting; andere LME’s kunnen een eigen callout krijgen.
 */
const Blok5Week6Casus13BotopbouwOefenvragenCallout = ({ to }) => {
  return (
    <div className="mt-12 relative overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-600/80 bg-gradient-to-br from-slate-50 via-primary-50/40 to-accent-50/50 dark:from-slate-900/90 dark:via-primary-950/40 dark:to-slate-900/80 ring-1 ring-slate-900/5 dark:ring-white/5">
      <div
        className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-primary-400/15 dark:bg-primary-500/20 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-6 bottom-0 h-32 w-32 rounded-full bg-accent-400/15 dark:bg-accent-500/15 blur-2xl"
        aria-hidden
      />
      <div className="relative p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex gap-4 min-w-0">
          <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/15 dark:bg-primary-500/25 text-primary-700 dark:text-primary-300">
            <Bone className="w-6 h-6" aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300 flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5" aria-hidden />
              Bot & metastasen
            </p>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg mb-1">
              Oefen remodelling en pathologische fracturen
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xl">
              Van osteoblasten tot callusfasen en osteolyse bij myeloom: check of je de keten snapt
              met meerkeuzevragen op maat van deze les.
            </p>
          </div>
        </div>
        <Link
          to={to}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 dark:from-primary-500 dark:to-accent-500 dark:hover:from-primary-400 dark:hover:to-accent-400 transition-all shadow-md shrink-0"
        >
          <ClipboardCheck className="w-5 h-5" aria-hidden />
          Start oefenvragen
        </Link>
      </div>
    </div>
  )
}

export default Blok5Week6Casus13BotopbouwOefenvragenCallout
