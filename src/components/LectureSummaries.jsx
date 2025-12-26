import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FileText, ChevronRight, Star, Clock, Search } from 'lucide-react'

const LectureSummaries = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState('Anatomy')

  const categories = ['Anatomy', 'Physiology', 'Pharmacology', 'Pathology']

  const summaries = [
    {
      title: 'Cardiovascular System Overview',
      duration: '15 min',
      rating: 4.9,
      emoji: '🫀',
    },
    {
      title: 'Neuroanatomy of the Brainstem',
      duration: '20 min',
      rating: 4.8,
      emoji: '🧠',
    },
    {
      title: 'Upper Limb Musculature',
      duration: '18 min',
      rating: 4.7,
      emoji: '💪',
    },
  ]

  return (
    <section id="summaries" className="py-24 relative" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4"
            >
              <FileText className="w-4 h-4" />
              Lecture Summaries
            </motion.span>

            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-navy-900">
              Learn Faster with{' '}
              <span className="gradient-text">Expert Summaries</span>
            </h2>

            <p className="text-lg text-navy-500 mb-8 leading-relaxed">
              Stop drowning in textbooks. Our expert-curated summaries distill complex 
              concepts into clear, memorable content.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { value: '500+', label: 'Summaries' },
                { value: '50+', label: 'Topics' },
                { value: '4.9', label: 'Rating' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-white shadow-soft border border-navy-100"
                >
                  <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                  <div className="text-sm text-navy-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary flex items-center gap-2"
            >
              Browse Summaries
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Right - Interactive Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-soft-lg border border-navy-100 overflow-hidden">
              {/* Search bar */}
              <div className="p-4 border-b border-navy-100">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
                  <input
                    type="text"
                    placeholder="Search summaries..."
                    className="input-field pl-12"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="p-4 border-b border-navy-100">
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map((cat) => (
                    <motion.button
                      key={cat}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                        activeCategory === cat
                          ? 'bg-primary-500 text-white shadow-soft'
                          : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                      }`}
                    >
                      {cat}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Summary cards */}
              <div className="p-4 space-y-3">
                {summaries.map((summary, index) => (
                  <motion.div
                    key={summary.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="group p-4 rounded-2xl bg-cream-50 hover:bg-primary-50 cursor-pointer transition-all border border-transparent hover:border-primary-200"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 rounded-xl bg-white shadow-soft flex items-center justify-center text-2xl"
                      >
                        {summary.emoji}
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-navy-800 group-hover:text-primary-700 transition-colors">
                          {summary.title}
                        </h4>
                        <div className="flex items-center gap-4 mt-1 text-sm">
                          <span className="flex items-center gap-1 text-navy-400">
                            <Clock className="w-4 h-4" />
                            {summary.duration}
                          </span>
                          <span className="flex items-center gap-1 text-amber-500">
                            <Star className="w-4 h-4 fill-current" />
                            {summary.rating}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-navy-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LectureSummaries
