import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ClipboardCheck, Clock, CheckCircle2, ChevronRight } from 'lucide-react'

const TestExams = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const question = {
    text: "A 45-year-old patient presents with chest pain radiating to the left arm. ECG shows ST elevation in leads V1-V4. Which coronary artery is most likely occluded?",
    options: [
      "Right coronary artery",
      "Left anterior descending artery",
      "Left circumflex artery",
      "Posterior descending artery",
    ],
    correct: 1,
  }

  const examTypes = [
    { name: 'USMLE Step 1', questions: '2,500+', emoji: '🎯' },
    { name: 'USMLE Step 2', questions: '1,800+', emoji: '📋' },
    { name: 'COMLEX', questions: '1,200+', emoji: '⚕️' },
    { name: 'NBME', questions: '3,000+', emoji: '📝' },
  ]

  const handleAnswer = (index) => {
    setSelectedAnswer(index)
    setTimeout(() => setShowResult(true), 500)
  }

  return (
    <section id="exams" className="py-24 relative" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4"
            >
              <ClipboardCheck className="w-4 h-4" />
              Practice Exams
            </motion.span>

            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-navy-900">
              Ace Your Exams with{' '}
              <span className="gradient-text">Confidence</span>
            </h2>

            <p className="text-lg text-navy-500 mb-8 leading-relaxed">
              Practice with realistic exam simulations. Detailed explanations 
              help you understand the why, not just the what.
            </p>

            {/* Exam type cards */}
            <div className="grid grid-cols-2 gap-4">
              {examTypes.map((exam, index) => (
                <motion.div
                  key={exam.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="p-4 rounded-2xl bg-white shadow-soft border border-navy-100 hover:border-primary-200 cursor-pointer transition-all group"
                >
                  <motion.span 
                    className="text-2xl mb-2 block"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {exam.emoji}
                  </motion.span>
                  <h4 className="font-semibold text-navy-800 group-hover:text-primary-600 transition-colors">
                    {exam.name}
                  </h4>
                  <p className="text-sm text-navy-400">{exam.questions} questions</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Interactive Question */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-soft-lg border border-navy-100 overflow-hidden">
              {/* Header */}
              <div className="p-4 border-b border-navy-100 flex items-center justify-between bg-cream-50">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                    Cardiology
                  </span>
                  <span className="text-navy-400 text-sm">Q24/50</span>
                </div>
                <div className="flex items-center gap-2 text-navy-500">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-mono">12:34</span>
                </div>
              </div>

              {/* Question */}
              <div className="p-6">
                <p className="text-lg text-navy-800 leading-relaxed mb-6">
                  {question.text}
                </p>

                {/* Options */}
                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: selectedAnswer === null ? 1.01 : 1 }}
                      onClick={() => selectedAnswer === null && handleAnswer(index)}
                      disabled={selectedAnswer !== null}
                      className={`w-full p-4 rounded-2xl text-left transition-all flex items-center gap-4 ${
                        selectedAnswer === null
                          ? 'bg-cream-50 border-2 border-navy-100 hover:border-primary-300 hover:bg-primary-50'
                          : selectedAnswer === index
                            ? index === question.correct
                              ? 'bg-emerald-50 border-2 border-emerald-400'
                              : 'bg-red-50 border-2 border-red-400'
                            : index === question.correct && showResult
                              ? 'bg-emerald-50 border-2 border-emerald-400'
                              : 'bg-navy-50 border-2 border-navy-100 opacity-50'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          selectedAnswer === null
                            ? 'border-2 border-navy-300'
                            : selectedAnswer === index || (showResult && index === question.correct)
                              ? index === question.correct
                                ? 'bg-emerald-500'
                                : 'bg-red-500'
                              : 'border-2 border-navy-200'
                        }`}
                      >
                        {selectedAnswer !== null && index === question.correct && (
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <span className={`font-medium ${
                        selectedAnswer !== null && index === question.correct
                          ? 'text-emerald-700'
                          : selectedAnswer === index && index !== question.correct
                            ? 'text-red-700'
                            : 'text-navy-700'
                      }`}>
                        {option}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Explanation */}
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 rounded-2xl bg-primary-50 border border-primary-200"
                  >
                    <h4 className="font-semibold text-primary-700 mb-2">💡 Explanation</h4>
                    <p className="text-sm text-navy-600 leading-relaxed">
                      ST elevation in leads V1-V4 indicates an anterior wall MI, typically caused 
                      by occlusion of the Left Anterior Descending (LAD) artery.
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-navy-100 flex justify-between bg-cream-50">
                <button className="px-4 py-2 text-navy-500 hover:text-navy-700 font-medium transition-colors">
                  Previous
                </button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setSelectedAnswer(null)
                    setShowResult(false)
                  }}
                  className="btn-primary flex items-center gap-2 py-2"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TestExams
