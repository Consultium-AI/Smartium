import {
  Activity,
  BookOpen,
  ClipboardList,
  FileText,
  FlaskConical,
  HeartPulse,
  ListTree,
  Map,
  Microscope,
  Stethoscope,
  Table2,
  Target,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import { blok10Week2CasusC03RectaalBloedverliesBevolkingsonderzoekDarmkankerPracticeHref } from './Blok10Week2CasusC03RectaalBloedverliesBevolkingsonderzoekDarmkankerOefenvragen'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02WaaromScreenen from './sections/Sect02WaaromScreenen'
import Sect03Voorstadia from './sections/Sect03Voorstadia'
import Sect04WelkePoliepen from './sections/Sect04WelkePoliepen'
import Sect05ParisClassificatie from './sections/Sect05ParisClassificatie'
import Sect06AdvancedPoliepen from './sections/Sect06AdvancedPoliepen'
import Sect07SurveillanceColoscopie from './sections/Sect07SurveillanceColoscopie'
import Sect08Screeningsmethoden from './sections/Sect08Screeningsmethoden'
import Sect09OntlastingstestsEnKeuzeColoscopie from './sections/Sect09OntlastingstestsEnKeuzeColoscopie'
import Sect10BevolkingsonderzoekNederland from './sections/Sect10BevolkingsonderzoekNederland'
import Sect11UitkomstenEnPrevalentie from './sections/Sect11UitkomstenEnPrevalentie'
import Sect12KlinischeSamenvattingProces from './sections/Sect12KlinischeSamenvattingProces'
import Sect13Samenvatting from './sections/Sect13Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Waarom screenen op darmkanker?', icon: HeartPulse },
  { id: 'sect-03', title: 'Voorstadia van darmkanker', icon: ListTree },
  { id: 'sect-04', title: 'Welke poliepen zijn belangrijk? · Tabel 1', icon: Target },
  { id: 'sect-05', title: 'Paris-classificatie · Tabel 2', icon: Map },
  { id: 'sect-06', title: 'Advanced adenoom en advanced geserreerde poliep', icon: Microscope },
  { id: 'sect-07', title: 'Surveillance-coloscopie', icon: ClipboardList },
  { id: 'sect-08', title: 'Screeningsmethoden · Tabel 3', icon: Table2 },
  { id: 'sect-09', title: 'Ontlastingstests en keuze coloscopie', icon: FlaskConical },
  { id: 'sect-10', title: 'Bevolkingsonderzoek in Nederland · Tabel 4', icon: Stethoscope },
  { id: 'sect-11', title: 'Uitkomsten en prevalentie', icon: Activity },
  { id: 'sect-12', title: 'Kleine klinische samenvatting van het proces', icon: FileText },
  { id: 'sect-13', title: 'Samenvatting', icon: BookOpen },
]

const Blok10Week2CasusC03RectaalBloedverliesBevolkingsonderzoekDarmkankerSummary = () => (
  <SummaryLayout
    title="Bevolkingsonderzoek darmkanker"
    moduleKind="lme"
    description="Screening op darmkanker is zinvol omdat darmkanker vaak een voorstadium heeft. Dat betekent dat er eerst poliepen kunnen ontstaan, en sommige van die poliepen kunnen later veranderen in kanker."
    caseLabel="Week 2 · Casus C03: Rectaal bloedverlies"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink={blok10Week2CasusC03RectaalBloedverliesBevolkingsonderzoekDarmkankerPracticeHref}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02WaaromScreenen />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03Voorstadia />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04WelkePoliepen />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05ParisClassificatie />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06AdvancedPoliepen />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07SurveillanceColoscopie />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08Screeningsmethoden />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09OntlastingstestsEnKeuzeColoscopie />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10BevolkingsonderzoekNederland />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11UitkomstenEnPrevalentie />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12KlinischeSamenvattingProces />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Sect13Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week2CasusC03RectaalBloedverliesBevolkingsonderzoekDarmkankerSummary
