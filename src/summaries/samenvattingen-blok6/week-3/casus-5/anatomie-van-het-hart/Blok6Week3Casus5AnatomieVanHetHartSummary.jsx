// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module anatomie-van-het-hart
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
import SectOnderdelenVanHetHart from './sections/SectOnderdelenVanHetHart'
import SectCoronairvatenEnBloedvoorzieningVanHe from './sections/SectCoronairvatenEnBloedvoorzieningVanHe'
import SectHartskeletEnVentielvlak from './sections/SectHartskeletEnVentielvlak'
import SectPrikkelgeleidingssysteem from './sections/SectPrikkelgeleidingssysteem'
import SectInnervatieVanHetHart from './sections/SectInnervatieVanHetHart'
import SectLiggingVanHetHartInDeThorax from './sections/SectLiggingVanHetHartInDeThorax'
import SectPericardiumEnPericardholte from './sections/SectPericardiumEnPericardholte'
import SectAnatomieInDoorsnedesEnKlinischeBeeld from './sections/SectAnatomieInDoorsnedesEnKlinischeBeeld'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Onderdelen van het hart", icon: FileText },
    { id: 'sect-03', title: "Coronairvaten en bloedvoorziening van het hart", icon: FileText },
    { id: 'sect-04', title: "Hartskelet en ventielvlak", icon: FileText },
    { id: 'sect-05', title: "Prikkelgeleidingssysteem", icon: FileText },
    { id: 'sect-06', title: "Innervatie van het hart", icon: FileText },
    { id: 'sect-07', title: "Ligging van het hart in de thorax", icon: FileText },
    { id: 'sect-08', title: "Pericardium en pericardholte", icon: FileText },
    { id: 'sect-09', title: "Anatomie in doorsnedes en klinische beelden", icon: Layers },
    { id: 'sect-10', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week3Casus5AnatomieVanHetHartSummary = () => (
  <SummaryLayout
    title="Anatomie van het hart"
    description="Na deze module kun je de anatomie van het hart beter herkennen en in gedachten ruimtelijk plaatsen. Je kunt de onderdelen van het hart benoemen, de grote vaten die erop aansluiten herkennen, en de ligging van het hart in de thorax…"
    caseLabel="Week 3 · Casus 5: De schrik slaat je om het hart"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectOnderdelenVanHetHart />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectCoronairvatenEnBloedvoorzieningVanHe />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectHartskeletEnVentielvlak />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectPrikkelgeleidingssysteem />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectInnervatieVanHetHart />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectLiggingVanHetHartInDeThorax />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectPericardiumEnPericardholte />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectAnatomieInDoorsnedesEnKlinischeBeeld />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week3Casus5AnatomieVanHetHartSummary
