import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  ChevronLeft, ChevronRight, CheckCircle, XCircle,
  RotateCcw, Trophy, Target, BookOpen, ArrowLeft,
  GraduationCap, AlertTriangle
} from 'lucide-react'
import Navbar from '../components/Navbar'

// ─── Import all Blok 4 question arrays ───────────────────────────
// We re-declare a minimal version here to avoid circular imports from the massive PracticeQuestionsPage.
// Each array has ~18 questions. We pick specific indices per exam.

import { lme5QuestionsMap } from '../questions/lme5-schimmelinfecties'
import { lme6QuestionsMap } from '../questions/lme6-voorbereiding-vow-milt'
import { lme1QuestionsMap } from '../questions/lme1-parasitaire-verwekkers-gastro-enteritis'
import { lme2QuestionsMap } from '../questions/lme2-virale-verwekkers-gastro-enteritis'
import { lme3QuestionsMap } from '../questions/lme3-welk-antibioticum-kies-ik'
import { casus10Lme1QuestionsMap } from '../questions/casus10-lme1-dwang-en-drang-historisch-perspectief'
import { casus10Lme2QuestionsMap } from '../questions/casus10-lme2-immunomodulatie'
import { casus10Lme3QuestionsMap } from '../questions/casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas'
import { casus10Lme4QuestionsMap } from '../questions/casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie'
import { casus11Lme1QuestionsMap } from '../questions/casus11-lme1-leefstijl-en-immuunsysteem'
import { casus12Lme1QuestionsMap } from '../questions/casus12-lme1-antibioticaresistentie-en-therapie'
import { casus12Lme2QuestionsMap } from '../questions/casus12-lme2-sepsis'
import { casus12Lme3QuestionsMap } from '../questions/casus12-lme3-patient-en-medicatieveiligheid'
import { casus12Lme4QuestionsMap } from '../questions/casus12-lme4-zorggerelateerde-infecties'
import { casus13Lme1QuestionsMap } from '../questions/casus13-lme1-antibiotica-introductie'
import { casus13Lme2QuestionsMap } from '../questions/casus13-lme2-antibiotica-resistentie'

// ─── Inline Blok 4 simple questions (copied refs) ────────────────
// We import them dynamically by re-reading PracticeQuestionsPage at runtime won't work,
// so we build the pool from the question maps + re-export a helper.
// For simple LMEs we need the arrays. Since they're only in PracticeQuestionsPage as const,
// we extract questions from there by also exporting them. But since that file is huge,
// we take a practical shortcut: build exams from the image-based maps (which we have)
// and for simple LMEs we construct questions inline.

// Helper to get all questions from a map as a flat array
const flattenMap = (map) =>
  Object.values(map).flat()

// ─── Build the full Blok 4 question pool from image-based maps ──
const imagePools = {
  'Schimmelinfecties': flattenMap(lme5QuestionsMap),
  'VOW Milt': flattenMap(lme6QuestionsMap),
  'Parasitaire verwekkers': flattenMap(lme1QuestionsMap),
  'Virale verwekkers gastro-enteritis': flattenMap(lme2QuestionsMap),
  'Antibioticakeuze': flattenMap(lme3QuestionsMap),
  'Dwang en drang': flattenMap(casus10Lme1QuestionsMap),
  'Immunomodulatie': flattenMap(casus10Lme2QuestionsMap),
  'Morele dilemmas vaccineren': flattenMap(casus10Lme3QuestionsMap),
  'Wiskunde vaccinatie': flattenMap(casus10Lme4QuestionsMap),
  'Leefstijl immuunsysteem': flattenMap(casus11Lme1QuestionsMap),
  'Antibioticaresistentie therapie': flattenMap(casus12Lme1QuestionsMap),
  'Sepsis': flattenMap(casus12Lme2QuestionsMap),
  'Medicatieveiligheid': flattenMap(casus12Lme3QuestionsMap),
  'Zorggerelateerde infecties': flattenMap(casus12Lme4QuestionsMap),
  'Antibiotica Introductie': flattenMap(casus13Lme1QuestionsMap),
  'Antibiotica Resistentie': flattenMap(casus13Lme2QuestionsMap),
}

