import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Users, BookOpen, Award, TrendingUp } from 'lucide-react'

const AnimatedCounter = ({ value, suffix = '', duration = 2 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    if (value >= 1000) {
      return (latest / 1000).toFixed(1) + 'K'
    }
    return Math.round(latest).toLocaleString()
  })

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration })
      return controls.stop
    }
  }, [isInView, value, count, duration])

  return (
    <motion.span ref={ref}>
      {isInView ? <motion.span>{rounded}</motion.span> : '0'}
      {suffix}
    </motion.span>
  )
}

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    {
      icon: Users,
      value: 50000,
      suffix: '+',
      label: 'Active Students',
      description: 'Learning with Smartium',
      gradient: 'from-primary-400 to-primary-600',
    },
    {
      icon: BookOpen,
      value: 500,
      suffix: '+',
      label: 'Lecture Summaries',
      description: 'Comprehensive content',
      gradient: 'from-accent-400 to-accent-600',
    },
    {
      icon: Award,
      value: 94,
      suffix: '%',
      label: 'Pass Rate',
      description: 'On first attempt',
      gradient: 'from-emerald-400 to-emerald-600',
    },
    {
      icon: TrendingUp,
      value: 35,
      suffix: '%',
      label: 'Score Improvement',
      description: 'Average increase',
      gradient: 'from-violet-400 to-violet-600',
    },
  ]

  return (
    <section className="py-24 relative" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Trusted by Medical Students <span className="gradient-text">Worldwide</span>
          </h2>
          <p className="text-dark-400 max-w-xl mx-auto">
            Join thousands of future doctors who are already using Smartium to accelerate their learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl glass-card glass-card-hover text-center overflow-hidden">
                {/* Background glow on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} mb-6`}
                >
                  <stat.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Value */}
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-dark-500">
                  {stat.description}
                </div>

                {/* Decorative corner */}
                <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${stat.gradient} opacity-10 group-hover:opacity-20 transition-opacity blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <p className="text-center text-sm text-dark-500 mb-8">
            Students from top medical schools trust Smartium
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Harvard Medical', 'Johns Hopkins', 'Stanford Med', 'Mayo Clinic', 'UCSF'].map((school, index) => (
              <motion.div
                key={school}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.5 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                className="text-dark-500 font-semibold text-sm md:text-base cursor-pointer transition-opacity"
              >
                {school}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats

