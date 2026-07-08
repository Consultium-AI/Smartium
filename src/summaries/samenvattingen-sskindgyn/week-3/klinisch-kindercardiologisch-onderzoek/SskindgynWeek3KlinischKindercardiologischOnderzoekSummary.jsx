// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module klinisch-kindercardiologisch-onderzoek
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
import SectAlgemeneBeoordelingVanHetKind from './sections/SectAlgemeneBeoordelingVanHetKind'
import SectHarttonenDeBasis from './sections/SectHarttonenDeBasis'
import SectSystoleEnDiastoleHerkennen from './sections/SectSystoleEnDiastoleHerkennen'
import SectSystolischeGeruisen from './sections/SectSystolischeGeruisen'
import SectDiastolischeGeruisen from './sections/SectDiastolischeGeruisen'
import SectHartritmeBeoordelen from './sections/SectHartritmeBeoordelen'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Algemene beoordeling van het kind", icon: FileText },
    { id: 'sect-03', title: "Harttonen: de basis", icon: FileText },
    { id: 'sect-04', title: "Systole en diastole herkennen", icon: FileText },
    { id: 'sect-05', title: "Systolische geruisen", icon: FileText },
    { id: 'sect-06', title: "Diastolische geruisen", icon: FileText },
    { id: 'sect-07', title: "Hartritme beoordelen", icon: FileText },
    { id: 'sect-08', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek3KlinischKindercardiologischOnderzoekSummary = () => (
  <SummaryLayout
    title="Klinisch kindercardiologisch onderzoek"
    description="Bij een kind met een mogelijke aangeboren hartafwijking begin je altijd breed: je kijkt niet alleen naar het hart zelf, maar naar het hele kind. Een hartafwijking kan namelijk invloed hebben op groei, ademhaling, kleur en vochtbalans.…"
    caseLabel="Week 3 · Klinisch kindercardiologisch onderzoek"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectAlgemeneBeoordelingVanHetKind />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectHarttonenDeBasis />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectSystoleEnDiastoleHerkennen />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectSystolischeGeruisen />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectDiastolischeGeruisen />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectHartritmeBeoordelen />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek3KlinischKindercardiologischOnderzoekSummary
