import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Brain, RotateCcw, Check, X, ChevronLeft, ChevronRight, Home, Sparkles, BookOpen, Shuffle } from 'lucide-react'

const FlashcardsPage = () => {
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [knownCards, setKnownCards] = useState([])
  const [unknownCards, setUnknownCards] = useState([])
  const [isShuffled, setIsShuffled] = useState(false)
  const [cardOrder, setCardOrder] = useState([])

  const flashcards = [
    {
      id: 1,
      question: "AER (Apicale Ectodermale Ridge): functie?",
      answer: "Ectodermale richel aan distale rand van de ledemaatknop; houdt onderliggend mesenchym ongedifferentieerd en prolifererend (progress zone) en stuurt proximodistale uitgroei (o.a. via FGF-signalen).",
      category: "Embryologie",
    },
    {
      id: 2,
      question: "Inductie: wat betekent het in embryologie?",
      answer: "Een weefsel/celgroep (inductor) beïnvloedt het lot van een andere (responder) via signalen. Responder moet \"competent\" zijn om te reageren.",
      category: "Embryologie",
    },
    {
      id: 3,
      question: "Epitheel–mesenchym interactie: voorbeeld in ledemaatontwikkeling?",
      answer: "AER (ectoderm/epitheel) stuurt differentiatie en groei van mesenchym in de ledemaatknop.",
      category: "Embryologie",
    },
    {
      id: 4,
      question: "Proximodistale ontwikkeling: welke 3 delen?",
      answer: "Stylopod (humerus/femur) – zeugopod (radius/ulna, tibia/fibula) – autopod (hand/voet: carpalia/tarsalia, metacarpalia/metatarsalia, digiti).",
      category: "Anatomie",
    },
    {
      id: 5,
      question: "Hand- en voetplaat: hoe ontstaan vingers/tenen?",
      answer: "Door geprogrammeerde celdood (apoptose) in de interdigitale gebieden; condensatie mesenchym vormt digitale stralen.",
      category: "Embryologie",
    },
    {
      id: 6,
      question: "Hoofdas ledemaat: wat bepaalt pre-axiaal vs post-axiaal?",
      answer: "In de PD-as ligt craniaal pre-axiaal en caudaal post-axiaal; door rotatie van ledematen komt dit anders uit in boven- vs onderledemaat (klinische relevantie bij reductiedefecten).",
      category: "Anatomie",
    },
    {
      id: 7,
      question: "Dermatoom: definitie?",
      answer: "Huidgebied dat sensibel wordt geïnnerveerd door één spinaal segment (één ruggenmergzenuw).",
      category: "Anatomie",
    },
    {
      id: 8,
      question: "Huidverzorgingsgebieden (perifere zenuwen) vs dermatomes: verschil?",
      answer: "Dermatoom = spinaal niveau. Huidverzorgingsgebied = perifere zenuw (bv. n. medianus/ulnaris/radialis) en is vaak een mix van meerdere spinale niveaus.",
      category: "Anatomie",
    },
    {
      id: 9,
      question: "Botontwikkeling (endochondrale ossificatie): kernstappen?",
      answer: "Mesenchym → kraakbeenmodel → primaire ossificatiecentrum (diafyse) + vascularisatie → secundaire ossificatiecentra (epifysen) → lengtegroei via groeischijf.",
      category: "Embryologie",
    },
    {
      id: 10,
      question: "Desmale verbening: wat is het? (ook direct/primair)",
      answer: "Mesenchym → osteoblasten → botmatrix (zonder kraakbeenmodel). Voorbeelden: schedelbeenderen, (deel) clavicula.",
      category: "Embryologie",
    },
    {
      id: 11,
      question: "Juncturae: 4 hoofdtypen?",
      answer: "Junctura fibrosa (bindweefsel), cartilaginea (kraakbeen), ossea (botverbinding), synovialis (synoviaal gewricht).",
      category: "Anatomie",
    },
    {
      id: 12,
      question: "Voorbeelden bij de juncturae (koppelen):",
      answer: "Syndesmose = fibrosa; discus intervertebralis = cartilaginea; acetabulum/heupbeenfusie = ossea; enkel/schouder = synovialis.",
      category: "Anatomie",
    },
    {
      id: 13,
      question: "Welke junctura is het meest beweeglijk?",
      answer: "Junctura synovialis (diarthrose) is het meest beweeglijk.",
      category: "Anatomie",
    },
    {
      id: 14,
      question: "Synoviaal gewrichtskapsel: 2 lagen?",
      answer: "Membrana synovialis (binnenlaag) + membrana fibrosa (buitenlaag).",
      category: "Anatomie",
    },
    {
      id: 15,
      question: "Synovia (gewrichtsvloeistof): functie?",
      answer: "Voedt hyalien kraakbeen en vermindert wrijving tussen gewrichtsvlakken.",
      category: "Anatomie",
    },
  ]

  // Initialize card order
  useEffect(() => {
    setCardOrder(flashcards.map((_, index) => index))
  }, [])

  const shuffleCards = () => {
    const newOrder = [...cardOrder].sort(() => Math.random() - 0.5)
    setCardOrder(newOrder)
    setIsShuffled(true)
    setCurrentCard(0)
    setIsFlipped(false)
  }

  const resetOrder = () => {
    setCardOrder(flashcards.map((_, index) => index))
    setIsShuffled(false)
    setCurrentCard(0)
    setIsFlipped(false)
  }

  const getCurrentCardIndex = () => cardOrder[currentCard] ?? 0
  const currentFlashcard = flashcards[getCurrentCardIndex()]

  const handleNext = () => {
    setIsFlipped(false)
    setTimeout(() => {
      setCurrentCard((prev) => (prev + 1) % flashcards.length)
    }, 200)
  }

  const handlePrev = () => {
    setIsFlipped(false)
    setTimeout(() => {
      setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length)
    }, 200)
  }

  const handleKnown = () => {
    if (!knownCards.includes(getCurrentCardIndex())) {
      setKnownCards([...knownCards, getCurrentCardIndex()])
      setUnknownCards(unknownCards.filter(i => i !== getCurrentCardIndex()))
    }
    handleNext()
  }

  const handleUnknown = () => {
    if (!unknownCards.includes(getCurrentCardIndex())) {
      setUnknownCards([...unknownCards, getCurrentCardIndex()])
      setKnownCards(knownCards.filter(i => i !== getCurrentCardIndex()))
    }
    handleNext()
  }

  const resetProgress = () => {
    setKnownCards([])
    setUnknownCards([])
    setCurrentCard(0)
    setIsFlipped(false)
  }

  const progress = ((knownCards.length + unknownCards.length) / flashcards.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-accent-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent-200/30 to-primary-200/20 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-soft border-b border-navy-100"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <motion.img
                src="/smartium-logo.png"
                alt="Smartium"
                className="w-10 h-10 object-contain"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              />
              <span className="text-xl font-bold gradient-text">Smartium</span>
            </Link>

            <div className="flex items-center gap-2">
              <motion.span
                className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-sm font-medium"
              >
                <Brain className="w-4 h-4" />
                Flashcards
              </motion.span>
            </div>

            <Link 
              to="/"
              className="flex items-center gap-2 px-4 py-2 text-navy-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all font-medium"
            >
              <Home className="w-5 h-5" />
              <span className="hidden sm:inline">Terug naar Home</span>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container-custom py-8 sm:py-12 relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-navy-900"
          >
            Embryologie & Anatomie{' '}
            <span className="gradient-text-accent">Flashcards</span>
          </motion.h1>
          <p className="text-lg text-navy-500 max-w-2xl mx-auto">
            Leer de essentiële concepten van embryologie en anatomie met deze interactieve flashcards.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <div className="flex items-center gap-6 px-6 py-3 bg-white rounded-2xl shadow-soft border border-navy-100">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary-500" />
              <span className="text-navy-600 font-medium">{flashcards.length} kaarten</span>
            </div>
            <div className="w-px h-6 bg-navy-200" />
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-500" />
              <span className="text-navy-600 font-medium">{knownCards.length} gekend</span>
            </div>
            <div className="w-px h-6 bg-navy-200" />
            <div className="flex items-center gap-2">
              <X className="w-5 h-5 text-red-500" />
              <span className="text-navy-600 font-medium">{unknownCards.length} herhalen</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={isShuffled ? resetOrder : shuffleCards}
              className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl shadow-soft border border-navy-100 text-navy-600 hover:border-primary-300 hover:text-primary-600 transition-all"
            >
              <Shuffle className="w-4 h-4" />
              <span className="font-medium">{isShuffled ? 'Herstel volgorde' : 'Shuffle'}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetProgress}
              className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl shadow-soft border border-navy-100 text-navy-600 hover:border-accent-300 hover:text-accent-600 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="font-medium">Reset</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto mb-8"
        >
          <div className="h-2 bg-navy-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
            />
          </div>
          <p className="text-center text-sm text-navy-400 mt-2">
            {Math.round(progress)}% voltooid
          </p>
        </motion.div>

        {/* Flashcard Section */}
        <div className="max-w-2xl mx-auto">
          {/* Card Navigation */}
          <div className="flex items-center justify-between mb-6">
            <motion.button
              whileHover={{ scale: 1.1, x: -4 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="p-3 rounded-2xl bg-white shadow-soft border border-navy-100 text-navy-500 hover:text-primary-600 hover:border-primary-200 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <span className="text-navy-500 font-medium">
              Kaart {currentCard + 1} van {flashcards.length}
            </span>

            <motion.button
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-3 rounded-2xl bg-white shadow-soft border border-navy-100 text-navy-500 hover:text-primary-600 hover:border-primary-200 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Main Flashcard */}
          <motion.div
            key={currentCard}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative perspective-1000"
          >
            {/* Card stack effect */}
            <div className="absolute inset-4 -rotate-2 rounded-3xl bg-accent-100 border border-accent-200" />
            <div className="absolute inset-2 rotate-1 rounded-3xl bg-primary-100 border border-primary-200" />

            {/* Main card */}
            <motion.div
              className="relative cursor-pointer"
              onClick={() => setIsFlipped(!isFlipped)}
              whileHover={{ scale: 1.01 }}
            >
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of card (Question) */}
                <div
                  className="bg-white rounded-3xl p-6 sm:p-8 min-h-[320px] sm:min-h-[360px] flex flex-col shadow-soft-lg border border-navy-100"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                      currentFlashcard?.category === 'Embryologie' 
                        ? 'bg-primary-100 text-primary-700'
                        : 'bg-accent-100 text-accent-700'
                    }`}>
                      {currentFlashcard?.category}
                    </span>
                    <div className="flex items-center gap-2">
                      {knownCards.includes(getCurrentCardIndex()) && (
                        <span className="px-2 py-1 rounded-lg bg-emerald-100 text-emerald-600 text-xs font-medium">
                          ✓ Gekend
                        </span>
                      )}
                      {unknownCards.includes(getCurrentCardIndex()) && (
                        <span className="px-2 py-1 rounded-lg bg-red-100 text-red-600 text-xs font-medium">
                          ✗ Herhalen
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-800 leading-relaxed text-center">
                      {currentFlashcard?.question}
                    </h3>
                  </div>

                  <motion.p
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-center text-navy-400 text-sm mt-6 flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Klik om het antwoord te zien
                  </motion.p>
                </div>

                {/* Back of card (Answer) */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-3xl p-6 sm:p-8 min-h-[320px] sm:min-h-[360px] flex flex-col shadow-soft-lg"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-white/80" />
                    <span className="text-white/80 font-medium">Antwoord</span>
                  </div>

                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-lg sm:text-xl text-white leading-relaxed font-medium text-center">
                      {currentFlashcard?.answer}
                    </p>
                  </div>

                  <p className="text-center text-white/50 text-sm mt-6">
                    Klik om de vraag te zien
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleUnknown}
              className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors shadow-soft font-medium"
            >
              <X className="w-6 h-6" />
              <span className="hidden sm:inline">Nog niet gekend</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, rotate: -360 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsFlipped(!isFlipped)}
              className="p-4 rounded-2xl bg-navy-100 text-navy-500 hover:bg-navy-200 transition-colors shadow-soft"
            >
              <RotateCcw className="w-6 h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleKnown}
              className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors shadow-soft font-medium"
            >
              <Check className="w-6 h-6" />
              <span className="hidden sm:inline">Gekend!</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Card Grid Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-navy-800 mb-6 text-center">
            Alle Flashcards
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {flashcards.map((card, index) => (
              <motion.button
                key={card.id}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const orderIndex = cardOrder.indexOf(index)
                  if (orderIndex !== -1) {
                    setCurrentCard(orderIndex)
                    setIsFlipped(false)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
                className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                  getCurrentCardIndex() === index
                    ? 'bg-primary-100 border-primary-400 shadow-glow'
                    : knownCards.includes(index)
                    ? 'bg-emerald-50 border-emerald-300'
                    : unknownCards.includes(index)
                    ? 'bg-red-50 border-red-300'
                    : 'bg-white border-navy-100 hover:border-primary-300'
                }`}
              >
                <span className="absolute top-2 right-2 text-xs font-bold text-navy-400">
                  {index + 1}
                </span>
                <p className="text-sm font-medium text-navy-700 line-clamp-3 pr-4">
                  {card.question.slice(0, 50)}...
                </p>
                <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full ${
                  card.category === 'Embryologie' 
                    ? 'bg-primary-100 text-primary-600'
                    : 'bg-accent-100 text-accent-600'
                }`}>
                  {card.category}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-navy-100 bg-white/50 backdrop-blur-sm mt-16">
        <div className="container-custom text-center">
          <p className="text-navy-400 text-sm">
            © 2024 Smartium. Slim studeren, beter onthouden.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default FlashcardsPage

