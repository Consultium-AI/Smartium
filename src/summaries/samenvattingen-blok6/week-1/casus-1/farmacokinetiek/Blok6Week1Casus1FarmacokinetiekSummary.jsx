// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module farmacokinetiek
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
import SectFarmacologieEnFarmacokinetiek from './sections/SectFarmacologieEnFarmacokinetiek'
import SectAdmeInHetKort from './sections/SectAdmeInHetKort'
import SectAbsorptie from './sections/SectAbsorptie'
import SectDistributie from './sections/SectDistributie'
import SectMetabolisme from './sections/SectMetabolisme'
import SectEliminatie from './sections/SectEliminatie'
import SectInvloedVanToedieningsvormen from './sections/SectInvloedVanToedieningsvormen'
import SectInvloedVanLeverfunctiestoornissenOpA from './sections/SectInvloedVanLeverfunctiestoornissenOpA'
import SectInvloedVanNierfunctiestoornissenOpAd from './sections/SectInvloedVanNierfunctiestoornissenOpAd'
import SectMorbideObesitasEnAdme from './sections/SectMorbideObesitasEnAdme'
import SectSamenvattendeVergelijkingVanDeDrieSi from './sections/SectSamenvattendeVergelijkingVanDeDrieSi'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Farmacologie en farmacokinetiek", icon: FileText },
    { id: 'sect-03', title: "ADME in het kort", icon: FileText },
    { id: 'sect-04', title: "Absorptie", icon: FileText },
    { id: 'sect-05', title: "Distributie", icon: FileText },
    { id: 'sect-06', title: "Metabolisme", icon: FileText },
    { id: 'sect-07', title: "Eliminatie", icon: FileText },
    { id: 'sect-08', title: "Invloed van toedieningsvormen", icon: FileText },
    { id: 'sect-09', title: "Invloed van leverfunctiestoornissen op ADME", icon: FileText },
    { id: 'sect-10', title: "Invloed van nierfunctiestoornissen op ADME", icon: FileText },
    { id: 'sect-11', title: "Morbide obesitas en ADME", icon: FileText },
    { id: 'sect-12', title: "Samenvattende vergelijking van de drie situaties", icon: FileText },
    { id: 'sect-13', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week1Casus1FarmacokinetiekSummary = () => (
  <SummaryLayout
    title="Farmacokinetiek"
    description="Farmacologie gaat over de interactie tussen een geneesmiddel en het menselijk lichaam: hoe werken geneesmiddelen, en hoe bewegen ze zich door het lichaam? Binnen de farmacologie zijn er twee grote onderdelen:"
    caseLabel="Week 1 · Casus 1: Tarzan en Jane krijgen pillen"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectFarmacologieEnFarmacokinetiek />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectAdmeInHetKort />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectAbsorptie />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectDistributie />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectMetabolisme />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectEliminatie />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectInvloedVanToedieningsvormen />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectInvloedVanLeverfunctiestoornissenOpA />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectInvloedVanNierfunctiestoornissenOpAd />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectMorbideObesitasEnAdme />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectSamenvattendeVergelijkingVanDeDrieSi />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week1Casus1FarmacokinetiekSummary
