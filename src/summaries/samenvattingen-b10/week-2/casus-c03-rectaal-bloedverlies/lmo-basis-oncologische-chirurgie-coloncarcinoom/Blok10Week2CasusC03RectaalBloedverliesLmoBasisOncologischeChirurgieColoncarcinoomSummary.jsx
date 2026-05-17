import { BookOpen, FileText, LayoutList, Lightbulb, ListChecks, Stethoscope, Table2, Target } from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02BasisVanOncologischeChirurgieBijColoncarcinoom from './sections/Sect02BasisVanOncologischeChirurgieBijColoncarcinoom'
import Sect03WatMoetJeHierbijKunnenBegrijpen from './sections/Sect03WatMoetJeHierbijKunnenBegrijpen'
import Sect04TumorenEnVerspreiding from './sections/Sect04TumorenEnVerspreiding'
import Sect05BasisprincipesEnTabel1 from './sections/Sect05BasisprincipesEnTabel1'
import Sect06UitgebreidheidVanDeResectie from './sections/Sect06UitgebreidheidVanDeResectie'
import Sect07WaaromBelangrijkEnTabel2 from './sections/Sect07WaaromBelangrijkEnTabel2'
import Sect08SamenvattingVanDeKern from './sections/Sect08SamenvattingVanDeKern'
import Sect09Samenvatting from './sections/Sect09Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Basis van oncologische chirurgie bij coloncarcinoom', icon: LayoutList },
  { id: 'sect-03', title: 'Wat moet je hierbij kunnen begrijpen?', icon: Lightbulb },
  { id: 'sect-04', title: 'Tumoren en verspreiding', icon: Stethoscope },
  { id: 'sect-05', title: 'Basisprincipes · Tabel 1', icon: Table2 },
  { id: 'sect-06', title: 'Uitgebreidheid van de resectie', icon: Target },
  { id: 'sect-07', title: 'Waarom belangrijk · Tabel 2', icon: Table2 },
  { id: 'sect-08', title: 'Samenvatting van de kern', icon: ListChecks },
  { id: 'sect-09', title: 'Samenvatting', icon: FileText },
]

const Blok10Week2CasusC03RectaalBloedverliesLmoBasisOncologischeChirurgieColoncarcinoomSummary = () => (
  <SummaryLayout
    title="Basis oncologische chirurgie (coloncarcinoom)"
    moduleKind="lmo"
    description="Bij deze leerstof staat de chirurgische behandeling van het colorectaal carcinoom centraal. Een colorectaal carcinoom is een kwaadaardige tumor van de dikke darm en/of endeldarm."
    caseLabel="Week 2 · Casus C03: Rectaal bloedverlies"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02BasisVanOncologischeChirurgieBijColoncarcinoom />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03WatMoetJeHierbijKunnenBegrijpen />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04TumorenEnVerspreiding />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05BasisprincipesEnTabel1 />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06UitgebreidheidVanDeResectie />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07WaaromBelangrijkEnTabel2 />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08SamenvattingVanDeKern />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week2CasusC03RectaalBloedverliesLmoBasisOncologischeChirurgieColoncarcinoomSummary
