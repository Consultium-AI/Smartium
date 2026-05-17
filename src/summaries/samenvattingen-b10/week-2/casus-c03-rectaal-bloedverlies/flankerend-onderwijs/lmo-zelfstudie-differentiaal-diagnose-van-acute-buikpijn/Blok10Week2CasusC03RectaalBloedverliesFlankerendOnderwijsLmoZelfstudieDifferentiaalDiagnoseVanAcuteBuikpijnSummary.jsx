import {
  AlertTriangle,
  BookOpen,
  FileText,
  LayoutList,
  Lightbulb,
  ListChecks,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02AcuteBuikpijnEerstGestructureerdDenken from './sections/Sect02AcuteBuikpijnEerstGestructureerdDenken'
import Sect03DifferentiaaldiagnoseTabel1 from './sections/Sect03DifferentiaaldiagnoseTabel1'
import Sect04OrgaansystemenUitwerkingEnAandacht from './sections/Sect04OrgaansystemenUitwerkingEnAandacht'
import Sect05Alarmsymptomen from './sections/Sect05Alarmsymptomen'
import Sect06VanKlachtNaarVervolgstap from './sections/Sect06VanKlachtNaarVervolgstap'
import Sect07PraktischeKernVanDezeStof from './sections/Sect07PraktischeKernVanDezeStof'
import Sect08SamenvattendOnderscheidTabel2 from './sections/Sect08SamenvattendOnderscheidTabel2'
import Sect09Samenvatting from './sections/Sect09Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Gestructureerd denken', icon: LayoutList },
  { id: 'sect-03', title: 'Orgaansystemen · Tabel 1', icon: Table2 },
  { id: 'sect-04', title: 'GI, urogenitaal, vasculair, metabool', icon: Stethoscope },
  { id: 'sect-05', title: 'Alarmsymptomen', icon: AlertTriangle },
  { id: 'sect-06', title: 'Van klacht naar vervolgstap', icon: Lightbulb },
  { id: 'sect-07', title: 'Praktische kern', icon: ListChecks },
  { id: 'sect-08', title: 'Tabel 2 · kernoverzicht', icon: Table2 },
  { id: 'sect-09', title: 'Samenvatting', icon: FileText },
]

const Blok10Week2CasusC03RectaalBloedverliesFlankerendOnderwijsLmoZelfstudieDifferentiaalDiagnoseVanAcuteBuikpijnSummary = () => (
  <SummaryLayout
    title="Zelfstudie differentiaal diagnose van acute buikpijn"
    moduleKind="lmo"
    description="Acute buikpijn is een klacht waarbij je niet meteen één oorzaak moet aannemen. Het belangrijkste is dat je systematisch nadenkt over mogelijke verklaringen."
    caseLabel="Week 2 · Casus C03: Rectaal bloedverlies"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02AcuteBuikpijnEerstGestructureerdDenken />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03DifferentiaaldiagnoseTabel1 />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04OrgaansystemenUitwerkingEnAandacht />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05Alarmsymptomen />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06VanKlachtNaarVervolgstap />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07PraktischeKernVanDezeStof />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08SamenvattendOnderscheidTabel2 />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week2CasusC03RectaalBloedverliesFlankerendOnderwijsLmoZelfstudieDifferentiaalDiagnoseVanAcuteBuikpijnSummary
