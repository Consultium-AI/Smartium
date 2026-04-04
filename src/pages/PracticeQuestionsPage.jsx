import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo, useEffect } from 'react'
import { Link, Navigate, useSearchParams } from 'react-router-dom'
import { 
  ClipboardCheck, ChevronLeft, ChevronRight, ChevronDown,
  RotateCcw, Trophy, Target, BookOpen,
  CheckCircle, XCircle, ArrowLeft,
  Calendar, Stethoscope, GraduationCap, Shield, Loader2, Activity, Sparkles, Lock
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Blok5Week2Casus4SystemischeTherapieVanMelanoomPracticeIntro from '../components/Blok5Week2Casus4SystemischeTherapieVanMelanoomPracticeIntro'
import Blok5Week4Casus8ErysipelasEnCellulitisPracticeIntro from '../components/Blok5Week4Casus8ErysipelasEnCellulitisPracticeIntro'
import Blok5Week4Casus8HydradenitisSuppurativaPracticeIntro from '../components/Blok5Week4Casus8HydradenitisSuppurativaPracticeIntro'
import Blok5Week4Casus8IntroductiemodulePlanetaryHealthPracticeIntro from '../components/Blok5Week4Casus8IntroductiemodulePlanetaryHealthPracticeIntro'
import Blok5Week4Casus8LichamelijkOnderzoekKnieVoorbereidingKlv124PracticeIntro from '../components/Blok5Week4Casus8LichamelijkOnderzoekKnieVoorbereidingKlv124PracticeIntro'
import Blok5Week4Casus8LymfeklierdissectiePracticeIntro from '../components/Blok5Week4Casus8LymfeklierdissectiePracticeIntro'
import Blok5Week4Casus8NecrotiserendeWekedeleninfectiePracticeIntro from '../components/Blok5Week4Casus8NecrotiserendeWekedeleninfectiePracticeIntro'
import Blok5Week4Casus8RadiotherapieInDePraktijkPracticeIntro from '../components/Blok5Week4Casus8RadiotherapieInDePraktijkPracticeIntro'
import Blok5Week4Casus8VolksgezondheidsindicatorenDalysPracticeIntro from '../components/Blok5Week4Casus8VolksgezondheidsindicatorenDalysPracticeIntro'
import Blok5Week4Casus7FlebologischeAandoeningenPracticeIntro from '../components/Blok5Week4Casus7FlebologischeAandoeningenPracticeIntro'
import Blok5Week4Casus7LymfadenopathiePracticeIntro from '../components/Blok5Week4Casus7LymfadenopathiePracticeIntro'
import Blok5Week4Casus7TromboseVerhoogdeStollingsneigingPracticeIntro from '../components/Blok5Week4Casus7TromboseVerhoogdeStollingsneigingPracticeIntro'
import Blok5Week5Casus11AlarmsymptomenOpDeKinderleeftijdPracticeIntro from '../components/Blok5Week5Casus11AlarmsymptomenOpDeKinderleeftijdPracticeIntro'
import Blok5Week5Casus11IntroductieKinderoncologiePracticeIntro from '../components/Blok5Week5Casus11IntroductieKinderoncologiePracticeIntro'
import Blok5Week5Casus11KinderoncologieBegrijpDeHallmarksPracticeIntro from '../components/Blok5Week5Casus11KinderoncologieBegrijpDeHallmarksPracticeIntro'
import Blok5Week5Casus11OverLevenNaKankerOpKinderleeftijdPracticeIntro from '../components/Blok5Week5Casus11OverLevenNaKankerOpKinderleeftijdPracticeIntro'
import Blok5Week5Casus11TypenKinderoncologieBijKinderenPracticeIntro from '../components/Blok5Week5Casus11TypenKinderoncologieBijKinderenPracticeIntro'
import Blok5Week5Casus9BouwEnFunctieVanDeThymusPracticeIntro from '../components/Blok5Week5Casus9BouwEnFunctieVanDeThymusPracticeIntro'
import Blok5Week5Casus9EndocrieneAutoImmuunziektenPracticeIntro from '../components/Blok5Week5Casus9EndocrieneAutoImmuunziektenPracticeIntro'
import Blok5Week5Casus9PathogeneseAutoImmuunziektenPracticeIntro from '../components/Blok5Week5Casus9PathogeneseAutoImmuunziektenPracticeIntro'
import Blok5Week5Casus10PrincipesEnKlinischeAspectenVanAutoInflammatiePracticeIntro from '../components/Blok5Week5Casus10PrincipesEnKlinischeAspectenVanAutoInflammatiePracticeIntro'
import Blok5Week5Casus10SpectrumAutoInflammatieEnAutoImmuuniteitPracticeIntro from '../components/Blok5Week5Casus10SpectrumAutoInflammatieEnAutoImmuuniteitPracticeIntro'
import Blok5Week6Casus12GaswisselingHbO2Co2CoPracticeIntro from '../components/Blok5Week6Casus12GaswisselingHbO2Co2CoPracticeIntro'
import Blok5Week6Casus12NvicAcuteVergiftigingPracticeIntro from '../components/Blok5Week6Casus12NvicAcuteVergiftigingPracticeIntro'
import Blok5Week6Casus12SlechteWoningenLuchtLuchtverontreinigingBovensteLuchtweginfectiesPracticeIntro from '../components/Blok5Week6Casus12SlechteWoningenLuchtLuchtverontreinigingBovensteLuchtweginfectiesPracticeIntro'
import Blok5Week7Casus14DermatoloogInJeBroekzakPracticeIntro from '../components/Blok5Week7Casus14DermatoloogInJeBroekzakPracticeIntro'
import Blok5Week8Casus15RemmenVersusStimulerenVanHetAfweersysteemPracticeIntro from '../components/Blok5Week8Casus15RemmenVersusStimulerenVanHetAfweersysteemPracticeIntro'
import Blok5Week8Casus15RisicoOpIatrogeneSchadeNaOrgaantransplantatiePracticeIntro from '../components/Blok5Week8Casus15RisicoOpIatrogeneSchadeNaOrgaantransplantatiePracticeIntro'
import Blok5Week8Casus15ScyllaEnCharybdisPracticeIntro from '../components/Blok5Week8Casus15ScyllaEnCharybdisPracticeIntro'
import PracticeAiInlinePanel, { InlineAiText } from '../components/PracticeAiInlinePanel'
import { resolveSummaryLmeId, buildPracticeContext, fetchPracticeExplanation } from '../utils/practiceExamAi'
import {
  getProgressUserId,
  loadPracticeProgress,
  savePracticeProgress,
  clearPracticeProgress,
} from '../utils/accountProgressStorage'
import { useAuth } from '../context/AuthContext'
import { useAccess } from '../hooks/useAccess'
import { formatPracticeBlokSubtitle } from '../utils/blokRollupStats'
import { isFreePlanBlockedLme } from '../utils/freePlanAccess'
import {
  PRACTICE_QUESTION_ORDER,
  practiceQuestionsCourseStructure,
  getImagesFromMap,
  getLmeQuestionCount,
  getPracticeQuestionsForLme,
  getPracticeTitleForLme,
  getPracticeSubtitleForLme,
} from './PracticeQuestionsRegistry'

const PracticeQuestionsPage = () => {
  const [searchParams] = useSearchParams()
  const lmeParam = searchParams.get('lme')
  const { user, loading: authLoading } = useAuth()
  const { hasAccess, plan, loading: accessLoading } = useAccess()
  const hasPaidAccess = hasAccess && plan !== 'free'
  const showPremiumLocks = !accessLoading && !hasPaidAccess
  const isBlockedDirectLme = Boolean(lmeParam) && showPremiumLocks && isFreePlanBlockedLme(lmeParam)
  const progressUserId = getProgressUserId(user, authLoading)
  const blokParam = searchParams.get('blok')
  const [expandedBlok, setExpandedBlok] = useState(() => {
    if (blokParam && ['blok3', 'blok4', 'blok5', 'blok9'].includes(blokParam)) return blokParam
    return 'blok4'
  })
  const currentPracticeIndex = lmeParam ? PRACTICE_QUESTION_ORDER.indexOf(lmeParam) : -1
  const prevPracticeLme = currentPracticeIndex > 0 ? PRACTICE_QUESTION_ORDER[currentPracticeIndex - 1] : null
  const nextPracticeLme = currentPracticeIndex >= 0 && currentPracticeIndex < PRACTICE_QUESTION_ORDER.length - 1
    ? PRACTICE_QUESTION_ORDER[currentPracticeIndex + 1]
    : null

  useEffect(() => {
    if (blokParam && ['blok3', 'blok4', 'blok5', 'blok9'].includes(blokParam)) {
      setExpandedBlok(blokParam)
      requestAnimationFrame(() => {
        const el = document.getElementById(`section-${blokParam}`)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } else if (lmeParam?.startsWith('blok5-week')) {
      setExpandedBlok('blok5')
    } else if (lmeParam?.startsWith('blok9-week')) {
      setExpandedBlok('blok9')
    }
  }, [lmeParam, blokParam])

  if (isBlockedDirectLme) {
    return <Navigate to="/oefenvragen" replace />
  }


  const questions = useMemo(() => {
    const q = getPracticeQuestionsForLme(lmeParam)
    if (lmeParam === 'alle-random') {
      const arr = [...q]
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
      return arr.map((item, idx) => ({ ...item, id: idx + 1 }))
    }
    return q
  }, [lmeParam])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [revealedAnswers, setRevealedAnswers] = useState({})
  const [explanations, setExplanations] = useState({})
  const [progressHydrated, setProgressHydrated] = useState(false)

  useEffect(() => {
    if (progressUserId === null) {
      setProgressHydrated(false)
      return
    }
    if (!lmeParam || lmeParam === 'alle-random') {
      setProgressHydrated(true)
      return
    }
    setProgressHydrated(false)
    const maxIdx = Math.max(0, questions.length - 1)
    const saved = loadPracticeProgress(progressUserId, lmeParam)
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
      setExplanations(
        saved.explanations && typeof saved.explanations === 'object' ? saved.explanations : {}
      )
    } else {
      setCurrentQuestion(0)
      setSelectedAnswers({})
      setRevealedAnswers({})
      setExplanations({})
    }
    setProgressHydrated(true)
  }, [progressUserId, lmeParam, questions.length])

  useEffect(() => {
    if (!progressHydrated || progressUserId === null || !lmeParam || lmeParam === 'alle-random') {
      return
    }
    const timer = setTimeout(() => {
      savePracticeProgress(progressUserId, lmeParam, {
        v: 1,
        currentQuestion,
        selectedAnswers,
        revealedAnswers,
        explanations,
      })
    }, 400)
    return () => clearTimeout(timer)
  }, [
    progressHydrated,
    progressUserId,
    lmeParam,
    currentQuestion,
    selectedAnswers,
    revealedAnswers,
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
    setExplanations({})
    setCurrentQuestion(0)
    if (progressUserId && lmeParam && lmeParam !== 'alle-random') {
      clearPracticeProgress(progressUserId, lmeParam)
    }
  }

  // Auto-fetch uitleg zodra antwoord fout is onthuld
  useEffect(() => {
    if (!currentQ) return
    const qId = currentQ.id
    if (!revealedAnswers[qId]) return
    if (selectedAnswers[qId] === currentQ.correctAnswer) return
    if (explanations[qId]) return

    setExplanations((prev) => ({ ...prev, [qId]: { loading: true } }))
    const ctx = buildPracticeContext(currentQ, selectedAnswers[qId], lmeParam)
    fetchPracticeExplanation(ctx)
      .then((text) => setExplanations((prev) => ({ ...prev, [qId]: { loading: false, text } })))
      .catch((err) => setExplanations((prev) => ({ ...prev, [qId]: { loading: false, error: err?.message || 'Fout bij ophalen' } })))
  }, [currentQ, revealedAnswers, selectedAnswers, lmeParam, explanations])

  const getOptionStyle = (questionId, letter) => {
    const isSelected = selectedAnswers[questionId] === letter
    const isRevealed = revealedAnswers[questionId]
    const isCorrect = questions.find(q => q.id === questionId)?.correctAnswer === letter
    
    if (isRevealed) {
      if (isCorrect) {
        return "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200"
      }
      if (isSelected && !isCorrect) {
        return "border-red-400 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200"
      }
      return "border-navy-200 dark:border-slate-600 bg-navy-50 dark:bg-slate-800/50 text-navy-400 dark:text-slate-500"
    }
    
    if (isSelected) {
      return "border-primary-400 bg-primary-50 dark:bg-primary-500/20 text-primary-800 dark:text-primary-200"
    }
    
    return "border-navy-200 dark:border-slate-600 bg-white dark:bg-slate-800/50 text-navy-700 dark:text-slate-300 hover:border-primary-300 dark:hover:border-primary-500/50 hover:bg-primary-50/50 dark:hover:bg-primary-500/10"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-primary-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="h-20" />

      <main className={`container-custom ${lmeParam ? 'py-10 md:py-16' : 'py-8 md:py-12'}`}>
        {/* Back to Summary / Overzicht */}
        {lmeParam && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 md:mb-10 max-w-3xl mx-auto"
          >
            <Link
              to={lmeParam === 'alle-random' ? '/oefenvragen' : `/summary?lme=${lmeParam}`}
              className="inline-flex items-center gap-2 text-navy-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">
                {lmeParam === 'alle-random' ? 'Terug naar overzicht' : 'Terug naar samenvatting'}
              </span>
            </Link>
          </motion.div>
        )}

        {/* Title + cursusoverzicht (zelfde dark-mode patroon als Samenvattingen-index) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-center ${lmeParam ? 'mb-10 md:mb-14 max-w-3xl mx-auto space-y-4' : 'mb-8 max-w-3xl mx-auto'}`}
        >
          <h1 className={`text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight ${lmeParam ? 'mb-3' : 'mb-1'}`}>
            {getPracticeTitleForLme(lmeParam)} <span className="text-accent-500 dark:text-accent-400">Oefenvragen</span>
          </h1>
          <p className={`text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto ${lmeParam ? 'leading-relaxed' : ''}`}>
            {getPracticeSubtitleForLme(lmeParam)}
          </p>
          {lmeParam === 'blok5-week2-casus4-systemische-therapie-van-melanoom' && (
            <Blok5Week2Casus4SystemischeTherapieVanMelanoomPracticeIntro />
          )}
          {lmeParam === 'blok5-week5-casus9-bouw-en-functie-van-de-thymus' && (
            <Blok5Week5Casus9BouwEnFunctieVanDeThymusPracticeIntro />
          )}
          {lmeParam === 'blok5-week5-casus9-endocriene-auto-immuunziekten' && (
            <Blok5Week5Casus9EndocrieneAutoImmuunziektenPracticeIntro />
          )}
          {lmeParam === 'blok5-week5-casus9-pathogenese-auto-immuunziekten' && (
            <Blok5Week5Casus9PathogeneseAutoImmuunziektenPracticeIntro />
          )}
          {lmeParam === 'blok5-week5-casus10-principes-en-klinische-aspecten-van-auto-inflammatie' && (
            <Blok5Week5Casus10PrincipesEnKlinischeAspectenVanAutoInflammatiePracticeIntro />
          )}
          {lmeParam === 'blok5-week5-casus10-spectrum-auto-inflammatie-en-auto-immuniteit' && (
            <Blok5Week5Casus10SpectrumAutoInflammatieEnAutoImmuuniteitPracticeIntro />
          )}
          {lmeParam === 'blok5-week4-casus8-erysipelas-en-cellulitis' && (
            <Blok5Week4Casus8ErysipelasEnCellulitisPracticeIntro />
          )}
          {lmeParam === 'blok5-week4-casus8-hydradenitis-suppurativa' && (
            <Blok5Week4Casus8HydradenitisSuppurativaPracticeIntro />
          )}
          {lmeParam === 'blok5-week4-casus8-introductiemodule-planetary-health' && (
            <Blok5Week4Casus8IntroductiemodulePlanetaryHealthPracticeIntro />
          )}
          {lmeParam === 'blok5-week4-casus8-lichamelijk-onderzoek-knie-voorbereiding-klv-1-24' && (
            <Blok5Week4Casus8LichamelijkOnderzoekKnieVoorbereidingKlv124PracticeIntro />
          )}
          {lmeParam === 'blok5-week4-casus8-lymfeklierdissectie' && (
            <Blok5Week4Casus8LymfeklierdissectiePracticeIntro />
          )}
          {lmeParam === 'blok5-week4-casus8-necrotiserende-wekedeleninfectie' && (
            <Blok5Week4Casus8NecrotiserendeWekedeleninfectiePracticeIntro />
          )}
          {lmeParam === 'blok5-week4-casus8-radiotherapie-in-de-praktijk' && (
            <Blok5Week4Casus8RadiotherapieInDePraktijkPracticeIntro />
          )}
          {lmeParam === 'blok5-week4-casus8-volksgezondheidsindicatoren-dalys' && (
            <Blok5Week4Casus8VolksgezondheidsindicatorenDalysPracticeIntro />
          )}
          {lmeParam === 'blok5-week4-casus7-flebologische-aandoeningen' && (
            <Blok5Week4Casus7FlebologischeAandoeningenPracticeIntro />
          )}
          {lmeParam === 'blok5-week4-casus7-lymfadenopathie' && (
            <Blok5Week4Casus7LymfadenopathiePracticeIntro />
          )}
          {lmeParam === 'blok5-week4-casus7-trombose-verhoogde-stollingsneiging' && (
            <Blok5Week4Casus7TromboseVerhoogdeStollingsneigingPracticeIntro />
          )}
          {lmeParam === 'blok5-week5-casus11-alarmsymptomen-op-de-kinderleeftijd' && (
            <Blok5Week5Casus11AlarmsymptomenOpDeKinderleeftijdPracticeIntro />
          )}
          {lmeParam === 'blok5-week5-casus11-introductie-kinderoncologie' && (
            <Blok5Week5Casus11IntroductieKinderoncologiePracticeIntro />
          )}
          {lmeParam === 'blok5-week5-casus11-kinderoncologie-begrijp-de-hallmarks' && (
            <Blok5Week5Casus11KinderoncologieBegrijpDeHallmarksPracticeIntro />
          )}
          {lmeParam === 'blok5-week5-casus11-over-leven-na-kanker-op-kinderleeftijd' && (
            <Blok5Week5Casus11OverLevenNaKankerOpKinderleeftijdPracticeIntro />
          )}
          {lmeParam === 'blok5-week5-casus11-typen-kinderoncologie-bij-kinderen' && (
            <Blok5Week5Casus11TypenKinderoncologieBijKinderenPracticeIntro />
          )}
          {lmeParam === 'blok5-week6-casus12-gaswisseling-hb-o2-co2-co' && (
            <Blok5Week6Casus12GaswisselingHbO2Co2CoPracticeIntro />
          )}
          {lmeParam === 'blok5-week6-casus12-nvic-acute-vergiftiging' && (
            <Blok5Week6Casus12NvicAcuteVergiftigingPracticeIntro />
          )}
          {lmeParam ===
            'blok5-week6-casus12-slechte-woningen-lucht-luchtverontreiniging-bovenste-luchtweginfecties' && (
            <Blok5Week6Casus12SlechteWoningenLuchtLuchtverontreinigingBovensteLuchtweginfectiesPracticeIntro />
          )}
          {lmeParam === 'blok5-week7-casus14-dermatoloog-in-je-broekzak' && (
            <Blok5Week7Casus14DermatoloogInJeBroekzakPracticeIntro />
          )}
          {lmeParam === 'blok5-week8-casus15-remmen-versus-stimuleren-van-het-afweersysteem' && (
            <Blok5Week8Casus15RemmenVersusStimulerenVanHetAfweersysteemPracticeIntro />
          )}
          {lmeParam === 'blok5-week8-casus15-risico-op-iatrogene-schade-na-orgaantransplantatie' && (
            <Blok5Week8Casus15RisicoOpIatrogeneSchadeNaOrgaantransplantatiePracticeIntro />
          )}
          {lmeParam === 'blok5-week8-casus15-scylla-en-charybdis' && (
            <Blok5Week8Casus15ScyllaEnCharybdisPracticeIntro />
          )}
          {!lmeParam && (
            <div className="mt-8 space-y-4 text-left">
              {/* Blok 3 */}
              <div id="section-blok3" className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 scroll-mt-24">
                <button
                  type="button"
                  onClick={() => setExpandedBlok(expandedBlok === 'blok3' ? null : 'blok3')}
                  className="w-full flex items-center justify-between p-5 hover:bg-slate-50/90 dark:hover:bg-slate-800/80 transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-500/30 rounded-xl">
                      <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                        {practiceQuestionsCourseStructure.blok3.name}
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {formatPracticeBlokSubtitle(practiceQuestionsCourseStructure.blok3)}
                      </p>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform ${expandedBlok === 'blok3' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedBlok === 'blok3' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-t border-slate-100 dark:border-slate-800/80"
                    >
                      <div className="px-5 pb-5 pt-1 bg-slate-50/50 dark:bg-slate-950/40">
                        {practiceQuestionsCourseStructure.blok3.weeks.map((week, weekIndex) => (
                          <div key={weekIndex} className="border-l-2 border-slate-200 dark:border-slate-600 pl-5 ml-5">
                            <div className="flex items-center gap-3 mb-4 -ml-7">
                              <div className="w-3 h-3 rounded-full bg-primary-500 dark:bg-primary-400 border-4 border-white dark:border-slate-950 shadow-sm ring-2 ring-primary-500/20 dark:ring-primary-400/30" />
                              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800/90 dark:border dark:border-slate-700/80 rounded-lg">
                                <Calendar className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                                <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">{week.name}</span>
                              </div>
                            </div>
                            {week.cases.map((casus, casusIndex) => (
                              <div key={casusIndex} className="mb-5 last:mb-0">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="p-2 bg-amber-100 dark:bg-amber-500/15 dark:ring-1 dark:ring-amber-500/25 rounded-lg">
                                    <Stethoscope className="w-4 h-4 text-amber-800 dark:text-amber-400" />
                                  </div>
                                  <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">{casus.name}</span>
                                </div>
                                <div className="ml-0 sm:ml-2 space-y-2">
                                  {casus.lmes.map((lmeItem, lmeIndex) => {
                                    const locked = showPremiumLocks && isFreePlanBlockedLme(lmeItem.id)
                                    return (
                                    <Link
                                      key={lmeIndex}
                                      to={locked ? '/billing' : `/oefenvragen?lme=${lmeItem.id}`}
                                      className={`group flex items-center justify-between gap-3 p-3.5 rounded-xl border transition-all
                                        ${locked
                                          ? 'bg-slate-100 dark:bg-slate-800/50 border-slate-300/90 dark:border-slate-600/90 opacity-90'
                                          : 'bg-white dark:bg-slate-800/60 border-slate-200/90 dark:border-slate-600/90 hover:border-emerald-400/70 dark:hover:border-emerald-500/45 hover:shadow-md dark:hover:shadow-emerald-950/20 hover:bg-emerald-50/50 dark:hover:bg-slate-800/95'}`}
                                    >
                                      <div className="flex items-center gap-3 min-w-0">
                                        <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-500/15 dark:ring-1 dark:ring-emerald-500/20 shrink-0">
                                          <ClipboardCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                                        </div>
                                        <div className="min-w-0">
                                          <span className="font-medium text-slate-800 dark:text-slate-100 text-sm leading-snug block group-hover:text-emerald-900 dark:group-hover:text-emerald-300 transition-colors">
                                            {lmeItem.name}
                                          </span>
                                          <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 inline-flex items-center gap-1.5">
                                            {getLmeQuestionCount(lmeItem)} vragen
                                            {locked && (
                                              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                                                <Lock className="w-3 h-3" />
                                                Premium
                                              </span>
                                            )}
                                          </span>
                                        </div>
                                      </div>
                                      <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 shrink-0 transition-colors" />
                                    </Link>
                                    )
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Blok 4 */}
              <div id="section-blok4" className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 scroll-mt-24">
                <button
                  type="button"
                  onClick={() => setExpandedBlok(expandedBlok === 'blok4' ? null : 'blok4')}
                  className="w-full flex items-center justify-between p-5 hover:bg-slate-50/90 dark:hover:bg-slate-800/80 transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-500/30 rounded-xl">
                      <Shield className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                        {practiceQuestionsCourseStructure.blok4.name}
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {formatPracticeBlokSubtitle(practiceQuestionsCourseStructure.blok4)}
                      </p>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform ${expandedBlok === 'blok4' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedBlok === 'blok4' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-t border-slate-100 dark:border-slate-800/80"
                    >
                      <div className="px-5 pb-5 pt-1 bg-slate-50/50 dark:bg-slate-950/40">
                        {practiceQuestionsCourseStructure.blok4.weeks.map((week, weekIndex) => (
                          <div key={weekIndex} className="mb-8 last:mb-0 border-l-2 border-slate-200 dark:border-slate-600 pl-5 ml-5">
                            <div className="flex items-center gap-3 mb-4 -ml-7">
                              <div className="w-3 h-3 rounded-full bg-indigo-500 dark:bg-indigo-400 border-4 border-white dark:border-slate-950 shadow-sm ring-2 ring-indigo-500/20 dark:ring-indigo-400/30" />
                              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800/90 dark:border dark:border-slate-700/80 rounded-lg">
                                <Calendar className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                                <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">{week.name}</span>
                              </div>
                            </div>
                            {week.cases.map((casus, casusIndex) => (
                              <div key={casusIndex} className="mb-5 last:mb-0">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="p-2 bg-amber-100 dark:bg-amber-500/15 dark:ring-1 dark:ring-amber-500/25 rounded-lg">
                                    <Stethoscope className="w-4 h-4 text-amber-800 dark:text-amber-400" />
                                  </div>
                                  <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">{casus.name}</span>
                                </div>
                                <div className="ml-0 sm:ml-2 space-y-2">
                                  {casus.lmes.map((lmeItem, lmeIndex) => (
                                    lmeItem.type === 'simple' ? (
                                      (() => {
                                        const locked = showPremiumLocks && isFreePlanBlockedLme(lmeItem.id)
                                        return (
                                      <Link
                                        key={lmeIndex}
                                        to={locked ? '/billing' : `/oefenvragen?lme=${lmeItem.id}`}
                                        className={`group flex items-center justify-between gap-3 p-3.5 rounded-xl border transition-all
                                          ${locked
                                            ? 'bg-slate-100 dark:bg-slate-800/50 border-slate-300/90 dark:border-slate-600/90 opacity-90'
                                            : 'bg-white dark:bg-slate-800/60 border-slate-200/90 dark:border-slate-600/90 hover:border-emerald-400/70 dark:hover:border-emerald-500/45 hover:shadow-md dark:hover:shadow-emerald-950/20 hover:bg-emerald-50/50 dark:hover:bg-slate-800/95'}`}
                                      >
                                        <div className="flex items-center gap-3 min-w-0">
                                          <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-500/15 dark:ring-1 dark:ring-emerald-500/20 shrink-0">
                                            <ClipboardCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                                          </div>
                                          <div className="min-w-0">
                                            <span className="font-medium text-slate-800 dark:text-slate-100 text-sm leading-snug block group-hover:text-emerald-900 dark:group-hover:text-emerald-300 transition-colors">
                                              {lmeItem.name}
                                            </span>
                                            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 inline-flex items-center gap-1.5">
                                              {getLmeQuestionCount(lmeItem)} vragen
                                              {locked && (
                                                <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                                                  <Lock className="w-3 h-3" />
                                                  Premium
                                                </span>
                                              )}
                                            </span>
                                          </div>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 shrink-0 transition-colors" />
                                      </Link>
                                        )
                                      })()
                                    ) : (
                                      <div key={lmeIndex} className="space-y-2 rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/70 dark:bg-slate-800/40 p-3">
                                        <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200 py-1">
                                          <ClipboardCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                          <span>{lmeItem.name} ({getLmeQuestionCount(lmeItem)} vragen)</span>
                                        </div>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                          {getImagesFromMap(lmeItem.questionsMap).map((img) => {
                                            const locked = showPremiumLocks && isFreePlanBlockedLme(img.id)
                                            return (
                                            <Link
                                              key={img.id}
                                              to={locked ? '/billing' : `/oefenvragen?lme=${img.id}`}
                                              className={`text-center px-3 py-2.5 rounded-lg border text-sm transition-all
                                                ${locked
                                                  ? 'bg-slate-100 dark:bg-slate-900/40 border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400'
                                                  : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-emerald-400 dark:hover:border-emerald-500/50 hover:bg-emerald-50/80 dark:hover:bg-emerald-500/10 hover:text-emerald-900 dark:hover:text-emerald-300'}`}
                                            >
                                              <span className="inline-flex items-center gap-1.5">
                                                {img.name}
                                                {locked && <Lock className="w-3 h-3" />}
                                              </span>
                                            </Link>
                                            )
                                          })}
                                        </div>
                                      </div>
                                    )
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Blok 5 */}
              <div id="section-blok5" className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 scroll-mt-24">
                <button
                  type="button"
                  onClick={() => setExpandedBlok(expandedBlok === 'blok5' ? null : 'blok5')}
                  className="w-full flex items-center justify-between p-5 hover:bg-slate-50/90 dark:hover:bg-slate-800/80 transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-rose-100 dark:bg-rose-500/25 rounded-xl">
                      <Sparkles className="w-6 h-6 text-rose-600 dark:text-rose-300" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                        {practiceQuestionsCourseStructure.blok5.name}
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {formatPracticeBlokSubtitle(practiceQuestionsCourseStructure.blok5)}
                      </p>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform ${expandedBlok === 'blok5' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedBlok === 'blok5' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-t border-slate-100 dark:border-slate-800/80"
                    >
                      <div className="px-5 pb-5 pt-1 bg-slate-50/50 dark:bg-slate-950/40">
                        {practiceQuestionsCourseStructure.blok5.weeks.map((week, weekIndex) => (
                          <div key={weekIndex} className="border-l-2 border-slate-200 dark:border-slate-600 pl-5 ml-5">
                            <div className="flex items-center gap-3 mb-4 -ml-7">
                              <div className="w-3 h-3 rounded-full bg-rose-500 dark:bg-rose-400 border-4 border-white dark:border-slate-950 shadow-sm ring-2 ring-rose-500/20 dark:ring-rose-400/30" />
                              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800/90 dark:border dark:border-slate-700/80 rounded-lg">
                                <Calendar className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                                <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">{week.name}</span>
                              </div>
                            </div>
                            {week.cases.map((casus, casusIndex) => (
                              <div key={casusIndex} className="mb-5 last:mb-0">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="p-2 bg-amber-100 dark:bg-amber-500/15 dark:ring-1 dark:ring-amber-500/25 rounded-lg">
                                    <Stethoscope className="w-4 h-4 text-amber-800 dark:text-amber-400" />
                                  </div>
                                  <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">{casus.name}</span>
                                </div>
                                <div className="ml-0 sm:ml-2 space-y-2">
                                  {casus.lmes.map((lmeItem, lmeIndex) => {
                                    const locked = showPremiumLocks && isFreePlanBlockedLme(lmeItem.id)
                                    return (
                                    <Link
                                      key={lmeIndex}
                                      to={locked ? '/billing' : `/oefenvragen?lme=${lmeItem.id}`}
                                      className={`group flex items-center justify-between gap-3 p-3.5 rounded-xl border transition-all
                                        ${locked
                                          ? 'bg-slate-100 dark:bg-slate-800/50 border-slate-300/90 dark:border-slate-600/90 opacity-90'
                                          : 'bg-white dark:bg-slate-800/60 border-slate-200/90 dark:border-slate-600/90 hover:border-emerald-400/70 dark:hover:border-emerald-500/45 hover:shadow-md dark:hover:shadow-emerald-950/20 hover:bg-emerald-50/50 dark:hover:bg-slate-800/95'}`}
                                    >
                                      <div className="flex items-center gap-3 min-w-0">
                                        <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-500/15 dark:ring-1 dark:ring-emerald-500/20 shrink-0">
                                          <ClipboardCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                                        </div>
                                        <div className="min-w-0">
                                          <span className="font-medium text-slate-800 dark:text-slate-100 text-sm leading-snug block group-hover:text-emerald-900 dark:group-hover:text-emerald-300 transition-colors">
                                            {lmeItem.name}
                                          </span>
                                          <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 inline-flex items-center gap-1.5">
                                            {getLmeQuestionCount(lmeItem)} vragen
                                            {locked && (
                                              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                                                <Lock className="w-3 h-3" />
                                                Premium
                                              </span>
                                            )}
                                          </span>
                                        </div>
                                      </div>
                                      <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 shrink-0 transition-colors" />
                                    </Link>
                                    )
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Blok 9 */}
              <div id="section-blok9" className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 scroll-mt-24">
                <button
                  type="button"
                  onClick={() => setExpandedBlok(expandedBlok === 'blok9' ? null : 'blok9')}
                  className="w-full flex items-center justify-between p-5 hover:bg-slate-50/90 dark:hover:bg-slate-800/80 transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-teal-100 dark:bg-teal-500/30 rounded-xl">
                      <Activity className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                        {practiceQuestionsCourseStructure.blok9.name}
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {formatPracticeBlokSubtitle(practiceQuestionsCourseStructure.blok9)}
                      </p>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform ${expandedBlok === 'blok9' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedBlok === 'blok9' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-t border-slate-100 dark:border-slate-800/80"
                    >
                      <div className="px-5 pb-5 pt-1 bg-slate-50/50 dark:bg-slate-950/40">
                        {practiceQuestionsCourseStructure.blok9.weeks.map((week, weekIndex) => (
                          <div key={weekIndex} className="border-l-2 border-slate-200 dark:border-slate-600 pl-5 ml-5">
                            <div className="flex items-center gap-3 mb-4 -ml-7">
                              <div className="w-3 h-3 rounded-full bg-teal-500 dark:bg-teal-400 border-4 border-white dark:border-slate-950 shadow-sm ring-2 ring-teal-500/20 dark:ring-teal-400/30" />
                              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800/90 dark:border dark:border-slate-700/80 rounded-lg">
                                <Calendar className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                                <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">{week.name}</span>
                              </div>
                            </div>
                            {week.cases.map((casus, casusIndex) => (
                              <div key={casusIndex} className="mb-5 last:mb-0">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="p-2 bg-amber-100 dark:bg-amber-500/15 dark:ring-1 dark:ring-amber-500/25 rounded-lg">
                                    <Stethoscope className="w-4 h-4 text-amber-800 dark:text-amber-400" />
                                  </div>
                                  <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">{casus.name}</span>
                                </div>
                                <div className="ml-0 sm:ml-2 space-y-2">
                                  {casus.lmes.map((lmeItem, lmeIndex) => (
                                    lmeItem.type === 'simple' ? (
                                      (() => {
                                        const locked = showPremiumLocks && isFreePlanBlockedLme(lmeItem.id)
                                        return (
                                      <Link
                                        key={lmeIndex}
                                        to={locked ? '/billing' : `/oefenvragen?lme=${lmeItem.id}`}
                                        className={`group flex items-center justify-between gap-3 p-3.5 rounded-xl border transition-all
                                          ${locked
                                            ? 'bg-slate-100 dark:bg-slate-800/50 border-slate-300/90 dark:border-slate-600/90 opacity-90'
                                            : 'bg-white dark:bg-slate-800/60 border-slate-200/90 dark:border-slate-600/90 hover:border-emerald-400/70 dark:hover:border-emerald-500/45 hover:shadow-md dark:hover:shadow-emerald-950/20 hover:bg-emerald-50/50 dark:hover:bg-slate-800/95'}`}
                                      >
                                        <div className="flex items-center gap-3 min-w-0">
                                          <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-500/15 dark:ring-1 dark:ring-emerald-500/20 shrink-0">
                                            <ClipboardCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                                          </div>
                                          <div className="min-w-0">
                                            <span className="font-medium text-slate-800 dark:text-slate-100 text-sm leading-snug block group-hover:text-emerald-900 dark:group-hover:text-emerald-300 transition-colors">
                                              {lmeItem.name}
                                            </span>
                                            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 inline-flex items-center gap-1.5">
                                              {getLmeQuestionCount(lmeItem)} vragen
                                              {locked && (
                                                <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                                                  <Lock className="w-3 h-3" />
                                                  Premium
                                                </span>
                                              )}
                                            </span>
                                          </div>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 shrink-0 transition-colors" />
                                      </Link>
                                        )
                                      })()
                                    ) : (
                                      <div key={lmeIndex} className="space-y-2 rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/70 dark:bg-slate-800/40 p-3">
                                        <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200 py-1">
                                          <ClipboardCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                          <span>{lmeItem.name} ({getLmeQuestionCount(lmeItem)} vragen)</span>
                                        </div>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                          {getImagesFromMap(lmeItem.questionsMap).map((img) => {
                                            const locked = showPremiumLocks && isFreePlanBlockedLme(img.id)
                                            return (
                                            <Link
                                              key={img.id}
                                              to={locked ? '/billing' : `/oefenvragen?lme=${img.id}`}
                                              className={`text-center px-3 py-2.5 rounded-lg border text-sm transition-all
                                                ${locked
                                                  ? 'bg-slate-100 dark:bg-slate-900/40 border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400'
                                                  : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-emerald-400 dark:hover:border-emerald-500/50 hover:bg-emerald-50/80 dark:hover:bg-emerald-500/10 hover:text-emerald-900 dark:hover:text-emerald-300'}`}
                                            >
                                              <span className="inline-flex items-center gap-1.5">
                                                {img.name}
                                                {locked && <Lock className="w-3 h-3" />}
                                              </span>
                                            </Link>
                                            )
                                          })}
                                        </div>
                                      </div>
                                    )
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}
        </motion.div>

        {lmeParam &&
          lmeParam !== 'alle-random' &&
          totalQuestions === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto mb-10 rounded-2xl border border-navy-100 dark:border-slate-600 bg-white/90 dark:bg-slate-800/50 px-6 py-8 text-center"
          >
            <p className="text-navy-700 dark:text-slate-300 font-medium">
              Voor dit onderdeel staan er nog geen meerkeuzevragen in de dataset.
            </p>
            <p className="mt-2 text-sm text-navy-500 dark:text-slate-500">
              Zodra het oefenvragen-document is aangevuld, verschijnen ze hier automatisch.
            </p>
          </motion.div>
        )}

        {/* Progress Bar + vragen (alleen tonen bij gekozen LME of alle-random) */}
        {(lmeParam && (lmeParam === 'alle-random' || totalQuestions > 0)) && (
        <>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`max-w-3xl mx-auto ${lmeParam ? 'mb-10' : 'mb-8'}`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Target className="w-4 h-4 text-primary-500" />
                <span className="text-navy-600 dark:text-slate-300">{answeredCount}/{totalQuestions} beantwoord</span>
              </div>
              {answeredCount > 0 && (
                <div className="flex items-center gap-2 text-sm">
                  <Trophy className="w-4 h-4 text-accent-500" />
                  <span className="text-navy-600 dark:text-slate-300">{correctCount} correct</span>
                </div>
              )}
            </div>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-navy-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
          <div className="h-2 bg-navy-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-400 to-accent-400"
              initial={{ width: 0 }}
              animate={{ width: `${totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Question Navigation Dots - max 3 rijen, rest scrollbaar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`max-w-3xl mx-auto overflow-y-auto ${lmeParam ? 'mb-10' : 'mb-8'}`}
          style={{ maxHeight: 'calc(3 * (2.25rem + 0.5rem))' }}
        >
          <div className="flex flex-wrap justify-center gap-2">
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
                {index + 1}
              </button>
            )
          })}
          </div>
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
            <div className="bg-white dark:bg-slate-800/50 rounded-3xl shadow-soft-lg border border-navy-100 dark:border-slate-600 overflow-hidden">
              {/* Question Header */}
              <div className="px-6 py-4 bg-gradient-to-r from-navy-50 to-primary-50 dark:from-slate-800 dark:to-slate-700/50 border-b border-navy-100 dark:border-slate-600">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-accent-100 dark:bg-accent-500/30 text-accent-700 dark:text-accent-300 rounded-full text-xs font-medium">
                    {currentQ.category}
                  </span>
                  <span className="text-navy-500 dark:text-slate-400 text-sm font-medium">
                    Vraag {currentQuestion + 1} van {totalQuestions}
                  </span>
                </div>
              </div>

              {/* Question */}
              <div className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-navy-900 dark:text-slate-100 mb-6">
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
                              : "bg-navy-100 dark:bg-slate-700 text-navy-600 dark:text-slate-300"
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

                {revealedAnswers[currentQ.id] && selectedAnswers[currentQ.id] !== currentQ.correctAnswer && (
                  <div className="mt-6 rounded-lg border border-slate-200/90 dark:border-slate-700/90 bg-slate-50/70 dark:bg-slate-900/40 p-4">
                    {lmeParam === 'alle-random' && (
                      <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">
                        Gemengde modus: de uitleg verwijst naar de best passende samenvatting.
                      </p>
                    )}
                    {explanations[currentQ.id]?.loading && (
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm mb-2">
                        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                        Uitleg ophalen…
                      </div>
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
                          practiceContext={buildPracticeContext(currentQ, selectedAnswers[currentQ.id], lmeParam)}
                          initialExplanation={explanations[currentQ.id].text}
                          explanationLoading={!!explanations[currentQ.id]?.loading}
                          explanationError={explanations[currentQ.id]?.error}
                          canUseFollowUp={hasPaidAccess}
                        />
                      </>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-navy-100 dark:border-slate-600">
                  <button
                    onClick={handlePrev}
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

        {/* Results Section */}
        {totalQuestions > 0 && answeredCount === totalQuestions && Object.keys(revealedAnswers).length === totalQuestions && (
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
                  Naar Samenvattingen
                </Link>
              </div>
            </div>
          </motion.div>
        )}
        </>
        )}

        {/* Previous / Next Practice Set */}
        {lmeParam && lmeParam !== 'alle-random' && (prevPracticeLme || nextPracticeLme) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-3xl mx-auto mt-8"
          >
            <div className="flex items-center justify-between gap-3">
              {prevPracticeLme ? (
                <Link
                  to={`/oefenvragen?lme=${prevPracticeLme}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-navy-200 text-navy-700 hover:text-primary-600 hover:border-primary-300 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Vorige oefenvragen
                </Link>
              ) : <span />}
              {nextPracticeLme ? (
                <Link
                  to={`/oefenvragen?lme=${nextPracticeLme}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-navy-200 text-navy-700 hover:text-primary-600 hover:border-primary-300 transition-colors"
                >
                  Volgende oefenvragen
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : <span />}
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
            Bekijk de samenvattingen
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

