import {
  Activity,
  BookOpen,
  CircleCheck,
  HeartPulse,
  Home,
  Microscope,
  Stethoscope,
  Table2,
  Wind,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import SummarySectionHeader from './SummarySectionHeader'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectCasusEnKlinischeContext from './sections/SectCasusEnKlinischeContext'
import SectBelangrijkeKlachtenEnBevindingen from './sections/SectBelangrijkeKlachtenEnBevindingen'
import SectKlinischRedeneren from './sections/SectKlinischRedeneren'
import SectDifferentiaaldiagnose from './sections/SectDifferentiaaldiagnose'
import SectDiagnostiek from './sections/SectDiagnostiek'
import SectBeleidEnBehandeling from './sections/SectBeleidEnBehandeling'
import SectBelangrijkeZiektebeelden from './sections/SectBelangrijkeZiektebeelden'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Casus en klinische context', icon: Activity },
  { id: 'sect-03', title: 'Klachten en bevindingen', icon: HeartPulse },
  { id: 'sect-04', title: 'Klinisch redeneren', icon: Stethoscope },
  { id: 'sect-05', title: 'Differentiaaldiagnose', icon: Table2 },
  { id: 'sect-06', title: 'Diagnostiek', icon: Microscope },
  { id: 'sect-07', title: 'Beleid en behandeling', icon: Wind },
  { id: 'sect-08', title: 'Belangrijke ziektebeelden', icon: Home },
  { id: 'sect-09', title: 'Samenvatting', icon: CircleCheck },
]

const SectionDivider = () => (
  <hr className="border-slate-200 dark:border-slate-700 my-10" />
)

const Blok5Week6Casus12CasusbijeenkomstSummary = () => (
  <SummaryLayout
    title="Verwarde patiënt met griepachtige klachten"
    moduleKind="casusbijeenkomst"
    description="Casusbespreking over klachten binnenshuis: koolmonoxidevergiftiging, vocht en schimmel, COHb, inhalatietrauma en GGD-benadering."
    caseLabel="Week 6 · Casus 12: Verwarde patiënt met griepachtige klachten"
    blokLabel="Blok 5"
    practiceLink="/oefenvragen?lme=blok5-week6-casus12-casusbijeenkomst"
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
      <SummarySectionHeader icon={Microscope} title="Diagnostiek" tone="emerald" />
      <SectDiagnostiek />
    </section>

    <SectionDivider />

    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Wind} title="Beleid en behandeling" tone="amber" />
      <SectBeleidEnBehandeling />
    </section>

    <SectionDivider />

    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Home} title="Belangrijke ziektebeelden" tone="indigo" />
      <SectBelangrijkeZiektebeelden />
    </section>

    <SectionDivider />

    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={CircleCheck} title="Samenvatting" tone="emerald" />
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok5Week6Casus12CasusbijeenkomstSummary
