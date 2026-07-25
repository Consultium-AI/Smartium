// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module niertransplantatie
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
import SectNierfunctievervangendeTherapieHetGro from './sections/SectNierfunctievervangendeTherapieHetGro'
import SectHetPredialysetraject from './sections/SectHetPredialysetraject'
import SectWaaromIsNiertransplantatieVaakGunsti from './sections/SectWaaromIsNiertransplantatieVaakGunsti'
import SectNiertransplantatie from './sections/SectNiertransplantatie'
import SectDonornierenLevendeEnOverledenDonor from './sections/SectDonornierenLevendeEnOverledenDonor'
import SectImmunologischeMatchEnAfstoting from './sections/SectImmunologischeMatchEnAfstoting'
import SectImmuunsuppressieNaTransplantatie from './sections/SectImmuunsuppressieNaTransplantatie'
import SectHemodialyseEnHemofiltratie from './sections/SectHemodialyseEnHemofiltratie'
import SectContinueHemofiltratie from './sections/SectContinueHemofiltratie'
import SectPeritonealeDialyse from './sections/SectPeritonealeDialyse'
import SectSamenvattendOverzichtVanDeBehandelin from './sections/SectSamenvattendOverzichtVanDeBehandelin'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Nierfunctievervangende therapie: het grote plaatje", icon: HeartPulse },
    { id: 'sect-03', title: "Het predialysetraject", icon: FileText },
    { id: 'sect-04', title: "Waarom is niertransplantatie vaak gunstig?", icon: FileText },
    { id: 'sect-05', title: "Niertransplantatie", icon: FileText },
    { id: 'sect-06', title: "Donornieren: levende en overleden donor", icon: FileText },
    { id: 'sect-07', title: "Immunologische match en afstoting", icon: FileText },
    { id: 'sect-08', title: "Immuunsuppressie na transplantatie", icon: FileText },
    { id: 'sect-09', title: "Hemodialyse en hemofiltratie", icon: FileText },
    { id: 'sect-10', title: "Continue hemofiltratie", icon: FileText },
    { id: 'sect-11', title: "Peritoneale dialyse", icon: FileText },
    { id: 'sect-12', title: "Samenvattend overzicht van de behandelingen", icon: HeartPulse },
    { id: 'sect-13', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek4NiertransplantatieSummary = () => (
  <SummaryLayout
    title="Niertransplantatie"
    description="Bij terminale nierinsufficiëntie werken de nieren niet meer voldoende om afvalstoffen, vocht en elektrolyten goed te reguleren. Zonder behandeling is dat niet lang met het leven verenigbaar. Daarom zijn er vormen van…"
    caseLabel="Week 4 · Niertransplantatie"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectNierfunctievervangendeTherapieHetGro />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectHetPredialysetraject />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectWaaromIsNiertransplantatieVaakGunsti />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectNiertransplantatie />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectDonornierenLevendeEnOverledenDonor />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectImmunologischeMatchEnAfstoting />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectImmuunsuppressieNaTransplantatie />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectHemodialyseEnHemofiltratie />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectContinueHemofiltratie />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectPeritonealeDialyse />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectSamenvattendOverzichtVanDeBehandelin />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek4NiertransplantatieSummary
