import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, Brain, ClipboardCheck, Zap, Shield, BarChart3 } from 'lucide-react'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const mainFeatures = [
    {
      icon: FileText,
      title: 'Lecture Summaries',
      description: 'Comprehensive, concise summaries of every lecture. Distilled knowledge that saves you hours.',
      color: 'primary',
      emoji: '📚',
    },
    {
      icon: Brain,
      title: 'Smart Flashcards',
      description: 'AI-powered spaced repetition that adapts to your pace. Master concepts efficiently.',
      color: 'accent',
      emoji: '🧠',
    },
    {
      icon: ClipboardCheck,
      title: 'Practice Exams',
      description: 'Realistic exam simulations with detailed explanations. Build confidence for test day.',
      color: 'primary',
      emoji: '✅',
    },
  ]

  const subFeatures = [
    { icon: Zap, title: 'Lightning Fast', desc: 'Instant access' },
    { icon: Shield, title: 'Expert Verified', desc: 'Accurate content' },
    { icon: BarChart3, title: 'Progress Tracking', desc: 'Monitor growth' },
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
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-4"
          >
            Features
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-navy-900">
            Everything You Need to{' '}
            <span className="gradient-text-accent">Succeed</span>
          </h2>
          <p className="text-lg text-navy-500">
            A complete learning ecosystem designed for medical students.
          </p>
        </motion.div>

        {/* Main Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className={`card h-full ${feature.color === 'accent' ? 'card-accent' : 'card-primary'}`}>
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex p-4 rounded-2xl mb-5 ${
                    feature.color === 'accent' 
                      ? 'bg-accent-500 text-white' 
                      : 'bg-primary-500 text-white'
                  }`}
                >
                  <feature.icon className="w-6 h-6" />
                </motion.div>

                <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-navy-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sub-features row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {subFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-2xl bg-white border border-navy-100 shadow-soft text-center"
            >
              <div className="inline-flex p-2 rounded-xl bg-primary-50 text-primary-600 mb-2">
                <feature.icon className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-navy-800 text-sm">{feature.title}</h4>
              <p className="text-xs text-navy-400 mt-0.5">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
