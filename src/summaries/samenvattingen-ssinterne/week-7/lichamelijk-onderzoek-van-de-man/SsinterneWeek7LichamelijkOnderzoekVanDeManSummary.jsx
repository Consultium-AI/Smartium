// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module lichamelijk-onderzoek-van-de-man
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
import SectInleiding from './sections/SectInleiding'
import SectAnatomieVanDeMannelijkeGenitalia from './sections/SectAnatomieVanDeMannelijkeGenitalia'
import SectHetLiesgebied from './sections/SectHetLiesgebied'
import SectOnderzoekVanDeGenitalia from './sections/SectOnderzoekVanDeGenitalia'
import SectRectaalOnderzoek from './sections/SectRectaalOnderzoek'
import SectDeProstaatZonesEnKlinischeBetekenis from './sections/SectDeProstaatZonesEnKlinischeBetekenis'
import SectStadiaVanProstaatcarcinoom from './sections/SectStadiaVanProstaatcarcinoom'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Inleiding", icon: FileText },
    { id: 'sect-03', title: "Anatomie van de mannelijke genitalia", icon: Layers },
    { id: 'sect-04', title: "Het liesgebied", icon: FileText },
    { id: 'sect-05', title: "Onderzoek van de genitalia", icon: Microscope },
    { id: 'sect-06', title: "Rectaal onderzoek", icon: Microscope },
    { id: 'sect-07', title: "De prostaat: zones en klinische betekenis", icon: FileText },
    { id: 'sect-08', title: "Stadia van prostaatcarcinoom", icon: FileText },
    { id: 'sect-09', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek7LichamelijkOnderzoekVanDeManSummary = () => (
  <SummaryLayout
    title="Lichamelijk onderzoek van de man"
    description="Bij urogenitale klachten hoort naast het algemene lichamelijk onderzoek ook onderzoek van de genitalia en vaak een rectaal onderzoek. Dat kan voor zowel patiënt als arts belastend zijn. Gevoelens van gêne zijn normaal, maar het is…"
    caseLabel="Week 7 · Lichamelijk onderzoek van de man"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectInleiding />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectAnatomieVanDeMannelijkeGenitalia />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectHetLiesgebied />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectOnderzoekVanDeGenitalia />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectRectaalOnderzoek />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectDeProstaatZonesEnKlinischeBetekenis />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectStadiaVanProstaatcarcinoom />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek7LichamelijkOnderzoekVanDeManSummary
