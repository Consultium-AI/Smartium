import {
  Activity,
  AlertTriangle,
  BookOpen,
  FileText,
  HeartPulse,
  Lightbulb,
  Microscope,
  Pill,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02IndelingGastroIntestinaleBloedingen from './sections/Sect02IndelingGastroIntestinaleBloedingen'
import Sect03KlinischePresentatie from './sections/Sect03KlinischePresentatie'
import Sect04OorzakenEnRisicofactoren from './sections/Sect04OorzakenEnRisicofactoren'
import Sect05OpvangEnStabilisatie from './sections/Sect05OpvangEnStabilisatie'
import Sect06Risicoscores from './sections/Sect06Risicoscores'
import Sect07Diagnostiek from './sections/Sect07Diagnostiek'
import Sect08Behandeling from './sections/Sect08Behandeling'
import Sect09PraktischeHerkenning from './sections/Sect09PraktischeHerkenning'
import Sect10Samenvatting from './sections/Sect10Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Indeling van gastro-intestinale bloedingen · Tabel 1', icon: Table2 },
  { id: 'sect-03', title: 'Klinische presentatie', icon: Stethoscope },
  { id: 'sect-04', title: 'Oorzaken en risicofactoren · Tabel 2', icon: AlertTriangle },
  { id: 'sect-05', title: 'Opvang en stabilisatie', icon: HeartPulse },
  { id: 'sect-06', title: 'Risicoscores', icon: Activity },
  { id: 'sect-07', title: 'Diagnostiek', icon: Microscope },
  { id: 'sect-08', title: 'Behandeling', icon: Pill },
  { id: 'sect-09', title: 'Praktische herkenning in de kliniek', icon: Lightbulb },
  { id: 'sect-10', title: 'Samenvatting', icon: FileText },
]

const Blok10Week1Casus1MaagklachtenLmeEndoscopieBasisEnBloedingenSummary = () => (
  <SummaryLayout
    title="Endoscopie basis en bloedingen"
    moduleKind="lme"
    description="Een bloeding uit de tractus digestivus is een veelvoorkomende en potentieel levensbedreigende acute presentatie."
    caseLabel="Week 1 · Casus 1: Maagklachten"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink="/oefenvragen?lme=blok10-week1-casus1-maagklachten-endoscopie-basis-en-bloedingen"
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02IndelingGastroIntestinaleBloedingen />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03KlinischePresentatie />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04OorzakenEnRisicofactoren />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05OpvangEnStabilisatie />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06Risicoscores />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07Diagnostiek />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08Behandeling />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09PraktischeHerkenning />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week1Casus1MaagklachtenLmeEndoscopieBasisEnBloedingenSummary
