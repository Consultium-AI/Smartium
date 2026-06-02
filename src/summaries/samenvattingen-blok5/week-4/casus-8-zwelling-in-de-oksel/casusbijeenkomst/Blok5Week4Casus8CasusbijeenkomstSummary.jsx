import {
  Activity,
  BookOpen,
  CircleCheck,
  HeartPulse,
  Layers,
  Microscope,
  Pill,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import SummarySectionHeader from './SummarySectionHeader'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectCasusEnKlinischeContext from './sections/SectCasusEnKlinischeContext'
import SectImmunologieVanTolerantie from './sections/SectImmunologieVanTolerantie'
import SectBelangrijkeZiektebeelden from './sections/SectBelangrijkeZiektebeelden'
import SectSjogrenDiagnostiekEnClassificatie from './sections/SectSjogrenDiagnostiekEnClassificatie'
import SectCasuistiekSjogren from './sections/SectCasuistiekSjogren'
import SectDiagnostiekBijSjogren from './sections/SectDiagnostiekBijSjogren'
import SectBehandelingVanSjogren from './sections/SectBehandelingVanSjogren'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Casus en klinische context', icon: Activity },
  { id: 'sect-03', title: 'Immunologie en tolerantie', icon: Layers },
  { id: 'sect-04', title: 'Reumatische ziektebeelden', icon: Table2 },
  { id: 'sect-05', title: 'Sjögren: diagnostiek', icon: Stethoscope },
  { id: 'sect-06', title: 'Casuïstiek Sjögren', icon: HeartPulse },
  { id: 'sect-07', title: 'Diagnostiek Sjögren', icon: Microscope },
  { id: 'sect-08', title: 'Behandeling Sjögren', icon: Pill },
  { id: 'sect-09', title: 'Samenvatting', icon: CircleCheck },
]

const SectionDivider = () => (
  <hr className="border-slate-200 dark:border-slate-700 my-10" />
)

const Blok5Week4Casus8CasusbijeenkomstSummary = () => (
  <SummaryLayout
    title="Zwelling in de oksel"
    moduleKind="casusbijeenkomst"
    description="De casusbijeenkomst plaatst zwelling in de oksel in de context van auto-immuniteit en reumatologie, met Sjögren als kernbeeld: tolerantie, classificatie, casuïstiek en behandeling."
    caseLabel="Week 4 · Casus 8: Zwelling in de oksel"
    blokLabel="Blok 5"
    practiceLink="/oefenvragen?lme=blok5-week4-casus8-casusbijeenkomst"
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
      <SummarySectionHeader icon={Layers} title="Immunologie en tolerantie" tone="indigo" />
      <SectImmunologieVanTolerantie />
    </section>

    <SectionDivider />

    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Table2} title="Reumatische ziektebeelden" tone="sky" />
      <SectBelangrijkeZiektebeelden />
    </section>

    <SectionDivider />

    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Stethoscope} title="Sjögren: diagnostiek" tone="purple" />
      <SectSjogrenDiagnostiekEnClassificatie />
    </section>

    <SectionDivider />

    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={HeartPulse} title="Casuïstiek Sjögren" tone="rose" />
      <SectCasuistiekSjogren />
    </section>

    <SectionDivider />

    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Microscope} title="Diagnostiek Sjögren" tone="emerald" />
      <SectDiagnostiekBijSjogren />
    </section>

    <SectionDivider />

    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Pill} title="Behandeling Sjögren" tone="amber" />
      <SectBehandelingVanSjogren />
    </section>

    <SectionDivider />

    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={CircleCheck} title="Samenvatting" tone="emerald" />
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok5Week4Casus8CasusbijeenkomstSummary
