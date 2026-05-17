import {
  BookOpen,
  ClipboardList,
  Layers,
  Lightbulb,
  ScanLine,
  Stethoscope,
  Table2,
  TableProperties,
  TestTube2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02HetGroteGeheel from './sections/Sect02HetGroteGeheel'
import Sect03Pbc from './sections/Sect03Pbc'
import Sect04Psc from './sections/Sect04Psc'
import Sect05Aih from './sections/Sect05Aih'
import Sect06Tabel1Verschillen from './sections/Sect06Tabel1Verschillen'
import Sect07Tabel2Kern from './sections/Sect07Tabel2Kern'
import Sect08KlinischeRelevantie from './sections/Sect08KlinischeRelevantie'
import Sect09SamenvattingSlot from './sections/Sect09SamenvattingSlot'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Auto-immuun-gemedieerde leverziekten: het grote geheel', icon: Layers },
  { id: 'sect-03', title: 'Primaire biliaire cholangitis (PBC)', icon: Stethoscope },
  { id: 'sect-04', title: 'Primaire scleroserende cholangitis (PSC)', icon: ScanLine },
  { id: 'sect-05', title: 'Auto-immuun hepatitis (AIH)', icon: TestTube2 },
  { id: 'sect-06', title: 'De drie aandoeningen · Tabel 1', icon: TableProperties },
  { id: 'sect-07', title: 'Tabel 2 · Kern per ziektebeeld', icon: Table2 },
  { id: 'sect-08', title: 'Klinische relevantie', icon: Lightbulb },
  { id: 'sect-09', title: 'Samenvatting', icon: ClipboardList },
]

const Blok10Week4CasusC07LeververvettingLmeAbcdeViraleHepatitisSummary = () => (
  <SummaryLayout
    title="ABCDE virale hepatitis"
    moduleKind="lme"
    description={
      <>
        De lever en de galwegen kunnen het doelwit zijn van chronische auto-immuun-gemedieerde aandoeningen. Bij deze ziekten richt het afweersysteem zich niet op een
        ziekteverwekker van buiten, maar op eigen structuren:
      </>
    }
    caseLabel="Week 4 · Casus C07: Leververvetting"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02HetGroteGeheel />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03Pbc />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04Psc />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05Aih />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06Tabel1Verschillen />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07Tabel2Kern />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08KlinischeRelevantie />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09SamenvattingSlot />
    </section>
  </SummaryLayout>
)

export default Blok10Week4CasusC07LeververvettingLmeAbcdeViraleHepatitisSummary
