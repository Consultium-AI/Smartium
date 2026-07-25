// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module ritme-en-geleidingsstoornissen
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
import SectInleidingRitmeEnGeleidingsstoornisse from './sections/SectInleidingRitmeEnGeleidingsstoornisse'
import SectBasisfysiologieVanHetHartritme from './sections/SectBasisfysiologieVanHetHartritme'
import SectMechanismenVanAritmie from './sections/SectMechanismenVanAritmie'
import SectIndelingVanRitmestoornissen from './sections/SectIndelingVanRitmestoornissen'
import SectDeBelangrijksteRitmestoornissen from './sections/SectDeBelangrijksteRitmestoornissen'
import SectAvGeleidingsstoornissen from './sections/SectAvGeleidingsstoornissen'
import SectSupraventriculaireTachycardieN from './sections/SectSupraventriculaireTachycardieN'
import SectBehandelingVanRitmestoornissen from './sections/SectBehandelingVanRitmestoornissen'
import SectKlinischePrioriteringOpDeSeh from './sections/SectKlinischePrioriteringOpDeSeh'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Inleiding: ritme- en geleidingsstoornissen", icon: FileText },
    { id: 'sect-03', title: "Basisfysiologie van het hartritme", icon: Layers },
    { id: 'sect-04', title: "Mechanismen van aritmie", icon: FileText },
    { id: 'sect-05', title: "Indeling van ritmestoornissen", icon: FileText },
    { id: 'sect-06', title: "De belangrijkste ritmestoornissen", icon: FileText },
    { id: 'sect-07', title: "AV-geleidingsstoornissen", icon: FileText },
    { id: 'sect-08', title: "Supraventriculaire tachycardieën", icon: FileText },
    { id: 'sect-09', title: "Behandeling van ritmestoornissen", icon: HeartPulse },
    { id: 'sect-10', title: "Klinische prioritering op de SEH", icon: FileText },
    { id: 'sect-11', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek3RitmeEnGeleidingsstoornissenSummary = () => (
  <SummaryLayout
    title="Ritme- en geleidingsstoornissen"
    description="Ritme- en geleidingsstoornissen zijn afwijkingen in de elektrische activiteit van het hart. Het is belangrijk om eerst het normale sinusritme goed te herkennen, omdat je afwijkingen daartegen afzet. In deze stof gaat het vooral om twee…"
    caseLabel="Week 3 · Ritme- en geleidingsstoornissen"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectInleidingRitmeEnGeleidingsstoornisse />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectBasisfysiologieVanHetHartritme />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectMechanismenVanAritmie />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectIndelingVanRitmestoornissen />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectDeBelangrijksteRitmestoornissen />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectAvGeleidingsstoornissen />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectSupraventriculaireTachycardieN />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectBehandelingVanRitmestoornissen />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectKlinischePrioriteringOpDeSeh />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek3RitmeEnGeleidingsstoornissenSummary
