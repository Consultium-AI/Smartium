// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module baring
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
import SectDeBaringAlsFysiologischProces from './sections/SectDeBaringAlsFysiologischProces'
import SectOntsluitingstijdperk from './sections/SectOntsluitingstijdperk'
import SectUitdrijvingstijdperk from './sections/SectUitdrijvingstijdperk'
import SectNageboortetijdperk from './sections/SectNageboortetijdperk'
import SectKlinischeRelevantie from './sections/SectKlinischeRelevantie'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "De baring als fysiologisch proces", icon: Layers },
    { id: 'sect-03', title: "Ontsluitingstijdperk", icon: FileText },
    { id: 'sect-04', title: "Uitdrijvingstijdperk", icon: FileText },
    { id: 'sect-05', title: "Nageboortetijdperk", icon: FileText },
    { id: 'sect-06', title: "Klinische relevantie", icon: FileText },
    { id: 'sect-07', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek1BaringSummary = () => (
  <SummaryLayout
    title="Baring"
    description="Na het doornemen van deze stof kun je de fysiologie van de normale baring herkennen en een fysiologische baring begeleiden. Daarbij hoort dat je de verschillende fasen van de baring kent, de voortgang kunt beoordelen en weet welke…"
    caseLabel="Week 1 · Baring"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectDeBaringAlsFysiologischProces />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectOntsluitingstijdperk />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectUitdrijvingstijdperk />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectNageboortetijdperk />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectKlinischeRelevantie />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek1BaringSummary
