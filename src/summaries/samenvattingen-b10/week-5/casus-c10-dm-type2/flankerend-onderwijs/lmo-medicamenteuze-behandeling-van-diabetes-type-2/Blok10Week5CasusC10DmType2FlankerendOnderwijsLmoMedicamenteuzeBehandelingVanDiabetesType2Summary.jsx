import {
  Activity,
  BookOpen,
  FileText,
  LayoutList,
  Pill,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02DiabetesMellitusType2Basisprobleem from './sections/Sect02DiabetesMellitusType2Basisprobleem'
import Sect03OverzichtBelangrijksteMedicijngroepen from './sections/Sect03OverzichtBelangrijksteMedicijngroepen'
import Sect04MetformineEersteKeus from './sections/Sect04MetformineEersteKeus'
import Sect05Insulinesecretagogen from './sections/Sect05Insulinesecretagogen'
import Sect06Insulinesensitizers from './sections/Sect06Insulinesensitizers'
import Sect07AlfaGlucosidaseremmers from './sections/Sect07AlfaGlucosidaseremmers'
import Sect08Glp1Analogen from './sections/Sect08Glp1Analogen'
import Sect09KlinischeRelevantie from './sections/Sect09KlinischeRelevantie'
import Sect10Samenvatting from './sections/Sect10Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Basisprobleem DM2', icon: Activity },
  { id: 'sect-03', title: 'Medicijngroepen · Tabel 1', icon: Table2 },
  { id: 'sect-04', title: 'Metformine', icon: Pill },
  { id: 'sect-05', title: 'Insulinesecretagogen · Tabel 2', icon: Table2 },
  { id: 'sect-06', title: 'Insulinesensitizers', icon: Pill },
  { id: 'sect-07', title: 'Alfa-glucosidaseremmers · Tabel 3', icon: Table2 },
  { id: 'sect-08', title: 'GLP-1-analogen', icon: Pill },
  { id: 'sect-09', title: 'Klinische relevantie', icon: Stethoscope },
  { id: 'sect-10', title: 'Samenvatting', icon: FileText },
]

const Blok10Week5CasusC10DmType2FlankerendOnderwijsLmoMedicamenteuzeBehandelingVanDiabetesType2Summary = () => (
  <SummaryLayout
    title="Medicamenteuze behandeling van diabetes type 2"
    moduleKind="lmo"
    description="Na het bestuderen van deze stof kun je de glucoseverlagende medicijngroepen bij diabetes type 2 benoemen, hun werkingsmechanisme uitleggen en bijwerkingen en contra-indicaties herkennen."
    caseLabel="Week 5 · Casus C10: DM type 2"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink="/oefenvragen?lme=blok10-week5-casus-c10-dm-type2-lmo-medicamenteuze-behandeling-van-diabetes-type-2"
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02DiabetesMellitusType2Basisprobleem />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03OverzichtBelangrijksteMedicijngroepen />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04MetformineEersteKeus />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05Insulinesecretagogen />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06Insulinesensitizers />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07AlfaGlucosidaseremmers />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08Glp1Analogen />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09KlinischeRelevantie />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week5CasusC10DmType2FlankerendOnderwijsLmoMedicamenteuzeBehandelingVanDiabetesType2Summary
