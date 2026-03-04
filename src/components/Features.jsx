import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, GraduationCap, BookOpen, Lightbulb, Bot, ClipboardCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: FileText,
      title: 'Uitgebreide Samenvattingen',
      description: 'Gestructureerde samenvattingen van complexe stof, voorzien van duidelijke tussenkopjes en visuele elementen.',
      color: 'primary',
      link: '/summary',
    },
    {
      icon: GraduationCap,
      title: 'Oefententamens',
      description: 'Test je kennis met oefententamens. Ideaal voor examenvoorbereiding.',
      color: 'accent',
      link: '/tentamen',
    },
    {
      icon: Bot,
      title: 'AI Chat',
      description: 'Stel vragen over de leerstof en krijg antwoorden met directe verwijzingen naar de samenvattingen.',
      color: 'primary',
      link: '/chat',
    },
    {
      icon: ClipboardCheck,
      title: 'Oefenvragen',
      description: 'Oefen met meerkeuzevragen per onderwerp. Ideaal om je kennis te toetsen.',
      color: 'accent',
      link: '/oefenvragen',
    },
  ]

  const benefits = [
    { icon: BookOpen, text: 'Nieuw curriculum geneeskunde' },
    { icon: Lightbulb, text: 'Door studenten gemaakt' },
  ]

  return (
    <section id="features" className="py-24 relative" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-navy-900 dark:text-slate-100">
            Wat bieden wij?
          </h2>
          <p className="text-lg text-navy-500 dark:text-slate-400">
            Studiemateriaal dat je helpt om efficiënter te leren.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link to={feature.link}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`group h-full p-8 rounded-3xl border-2 transition-all cursor-pointer ${
                    feature.color === 'accent'
                      ? 'bg-gradient-to-br from-accent-50 to-white dark:from-accent-900/30 dark:to-slate-800/90 border-accent-200 dark:border-accent-500/30 hover:border-accent-400 dark:hover:border-accent-500/60 hover:shadow-glow-accent'
                      : 'bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/30 dark:to-slate-800/90 border-primary-200 dark:border-primary-500/30 hover:border-primary-400 dark:hover:border-primary-500/60 hover:shadow-glow'
                  }`}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-4 rounded-2xl mb-6 ${
                      feature.color === 'accent'
                        ? 'bg-accent-500 text-white'
                        : 'bg-primary-500 text-white'
                    }`}
                  >
                    <feature.icon className="w-7 h-7" />
                  </motion.div>

                  <h3 className={`text-2xl font-bold mb-3 transition-colors ${
                    feature.color === 'accent'
                      ? 'text-navy-900 dark:text-slate-100 group-hover:text-accent-600 dark:group-hover:text-accent-400'
                      : 'text-navy-900 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-primary-400'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="text-navy-500 dark:text-slate-300 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Benefits row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.text}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-white dark:bg-slate-800/50 border border-navy-100 dark:border-slate-600/50 shadow-soft dark:shadow-none"
            >
              <benefit.icon className="w-5 h-5 text-primary-500" />
              <span className="text-navy-700 dark:text-slate-300 font-medium">{benefit.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
