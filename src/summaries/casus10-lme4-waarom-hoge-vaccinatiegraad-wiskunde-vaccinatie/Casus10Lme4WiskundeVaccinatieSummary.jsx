import {
  BookOpen, LayoutList, Calculator, ArrowRightLeft, ClipboardCheck, Calendar,
  GitBranch, Hash, TrendingUp, BarChart3, Activity, ListChecks, Target, Shield,
  Users, AlertTriangle, CheckCircle, Dna, History
} from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'
import Image01IntroductieSummary from './Image01IntroductieSummary'
import Image02InleidingSummary from './Image02InleidingSummary'
import Image03MenuSummary from './Image03MenuSummary'
import Image04WiskundigeModellenSummary from './Image04WiskundigeModellenSummary'
import Image05TransmissieSummary from './Image05TransmissieSummary'
import Image06QuizDirecteTransmissieSummary from './Image06QuizDirecteTransmissieSummary'
import Image07RVPFeedbackSummary from './Image07RVPFeedbackSummary'
import Image08BasisreproductiegetalSummary from './Image08BasisreproductiegetalSummary'
import Image09DefinitieR0Summary from './Image09DefinitieR0Summary'
import Image10TransmissieboomR0Summary from './Image10TransmissieboomR0Summary'
import Image11SchattenR0Summary from './Image11SchattenR0Summary'
import Image12EnkeleWaardenR0Summary from './Image12EnkeleWaardenR0Summary'
import Image13SIRModelSummary from './Image13SIRModelSummary'
import Image14SIRKermackSummary from './Image14SIRKermackSummary'
import Image15SIRVergelijkingenSummary from './Image15SIRVergelijkingenSummary'
import Image16SIRTrendsSummary from './Image16SIRTrendsSummary'
import Image17SimplificatiesSummary from './Image17SimplificatiesSummary'
import Image18ModelVariantenSummary from './Image18ModelVariantenSummary'
import Image19FormuleR0IntroSummary from './Image19FormuleR0IntroSummary'
import Image20AfleidenR0Summary from './Image20AfleidenR0Summary'
import Image21MaatregelenR0Summary from './Image21MaatregelenR0Summary'
import Image22ContactmatrixSummary from './Image22ContactmatrixSummary'
import Image23EffectiefRSummary from './Image23EffectiefRSummary'
import Image24DefinitieReSummary from './Image24DefinitieReSummary'
import Image25EersteGolfSummary from './Image25EersteGolfSummary'
import Image26BerekenenRSummary from './Image26BerekenenRSummary'
import Image27KritischeVaccinatiegraadSummary from './Image27KritischeVaccinatiegraadSummary'
import Image28RisicosLageVaccinatiegraadSummary from './Image28RisicosLageVaccinatiegraadSummary'
import Image29SlotSummary from './Image29SlotSummary'
import Image30SlotSummary from './Image30SlotSummary'
import Image31ImperfectVaccinSummary from './Image31ImperfectVaccinSummary'
import Image32RisicosMazelenSummary from './Image32RisicosMazelenSummary'
import Image33RisicosCRSSummary from './Image33RisicosCRSSummary'
import Image34SlotSummary from './Image34SlotSummary'
import Image35HPVIntroSummary from './Image35HPVIntroSummary'
import Image36HPVModelSummary from './Image36HPVModelSummary'
import Image37SlotSummary from './Image37SlotSummary'
import Image38SlotSummary from './Image38SlotSummary'

