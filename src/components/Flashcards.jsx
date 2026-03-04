import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Brain, RotateCcw, Check, X, Sparkles, Zap, Target } from 'lucide-react'

const Flashcards = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isFlipped, setIsFlipped] = useState(false)
  const [currentCard, setCurrentCard] = useState(0)

  const flashcards = [
    {
      question: "What are the three layers of the heart wall?",
      answer: "Epicardium (outer), Myocardium (middle), and Endocardium (inner)",
      category: "Anatomy",
    },
    {
      question: "Name the branches of the aortic arch",
      answer: "Brachiocephalic trunk, Left common carotid artery, Left subclavian artery",
      category: "Anatomy",
    },
  ]

  const handleNext = () => {
    setIsFlipped(false)
    setTimeout(() => {
      setCurrentCard((prev) => (prev + 1) % flashcards.length)
    }, 200)
  }

  return (
    <section id="flashcards" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Interactive Flashcard */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Card stack effect */}
              <div className="absolute inset-4 -rotate-3 rounded-3xl bg-accent-100 border border-accent-200" />
              <div className="absolute inset-2 rotate-2 rounded-3xl bg-primary-100 border border-primary-200" />

              {/* Main flashcard */}
              <motion.div
                className="relative cursor-pointer"
                onClick={() => setIsFlipped(!isFlipped)}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front of card */}
                  <div
                    className="bg-white rounded-3xl p-8 min-h-[280px] flex flex-col justify-between shadow-soft-lg border border-navy-100"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                          {flashcards[currentCard].category}
                        </span>
                        <span className="text-navy-400 text-sm">
                          {currentCard + 1}/{flashcards.length}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-navy-800 leading-relaxed">
                        {flashcards[currentCard].question}
                      </h3>
                    </div>
                    <motion.p
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-center text-navy-400 text-sm mt-6"
                    >
                      Tap to reveal answer
                    </motion.p>
                  </div>

                  {/* Back of card */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 min-h-[280px] flex flex-col justify-between shadow-soft-lg"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <Sparkles className="w-5 h-5 text-white/80" />
                        <span className="text-white/80 font-medium">Answer</span>
                      </div>
                      <p className="text-xl text-white leading-relaxed font-medium">
                        {flashcards[currentCard].answer}
                      </p>
                    </div>
                    <p className="text-center text-white/60 text-sm">
                      Tap to see question
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center gap-4 mt-6"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNext}
                  className="p-4 rounded-2xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors shadow-soft"
                >
                  <X className="w-6 h-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: -360 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsFlipped(false)}
                  className="p-4 rounded-2xl bg-navy-100 text-navy-500 hover:bg-navy-200 transition-colors shadow-soft"
                >
                  <RotateCcw className="w-6 h-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNext}
                  className="p-4 rounded-2xl bg-emerald-50 text-emerald-500 hover:bg-emerald-100 transition-colors shadow-soft"
                >
                  <Check className="w-6 h-6" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-4"
            >
              <Brain className="w-4 h-4" />
              Smart Flashcards
            </motion.span>

            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-navy-900">
              Remember{' '}
              <span className="gradient-text-accent">Everything</span>
            </h2>

            <p className="text-lg text-navy-500 mb-8 leading-relaxed">
              Our AI-powered spaced repetition algorithm optimizes your study sessions. 
              Review cards at the perfect moment for maximum retention.
            </p>

            {/* Feature highlights */}
            <div className="space-y-4">
              {[
                { icon: Zap, title: 'Adaptive Learning', desc: 'Cards adapt to your performance' },
                { icon: Target, title: 'Spaced Repetition', desc: 'Science-backed memory technique' },
                { icon: Sparkles, title: 'AI-Generated', desc: 'Auto-generate cards from notes' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-soft border border-navy-100 hover:border-primary-200 transition-all"
                >
                  <div className="p-2 rounded-xl bg-primary-100">
                    <feature.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-800">{feature.title}</h4>
                    <p className="text-sm text-navy-400">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Flashcards
