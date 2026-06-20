import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo, useEffect } from 'react'
import { Link, Navigate, useSearchParams } from 'react-router-dom'
import { 
  ClipboardCheck, ChevronLeft, ChevronRight, ChevronDown,
  RotateCcw, Trophy, Target, BookOpen,
  CheckCircle, XCircle, ArrowLeft,
  Calendar, Stethoscope, GraduationCap, Shield, Loader2, Activity, Sparkles, Lock,
  FlaskConical
} from 'lucide-react'
import Navbar from '../components/Navbar'
import PracticeMultiBlokSelector from '../components/PracticeMultiBlokSelector'
import PracticeCourseModuleLink from '../components/PracticeCourseModuleLink'
import BlokWeekoverzichtPanel from '../components/BlokWeekoverzichtPanel'
import Blok5Week2Casus4SystemischeTherapieVanMelanoomPracticeIntro from '../components/Blok5Week2Casus4SystemischeTherapieVanMelanoomPracticeIntro'
import Blok5Week4Casus8ErysipelasEnCellulitisPracticeIntro from '../components/Blok5Week4Casus8ErysipelasEnCellulitisPracticeIntro'
import Blok5Week4Casus8HydradenitisSuppurativaPracticeIntro from '../components/Blok5Week4Casus8HydradenitisSuppurativaPracticeIntro'
import Blok5Week4Casus8IntroductiemodulePlanetaryHealthPracticeIntro from '../components/Blok5Week4Casus8IntroductiemodulePlanetaryHealthPracticeIntro'
import Blok5Week4Casus8LichamelijkOnderzoekKnieVoorbereidingKlv124PracticeIntro from '../components/Blok5Week4Casus8LichamelijkOnderzoekKnieVoorbereidingKlv124PracticeIntro'
import Blok5Week4Casus8LymfeklierdissectiePracticeIntro from '../components/Blok5Week4Casus8LymfeklierdissectiePracticeIntro'
import Blok5Week4Casus8NecrotiserendeWekedeleninfectiePracticeIntro from '../components/Blok5Week4Casus8NecrotiserendeWekedeleninfectiePracticeIntro'
import Blok5Week4Casus8RadiotherapieInDePraktijkPracticeIntro from '../components/Blok5Week4Casus8RadiotherapieInDePraktijkPracticeIntro'
import Blok5Week4Casus8LmvVerworvenStollingsstoornissenPracticeIntro from '../components/Blok5Week4Casus8LmvVerworvenStollingsstoornissenPracticeIntro'
import Blok5Week4Casus8VolksgezondheidsindicatorenDalysPracticeIntro from '../components/Blok5Week4Casus8VolksgezondheidsindicatorenDalysPracticeIntro'
import Blok5Week4Casus7FlebologischeAandoeningenPracticeIntro from '../components/Blok5Week4Casus7FlebologischeAandoeningenPracticeIntro'
import Blok5Week4Casus7LymfadenopathiePracticeIntro from '../components/Blok5Week4Casus7LymfadenopathiePracticeIntro'
import Blok5Week4Casus7TromboseVerhoogdeStollingsneigingPracticeIntro from '../components/Blok5Week4Casus7TromboseVerhoogdeStollingsneigingPracticeIntro'
import Blok5Week4Casus7LmoDifferentiaalDiagnostischeAanpakZwellingBeenPracticeIntro from '../components/Blok5Week4Casus7LmoDifferentiaalDiagnostischeAanpakZwellingBeenPracticeIntro'
import Blok5Week4Casus7LmoVoorbereidingVowHoeveelMagEenLevensjaarKostenPracticeIntro from '../components/Blok5Week4Casus7LmoVoorbereidingVowHoeveelMagEenLevensjaarKostenPracticeIntro'
import Blok5Week5Casus11AlarmsymptomenOpDeKinderleeftijdPracticeIntro from '../components/Blok5Week5Casus11AlarmsymptomenOpDeKinderleeftijdPracticeIntro'
import Blok5Week5Casus11IntroductieKinderoncologiePracticeIntro from '../components/Blok5Week5Casus11IntroductieKinderoncologiePracticeIntro'
import Blok5Week5Casus11KinderoncologieBegrijpDeHallmarksPracticeIntro from '../components/Blok5Week5Casus11KinderoncologieBegrijpDeHallmarksPracticeIntro'
import Blok5Week5Casus11OverLevenNaKankerOpKinderleeftijdPracticeIntro from '../components/Blok5Week5Casus11OverLevenNaKankerOpKinderleeftijdPracticeIntro'
import Blok5Week5Casus11TypenKinderoncologieBijKinderenPracticeIntro from '../components/Blok5Week5Casus11TypenKinderoncologieBijKinderenPracticeIntro'
import Blok5Week5Casus11LmoImportziektenPracticeIntro from '../components/Blok5Week5Casus11LmoImportziektenPracticeIntro'
import Blok5Week5Casus11LmoInfectiesBinnenDeKinderoncologiePracticeIntro from '../components/Blok5Week5Casus11LmoInfectiesBinnenDeKinderoncologiePracticeIntro'
import Blok5Week5Casus9BouwEnFunctieVanDeThymusPracticeIntro from '../components/Blok5Week5Casus9BouwEnFunctieVanDeThymusPracticeIntro'
import Blok5Week5Casus9LmoPositieveEnNegatieveSelectiePracticeIntro from '../components/Blok5Week5Casus9LmoPositieveEnNegatieveSelectiePracticeIntro'
import Blok5Week5Casus9LmoVoorbereidingVoRaKlinischePresentatieEnImmuunmechanismenPracticeIntro from '../components/Blok5Week5Casus9LmoVoorbereidingVoRaKlinischePresentatieEnImmuunmechanismenPracticeIntro'
import Blok5Week5Casus9EndocrieneAutoImmuunziektenPracticeIntro from '../components/Blok5Week5Casus9EndocrieneAutoImmuunziektenPracticeIntro'
import Blok5Week5Casus9PathogeneseAutoImmuunziektenPracticeIntro from '../components/Blok5Week5Casus9PathogeneseAutoImmuunziektenPracticeIntro'
import Blok5Week5Casus9LmvIntroductieAutoImmuniteitVersusAutoInflammatiePracticeIntro from '../components/Blok5Week5Casus9LmvIntroductieAutoImmuniteitVersusAutoInflammatiePracticeIntro'
import Blok5Week5Casus9LmvAutoImmuniteitAlsBijwerkingBijImmunotherapiePracticeIntro from '../components/Blok5Week5Casus9LmvAutoImmuniteitAlsBijwerkingBijImmunotherapiePracticeIntro'
import Blok5Week5Casus9LmvPatientMetSleSamenvattingPracticeIntro from '../components/Blok5Week5Casus9LmvPatientMetSleSamenvattingPracticeIntro'
import Blok5Week5Casus10PrincipesEnKlinischeAspectenVanAutoInflammatiePracticeIntro from '../components/Blok5Week5Casus10PrincipesEnKlinischeAspectenVanAutoInflammatiePracticeIntro'
import Blok5Week5Casus10SpectrumAutoInflammatieEnAutoImmuuniteitPracticeIntro from '../components/Blok5Week5Casus10SpectrumAutoInflammatieEnAutoImmuuniteitPracticeIntro'
import Blok5Week6Casus12GaswisselingHbO2Co2CoPracticeIntro from '../components/Blok5Week6Casus12GaswisselingHbO2Co2CoPracticeIntro'
import Blok5Week6Casus12NvicAcuteVergiftigingPracticeIntro from '../components/Blok5Week6Casus12NvicAcuteVergiftigingPracticeIntro'
import Blok5Week6Casus12SlechteWoningenLuchtLuchtverontreinigingBovensteLuchtweginfectiesPracticeIntro from '../components/Blok5Week6Casus12SlechteWoningenLuchtLuchtverontreinigingBovensteLuchtweginfectiesPracticeIntro'
import Blok5Week7Casus14DermatoloogInJeBroekzakPracticeIntro from '../components/Blok5Week7Casus14DermatoloogInJeBroekzakPracticeIntro'
import Blok5Week7Casus14LmoWatIsAiPracticeIntro from '../components/Blok5Week7Casus14LmoWatIsAiPracticeIntro'
import Blok5Week7Casus14LmoEthiekVanDermaAppsPracticeIntro from '../components/Blok5Week7Casus14LmoEthiekVanDermaAppsPracticeIntro'
import Blok5Week7Casus14LmoImplementatieInDeDermatologischePraktijkPracticeIntro from '../components/Blok5Week7Casus14LmoImplementatieInDeDermatologischePraktijkPracticeIntro'
import Blok5Week8Casus15RemmenVersusStimulerenVanHetAfweersysteemPracticeIntro from '../components/Blok5Week8Casus15RemmenVersusStimulerenVanHetAfweersysteemPracticeIntro'
import Blok5Week8Casus15RisicoOpIatrogeneSchadeNaOrgaantransplantatiePracticeIntro from '../components/Blok5Week8Casus15RisicoOpIatrogeneSchadeNaOrgaantransplantatiePracticeIntro'
import Blok5Week8Casus15ScyllaEnCharybdisPracticeIntro from '../components/Blok5Week8Casus15ScyllaEnCharybdisPracticeIntro'
import Blok5Week8Casus15LmoVoorbereidingVowPalliatieveZorgPracticeIntro from '../components/Blok5Week8Casus15LmoVoorbereidingVowPalliatieveZorgPracticeIntro'
import Blok10Week1Casus1MaagklachtenEndoscopieBasisEnBloedingenPracticeIntro from '../components/Blok10Week1Casus1MaagklachtenEndoscopieBasisEnBloedingenPracticeIntro'
import Blok10Week1Casus1MaagklachtenFysiologieVanMaagzuurPracticeIntro from '../components/Blok10Week1Casus1MaagklachtenFysiologieVanMaagzuurPracticeIntro'
import Blok10Week1Casus1MaagklachtenLeefstijlBijRefluxPracticeIntro from '../components/Blok10Week1Casus1MaagklachtenLeefstijlBijRefluxPracticeIntro'
import Blok10Week1Casus1MaagklachtenLogistischeRegressieAnalysePracticeIntro from '../components/Blok10Week1Casus1MaagklachtenLogistischeRegressieAnalysePracticeIntro'
import Blok10Week1Casus1MaagklachtenRefluxBijKinderenPracticeIntro from '../components/Blok10Week1Casus1MaagklachtenRefluxBijKinderenPracticeIntro'
import Blok10Week1Casus1MaagklachtenLmoKumarClarkPathofysiologieHPyloriPracticeIntro from '../components/Blok10Week1Casus1MaagklachtenLmoKumarClarkPathofysiologieHPyloriPracticeIntro'
import Blok10Week1Casus1MaagklachtenLmvHPyloriZorgkostenVanuitEenBacteriePracticeIntro from '../components/Blok10Week1Casus1MaagklachtenLmvHPyloriZorgkostenVanuitEenBacteriePracticeIntro'
import Blok10Week1Casus1MaagklachtenLmvPpiPracticeIntro from '../components/Blok10Week1Casus1MaagklachtenLmvPpiPracticeIntro'
import Blok10Week1Casus2PassageklachtenLmePreMaligneBovensteTractusDigestivusPracticeIntro from '../components/Blok10Week1Casus2PassageklachtenLmePreMaligneBovensteTractusDigestivusPracticeIntro'
import Blok10Week1Casus2PassageklachtenLmeChemoradiatiePracticeIntro from '../components/Blok10Week1Casus2PassageklachtenLmeChemoradiatiePracticeIntro'
import Blok10Week1Casus2PassageklachtenLmeKindergerelateerdeZiektenPracticeIntro from '../components/Blok10Week1Casus2PassageklachtenLmeKindergerelateerdeZiektenPracticeIntro'
import Blok10Week1Casus2PassageklachtenLmeMotiliteitVanDeBovensteTractusDigestivusPracticeIntro from '../components/Blok10Week1Casus2PassageklachtenLmeMotiliteitVanDeBovensteTractusDigestivusPracticeIntro'
import Blok10Week1Casus2PassageklachtenLmvChirurgischeBehandelingVanAandoeningenAanDeBovensteTractusDigestivusPracticeIntro from '../components/Blok10Week1Casus2PassageklachtenLmvChirurgischeBehandelingVanAandoeningenAanDeBovensteTractusDigestivusPracticeIntro'
import Blok10Week2CasusC04DiarreeAanhoudendeBuikklachtenPracticeIntro from '../components/Blok10Week2CasusC04DiarreeAanhoudendeBuikklachtenPracticeIntro'
import Blok10Week2CasusC04DiarreeMalabsorptiePracticeIntro from '../components/Blok10Week2CasusC04DiarreeMalabsorptiePracticeIntro'
import Blok10Week2CasusC04DiarreeMorbusCrohnPracticeIntro from '../components/Blok10Week2CasusC04DiarreeMorbusCrohnPracticeIntro'
import Blok10Week2CasusC04DiarreeVerteringEnOpnamePracticeIntro from '../components/Blok10Week2CasusC04DiarreeVerteringEnOpnamePracticeIntro'
import Blok10Week5CasusC09ObesitasElkeArtsBehandeltObesitasPracticeIntro from '../components/Blok10Week5CasusC09ObesitasElkeArtsBehandeltObesitasPracticeIntro'
import Blok10Week5CasusC09ObesitasLichaamsbewegingPracticeIntro from '../components/Blok10Week5CasusC09ObesitasLichaamsbewegingPracticeIntro'
import Blok10Week5CasusC10DmType2SymptomenPathofysiologieDiagnostiekDm2PracticeIntro from '../components/Blok10Week5CasusC10DmType2SymptomenPathofysiologieDiagnostiekDm2PracticeIntro'
import Blok10Week5CasusC10DmType2LangetermijnComplicatiesDiabetesPracticeIntro from '../components/Blok10Week5CasusC10DmType2LangetermijnComplicatiesDiabetesPracticeIntro'
import Blok10Week3CasusC05ChronischePancreatitisPancreasfysiologiePracticeIntro from '../components/Blok10Week3CasusC05ChronischePancreatitisPancreasfysiologiePracticeIntro'
import Blok10Week3CasusC05ChronischePancreatitisAcuteEnChronischePancreatitisPracticeIntro from '../components/Blok10Week3CasusC05ChronischePancreatitisAcuteEnChronischePancreatitisPracticeIntro'
import Blok10Week3CasusC05ChronischePancreatitisAdvancedEndoscopieEusErcpPracticeIntro from '../components/Blok10Week3CasusC05ChronischePancreatitisAdvancedEndoscopieEusErcpPracticeIntro'
import Blok10Week3CasusC05ChronischePancreatitisDieetPancreatitisPancreasenzymenPracticeIntro from '../components/Blok10Week3CasusC05ChronischePancreatitisDieetPancreatitisPancreasenzymenPracticeIntro'
import PracticeAiInlinePanel, { InlineAiText } from '../components/PracticeAiInlinePanel'
import { resolveSummaryLmeId, buildPracticeContext, fetchPracticeExplanation } from '../utils/practiceExamAi'
import {
  getProgressUserId,
  loadPracticeProgress,
  savePracticeProgress,
  clearPracticeProgress,
  isPersistedRandomPracticeMode,
  isAccountProgressUser,
} from '../utils/accountProgressStorage'
import { buildShuffledQuestions } from '../utils/practiceRandomProgress'
import { useAuth } from '../context/AuthContext'
import { isWaifuPremiumUser } from '../utils/waifuPremiumUser'
import { useAccess } from '../hooks/useAccess'
import { useReward } from '../context/RewardContext'
import { COIN_REWARDS } from '../lib/rewardSystem'
import { formatPracticeBlokSubtitle } from '../utils/blokRollupStats'
import { isFreePlanBlockedLme, isFreePlanBlockedPracticeLme, isFreePlanCasusRandomPracticeUnlocked } from '../utils/freePlanAccess'
import {
  PRACTICE_QUESTION_ORDER,
  practiceQuestionsCourseStructure,
  getImagesFromMap,
  getLmeQuestionCount,
  getPracticeQuestionsForLme,
  getPracticeTitleForLme,
  getPracticeSubtitleForLme,
  isRandomMode,
  buildCasusRandomParam,
  buildBlokRandomParam,
  buildBlokWrongAnswersParam,
} from './PracticeQuestionsRegistry'
import { collectWrongAnsweredQuestionsForBlok, countWrongAnsweredQuestionsForBlok } from '../utils/practiceBlokWrongAnswers'
import { splitCasusModules } from '../utils/courseModuleKind'
import { FLANKEREND_MODULE_IDS_BY_CASE } from '../data/flankerendModuleIdsByCase'

