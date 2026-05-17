import {
  Activity,
  Apple,
  BookOpen,
  Dumbbell,
  FileText,
  Gauge,
  HeartPulse,
  LayoutList,
  Lightbulb,
  Pill,
  Table2,
  AlertTriangle,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02WatIsPrehabilitatie from './sections/Sect02WatIsPrehabilitatie'
import Sect03WaaromNodigEnTabel1 from './sections/Sect03WaaromNodigEnTabel1'
import Sect04ChirurgischeStressresponsEnTabel2 from './sections/Sect04ChirurgischeStressresponsEnTabel2'
import Sect05WatProbeertPrehabilitatie from './sections/Sect05WatProbeertPrehabilitatie'
import Sect06KerncomponentenFysiekeTraining from './sections/Sect06KerncomponentenFysiekeTraining'
import Sect07Voeding from './sections/Sect07Voeding'
import Sect08RisicofactorenEnTabel3 from './sections/Sect08RisicofactorenEnTabel3'
import Sect09OpbouwProgramma from './sections/Sect09OpbouwProgramma'
import Sect10EffectBeoordelen from './sections/Sect10EffectBeoordelen'
import Sect11Uitdagingen from './sections/Sect11Uitdagingen'
import Sect12WatMoetJeOnthoudenEnTabelVerschillen from './sections/Sect12WatMoetJeOnthoudenEnTabelVerschillen'
import Sect13Samenvatting from './sections/Sect13Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Wat is prehabilitatie?', icon: Lightbulb },
  { id: 'sect-03', title: 'Waarom nodig · Tabel 1', icon: Table2 },
  { id: 'sect-04', title: 'Chirurgische stressrespons · Tabel 2', icon: HeartPulse },
  { id: 'sect-05', title: 'Wat probeert prehabilitatie?', icon: Activity },
  { id: 'sect-06', title: 'Kerncomponenten · fysieke training', icon: Dumbbell },
  { id: 'sect-07', title: 'Voeding', icon: Apple },
  { id: 'sect-08', title: 'Risicofactoren · Tabel 3', icon: Pill },
  { id: 'sect-09', title: 'Opbouw programma', icon: LayoutList },
  { id: 'sect-10', title: 'Effect beoordelen', icon: Gauge },
  { id: 'sect-11', title: 'Uitdagingen', icon: AlertTriangle },
  { id: 'sect-12', title: 'Wat onthouden · verschillen', icon: Table2 },
  { id: 'sect-13', title: 'Samenvatting', icon: FileText },
]

const Blok10Week2CasusC03RectaalBloedverliesLmvPrehabilitatieVoorEenOperatieSummary = () => (
  <SummaryLayout
    title="Prehabilitatie voor een operatie"
    moduleKind="lmv"
    description="Prehabilitatie betekent dat je de functionele capaciteit van een patiënt vóór een operatie optimaliseert, zodat iemand de chirurgische stress beter kan doorstaan."
    caseLabel="Week 2 · Casus C03: Rectaal bloedverlies"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02WatIsPrehabilitatie />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03WaaromNodigEnTabel1 />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04ChirurgischeStressresponsEnTabel2 />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05WatProbeertPrehabilitatie />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06KerncomponentenFysiekeTraining />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07Voeding />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08RisicofactorenEnTabel3 />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09OpbouwProgramma />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10EffectBeoordelen />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11Uitdagingen />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12WatMoetJeOnthoudenEnTabelVerschillen />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Sect13Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week2CasusC03RectaalBloedverliesLmvPrehabilitatieVoorEenOperatieSummary