const Casus10Lme4WiskundeVaccinatieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Introductie en leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Inleiding', icon: BookOpen },
    { id: 'sect-03', title: 'Menu', icon: LayoutList },
    { id: 'sect-04', title: 'Waarom wiskundige modellen?', icon: Calculator },
    { id: 'sect-05', title: 'Directe en indirecte transmissie', icon: ArrowRightLeft },
    { id: 'sect-06', title: 'Quiz – Directe transmissie', icon: ClipboardCheck },
    { id: 'sect-07', title: 'RVP en transmissie', icon: Calendar },
    { id: 'sect-08', title: 'Het basisreproductiegetal R₀', icon: GitBranch },
    { id: 'sect-09', title: 'Definitie R₀', icon: Hash },
    { id: 'sect-10', title: 'R₀ uit de transmissieboom', icon: Calculator },
    { id: 'sect-11', title: 'Het schatten van R₀', icon: TrendingUp },
    { id: 'sect-12', title: 'Enkele R₀-waarden', icon: BarChart3 },
    { id: 'sect-13', title: 'Het SIR-model', icon: GitBranch },
    { id: 'sect-14', title: 'Kermack & McKendrick', icon: History },
    { id: 'sect-15', title: 'SIR-vergelijkingen', icon: Calculator },
    { id: 'sect-16', title: 'Trends over de tijd', icon: TrendingUp },
    { id: 'sect-17', title: 'Simplificaties van het SIR-model', icon: ListChecks },
    { id: 'sect-18', title: 'Varianten van het SIR-model', icon: GitBranch },
    { id: 'sect-19', title: 'Formule voor R₀', icon: Calculator },
    { id: 'sect-20', title: 'Afleiden van R₀', icon: Calculator },
    { id: 'sect-21', title: 'Maatregelen en R₀', icon: Shield },
    { id: 'sect-22', title: 'Contactmatrix', icon: Users },
    { id: 'sect-23', title: 'Het effectief reproductiegetal R', icon: TrendingUp },
    { id: 'sect-24', title: 'Definitie Re', icon: Hash },
    { id: 'sect-25', title: 'De eerste COVID-19 golf', icon: Activity },
    { id: 'sect-26', title: 'Berekenen van R', icon: Calculator },
    { id: 'sect-27', title: 'Groepsimmuniteit', icon: Target },
    { id: 'sect-28', title: 'Formule kritische vaccinatiegraad', icon: AlertTriangle },
    { id: 'sect-29', title: 'Groepsimmuniteit – scenario\'s', icon: CheckCircle },
    { id: 'sect-30', title: 'Waarom uitbraken ondanks groepsimmuniteit?', icon: CheckCircle },
    { id: 'sect-31', title: 'Imperfect vaccin', icon: Calculator },
    { id: 'sect-32', title: 'Risico\'s van een te lage vaccinatiegraad', icon: AlertTriangle },
    { id: 'sect-33', title: 'Congenitaal rubellasyndroom', icon: AlertTriangle },
    { id: 'sect-34', title: 'Slot', icon: CheckCircle },
    { id: 'sect-35', title: 'Complexere modellen: HPV', icon: Dna },
    { id: 'sect-36', title: 'HPV-model – Levensjaren gewonnen', icon: BarChart3 },
    { id: 'sect-37', title: 'Slot', icon: CheckCircle },
    { id: 'sect-38', title: 'Slot', icon: CheckCircle },
  ]

  return (
    <SummaryLayout
      title="Waarom een hoge vaccinatiegraad? De wiskunde van vaccinatie"
      description="Complete samenvatting van de module over de wiskundige modellen achter vaccinatie en groepsimmuniteit."
      caseLabel="Week 5 Casus 10 Vaccinatie LME 4"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Image01IntroductieSummary standalone={false} /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Image02InleidingSummary standalone={false} /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Image03MenuSummary standalone={false} /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Image04WiskundigeModellenSummary standalone={false} /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Image05TransmissieSummary standalone={false} /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Image06QuizDirecteTransmissieSummary standalone={false} /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Image07RVPFeedbackSummary standalone={false} /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Image08BasisreproductiegetalSummary standalone={false} /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Image09DefinitieR0Summary standalone={false} /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Image10TransmissieboomR0Summary standalone={false} /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Image11SchattenR0Summary standalone={false} /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Image12EnkeleWaardenR0Summary standalone={false} /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Image13SIRModelSummary standalone={false} /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Image14SIRKermackSummary standalone={false} /></section>
      <section id="sect-15" className="scroll-mt-24 mb-12"><Image15SIRVergelijkingenSummary standalone={false} /></section>
      <section id="sect-16" className="scroll-mt-24 mb-12"><Image16SIRTrendsSummary standalone={false} /></section>
      <section id="sect-17" className="scroll-mt-24 mb-12"><Image17SimplificatiesSummary standalone={false} /></section>
      <section id="sect-18" className="scroll-mt-24 mb-12"><Image18ModelVariantenSummary standalone={false} /></section>
      <section id="sect-19" className="scroll-mt-24 mb-12"><Image19FormuleR0IntroSummary standalone={false} /></section>
      <section id="sect-20" className="scroll-mt-24 mb-12"><Image20AfleidenR0Summary standalone={false} /></section>
      <section id="sect-21" className="scroll-mt-24 mb-12"><Image21MaatregelenR0Summary standalone={false} /></section>
      <section id="sect-22" className="scroll-mt-24 mb-12"><Image22ContactmatrixSummary standalone={false} /></section>
      <section id="sect-23" className="scroll-mt-24 mb-12"><Image23EffectiefRSummary standalone={false} /></section>
      <section id="sect-24" className="scroll-mt-24 mb-12"><Image24DefinitieReSummary standalone={false} /></section>
      <section id="sect-25" className="scroll-mt-24 mb-12"><Image25EersteGolfSummary standalone={false} /></section>
      <section id="sect-26" className="scroll-mt-24 mb-12"><Image26BerekenenRSummary standalone={false} /></section>
      <section id="sect-27" className="scroll-mt-24 mb-12"><Image27KritischeVaccinatiegraadSummary standalone={false} /></section>
      <section id="sect-28" className="scroll-mt-24 mb-12"><Image28RisicosLageVaccinatiegraadSummary standalone={false} /></section>
      <section id="sect-29" className="scroll-mt-24 mb-12"><Image29SlotSummary standalone={false} /></section>
      <section id="sect-30" className="scroll-mt-24 mb-12"><Image30SlotSummary standalone={false} /></section>
      <section id="sect-31" className="scroll-mt-24 mb-12"><Image31ImperfectVaccinSummary standalone={false} /></section>
      <section id="sect-32" className="scroll-mt-24 mb-12"><Image32RisicosMazelenSummary standalone={false} /></section>
      <section id="sect-33" className="scroll-mt-24 mb-12"><Image33RisicosCRSSummary standalone={false} /></section>
      <section id="sect-34" className="scroll-mt-24 mb-12"><Image34SlotSummary standalone={false} /></section>
      <section id="sect-35" className="scroll-mt-24 mb-12"><Image35HPVIntroSummary standalone={false} /></section>
      <section id="sect-36" className="scroll-mt-24 mb-12"><Image36HPVModelSummary standalone={false} /></section>
      <section id="sect-37" className="scroll-mt-24 mb-12"><Image37SlotSummary standalone={false} /></section>
      <section id="sect-38" className="scroll-mt-24 mb-12"><Image38SlotSummary standalone={false} /></section>
    </SummaryLayout>
  )
}

export default Casus10Lme4WiskundeVaccinatieSummary
