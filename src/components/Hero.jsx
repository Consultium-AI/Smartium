import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Brain, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 border border-primary-200 mb-8"
          >
            <BookOpen className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">
              Studieplatform voor Geneeskunde
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-navy-900">Studeer </span>
            <span className="gradient-text">Slimmer</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-navy-600 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Samenvattingen en flashcards voor anatomie en embryologie. 
            Gemaakt door studenten, voor studenten.
          </motion.p>

          {/* CTA Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto"
          >
            <Link to="/summary">
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="p-6 bg-white rounded-2xl shadow-soft border border-navy-100 hover:border-primary-300 hover:shadow-glow transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary-100 text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-navy-800 group-hover:text-primary-600 transition-colors">
                      Samenvattingen
                    </h3>
                    <p className="text-sm text-navy-500">Anatomie & Embryologie</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-navy-300 group-hover:text-primary-500 ml-auto transition-colors" />
                </div>
              </motion.div>
            </Link>

            <Link to="/flashcards">
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="p-6 bg-white rounded-2xl shadow-soft border border-navy-100 hover:border-accent-300 hover:shadow-glow-accent transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-accent-100 text-accent-600 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-navy-800 group-hover:text-accent-600 transition-colors">
                      Flashcards
                    </h3>
                    <p className="text-sm text-navy-500">15 kaarten beschikbaar</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-navy-300 group-hover:text-accent-500 ml-auto transition-colors" />
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Logo Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16"
          >
            <motion.img
              src={`${import.meta.env.BASE_URL}smartium-logo.png`}
              alt="Smartium"
              className="w-24 h-24 mx-auto object-contain opacity-80"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
