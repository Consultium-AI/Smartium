import {
  BookOpen,
  CircleHelp,
  Table2,
  PieChart,
  Route,
  TrendingDown,
  HeartPulse,
  Target,
  Pill,
  Stethoscope,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsHetTabel1 from './Sect02WatIsHetTabel1'
import Sect03Tabel2EnAandacht from './Sect03Tabel2EnAandacht'
import Sect04HoeVaak from './Sect04HoeVaak'
import Sect05Oorzaken from './Sect05Oorzaken'
import Sect06Progressie from './Sect06Progressie'
import Sect07Gevolgen from './Sect07Gevolgen'
import Sect08Behandeldoelen from './Sect08Behandeldoelen'
import Sect09MedicatieTabel3 from './Sect09MedicatieTabel3'
import Sect10BloeddrukConsultatie from './Sect10BloeddrukConsultatie'
import Sect11Samenvatting from './Sect11Samenvatting'

const Blok9Week1Casus2ChronischeNierschadeSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Chronische nierschade: wat is het?', icon: CircleHelp },
    { id: 'sect-03', title: 'Indeling nierfunctie en albuminurie', icon: Table2 },
    { id: 'sect-04', title: 'Hoe vaak komt chronische nierschade voor?', icon: PieChart },
    { id: 'sect-05', title: 'Waardoor ontstaat chronische nierschade?', icon: Route },
    { id: 'sect-06', title: 'Hoe verloopt de progressie?', icon: TrendingDown },
    { id: 'sect-07', title: 'Welke gevolgen heeft chronische nierschade?', icon: HeartPulse },
    { id: 'sect-08', title: 'Wat zijn de behandeldoelen?', icon: Target },
    { id: 'sect-09', title: 'Hoe bereik je de behandeldoelen?', icon: Pill },
    { id: 'sect-10', title: 'Bloeddruk, consultatie en conservatieve behandeling', icon: Stethoscope },
    { id: 'sect-11', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Chronische nierschade"
      description="Chronische nierschade, vaak afgekort als CNS en internationaal CKD genoemd, betekent dat de nieren langdurige schade hebben. Voor de definitie geldt dat deze nierschade minimaal 3 maanden aanwezig moet zijn. In de praktijk is dat soms lastig exact vast te stellen, omdat je meestal niet weet hoe het “gezonde beginpunt” eruitzag. Toch wordt die tijdsgrens als uitgangspunt gebruikt."
      caseLabel="Week 1 · Casus 2: Patiënt met chronische nierschade"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02WatIsHetTabel1 /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03Tabel2EnAandacht /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04HoeVaak /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05Oorzaken /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06Progressie /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07Gevolgen /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08Behandeldoelen /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09MedicatieTabel3 /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10BloeddrukConsultatie /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week1Casus2ChronischeNierschadeSummary
