import {
  BookOpen,
  Activity,
  HeartPulse,
  Droplets,
  AlertTriangle,
  LayoutGrid,
  TrendingDown,
  Zap,
  Ban,
  Share2,
  Syringe,
  Bug,
  Stethoscope,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsShock from './Sect02WatIsShock'
import Sect03ComponentenVanDeCirculatie from './Sect03ComponentenVanDeCirculatie'
import Sect04AdequatePerfusieEnLactaat from './Sect04AdequatePerfusieEnLactaat'
import Sect05SymptomenVanShock from './Sect05SymptomenVanShock'
import Sect06DeVierTypenShock from './Sect06DeVierTypenShock'
import Sect07HypovolemischeShock from './Sect07HypovolemischeShock'
import Sect08CardiogeneShock from './Sect08CardiogeneShock'
import Sect09ObstructieveShock from './Sect09ObstructieveShock'
import Sect10DistributieveShock from './Sect10DistributieveShock'
import Sect11Anafylaxie from './Sect11Anafylaxie'
import Sect12Sepsis from './Sect12Sepsis'
import Sect13BehandelingVanShockInHetAlgemeen from './Sect13BehandelingVanShockInHetAlgemeen'
import Sect14Samenvatting from './Sect14Samenvatting'

const Blok9Week4Casus8ShockSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is shock?', icon: Activity },
    { id: 'sect-03', title: 'De componenten van de circulatie', icon: HeartPulse },
    { id: 'sect-04', title: 'Adequate perfusie en lactaat', icon: Droplets },
    { id: 'sect-05', title: 'Symptomen van shock', icon: AlertTriangle },
    { id: 'sect-06', title: 'De 4 typen shock', icon: LayoutGrid },
    { id: 'sect-07', title: 'Hypovolemische shock', icon: TrendingDown },
    { id: 'sect-08', title: 'Cardiogene shock', icon: Zap },
    { id: 'sect-09', title: 'Obstructieve shock', icon: Ban },
    { id: 'sect-10', title: 'Distributieve shock', icon: Share2 },
    { id: 'sect-11', title: 'Anafylaxie', icon: Syringe },
    { id: 'sect-12', title: 'Sepsis', icon: Bug },
    { id: 'sect-13', title: 'Behandeling van shock in het algemeen', icon: Stethoscope },
    { id: 'sect-14', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Shock"
      description="Shock is een syndroom waarbij de effectieve weefselperfusie verstoord is. Daardoor ontstaat een disbalans tussen zuurstofaanbod en zuurstofverbruik, wat leidt tot een abnormaal weefselmetabolisme."
      caseLabel="Week 4 · Casus 8: Een leuk feestje"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02WatIsShock /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03ComponentenVanDeCirculatie /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04AdequatePerfusieEnLactaat /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05SymptomenVanShock /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06DeVierTypenShock /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07HypovolemischeShock /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08CardiogeneShock /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09ObstructieveShock /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10DistributieveShock /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11Anafylaxie /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12Sepsis /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Sect13BehandelingVanShockInHetAlgemeen /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Sect14Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week4Casus8ShockSummary
