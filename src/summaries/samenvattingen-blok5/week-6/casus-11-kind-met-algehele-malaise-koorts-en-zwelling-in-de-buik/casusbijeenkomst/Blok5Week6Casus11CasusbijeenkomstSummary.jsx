import {
  Activity,
  BookOpen,
  CircleCheck,
  HeartPulse,
  Layers,
  Microscope,
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
import SectDifferentiaaldiagnose from './sections/SectDifferentiaaldiagnose'
import SectWilmsTumorEnNeuroblastoom from './sections/SectWilmsTumorEnNeuroblastoom'
import SectDiagnostiek from './sections/SectDiagnostiek'
import SectBeleidEnKernpunten from './sections/SectBeleidEnKernpunten'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Casus en klinische context', icon: Activity },
  { id: 'sect-03', title: 'Klachten en bevindingen', icon: HeartPulse },
  { id: 'sect-04', title: 'Klinisch redeneren', icon: Stethoscope },
  { id: 'sect-05', title: 'Differentiaaldiagnose', icon: Table2 },
  { id: 'sect-06', title: 'Wilms-tumor en neuroblastoom', icon: Layers },
  { id: 'sect-07', title: 'Diagnostiek', icon: Microscope },
  { id: 'sect-08', title: 'Beleid en kernpunten', icon: Target },
  { id: 'sect-09', title: 'Samenvatting', icon: CircleCheck },
]

const SectionDivider = () => (
  <hr className="border-slate-200 dark:border-slate-700 my-10" />
)

const Blok5Week6Casus11CasusbijeenkomstSummary = () => (
  <SummaryLayout
    title="Kind met algehele malaise, koorts en zwelling in de buik"
    moduleKind="casusbijeenkomst"
    description="Casusbespreking over een kind met malaise, koorts en buikmassa: klinisch redeneren, Wilms-tumor versus neuroblastoom, echografie en snelle verwijzing."
    caseLabel="Week 6 · Casus 11: Kind met algehele malaise, koorts en zwelling in de buik"
    blokLabel="Blok 5"
    practiceLink="/oefenvragen?lme=blok5-week6-casus11-casusbijeenkomst"
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
      <SummarySectionHeader icon={HeartPulse} title="Klachten en bevindingen" tone="rose" />
      <SectBelangrijkeKlachtenEnBevindingen />
    </section>

    <SectionDivider />

    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Stethoscope} title="Klinisch redeneren" tone="purple" />
      <SectKlinischRedeneren />
    </section>

    <SectionDivider />

    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Table2} title="Differentiaaldiagnose" tone="sky" />
      <SectDifferentiaaldiagnose />
    </section>

    <SectionDivider />

    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Layers} title="Wilms-tumor en neuroblastoom" tone="indigo" />
      <SectWilmsTumorEnNeuroblastoom />
    </section>

    <SectionDivider />

    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Microscope} title="Diagnostiek" tone="emerald" />
      <SectDiagnostiek />
    </section>

    <SectionDivider />

    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Target} title="Beleid en kernpunten" tone="amber" />
      <SectBeleidEnKernpunten />
    </section>

    <SectionDivider />

    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={CircleCheck} title="Samenvatting" tone="emerald" />
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok5Week6Casus11CasusbijeenkomstSummary
