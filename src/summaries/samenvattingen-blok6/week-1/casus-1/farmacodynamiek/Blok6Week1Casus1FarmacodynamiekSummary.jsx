// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module farmacodynamiek
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
import SummaryLayout from '../../../../../components/SummaryLayout'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectReceptorfarmacologie from './sections/SectReceptorfarmacologie'
import SectLigandbindingEnReceptorbezetting from './sections/SectLigandbindingEnReceptorbezetting'
import SectPotentieEnEffectiviteit from './sections/SectPotentieEnEffectiviteit'
import SectAntagonisten from './sections/SectAntagonisten'
import SectSchildplotEnCompetitiefReversibelAnt from './sections/SectSchildplotEnCompetitiefReversibelAnt'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Receptorfarmacologie", icon: FileText },
    { id: 'sect-03', title: "Ligandbinding en receptorbezetting", icon: FileText },
    { id: 'sect-04', title: "Potentie en effectiviteit", icon: FileText },
    { id: 'sect-05', title: "Antagonisten", icon: FileText },
    { id: 'sect-06', title: "Schildplot en competitief reversibel antagonisme", icon: FileText },
    { id: 'sect-07', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week1Casus1FarmacodynamiekSummary = () => (
  <SummaryLayout
    title="Farmacodynamiek"
    description="Na het doornemen van deze module kun je de begrippen agonist, partiële agonist, antagonist, potentie en effectiviteit uitleggen. Ook kun je uitleggen hoe responsen op liganden gekwantificeerd worden."
    caseLabel="Week 1 · Casus 1: Tarzan en Jane krijgen pillen"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectReceptorfarmacologie />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectLigandbindingEnReceptorbezetting />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectPotentieEnEffectiviteit />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectAntagonisten />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectSchildplotEnCompetitiefReversibelAnt />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week1Casus1FarmacodynamiekSummary
