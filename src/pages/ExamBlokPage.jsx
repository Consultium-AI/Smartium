import { motion } from 'framer-motion'
import { useState, useMemo, useEffect, useCallback } from 'react'
import { Link, Navigate, useSearchParams } from 'react-router-dom'
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Trophy,
  Target,
  ArrowLeft,
  AlertTriangle,
  Stethoscope,
  GraduationCap,
  Lock,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import {
  shuffleMeerkeuzeQuestion,
  MeerkeuzeBlock,
  MeerdereAntwoordenBlock,
  KoppelvraagBlock,
  JuistOnjuistBlock,
  OpenVraagBlock,
  BeeldvraagOrderBlock,
  BeeldvraagAiBlock,
  RekenvraagBlock,
} from '../components/exam/ExamBlokQuestionRenderers'
import { ExamScenarioContent } from '../components/exam/ExamScenarioContent'
import {
  getProgressUserId,
  loadExamBlokProgress,
  saveExamBlokProgress,
  clearExamBlokProgress,
  examBlokHasInProgress,
} from '../utils/accountProgressStorage'
import { useAuth } from '../context/AuthContext'
import { useAccess } from '../hooks/useAccess'
import { getExamsForBlok } from '../registry/examBlokRegistry'
import { isFreePlanAllowedExam } from '../utils/freePlanAccess'

export function calculateGradeBlok(earned, total, cesuur = 0.55) {
  if (!total || total <= 0) return 1
  const pct = earned / total
  if (pct <= cesuur) return 1 + (pct / cesuur) * 4.5
  return 5.5 + ((pct - cesuur) / (1 - cesuur)) * 4.5
}

function seededRandom(seed) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

function questionShuffleSeed(exam, qid) {
  let h = 0
  for (let i = 0; i < qid.length; i++) h = ((h << 5) - h + qid.charCodeAt(i)) >>> 0
  return exam.blok * 1_000_003 + exam.tentamenNr * 79_919 + h
}

function computeEarned(exam, answers) {
  let t = 0
  for (const c of exam.casussen) {
    for (const q of c.questions) {
      const a = answers[q.id]
      if (a?.earnedPoints != null && !Number.isNaN(a.earnedPoints)) t += a.earnedPoints
    }
  }
  return t
}

function allAnswered(exam, answers) {
  for (const c of exam.casussen) {
    for (const q of c.questions) {
      if (!answers[q.id]?.revealed) return false
    }
  }
  return true
}

function casusEarned(casus, answers) {
  let t = 0
  for (const q of casus.questions) {
    const a = answers[q.id]
    if (a?.earnedPoints != null) t += a.earnedPoints
  }
  return t
}

function gradePathForBlok(blok) {
  return `/tentamen-blok${blok}`
}

