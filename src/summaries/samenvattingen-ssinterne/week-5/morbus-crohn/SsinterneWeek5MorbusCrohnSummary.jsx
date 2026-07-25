// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module morbus-crohn
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
import SectWatIsDeZiekteVanCrohn from './sections/SectWatIsDeZiekteVanCrohn'
import SectKlinischePresentatie from './sections/SectKlinischePresentatie'
import SectDiagnostiekVanCrohn from './sections/SectDiagnostiekVanCrohn'
import SectEndoscopieEnHistologie from './sections/SectEndoscopieEnHistologie'
import SectBehandelstrategieStepUpEnTopDown from './sections/SectBehandelstrategieStepUpEnTopDown'
import SectInductietherapieEnOnderhoudstherapie from './sections/SectInductietherapieEnOnderhoudstherapie'
import SectMedicatieEnBijwerkingen from './sections/SectMedicatieEnBijwerkingen'
import SectStenoseEnChirurgischeBehandeling from './sections/SectStenoseEnChirurgischeBehandeling'
import SectFistelsBijCrohn from './sections/SectFistelsBijCrohn'
import SectExtraIntestinaleManifestaties from './sections/SectExtraIntestinaleManifestaties'
import SectBelangrijkeKernpunten from './sections/SectBelangrijkeKernpunten'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Wat is de ziekte van Crohn?", icon: FileText },
    { id: 'sect-03', title: "Klinische presentatie", icon: FileText },
    { id: 'sect-04', title: "Diagnostiek van Crohn", icon: Microscope },
    { id: 'sect-05', title: "Endoscopie en histologie", icon: FileText },
    { id: 'sect-06', title: "Behandelstrategie: step-up en top-down", icon: HeartPulse },
    { id: 'sect-07', title: "Inductietherapie en onderhoudstherapie", icon: HeartPulse },
    { id: 'sect-08', title: "Medicatie en bijwerkingen", icon: FileText },
    { id: 'sect-09', title: "Stenose en chirurgische behandeling", icon: HeartPulse },
    { id: 'sect-10', title: "Fistels bij Crohn", icon: FileText },
    { id: 'sect-11', title: "Extra-intestinale manifestaties", icon: FileText },
    { id: 'sect-12', title: "Belangrijke kernpunten", icon: FileText },
    { id: 'sect-13', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek5MorbusCrohnSummary = () => (
  <SummaryLayout
    title="Morbus Crohn"
    description="Wat is de ziekte van Crohn?"
    caseLabel="Week 5 · Morbus Crohn"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectWatIsDeZiekteVanCrohn />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectKlinischePresentatie />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectDiagnostiekVanCrohn />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectEndoscopieEnHistologie />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectBehandelstrategieStepUpEnTopDown />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectInductietherapieEnOnderhoudstherapie />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectMedicatieEnBijwerkingen />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectStenoseEnChirurgischeBehandeling />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectFistelsBijCrohn />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectExtraIntestinaleManifestaties />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectBelangrijkeKernpunten />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek5MorbusCrohnSummary
