// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module kraambed
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
import SectKraambedWatHoortBijHetNormaleHerstel from './sections/SectKraambedWatHoortBijHetNormaleHerstel'
import SectFysiologieVanHetKraambed from './sections/SectFysiologieVanHetKraambed'
import SectInfectiesInHetKraambed from './sections/SectInfectiesInHetKraambed'
import SectLactatieEnSpruw from './sections/SectLactatieEnSpruw'
import SectTromboseInHetKraambed from './sections/SectTromboseInHetKraambed'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Kraambed: wat hoort bij het normale herstel?", icon: FileText },
    { id: 'sect-03', title: "Fysiologie van het kraambed", icon: Layers },
    { id: 'sect-04', title: "Infecties in het kraambed", icon: FileText },
    { id: 'sect-05', title: "Lactatie en spruw", icon: FileText },
    { id: 'sect-06', title: "Trombose in het kraambed", icon: FileText },
    { id: 'sect-07', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek1KraambedSummary = () => (
  <SummaryLayout
    title="Kraambed"
    description="Na het bestuderen van dit onderwerp moet je verschijnselen kunnen herkennen die passen bij het normale kraambed. Ook moet je van een aantal veelvoorkomende problemen in het kraambed de oorzaak, klachten, diagnostiek, behandeling en…"
    caseLabel="Week 1 · Kraambed"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectKraambedWatHoortBijHetNormaleHerstel />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectFysiologieVanHetKraambed />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectInfectiesInHetKraambed />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectLactatieEnSpruw />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectTromboseInHetKraambed />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek1KraambedSummary
