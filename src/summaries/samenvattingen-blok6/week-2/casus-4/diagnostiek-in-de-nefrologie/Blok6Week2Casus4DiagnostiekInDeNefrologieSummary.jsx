// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module diagnostiek-in-de-nefrologie
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
import SectRadiologischeDiagnostiekBijNierziekt from './sections/SectRadiologischeDiagnostiekBijNierziekt'
import SectSamenvattendBeeldVanDeRadiologischeD from './sections/SectSamenvattendBeeldVanDeRadiologischeD'
import SectNierbiopsieWaaromEnWanneer from './sections/SectNierbiopsieWaaromEnWanneer'
import SectVeiligheidEnContraIndicatiesWaarMoet from './sections/SectVeiligheidEnContraIndicatiesWaarMoet'
import SectDeRolVanDeNierbiopsieInDeBehandeling from './sections/SectDeRolVanDeNierbiopsieInDeBehandeling'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Radiologische diagnostiek bij nierziekten", icon: Microscope },
    { id: 'sect-03', title: "Samenvattend beeld van de radiologische diagnostiek", icon: Microscope },
    { id: 'sect-04', title: "Nierbiopsie: waarom en wanneer?", icon: FileText },
    { id: 'sect-05', title: "Veiligheid en contra-indicaties: waar moet je op letten?", icon: FileText },
    { id: 'sect-06', title: "De rol van de nierbiopsie in de behandeling", icon: HeartPulse },
    { id: 'sect-07', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week2Casus4DiagnostiekInDeNefrologieSummary = () => (
  <SummaryLayout
    title="Diagnostiek in de nefrologie"
    description="2. de indicaties en contra-indicaties van een nierbiopt benoemen."
    caseLabel="Week 2 · Casus 4: Patiënt met dikke voeten en urine-afwijkingen"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectRadiologischeDiagnostiekBijNierziekt />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectSamenvattendBeeldVanDeRadiologischeD />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectNierbiopsieWaaromEnWanneer />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectVeiligheidEnContraIndicatiesWaarMoet />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectDeRolVanDeNierbiopsieInDeBehandeling />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week2Casus4DiagnostiekInDeNefrologieSummary