// Seeded pseudo-random for deterministic exam generation
function seededRandom(seed) {
  let s = seed
  return () => {
    s = (s * 16807 + 0) % 2147483647
    return (s - 1) / 2147483646
  }
}

const LONG_THRESHOLD = 50
const SHORT_THRESHOLD = 35
const LENGTH_EXTENSIONS = [
  ' – past bij een andere aandoening',
  ' – past bij een andere diagnose',
  ' – een andere mogelijkheid in de differentiaal',
  ' – wordt elders in de leerstof besproken',
]

function balanceOptionLengths(options, correctLetter, rng) {
  const lengths = options.map(o => o.text.length)
  const longCount = lengths.filter(l => l >= LONG_THRESHOLD).length
  const shortCount = lengths.filter(l => l <= SHORT_THRESHOLD).length

  // Geen probleem: 2+2, alles kort, of alles lang
  if (longCount >= 2 || longCount === 0 || shortCount < 3) return options

  // 1 lange + 3 korte: maak 2 korte foute antwoorden langer
  const wrongOptions = options.filter(o => o.letter !== correctLetter)
  const toExtendLetters = new Set(
    wrongOptions
      .filter(o => o.text.length <= SHORT_THRESHOLD)
      .sort((a, b) => a.text.length - b.text.length)
      .slice(0, 2)
      .map(o => o.letter)
  )

  if (toExtendLetters.size === 0) return options

  return options.map(o => {
    if (!toExtendLetters.has(o.letter) || o.letter === correctLetter) return o
    const ext = LENGTH_EXTENSIONS[Math.floor(rng() * LENGTH_EXTENSIONS.length)]
    return { ...o, text: o.text + ext }
  })
}

function processQuestion(q, rng) {
  let { options, correctAnswer } = q
  const correctOption = options.find(o => o.letter === correctAnswer)
  if (!correctOption) return { ...q, id: q.id }

  // 1. Shuffle options (Fisher-Yates)
  const shuffled = [...options]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  // 2. Reassign letters A,B,C,D to new order
  const letters = ['A', 'B', 'C', 'D']
  const reordered = shuffled.map((opt, i) => ({ ...opt, letter: letters[i] }))
  const newCorrectLetter = reordered.find(o => o.text === correctOption.text)?.letter ?? letters[0]

  // 3. Balance lengths: nooit 1 lange + 3 korte
  const balanced = balanceOptionLengths(reordered, newCorrectLetter, rng)

  return { ...q, options: balanced, correctAnswer: newCorrectLetter }
}

function buildExam(examNumber) {
  const rng = seededRandom(examNumber * 7919 + 42)
  const allQuestions = []

  Object.entries(imagePools).forEach(([category, questions]) => {
    questions.forEach(q => {
      allQuestions.push({ ...q, category: q.category || category })
    })
  })

  // Shuffle questions with seeded random
  for (let i = allQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]]
  }

  // Pick first 60, process each (shuffle options + balance lengths), assign IDs
  return allQuestions.slice(0, 60).map((q, i) => processQuestion({ ...q, id: i + 1 }, rng))
}

function calculateGrade(correct, total) {
  const pct = correct / total
  if (pct <= 0.6) return 1 + (pct / 0.6) * 4.5
  return 5.5 + ((pct - 0.6) / 0.4) * 4.5
}

const EXAM_NAMES = [
  'Oefententamen 1',
  'Oefententamen 2',
  'Oefententamen 3',
  'Oefententamen 4',
  'Oefententamen 5',
]

