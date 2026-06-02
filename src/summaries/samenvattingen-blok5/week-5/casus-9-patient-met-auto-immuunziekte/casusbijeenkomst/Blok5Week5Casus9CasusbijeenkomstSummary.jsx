import {
  Activity,
  BookOpen,
  CircleCheck,
  HeartPulse,
  Microscope,
  Pill,
  Stethoscope,
  Table2,
  Target,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import SummarySectionHeader from './SummarySectionHeader'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectCasusEnKlinischeContext from './sections/SectCasusEnKlinischeContext'
import SectBelangrijkeKlachtenEnBevindingen from './sections/SectBelangrijkeKlachtenEnBevindingen'
import SectKlinischRedeneren from './sections/SectKlinischRedeneren'
import SectDiagnostiek from './sections/SectDiagnostiek'
import SectNeuroblastoomEnHallmarks from './sections/SectNeuroblastoomEnHallmarks'
import SectBeleidEnBehandeling from './sections/SectBeleidEnBehandeling'
import SectKlinischeRelevantie from './sections/SectKlinischeRelevantie'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Casus en klinische context', icon: Activity },
  { id: 'sect-03', title: 'Klachten en bevindingen', icon: Table2 },
  { id: 'sect-04', title: 'Klinisch redeneren', icon: Stethoscope },
  { id: 'sect-05', title: 'Diagnostiek', icon: Microscope },
  { id: 'sect-06', title: 'Neuroblastoom', icon: HeartPulse },
  { id: 'sect-07', title: 'Beleid en behandeling', icon: Pill },
  { id: 'sect-08', title: 'Klinische relevantie', icon: Target },
  { id: 'sect-09', title: 'Samenvatting', icon: CircleCheck },
]

const SectionDivider = () => (
  <hr className="border-slate-200 dark:border-slate-700 my-10" />
)

const Blok5Week5Casus9CasusbijeenkomstSummary = () => (
  <SummaryLayout
    title="Patiënt met auto-immuunziekte"
    moduleKind="casusbijeenkomst"
    description="Casusbespreking rond Tom: buikzwelling bij een kind, brede differentiaaldiagnose, neuroblastoom en hoog-risico behandeling met complicaties en lange-termijneffecten."
    caseLabel="Week 5 · Casus 9: Patiënt met auto-immuunziekte"
    blokLabel="Blok 5"
    practiceLink="/oefenvragen?lme=blok5-week5-casus9-casusbijeenkomst"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={BookOpen} title="Leerdoelen" tone="primary" />
      <SectLeerdoelen />
    </section>

    <SectionDivider />

    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Activity} title="Casus en klinische context" tone="accent" />
      <SectCasusEnKlinischeContext />
    </section>

    <SectionDivider />

    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Table2} title="Klachten en bevindingen" tone="sky" />
      <SectBelangrijkeKlachtenEnBevindingen />
    </section>

    <SectionDivider />

    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Stethoscope} title="Klinisch redeneren" tone="purple" />
      <SectKlinischRedeneren />
    </section>

    <SectionDivider />

    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Microscope} title="Diagnostiek" tone="emerald" />
      <SectDiagnostiek />
    </section>

    <SectionDivider />

    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={HeartPulse} title="Neuroblastoom" tone="rose" />
      <SectNeuroblastoomEnHallmarks />
    </section>

    <SectionDivider />

    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Pill} title="Beleid en behandeling" tone="amber" />
      <SectBeleidEnBehandeling />
    </section>

    <SectionDivider />

    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Target} title="Klinische relevantie" tone="indigo" />
      <SectKlinischeRelevantie />
    </section>

    <SectionDivider />

    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={CircleCheck} title="Samenvatting" tone="emerald" />
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok5Week5Casus9CasusbijeenkomstSummary
