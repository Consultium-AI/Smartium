// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module astma
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
import SectWatIsAstma from './sections/SectWatIsAstma'
import SectDiagnostiekVanAstma from './sections/SectDiagnostiekVanAstma'
import SectAnamneseBijDyspnoeEnHoest from './sections/SectAnamneseBijDyspnoeEnHoest'
import SectLichamelijkOnderzoekBijDyspnoe from './sections/SectLichamelijkOnderzoekBijDyspnoe'
import SectDifferentiaaldiagnose from './sections/SectDifferentiaaldiagnose'
import SectBevestigingVanDeDiagnose from './sections/SectBevestigingVanDeDiagnose'
import SectBehandelingVanAstma from './sections/SectBehandelingVanAstma'
import SectVoorlichtingEnBegeleiding from './sections/SectVoorlichtingEnBegeleiding'
import SectFollowUpEnControle from './sections/SectFollowUpEnControle'
import SectWatAlsDeKlachtenBlijvenBestaan from './sections/SectWatAlsDeKlachtenBlijvenBestaan'
import SectRisicofactorenEnBijzondereSituaties from './sections/SectRisicofactorenEnBijzondereSituaties'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Wat is astma?", icon: FileText },
    { id: 'sect-03', title: "Diagnostiek van astma", icon: Microscope },
    { id: 'sect-04', title: "Anamnese bij dyspnoe en hoest", icon: FileText },
    { id: 'sect-05', title: "Lichamelijk onderzoek bij dyspnoe", icon: Microscope },
    { id: 'sect-06', title: "Differentiaaldiagnose", icon: FileText },
    { id: 'sect-07', title: "Bevestiging van de diagnose", icon: FileText },
    { id: 'sect-08', title: "Behandeling van astma", icon: HeartPulse },
    { id: 'sect-09', title: "Voorlichting en begeleiding", icon: FileText },
    { id: 'sect-10', title: "Follow-up en controle", icon: FileText },
    { id: 'sect-11', title: "Wat als de klachten blijven bestaan?", icon: Activity },
    { id: 'sect-12', title: "Risicofactoren en bijzondere situaties", icon: FileText },
    { id: 'sect-13', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek3AstmaSummary = () => (
  <SummaryLayout
    title="Astma"
    description="Wat is astma?"
    caseLabel="Week 3 · Astma"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectWatIsAstma />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectDiagnostiekVanAstma />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectAnamneseBijDyspnoeEnHoest />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectLichamelijkOnderzoekBijDyspnoe />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectDifferentiaaldiagnose />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectBevestigingVanDeDiagnose />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectBehandelingVanAstma />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectVoorlichtingEnBegeleiding />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectFollowUpEnControle />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectWatAlsDeKlachtenBlijvenBestaan />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectRisicofactorenEnBijzondereSituaties />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek3AstmaSummary
