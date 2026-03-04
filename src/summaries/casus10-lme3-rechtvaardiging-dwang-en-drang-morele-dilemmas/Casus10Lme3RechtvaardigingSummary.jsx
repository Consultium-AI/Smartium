import {
  BookOpen, LayoutList, Scale, User, Baby, Users, Stethoscope, FileText,
  HelpCircle, BarChart3, Layers, MessageCircle, Heart, Shield, Target, Activity
} from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'
import Image01IntroductieSummary from './Image01IntroductieSummary'
import Image02MenuSummary from './Image02MenuSummary'
import Image03DwangEnDrangSummary from './Image03DwangEnDrangSummary'
import Image04EthischeRechtvaardigingSummary from './Image04EthischeRechtvaardigingSummary'
import Image05AutonomiePaternalismeSummary from './Image05AutonomiePaternalismeSummary'
import Image06KindEnOudersSummary from './Image06KindEnOudersSummary'
import Image07GroepsimmuniteitSummary from './Image07GroepsimmuniteitSummary'
import Image08CasusSummary from './Image08CasusSummary'
import Image09RolArtsSummary from './Image09RolArtsSummary'
import Image10ProportioneelSummary from './Image10ProportioneelSummary'
import Image11SubsidiariteitSummary from './Image11SubsidiariteitSummary'
import Image12UtilismeSummary from './Image12UtilismeSummary'
import Image13DeontologieSummary from './Image13DeontologieSummary'
import Image14VertrouwenSummary from './Image14VertrouwenSummary'
import Image15ReflectieSummary from './Image15ReflectieSummary'
import Image16KwetsbarenSummary from './Image16KwetsbarenSummary'
import Image17QuizSummary from './Image17QuizSummary'
import Image18ToegangsbewijsSummary from './Image18ToegangsbewijsSummary'
import Image19SlotSummary from './Image19SlotSummary'
import Image20InformatieVoorlichtingSummary from './Image20InformatieVoorlichtingSummary'
import Image21BezwarenOudersSummary from './Image21BezwarenOudersSummary'
import Image22MedischeContraIndicatiesSummary from './Image22MedischeContraIndicatiesSummary'
import Image23MaatschappelijkDebatSummary from './Image23MaatschappelijkDebatSummary'
import Image24WetgevingSummary from './Image24WetgevingSummary'
import Image25KinderrechtenSummary from './Image25KinderrechtenSummary'
import Image26RisicocommunicatieSummary from './Image26RisicocommunicatieSummary'
import Image27AlternatievenSummary from './Image27AlternatievenSummary'
import Image28GezamenlijkeBesluitvormingSummary from './Image28GezamenlijkeBesluitvormingSummary'
import Image29EmpathieSummary from './Image29EmpathieSummary'
import Image30GrenzenSummary from './Image30GrenzenSummary'
import Image31VerantwoordelijkheidSummary from './Image31VerantwoordelijkheidSummary'
import Image32SlotSummary from './Image32SlotSummary'
import Image33SlotSummary from './Image33SlotSummary'
import Image34SlotSummary from './Image34SlotSummary'
import Image35SlotSummary from './Image35SlotSummary'

