// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module prolaps-en-incontinentie
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
import SectUrineIncontinentie from './sections/SectUrineIncontinentie'
import SectProlaps from './sections/SectProlaps'
import SectSteunVanDeBekkenbodem from './sections/SectSteunVanDeBekkenbodem'
import SectOnderzoekBijProlaps from './sections/SectOnderzoekBijProlaps'
import SectBeoordelingVanDeErnstVanDeProlaps from './sections/SectBeoordelingVanDeErnstVanDeProlaps'
import SectBehandelingVanProlaps from './sections/SectBehandelingVanProlaps'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Urine-incontinentie", icon: FileText },
    { id: 'sect-03', title: "Prolaps", icon: FileText },
    { id: 'sect-04', title: "Steun van de bekkenbodem", icon: FileText },
    { id: 'sect-05', title: "Onderzoek bij prolaps", icon: Microscope },
    { id: 'sect-06', title: "Beoordeling van de ernst van de prolaps", icon: FileText },
    { id: 'sect-07', title: "Behandeling van prolaps", icon: HeartPulse },
    { id: 'sect-08', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek2ProlapsEnIncontinentieSummary = () => (
  <SummaryLayout
    title="Prolaps en incontinentie"
    description="Urine-incontinentie is ongewild urineverlies. Bij vrouwen komt dit vaak voor en het is belangrijk om eerst goed te bepalen welke vorm van incontinentie er speelt, omdat de aanpak daarvan verschilt. Een jonge vrouw met urineverlies heeft…"
    caseLabel="Week 2 · Prolaps en incontinentie"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectUrineIncontinentie />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectProlaps />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectSteunVanDeBekkenbodem />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectOnderzoekBijProlaps />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectBeoordelingVanDeErnstVanDeProlaps />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectBehandelingVanProlaps />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek2ProlapsEnIncontinentieSummary
