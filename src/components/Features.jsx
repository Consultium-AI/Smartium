import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, GraduationCap, Bot, ClipboardCheck, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ease = [0.25, 0.1, 0.25, 1]

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const features = [
    {
      icon: FileText,
      title: 'Samenvattingen',
      description: 'Kernstof per casus, overzichtelijk opgebouwd met tabellen en klinische toepassingen.',
      link: '/summary',
    },
    {
      icon: GraduationCap,
      title: 'Oefententamens',
      description: 'Casusgerichte tentamens met directe feedback en puntentelling per vraag.',
      link: '/tentamen',
    },
    {
      icon: Bot,
      title: 'AI Chat',
      description: 'Stel vragen over de stof en krijg antwoorden op basis van jouw samenvattingen.',
      link: '/chat',
    },
    {
      icon: ClipboardCheck,
      title: 'Oefenvragen',
      description: 'Meerkeuze per onderwerp — test je kennis gericht en zie direct wat je mist.',
      link: '/oefenvragen',
    },
  ]

  return (
    <section id="features" className="relative isolate overflow-hidden border-t border-slate-200/90 dark:border-slate-700/40" ref={ref}>
      <div className="absolute inset-0 platform-section-bg -z-20" aria-hidden />
      <div className="absolute inset-0 platform-section-grid -z-10 pointer-events-none" aria-hidden />

      <div className="container-custom relative py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-16"
        >
          <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-navy-400 dark:text-slate-400 mb-5">
            Platform
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-navy-900 dark:text-slate-50 tracking-tight leading-tight mb-5">
            Alles voor je blok, op één plek
          </h2>
          <p className="text-base md:text-lg text-navy-500 dark:text-slate-300/90 leading-relaxed">
            Vier onderdelen die samen je voorbereiding compleet maken.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.06, ease }}
            >
              <Link to={feature.link} className="group block h-full">
                <div className="h-full flex flex-col p-6 md:p-7 rounded-2xl bg-white/90 dark:bg-slate-900/85 dark:ring-1 dark:ring-white/[0.06] border border-slate-200/90 dark:border-slate-600/50 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)] transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-500 hover:shadow-md dark:hover:bg-slate-900 dark:hover:ring-white/10">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-navy-700 dark:text-slate-100 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-200">
                    <feature.icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-slate-100 mb-2 tracking-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-navy-500 dark:text-slate-400/95 leading-relaxed flex-1 mb-4">
                    {feature.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400 opacity-90 group-hover:gap-2 transition-all">
                    Bekijk
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
