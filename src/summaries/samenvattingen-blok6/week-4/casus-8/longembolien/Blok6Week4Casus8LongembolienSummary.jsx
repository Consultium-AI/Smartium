// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module longembolien
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
import SectPathofysiologieVanLongembolieN from './sections/SectPathofysiologieVanLongembolieN'
import SectEpidemiologie from './sections/SectEpidemiologie'
import SectKlinischePresentatieEnRisicofactoren from './sections/SectKlinischePresentatieEnRisicofactoren'
import SectDiagnostiek from './sections/SectDiagnostiek'
import SectBehandeling from './sections/SectBehandeling'
import SectHestiaScore from './sections/SectHestiaScore'
import SectKlinischeToepassing from './sections/SectKlinischeToepassing'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Pathofysiologie van longembolieën", icon: Layers },
    { id: 'sect-03', title: "Epidemiologie", icon: FileText },
    { id: 'sect-04', title: "Klinische presentatie en risicofactoren", icon: FileText },
    { id: 'sect-05', title: "Diagnostiek", icon: Microscope },
    { id: 'sect-06', title: "Behandeling", icon: HeartPulse },
    { id: 'sect-07', title: "Hestia-score", icon: FileText },
    { id: 'sect-08', title: "Klinische toepassing", icon: FileText },
    { id: 'sect-09', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week4Casus8LongembolienSummary = () => (
  <SummaryLayout
    title="Longemboliën"
    description="Een longembolie is een ernstige aandoening waarbij een bloedvat in de longen verstopt raakt door een bloedstolsel. Meestal is dat stolsel ontstaan in een diepe vene in de benen of elders in het lichaam en daarna losgeraakt. Zo’n stolsel…"
    caseLabel="Week 4 · Casus 8: Pijn en benauwd"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectPathofysiologieVanLongembolieN />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectEpidemiologie />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectKlinischePresentatieEnRisicofactoren />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectDiagnostiek />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectBehandeling />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectHestiaScore />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectKlinischeToepassing />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week4Casus8LongembolienSummary
