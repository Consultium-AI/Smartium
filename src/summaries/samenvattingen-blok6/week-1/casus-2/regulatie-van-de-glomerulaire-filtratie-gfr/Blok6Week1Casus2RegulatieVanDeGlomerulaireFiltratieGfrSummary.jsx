// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module regulatie-van-de-glomerulaire-filtratie-gfr
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
import SectGlomerulaireFiltratieHetBasisprincip from './sections/SectGlomerulaireFiltratieHetBasisprincip'
import SectRenaleBloeddoorstromingEnAutoregulat from './sections/SectRenaleBloeddoorstromingEnAutoregulat'
import SectHormonaleRegulatieVanDeGfr from './sections/SectHormonaleRegulatieVanDeGfr'
import SectMedicatieEnKlinischeGevolgen from './sections/SectMedicatieEnKlinischeGevolgen'
import SectWaaromDezeRegulatieBelangrijkIs from './sections/SectWaaromDezeRegulatieBelangrijkIs'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Glomerulaire filtratie: het basisprincipe", icon: FileText },
    { id: 'sect-03', title: "Renale bloeddoorstroming en autoregulatie", icon: FileText },
    { id: 'sect-04', title: "Hormonale regulatie van de GFR", icon: FileText },
    { id: 'sect-05', title: "Medicatie en klinische gevolgen", icon: FileText },
    { id: 'sect-06', title: "Waarom deze regulatie belangrijk is", icon: FileText },
    { id: 'sect-07', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week1Casus2RegulatieVanDeGlomerulaireFiltratieGfrSummary = () => (
  <SummaryLayout
    title="Regulatie van de glomerulaire filtratie (GFR)"
    description="Na het doornemen van deze stof kun je uitleggen hoe de renale bloeddoorstroming en de glomerulaire filtratiesnelheid (GFR) worden gereguleerd. Ook kun je beschrijven welke fysiologische processen hierbij betrokken zijn en hoe die…"
    caseLabel="Week 1 · Casus 2: De magische wereld van glomeruli en tubuli en de regulatie van GFR"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectGlomerulaireFiltratieHetBasisprincip />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectRenaleBloeddoorstromingEnAutoregulat />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectHormonaleRegulatieVanDeGfr />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectMedicatieEnKlinischeGevolgen />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectWaaromDezeRegulatieBelangrijkIs />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week1Casus2RegulatieVanDeGlomerulaireFiltratieGfrSummary
