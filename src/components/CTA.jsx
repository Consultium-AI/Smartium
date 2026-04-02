import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ease = [0.25, 0.1, 0.25, 1]

const MONTHLY = 9.99
const YEARLY_PER_MONTH = 8.89
const YEARLY_TOTAL = 106.68
const DISCOUNT = Math.round((1 - YEARLY_TOTAL / (MONTHLY * 12)) * 100)

const eur = (n) =>
  new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(n)

const INCLUDED = [
  'Alle samenvattingen',
  'Oefententamens met nakijking',
  'Oefenvragen per onderwerp',
  'Smartium AI Chat',
]

const Pricing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" className="relative isolate overflow-hidden border-t border-slate-200/90 dark:border-slate-700/40" ref={ref}>
      <div className="absolute inset-0 cta-section-bg -z-10" aria-hidden />

      <div className="container-custom py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-14"
        >
          <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-navy-400 dark:text-slate-400 mb-5">
            Prijzen
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-navy-900 dark:text-slate-50 tracking-tight leading-tight mb-4">
            Eén platform, alles inbegrepen
          </h2>
          <p className="text-base text-navy-500 dark:text-slate-300/90 leading-relaxed">
            Kies het plan dat bij je past. Maandelijks opzegbaar.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto mb-10">
          {/* Maandelijks */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.06, ease }}
          >
            <Link
              to="/billing?plan=monthly"
              className="group block h-full rounded-2xl border border-slate-200/90 bg-white/90 p-7 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-600/50 dark:bg-slate-900/85 dark:ring-1 dark:ring-white/[0.06] dark:hover:border-slate-500 dark:hover:ring-white/10"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Maandelijks
              </p>
              <p className="font-display text-3xl font-bold text-navy-900 dark:text-white mb-1">
                {eur(MONTHLY)}
                <span className="text-base font-semibold text-slate-500">/maand</span>
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Maandelijks opzegbaar</p>

              <ul className="space-y-2.5 mb-6">
                {INCLUDED.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-navy-700 dark:text-slate-300">
                    <Check className="h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 group-hover:gap-3 transition-all">
                Aan de slag
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </span>
            </Link>
          </motion.div>

          {/* Jaarlijks */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.12, ease }}
          >
            <Link
              to="/billing?plan=yearly"
              className="group relative block h-full rounded-2xl border-2 border-primary-400/70 bg-gradient-to-br from-primary-50/80 to-white p-7 shadow-md transition-all hover:shadow-lg dark:border-primary-500/40 dark:from-primary-950/40 dark:to-slate-900/90"
            >
              <span className="absolute right-4 top-4 rounded-full bg-primary-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                {DISCOUNT}% korting
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-300 mb-2">
                Jaarlijks
              </p>
              <p className="font-display text-3xl font-bold text-navy-900 dark:text-white mb-1">
                {eur(YEARLY_PER_MONTH)}
                <span className="text-base font-semibold text-slate-500">/maand</span>
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-1">
                {eur(YEARLY_TOTAL)} per jaar
              </p>
              <p className="text-xs text-slate-400 line-through mb-6">
                Was {eur(MONTHLY * 12)}/jaar
              </p>

              <ul className="space-y-2.5 mb-6">
                {INCLUDED.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-navy-700 dark:text-slate-300">
                    <Check className="h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 group-hover:gap-3 transition-all">
                Aan de slag
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.2, ease }}
          className="text-center text-sm text-slate-400 dark:text-slate-500"
        >
          Betalen via iDEAL · Veilig via Stripe
        </motion.p>
      </div>
    </section>
  )
}

export default Pricing
