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
import SectNormaleBevallingEnBaringInHetAlgemee from './sections/SectNormaleBevallingEnBaringInHetAlgemee'
import SectOntsluitingstijdperk from './sections/SectOntsluitingstijdperk'
import SectHoeBeoordeelJeOfIemandInPartuIs from './sections/SectHoeBeoordeelJeOfIemandInPartuIs'
import SectVaginaalToucherVolgensPovias from './sections/SectVaginaalToucherVolgensPovias'
import SectIndalingVolgensDeVlakkenVanHodge from './sections/SectIndalingVolgensDeVlakkenVanHodge'
import SectTrageVorderingVanDeBaring from './sections/SectTrageVorderingVanDeBaring'
import SectBeleidBijNietVorderendeBaring from './sections/SectBeleidBijNietVorderendeBaring'
import SectUitdrijvingstijdperk from './sections/SectUitdrijvingstijdperk'
import SectWaaromDraaitHetHoofd from './sections/SectWaaromDraaitHetHoofd'
import SectVerloopVanDeGeboorte from './sections/SectVerloopVanDeGeboorte'
import SectNageboortetijdperkEnPlacenta from './sections/SectNageboortetijdperkEnPlacenta'
import SectKlinischeRelevantie from './sections/SectKlinischeRelevantie'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Normale bevalling en baring in het algemeen", icon: FileText },
    { id: 'sect-03', title: "Ontsluitingstijdperk", icon: FileText },
    { id: 'sect-04', title: "Hoe beoordeel je of iemand in partu is?", icon: FileText },
    { id: 'sect-05', title: "Vaginaal toucher volgens POVIAS", icon: FileText },
    { id: 'sect-06', title: "Indaling volgens de vlakken van Hodge", icon: FileText },
    { id: 'sect-07', title: "Trage vordering van de baring", icon: FileText },
    { id: 'sect-08', title: "Beleid bij niet-vorderende baring", icon: HeartPulse },
    { id: 'sect-09', title: "Uitdrijvingstijdperk", icon: FileText },
    { id: 'sect-10', title: "Waarom draait het hoofd?", icon: FileText },
    { id: 'sect-11', title: "Verloop van de geboorte", icon: FileText },
    { id: 'sect-12', title: "Nageboortetijdperk en placenta", icon: FileText },
    { id: 'sect-13', title: "Klinische relevantie", icon: FileText },
    { id: 'sect-14', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek2BaringSummary = () => (
  <SummaryLayout
    title="Baring"
    description="Na deze module moet je de normale baring kunnen herkennen en de vier tijdperken van de baring kunnen benoemen. Je moet begrijpen wat er gebeurt in het ontsluitingstijdperk en het uitdrijvingstijdperk, hoe je beoordeelt of een vrouw in…"
    caseLabel="Week 2 · Baring"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectNormaleBevallingEnBaringInHetAlgemee />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectOntsluitingstijdperk />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectHoeBeoordeelJeOfIemandInPartuIs />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectVaginaalToucherVolgensPovias />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectIndalingVolgensDeVlakkenVanHodge />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectTrageVorderingVanDeBaring />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectBeleidBijNietVorderendeBaring />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectUitdrijvingstijdperk />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectWaaromDraaitHetHoofd />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectVerloopVanDeGeboorte />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectNageboortetijdperkEnPlacenta />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectKlinischeRelevantie />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek2BaringSummary
