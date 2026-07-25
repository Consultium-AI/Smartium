// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module levercirrose
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
import SectLevercirroseHetGrotePlaatje from './sections/SectLevercirroseHetGrotePlaatje'
import SectOorzakenVanLevercirrose from './sections/SectOorzakenVanLevercirrose'
import SectAnamneseEnLichamelijkOnderzoek from './sections/SectAnamneseEnLichamelijkOnderzoek'
import SectDiagnostiekBijVerdenkingOpCirrose from './sections/SectDiagnostiekBijVerdenkingOpCirrose'
import SectBeeldvormingEchoEnCt from './sections/SectBeeldvormingEchoEnCt'
import SectHoeStelJeDeDiagnoseCirrose from './sections/SectHoeStelJeDeDiagnoseCirrose'
import SectOorzaakVanCirroseVerderUitzoeken from './sections/SectOorzaakVanCirroseVerderUitzoeken'
import SectAscitesEnSpontaneBacteriLePeritoniti from './sections/SectAscitesEnSpontaneBacteriLePeritoniti'
import SectPortaleHypertensieEnComplicaties from './sections/SectPortaleHypertensieEnComplicaties'
import SectHepatischeEncefalopathieVaricesbloed from './sections/SectHepatischeEncefalopathieVaricesbloed'
import SectBehandelingEnBeleid from './sections/SectBehandelingEnBeleid'
import SectPrognoseMeldEnChildPughTurcotte from './sections/SectPrognoseMeldEnChildPughTurcotte'
import SectVerloopVanDePatiNt from './sections/SectVerloopVanDePatiNt'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Levercirrose: het grote plaatje", icon: FileText },
    { id: 'sect-03', title: "Oorzaken van levercirrose", icon: FileText },
    { id: 'sect-04', title: "Anamnese en lichamelijk onderzoek", icon: Microscope },
    { id: 'sect-05', title: "Diagnostiek bij verdenking op cirrose", icon: Microscope },
    { id: 'sect-06', title: "Beeldvorming: echo en CT", icon: FileText },
    { id: 'sect-07', title: "Hoe stel je de diagnose cirrose?", icon: FileText },
    { id: 'sect-08', title: "Oorzaak van cirrose verder uitzoeken", icon: FileText },
    { id: 'sect-09', title: "Ascites en spontane bacteriële peritonitis", icon: FileText },
    { id: 'sect-10', title: "Portale hypertensie en complicaties", icon: FileText },
    { id: 'sect-11', title: "Hepatische encefalopathie, varicesbloeding en hepatorenaal syndroom", icon: FileText },
    { id: 'sect-12', title: "Behandeling en beleid", icon: HeartPulse },
    { id: 'sect-13', title: "Prognose: MELD en Child-Pugh-Turcotte", icon: FileText },
    { id: 'sect-14', title: "Verloop van de patiënt", icon: FileText },
    { id: 'sect-15', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek5LevercirroseSummary = () => (
  <SummaryLayout
    title="Levercirrose"
    description="Levercirrose is een eindstadium van chronische leverziekte. Daarbij raakt de normale bouw van de lever verstoord en ontstaat er littekenvorming met knobbels en een hobbelige leverstructuur. Daardoor kan het bloed minder goed door de…"
    caseLabel="Week 5 · Levercirrose"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectLevercirroseHetGrotePlaatje />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectOorzakenVanLevercirrose />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectAnamneseEnLichamelijkOnderzoek />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectDiagnostiekBijVerdenkingOpCirrose />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectBeeldvormingEchoEnCt />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectHoeStelJeDeDiagnoseCirrose />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectOorzaakVanCirroseVerderUitzoeken />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectAscitesEnSpontaneBacteriLePeritoniti />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectPortaleHypertensieEnComplicaties />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectHepatischeEncefalopathieVaricesbloed />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectBehandelingEnBeleid />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectPrognoseMeldEnChildPughTurcotte />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <SectVerloopVanDePatiNt />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek5LevercirroseSummary
