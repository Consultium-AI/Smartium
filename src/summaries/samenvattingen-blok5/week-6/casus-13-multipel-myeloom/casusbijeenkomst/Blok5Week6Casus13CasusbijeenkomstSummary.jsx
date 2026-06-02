import {
  Activity,
  BookOpen,
  CircleCheck,
  HeartPulse,
  Microscope,
  Pill,
  Stethoscope,
  Table2,
  Users,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import SummarySectionHeader from './SummarySectionHeader'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectCasusEnKlinischeContext from './sections/SectCasusEnKlinischeContext'
import SectBelangrijkeKlachtenEnBevindingen from './sections/SectBelangrijkeKlachtenEnBevindingen'
import SectKlinischRedeneren from './sections/SectKlinischRedeneren'
import SectDiagnoseEnRespons from './sections/SectDiagnoseEnRespons'
import SectTweedeLijnsBehandeling from './sections/SectTweedeLijnsBehandeling'
import SectSharedDecisionMaking from './sections/SectSharedDecisionMaking'
import SectBelangrijkeZiektebeelden from './sections/SectBelangrijkeZiektebeelden'
import SectGeneesmiddelen from './sections/SectGeneesmiddelen'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Casus en klinische context', icon: Activity },
  { id: 'sect-03', title: 'Klachten en bevindingen', icon: HeartPulse },
  { id: 'sect-04', title: 'Klinisch redeneren', icon: Stethoscope },
  { id: 'sect-05', title: 'Diagnose en responsbeoordeling', icon: Microscope },
  { id: 'sect-06', title: 'Keuze 2e lijns behandeling', icon: Table2 },
  { id: 'sect-07', title: 'Shared decision making', icon: Users },
  { id: 'sect-08', title: 'Belangrijke ziektebeelden', icon: Activity },
  { id: 'sect-09', title: 'Geneesmiddelen', icon: Pill },
  { id: 'sect-10', title: 'Samenvatting van de kern', icon: CircleCheck },
]

const SectionDivider = () => (
  <hr className="border-slate-200 dark:border-slate-700 my-10" />
)

const Blok5Week6Casus13CasusbijeenkomstSummary = () => (
  <SummaryLayout
    title="Multipel myeloom"
    moduleKind="casusbijeenkomst"
    description="Casusbespreking over IgG-kappa myeloom, VGPR, lenalidomide-refractair recidief, 2e lijns schema’s, geneesmiddelen en shared decision making."
    caseLabel="Week 6 · Casus 13: Multipel myeloom"
    blokLabel="Blok 5"
    practiceLink="/oefenvragen?lme=blok5-week6-casus13-casusbijeenkomst"
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
      <SummarySectionHeader icon={Microscope} title="Diagnose en responsbeoordeling" tone="emerald" />
      <SectDiagnoseEnRespons />
    </section>

    <SectionDivider />

    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Table2} title="Keuze 2e lijns behandeling" tone="sky" />
      <SectTweedeLijnsBehandeling />
    </section>

    <SectionDivider />

    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SummarySectionHeader
        icon={Users}
        title="Shared decision making en informed consent"
        tone="amber"
      />
      <SectSharedDecisionMaking />
    </section>

    <SectionDivider />

    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Activity} title="Belangrijke ziektebeelden" tone="indigo" />
      <SectBelangrijkeZiektebeelden />
    </section>

    <SectionDivider />

    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SummarySectionHeader
        icon={Pill}
        title="Geneesmiddelen en werkingsmechanismen"
        tone="rose"
      />
      <SectGeneesmiddelen />
    </section>

    <SectionDivider />

    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={CircleCheck} title="Samenvatting van de kern" tone="emerald" />
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok5Week6Casus13CasusbijeenkomstSummary
