import {
  BookOpen, LayoutList, Shield, ListOrdered, AlertTriangle, BarChart3, FileWarning,
  AlertCircle, MessageCircle, GitBranch, GitMerge, Layers, Lightbulb, ClipboardList,
  Users, Forward, Glasses, Video, Hexagon, ArrowRight, Stethoscope, Building2, HelpCircle
} from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'
import Image01IntroductieSummary from './Image01IntroductieSummary'
import Image02MenuSummary from './Image02MenuSummary'
import Image03SafetyISafetyIISummary from './Image03SafetyISafetyIISummary'
import Image04StappenMedicatieprocesSummary from './Image04StappenMedicatieprocesSummary'
import Image05FoutenMedicatieprocesSummary from './Image05FoutenMedicatieprocesSummary'
import Image06DefinitiesSummary from './Image06DefinitiesSummary'
import Image07StudiesSummary from './Image07StudiesSummary'
import Image08MeldenSummary from './Image08MeldenSummary'
import Image09ToedienfoutSummary from './Image09ToedienfoutSummary'
import Image10SecondVictimAnalyserenSummary from './Image10SecondVictimAnalyserenSummary'
import Image11PrismaSummary from './Image11PrismaSummary'
import Image12PrismaBijnaFoutSummary from './Image12PrismaBijnaFoutSummary'
import Image13PrismaCategoriserenSummary from './Image13PrismaCategoriserenSummary'
import Image14OplossingenOrganisatiefalenSummary from './Image14OplossingenOrganisatiefalenSummary'
import Image15PRISummary from './Image15PRISummary'
import Image16SwissCheeseSummary from './Image16SwissCheeseSummary'
import Image17SecondVictimIntroSummary from './Image17SecondVictimIntroSummary'
import Image18PriDefinitieSummary from './Image18PriDefinitieSummary'
import Image19SafetyIIBrilSummary from './Image19SafetyIIBrilSummary'
import Image20FramWaiWadSummary from './Image20FramWaiWadSummary'
import Image21FramTheorieSummary from './Image21FramTheorieSummary'
import Image22FramOpbouwSummary from './Image22FramOpbouwSummary'
import Image23FramVoorbeeldSummary from './Image23FramVoorbeeldSummary'
import Image24FramCasusSummary from './Image24FramCasusSummary'
import Image25FramPraktijkSummary from './Image25FramPraktijkSummary'
import Image26QuizSafetyISummary from './Image26QuizSafetyISummary'
import Image27QuizSafetyIISummary from './Image27QuizSafetyIISummary'
import Image28QuizFramSummary from './Image28QuizFramSummary'
import Image29QuizPrismaSummary from './Image29QuizPrismaSummary'
import Image30QuizFysiekeBarriereSummary from './Image30QuizFysiekeBarriereSummary'
import Image31QuizSysteemgerichtSummary from './Image31QuizSysteemgerichtSummary'
import Image32QuizSwissCheeseSummary from './Image32QuizSwissCheeseSummary'
import Image33QuizSecondVictimSummary from './Image33QuizSecondVictimSummary'
import Image34QuizPrismaBijnaSummary from './Image34QuizPrismaBijnaSummary'
import Image35QuizFramVariatieSummary from './Image35QuizFramVariatieSummary'

