import { BookOpen, ClipboardList, Layers, ScanLine, Stethoscope, Table2, TableProperties, TestTube2 } from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import { blok10Week4CasusC07LeververvettingLmeAutoimmuunGemedieerdeLeverziektenPracticeHref } from './Blok10Week4CasusC07LeververvettingLmeAutoimmuunGemedieerdeLeverziektenOefenvragen'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02Inleiding from './sections/Sect02Inleiding'
import Sect03Tabel1Kernverschillen from './sections/Sect03Tabel1Kernverschillen'
import Sect04Pbc from './sections/Sect04Pbc'
import Sect05Psc from './sections/Sect05Psc'
import Sect06Aih from './sections/Sect06Aih'
import Sect07Tabel2Vuistregels from './sections/Sect07Tabel2Vuistregels'
import Sect08SamenvattingSlot from './sections/Sect08SamenvattingSlot'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Inleiding: drie ziektebeelden', icon: Layers },
  { id: 'sect-03', title: 'Tabel 1 · Kernverschillen PBC, PSC, AIH', icon: TableProperties },
  { id: 'sect-04', title: 'Primaire biliaire cholangitis (PBC)', icon: Stethoscope },
  { id: 'sect-05', title: 'Primaire scleroserende cholangitis (PSC)', icon: ScanLine },
  { id: 'sect-06', title: 'Auto-immuun hepatitis (AIH)', icon: TestTube2 },
  { id: 'sect-07', title: 'Tabel 2 · Diagnostische vuistregels', icon: Table2 },
  { id: 'sect-08', title: 'Samenvatting', icon: ClipboardList },
]

const Blok10Week4CasusC07LeververvettingLmeAutoimmuunGemedieerdeLeverziektenSummary = () => (
  <SummaryLayout
    title="Auto-immuun gemedieerde leverziekten"
    moduleKind="lme"
    description={
      <>
        Bij auto-immuun gemedieerde leverziekten richt het immuunsysteem zich op onderdelen van de lever of galwegen. Dat geeft chronische ontsteking, schade en uiteindelijk
        risico op fibrose en cirrose. De drie belangrijkste ziektebeelden in deze samenvatting zijn heel verschillend, maar hebben ook duidelijke overeenkomsten.
      </>
    }
    caseLabel="Week 4 · Casus C07: Leververvetting"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink={blok10Week4CasusC07LeververvettingLmeAutoimmuunGemedieerdeLeverziektenPracticeHref}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02Inleiding />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03Tabel1Kernverschillen />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04Pbc />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05Psc />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06Aih />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07Tabel2Vuistregels />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08SamenvattingSlot />
    </section>
  </SummaryLayout>
)

export default Blok10Week4CasusC07LeververvettingLmeAutoimmuunGemedieerdeLeverziektenSummary
