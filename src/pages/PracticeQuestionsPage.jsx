import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ClipboardCheck, Home, ChevronLeft, ChevronRight, 
  RotateCcw, Trophy, Target, BookOpen,
  CheckCircle, XCircle
} from 'lucide-react'

const PracticeQuestionsPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [revealedAnswers, setRevealedAnswers] = useState({})

  const questions = [
    {
      id: 1,
      question: "Welke junctura is het meest beweeglijk?",
      options: [
        { letter: "A", text: "Junctura fibrosa" },
        { letter: "B", text: "Junctura cartilaginea" },
        { letter: "C", text: "Junctura ossea" },
        { letter: "D", text: "Junctura synovialis" },
      ],
      correctAnswer: "D",
      category: "Gewrichtsleer",
    },
    {
      id: 2,
      question: "Wat is de wetenschappelijke naam van gewrichtsvloeistof?",
      options: [
        { letter: "A", text: "Serum" },
        { letter: "B", text: "Synovia" },
        { letter: "C", text: "Liquor" },
        { letter: "D", text: "Chondrin" },
      ],
      correctAnswer: "B",
      category: "Gewrichtsleer",
    },
    {
      id: 3,
      question: "Uit welke twee lagen bestaat de capsula articularis?",
      options: [
        { letter: "A", text: "Membrana elastica + membrana ossea" },
        { letter: "B", text: "Membrana synovialis + membrana fibrosa" },
        { letter: "C", text: "Membrana mucosa + membrana serosa" },
        { letter: "D", text: "Perichondrium + periost" },
      ],
      correctAnswer: "B",
      category: "Gewrichtsleer",
    },
    {
      id: 4,
      question: "De verbinding tussen distale tibia en fibula (syndesmose) is een voorbeeld van:",
      options: [
        { letter: "A", text: "Junctura synovialis" },
        { letter: "B", text: "Junctura fibrosa" },
        { letter: "C", text: "Junctura cartilaginea" },
        { letter: "D", text: "Junctura ossea" },
      ],
      correctAnswer: "B",
      category: "Gewrichtsleer",
    },
    {
      id: 5,
      question: "De discus intervertebralis hoort bij:",
      options: [
        { letter: "A", text: "Junctura cartilaginea" },
        { letter: "B", text: "Junctura synovialis" },
        { letter: "C", text: "Junctura ossea" },
        { letter: "D", text: "Junctura fibrosa" },
      ],
      correctAnswer: "A",
      category: "Gewrichtsleer",
    },
    {
      id: 6,
      question: "Het acetabulum ontstaat uiteindelijk door benige fusie van ilium, pubis en ischium. Dit is:",
      options: [
        { letter: "A", text: "Junctura synovialis" },
        { letter: "B", text: "Junctura fibrosa" },
        { letter: "C", text: "Junctura ossea" },
        { letter: "D", text: "Junctura cartilaginea" },
      ],
      correctAnswer: "C",
      category: "Gewrichtsleer",
    },
    {
      id: 7,
      question: "Welk type gewricht is het heupgewricht?",
      options: [
        { letter: "A", text: "Zadelgewricht" },
        { letter: "B", text: "Rolgewricht" },
        { letter: "C", text: "Scharniergewricht" },
        { letter: "D", text: "Kogelgewricht" },
      ],
      correctAnswer: "D",
      category: "Gewrichtsleer",
    },
    {
      id: 8,
      question: "De articulatio humero-ulnaris (elleboog) is vooral een:",
      options: [
        { letter: "A", text: "Kogelgewricht" },
        { letter: "B", text: "Scharniergewricht" },
        { letter: "C", text: "Zadelgewricht" },
        { letter: "D", text: "Vlak gewricht" },
      ],
      correctAnswer: "B",
      category: "Gewrichtsleer",
    },
    {
      id: 9,
      question: "Flexie en extensie gebeuren primair in welk vlak?",
      options: [
        { letter: "A", text: "Frontaal (coronaal)" },
        { letter: "B", text: "Transversaal" },
        { letter: "C", text: "Sagittaal" },
        { letter: "D", text: "Oblique vlak" },
      ],
      correctAnswer: "C",
      category: "Anatomie",
    },
    {
      id: 10,
      question: "Welke drie anatomische vlakken zijn correct?",
      options: [
        { letter: "A", text: "Sagittaal, coronair, axiaal" },
        { letter: "B", text: "Sagittaal, frontaal/coronaal, transversaal" },
        { letter: "C", text: "Frontaal, longitudinaal, transversaal" },
        { letter: "D", text: "Coronaal, diagonaal, sagittaal" },
      ],
      correctAnswer: "B",
      category: "Anatomie",
    },
    {
      id: 11,
      question: "Welke uitspraak over dermatomes is juist?",
      options: [
        { letter: "A", text: "Een dermatoom hoort bij één perifere zenuw (zoals n. medianus)" },
        { letter: "B", text: "Een dermatoom hoort bij één spinaal segment" },
        { letter: "C", text: "Een dermatoom ontstaat pas na geboorte" },
        { letter: "D", text: "Dermatomes en perifere huidgebieden zijn altijd identiek" },
      ],
      correctAnswer: "B",
      category: "Neuroanatomie",
    },
    {
      id: 12,
      question: "Waarom vallen huidgebieden van perifere zenuwen vaak niet samen met dermatomes?",
      options: [
        { letter: "A", text: "Omdat perifere zenuwen alleen motorische vezels bevatten" },
        { letter: "B", text: "Omdat perifere zenuwen vezels uit meerdere spinale segmenten bevatten (plexus)" },
        { letter: "C", text: "Omdat dermatomes alleen in de romp bestaan" },
        { letter: "D", text: "Omdat synovia de innervatie beïnvloedt" },
      ],
      correctAnswer: "B",
      category: "Neuroanatomie",
    },
    {
      id: 13,
      question: "Wat is de belangrijkste rol van de AER in de ledemaatontwikkeling?",
      options: [
        { letter: "A", text: "Het start directe botvorming (desmale ossificatie)" },
        { letter: "B", text: "Het houdt distaal mesenchym prolifererend en ongedifferentieerd" },
        { letter: "C", text: "Het vormt de synovia" },
        { letter: "D", text: "Het bepaalt dermatomes" },
      ],
      correctAnswer: "B",
      category: "Embryologie",
    },
    {
      id: 14,
      question: "Waardoor scheiden vingers/tenen zich uit de hand-/voetplaat?",
      options: [
        { letter: "A", text: "Verbening van het kraakbeen tussen de vingers" },
        { letter: "B", text: "Apoptose tussen de digitale stralen" },
        { letter: "C", text: "Verdikking van het periost" },
        { letter: "D", text: "Toename van synovia" },
      ],
      correctAnswer: "B",
      category: "Embryologie",
    },
    {
      id: 15,
      question: "Welke volgorde past bij proximodistale segmenten van de ledemaat?",
      options: [
        { letter: "A", text: "Autopod → zeugopod → stylopod" },
        { letter: "B", text: "Zeugopod → autopod → stylopod" },
        { letter: "C", text: "Stylopod → zeugopod → autopod" },
        { letter: "D", text: "Stylopod → autopod → zeugopod" },
      ],
      correctAnswer: "C",
      category: "Embryologie",
    },
  ]

  const currentQ = questions[currentQuestion]
  const totalQuestions = questions.length
  const answeredCount = Object.keys(selectedAnswers).length
  const correctCount = Object.entries(selectedAnswers).filter(
    ([id, answer]) => questions.find(q => q.id === parseInt(id))?.correctAnswer === answer
  ).length

  const handleSelectAnswer = (questionId, letter) => {
    if (revealedAnswers[questionId]) return
    setSelectedAnswers(prev => ({ ...prev, [questionId]: letter }))
    // Immediately reveal the answer after selection
    setRevealedAnswers(prev => ({ ...prev, [questionId]: true }))
  }

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const handleReset = () => {
    setSelectedAnswers({})
    setRevealedAnswers({})
    setCurrentQuestion(0)
    setShowResults(false)
  }

  const handleFinish = () => {
    setShowResults(true)
  }

  const getOptionStyle = (questionId, letter) => {
    const isSelected = selectedAnswers[questionId] === letter
    const isRevealed = revealedAnswers[questionId]
    const isCorrect = questions.find(q => q.id === questionId)?.correctAnswer === letter
    
    if (isRevealed) {
      if (isCorrect) {
        return "border-emerald-400 bg-emerald-50 text-emerald-800"
      }
      if (isSelected && !isCorrect) {
        return "border-red-400 bg-red-50 text-red-800"
      }
      return "border-navy-200 bg-navy-50 text-navy-400"
    }
    
    if (isSelected) {
      return "border-primary-400 bg-primary-50 text-primary-800"
    }
    
    return "border-navy-200 bg-white text-navy-700 hover:border-primary-300 hover:bg-primary-50/50"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-primary-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-navy-100">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}smartium-logo.png`}
                alt="Smartium"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold gradient-text">Smartium</span>
            </Link>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-accent-100 text-accent-700 rounded-full">
              <ClipboardCheck className="w-4 h-4" />
              <span className="font-medium text-sm">Oefenvragen</span>
            </div>

            <Link
              to="/"
              className="flex items-center gap-2 text-navy-600 hover:text-primary-600 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">Terug naar Home</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container-custom py-8 md:py-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">
            Anatomie & Embryologie <span className="text-accent-500">Oefenvragen</span>
          </h1>
          <p className="text-navy-500">
            Test je kennis met 15 meerkeuzevragen over gewrichtsleer en embryologie.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Target className="w-4 h-4 text-primary-500" />
                <span className="text-navy-600">{answeredCount}/{totalQuestions} beantwoord</span>
              </div>
              {answeredCount > 0 && (
                <div className="flex items-center gap-2 text-sm">
                  <Trophy className="w-4 h-4 text-accent-500" />
                  <span className="text-navy-600">{correctCount} correct</span>
                </div>
              )}
            </div>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-navy-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
          <div className="h-2 bg-navy-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-400 to-accent-400"
              initial={{ width: 0 }}
              animate={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Question Navigation Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap justify-center gap-2 mb-8 max-w-3xl mx-auto"
        >
          {questions.map((q, index) => {
            const isAnswered = selectedAnswers[q.id] !== undefined
            const isRevealed = revealedAnswers[q.id]
            const isCorrect = selectedAnswers[q.id] === q.correctAnswer
            const isCurrent = currentQuestion === index
            
            return (
              <button
                key={q.id}
                onClick={() => setCurrentQuestion(index)}
                className={`w-9 h-9 rounded-lg font-medium text-sm transition-all ${
                  isCurrent
                    ? "bg-primary-500 text-white shadow-md scale-110"
                    : isRevealed
                      ? isCorrect
                        ? "bg-emerald-100 text-emerald-700 border-2 border-emerald-300"
                        : "bg-red-100 text-red-700 border-2 border-red-300"
                      : isAnswered
                        ? "bg-primary-100 text-primary-700 border-2 border-primary-300"
                        : "bg-navy-100 text-navy-500 hover:bg-navy-200"
                }`}
              >
                {q.id}
              </button>
            )
          })}
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-soft-lg border border-navy-100 overflow-hidden">
              {/* Question Header */}
              <div className="px-6 py-4 bg-gradient-to-r from-navy-50 to-primary-50 border-b border-navy-100">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-xs font-medium">
                    {currentQ.category}
                  </span>
                  <span className="text-navy-500 text-sm font-medium">
                    Vraag {currentQuestion + 1} van {totalQuestions}
                  </span>
                </div>
              </div>

              {/* Question */}
              <div className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-6">
                  {currentQ.question}
                </h2>

                {/* Options */}
                <div className="space-y-3">
                  {currentQ.options.map((option) => (
                    <motion.button
                      key={option.letter}
                      onClick={() => handleSelectAnswer(currentQ.id, option.letter)}
                      disabled={revealedAnswers[currentQ.id]}
                      whileHover={!revealedAnswers[currentQ.id] ? { scale: 1.01 } : {}}
                      whileTap={!revealedAnswers[currentQ.id] ? { scale: 0.99 } : {}}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-start gap-4 ${getOptionStyle(currentQ.id, option.letter)}`}
                    >
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 ${
                        revealedAnswers[currentQ.id] && currentQ.correctAnswer === option.letter
                          ? "bg-emerald-500 text-white"
                          : revealedAnswers[currentQ.id] && selectedAnswers[currentQ.id] === option.letter && selectedAnswers[currentQ.id] !== currentQ.correctAnswer
                            ? "bg-red-500 text-white"
                            : selectedAnswers[currentQ.id] === option.letter
                              ? "bg-primary-500 text-white"
                              : "bg-navy-100 text-navy-600"
                      }`}>
                        {option.letter}
                      </span>
                      <span className="flex-1 font-medium">{option.text}</span>
                      {revealedAnswers[currentQ.id] && currentQ.correctAnswer === option.letter && (
                        <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                      )}
                      {revealedAnswers[currentQ.id] && selectedAnswers[currentQ.id] === option.letter && selectedAnswers[currentQ.id] !== currentQ.correctAnswer && (
                        <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-navy-100">
                  <button
                    onClick={handlePrev}
                    disabled={currentQuestion === 0}
                    className="flex items-center gap-2 px-4 py-2 text-navy-600 hover:text-primary-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Vorige
                  </button>

                  {revealedAnswers[currentQ.id] && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`px-4 py-2 rounded-xl font-medium flex items-center gap-2 ${
                        selectedAnswers[currentQ.id] === currentQ.correctAnswer
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {selectedAnswers[currentQ.id] === currentQ.correctAnswer ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Correct!
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5" />
                          Antwoord was {currentQ.correctAnswer}
                        </>
                      )}
                    </motion.div>
                  )}

                  <button
                    onClick={handleNext}
                    disabled={currentQuestion === totalQuestions - 1}
                    className="flex items-center gap-2 px-4 py-2 text-navy-600 hover:text-primary-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    Volgende
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Results Section */}
        {answeredCount === totalQuestions && Object.keys(revealedAnswers).length === totalQuestions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto mt-8"
          >
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-8 text-center text-white">
              <Trophy className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Quiz Voltooid!</h3>
              <p className="text-white/80 mb-4">
                Je hebt {correctCount} van de {totalQuestions} vragen correct beantwoord.
              </p>
              <div className="text-5xl font-bold mb-6">
                {Math.round((correctCount / totalQuestions) * 100)}%
              </div>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-white text-primary-600 rounded-xl font-bold hover:bg-primary-50 transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Opnieuw proberen
                </button>
                <Link
                  to="/summary"
                  className="px-6 py-3 bg-white/20 text-white rounded-xl font-semibold hover:bg-white/30 transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-5 h-5" />
                  Naar Samenvatting
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Link to Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <Link
            to="/summary"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <BookOpen className="w-4 h-4" />
            Bekijk de samenvatting
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-navy-400 text-sm border-t border-navy-100 mt-12">
        <p>© {new Date().getFullYear()} Smartium. Slim studeren, beter onthouden.</p>
      </footer>
    </div>
  )
}

export default PracticeQuestionsPage

