// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module electrolytstoornissen
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
import SectWatIsHyponatriMie from './sections/SectWatIsHyponatriMie'
import SectClassificatieVanHyponatriMie from './sections/SectClassificatieVanHyponatriMie'
import SectHypotoonHypertoonEnPseudohyponatriMi from './sections/SectHypotoonHypertoonEnPseudohyponatriMi'
import SectOorzakenDenkInVolumeEnAdh from './sections/SectOorzakenDenkInVolumeEnAdh'
import SectAcuteHyponatriMie from './sections/SectAcuteHyponatriMie'
import SectHoeBeoordeelJeDePatiNt from './sections/SectHoeBeoordeelJeDePatiNt'
import SectHetDiagnostischAlgoritme from './sections/SectHetDiagnostischAlgoritme'
import SectSiadh from './sections/SectSiadh'
import SectBehandelingVanHyponatriMie from './sections/SectBehandelingVanHyponatriMie'
import SectBelangrijkeKlinischeAandachtspunten from './sections/SectBelangrijkeKlinischeAandachtspunten'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Wat is hyponatriëmie?", icon: FileText },
    { id: 'sect-03', title: "Classificatie van hyponatriëmie", icon: FileText },
    { id: 'sect-04', title: "Hypotoon, hypertoon en pseudohyponatriëmie", icon: FileText },
    { id: 'sect-05', title: "Oorzaken: denk in volume en ADH", icon: FileText },
    { id: 'sect-06', title: "Acute hyponatriëmie", icon: FileText },
    { id: 'sect-07', title: "Hoe beoordeel je de patiënt?", icon: FileText },
    { id: 'sect-08', title: "Het diagnostisch algoritme", icon: Microscope },
    { id: 'sect-09', title: "SIADH", icon: FileText },
    { id: 'sect-10', title: "Behandeling van hyponatriëmie", icon: HeartPulse },
    { id: 'sect-11', title: "Belangrijke klinische aandachtspunten", icon: FileText },
    { id: 'sect-12', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek4ElectrolytstoornissenSummary = () => (
  <SummaryLayout
    title="Electrolytstoornissen"
    description="Wat is hyponatriëmie?"
    caseLabel="Week 4 · Electrolytstoornissen"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectWatIsHyponatriMie />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectClassificatieVanHyponatriMie />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectHypotoonHypertoonEnPseudohyponatriMi />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectOorzakenDenkInVolumeEnAdh />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectAcuteHyponatriMie />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectHoeBeoordeelJeDePatiNt />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectHetDiagnostischAlgoritme />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectSiadh />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectBehandelingVanHyponatriMie />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectBelangrijkeKlinischeAandachtspunten />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek4ElectrolytstoornissenSummary
