// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module vruchtbaarheid
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
import SectVruchtbaarheidBasisbegrippen from './sections/SectVruchtbaarheidBasisbegrippen'
import SectHoeVaakKomtHetVoor from './sections/SectHoeVaakKomtHetVoor'
import SectAnamneseBijKinderwens from './sections/SectAnamneseBijKinderwens'
import SectOorzakenVanVerminderdeVruchtbaarheid from './sections/SectOorzakenVanVerminderdeVruchtbaarheid'
import SectLichamelijkOnderzoekBijDeVrouw from './sections/SectLichamelijkOnderzoekBijDeVrouw'
import SectAanvullendOnderzoekBijDeVrouw from './sections/SectAanvullendOnderzoekBijDeVrouw'
import SectAanvullendOnderzoekBijDeMan from './sections/SectAanvullendOnderzoekBijDeMan'
import SectDeDiagnose from './sections/SectDeDiagnose'
import SectPrognoseVanSpontaneZwangerschap from './sections/SectPrognoseVanSpontaneZwangerschap'
import SectBehandeling from './sections/SectBehandeling'
import SectKanttekeningenBijBehandeling from './sections/SectKanttekeningenBijBehandeling'
import SectKernvragenBijSubfertiliteit from './sections/SectKernvragenBijSubfertiliteit'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Vruchtbaarheid: basisbegrippen", icon: FileText },
    { id: 'sect-03', title: "Hoe vaak komt het voor?", icon: FileText },
    { id: 'sect-04', title: "Anamnese bij kinderwens", icon: FileText },
    { id: 'sect-05', title: "Oorzaken van verminderde vruchtbaarheid", icon: FileText },
    { id: 'sect-06', title: "Lichamelijk onderzoek bij de vrouw", icon: Microscope },
    { id: 'sect-07', title: "Aanvullend onderzoek bij de vrouw", icon: Microscope },
    { id: 'sect-08', title: "Aanvullend onderzoek bij de man", icon: Microscope },
    { id: 'sect-09', title: "De diagnose", icon: FileText },
    { id: 'sect-10', title: "Prognose van spontane zwangerschap", icon: FileText },
    { id: 'sect-11', title: "Behandeling", icon: HeartPulse },
    { id: 'sect-12', title: "Kanttekeningen bij behandeling", icon: HeartPulse },
    { id: 'sect-13', title: "Kernvragen bij subfertiliteit", icon: FileText },
    { id: 'sect-14', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek1VruchtbaarheidSummary = () => (
  <SummaryLayout
    title="Vruchtbaarheid"
    description="Vruchtbaarheid betekent het vermogen om in een bepaalde cyclus zwanger te worden. Bij kinderwens is het belangrijk om de begrippen goed uit elkaar te houden, omdat ze in de praktijk vaak door elkaar gebruikt worden."
    caseLabel="Week 1 · Vruchtbaarheid"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectVruchtbaarheidBasisbegrippen />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectHoeVaakKomtHetVoor />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectAnamneseBijKinderwens />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectOorzakenVanVerminderdeVruchtbaarheid />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectLichamelijkOnderzoekBijDeVrouw />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectAanvullendOnderzoekBijDeVrouw />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectAanvullendOnderzoekBijDeMan />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectDeDiagnose />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectPrognoseVanSpontaneZwangerschap />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectBehandeling />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectKanttekeningenBijBehandeling />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectKernvragenBijSubfertiliteit />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek1VruchtbaarheidSummary
