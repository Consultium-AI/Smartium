import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ease = [0.25, 0.1, 0.25, 1]

const MotionLink = motion(Link)

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
}

const lineVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.65, delay: 0.42, ease },
  },
}

const Hero = () => {
  const { user } = useAuth()

  return (
    <section className="relative pt-28 pb-28 md:pt-40 md:pb-32 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-cream-50/90 to-cream-100/80 dark:from-[#0a0e14] dark:via-[#080c12] dark:to-[#06080d]" />

        <div
          className="absolute inset-0 opacity-[0.5] motion-reduce:opacity-[0.35] dark:hidden animate-hero-shimmer motion-reduce:animate-none bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(0,195,255,0.14),transparent_55%),radial-gradient(ellipse_70%_45%_at_100%_50%,rgba(0,136,184,0.08),transparent_50%),radial-gradient(ellipse_60%_40%_at_0%_80%,rgba(0,195,255,0.06),transparent_45%)]"
        />
        <div
          className="absolute inset-0 hidden dark:block opacity-90 motion-reduce:opacity-60 animate-hero-shimmer motion-reduce:animate-none bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(56,189,248,0.12),transparent_55%),radial-gradient(ellipse_65%_45%_at_95%_40%,rgba(14,165,233,0.08),transparent_48%),radial-gradient(ellipse_55%_38%_at_5%_85%,rgba(34,211,238,0.06),transparent_45%)]"
        />

        <div
          className="absolute inset-0 dark:hidden opacity-[0.35] motion-reduce:opacity-25 animate-hero-grid-pan motion-reduce:animate-none [background-image:linear-gradient(rgba(45,58,73,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(45,58,73,0.05)_1px,transparent_1px)] [background-size:4rem_4rem]"
        />
        <div
          className="absolute inset-0 hidden dark:block opacity-[0.22] motion-reduce:opacity-15 animate-hero-grid-pan motion-reduce:animate-none [background-image:linear-gradient(rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.09)_1px,transparent_1px)] [background-size:4rem_4rem]"
        />

        <div className="absolute -top-[20%] left-1/2 h-[min(85vw,42rem)] w-[min(85vw,42rem)] -translate-x-1/2 rounded-full bg-primary-300/25 blur-[100px] motion-reduce:animate-none dark:bg-primary-500/20 animate-hero-blob-1" />
        <div className="absolute top-[35%] -left-[15%] h-[min(70vw,28rem)] w-[min(70vw,28rem)] rounded-full bg-primary-400/20 blur-[90px] motion-reduce:animate-none dark:bg-cyan-500/15 animate-hero-blob-2" />
        <div className="absolute bottom-[-10%] right-[-12%] h-[min(65vw,26rem)] w-[min(65vw,26rem)] rounded-full bg-primary-200/30 blur-[88px] motion-reduce:animate-none dark:bg-sky-600/12 animate-hero-blob-3" />
        <div className="absolute top-[55%] right-[5%] h-[min(45vw,18rem)] w-[min(45vw,18rem)] rounded-full bg-navy-200/40 blur-[72px] motion-reduce:animate-none dark:bg-slate-600/10 animate-hero-blob-4" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-[42rem] mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8 md:mb-12">
            <div className="mx-auto w-fit motion-reduce:animate-none animate-float">
              <img
                src={`${import.meta.env.BASE_URL}smartium-logo.png`}
                alt="Smartium"
                className="w-14 h-14 md:w-16 md:h-16 mx-auto object-contain opacity-90 dark:opacity-85 drop-shadow-[0_0_28px_rgba(0,195,255,0.2)] dark:drop-shadow-[0_0_32px_rgba(56,189,248,0.15)]"
              />
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-navy-400 dark:text-slate-400 mb-6"
          >
            Nieuw Curriculum · Geneeskunde
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-display text-[2.5rem] sm:text-5xl md:text-6xl font-semibold leading-[1.08] tracking-tight text-navy-900 dark:text-slate-50 mb-6"
          >
            Study <span className="gradient-text">Smarter</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-navy-500 dark:text-slate-300/90 leading-relaxed max-w-md mx-auto mb-14 md:mb-14"
          >
            Samenvattingen, oefenvragen en tentamens die aansluiten op jouw blok. Alles op
            één plek, zodat jij je kunt focussen op leren.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
          >
            <MotionLink
              to={user ? '/summary' : '/login'}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-navy-900 text-white text-sm font-semibold tracking-wide dark:bg-white dark:text-navy-950 hover:bg-navy-800 dark:hover:bg-slate-100 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-colors shadow-soft-lg dark:shadow-[0_12px_40px_-12px_rgba(56,189,248,0.15)]"
            >
              Aan de slag
              <ArrowRight
                className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform"
                strokeWidth={2}
              />
            </MotionLink>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-navy-200/90 dark:border-slate-500/70 dark:bg-slate-900/30 text-navy-800 dark:text-slate-200 text-sm font-semibold tracking-wide hover:border-primary-400/60 hover:bg-primary-50/50 dark:hover:bg-slate-800/80 dark:hover:border-slate-400/60 transition-colors backdrop-blur-[2px]"
            >
              <ArrowDown className="w-4 h-4 opacity-80" strokeWidth={2} />
              Bekijk platform
            </motion.a>
          </motion.div>

          <motion.div
            variants={lineVariants}
            className="mt-20 md:mt-20 h-px w-12 mx-auto bg-gradient-to-r from-transparent via-navy-200 dark:via-slate-500/50 to-transparent origin-center"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
