import {
  Activity,
  AlertTriangle,
  BookOpen,
  Clock,
  FileText,
  LayoutList,
  Pill,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02ExogeneInsulineWatBedoelenWeDaarmee from './sections/Sect02ExogeneInsulineWatBedoelenWeDaarmee'
import Sect03VerschillendeTypenInsuline from './sections/Sect03VerschillendeTypenInsuline'
import Sect04HoeKiesJeEenInsulineschema from './sections/Sect04HoeKiesJeEenInsulineschema'
import Sect05DoseringEnDosisaanpassing from './sections/Sect05DoseringEnDosisaanpassing'
import Sect06TimingVanInsulineMaaltijdenEnKoolhydraten from './sections/Sect06TimingVanInsulineMaaltijdenEnKoolhydraten'
import Sect07PatronenInGlucoseprofielenHerkennen from './sections/Sect07PatronenInGlucoseprofielenHerkennen'
import Sect08HypoglykemieEnHyperglykemie from './sections/Sect08HypoglykemieEnHyperglykemie'
import Sect09RegelsBijZiekte from './sections/Sect09RegelsBijZiekte'
import Sect10WanneerVolstaatAanpassenEnWanneerOverstappen from './sections/Sect10WanneerVolstaatAanpassenEnWanneerOverstappen'
import Sect11KlinischeRelevantie from './sections/Sect11KlinischeRelevantie'
import Sect12Samenvatting from './sections/Sect12Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Exogene insuline', icon: Stethoscope },
  { id: 'sect-03', title: 'Typen insuline · Tabel 1', icon: Table2 },
  { id: 'sect-04', title: 'Insulineschema · Tabel 2', icon: LayoutList },
  { id: 'sect-05', title: 'Dosering', icon: Pill },
  { id: 'sect-06', title: 'Timing en koolhydraten', icon: Clock },
  { id: 'sect-07', title: 'Glucoseprofielen · Tabel 3', icon: Activity },
  { id: 'sect-08', title: 'Hypo- en hyperglykemie', icon: AlertTriangle },
  { id: 'sect-09', title: 'Regels bij ziekte', icon: Stethoscope },
  { id: 'sect-10', title: 'Aanpassen of overstappen', icon: LayoutList },
  { id: 'sect-11', title: 'Klinische relevantie', icon: Stethoscope },
  { id: 'sect-12', title: 'Samenvatting', icon: FileText },
]

const Blok10Week3CasusC06DmType1FlankerendOnderwijsLmoExogeneInsulinesSummary = () => (
  <SummaryLayout
    title="Exogene insulines"
    moduleKind="lmo"
    description="Exogene insuline is insuline die van buiten het lichaam wordt toegediend. Dat is nodig wanneer het lichaam zelf onvoldoende insuline maakt of wanneer de insulinebehoefte niet meer goed wordt opgevangen door andere behandeling."
    practiceLink="/oefenvragen?lme=blok10-week3-casus-c06-dm-type1-lmo-exogene-insulines"
    caseLabel="Week 3 · Casus C06: DM type 1"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02ExogeneInsulineWatBedoelenWeDaarmee />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03VerschillendeTypenInsuline />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04HoeKiesJeEenInsulineschema />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05DoseringEnDosisaanpassing />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06TimingVanInsulineMaaltijdenEnKoolhydraten />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07PatronenInGlucoseprofielenHerkennen />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08HypoglykemieEnHyperglykemie />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09RegelsBijZiekte />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10WanneerVolstaatAanpassenEnWanneerOverstappen />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11KlinischeRelevantie />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week3CasusC06DmType1FlankerendOnderwijsLmoExogeneInsulinesSummary
