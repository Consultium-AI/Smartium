import {
  Activity,
  BookOpen,
  CircleCheck,
  HeartPulse,
  Layers,
  Pill,
  Stethoscope,
  Table2,
  Users,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import SummarySectionHeader from './SummarySectionHeader'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectCasusEnKlinischeContext from './sections/SectCasusEnKlinischeContext'
import SectAfweerEnTolerantie from './sections/SectAfweerEnTolerantie'
import SectReumatischeAutoImmuunziekten from './sections/SectReumatischeAutoImmuunziekten'
import SectSjogrenClassificatie from './sections/SectSjogrenClassificatie'
import SectCasuistiekSjogren from './sections/SectCasuistiekSjogren'
import SectBehandelingVanSjogren from './sections/SectBehandelingVanSjogren'
import SectBelangrijkeGeneesmiddelen from './sections/SectBelangrijkeGeneesmiddelen'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Casus en klinische context', icon: Activity },
  { id: 'sect-03', title: 'Afweer en tolerantie', icon: Layers },
  { id: 'sect-04', title: 'Reumatische ziektebeelden', icon: Table2 },
  { id: 'sect-05', title: 'Sjögren: classificatie', icon: Stethoscope },
  { id: 'sect-06', title: 'Casuïstiek Sjögren', icon: Users },
  { id: 'sect-07', title: 'Behandeling Sjögren', icon: HeartPulse },
  { id: 'sect-08', title: 'Geneesmiddelen', icon: Pill },
  { id: 'sect-09', title: 'Samenvatting', icon: CircleCheck },
]

const SectionDivider = () => (
  <hr className="border-slate-200 dark:border-slate-700 my-10" />
)

const Blok5Week5Casus10CasusbijeenkomstSummary = () => (
  <SummaryLayout
    title="Patiënt met auto-inflammatoire ziekte"
    moduleKind="casusbijeenkomst"
    description="Casusbespreking over immuundeficiëntie, auto-inflammatie en auto-immuniteit, met Sjögren als kernbeeld: classificatie, vier patiëntcategorieën en gericht behandelbeleid."
    caseLabel="Week 5 · Casus 10: Patiënt met auto-inflammatoire ziekte"
    blokLabel="Blok 5"
    practiceLink="/oefenvragen?lme=blok5-week5-casus10-casusbijeenkomst"
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
      <SummarySectionHeader icon={Layers} title="Afweer en tolerantie" tone="indigo" />
      <SectAfweerEnTolerantie />
    </section>

    <SectionDivider />

    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Table2} title="Reumatische ziektebeelden" tone="sky" />
      <SectReumatischeAutoImmuunziekten />
    </section>

    <SectionDivider />

    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Stethoscope} title="Sjögren: classificatie" tone="purple" />
      <SectSjogrenClassificatie />
    </section>

    <SectionDivider />

    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Users} title="Casuïstiek Sjögren" tone="rose" />
      <SectCasuistiekSjogren />
    </section>

    <SectionDivider />

    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={HeartPulse} title="Behandeling Sjögren" tone="amber" />
      <SectBehandelingVanSjogren />
    </section>

    <SectionDivider />

    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Pill} title="Geneesmiddelen" tone="emerald" />
      <SectBelangrijkeGeneesmiddelen />
    </section>

    <SectionDivider />

    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={CircleCheck} title="Samenvatting" tone="emerald" />
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok5Week5Casus10CasusbijeenkomstSummary