// ─── Exam Selection Screen ───────────────────────────────────────
const ExamSelection = () => (
  <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-primary-50">
    <Navbar />
    <div className="h-20" />
    <main className="container-custom py-8 md:py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">
          <span className="text-primary-500">Oefententamens</span> Blok 4
        </h1>
        <p className="text-navy-500">5 tentamens van 60 vragen – test je kennis voor het echte werk</p>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-4">
        {EXAM_NAMES.map((name, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              to={`/tentamen?nr=${i + 1}`}
              className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary-300 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-lg group-hover:bg-primary-200 transition-colors">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{name}</h3>
                  <p className="text-sm text-slate-500">60 vragen · alle onderwerpen · ~45 min</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-primary-500 transition-colors" />
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center mt-8 text-sm text-slate-500">
        <p>60% correct = 5,5 · Diverse vragen uit alle weken en casussen</p>
      </motion.div>
    </main>
  </div>
)

// ─── Grade Result Screen ─────────────────────────────────────────
const GradeResult = ({ correct, total, onReset }) => {
  const grade = calculateGrade(correct, total)
  const passed = grade >= 5.5
  const pct = Math.round((correct / total) * 100)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="max-w-lg mx-auto text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
        className={`w-40 h-40 rounded-full mx-auto mb-6 flex items-center justify-center border-8 ${
          passed ? 'border-emerald-400 bg-emerald-50' : 'border-red-400 bg-red-50'
        }`}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={`text-5xl font-black ${passed ? 'text-emerald-600' : 'text-red-600'}`}
        >
          {grade.toFixed(1)}
        </motion.span>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
        {passed ? (
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-3">
              <Trophy className="w-8 h-8 text-amber-500" />
              <h2 className="text-3xl font-black text-emerald-700">Gehaald!</h2>
              <Trophy className="w-8 h-8 text-amber-500" />
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1, duration: 1 }}
              className="h-1 bg-gradient-to-r from-emerald-400 via-amber-400 to-emerald-400 rounded-full mx-auto max-w-xs"
            />
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-black text-red-700">Niet gehaald</h2>
            </div>
            <p className="text-slate-600">Je hebt minimaal 36/60 correct nodig (60%)</p>
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-8 space-y-3"
      >
        <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
          <div className="bg-white rounded-xl border border-slate-200 p-3">
            <div className="text-2xl font-bold text-slate-900">{correct}</div>
            <div className="text-xs text-slate-500">Correct</div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-3">
            <div className="text-2xl font-bold text-slate-900">{total - correct}</div>
            <div className="text-xs text-slate-500">Fout</div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-3">
            <div className="text-2xl font-bold text-slate-900">{pct}%</div>
            <div className="text-xs text-slate-500">Score</div>
          </div>
        </div>

        <div className="flex justify-center gap-3 pt-4">
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 px-5 py-3 bg-primary-500 text-white rounded-xl font-bold hover:bg-primary-600 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Opnieuw
          </button>
          <Link
            to="/tentamen"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Alle tentamens
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Exam Active Screen ──────────────────────────────────────────
const ExamActive = ({ examNumber }) => {
  const questions = useMemo(() => buildExam(examNumber), [examNumber])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [revealedAnswers, setRevealedAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const currentQ = questions[currentQuestion]
  const totalQuestions = questions.length
  const answeredCount = Object.keys(selectedAnswers).length
  const correctCount = Object.entries(selectedAnswers).filter(
    ([id, answer]) => questions.find(q => q.id === parseInt(id))?.correctAnswer === answer
  ).length

  const handleSelectAnswer = (questionId, letter) => {
    if (revealedAnswers[questionId]) return
    setSelectedAnswers(prev => ({ ...prev, [questionId]: letter }))
    setRevealedAnswers(prev => ({ ...prev, [questionId]: true }))
  }

  const handleSubmit = () => setSubmitted(true)

  const handleReset = () => {
    setSelectedAnswers({})
    setRevealedAnswers({})
    setCurrentQuestion(0)
    setSubmitted(false)
  }

  const getOptionStyle = (questionId, letter) => {
    const isSelected = selectedAnswers[questionId] === letter
    const isRevealed = revealedAnswers[questionId]
    const isCorrect = questions.find(q => q.id === questionId)?.correctAnswer === letter

    if (isRevealed) {
      if (isCorrect) return "border-emerald-400 bg-emerald-50 text-emerald-800"
      if (isSelected && !isCorrect) return "border-red-400 bg-red-50 text-red-800"
      return "border-navy-200 bg-navy-50 text-navy-400"
    }
    if (isSelected) return "border-primary-400 bg-primary-50 text-primary-800"
    return "border-navy-200 bg-white text-navy-700 hover:border-primary-300 hover:bg-primary-50/50"
  }

  if (submitted) {
    return <GradeResult correct={correctCount} total={totalQuestions} onReset={handleReset} />
  }

  return (
    <>
      {/* Progress */}
      <div className="max-w-3xl mx-auto mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <span className="text-sm text-navy-600 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-primary-500" />
              {answeredCount}/{totalQuestions} beantwoord
            </span>
            {answeredCount > 0 && (
              <span className="text-sm text-navy-600 flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-accent-500" />
                {correctCount} correct
              </span>
            )}
          </div>
          {answeredCount === totalQuestions && (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-primary-500 text-white rounded-xl font-bold text-sm hover:bg-primary-600 transition-colors"
            >
              Bekijk cijfer
            </button>
          )}
        </div>
        <div className="h-2 bg-navy-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-400 to-accent-400"
            animate={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question dots */}
      <div className="flex flex-wrap justify-center gap-1.5 mb-6 max-w-3xl mx-auto">
        {questions.map((q, index) => {
          const isAnswered = selectedAnswers[q.id] !== undefined
          const isRevealed = revealedAnswers[q.id]
          const isCorrect = selectedAnswers[q.id] === q.correctAnswer
          const isCurrent = currentQuestion === index

          return (
            <button
              key={q.id}
              onClick={() => setCurrentQuestion(index)}
              className={`w-8 h-8 rounded-lg font-medium text-xs transition-all ${
                isCurrent
                  ? "bg-primary-500 text-white shadow-md scale-110"
                  : isRevealed
                    ? isCorrect
                      ? "bg-emerald-100 text-emerald-700 border border-emerald-300"
                      : "bg-red-100 text-red-700 border border-red-300"
                    : isAnswered
                      ? "bg-primary-100 text-primary-700 border border-primary-300"
                      : "bg-navy-100 text-navy-500 hover:bg-navy-200"
              }`}
            >
              {index + 1}
            </button>
          )
        })}
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-soft-lg border border-navy-100 overflow-hidden">
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

            <div className="p-6 md:p-8">
              <h2 className="text-lg md:text-xl font-bold text-navy-900 mb-6">{currentQ.question}</h2>

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
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                    )}
                    {revealedAnswers[currentQ.id] && selectedAnswers[currentQ.id] === option.letter && selectedAnswers[currentQ.id] !== currentQ.correctAnswer && (
                      <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    )}
                  </motion.button>
                ))}
              </div>

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-navy-100">
                <button
                  onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
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
                    className={`px-3 py-1.5 rounded-xl font-medium text-sm flex items-center gap-2 ${
                      selectedAnswers[currentQ.id] === currentQ.correctAnswer
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {selectedAnswers[currentQ.id] === currentQ.correctAnswer ? (
                      <><CheckCircle className="w-4 h-4" /> Correct</>
                    ) : (
                      <><XCircle className="w-4 h-4" /> Antwoord: {currentQ.correctAnswer}</>
                    )}
                  </motion.div>
                )}

                <button
                  onClick={() => setCurrentQuestion(prev => Math.min(totalQuestions - 1, prev + 1))}
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
    </>
  )
}

// ─── Main Page Component ─────────────────────────────────────────
const ExamPage = () => {
  const [searchParams] = useSearchParams()
  const examNr = parseInt(searchParams.get('nr'))

  if (!examNr || examNr < 1 || examNr > 5) return <ExamSelection />

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-primary-50">
      <Navbar />
      <div className="h-20" />
      <main className="container-custom py-8 md:py-12">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-6 max-w-3xl mx-auto">
          <Link
            to="/tentamen"
            className="inline-flex items-center gap-2 text-navy-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Terug naar overzicht</span>
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-navy-900 mb-1">
            {EXAM_NAMES[examNr - 1]} <span className="text-primary-500">Blok 4</span>
          </h1>
          <p className="text-navy-500 text-sm">60 vragen · 60% is voldoende (5,5)</p>
        </motion.div>

        <ExamActive examNumber={examNr} />
      </main>

      <footer className="py-6 text-center text-navy-400 text-sm border-t border-navy-100 mt-12">
        <p>© {new Date().getFullYear()} Smartium</p>
      </footer>
    </div>
  )
}

export default ExamPage
