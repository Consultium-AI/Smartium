import {
  BookOpen,
  CircleDot,
  Table2,
  AlertOctagon,
  Users,
  Layers,
  CalendarClock,
  ClipboardCheck,
  Scissors,
  HeartPulse,
  TableProperties,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsEenAneurysma from './Sect02WatIsEenAneurysma'
import Sect03VormenEnAnatomischeLigging from './Sect03VormenEnAnatomischeLigging'
import Sect04RisicofactorenDegeneratiefAAA from './Sect04RisicofactorenDegeneratiefAAA'
import Sect05WaaromScreeningNietOpHeleBevolking from './Sect05WaaromScreeningNietOpHeleBevolking'
import Sect06ManagementVanEenPatientMetAAA from './Sect06ManagementVanEenPatientMetAAA'
import Sect07FollowUpEnBeleid from './Sect07FollowUpEnBeleid'
import Sect08WanneerIsBehandelingNodig from './Sect08WanneerIsBehandelingNodig'
import Sect09KeuzeVanBehandelingEVAROfOpen from './Sect09KeuzeVanBehandelingEVAROfOpen'
import Sect10NazorgEnCardiovasculairRisicomanagement from './Sect10NazorgEnCardiovasculairRisicomanagement'
import Sect11SamenvattendeTabelBeleid from './Sect11SamenvattendeTabelBeleid'
import Sect12Samenvatting from './Sect12Samenvatting'

const Blok9Week2Casus4DilaterendVaatlijdenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is een aneurysma?', icon: CircleDot },
    { id: 'sect-03', title: 'Vormen van aneurysmata en anatomische ligging', icon: Table2 },
    { id: 'sect-04', title: 'Risicofactoren voor een degeneratief AAA', icon: AlertOctagon },
    { id: 'sect-05', title: 'Waarom screening niet op de hele bevolking?', icon: Users },
    { id: 'sect-06', title: 'Management van een patiënt met AAA', icon: Layers },
    { id: 'sect-07', title: 'Waarom follow-up zo belangrijk is', icon: CalendarClock },
    { id: 'sect-08', title: 'Wanneer is behandeling nodig?', icon: ClipboardCheck },
    { id: 'sect-09', title: 'Keuze van behandeling: EVAR of open chirurgie', icon: Scissors },
    { id: 'sect-10', title: 'Nazorg en cardiovasculair risicomanagement', icon: HeartPulse },
    { id: 'sect-11', title: 'Samenvattende tabel voor het hele beleid', icon: TableProperties },
    { id: 'sect-12', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Dilaterend vaatlijden"
      description="Een aneurysma is een lokale, blijvende verwijding van een arterie met een diameter van minstens 50% groter dan de normale vaatdiameter. Bij een aneurysma van de aorta abdominalis spreken we van een verwijding van de abdominale aorta tot een diameter van ≥ 3,0 cm. Deze verwijding zit meestal infrarenaal, dus onder de aftakking van de arteriae renales."
      caseLabel="Week 2 · Casus 4: De vrouw die maar 20 meter kan lopen"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok9-week2-casus4-dilaterend-vaatlijden"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02WatIsEenAneurysma /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03VormenEnAnatomischeLigging /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04RisicofactorenDegeneratiefAAA /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05WaaromScreeningNietOpHeleBevolking /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06ManagementVanEenPatientMetAAA /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07FollowUpEnBeleid /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08WanneerIsBehandelingNodig /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09KeuzeVanBehandelingEVAROfOpen /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10NazorgEnCardiovasculairRisicomanagement /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11SamenvattendeTabelBeleid /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week2Casus4DilaterendVaatlijdenSummary
