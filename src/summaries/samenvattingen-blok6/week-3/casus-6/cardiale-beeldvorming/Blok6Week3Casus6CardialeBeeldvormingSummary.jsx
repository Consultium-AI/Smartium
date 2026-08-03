// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module cardiale-beeldvorming
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
import SummaryLayout from '../../../../../components/SummaryLayout'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectBeeldvormingVanHetHartWaaromIsDitBel from './sections/SectBeeldvormingVanHetHartWaaromIsDitBel'
import SectWatIsCardialeCt from './sections/SectWatIsCardialeCt'
import SectHoeWordtCardialeCtGescand from './sections/SectHoeWordtCardialeCtGescand'
import SectWanneerGebruikJeCardialeCtWelEnWanne from './sections/SectWanneerGebruikJeCardialeCtWelEnWanne'
import SectVoorEnNadelenVanCardialeCt from './sections/SectVoorEnNadelenVanCardialeCt'
import SectAnatomieVanDeCoronairenOpCt from './sections/SectAnatomieVanDeCoronairenOpCt'
import SectCtKalkscoreWatMeetJeHiermee from './sections/SectCtKalkscoreWatMeetJeHiermee'
import SectCtaCoronairenWatKunJeErmee from './sections/SectCtaCoronairenWatKunJeErmee'
import SectBeoordeelbaarheidVanDeCoronairen from './sections/SectBeoordeelbaarheidVanDeCoronairen'
import SectKlinischeVoorbeeldenVanCta from './sections/SectKlinischeVoorbeeldenVanCta'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Beeldvorming van het hart: waarom is dit belangrijk?", icon: FileText },
    { id: 'sect-03', title: "Wat is cardiale CT?", icon: FileText },
    { id: 'sect-04', title: "Hoe wordt cardiale CT gescand?", icon: FileText },
    { id: 'sect-05', title: "Wanneer gebruik je cardiale CT wel en wanneer niet?", icon: FileText },
    { id: 'sect-06', title: "Voor- en nadelen van cardiale CT", icon: FileText },
    { id: 'sect-07', title: "Anatomie van de coronairen op CT", icon: Layers },
    { id: 'sect-08', title: "CT-kalkscore: wat meet je hiermee?", icon: FileText },
    { id: 'sect-09', title: "CTA coronairen: wat kun je ermee?", icon: FileText },
    { id: 'sect-10', title: "Beoordeelbaarheid van de coronairen", icon: FileText },
    { id: 'sect-11', title: "Klinische voorbeelden van CTA", icon: FileText },
    { id: 'sect-12', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week3Casus6CardialeBeeldvormingSummary = () => (
  <SummaryLayout
    title="Cardiale beeldvorming"
    description="Beeldvorming van het hart: waarom is dit belangrijk?"
    caseLabel="Week 3 · Casus 6: Een patiënt met een ruis"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectBeeldvormingVanHetHartWaaromIsDitBel />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectWatIsCardialeCt />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectHoeWordtCardialeCtGescand />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectWanneerGebruikJeCardialeCtWelEnWanne />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectVoorEnNadelenVanCardialeCt />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectAnatomieVanDeCoronairenOpCt />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectCtKalkscoreWatMeetJeHiermee />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectCtaCoronairenWatKunJeErmee />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectBeoordeelbaarheidVanDeCoronairen />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectKlinischeVoorbeeldenVanCta />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week3Casus6CardialeBeeldvormingSummary
