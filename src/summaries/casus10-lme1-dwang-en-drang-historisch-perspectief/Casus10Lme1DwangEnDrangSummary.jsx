import {
  BookOpen, LayoutList, History, FileText, AlertTriangle, Pause, Shield,
  HelpCircle, Scale, Users, Activity, UserX, Church, BookHeart, Heart, MessageCircle,
  Stethoscope, Pill, Bug, Link2
} from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'
import Image01IntroductieSummary from './Image01IntroductieSummary'
import Image02MenuSummary from './Image02MenuSummary'
import Image03IntroductieGeschiedenisSummary from './Image03IntroductieGeschiedenisSummary'
import Image04IndirectePlichtSummary from './Image04IndirectePlichtSummary'
import Image05BijwerkingenSummary from './Image05BijwerkingenSummary'
import Image06PlichtOpPauzeSummary from './Image06PlichtOpPauzeSummary'
import Image07NationaleVeiligheidSummary from './Image07NationaleVeiligheidSummary'
import Image08QuizFactorenDalingSummary from './Image08QuizFactorenDalingSummary'
import Image09WettelijkGeregeldeDrangSummary from './Image09WettelijkGeregeldeDrangSummary'
import Image10NietIedereenDoetMeeSummary from './Image10NietIedereenDoetMeeSummary'
import Image11SpanningenElspeetSummary from './Image11SpanningenElspeetSummary'
import Image12RijksvaccinatieprogrammaSummary from './Image12RijksvaccinatieprogrammaSummary'
import Image13WeigeraarsSummary from './Image13WeigeraarsSummary'
import Image14ZwartekousenkerkSummary from './Image14ZwartekousenkerkSummary'
import Image15GewetensbezwaarSummary from './Image15GewetensbezwaarSummary'
import Image16QuizReligieuzeBezwarenSummary from './Image16QuizReligieuzeBezwarenSummary'
import Image17WorstelingWeigeraarsSummary from './Image17WorstelingWeigeraarsSummary'
import Image18ReflectieCommunicatieSummary from './Image18ReflectieCommunicatieSummary'
import Image19WorstelingArtsenSummary from './Image19WorstelingArtsenSummary'
import Image20KlontjesPepernotenSummary from './Image20KlontjesPepernotenSummary'
import Image21WorstelingSamenlevingSummary from './Image21WorstelingSamenlevingSummary'
import Image22EnNuCoronaSummary from './Image22EnNuCoronaSummary'
import Image23ReflectieGrapperhausSummary from './Image23ReflectieGrapperhausSummary'
import Image24MaatschappelijkeControversieSummary from './Image24MaatschappelijkeControversieSummary'
import Image25SlotSummary from './Image25SlotSummary'

const Casus10Lme1DwangEnDrangSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Introductie en leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Menu', icon: LayoutList },
    { id: 'sect-03', title: 'Geschiedenis', icon: History },
    { id: 'sect-04', title: 'Indirecte plicht', icon: FileText },
    { id: 'sect-05', title: 'Bijwerkingen', icon: AlertTriangle },
    { id: 'sect-06', title: 'De plicht op pauze', icon: Pause },
    { id: 'sect-07', title: 'Nationale veiligheid', icon: Shield },
    { id: 'sect-08', title: 'Factoren daling vaccinatiegraad', icon: HelpCircle },
    { id: 'sect-09', title: 'Wettelijk geregelde drang', icon: Scale },
    { id: 'sect-10', title: 'Niet iedereen doet mee', icon: Users },
    { id: 'sect-11', title: 'Spanningen Elspeet', icon: AlertTriangle },
    { id: 'sect-12', title: 'Rijksvaccinatieprogramma', icon: Activity },
    { id: 'sect-13', title: 'Weigeraars', icon: UserX },
    { id: 'sect-14', title: 'Zwartekousenkerk en Bible Belt', icon: Church },
    { id: 'sect-15', title: 'Gewetensbezwaar', icon: BookHeart },
    { id: 'sect-16', title: 'Quiz religieuze bezwaren', icon: HelpCircle },
    { id: 'sect-17', title: 'Worsteling weigeraars', icon: Heart },
    { id: 'sect-18', title: 'Reflectie communicatie', icon: MessageCircle },
    { id: 'sect-19', title: 'Worsteling artsen', icon: Stethoscope },
    { id: 'sect-20', title: 'Klontjes als pepernoten', icon: Pill },
    { id: 'sect-21', title: 'Worsteling samenleving', icon: Users },
    { id: 'sect-22', title: 'En nu: Corona 2020', icon: Bug },
    { id: 'sect-23', title: 'Reflectie Grapperhaus', icon: Scale },
    { id: 'sect-24', title: 'Maatschappelijke controversie', icon: Link2 },
    { id: 'sect-25', title: 'Slot', icon: BookOpen },
  ]

  return (
    <SummaryLayout
      title="Dwang en drang in historisch perspectief"
      description="Complete samenvatting van de module over dwang en drang bij vaccinatie in historisch perspectief."
      caseLabel="Week 5 Casus 10 Vaccinatie LME 1"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Image01IntroductieSummary standalone={false} /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Image02MenuSummary standalone={false} /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Image03IntroductieGeschiedenisSummary standalone={false} /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Image04IndirectePlichtSummary standalone={false} /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Image05BijwerkingenSummary standalone={false} /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Image06PlichtOpPauzeSummary standalone={false} /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Image07NationaleVeiligheidSummary standalone={false} /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Image08QuizFactorenDalingSummary standalone={false} /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Image09WettelijkGeregeldeDrangSummary standalone={false} /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Image10NietIedereenDoetMeeSummary standalone={false} /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Image11SpanningenElspeetSummary standalone={false} /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Image12RijksvaccinatieprogrammaSummary standalone={false} /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Image13WeigeraarsSummary standalone={false} /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Image14ZwartekousenkerkSummary standalone={false} /></section>
      <section id="sect-15" className="scroll-mt-24 mb-12"><Image15GewetensbezwaarSummary standalone={false} /></section>
      <section id="sect-16" className="scroll-mt-24 mb-12"><Image16QuizReligieuzeBezwarenSummary standalone={false} /></section>
      <section id="sect-17" className="scroll-mt-24 mb-12"><Image17WorstelingWeigeraarsSummary standalone={false} /></section>
      <section id="sect-18" className="scroll-mt-24 mb-12"><Image18ReflectieCommunicatieSummary standalone={false} /></section>
      <section id="sect-19" className="scroll-mt-24 mb-12"><Image19WorstelingArtsenSummary standalone={false} /></section>
      <section id="sect-20" className="scroll-mt-24 mb-12"><Image20KlontjesPepernotenSummary standalone={false} /></section>
      <section id="sect-21" className="scroll-mt-24 mb-12"><Image21WorstelingSamenlevingSummary standalone={false} /></section>
      <section id="sect-22" className="scroll-mt-24 mb-12"><Image22EnNuCoronaSummary standalone={false} /></section>
      <section id="sect-23" className="scroll-mt-24 mb-12"><Image23ReflectieGrapperhausSummary standalone={false} /></section>
      <section id="sect-24" className="scroll-mt-24 mb-12"><Image24MaatschappelijkeControversieSummary standalone={false} /></section>
      <section id="sect-25" className="scroll-mt-24 mb-12"><Image25SlotSummary standalone={false} /></section>
    </SummaryLayout>
  )
}

export default Casus10Lme1DwangEnDrangSummary
