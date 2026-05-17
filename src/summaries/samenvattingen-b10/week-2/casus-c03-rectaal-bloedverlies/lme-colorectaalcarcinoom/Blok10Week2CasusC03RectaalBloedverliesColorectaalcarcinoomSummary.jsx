import {
  Activity,
  BookOpen,
  ClipboardList,
  FileText,
  Layers,
  Microscope,
  Pill,
  Scan,
  Stethoscope,
  Syringe,
  Table2,
  Target,
  Users,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import { blok10Week2CasusC03RectaalBloedverliesColorectaalcarcinoomPracticeHref } from './Blok10Week2CasusC03RectaalBloedverliesColorectaalcarcinoomOefenvragen'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02Risicofactoren from './sections/Sect02Risicofactoren'
import Sect03Symptomen from './sections/Sect03Symptomen'
import Sect04WanneerDiagnostiek from './sections/Sect04WanneerDiagnostiek'
import Sect05DiagnostiekColoscopieEnCT from './sections/Sect05DiagnostiekColoscopieEnCT'
import Sect06TNMTabelEnColon from './sections/Sect06TNMTabelEnColon'
import Sect07RectumStadiering from './sections/Sect07RectumStadiering'
import Sect08LymfeklierenEnMetastasen from './sections/Sect08LymfeklierenEnMetastasen'
import Sect09AanvullendePrognoseTabel4 from './sections/Sect09AanvullendePrognoseTabel4'
import Sect10EMVI from './sections/Sect10EMVI'
import Sect11HistologischeFactoren from './sections/Sect11HistologischeFactoren'
import Sect12MMRDeficientie from './sections/Sect12MMRDeficientie'
import Sect13MDO from './sections/Sect13MDO'
import Sect14BehandelingColoncarcinoom from './sections/Sect14BehandelingColoncarcinoom'
import Sect15BehandelingRectum from './sections/Sect15BehandelingRectum'
import Sect16Prognose from './sections/Sect16Prognose'
import Sect17Samenvatting from './sections/Sect17Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Risicofactoren · Tabel 1', icon: Target },
  { id: 'sect-03', title: 'Symptomen · Tabel 2', icon: Stethoscope },
  { id: 'sect-04', title: 'Wanneer diagnostiek naar CRC?', icon: Users },
  { id: 'sect-05', title: 'Coloscopie en CT-colografie', icon: Scan },
  { id: 'sect-06', title: 'TNM · coloncarcinoom · Tabel 3', icon: Table2 },
  { id: 'sect-07', title: 'Rectumcarcinoom', icon: Layers },
  { id: 'sect-08', title: 'Lymfeklieren en metastasen', icon: Activity },
  { id: 'sect-09', title: 'Aanvullende prognose · Tabel 4', icon: ClipboardList },
  { id: 'sect-10', title: 'EMVI', icon: Microscope },
  { id: 'sect-11', title: 'Histologische factoren', icon: FileText },
  { id: 'sect-12', title: 'MMR-deficiëntie', icon: Pill },
  { id: 'sect-13', title: 'MDO · Tabel 5', icon: Users },
  { id: 'sect-14', title: 'Behandeling coloncarcinoom', icon: Syringe },
  { id: 'sect-15', title: 'Behandeling rectumcarcinoom', icon: Syringe },
  { id: 'sect-16', title: 'Prognose · Tabel 6', icon: Table2 },
  { id: 'sect-17', title: 'Samenvatting', icon: BookOpen },
]

const Blok10Week2CasusC03RectaalBloedverliesColorectaalcarcinoomSummary = () => (
  <SummaryLayout
    title="Colorectaal carcinoom"
    moduleKind="lme"
    description="Bij CRC is het handig om risicofactoren te verdelen in beïnvloedbare en niet of deels beïnvloedbare factoren. Dat maakt meteen duidelijk welke factoren je kunt herkennen, beïnvloeden of meenemen in de beoordeling."
    caseLabel="Week 2 · Casus C03: Rectaal bloedverlies"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink={blok10Week2CasusC03RectaalBloedverliesColorectaalcarcinoomPracticeHref}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02Risicofactoren />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03Symptomen />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04WanneerDiagnostiek />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05DiagnostiekColoscopieEnCT />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06TNMTabelEnColon />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07RectumStadiering />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08LymfeklierenEnMetastasen />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09AanvullendePrognoseTabel4 />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10EMVI />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11HistologischeFactoren />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12MMRDeficientie />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Sect13MDO />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <Sect14BehandelingColoncarcinoom />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <Sect15BehandelingRectum />
    </section>
    <section id="sect-16" className="scroll-mt-24 mb-12">
      <Sect16Prognose />
    </section>
    <section id="sect-17" className="scroll-mt-24 mb-12">
      <Sect17Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week2CasusC03RectaalBloedverliesColorectaalcarcinoomSummary
