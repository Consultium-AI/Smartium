// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module acute-nierinsufficientie-en-chronische-nierschade
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
import SectMetenVanNierfunctie from './sections/SectMetenVanNierfunctie'
import SectAcuteNierinsufficiNtie from './sections/SectAcuteNierinsufficiNtie'
import SectPrerenaal from './sections/SectPrerenaal'
import SectRenaal from './sections/SectRenaal'
import SectPostrenaal from './sections/SectPostrenaal'
import SectChronischeNierschade from './sections/SectChronischeNierschade'
import SectOorzakenVanChronischeNierschade from './sections/SectOorzakenVanChronischeNierschade'
import SectSymptomenEnDiagnostiek from './sections/SectSymptomenEnDiagnostiek'
import SectMetaboleComplicaties from './sections/SectMetaboleComplicaties'
import SectBehandelingVanAcuteNierinsufficiNtie from './sections/SectBehandelingVanAcuteNierinsufficiNtie'
import SectAcuutOfTochChronisch from './sections/SectAcuutOfTochChronisch'
import SectPreventie from './sections/SectPreventie'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Meten van nierfunctie", icon: FileText },
    { id: 'sect-03', title: "Acute nierinsufficiëntie", icon: FileText },
    { id: 'sect-04', title: "Prerenaal", icon: FileText },
    { id: 'sect-05', title: "Renaal", icon: FileText },
    { id: 'sect-06', title: "Postrenaal", icon: FileText },
    { id: 'sect-07', title: "Chronische nierschade", icon: FileText },
    { id: 'sect-08', title: "Oorzaken van chronische nierschade", icon: FileText },
    { id: 'sect-09', title: "Symptomen en diagnostiek", icon: Microscope },
    { id: 'sect-10', title: "Metabole complicaties", icon: FileText },
    { id: 'sect-11', title: "Behandeling van acute nierinsufficiëntie", icon: HeartPulse },
    { id: 'sect-12', title: "Acuut of toch chronisch?", icon: FileText },
    { id: 'sect-13', title: "Preventie", icon: FileText },
    { id: 'sect-14', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek4AcuteNierinsufficientieEnChronischeNierschadeSummary = () => (
  <SummaryLayout
    title="Acute nierinsufficiëntie en chronische nierschade"
    description="Wat bedoelen we met nierfunctie?"
    caseLabel="Week 4 · Acute nierinsufficiëntie en chronische nierschade"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectMetenVanNierfunctie />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectAcuteNierinsufficiNtie />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectPrerenaal />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectRenaal />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectPostrenaal />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectChronischeNierschade />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectOorzakenVanChronischeNierschade />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectSymptomenEnDiagnostiek />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectMetaboleComplicaties />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectBehandelingVanAcuteNierinsufficiNtie />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectAcuutOfTochChronisch />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectPreventie />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek4AcuteNierinsufficientieEnChronischeNierschadeSummary
