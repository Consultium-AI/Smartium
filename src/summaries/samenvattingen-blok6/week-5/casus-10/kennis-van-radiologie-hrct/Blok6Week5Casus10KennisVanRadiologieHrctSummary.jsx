// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module kennis-van-radiologie-hrct
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
import SectCtThoraxBasisVanBeeldvorming from './sections/SectCtThoraxBasisVanBeeldvorming'
import SectHoeWordtEenCtThoraxGemaakt from './sections/SectHoeWordtEenCtThoraxGemaakt'
import SectAnatomieOpCtThorax from './sections/SectAnatomieOpCtThorax'
import SectHrctHighResolutionComputedTomography from './sections/SectHrctHighResolutionComputedTomography'
import SectBeoordelingVanLongenOpCt from './sections/SectBeoordelingVanLongenOpCt'
import SectWaarZittenDeAfwijkingen from './sections/SectWaarZittenDeAfwijkingen'
import SectSamenvattendLerenKijkenNaarEenCtVanD from './sections/SectSamenvattendLerenKijkenNaarEenCtVanD'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "CT-thorax: basis van beeldvorming", icon: FileText },
    { id: 'sect-03', title: "Hoe wordt een CT-thorax gemaakt?", icon: FileText },
    { id: 'sect-04', title: "Anatomie op CT-thorax", icon: Layers },
    { id: 'sect-05', title: "HRCT: High Resolution Computed Tomography", icon: FileText },
    { id: 'sect-06', title: "Beoordeling van longen op CT", icon: FileText },
    { id: 'sect-07', title: "Waar zitten de afwijkingen?", icon: FileText },
    { id: 'sect-08', title: "Samenvattend leren kijken naar een CT van de thorax", icon: FileText },
    { id: 'sect-09', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week5Casus10KennisVanRadiologieHrctSummary = () => (
  <SummaryLayout
    title="Kennis van radiologie HRCT"
    description="Na het doornemen van deze stof moet je kunnen uitleggen op welke verschillende manieren een CT-scanner de thorax kan afbeelden. Daarnaast moet je normale anatomische structuren op een CT-thorax kunnen herkennen en aanwijzen. Tot slot…"
    caseLabel="Week 5 · Casus 10: Kortademigheid bij inspanning"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectCtThoraxBasisVanBeeldvorming />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectHoeWordtEenCtThoraxGemaakt />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectAnatomieOpCtThorax />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectHrctHighResolutionComputedTomography />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectBeoordelingVanLongenOpCt />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectWaarZittenDeAfwijkingen />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectSamenvattendLerenKijkenNaarEenCtVanD />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week5Casus10KennisVanRadiologieHrctSummary
