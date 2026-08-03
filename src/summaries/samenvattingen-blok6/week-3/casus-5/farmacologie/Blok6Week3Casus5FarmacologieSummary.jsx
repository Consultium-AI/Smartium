// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module farmacologie
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
import SectBTablokkersHetBasisidee from './sections/SectBTablokkersHetBasisidee'
import SectFarmacodynamiekVanDeBTablokkers from './sections/SectFarmacodynamiekVanDeBTablokkers'
import SectFarmacokinetiekVanDeBTablokkers from './sections/SectFarmacokinetiekVanDeBTablokkers'
import SectMetoprololAtenololEnPropranololInDeP from './sections/SectMetoprololAtenololEnPropranololInDeP'
import SectSelectiviteitVanAtenololWatLaatHetMo from './sections/SectSelectiviteitVanAtenololWatLaatHetMo'
import SectVergelijkingTussenAtenololEnMetoprol from './sections/SectVergelijkingTussenAtenololEnMetoprol'
import SectKlinischeRelevantieVanBTablokkersBij from './sections/SectKlinischeRelevantieVanBTablokkersBij'
import SectSamenvattendOverzichtVanDeBelangrijk from './sections/SectSamenvattendOverzichtVanDeBelangrijk'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Bètablokkers: het basisidee", icon: FileText },
    { id: 'sect-03', title: "Farmacodynamiek van de bètablokkers", icon: FileText },
    { id: 'sect-04', title: "Farmacokinetiek van de bètablokkers", icon: FileText },
    { id: 'sect-05', title: "Metoprolol, atenolol en propranolol in de praktijk", icon: FileText },
    { id: 'sect-06', title: "Selectiviteit van atenolol: wat laat het model zien?", icon: FileText },
    { id: 'sect-07', title: "Vergelijking tussen atenolol en metoprolol", icon: FileText },
    { id: 'sect-08', title: "Klinische relevantie van bètablokkers bij hartfalen", icon: FileText },
    { id: 'sect-09', title: "Samenvattend overzicht van de belangrijkste verschillen", icon: FileText },
    { id: 'sect-10', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week3Casus5FarmacologieSummary = () => (
  <SummaryLayout
    title="Farmacologie"
    description="Na het doornemen van deze module kun je de farmacodynamiek en farmacokinetiek van bètablokkers beschrijven. Daarbij gaat het vooral om de verschillen tussen metoprolol, atenolol en propranolol, en om de klinische betekenis van hun…"
    caseLabel="Week 3 · Casus 5: De schrik slaat je om het hart"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectBTablokkersHetBasisidee />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectFarmacodynamiekVanDeBTablokkers />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectFarmacokinetiekVanDeBTablokkers />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectMetoprololAtenololEnPropranololInDeP />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectSelectiviteitVanAtenololWatLaatHetMo />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectVergelijkingTussenAtenololEnMetoprol />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectKlinischeRelevantieVanBTablokkersBij />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectSamenvattendOverzichtVanDeBelangrijk />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week3Casus5FarmacologieSummary
