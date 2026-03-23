import { motion } from 'framer-motion'
import { ArrowRight, FileText, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'

const ease = [0.25, 0.1, 0.25, 1]

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-[42rem] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-10 md:mb-12"
          >
            <img
              src={`${import.meta.env.BASE_URL}smartium-logo.png`}
              alt="Smartium"
              className="w-14 h-14 md:w-16 md:h-16 mx-auto object-contain opacity-90 dark:opacity-85"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease }}
            className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-navy-400 dark:text-slate-400 mb-6"
          >
            Geneeskunde · Nieuw curriculum
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="font-display text-[2.5rem] sm:text-5xl md:text-6xl font-semibold leading-[1.08] tracking-tight text-navy-900 dark:text-slate-50 mb-6"
          >
            Study <span className="gradient-text">Smarter</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease }}
            className="text-base md:text-lg text-navy-500 dark:text-slate-300/90 leading-relaxed max-w-md mx-auto mb-12 md:mb-14"
          >
            Samenvattingen en oefententamens voor leerjaar 1 — door studenten, voor studenten.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
          >
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
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-navy-200/90 dark:border-slate-500/70 dark:bg-slate-900/30 text-navy-800 dark:text-slate-200 text-sm font-semibold tracking-wide hover:border-primary-400/60 hover:bg-primary-50/50 dark:hover:bg-slate-800/80 dark:hover:border-slate-400/60 transition-colors"
            >
              <GraduationCap className="w-4 h-4 opacity-80" strokeWidth={2} />
              Oefententamens
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 md:mt-20 h-px w-12 mx-auto bg-gradient-to-r from-transparent via-navy-200 dark:via-slate-500/50 to-transparent"
            aria-hidden
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
