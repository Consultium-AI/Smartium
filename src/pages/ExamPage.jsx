import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  ChevronLeft, ChevronRight, CheckCircle, XCircle,
  RotateCcw, Trophy, Target, ArrowLeft,
  AlertTriangle, Loader2
} from 'lucide-react'
import Navbar from '../components/Navbar'
import PracticeAiInlinePanel, { InlineAiText } from '../components/PracticeAiInlinePanel'
import { buildPracticeContext, fetchPracticeExplanation } from '../utils/practiceExamAi'
import {
  getProgressUserId,
  loadExamProgress,
  saveExamProgress,
  clearExamProgress,
  examHasInProgress,
} from '../utils/accountProgressStorage'
import { useAuth } from '../context/AuthContext'
import { examQuestions } from '../questions/examQuestions'

// Seeded pseudo-random voor deterministische shuffling
function seededRandom(seed) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

function processQuestion(q, rng) {
  const { options, correctAnswer } = q
  const correctOption = options.find(o => o.letter === correctAnswer)
  if (!correctOption) return { ...q, id: q.id }

  const shuffled = [...options]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  const letters = ['A', 'B', 'C', 'D']
  const reordered = shuffled.map((opt, i) => ({ ...opt, letter: letters[i] }))
  const newCorrectLetter = reordered.find(o => o.text === correctOption.text)?.letter ?? letters[0]

  return { ...q, options: reordered, correctAnswer: newCorrectLetter }
}

function buildExam(examNumber) {
  const rng = seededRandom(examNumber * 7919 + 42)
  const shuffled = [...examQuestions]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled.map((q, i) => processQuestion({ ...q, id: i + 1 }, rng))
}

const EXAM_NAMES = [
  'Oefententamen 1',
  'Oefententamen 2',
  'Oefententamen 3',
  'Oefententamen 4',
  'Oefententamen 5',
]

function calculateGrade(correct, total) {
  const pct = correct / total
  if (pct <= 0.6) return 1 + (pct / 0.6) * 4.5
  return 5.5 + ((pct - 0.6) / 0.4) * 4.5
}

