// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module allergische-aandoeningen
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
import SectDirecteTypeIAllergie from './sections/SectDirecteTypeIAllergie'
import SectOvergevoeligheidsreactiesTypeITotEnM from './sections/SectOvergevoeligheidsreactiesTypeITotEnM'
import SectSensibilisatieEnEffectorfase from './sections/SectSensibilisatieEnEffectorfase'
import SectWelkeKlachtenPassenBijAllergie from './sections/SectWelkeKlachtenPassenBijAllergie'
import SectDeDriePijlersVanDeDiagnostiek from './sections/SectDeDriePijlersVanDeDiagnostiek'
import SectSeizoensgebondenAllergenen from './sections/SectSeizoensgebondenAllergenen'
import SectKruisallergieEnKruisreactiviteit from './sections/SectKruisallergieEnKruisreactiviteit'
import SectAnafylaxie from './sections/SectAnafylaxie'
import SectGeneesmiddelenallergie from './sections/SectGeneesmiddelenallergie'
import SectDiagnostiekEnBehandelingVanInhalatie from './sections/SectDiagnostiekEnBehandelingVanInhalatie'
import SectImmunotherapie from './sections/SectImmunotherapie'
import SectVoedselallergieEnComponentResolvedDi from './sections/SectVoedselallergieEnComponentResolvedDi'
import SectSamenvattingVanDeKern from './sections/SectSamenvattingVanDeKern'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Directe type I allergie", icon: FileText },
    { id: 'sect-03', title: "Overgevoeligheidsreacties: type I tot en met IV", icon: FileText },
    { id: 'sect-04', title: "Sensibilisatie en effectorfase", icon: FileText },
    { id: 'sect-05', title: "Welke klachten passen bij allergie?", icon: Activity },
    { id: 'sect-06', title: "De drie pijlers van de diagnostiek", icon: Microscope },
    { id: 'sect-07', title: "Seizoensgebonden allergenen", icon: FileText },
    { id: 'sect-08', title: "Kruisallergie en kruisreactiviteit", icon: FileText },
    { id: 'sect-09', title: "Anafylaxie", icon: FileText },
    { id: 'sect-10', title: "Geneesmiddelenallergie", icon: FileText },
    { id: 'sect-11', title: "Diagnostiek en behandeling van inhalatieallergie", icon: Microscope },
    { id: 'sect-12', title: "Immunotherapie", icon: HeartPulse },
    { id: 'sect-13', title: "Voedselallergie en component-resolved diagnostics", icon: Microscope },
    { id: 'sect-14', title: "Samenvatting van de kern", icon: CircleCheck },
]

const SsinterneWeek2AllergischeAandoeningenSummary = () => (
  <SummaryLayout
    title="Allergische aandoeningen"
    description="Deze module gaat over allergische aandoeningen, met de nadruk op type I IgE-gemedieerde allergie. Dit is de klassieke directe allergische reactie. Het klachtenpatroon van de patiënt moet je leren herkennen, net als de waarde van de…"
    caseLabel="Week 2 · Allergische aandoeningen"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectDirecteTypeIAllergie />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectOvergevoeligheidsreactiesTypeITotEnM />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectSensibilisatieEnEffectorfase />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectWelkeKlachtenPassenBijAllergie />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectDeDriePijlersVanDeDiagnostiek />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectSeizoensgebondenAllergenen />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectKruisallergieEnKruisreactiviteit />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectAnafylaxie />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectGeneesmiddelenallergie />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectDiagnostiekEnBehandelingVanInhalatie />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectImmunotherapie />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectVoedselallergieEnComponentResolvedDi />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <SectSamenvattingVanDeKern />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek2AllergischeAandoeningenSummary
