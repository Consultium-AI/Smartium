import {
  Activity,
  BookOpen,
  FileText,
  FlaskConical,
  LayoutList,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02LeverfibroseWatIsHet from './sections/Sect02LeverfibroseWatIsHet'
import Sect03HetOntstekingsprocesAlsStartpunt from './sections/Sect03HetOntstekingsprocesAlsStartpunt'
import Sect04CellulaireMechanismenVanFibrose from './sections/Sect04CellulaireMechanismenVanFibrose'
import Sect05MoleculaireMechanismen from './sections/Sect05MoleculaireMechanismen'
import Sect06WaaromFibroseKanToenemen from './sections/Sect06WaaromFibroseKanToenemen'
import Sect07TerugkeerVanFibroseRegressie from './sections/Sect07TerugkeerVanFibroseRegressie'
import Sect08SamenspelTussenOntstekingEnFibrose from './sections/Sect08SamenspelTussenOntstekingEnFibrose'
import Sect09KlinischeRelevantie from './sections/Sect09KlinischeRelevantie'
import Sect10Samenvatting from './sections/Sect10Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Leverfibrose: wat is het?', icon: Stethoscope },
  { id: 'sect-03', title: 'Ontstekingsproces', icon: Activity },
  { id: 'sect-04', title: 'Cellulaire mechanismen', icon: FlaskConical },
  { id: 'sect-05', title: 'Moleculaire mechanismen · Tabel 1', icon: Table2 },
  { id: 'sect-06', title: 'Waarom fibrose kan toenemen', icon: LayoutList },
  { id: 'sect-07', title: 'Regressie', icon: Activity },
  { id: 'sect-08', title: 'Ontsteking en fibrose · Tabel 2', icon: Table2 },
  { id: 'sect-09', title: 'Klinische relevantie', icon: Stethoscope },
  { id: 'sect-10', title: 'Samenvatting', icon: FileText },
]

const Blok10Week4CasusC07LeververvettingFlankerendOnderwijsLmoLiteratuurOverLeverfibroseSummary = () => (
  <SummaryLayout
    title="Literatuur over leverfibrose"
    moduleKind="lmo"
    description="Na het bestuderen van deze literatuur over leverfibrose kun je begrijpen hoe het proces van leverfibrose verloopt."
    caseLabel="Week 4 · Casus C07: Leververvetting"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02LeverfibroseWatIsHet />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03HetOntstekingsprocesAlsStartpunt />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04CellulaireMechanismenVanFibrose />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05MoleculaireMechanismen />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06WaaromFibroseKanToenemen />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07TerugkeerVanFibroseRegressie />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08SamenspelTussenOntstekingEnFibrose />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09KlinischeRelevantie />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week4CasusC07LeververvettingFlankerendOnderwijsLmoLiteratuurOverLeverfibroseSummary
