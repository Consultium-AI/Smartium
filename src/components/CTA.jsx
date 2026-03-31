import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, CreditCard, FileText, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'

const ease = [0.25, 0.1, 0.25, 1]

const CTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative isolate overflow-hidden border-t border-slate-200/90 dark:border-slate-700/40" ref={ref}>
      <div className="absolute inset-0 cta-section-bg -z-10" aria-hidden />

      <div className="container-custom py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="max-w-xl mx-auto rounded-2xl border border-slate-200/90 dark:border-slate-600/45 bg-white/80 dark:bg-slate-900/70 dark:ring-1 dark:ring-white/[0.07] px-8 py-12 md:px-12 md:py-14 text-center shadow-[0_1px_0_0_rgba(15,23,42,0.04)] dark:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.45)]"
        >
          <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-navy-400 dark:text-slate-400 mb-5">
            Aan de slag
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-[2rem] font-semibold text-navy-900 dark:text-slate-50 tracking-tight leading-tight mb-4">
            Begin met slimmer studeren
          </h2>
          <p className="text-base text-navy-500 dark:text-slate-300/90 leading-relaxed mb-6">
            Samenvattingen doorlezen of je kennis testen met oefententamens — het past bij de rest van Smartium.
          </p>
          <p className="text-sm text-navy-600 dark:text-slate-400 leading-relaxed mb-10">
            <Link
              to="/billing"
              className="font-semibold text-primary-600 underline decoration-primary-500/40 underline-offset-2 transition hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Abonnement
            </Link>
            : vanaf €9,99/maand of €8,89/maand bij jaarplan — betalen via Stripe (kaart, PayPal; iDEAL mogelijk na SEPA-setup).
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/summary"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-navy-900 text-white text-sm font-semibold tracking-wide dark:bg-white dark:text-navy-950 hover:bg-navy-800 dark:hover:bg-slate-100 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-colors"
            >
              <FileText className="w-4 h-4 opacity-90" strokeWidth={2} />
              Samenvattingen
              <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
            </Link>
            <Link
              to="/tentamen"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-slate-200/90 dark:border-slate-500/70 dark:bg-slate-900/40 text-navy-800 dark:text-slate-200 text-sm font-semibold tracking-wide hover:border-primary-400/60 hover:bg-primary-50/50 dark:hover:bg-slate-800/85 dark:hover:border-slate-400/55 transition-colors"
            >
              <GraduationCap className="w-4 h-4 opacity-80" strokeWidth={2} />
              Oefententamens
            </Link>
            <Link
              to="/billing"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-primary-200/90 bg-primary-50/80 text-primary-900 dark:border-primary-500/35 dark:bg-primary-950/40 dark:text-primary-100 text-sm font-semibold tracking-wide hover:bg-primary-100/90 dark:hover:bg-primary-950/70 transition-colors sm:w-auto w-full"
            >
              <CreditCard className="w-4 h-4 opacity-90" strokeWidth={2} />
              Prijzen &amp; afrekenen
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
