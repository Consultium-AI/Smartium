// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module reacties-op-geneesmiddelen
import {
  Activity,
  BookOpen,
  CircleCheck,
  FileText,
  HeartPulse,
  Layers,
  Microscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../components/SummaryLayout'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectReactiesOpGeneesmiddelenDeBasis from './sections/SectReactiesOpGeneesmiddelenDeBasis'
import SectVoorspelbareEnOnvoorspelbareReacties from './sections/SectVoorspelbareEnOnvoorspelbareReacties'
import SectOvergevoeligheidsreactiesOpGeneesmid from './sections/SectOvergevoeligheidsreactiesOpGeneesmid'
import SectAllergischeReacties from './sections/SectAllergischeReacties'
import SectPseudoAllergischeReacties from './sections/SectPseudoAllergischeReacties'
import SectNsaidSEnAspirine from './sections/SectNsaidSEnAspirine'
import SectReactiesOpNsaidS from './sections/SectReactiesOpNsaidS'
import SectAspirineAlsVoorbeeld from './sections/SectAspirineAlsVoorbeeld'
import SectTabel1OverzichtVanReactiesOpNsaidS from './sections/SectTabel1OverzichtVanReactiesOpNsaidS'
import SectHoeHerkenJeEenGeneesmiddelreactie from './sections/SectHoeHerkenJeEenGeneesmiddelreactie'
import SectKlinischeBetekenis from './sections/SectKlinischeBetekenis'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Reacties op geneesmiddelen: de basis", icon: FileText },
    { id: 'sect-03', title: "Voorspelbare en onvoorspelbare reacties", icon: FileText },
    { id: 'sect-04', title: "Overgevoeligheidsreacties op geneesmiddelen", icon: FileText },
    { id: 'sect-05', title: "Allergische reacties", icon: FileText },
    { id: 'sect-06', title: "Pseudo-allergische reacties", icon: FileText },
    { id: 'sect-07', title: "NSAID’s en aspirine", icon: FileText },
    { id: 'sect-08', title: "Reacties op NSAID’s", icon: FileText },
    { id: 'sect-09', title: "Aspirine als voorbeeld", icon: FileText },
    { id: 'sect-10', title: "Tabel 1. Overzicht van reacties op NSAID’s", icon: Table2 },
    { id: 'sect-11', title: "Hoe herken je een geneesmiddelreactie?", icon: FileText },
    { id: 'sect-12', title: "Klinische betekenis", icon: FileText },
    { id: 'sect-13', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek2ReactiesOpGeneesmiddelenSummary = () => (
  <SummaryLayout
    title="Reacties op geneesmiddelen"
    description="Geneesmiddelen kunnen naast hun gewenste werking ook ongewenste effecten geven. Dat noemen we in het algemeen bijwerkingen of adverse drug reactions. Voor een arts is het belangrijk om zulke reacties te herkennen, omdat ze kunnen…"
    caseLabel="Week 2 · Reacties op geneesmiddelen"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectReactiesOpGeneesmiddelenDeBasis />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectVoorspelbareEnOnvoorspelbareReacties />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectOvergevoeligheidsreactiesOpGeneesmid />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectAllergischeReacties />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectPseudoAllergischeReacties />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectNsaidSEnAspirine />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectReactiesOpNsaidS />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectAspirineAlsVoorbeeld />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectTabel1OverzichtVanReactiesOpNsaidS />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectHoeHerkenJeEenGeneesmiddelreactie />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectKlinischeBetekenis />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek2ReactiesOpGeneesmiddelenSummary