// ─── Exam Selection Screen ───────────────────────────────────────
const ExamSelection = () => {
  const { user, loading: authLoading } = useAuth()
  const progressUserId = getProgressUserId(user, authLoading)

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-primary-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="h-20" />
      <main className="container-custom py-8 md:py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-1 tracking-tight">
            <span className="text-primary-500 dark:text-primary-400">Oefententamens</span> Blok 4
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            5 tentamens van 60 vragen – inhoudelijke vragen uit alle samenvattingen
          </p>
          {progressUserId && (
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">
              Je voortgang wordt bewaard per account op dit apparaat.
            </p>
          )}
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {EXAM_NAMES.map((name, i) => {
            const showResume =
              progressUserId && examHasInProgress(progressUserId, i + 1)
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/tentamen?nr=${i + 1}`}
                  className="group flex items-center justify-between gap-4 p-5 rounded-2xl border transition-all
                    bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm
                    border-slate-200/90 dark:border-slate-700/90
                    shadow-sm dark:shadow-lg dark:shadow-black/40 ring-1 ring-slate-900/5 dark:ring-white/5
                    hover:border-primary-400/70 dark:hover:border-primary-500/45 hover:shadow-md dark:hover:shadow-primary-950/20"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-500/20 dark:ring-1 dark:ring-primary-500/25 flex items-center justify-center text-primary-700 dark:text-primary-300 font-bold text-lg shrink-0 group-hover:bg-primary-200/90 dark:group-hover:bg-primary-500/30 transition-colors">
                      {i + 1}
                    </div>
                    <div className="min-w-0 text-left">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-bold text-slate-900 dark:text-slate-100">{name}</h3>
                        {showResume && (
                          <span className="inline-flex items-center rounded-full bg-primary-500/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary-700 dark:bg-primary-500/25 dark:text-primary-300">
                            Ga verder
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">60 vragen · alle onderwerpen · ~45 min</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center mt-8 text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
          <p>60% correct = 5,5 · Gelijkende antwoordlengtes · Alleen inhoudelijke vragen</p>
        </motion.div>
      </main>
    </div>
  )
}

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
          passed
            ? 'border-emerald-400 dark:border-emerald-500/70 bg-emerald-50 dark:bg-emerald-500/15'
            : 'border-red-400 dark:border-red-500/70 bg-red-50 dark:bg-red-500/15'
        }`}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={`text-5xl font-black ${passed ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}
        >
          {grade.toFixed(1)}
        </motion.span>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
        {passed ? (
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Trophy className="w-8 h-8 text-amber-500 dark:text-amber-400" />
              <h2 className="text-3xl font-black text-emerald-700 dark:text-emerald-400">Gehaald!</h2>
              <Trophy className="w-8 h-8 text-amber-500 dark:text-amber-400" />
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1, duration: 1 }}
              className="h-1 bg-gradient-to-r from-emerald-400 via-amber-400 to-emerald-400 dark:from-emerald-500/80 dark:via-amber-500/70 dark:to-emerald-500/80 rounded-full mx-auto max-w-xs"
            />
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-500 dark:text-red-400" />
              <h2 className="text-3xl font-black text-red-700 dark:text-red-400">Niet gehaald</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400">Je hebt minimaal 36/60 correct nodig (60%)</p>
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-8 space-y-3"
      >
        <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-sm mx-auto">
          <div className="bg-white/90 dark:bg-slate-800/70 rounded-xl border border-slate-200/90 dark:border-slate-600/90 p-3 ring-1 ring-slate-900/5 dark:ring-white/5">
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{correct}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Correct</div>
          </div>
          <div className="bg-white/90 dark:bg-slate-800/70 rounded-xl border border-slate-200/90 dark:border-slate-600/90 p-3 ring-1 ring-slate-900/5 dark:ring-white/5">
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{total - correct}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Fout</div>
          </div>
          <div className="bg-white/90 dark:bg-slate-800/70 rounded-xl border border-slate-200/90 dark:border-slate-600/90 p-3 ring-1 ring-slate-900/5 dark:ring-white/5">
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{pct}%</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Score</div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-4">
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 px-5 py-3 bg-primary-500 dark:bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-600 dark:hover:bg-primary-500 transition-colors shadow-sm"
          >
            <RotateCcw className="w-4 h-4" />
            Opnieuw
          </button>
          <Link
            to="/tentamen"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white/90 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-colors"
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
  const { user, loading: authLoading } = useAuth()
  const progressUserId = getProgressUserId(user, authLoading)

  const [refreshKey, setRefreshKey] = useState(0)
  const questions = useMemo(() => buildExam(examNumber), [examNumber, refreshKey])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [revealedAnswers, setRevealedAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [explanations, setExplanations] = useState({})
  const [progressHydrated, setProgressHydrated] = useState(false)

  useEffect(() => {
    if (progressUserId === null) {
      setProgressHydrated(false)
      return
    }
    setProgressHydrated(false)
    const maxIdx = Math.max(0, questions.length - 1)
    const saved = loadExamProgress(progressUserId, examNumber)
    if (saved && typeof saved === 'object') {
      setCurrentQuestion(
        typeof saved.currentQuestion === 'number'
          ? Math.min(Math.max(0, saved.currentQuestion), maxIdx)
          : 0
      )
      setSelectedAnswers(
        saved.selectedAnswers && typeof saved.selectedAnswers === 'object'
          ? saved.selectedAnswers
          : {}
      )
      setRevealedAnswers(
        saved.revealedAnswers && typeof saved.revealedAnswers === 'object'
          ? saved.revealedAnswers
          : {}
      )
      setSubmitted(Boolean(saved.submitted))
      setExplanations(
        saved.explanations && typeof saved.explanations === 'object' ? saved.explanations : {}
      )
    } else {
      setCurrentQuestion(0)
      setSelectedAnswers({})
      setRevealedAnswers({})
      setSubmitted(false)
      setExplanations({})
    }
    setProgressHydrated(true)
  }, [progressUserId, examNumber, questions.length])

  useEffect(() => {
    if (!progressHydrated || progressUserId === null) return
    const timer = setTimeout(() => {
      saveExamProgress(progressUserId, examNumber, {
        v: 1,
        currentQuestion,
        selectedAnswers,
        revealedAnswers,
        submitted,
        explanations,
      })
    }, 400)
    return () => clearTimeout(timer)
  }, [
    progressHydrated,
    progressUserId,
    examNumber,
    currentQuestion,
    selectedAnswers,
    revealedAnswers,
    submitted,
    explanations,
  ])

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
    setExplanations({})
    setCurrentQuestion(0)
    setSubmitted(false)
    if (progressUserId) {
      clearExamProgress(progressUserId, examNumber)
    }
    setRefreshKey(k => k + 1)
  }

  useEffect(() => {
    if (!currentQ) return
    const qId = currentQ.id
    if (!revealedAnswers[qId]) return
    if (selectedAnswers[qId] === currentQ.correctAnswer) return
    if (explanations[qId]) return

    setExplanations((prev) => ({ ...prev, [qId]: { loading: true } }))
    const ctx = buildPracticeContext(currentQ, selectedAnswers[qId], null)
    fetchPracticeExplanation(ctx)
      .then((text) => setExplanations((prev) => ({ ...prev, [qId]: { loading: false, text } })))
      .catch((err) =>
        setExplanations((prev) => ({
          ...prev,
          [qId]: { loading: false, error: err?.message || 'Fout bij ophalen' },
        }))
      )
  }, [currentQ, revealedAnswers, selectedAnswers, explanations])

  const getOptionStyle = (questionId, letter) => {
    const isSelected = selectedAnswers[questionId] === letter
    const isRevealed = revealedAnswers[questionId]
    const isCorrect = questions.find(q => q.id === questionId)?.correctAnswer === letter

    if (isRevealed) {
      if (isCorrect) return "border-emerald-400 dark:border-emerald-500/60 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200"
      if (isSelected && !isCorrect) return "border-red-400 dark:border-red-500/60 bg-red-50 dark:bg-red-900/25 text-red-800 dark:text-red-200"
      return "border-navy-200 dark:border-slate-600 bg-navy-50 dark:bg-slate-800/50 text-navy-400 dark:text-slate-500"
    }
    if (isSelected) return "border-primary-400 dark:border-primary-500/50 bg-primary-50 dark:bg-primary-500/15 text-primary-800 dark:text-primary-200"
    return "border-navy-200 dark:border-slate-600 bg-white dark:bg-slate-800/50 text-navy-700 dark:text-slate-300 hover:border-primary-300 dark:hover:border-primary-500/50 hover:bg-primary-50/50 dark:hover:bg-primary-500/10"
  }

  if (submitted) {
    return <GradeResult correct={correctCount} total={totalQuestions} onReset={handleReset} />
  }

  return (
    <>
      <div className="max-w-3xl mx-auto mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <span className="text-sm text-navy-600 dark:text-slate-400 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-primary-500 dark:text-primary-400" />
              {answeredCount}/{totalQuestions} beantwoord
            </span>
            {answeredCount > 0 && (
              <span className="text-sm text-navy-600 dark:text-slate-400 flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-accent-500 dark:text-accent-400" />
                {correctCount} correct
              </span>
            )}
          </div>
          {answeredCount === totalQuestions && (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-primary-500 dark:bg-primary-600 text-white rounded-xl font-bold text-sm hover:bg-primary-600 dark:hover:bg-primary-500 transition-colors shadow-sm"
            >
              Bekijk cijfer
            </button>
          )}
        </div>
        <div className="h-2 bg-navy-100 dark:bg-slate-700/80 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-400 to-accent-400"
            animate={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

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
                  ? "bg-primary-500 dark:bg-primary-600 text-white shadow-md scale-110 ring-2 ring-primary-400/40 dark:ring-primary-400/30"
                  : isRevealed
                    ? isCorrect
                      ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-600/60"
                      : "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-600/60"
                    : isAnswered
                      ? "bg-primary-100 dark:bg-primary-500/20 text-primary-700 dark:text-primary-300 border border-primary-300 dark:border-primary-600/50"
                      : "bg-navy-100 dark:bg-slate-700/80 text-navy-500 dark:text-slate-400 border border-transparent hover:bg-navy-200 dark:hover:bg-slate-600"
              }`}
            >
              {index + 1}
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white/90 dark:bg-slate-900/85 backdrop-blur-sm rounded-3xl shadow-soft-lg dark:shadow-lg dark:shadow-black/40 border border-navy-100 dark:border-slate-700/90 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5">
            <div className="px-6 py-4 bg-gradient-to-r from-navy-50 to-primary-50 dark:from-slate-800/90 dark:to-slate-800/70 border-b border-navy-100 dark:border-slate-700/80">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <span className="px-3 py-1 bg-accent-100 dark:bg-accent-500/15 dark:ring-1 dark:ring-accent-500/25 text-accent-700 dark:text-accent-300 rounded-full text-xs font-medium">
                  {currentQ.category}
                </span>
                <span className="text-navy-500 dark:text-slate-400 text-sm font-medium">
                  Vraag {currentQuestion + 1} van {totalQuestions}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h2 className="text-lg md:text-xl font-bold text-navy-900 dark:text-slate-100 mb-6">{currentQ.question}</h2>

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
                            : "bg-navy-100 dark:bg-slate-700 text-navy-600 dark:text-slate-300"
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

              {revealedAnswers[currentQ.id] && selectedAnswers[currentQ.id] !== currentQ.correctAnswer && (
                <div className="mt-6 rounded-lg border border-slate-200/90 dark:border-slate-700/90 bg-slate-50/70 dark:bg-slate-900/40 p-4">
                  {explanations[currentQ.id]?.loading && (
                    <>
                      <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">
                        De AI kiest de best passende samenvatting bij de verwijzing.
                      </p>
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm mb-2">
                        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                        Uitleg ophalen…
                      </div>
                    </>
                  )}
                  {explanations[currentQ.id]?.error && (
                    <p className="text-sm text-red-600 dark:text-red-400">{explanations[currentQ.id].error}</p>
                  )}
                  {explanations[currentQ.id]?.text && (
                    <>
                      <p className="text-[10px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">
                        Uitleg
                      </p>
                      <InlineAiText text={explanations[currentQ.id].text} />
                      <PracticeAiInlinePanel
                        questionId={currentQ.id}
                        practiceContext={buildPracticeContext(currentQ, selectedAnswers[currentQ.id], null)}
                        initialExplanation={explanations[currentQ.id].text}
                        explanationLoading={!!explanations[currentQ.id]?.loading}
                        explanationError={explanations[currentQ.id]?.error}
                      />
                    </>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-navy-100 dark:border-slate-700/80">
                <button
                  onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestion === 0}
                  className="flex items-center gap-2 px-4 py-2 text-navy-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
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
                        ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300"
                        : "bg-red-100 dark:bg-red-900/35 text-red-700 dark:text-red-300"
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
                  className="flex items-center gap-2 px-4 py-2 text-navy-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
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
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-primary-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="h-20" />
      <main className="container-custom py-8 md:py-12">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-6 max-w-3xl mx-auto">
          <Link
            to="/tentamen"
            className="inline-flex items-center gap-2 text-navy-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Terug naar overzicht</span>
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-slate-100 mb-1">
            {EXAM_NAMES[examNr - 1]} <span className="text-primary-500 dark:text-primary-400">Blok 4</span>
          </h1>
          <p className="text-navy-500 dark:text-slate-400 text-sm">60 vragen · 60% is voldoende (5,5)</p>
        </motion.div>

        <ExamActive examNumber={examNr} />
      </main>

      <footer className="py-6 text-center text-navy-400 dark:text-slate-500 text-sm border-t border-navy-100 dark:border-slate-800 mt-12">
        <p>© {new Date().getFullYear()} Smartium</p>
      </footer>
    </div>
  )
}

export default ExamPage