const Casus12Lme3PatientMedicatieveiligheidSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Introductie en leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Menu', icon: LayoutList },
    { id: 'sect-03', title: 'Safety I en Safety II', icon: Shield },
    { id: 'sect-04', title: 'Stappen medicatieproces', icon: ListOrdered },
    { id: 'sect-05', title: 'Fouten binnen het medicatieproces', icon: AlertTriangle },
    { id: 'sect-06', title: 'Definities medicatiefouten', icon: BookOpen },
    { id: 'sect-07', title: 'Studies naar medicatiefouten', icon: BarChart3 },
    { id: 'sect-08', title: 'Wat gebeurt er na een incident? – Melden', icon: FileWarning },
    { id: 'sect-09', title: 'Medicatiefout met grootste kans op patiënt', icon: AlertCircle },
    { id: 'sect-10', title: 'Erover praten en analyseren', icon: MessageCircle },
    { id: 'sect-11', title: 'PRISMA-analyse', icon: GitBranch },
    { id: 'sect-12', title: 'PRISMA bij bijna-fout', icon: GitMerge },
    { id: 'sect-13', title: 'Organisatiefalen vs menselijk falen', icon: Layers },
    { id: 'sect-14', title: 'Oplossingen voor organisatiefalen', icon: Lightbulb },
    { id: 'sect-15', title: 'Prospectieve Risico-Inventarisatie', icon: ClipboardList },
    { id: 'sect-16', title: 'Proces- en systeemdenken', icon: Layers },
    { id: 'sect-17', title: 'First en second victim', icon: Users },
    { id: 'sect-18', title: 'PRI – vooruitkijken', icon: Forward },
    { id: 'sect-19', title: 'De Safety II-bril', icon: Glasses },
    { id: 'sect-20', title: 'Safety II en FRAM – WAI vs WAD', icon: Video },
    { id: 'sect-21', title: 'FRAM – De theorie', icon: BookOpen },
    { id: 'sect-22', title: 'FRAM – De opbouw', icon: Hexagon },
    { id: 'sect-23', title: 'FRAM – Output als input', icon: ArrowRight },
    { id: 'sect-24', title: 'FRAM – Casus', icon: Stethoscope },
    { id: 'sect-25', title: 'FRAM in de praktijk', icon: Building2 },
    { id: 'sect-26', title: 'Quiz – Safety I', icon: ClipboardList },
    { id: 'sect-27', title: 'Quiz – Safety II', icon: ClipboardList },
    { id: 'sect-28', title: 'Quiz – FRAM', icon: ClipboardList },
    { id: 'sect-29', title: 'Quiz – PRISMA', icon: ClipboardList },
    { id: 'sect-30', title: 'Quiz – Fysieke barrière', icon: ClipboardList },
    { id: 'sect-31', title: 'Quiz – Systeemgerichte aanpak', icon: ClipboardList },
    { id: 'sect-32', title: 'Quiz – Swiss Cheese Model', icon: ClipboardList },
    { id: 'sect-33', title: 'Quiz – Second victim', icon: ClipboardList },
    { id: 'sect-34', title: 'Quiz – PRISMA bij bijna-incident', icon: ClipboardList },
    { id: 'sect-35', title: 'Quiz – FRAM en dagelijkse variaties', icon: ClipboardList },
  ]

  return (
    <SummaryLayout
      title="Patient- en medicatieveiligheid"
      description="Complete samenvatting van de module over patient- en medicatieveiligheid, Safety I/II, PRISMA, PRI en FRAM."
      caseLabel="Week 6 Casus 12 Lijninfecties & resistenties LME 3"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Image01IntroductieSummary standalone={false} /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Image02MenuSummary standalone={false} /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Image03SafetyISafetyIISummary standalone={false} /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Image04StappenMedicatieprocesSummary standalone={false} /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Image05FoutenMedicatieprocesSummary standalone={false} /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Image06DefinitiesSummary standalone={false} /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Image07StudiesSummary standalone={false} /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Image08MeldenSummary standalone={false} /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Image09ToedienfoutSummary standalone={false} /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Image10SecondVictimAnalyserenSummary standalone={false} /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Image11PrismaSummary standalone={false} /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Image12PrismaBijnaFoutSummary standalone={false} /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Image13PrismaCategoriserenSummary standalone={false} /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Image14OplossingenOrganisatiefalenSummary standalone={false} /></section>
      <section id="sect-15" className="scroll-mt-24 mb-12"><Image15PRISummary standalone={false} /></section>
      <section id="sect-16" className="scroll-mt-24 mb-12"><Image16SwissCheeseSummary standalone={false} /></section>
      <section id="sect-17" className="scroll-mt-24 mb-12"><Image17SecondVictimIntroSummary standalone={false} /></section>
      <section id="sect-18" className="scroll-mt-24 mb-12"><Image18PriDefinitieSummary standalone={false} /></section>
      <section id="sect-19" className="scroll-mt-24 mb-12"><Image19SafetyIIBrilSummary standalone={false} /></section>
      <section id="sect-20" className="scroll-mt-24 mb-12"><Image20FramWaiWadSummary standalone={false} /></section>
      <section id="sect-21" className="scroll-mt-24 mb-12"><Image21FramTheorieSummary standalone={false} /></section>
      <section id="sect-22" className="scroll-mt-24 mb-12"><Image22FramOpbouwSummary standalone={false} /></section>
      <section id="sect-23" className="scroll-mt-24 mb-12"><Image23FramVoorbeeldSummary standalone={false} /></section>
      <section id="sect-24" className="scroll-mt-24 mb-12"><Image24FramCasusSummary standalone={false} /></section>
      <section id="sect-25" className="scroll-mt-24 mb-12"><Image25FramPraktijkSummary standalone={false} /></section>
      <section id="sect-26" className="scroll-mt-24 mb-12"><Image26QuizSafetyISummary standalone={false} /></section>
      <section id="sect-27" className="scroll-mt-24 mb-12"><Image27QuizSafetyIISummary standalone={false} /></section>
      <section id="sect-28" className="scroll-mt-24 mb-12"><Image28QuizFramSummary standalone={false} /></section>
      <section id="sect-29" className="scroll-mt-24 mb-12"><Image29QuizPrismaSummary standalone={false} /></section>
      <section id="sect-30" className="scroll-mt-24 mb-12"><Image30QuizFysiekeBarriereSummary standalone={false} /></section>
      <section id="sect-31" className="scroll-mt-24 mb-12"><Image31QuizSysteemgerichtSummary standalone={false} /></section>
      <section id="sect-32" className="scroll-mt-24 mb-12"><Image32QuizSwissCheeseSummary standalone={false} /></section>
      <section id="sect-33" className="scroll-mt-24 mb-12"><Image33QuizSecondVictimSummary standalone={false} /></section>
      <section id="sect-34" className="scroll-mt-24 mb-12"><Image34QuizPrismaBijnaSummary standalone={false} /></section>
      <section id="sect-35" className="scroll-mt-24 mb-12"><Image35QuizFramVariatieSummary standalone={false} /></section>
    </SummaryLayout>
  )
}

export default Casus12Lme3PatientMedicatieveiligheidSummary