const VALID_BLOK_KEYS = ['blok3', 'blok4', 'blok5', 'blok9', 'blok10']

const PracticeQuestionsPage = ({ forcedBlok = null }) => {
  const [searchParams] = useSearchParams()
  const lmeParam = searchParams.get('lme')
  const forceNewSession = searchParams.get('nieuw') === '1'
  const { user, loading: authLoading } = useAuth()
  const { hasAccess, plan, loading: accessLoading } = useAccess()
  const { awardCoins } = useReward()
  const hasPaidAccess = hasAccess && plan !== 'free'
  const showPremiumLocks = !accessLoading && !hasPaidAccess
  const isBlockedDirectLme = Boolean(lmeParam) && showPremiumLocks && isFreePlanBlockedPracticeLme(lmeParam)
  const progressUserId = getProgressUserId(user, authLoading)
  const hasAccountProgress = isAccountProgressUser(progressUserId)
  const waifuMode = isWaifuPremiumUser(user)
  const waifuInset = waifuMode ? ' waifu-practice-inset' : ''
  const blokParam = searchParams.get('blok')
  const forcedBlokKey = VALID_BLOK_KEYS.includes(forcedBlok) ? forcedBlok : null
  const urlBlokKey = VALID_BLOK_KEYS.includes(blokParam) ? blokParam : null
  const selectedOverviewBlok = forcedBlokKey || urlBlokKey
  const [expandedBlok, setExpandedBlok] = useState(() => {
    if (selectedOverviewBlok) return selectedOverviewBlok
    return null
  })
  const [progressVersion, setProgressVersion] = useState(0)
  const [sessionQuestions, setSessionQuestions] = useState(null)
  const [questionOrder, setQuestionOrder] = useState(null)
  const currentPracticeIndex = lmeParam ? PRACTICE_QUESTION_ORDER.indexOf(lmeParam) : -1
  const prevPracticeLme = currentPracticeIndex > 0 ? PRACTICE_QUESTION_ORDER[currentPracticeIndex - 1] : null
  const nextPracticeLme = currentPracticeIndex >= 0 && currentPracticeIndex < PRACTICE_QUESTION_ORDER.length - 1
    ? PRACTICE_QUESTION_ORDER[currentPracticeIndex + 1]
    : null

  useEffect(() => {
    if (selectedOverviewBlok) {
      setExpandedBlok(selectedOverviewBlok)
      requestAnimationFrame(() => {
        const el = document.getElementById(`section-${selectedOverviewBlok}`)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } else if (lmeParam?.startsWith('blok5-week')) {
      setExpandedBlok('blok5')
    } else if (lmeParam?.startsWith('blok9-week')) {
      setExpandedBlok('blok9')
    } else if (lmeParam?.startsWith('blok10-week')) {
      setExpandedBlok('blok10')
    }
  }, [lmeParam, selectedOverviewBlok])

  if (isBlockedDirectLme) {
    return <Navigate to="/oefenvragen" replace />
  }

  const questions = useMemo(() => {
    if (lmeParam?.startsWith('blok-fouten-')) {
      const blokKey = lmeParam.replace('blok-fouten-', '')
      if (!progressUserId || !VALID_BLOK_KEYS.includes(blokKey)) return []
      const wrong = collectWrongAnsweredQuestionsForBlok(progressUserId, blokKey)
      const arr = [...wrong]
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
      return arr.map((item, idx) => ({ ...item, id: idx + 1 }))
    }
    if (isPersistedRandomPracticeMode(lmeParam)) {
      return sessionQuestions ?? []
    }
    const q = getPracticeQuestionsForLme(lmeParam)
    if (isRandomMode(lmeParam)) {
      const arr = [...q]
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
      return arr.map((item, idx) => ({ ...item, id: idx + 1 }))
    }
    return q
  }, [lmeParam, progressUserId, progressVersion, sessionQuestions])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [revealedAnswers, setRevealedAnswers] = useState({})
  const [explanations, setExplanations] = useState({})
  const [explanationRequests, setExplanationRequests] = useState({})
  const [progressHydrated, setProgressHydrated] = useState(false)

  useEffect(() => {
    if (progressUserId === null) {
      setProgressHydrated(false)
      return
    }

    if (isPersistedRandomPracticeMode(lmeParam)) {
      setProgressHydrated(false)
      const base = getPracticeQuestionsForLme(lmeParam)
      if (!base.length) {
        setSessionQuestions([])
        setQuestionOrder([])
        setCurrentQuestion(0)
        setSelectedAnswers({})
        setRevealedAnswers({})
        setExplanations({})
        setExplanationRequests({})
        setProgressHydrated(true)
        return
      }

      if (forceNewSession && isAccountProgressUser(progressUserId)) {
        clearPracticeProgress(progressUserId, lmeParam)
      }

      const canPersist = isAccountProgressUser(progressUserId)
      const saved = forceNewSession || !canPersist ? null : loadPracticeProgress(progressUserId, lmeParam)
      const { questions: built, questionOrder: order } = buildShuffledQuestions(base, saved)
      setSessionQuestions(built)
      setQuestionOrder(order)

      const maxIdx = Math.max(0, built.length - 1)
      if (saved?.questionOrder?.length === base.length) {
        setCurrentQuestion(
          typeof saved.currentQuestion === 'number'
            ? Math.min(Math.max(0, saved.currentQuestion), maxIdx)
            : 0,
        )
        setSelectedAnswers(
          saved.selectedAnswers && typeof saved.selectedAnswers === 'object'
            ? saved.selectedAnswers
            : {},
        )
        setRevealedAnswers(
          saved.revealedAnswers && typeof saved.revealedAnswers === 'object'
            ? saved.revealedAnswers
            : {},
        )
        setExplanations(
          saved.explanations && typeof saved.explanations === 'object' ? saved.explanations : {},
        )
        setExplanationRequests(
          saved.explanationRequests && typeof saved.explanationRequests === 'object'
            ? saved.explanationRequests
            : {},
        )
      } else {
        setCurrentQuestion(0)
        setSelectedAnswers({})
        setRevealedAnswers({})
        setExplanations({})
        setExplanationRequests({})
        if (canPersist) {
          savePracticeProgress(progressUserId, lmeParam, {
            v: 2,
            questionOrder: order,
            currentQuestion: 0,
            selectedAnswers: {},
            revealedAnswers: {},
            explanations: {},
            explanationRequests: {},
            updatedAt: Date.now(),
          })
        }
      }
      setProgressHydrated(true)
      return
    }

    setSessionQuestions(null)
    setQuestionOrder(null)

    if (!lmeParam || isRandomMode(lmeParam)) {
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
      setExplanationRequests(
        saved.explanationRequests && typeof saved.explanationRequests === 'object'
          ? saved.explanationRequests
          : {}
      )
    } else {
      setCurrentQuestion(0)
      setSelectedAnswers({})
      setRevealedAnswers({})
      setExplanations({})
      setExplanationRequests({})
    }
    setProgressHydrated(true)
  }, [progressUserId, lmeParam, questions.length, forceNewSession, progressVersion])

  useEffect(() => {
    if (!progressHydrated || progressUserId === null || !lmeParam) {
      return
    }

    if (isPersistedRandomPracticeMode(lmeParam)) {
      if (!questionOrder?.length || !isAccountProgressUser(progressUserId)) return
      const timer = setTimeout(() => {
        savePracticeProgress(progressUserId, lmeParam, {
          v: 2,
          questionOrder,
          currentQuestion,
          selectedAnswers,
          revealedAnswers,
          explanations,
          explanationRequests,
          updatedAt: Date.now(),
        })
      }, 400)
      return () => clearTimeout(timer)
    }

    if (isRandomMode(lmeParam)) {
      return
    }
    const timer = setTimeout(() => {
      savePracticeProgress(progressUserId, lmeParam, {
        v: 1,
        currentQuestion,
        selectedAnswers,
        revealedAnswers,
        explanations,
        explanationRequests,
      })
    }, 400)
    return () => clearTimeout(timer)
  }, [
    progressHydrated,
    progressUserId,
    lmeParam,
    questionOrder,
    currentQuestion,
    selectedAnswers,
    revealedAnswers,
    explanations,
    explanationRequests,
  ])

  useEffect(() => {
    const onCloudSynced = (event) => {
      if (!progressUserId || progressUserId === 'guest') return
      const syncedUid = event?.detail?.uid
      if (!syncedUid || syncedUid === progressUserId) {
        setProgressVersion((v) => v + 1)
      }
    }
    window.addEventListener('smartium-cloud-synced', onCloudSynced)
    return () => window.removeEventListener('smartium-cloud-synced', onCloudSynced)
  }, [progressUserId])

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
    // Award coins for a correct answer
    const q = questions.find(q => q.id === questionId)
    if (q && q.correctAnswer === letter) {
      awardCoins(COIN_REWARDS.CORRECT_PRACTICE_ANSWER, 'Goed beantwoord')
    }
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
    setExplanationRequests({})
    setCurrentQuestion(0)
    if (progressUserId && lmeParam && isPersistedRandomPracticeMode(lmeParam) && isAccountProgressUser(progressUserId)) {
      const base = getPracticeQuestionsForLme(lmeParam)
      const { questions: built, questionOrder: order } = buildShuffledQuestions(base, null)
      setSessionQuestions(built)
      setQuestionOrder(order)
      savePracticeProgress(progressUserId, lmeParam, {
        v: 2,
        questionOrder: order,
        currentQuestion: 0,
        selectedAnswers: {},
        revealedAnswers: {},
        explanations: {},
        explanationRequests: {},
        updatedAt: Date.now(),
      })
    } else if (progressUserId && lmeParam && !isRandomMode(lmeParam)) {
      clearPracticeProgress(progressUserId, lmeParam)
    }
  }

  const handleRequestExplanation = async (questionId) => {
    if (!hasPaidAccess) return
    if (!currentQ || questionId !== currentQ.id) return
    if (explanations[questionId]?.loading || explanations[questionId]?.text) return

    setExplanationRequests((prev) => ({ ...prev, [questionId]: true }))
    setExplanations((prev) => ({ ...prev, [questionId]: { loading: true } }))
    try {
      const ctx = buildPracticeContext(currentQ, selectedAnswers[questionId], lmeParam)
      const text = await fetchPracticeExplanation(ctx)
      setExplanations((prev) => ({ ...prev, [questionId]: { loading: false, text } }))
    } catch (err) {
      setExplanations((prev) => ({ ...prev, [questionId]: { loading: false, error: err?.message || 'Fout bij ophalen' } }))
    }
  }

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

  const lmeProgressById = useMemo(() => {
    if (!hasAccountProgress || !progressUserId) return {}
    const progressMap = {}

    for (const lmeId of PRACTICE_QUESTION_ORDER) {
      const questionsForLme = getPracticeQuestionsForLme(lmeId)
      if (!questionsForLme.length) continue
      const saved = loadPracticeProgress(progressUserId, lmeId)
      if (!saved || typeof saved !== 'object') continue

      const selected = saved.selectedAnswers && typeof saved.selectedAnswers === 'object'
        ? saved.selectedAnswers
        : {}
      const revealed = saved.revealedAnswers && typeof saved.revealedAnswers === 'object'
        ? saved.revealedAnswers
        : {}

      const total = questionsForLme.length
      const answered = questionsForLme.filter((q) => selected[q.id] !== undefined).length
      const revealedCount = questionsForLme.filter((q) => Boolean(revealed[q.id])).length
      const correct = questionsForLme.filter((q) => Boolean(revealed[q.id]) && selected[q.id] === q.correctAnswer).length
      const started = answered > 0 || (typeof saved.currentQuestion === 'number' && saved.currentQuestion > 0)
      if (!started && revealedCount === 0) continue

      progressMap[lmeId] = {
        started: true,
        completed: total > 0 && revealedCount >= total,
        answeredCount: answered,
        revealedCount,
        totalQuestions: total,
        correctCount: correct,
      }
    }

    return progressMap
  }, [hasAccountProgress, progressUserId, progressVersion, lmeParam])

  const wrongAnswersCountForForcedBlok = useMemo(() => {
    if (!forcedBlokKey || !hasAccountProgress || !progressUserId) return null
    return countWrongAnsweredQuestionsForBlok(progressUserId, forcedBlokKey)
  }, [forcedBlokKey, hasAccountProgress, progressUserId, progressVersion])

  const getSectionProgress = (items) => {
    let completedQuestions = 0
    let totalQuestions = 0
    for (const item of items) {
      if (item.type === 'simple') {
        const localTotal = getLmeQuestionCount(item)
        totalQuestions += localTotal
        const p = lmeProgressById[item.id]
        completedQuestions += p?.revealedCount ?? 0
      } else {
        const imageIds = getImagesFromMap(item.questionsMap).map((img) => img.id)
        for (const imgId of imageIds) {
          const fallbackTotal = getPracticeQuestionsForLme(imgId).length
          const p = lmeProgressById[imgId]
          totalQuestions += p?.totalQuestions ?? fallbackTotal
          completedQuestions += p?.revealedCount ?? 0
        }
      }
    }
    const statusLabel = completedQuestions === totalQuestions && totalQuestions > 0
      ? 'Af'
      : completedQuestions > 0
        ? 'Bezig'
        : 'Nog niet gestart'
    return { completedQuestions, totalQuestions, statusLabel }
  }

  const renderCourseModule = (lmeItem, lmeIndex) => {
    if (lmeItem.type === 'simple') {
      return (
        <PracticeCourseModuleLink
          key={lmeIndex}
          lmeItem={lmeItem}
          questionCount={getLmeQuestionCount(lmeItem)}
          showPremiumLocks={showPremiumLocks}
          isBlocked={isFreePlanBlockedLme}
          progress={lmeProgressById[lmeItem.id]}
          showProgress={hasAccountProgress}
        />
      )
    }

    return (
      <div key={lmeIndex} className="space-y-2 rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/70 dark:bg-slate-800/40 p-3">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200 py-1">
          <ClipboardCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>{lmeItem.name} ({getLmeQuestionCount(lmeItem)} vragen)</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {getImagesFromMap(lmeItem.questionsMap).map((img) => {
            const locked = showPremiumLocks && isFreePlanBlockedLme(img.id)
            const progress = lmeProgressById[img.id]
            return (
              <Link
                key={img.id}
                to={locked ? '/billing' : `/oefenvragen?lme=${img.id}`}
                className={`text-center px-3 py-2.5 rounded-lg border text-sm transition-all
                  ${locked
                    ? 'bg-slate-100 dark:bg-slate-900/40 border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400'
                    : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-emerald-400 dark:hover:border-emerald-500/50 hover:bg-emerald-50/80 dark:hover:bg-emerald-500/10 hover:text-emerald-900 dark:hover:text-emerald-300'}`}
              >
                <span className="inline-flex items-center gap-1.5">{img.name} {locked && <Lock className="w-3 h-3" />}</span>
                {hasAccountProgress && !locked && progress?.started && !progress?.completed && (
                  <span className="mt-1 block text-[11px] font-medium text-sky-700 dark:text-sky-300">
                    Bezig · {progress.revealedCount}/{progress.totalQuestions}
                  </span>
                )}
                {hasAccountProgress && !locked && progress?.completed && (
                  <span className="mt-1 block text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
                    Af · {progress.revealedCount}/{progress.totalQuestions} · {progress.correctCount} goed
                  </span>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    )
  }

  const renderCaseSections = (casus, blokKey, weekIdx, casusIdx) => {
    const { casusbijeenkomstItems, flankerendItems } = splitCasusModules(
      casus,
      FLANKEREND_MODULE_IDS_BY_CASE,
    )
    const sectionDefs = [
      { key: 'casusbijeenkomst', title: 'Casusbijeenkomst', items: casusbijeenkomstItems },
      { key: 'flankerend', title: 'Flankerend onderwijs', items: flankerendItems },
    ]
    const totalCasusQuestions = [...casusbijeenkomstItems, ...flankerendItems].reduce((sum, item) => sum + getLmeQuestionCount(item), 0)

    return (
      <div className="ml-0 sm:ml-2 space-y-3">
        {sectionDefs.map((section) => (
          section.items.length > 0 ? (
            <section key={section.key} className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {section.title}
                </h4>
                {hasAccountProgress && (() => {
                  const progress = getSectionProgress(section.items)
                  return (
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {progress.statusLabel} · {progress.completedQuestions}/{progress.totalQuestions}
                    </span>
                  )
                })()}
              </div>
              <div className="space-y-2">
                {section.items.map((lmeItem, lmeIndex) => renderCourseModule(lmeItem, `${section.key}-${lmeIndex}`))}
              </div>
            </section>
          ) : null
        ))}
        {totalCasusQuestions > 0 && (() => {
          const casusRandomFreeOk = isFreePlanCasusRandomPracticeUnlocked(blokKey, weekIdx, casusIdx)
          const casusRandomLocked = showPremiumLocks && !casusRandomFreeOk
          return (
            <Link
              to={casusRandomLocked ? '/billing' : `/oefenvragen?lme=${buildCasusRandomParam(blokKey, weekIdx, casusIdx)}`}
              className={`mt-2 flex items-center gap-2 px-3 py-2 rounded-lg border border-dashed text-sm transition-all ${casusRandomLocked ? 'border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-500' : 'border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400 hover:border-primary-400 dark:hover:border-primary-500 hover:text-primary-700 dark:hover:text-primary-400 hover:bg-primary-50/50 dark:hover:bg-primary-500/5'}`}
            >
              {casusRandomLocked ? <Lock className="w-3.5 h-3.5" /> : <RotateCcw className="w-3.5 h-3.5" />}
              <span>Oefen alle casusvragen ({totalCasusQuestions} vragen)</span>
            </Link>
          )
        })()}
      </div>
    )
  }

  return (
    <div className={waifuMode ? 'waifu-page-shell waifu-practice-page min-h-screen' : 'min-h-screen bg-gradient-to-br from-cream-50 via-white to-primary-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300'}>
      <Navbar />
      <div className="h-20" />

      <main className={`relative ${waifuMode ? 'z-[5]' : 'z-[2]'} container-custom ${lmeParam ? 'py-10 md:py-16' : 'py-8 md:py-12'}`}>
        {/* Back to Summary / Overzicht */}
        {lmeParam && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 md:mb-10 max-w-3xl mx-auto flex flex-wrap items-center justify-between gap-3"
          >
            <Link
              to={
                lmeParam?.startsWith('blok-fouten-')
                  ? `/oefenvragen-${lmeParam.replace('blok-fouten-', '')}`
                  : isRandomMode(lmeParam)
                    ? '/oefenvragen'
                    : `/summary?lme=${lmeParam}`
              }
              className="inline-flex items-center gap-2 text-navy-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">
                {lmeParam?.startsWith('blok-fouten-')
                  ? 'Terug naar dit blok'
                  : isRandomMode(lmeParam)
                    ? 'Terug naar overzicht'
                    : 'Terug naar samenvatting'}
              </span>
            </Link>
            {!isRandomMode(lmeParam) && !lmeParam?.startsWith('blok-fouten-') && (prevPracticeLme || nextPracticeLme) ? (
              <div className="flex items-center gap-2">
                {prevPracticeLme ? (
                  <Link
                    to={`/oefenvragen?lme=${prevPracticeLme}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-500/50 transition-colors text-sm"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Vorige module
                  </Link>
                ) : null}
                {nextPracticeLme ? (
                  <Link
                    to={`/oefenvragen?lme=${nextPracticeLme}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-500/50 transition-colors text-sm"
                  >
                    Volgende module
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                ) : null}
              </div>
            ) : null}
          </motion.div>
        )}

        {/* Title + cursusoverzicht (zelfde dark-mode patroon als Samenvattingen-index) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-center ${lmeParam ? 'mb-10 md:mb-14 max-w-3xl mx-auto space-y-4' : 'mb-8 max-w-3xl mx-auto'} ${waifuMode ? 'waifu-practice-inset waifu-practice-hero' : ''}`}
        >
          <h1
            className={`text-3xl font-bold tracking-tight ${lmeParam ? 'mb-3' : 'mb-1'} ${
              waifuMode ? 'waifu-practice-title' : 'text-slate-900 dark:text-slate-50'
            }`}
          >
            {getPracticeTitleForLme(lmeParam)}{' '}
            <span className={waifuMode ? 'text-pink-600' : 'text-accent-500 dark:text-accent-400'}>
              Oefenvragen {waifuMode ? '♡' : ''}
            </span>
          </h1>
          <p className={`text-sm max-w-lg mx-auto ${lmeParam ? 'leading-relaxed' : ''} ${waifuMode ? 'waifu-practice-subtitle' : 'text-slate-500 dark:text-slate-400'}`}>
            {getPracticeSubtitleForLme(lmeParam)}
          </p>
          {lmeParam?.startsWith('blok10-week2-casus-c04-diarree-aanhoudende-buikklachten') && (
            <Blok10Week2CasusC04DiarreeAanhoudendeBuikklachtenPracticeIntro />
          )}
          {lmeParam?.startsWith('blok10-week2-casus-c04-diarree-malabsorptie') && (
            <Blok10Week2CasusC04DiarreeMalabsorptiePracticeIntro />
          )}
          {lmeParam?.startsWith('blok10-week2-casus-c04-diarree-morbus-crohn') && (
            <Blok10Week2CasusC04DiarreeMorbusCrohnPracticeIntro />
          )}
          {lmeParam?.startsWith('blok10-week2-casus-c04-diarree-vertering-en-opname') && (
            <Blok10Week2CasusC04DiarreeVerteringEnOpnamePracticeIntro />
          )}
          {lmeParam?.startsWith('blok10-week5-casus-c09-obesitas-elke-arts-behandelt-obesitas') && (
            <Blok10Week5CasusC09ObesitasElkeArtsBehandeltObesitasPracticeIntro />
          )}
          {lmeParam?.startsWith('blok10-week5-casus-c09-obesitas-lichaamsbeweging') && (
            <Blok10Week5CasusC09ObesitasLichaamsbewegingPracticeIntro />
          )}
          {lmeParam?.startsWith(
            'blok10-week5-casus-c10-dm-type2-symptomen-pathofysiologie-diagnostiek-dm2',
          ) && <Blok10Week5CasusC10DmType2SymptomenPathofysiologieDiagnostiekDm2PracticeIntro />}
          {lmeParam?.startsWith(
            'blok10-week5-casus-c10-dm-type2-langetermijn-complicaties-diabetes',
          ) && <Blok10Week5CasusC10DmType2LangetermijnComplicatiesDiabetesPracticeIntro />}
          {lmeParam?.startsWith('blok10-week1-casus1-maagklachten-endoscopie-basis-en-bloedingen') && (
            <Blok10Week1Casus1MaagklachtenEndoscopieBasisEnBloedingenPracticeIntro />
          )}
          {lmeParam?.startsWith('blok10-week1-casus1-maagklachten-fysiologie-van-maagzuur') && (
            <Blok10Week1Casus1MaagklachtenFysiologieVanMaagzuurPracticeIntro />
          )}
          {lmeParam?.startsWith('blok10-week1-casus1-maagklachten-leefstijl-bij-reflux') && (
            <Blok10Week1Casus1MaagklachtenLeefstijlBijRefluxPracticeIntro />
          )}
          {lmeParam?.startsWith('blok10-week1-casus1-maagklachten-logistische-regressie-analyse') && (
            <Blok10Week1Casus1MaagklachtenLogistischeRegressieAnalysePracticeIntro />
          )}
          {lmeParam?.startsWith('blok10-week1-casus1-maagklachten-reflux-bij-kinderen') && (
            <Blok10Week1Casus1MaagklachtenRefluxBijKinderenPracticeIntro />
          )}
          {lmeParam?.startsWith('blok10-week1-casus1-maagklachten-lmo-kumar-clark-pathofysiologie-h-pylori') && (
            <Blok10Week1Casus1MaagklachtenLmoKumarClarkPathofysiologieHPyloriPracticeIntro />
          )}
          {lmeParam?.startsWith(
            'blok10-week1-casus1-maagklachten-lmv-h-pylori-zorgkosten-vanuit-een-bacterie',
          ) && <Blok10Week1Casus1MaagklachtenLmvHPyloriZorgkostenVanuitEenBacteriePracticeIntro />}
          {lmeParam?.startsWith('blok10-week1-casus1-maagklachten-lmv-ppi') && (
            <Blok10Week1Casus1MaagklachtenLmvPpiPracticeIntro />
          )}
          {lmeParam?.startsWith(
            'blok10-week1-casus2-passageklachten-lme-pre-maligne-bovenste-tractus-digestivus',
          ) && <Blok10Week1Casus2PassageklachtenLmePreMaligneBovensteTractusDigestivusPracticeIntro />}
          {lmeParam?.startsWith('blok10-week1-casus2-passageklachten-lme-chemoradiatie') && (
            <Blok10Week1Casus2PassageklachtenLmeChemoradiatiePracticeIntro />
          )}
          {lmeParam?.startsWith(
            'blok10-week1-casus2-passageklachten-lme-kindergerelateerde-ziekten',
          ) && <Blok10Week1Casus2PassageklachtenLmeKindergerelateerdeZiektenPracticeIntro />}
          {lmeParam?.startsWith(
            'blok10-week1-casus2-passageklachten-lme-motiliteit-van-de-bovenste-tractus-digestivus',
          ) && (
            <Blok10Week1Casus2PassageklachtenLmeMotiliteitVanDeBovensteTractusDigestivusPracticeIntro />
          )}
          {lmeParam?.startsWith(
            'blok10-week1-casus2-passageklachten-lmv-chirurgische-behandeling-van-aandoeningen-aan-de-bovenste-tractus-digestivus',
          ) && (
            <Blok10Week1Casus2PassageklachtenLmvChirurgischeBehandelingVanAandoeningenAanDeBovensteTractusDigestivusPracticeIntro />
          )}
          {lmeParam?.startsWith('blok10-week3-casus-c05-chronische-pancreatitis-pancreasfysiologie') && (
            <Blok10Week3CasusC05ChronischePancreatitisPancreasfysiologiePracticeIntro />
          )}
          {lmeParam?.startsWith(
            'blok10-week3-casus-c05-chronische-pancreatitis-acute-en-chronische-pancreatitis',
          ) && <Blok10Week3CasusC05ChronischePancreatitisAcuteEnChronischePancreatitisPracticeIntro />}
          {lmeParam?.startsWith('blok10-week3-casus-c05-chronische-pancreatitis-advanced-endoscopie-eus-ercp') && (
            <Blok10Week3CasusC05ChronischePancreatitisAdvancedEndoscopieEusErcpPracticeIntro />
          )}
          {lmeParam?.startsWith(
            'blok10-week3-casus-c05-chronische-pancreatitis-dieet-pancreatitis-pancreasenzymen',
          ) && <Blok10Week3CasusC05ChronischePancreatitisDieetPancreatitisPancreasenzymenPracticeIntro />}
          {lmeParam === 'blok5-week2-casus4-systemische-therapie-van-melanoom' && (
            <Blok5Week2Casus4SystemischeTherapieVanMelanoomPracticeIntro />
          )}
          {lmeParam === 'blok5-week5-casus9-bouw-en-functie-van-de-thymus' && (
            <Blok5Week5Casus9BouwEnFunctieVanDeThymusPracticeIntro />
          )}
          {lmeParam === 'blok5-week5-casus9-lmo-positieve-en-negatieve-selectie' && (
            <Blok5Week5Casus9LmoPositieveEnNegatieveSelectiePracticeIntro />
          )}
          {lmeParam === 'blok5-week5-casus9-lmo-voorbereiding-vo-ra-klinische-presentatie-en-immuunmechanismen' && (
            <Blok5Week5Casus9LmoVoorbereidingVoRaKlinischePresentatieEnImmuunmechanismenPracticeIntro />
          )}
          {lmeParam === 'blok5-week5-casus9-endocriene-auto-immuunziekten' && (
            <Blok5Week5Casus9EndocrieneAutoImmuunziektenPracticeIntro />
          )}
          {lmeParam === 'blok5-week5-casus9-pathogenese-auto-immuunziekten' && (
            <Blok5Week5Casus9PathogeneseAutoImmuunziektenPracticeIntro />
          )}
          {lmeParam === 'blok5-week5-casus9-lmv-introductie-auto-immuniteit-versus-auto-inflammatie' && (
            <Blok5Week5Casus9LmvIntroductieAutoImmuniteitVersusAutoInflammatiePracticeIntro />
          )}
          {lmeParam === 'blok5-week5-casus9-lmv-auto-immuniteit-als-bijwerking-bij-immunotherapie' && (
            <Blok5Week5Casus9LmvAutoImmuniteitAlsBijwerkingBijImmunotherapiePracticeIntro />
          )}
          {lmeParam === 'blok5-week5-casus9-lmv-patient-met-sle-samenvatting' && (
            <Blok5Week5Casus9LmvPatientMetSleSamenvattingPracticeIntro />
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
          {lmeParam === 'blok5-week4-casus8-lmv-verworven-stollingsstoornissen' && (
            <Blok5Week4Casus8LmvVerworvenStollingsstoornissenPracticeIntro />
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
          {lmeParam === 'blok5-week4-casus7-lmo-differentiaal-diagnostische-aanpak-zwelling-been' && (
            <Blok5Week4Casus7LmoDifferentiaalDiagnostischeAanpakZwellingBeenPracticeIntro />
          )}
          {lmeParam === 'blok5-week4-casus7-lmo-voorbereiding-vow-hoeveel-mag-een-levensjaar-kosten' && (
            <Blok5Week4Casus7LmoVoorbereidingVowHoeveelMagEenLevensjaarKostenPracticeIntro />
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
          {lmeParam === 'blok5-week5-casus11-lmo-importziekten' && (
            <Blok5Week5Casus11LmoImportziektenPracticeIntro />
          )}
          {lmeParam === 'blok5-week5-casus11-lmo-infecties-binnen-de-kinderoncologie' && (
            <Blok5Week5Casus11LmoInfectiesBinnenDeKinderoncologiePracticeIntro />
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
          {lmeParam === 'blok5-week7-casus14-lmo-wat-is-ai' && (
            <Blok5Week7Casus14LmoWatIsAiPracticeIntro />
          )}
          {lmeParam === 'blok5-week7-casus14-dermatoloog-in-je-broekzak' && (
            <Blok5Week7Casus14DermatoloogInJeBroekzakPracticeIntro />
          )}
          {lmeParam === 'blok5-week7-casus14-lmo-implementatie-in-de-dermatologische-praktijk' && (
            <Blok5Week7Casus14LmoImplementatieInDeDermatologischePraktijkPracticeIntro />
          )}
          {lmeParam === 'blok5-week7-casus14-lmo-ethiek-van-derma-apps' && (
            <Blok5Week7Casus14LmoEthiekVanDermaAppsPracticeIntro />
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
          {lmeParam === 'blok5-week8-casus15-lmo-voorbereiding-vow-palliatieve-zorg' && (
            <Blok5Week8Casus15LmoVoorbereidingVowPalliatieveZorgPracticeIntro />
          )}
          {!lmeParam && (
            <>
              {forcedBlokKey && (
                <div className="mb-6">
                  <Link
                    to="/oefenvragen"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <ChevronRight className="w-4 h-4 rotate-180" />
                    Terug naar alle blokken
                  </Link>
                </div>
              )}
              {!forcedBlokKey && (
                <>
                <div className="mt-8 space-y-10 text-left">
                  <section aria-labelledby="practice-index-ba1-heading">
                    <div className="mb-4 px-1 border-b border-slate-200/80 dark:border-slate-700/80 pb-3">
                      <h2 id="practice-index-ba1-heading" className="text-base font-bold text-slate-800 dark:text-slate-100">
                        Bachelorjaar 1
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Blokken 3, 4 en 5
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <Link to="/oefenvragen-blok3" className={`group rounded-2xl border border-slate-200/90 dark:border-slate-700/90 bg-white/90 dark:bg-slate-900/80 p-5 shadow-sm dark:shadow-black/30 hover:border-primary-400/70 transition-colors${waifuInset}`}>
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-primary-100 dark:bg-primary-500/20">
                            <GraduationCap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                          </div>
                          <div className="min-w-0">
                            <h2 className="font-bold text-slate-900 dark:text-slate-100">{practiceQuestionsCourseStructure.blok3.name}</h2>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{formatPracticeBlokSubtitle(practiceQuestionsCourseStructure.blok3)}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary-500 ml-auto" />
                        </div>
                      </Link>
                      <Link to="/oefenvragen-blok4" className={`group rounded-2xl border border-slate-200/90 dark:border-slate-700/90 bg-white/90 dark:bg-slate-900/80 p-5 shadow-sm dark:shadow-black/30 hover:border-indigo-400/70 transition-colors${waifuInset}`}>
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-500/20">
                            <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div className="min-w-0">
                            <h2 className="font-bold text-slate-900 dark:text-slate-100">{practiceQuestionsCourseStructure.blok4.name}</h2>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{formatPracticeBlokSubtitle(practiceQuestionsCourseStructure.blok4)}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 ml-auto" />
                        </div>
                      </Link>
                      <Link to="/oefenvragen-blok5" className={`group rounded-2xl border border-slate-200/90 dark:border-slate-700/90 bg-white/90 dark:bg-slate-900/80 p-5 shadow-sm dark:shadow-black/30 hover:border-rose-400/70 transition-colors sm:col-span-2${waifuInset}`}>
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-rose-100 dark:bg-rose-500/20">
                            <Sparkles className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                          </div>
                          <div className="min-w-0">
                            <h2 className="font-bold text-slate-900 dark:text-slate-100">{practiceQuestionsCourseStructure.blok5.name}</h2>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{formatPracticeBlokSubtitle(practiceQuestionsCourseStructure.blok5)}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-rose-500 ml-auto" />
                        </div>
                      </Link>
                    </div>
                  </section>

                  <section aria-labelledby="practice-index-ba2-heading">
                    <div className="mb-4 px-1 border-b border-slate-200/80 dark:border-slate-700/80 pb-3">
                      <h2 id="practice-index-ba2-heading" className="text-base font-bold text-slate-800 dark:text-slate-100">
                        Bachelorjaar 2
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Blok 9 en Blok 10
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <Link to="/oefenvragen-blok9" className={`group rounded-2xl border border-slate-200/90 dark:border-slate-700/90 bg-white/90 dark:bg-slate-900/80 p-5 shadow-sm dark:shadow-black/30 hover:border-teal-400/70 transition-colors${waifuInset}`}>
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-teal-100 dark:bg-teal-500/20">
                            <Activity className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                          </div>
                          <div className="min-w-0">
                            <h2 className="font-bold text-slate-900 dark:text-slate-100">{practiceQuestionsCourseStructure.blok9.name}</h2>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{formatPracticeBlokSubtitle(practiceQuestionsCourseStructure.blok9)}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-500 ml-auto" />
                        </div>
                      </Link>
                      <Link to="/oefenvragen-blok10" className={`group rounded-2xl border border-slate-200/90 dark:border-slate-700/90 bg-white/90 dark:bg-slate-900/80 p-5 shadow-sm dark:shadow-black/30 hover:border-violet-400/70 transition-colors${waifuInset}`}>
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-violet-100 dark:bg-violet-500/20">
                            <FlaskConical className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                          </div>
                          <div className="min-w-0">
                            <h2 className="font-bold text-slate-900 dark:text-slate-100">{practiceQuestionsCourseStructure.blok10.name}</h2>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{formatPracticeBlokSubtitle(practiceQuestionsCourseStructure.blok10)}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-violet-500 ml-auto" />
                        </div>
                      </Link>
                    </div>
                  </section>
                </div>
                <div className="mt-10 max-w-3xl mx-auto text-left">
                  <PracticeMultiBlokSelector
                    showPremiumLocks={showPremiumLocks}
                    progressUserId={progressUserId}
                    hasAccountProgress={hasAccountProgress}
                    isLoggedIn={Boolean(user?.uid)}
                    refreshKey={lmeParam ?? 'overview'}
                    waifuMode={waifuMode}
                  />
                </div>
                </>
              )}
              {forcedBlokKey && (
            <>
            <div className="mt-8 space-y-4 text-left">
              {/* Blok 3 */}
              {forcedBlokKey === 'blok3' && (
              <div id="section-blok3" className={`bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 scroll-mt-24${waifuInset}`}>
                <button
                  type="button"
                  onClick={() => {
                    if (forcedBlokKey) return
                    setExpandedBlok(expandedBlok === 'blok3' ? null : 'blok3')
                  }}
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
                  {!forcedBlokKey && (
                    <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform ${expandedBlok === 'blok3' ? 'rotate-180' : ''}`} />
                  )}
                </button>
                <AnimatePresence>
                  {(forcedBlokKey === 'blok3' || expandedBlok === 'blok3') && (
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
                                {renderCaseSections(casus, 'blok3', weekIndex, casusIndex)}
                              </div>
                            ))}
                          </div>
                        ))}
                        <Link
                          to={showPremiumLocks ? '/billing' : `/oefenvragen?lme=${buildBlokRandomParam('blok3')}`}
                          className={`mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed text-sm font-medium transition-all ${showPremiumLocks ? 'border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-500' : 'border-primary-300 dark:border-primary-600/50 text-primary-700 dark:text-primary-400 hover:border-primary-500 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-500/10'}`}
                        >
                          {showPremiumLocks ? <Lock className="w-4 h-4" /> : <RotateCcw className="w-4 h-4" />}
                          Oefen alle vragen van Blok 3
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              )}

              {/* Blok 4 */}
              {forcedBlokKey === 'blok4' && (
              <div id="section-blok4" className={`bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 scroll-mt-24${waifuInset}`}>
                <button
                  type="button"
                  onClick={() => {
                    if (forcedBlokKey) return
                    setExpandedBlok(expandedBlok === 'blok4' ? null : 'blok4')
                  }}
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
                  {!forcedBlokKey && (
                    <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform ${expandedBlok === 'blok4' ? 'rotate-180' : ''}`} />
                  )}
                </button>
                <AnimatePresence>
                  {(forcedBlokKey === 'blok4' || expandedBlok === 'blok4') && (
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
                                {renderCaseSections(casus, 'blok4', weekIndex, casusIndex)}
                              </div>
                            ))}
                          </div>
                        ))}
                        <Link
                          to={showPremiumLocks ? '/billing' : `/oefenvragen?lme=${buildBlokRandomParam('blok4')}`}
                          className={`mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed text-sm font-medium transition-all ${showPremiumLocks ? 'border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-500' : 'border-indigo-300 dark:border-indigo-600/50 text-indigo-700 dark:text-indigo-400 hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/10'}`}
                        >
                          {showPremiumLocks ? <Lock className="w-4 h-4" /> : <RotateCcw className="w-4 h-4" />}
                          Oefen alle vragen van Blok 4
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              )}

              {/* Blok 5 */}
              {forcedBlokKey === 'blok5' && (
              <div id="section-blok5" className={`bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 scroll-mt-24${waifuInset}`}>
                <button
                  type="button"
                  onClick={() => {
                    if (forcedBlokKey) return
                    setExpandedBlok(expandedBlok === 'blok5' ? null : 'blok5')
                  }}
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
                  {!forcedBlokKey && (
                    <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform ${expandedBlok === 'blok5' ? 'rotate-180' : ''}`} />
                  )}
                </button>
                <AnimatePresence>
                  {(forcedBlokKey === 'blok5' || expandedBlok === 'blok5') && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-t border-slate-100 dark:border-slate-800/80"
                    >
                      <div className="px-5 pb-5 pt-1 bg-slate-50/50 dark:bg-slate-950/40">
                        <BlokWeekoverzichtPanel
                          title="Weekoverzicht blok 5 — BA1 2025–26"
                          pdfFileName="weekoverzicht-blok5-ba1-25-26.pdf"
                        />
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
                                {renderCaseSections(casus, 'blok5', weekIndex, casusIndex)}
                              </div>
                            ))}
                          </div>
                        ))}
                        <Link
                          to={showPremiumLocks ? '/billing' : `/oefenvragen?lme=${buildBlokRandomParam('blok5')}`}
                          className={`mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed text-sm font-medium transition-all ${showPremiumLocks ? 'border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-500' : 'border-rose-300 dark:border-rose-600/50 text-rose-700 dark:text-rose-400 hover:border-rose-500 dark:hover:border-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10'}`}
                        >
                          {showPremiumLocks ? <Lock className="w-4 h-4" /> : <RotateCcw className="w-4 h-4" />}
                          Oefen alle vragen van Blok 5
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              )}

              {/* Blok 9 */}
              {forcedBlokKey === 'blok9' && (
              <div id="section-blok9" className={`bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 scroll-mt-24${waifuInset}`}>
                <button
                  type="button"
                  onClick={() => {
                    if (forcedBlokKey) return
                    setExpandedBlok(expandedBlok === 'blok9' ? null : 'blok9')
                  }}
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
                  {!forcedBlokKey && (
                    <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform ${expandedBlok === 'blok9' ? 'rotate-180' : ''}`} />
                  )}
                </button>
                <AnimatePresence>
                  {(forcedBlokKey === 'blok9' || expandedBlok === 'blok9') && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-t border-slate-100 dark:border-slate-800/80"
                    >
                      <div className="px-5 pb-5 pt-1 bg-slate-50/50 dark:bg-slate-950/40">
                        <BlokWeekoverzichtPanel
                          title="Weekoverzicht blok 9 — BA2 2025–26"
                          pdfFileName="weekoverzicht-blok9-ba2-25-26.pdf"
                        />
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
                                {renderCaseSections(casus, 'blok9', weekIndex, casusIndex)}
                              </div>
                            ))}
                          </div>
                        ))}
                        <Link
                          to={showPremiumLocks ? '/billing' : `/oefenvragen?lme=${buildBlokRandomParam('blok9')}`}
                          className={`mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed text-sm font-medium transition-all ${showPremiumLocks ? 'border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-500' : 'border-teal-300 dark:border-teal-600/50 text-teal-700 dark:text-teal-400 hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-500/10'}`}
                        >
                          {showPremiumLocks ? <Lock className="w-4 h-4" /> : <RotateCcw className="w-4 h-4" />}
                          Oefen alle vragen van Blok 9
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              )}

              {/* Blok 10 */}
              {forcedBlokKey === 'blok10' && (
              <div id="section-blok10" className={`bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 scroll-mt-24${waifuInset}`}>
                <button
                  type="button"
                  onClick={() => {
                    if (forcedBlokKey) return
                    setExpandedBlok(expandedBlok === 'blok10' ? null : 'blok10')
                  }}
                  className="w-full flex items-center justify-between p-5 hover:bg-slate-50/90 dark:hover:bg-slate-800/80 transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-violet-100 dark:bg-violet-500/30 rounded-xl">
                      <FlaskConical className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                        {practiceQuestionsCourseStructure.blok10.name}
                      </h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {formatPracticeBlokSubtitle(practiceQuestionsCourseStructure.blok10)}
                      </p>
                    </div>
                  </div>
                  {!forcedBlokKey && (
                    <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform ${expandedBlok === 'blok10' ? 'rotate-180' : ''}`} />
                  )}
                </button>
                <AnimatePresence>
                  {(forcedBlokKey === 'blok10' || expandedBlok === 'blok10') && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-t border-slate-100 dark:border-slate-800/80"
                    >
                      <div className="px-5 pb-5 pt-1 bg-slate-50/50 dark:bg-slate-950/40">
                        {practiceQuestionsCourseStructure.blok10.weeks.map((week, weekIndex) => (
                          <div key={weekIndex} className="border-l-2 border-slate-200 dark:border-slate-600 pl-5 ml-5">
                            <div className="flex items-center gap-3 mb-4 -ml-7">
                              <div className="w-3 h-3 rounded-full bg-violet-500 dark:bg-violet-400 border-4 border-white dark:border-slate-950 shadow-sm ring-2 ring-violet-500/20 dark:ring-violet-400/30" />
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
                                {renderCaseSections(casus, 'blok10', weekIndex, casusIndex)}
                              </div>
                            ))}
                          </div>
                        ))}
                        <Link
                          to={showPremiumLocks ? '/billing' : `/oefenvragen?lme=${buildBlokRandomParam('blok10')}`}
                          className={`mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed text-sm font-medium transition-all ${showPremiumLocks ? 'border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-500' : 'border-violet-300 dark:border-violet-600/50 text-violet-700 dark:text-violet-400 hover:border-violet-500 dark:hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-violet-500/10'}`}
                        >
                          {showPremiumLocks ? <Lock className="w-4 h-4" /> : <RotateCcw className="w-4 h-4" />}
                          Oefen alle vragen van Blok 10
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              )}
            </div>
            <div className="mt-6 max-w-3xl mx-auto">
              <Link
                to={showPremiumLocks ? '/billing' : `/oefenvragen?lme=${buildBlokWrongAnswersParam(forcedBlokKey)}`}
                className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition-colors ${
                  showPremiumLocks
                    ? 'border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-500'
                    : 'border-dashed border-amber-300/80 dark:border-amber-600/50 text-amber-900 dark:text-amber-200/90 bg-amber-50/80 dark:bg-amber-950/25 hover:border-amber-400 dark:hover:border-amber-500'
                }`}
              >
                {showPremiumLocks ? <Lock className="w-4 h-4 shrink-0" /> : <XCircle className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />}
                <span className="text-left font-medium">
                  Oefen alle foute antwoorden van dit blok
                  {wrongAnswersCountForForcedBlok != null && (
                    <span className="block font-normal text-slate-600 dark:text-slate-400 mt-0.5">
                      {wrongAnswersCountForForcedBlok === 0
                        ? 'Nog geen opgeslagen foute antwoorden — maak eerst oefenvragen met zichtbare uitslag.'
                        : `${wrongAnswersCountForForcedBlok} vraag${wrongAnswersCountForForcedBlok === 1 ? '' : 'en'} in willekeurige volgorde`}
                    </span>
                  )}
                </span>
              </Link>
            </div>
            </>
              )}
            </>
          )}
        </motion.div>

        {lmeParam &&
          isRandomMode(lmeParam) &&
          totalQuestions === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-3xl mx-auto mb-10 rounded-2xl border border-navy-100 dark:border-slate-600 bg-white/90 dark:bg-slate-800/50 px-6 py-8 text-center${waifuInset}`}
          >
            <p className="text-navy-700 dark:text-slate-300 font-medium">
              {lmeParam?.startsWith('blok-fouten-')
                ? 'Er zijn nog geen foute antwoorden om te oefenen voor dit blok.'
                : 'Er zijn nu geen vragen beschikbaar in deze sessie.'}
            </p>
            <p className="mt-2 text-sm text-navy-500 dark:text-slate-500">
              {lmeParam?.startsWith('blok-fouten-')
                ? 'Beantwoord oefenvragen en bekijk de uitslag; foute antwoorden worden hier verzameld.'
                : 'Probeer het later opnieuw of kies een andere module.'}
            </p>
          </motion.div>
        )}

        {lmeParam &&
          !isRandomMode(lmeParam) &&
          totalQuestions === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-3xl mx-auto mb-10 rounded-2xl border border-navy-100 dark:border-slate-600 bg-white/90 dark:bg-slate-800/50 px-6 py-8 text-center${waifuInset}`}
          >
            <p className="text-navy-700 dark:text-slate-300 font-medium">
              Voor dit onderdeel staan er nog geen meerkeuzevragen in de dataset.
            </p>
            <p className="mt-2 text-sm text-navy-500 dark:text-slate-500">
              Zodra het oefenvragen-document is aangevuld, verschijnen ze hier automatisch.
            </p>
          </motion.div>
        )}

        {/* Progress Bar + vragen (alleen tonen bij gekozen LME of random modes met vragen) */}
        {lmeParam && totalQuestions > 0 && (
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
            <div className={`bg-white dark:bg-slate-800/50 rounded-3xl shadow-soft-lg border border-navy-100 dark:border-slate-600 overflow-hidden${waifuInset}`}>
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

                {revealedAnswers[currentQ.id] && !explanationRequests[currentQ.id] && !explanations[currentQ.id] && (
                  hasPaidAccess ? (
                    <button
                      type="button"
                      onClick={() => handleRequestExplanation(currentQ.id)}
                      className="mt-4 inline-flex items-center rounded-lg border border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800/60 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-primary-400 dark:hover:border-primary-500/60 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      Uitleg antwoord
                    </button>
                  ) : (
                    <Link
                      to="/billing"
                      className="mt-4 inline-flex items-center gap-2 rounded-lg border border-amber-300/80 dark:border-amber-500/40 bg-amber-50/80 dark:bg-amber-900/20 px-3 py-2 text-sm font-medium text-amber-800 dark:text-amber-300 hover:border-amber-400 dark:hover:border-amber-400/60 transition-colors"
                    >
                      <Lock className="w-4 h-4" />
                      Uitleg antwoord (Premium)
                    </Link>
                  )
                )}

                {revealedAnswers[currentQ.id] && currentQ.modelAnswer && (
                  <div
                    className={
                      lmeParam?.includes('-lmv-')
                        ? 'mt-6 rounded-xl border border-orange-200 bg-orange-50/80 dark:bg-orange-950/40 dark:border-orange-700/60 p-4'
                        : 'mt-6 rounded-xl border border-sky-200 bg-sky-50/80 dark:bg-sky-950/40 dark:border-sky-700/60 p-4'
                    }
                  >
                    <p
                      className={
                        lmeParam?.includes('-lmv-')
                          ? 'text-[10px] font-semibold uppercase tracking-wide text-orange-800 dark:text-orange-300 mb-2'
                          : 'text-[10px] font-semibold uppercase tracking-wide text-sky-800 dark:text-sky-300 mb-2'
                      }
                    >
                      Modelantwoord
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      {currentQ.modelAnswer}
                    </p>
                  </div>
                )}

                {hasPaidAccess && revealedAnswers[currentQ.id] &&
                  (
                    explanationRequests[currentQ.id] ||
                    explanations[currentQ.id]
                  ) && (
                  <div className="mt-6 rounded-lg border border-slate-200/90 dark:border-slate-700/90 bg-slate-50/70 dark:bg-slate-900/40 p-4">
                    {isRandomMode(lmeParam) && (
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
        {lmeParam && !isRandomMode(lmeParam) && (prevPracticeLme || nextPracticeLme) && (
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