const Casus10Lme3RechtvaardigingSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Introductie en leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Menu', icon: LayoutList },
    { id: 'sect-03', title: 'Dwang en drang', icon: Scale },
    { id: 'sect-04', title: 'Ethische rechtvaardiging', icon: Scale },
    { id: 'sect-05', title: 'Autonomie en paternalisme', icon: User },
    { id: 'sect-06', title: 'Kind en ouders', icon: Baby },
    { id: 'sect-07', title: 'Groepsimmuniteit', icon: Users },
    { id: 'sect-08', title: 'Casus', icon: Stethoscope },
    { id: 'sect-09', title: 'Rol van de arts', icon: Stethoscope },
    { id: 'sect-10', title: 'Proportioneel ingrijpen', icon: Scale },
    { id: 'sect-11', title: 'Subsidiariteit', icon: Layers },
    { id: 'sect-12', title: 'Utilisme', icon: BarChart3 },
    { id: 'sect-13', title: 'Deontologie', icon: Scale },
    { id: 'sect-14', title: 'Vertrouwen', icon: Heart },
    { id: 'sect-15', title: 'Reflectie', icon: MessageCircle },
    { id: 'sect-16', title: 'Kwetsbaren', icon: Shield },
    { id: 'sect-17', title: 'Quiz', icon: HelpCircle },
    { id: 'sect-18', title: 'Toegangsbewijs', icon: FileText },
    { id: 'sect-19', title: 'Slot', icon: BookOpen },
    { id: 'sect-20', title: 'Informatie en voorlichting', icon: BookOpen },
    { id: 'sect-21', title: 'Bezwaren ouders', icon: User },
    { id: 'sect-22', title: 'Medische contra-indicaties', icon: Stethoscope },
    { id: 'sect-23', title: 'Maatschappelijk debat', icon: MessageCircle },
    { id: 'sect-24', title: 'Wetgeving', icon: Scale },
    { id: 'sect-25', title: 'Kinderrechten', icon: Users },
    { id: 'sect-26', title: 'Risicocommunicatie', icon: HelpCircle },
    { id: 'sect-27', title: 'Alternatieven', icon: Layers },
    { id: 'sect-28', title: 'Gezamenlijke besluitvorming', icon: Users },
    { id: 'sect-29', title: 'Empathie', icon: Heart },
    { id: 'sect-30', title: 'Grenzen', icon: Shield },
    { id: 'sect-31', title: 'Verantwoordelijkheid', icon: Target },
    { id: 'sect-32', title: 'Slot', icon: Activity },
    { id: 'sect-33', title: 'Slot', icon: Target },
    { id: 'sect-34', title: 'Slot', icon: Layers },
    { id: 'sect-35', title: 'Slot', icon: Shield },
  ]

  return (
    <SummaryLayout
      title="Rechtvaardiging dwang en drang – Morele dilemma's bij vaccineren"
      description="Complete samenvatting van de module over ethische rechtvaardiging van dwang en drang bij vaccinatie."
      caseLabel="Week 5 Casus 10 Vaccinatie LME 3"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Image01IntroductieSummary standalone={false} /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Image02MenuSummary standalone={false} /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Image03DwangEnDrangSummary standalone={false} /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Image04EthischeRechtvaardigingSummary standalone={false} /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Image05AutonomiePaternalismeSummary standalone={false} /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Image06KindEnOudersSummary standalone={false} /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Image07GroepsimmuniteitSummary standalone={false} /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Image08CasusSummary standalone={false} /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Image09RolArtsSummary standalone={false} /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Image10ProportioneelSummary standalone={false} /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Image11SubsidiariteitSummary standalone={false} /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Image12UtilismeSummary standalone={false} /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Image13DeontologieSummary standalone={false} /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Image14VertrouwenSummary standalone={false} /></section>
      <section id="sect-15" className="scroll-mt-24 mb-12"><Image15ReflectieSummary standalone={false} /></section>
      <section id="sect-16" className="scroll-mt-24 mb-12"><Image16KwetsbarenSummary standalone={false} /></section>
      <section id="sect-17" className="scroll-mt-24 mb-12"><Image17QuizSummary standalone={false} /></section>
      <section id="sect-18" className="scroll-mt-24 mb-12"><Image18ToegangsbewijsSummary standalone={false} /></section>
      <section id="sect-19" className="scroll-mt-24 mb-12"><Image19SlotSummary standalone={false} /></section>
      <section id="sect-20" className="scroll-mt-24 mb-12"><Image20InformatieVoorlichtingSummary standalone={false} /></section>
      <section id="sect-21" className="scroll-mt-24 mb-12"><Image21BezwarenOudersSummary standalone={false} /></section>
      <section id="sect-22" className="scroll-mt-24 mb-12"><Image22MedischeContraIndicatiesSummary standalone={false} /></section>
      <section id="sect-23" className="scroll-mt-24 mb-12"><Image23MaatschappelijkDebatSummary standalone={false} /></section>
      <section id="sect-24" className="scroll-mt-24 mb-12"><Image24WetgevingSummary standalone={false} /></section>
      <section id="sect-25" className="scroll-mt-24 mb-12"><Image25KinderrechtenSummary standalone={false} /></section>
      <section id="sect-26" className="scroll-mt-24 mb-12"><Image26RisicocommunicatieSummary standalone={false} /></section>
      <section id="sect-27" className="scroll-mt-24 mb-12"><Image27AlternatievenSummary standalone={false} /></section>
      <section id="sect-28" className="scroll-mt-24 mb-12"><Image28GezamenlijkeBesluitvormingSummary standalone={false} /></section>
      <section id="sect-29" className="scroll-mt-24 mb-12"><Image29EmpathieSummary standalone={false} /></section>
      <section id="sect-30" className="scroll-mt-24 mb-12"><Image30GrenzenSummary standalone={false} /></section>
      <section id="sect-31" className="scroll-mt-24 mb-12"><Image31VerantwoordelijkheidSummary standalone={false} /></section>
      <section id="sect-32" className="scroll-mt-24 mb-12"><Image32SlotSummary standalone={false} /></section>
      <section id="sect-33" className="scroll-mt-24 mb-12"><Image33SlotSummary standalone={false} /></section>
      <section id="sect-34" className="scroll-mt-24 mb-12"><Image34SlotSummary standalone={false} /></section>
      <section id="sect-35" className="scroll-mt-24 mb-12"><Image35SlotSummary standalone={false} /></section>
    </SummaryLayout>
  )
}

export default Casus10Lme3RechtvaardigingSummary
