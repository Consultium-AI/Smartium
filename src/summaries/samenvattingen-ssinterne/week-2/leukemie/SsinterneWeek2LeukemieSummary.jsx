// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module leukemie
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
import SectLeukemieHetGroteBeeld from './sections/SectLeukemieHetGroteBeeld'
import SectDiagnostiekBijVerdenkingOpLeukemie from './sections/SectDiagnostiekBijVerdenkingOpLeukemie'
import SectAcuteLeukemieAmlEnAll from './sections/SectAcuteLeukemieAmlEnAll'
import SectAcuteLymfatischeLeukemiePrecursorBAl from './sections/SectAcuteLymfatischeLeukemiePrecursorBAl'
import SectChronischeLymfatischeLeukemieCll from './sections/SectChronischeLymfatischeLeukemieCll'
import SectChronischeMyeloDeLeukemieCml from './sections/SectChronischeMyeloDeLeukemieCml'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Leukemie: het grote beeld", icon: FileText },
    { id: 'sect-03', title: "Diagnostiek bij verdenking op leukemie", icon: Microscope },
    { id: 'sect-04', title: "Acute leukemie: AML en ALL", icon: FileText },
    { id: 'sect-05', title: "Acute lymfatische leukemie: precursor B-ALL en Philadelphia-chromosoom", icon: FileText },
    { id: 'sect-06', title: "Chronische lymfatische leukemie: CLL", icon: FileText },
    { id: 'sect-07', title: "Chronische myeloïde leukemie: CML", icon: FileText },
    { id: 'sect-08', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek2LeukemieSummary = () => (
  <SummaryLayout
    title="Leukemie"
    description="Leukemie is een kwaadaardige aandoening van het bloedvormende systeem. Het belangrijkste idee is dat er een ontsporing is van voorlopercellen of rijpere bloedcellen, waardoor normale bloedaanmaak wordt verdrongen. Daardoor ontstaan…"
    caseLabel="Week 2 · Leukemie"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectLeukemieHetGroteBeeld />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectDiagnostiekBijVerdenkingOpLeukemie />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectAcuteLeukemieAmlEnAll />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectAcuteLymfatischeLeukemiePrecursorBAl />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectChronischeLymfatischeLeukemieCll />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectChronischeMyeloDeLeukemieCml />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek2LeukemieSummary
