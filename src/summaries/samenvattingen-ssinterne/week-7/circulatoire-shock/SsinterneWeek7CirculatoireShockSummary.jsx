// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module circulatoire-shock
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
import SectHetCardiovasculaireSysteemAlsBasis from './sections/SectHetCardiovasculaireSysteemAlsBasis'
import SectBloeddrukregulatieSnelEnLangzaam from './sections/SectBloeddrukregulatieSnelEnLangzaam'
import SectBloeddrukEnCardiacOutput from './sections/SectBloeddrukEnCardiacOutput'
import SectWatIsCirculatoireShock from './sections/SectWatIsCirculatoireShock'
import SectVierSoortenShock from './sections/SectVierSoortenShock'
import SectBehandelingVanShock from './sections/SectBehandelingVanShock'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Het cardiovasculaire systeem als basis", icon: FileText },
    { id: 'sect-03', title: "Bloeddrukregulatie: snel en langzaam", icon: FileText },
    { id: 'sect-04', title: "Bloeddruk en cardiac output", icon: FileText },
    { id: 'sect-05', title: "Wat is circulatoire shock?", icon: FileText },
    { id: 'sect-06', title: "Vier soorten shock", icon: FileText },
    { id: 'sect-07', title: "Behandeling van shock", icon: HeartPulse },
    { id: 'sect-08', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek7CirculatoireShockSummary = () => (
  <SummaryLayout
    title="Circulatoire shock"
    description="Om shock goed te begrijpen, moet je eerst weten hoe de circulatie normaal werkt. Het cardiovasculaire systeem bestaat uit twee door het hart gescheiden circulatiesystemen: de pulmonale circulatie en de systemische circulatie. Samen…"
    caseLabel="Week 7 · Circulatoire shock"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectHetCardiovasculaireSysteemAlsBasis />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectBloeddrukregulatieSnelEnLangzaam />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectBloeddrukEnCardiacOutput />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectWatIsCirculatoireShock />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectVierSoortenShock />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectBehandelingVanShock />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek7CirculatoireShockSummary