// ─── Selection ─────────────────────────────────────────────────
function ExamBlokSelection({ blok }) {
  const { user, loading: authLoading } = useAuth()
  const { hasAccess, plan, loading: accessLoading } = useAccess()
  const hasPaidAccess = hasAccess && plan !== 'free'
  const showPremiumLocks = !accessLoading && !hasPaidAccess
  const progressUserId = getProgressUserId(user, authLoading)
  const exams = getExamsForBlok(blok)
  const path = gradePathForBlok(blok)

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-primary-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="h-20" />
      <main className="container-custom py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 max-w-3xl mx-auto text-center"
        >
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-1 tracking-tight">
            <span className="text-primary-500 dark:text-primary-400">Oefententamens</span> Blok {blok}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            Casusgerichte toetsen met punten naar het officiële antwoordmodel
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {exams.length === 0 ? (
            <p className="text-center text-slate-500 dark:text-slate-400">Nog geen tentamens voor dit blok.</p>
          ) : (
            exams.map((exam, i) => {
              const nr = i + 1
              const locked = showPremiumLocks && !isFreePlanAllowedExam(blok, nr)
              const showResume =
                progressUserId && examBlokHasInProgress(progressUserId, blok, nr)
              const estMin = Math.round((exam.totalPoints / 168) * 90) || 90
              return (
                <motion.div key={exam.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                  <Link
                    to={locked ? '/billing' : `${path}?nr=${nr}`}
                    className={`group flex items-center justify-between gap-4 p-5 rounded-2xl border transition-all
                      ${locked
                        ? 'bg-slate-100/95 dark:bg-slate-900/60 border-slate-300/90 dark:border-slate-700/90'
                        : 'bg-white/90 dark:bg-slate-900/80 border-slate-200/90 dark:border-slate-700/90 hover:border-primary-400/70 dark:hover:border-primary-500/45 hover:shadow-md'}
                      backdrop-blur-sm shadow-sm dark:shadow-lg dark:shadow-black/40 ring-1 ring-slate-900/5 dark:ring-white/5`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-500/20 flex items-center justify-center text-primary-700 dark:text-primary-300 font-bold text-lg shrink-0">
                        {nr}
                      </div>
                      <div className="min-w-0 text-left">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-bold text-slate-900 dark:text-slate-100">{exam.title}</h3>
                          {showResume && (
                            <span className="inline-flex rounded-full bg-primary-500/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">
                              Ga verder
                            </span>
                          )}
                          {locked && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                              <Lock className="w-3.5 h-3.5" />
                              Premium
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{exam.subtitle}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-500 mt-0.5">
                          {exam.casussen.length} casussen · {exam.totalPoints} punten · ~{estMin} min
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 shrink-0 group-hover:text-primary-500" />
                  </Link>
                </motion.div>
              )
            })
          )}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto"
        >
          Cijfer op basis van gehaalde punten ({Math.round(0.55 * 100)}% = 5,5) ·{' '}
          <Link to="/tentamen" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
            Overzicht oefententamens
          </Link>
        </motion.p>
      </main>
    </div>
  )
}

// ─── Grade result ──────────────────────────────────────────────
function GradeResultBlok({ exam, answers, cesuur, onReset, onReview }) {
  const total = exam.totalPoints
  const earned = computeEarned(exam, answers)
  const grade = calculateGradeBlok(earned, total, cesuur ?? exam.cesuur ?? 0.55)
  const passed = grade >= 5.5
  const pct = Math.round((earned / total) * 1000) / 10

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <motion.div
          className={`w-36 h-36 rounded-full mx-auto mb-4 flex items-center justify-center border-8 ${
            passed
              ? 'border-emerald-400 dark:border-emerald-500/70 bg-emerald-50 dark:bg-emerald-500/15'
              : 'border-red-400 dark:border-red-500/70 bg-red-50 dark:bg-red-500/15'
          }`}
        >
          <span className={`text-4xl font-black ${passed ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
            {grade.toFixed(1)}
          </span>
        </motion.div>
        <div className="flex items-center justify-center gap-2 mb-2">
          {passed ? <Trophy className="w-7 h-7 text-amber-500" /> : <AlertTriangle className="w-7 h-7 text-red-500" />}
          <h3 className={`text-2xl font-black ${passed ? 'text-emerald-700 dark:text-emerald-400' : 'text-red-700 dark:text-red-400'}`}>
            {passed ? 'Gehaald' : 'Niet gehaald'}
          </h3>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          {earned.toFixed(1)} / {total} punten ({pct}%)
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/70 overflow-hidden mb-8">
        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 font-semibold text-sm">
          Punten per casus
        </div>
        <table className="w-full text-sm">
          <tbody>
            {exam.casussen.map((c) => {
              const e = casusEarned(c, answers)
              return (
                <tr key={c.id} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-2 text-slate-700 dark:text-slate-300">{c.title}</td>
                  <td className="px-4 py-2 text-right font-mono">
                    {e.toFixed(1)} / {c.totalPoints}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={onReview}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-600 font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          Bekijk antwoorden
        </button>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 px-5 py-3 bg-primary-500 text-white rounded-xl font-bold hover:bg-primary-600"
        >
          <RotateCcw className="w-4 h-4" />
          Opnieuw
        </button>
        <Link
          to={gradePathForBlok(exam.blok)}
          className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          Alle tentamens
        </Link>
      </div>
    </motion.div>
  )
}

// ─── Active exam ───────────────────────────────────────────────
function ExamBlokActive({ blok, exam, examNr }) {
  const { user, loading: authLoading } = useAuth()
  const { hasAccess, plan, loading: accessLoading } = useAccess()
  const hasPaidAccess = !accessLoading && hasAccess && plan !== 'free'
  const progressUserId = getProgressUserId(user, authLoading)

  const [currentCasus, setCurrentCasus] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [reviewMode, setReviewMode] = useState(false)
  const [progressHydrated, setProgressHydrated] = useState(false)

  const displayMc = useMemo(() => {
    const m = {}
    for (const c of exam.casussen) {
      for (const q of c.questions) {
        if (q.type === 'meerkeuze') {
          const rng = seededRandom(questionShuffleSeed(exam, q.id))
          m[q.id] = shuffleMeerkeuzeQuestion(q, rng)
        }
      }
    }
    return m
  }, [exam])

  useEffect(() => {
    if (progressUserId === null) {
      setProgressHydrated(false)
      return
    }
    setProgressHydrated(false)
    const saved = loadExamBlokProgress(progressUserId, blok, examNr)
    if (saved && typeof saved === 'object') {
      setCurrentCasus(Math.min(Math.max(0, saved.currentCasus ?? 0), exam.casussen.length - 1))
      setAnswers(saved.answers && typeof saved.answers === 'object' ? saved.answers : {})
      setSubmitted(Boolean(saved.submitted))
      setReviewMode(Boolean(saved.reviewMode))
    } else {
      setCurrentCasus(0)
      setAnswers({})
      setSubmitted(false)
      setReviewMode(false)
    }
    setProgressHydrated(true)
  }, [progressUserId, blok, examNr, exam.casussen.length])

  useEffect(() => {
    if (!progressHydrated || progressUserId === null) return
    const t = setTimeout(() => {
      saveExamBlokProgress(progressUserId, blok, examNr, {
        v: 2,
        currentCasus,
        answers,
        submitted,
        reviewMode,
      })
    }, 400)
    return () => clearTimeout(t)
  }, [progressHydrated, progressUserId, blok, examNr, currentCasus, answers, submitted, reviewMode])

  const earned = useMemo(() => computeEarned(exam, answers), [exam, answers])
  const complete = allAnswered(exam, answers)

  const mergeAnswer = useCallback((qid, patch) => {
    setAnswers((prev) => ({
      ...prev,
      [qid]: {
        ...prev[qid],
        ...patch,
      },
    }))
  }, [])

  const casus = exam.casussen[currentCasus]

  const handleReset = () => {
    setAnswers({})
    setCurrentCasus(0)
    setSubmitted(false)
    setReviewMode(false)
    if (progressUserId) clearExamBlokProgress(progressUserId, blok, examNr)
  }

  if (submitted && !reviewMode) {
    return (
      <GradeResultBlok
        exam={exam}
        answers={answers}
        cesuur={exam.cesuur}
        onReset={handleReset}
        onReview={() => setReviewMode(true)}
      />
    )
  }

  return (
    <>
      {submitted && reviewMode && (
        <div className="max-w-3xl mx-auto mb-4 rounded-xl border border-primary-300/50 bg-primary-500/10 px-4 py-3 text-center text-sm text-navy-800 dark:text-slate-200">
          Je bekijkt je ingevulde antwoorden.{' '}
          <button
            type="button"
            className="font-bold text-primary-600 dark:text-primary-400 underline underline-offset-2"
            onClick={() => setReviewMode(false)}
          >
            Terug naar cijfer
          </button>
        </div>
      )}
      <div className="max-w-3xl mx-auto mb-6">
        <div className="mb-3 flex items-center justify-between gap-2 flex-wrap">
          <span className="text-sm text-navy-600 dark:text-slate-400 flex items-center gap-1.5">
            <Target className="w-4 h-4 text-primary-500" />
            {earned.toFixed(1)} / {exam.totalPoints} punten
          </span>
          <span className="text-sm text-navy-600 dark:text-slate-400 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-accent-500" />
            Casus {currentCasus + 1} / {exam.casussen.length}
          </span>
        </div>
        <div className="h-2 bg-navy-100 dark:bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-400 to-accent-400"
            animate={{ width: `${(earned / exam.totalPoints) * 100}%` }}
            transition={{ duration: 0.25 }}
          />
        </div>
        {complete && !submitted && (
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="mt-4 w-full sm:w-auto px-5 py-2.5 bg-primary-500 text-white rounded-xl font-bold text-sm"
          >
            Bekijk cijfer
          </button>
        )}
      </div>

      <div className="max-w-3xl mx-auto mb-6 flex flex-wrap gap-1.5 justify-center">
        {exam.casussen.map((c, i) => {
          const ce = casusEarned(c, answers)
          const done = c.questions.every((q) => answers[q.id]?.revealed)
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setCurrentCasus(i)
                if (submitted) setReviewMode(true)
              }}
              className={`min-w-[2rem] rounded-lg px-2 py-1.5 text-xs font-semibold transition-all ${
                i === currentCasus
                  ? 'bg-primary-500 text-white ring-2 ring-primary-300'
                  : done
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'
                    : 'bg-navy-100 text-navy-600 dark:bg-slate-800 dark:text-slate-400'
              }`}
              title={`${c.title} · ${ce.toFixed(1)}/${c.totalPoints}p`}
            >
              {i + 1}
            </button>
          )
        })}
      </div>

      {casus && (
        <motion.div
          key={casus.id + (reviewMode ? '-r' : '')}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <div className="rounded-2xl border border-primary-200/80 dark:border-primary-500/25 bg-gradient-to-br from-primary-50/90 to-white dark:from-slate-800/90 dark:to-slate-900/80 p-5 md:p-6 ring-1 ring-primary-500/10">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-primary-500/15 p-2.5 dark:bg-primary-500/20">
                <Stethoscope className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="min-w-0">
                <h2 className="text-lg font-bold text-navy-900 dark:text-slate-100">{casus.title}</h2>
                <ExamScenarioContent text={casus.scenario} />
              </div>
            </div>
          </div>

          {casus.questions.map((q) => {
            const a = answers[q.id] || {}
            const onReveal = (patch) => mergeAnswer(q.id, patch)

            switch (q.type) {
              case 'meerkeuze':
                return (
                  <MeerkeuzeBlock
                    key={q.id}
                    question={q}
                    displayQ={displayMc[q.id] || q}
                    answer={a}
                    onReveal={onReveal}
                    canUseAiFollowUp={hasPaidAccess}
                  />
                )
              case 'meerdere_antwoorden':
                return <MeerdereAntwoordenBlock key={q.id} question={q} answer={a} onReveal={onReveal} canUseAiFollowUp={hasPaidAccess} />
              case 'koppelvraag':
                return <KoppelvraagBlock key={q.id} question={q} answer={a} onReveal={onReveal} canUseAiFollowUp={hasPaidAccess} />
              case 'juist_onjuist':
                return <JuistOnjuistBlock key={q.id} question={q} answer={a} onReveal={onReveal} canUseAiFollowUp={hasPaidAccess} />
              case 'open':
                return <OpenVraagBlock key={q.id} question={q} answer={a} onReveal={onReveal} canUseAiFollowUp={hasPaidAccess} />
              case 'beeldvraag':
                if (q.gradingMethod === 'order') {
                  return <BeeldvraagOrderBlock key={q.id} question={q} answer={a} onReveal={onReveal} canUseAiFollowUp={hasPaidAccess} />
                }
                return <BeeldvraagAiBlock key={q.id} question={q} answer={a} onReveal={onReveal} canUseAiFollowUp={hasPaidAccess} />
              case 'rekenvraag':
                return <RekenvraagBlock key={q.id} question={q} answer={a} onReveal={onReveal} canUseAiFollowUp={hasPaidAccess} />
              default:
                return (
                  <div key={q.id} className="rounded-xl border border-amber-200 p-4 text-sm text-amber-800">
                    Onbekend vraagtype: {q.type}
                  </div>
                )
            }
          })}
        </motion.div>
      )}

      <div className="max-w-3xl mx-auto mt-10 flex items-center justify-between">
        <button
          type="button"
          disabled={currentCasus === 0}
          onClick={() => setCurrentCasus((x) => Math.max(0, x - 1))}
          className="flex items-center gap-2 text-navy-600 dark:text-slate-400 disabled:opacity-30"
        >
          <ChevronLeft className="w-5 h-5" />
          Vorige casus
        </button>
        <button
          type="button"
          disabled={currentCasus >= exam.casussen.length - 1}
          onClick={() => setCurrentCasus((x) => Math.min(exam.casussen.length - 1, x + 1))}
          className="flex items-center gap-2 text-navy-600 dark:text-slate-400 disabled:opacity-30"
        >
          Volgende casus
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </>
  )
}

// ─── Export main page ──────────────────────────────────────────
export default function ExamBlokPage({ blokNumber = 5 }) {
  const [searchParams] = useSearchParams()
  const blok = Number(blokNumber) || 5
  const examNr = parseInt(searchParams.get('nr'), 10)
  const { hasAccess, plan, loading: accessLoading } = useAccess()
  const hasPaidAccess = hasAccess && plan !== 'free'

  const exams = getExamsForBlok(blok)
  const exam = examNr >= 1 && examNr <= exams.length ? exams[examNr - 1] : null

  if (exam && !accessLoading && !hasPaidAccess && !isFreePlanAllowedExam(blok, examNr)) {
    return <Navigate to={gradePathForBlok(blok)} replace />
  }

  if (!examNr || !exam) {
    return <ExamBlokSelection blok={blok} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-primary-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="h-20" />
      <main className="container-custom py-8 md:py-12 pb-16">
        <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="mb-6 max-w-3xl mx-auto">
          <Link
            to={gradePathForBlok(blok)}
            className="inline-flex items-center gap-2 text-navy-600 dark:text-slate-400 hover:text-primary-600"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar overzicht
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-slate-100">
            {exam.title}{' '}
            <span className="text-primary-500 dark:text-primary-400">Blok {blok}</span>
          </h1>
          <p className="text-sm text-navy-500 dark:text-slate-400 mt-1">{exam.subtitle}</p>
          <p className="text-xs text-navy-500 dark:text-slate-500 mt-1">{exam.totalPoints} punten · {exam.casussen.length} casussen</p>
        </motion.div>

        <ExamBlokActive blok={blok} exam={exam} examNr={examNr} />
      </main>
    </div>
  )
}
