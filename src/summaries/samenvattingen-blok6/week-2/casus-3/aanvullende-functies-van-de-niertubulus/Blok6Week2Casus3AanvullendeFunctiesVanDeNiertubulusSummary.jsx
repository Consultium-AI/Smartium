// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module aanvullende-functies-van-de-niertubulus
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
import SectDeNierAlsOrgaanMetMeerdereFuncties from './sections/SectDeNierAlsOrgaanMetMeerdereFuncties'
import SectEpoProductieInDeNier from './sections/SectEpoProductieInDeNier'
import SectCalciumfosfaathuishouding from './sections/SectCalciumfosfaathuishouding'
import SectMagnesiumhuishouding from './sections/SectMagnesiumhuishouding'
import SectSamenvattendVerbandTussenDeDrieFunct from './sections/SectSamenvattendVerbandTussenDeDrieFunct'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "De nier als orgaan met meerdere functies", icon: FileText },
    { id: 'sect-03', title: "EPO-productie in de nier", icon: FileText },
    { id: 'sect-04', title: "Calciumfosfaathuishouding", icon: FileText },
    { id: 'sect-05', title: "Magnesiumhuishouding", icon: FileText },
    { id: 'sect-06', title: "Samenvattend verband tussen de drie functies", icon: FileText },
    { id: 'sect-07', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week2Casus3AanvullendeFunctiesVanDeNiertubulusSummary = () => (
  <SummaryLayout
    title="Aanvullende functies van de niertubulus"
    description="Na het doornemen van deze stof kun je uitleggen hoe de nier meer doet dan alleen filtreren en uitscheiden. Je kunt beschrijven hoe erytropoëtine (EPO) in de nier wordt gemaakt en hoe dat de aanmaak van rode bloedcellen stimuleert. Ook…"
    caseLabel="Week 2 · Casus 3: Wat een elektrolytstoornis!"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectDeNierAlsOrgaanMetMeerdereFuncties />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectEpoProductieInDeNier />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectCalciumfosfaathuishouding />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectMagnesiumhuishouding />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectSamenvattendVerbandTussenDeDrieFunct />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week2Casus3AanvullendeFunctiesVanDeNiertubulusSummary
