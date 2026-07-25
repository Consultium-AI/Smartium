// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module radiologie-van-het-abdomen
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
import SectWaaromRadiologieVanHetAbdomenBelangr from './sections/SectWaaromRadiologieVanHetAbdomenBelangr'
import SectOriNtatieOpEenCtAbdomen from './sections/SectOriNtatieOpEenCtAbdomen'
import SectAnatomieOpDeBuikoverzichtfoto from './sections/SectAnatomieOpDeBuikoverzichtfoto'
import SectSystematiekBijEenCtAbdomen from './sections/SectSystematiekBijEenCtAbdomen'
import SectBelangrijkeOrganenOpDeCt from './sections/SectBelangrijkeOrganenOpDeCt'
import SectBelangrijkeBloedvatenOpDeCt from './sections/SectBelangrijkeBloedvatenOpDeCt'
import SectKlinischeCasuStiek from './sections/SectKlinischeCasuStiek'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Waarom radiologie van het abdomen belangrijk is", icon: FileText },
    { id: 'sect-03', title: "Oriëntatie op een CT-abdomen", icon: FileText },
    { id: 'sect-04', title: "Anatomie op de buikoverzichtfoto", icon: Layers },
    { id: 'sect-05', title: "Systematiek bij een CT-abdomen", icon: FileText },
    { id: 'sect-06', title: "Belangrijke organen op de CT", icon: FileText },
    { id: 'sect-07', title: "Belangrijke bloedvaten op de CT", icon: FileText },
    { id: 'sect-08', title: "Klinische casuïstiek", icon: FileText },
    { id: 'sect-09', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek1RadiologieVanHetAbdomenSummary = () => (
  <SummaryLayout
    title="Radiologie van het abdomen"
    description="Bij ernstiger ziektebeelden wordt de diagnose vaak gesteld met beeldvorming. Als arts moet je daarom weten welke beeldvorming je wanneer aanvraagt, maar ook hoe je de beelden zelf een beetje kunt begrijpen. Daarvoor is het eerst nodig…"
    caseLabel="Week 1 · Radiologie van het abdomen"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectWaaromRadiologieVanHetAbdomenBelangr />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectOriNtatieOpEenCtAbdomen />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectAnatomieOpDeBuikoverzichtfoto />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectSystematiekBijEenCtAbdomen />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectBelangrijkeOrganenOpDeCt />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectBelangrijkeBloedvatenOpDeCt />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectKlinischeCasuStiek />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek1RadiologieVanHetAbdomenSummary
