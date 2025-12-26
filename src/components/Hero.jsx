import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 border border-primary-200 mb-6"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-primary-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-primary-700">Trusted by 50,000+ students</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-navy-900">Study Smarter,</span>
              <br />
              <span className="gradient-text">Not Harder</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-navy-600 max-w-lg mb-8 leading-relaxed"
            >
              The ultimate learning platform for medical students. Lecture summaries, 
              smart flashcards, and practice exams — all in one beautiful place.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
              >
                Start Learning Free
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
              >
                <Play className="w-5 h-5 text-primary-500" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 mt-10"
            >
              <div className="flex -space-x-2">
                {['👨‍⚕️', '👩‍⚕️', '👨‍🔬', '👩‍🔬'].map((emoji, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-lg border-2 border-white"
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>
              <div className="text-sm text-navy-600">
                <span className="font-semibold text-navy-800">4.9/5</span> from 2,000+ reviews
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Hero Image/Card */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main card */}
            <motion.div
              className="relative bg-white rounded-4xl shadow-soft-xl p-6 border border-navy-100"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Logo display */}
              <div className="flex justify-center mb-6">
                <motion.img
                  src="/smartium-logo.png"
                  alt="Smartium"
                  className="w-32 h-32 object-contain"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { value: '500+', label: 'Lectures', color: 'primary' },
                  { value: '2,450', label: 'Flashcards', color: 'accent' },
                  { value: '94%', label: 'Pass Rate', color: 'primary' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className={`p-4 rounded-2xl ${stat.color === 'accent' ? 'bg-accent-50' : 'bg-primary-50'} text-center`}
                  >
                    <div className={`text-2xl font-bold ${stat.color === 'accent' ? 'text-accent-600' : 'text-primary-600'}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-navy-500 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Progress bars */}
              <div className="space-y-3">
                {[
                  { subject: 'Anatomy', progress: 85, color: 'bg-primary-500' },
                  { subject: 'Pharmacology', progress: 72, color: 'bg-accent-500' },
                  { subject: 'Pathology', progress: 68, color: 'bg-primary-400' },
                ].map((item, index) => (
                  <motion.div
                    key={item.subject}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                  >
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-navy-700 font-medium">{item.subject}</span>
                      <span className="text-navy-500">{item.progress}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-navy-100 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${item.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ delay: 1.4 + index * 0.1, duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating accent card */}
            <motion.div
              className="absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-soft-lg p-4 border border-navy-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy-800">Great job!</div>
                  <div className="text-xs text-navy-500">You're on a 7-day streak</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
