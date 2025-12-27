import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, Brain, BookOpen, Lightbulb } from 'lucide-react'
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
      icon: Brain,
      title: 'Interactieve Flashcards',
      description: 'Oefen met flip-kaarten die je helpen concepten te onthouden. Houd je voortgang bij terwijl je leert.',
      color: 'accent',
      link: '/flashcards',
    },
  ]

  const benefits = [
    { icon: BookOpen, text: 'Anatomie & Embryologie' },
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-navy-900">
            Wat bieden wij?
          </h2>
          <p className="text-lg text-navy-500">
            Studiemateriaal dat je helpt om efficiënter te leren.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
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
                      ? 'bg-gradient-to-br from-accent-50 to-white border-accent-200 hover:border-accent-400 hover:shadow-glow-accent'
                      : 'bg-gradient-to-br from-primary-50 to-white border-primary-200 hover:border-primary-400 hover:shadow-glow'
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
                      ? 'text-navy-900 group-hover:text-accent-600'
                      : 'text-navy-900 group-hover:text-primary-600'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="text-navy-500 leading-relaxed text-lg">
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
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-navy-100 shadow-soft"
            >
              <benefit.icon className="w-5 h-5 text-primary-500" />
              <span className="text-navy-700 font-medium">{benefit.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
