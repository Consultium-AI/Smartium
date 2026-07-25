// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module hemofilie
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
import SectHemofilieWatIsHetEnHoePresenteertHet from './sections/SectHemofilieWatIsHetEnHoePresenteertHet'
import SectDiagnostiekBijEenBloedingsneiging from './sections/SectDiagnostiekBijEenBloedingsneiging'
import SectHemofilieEnDragerschap from './sections/SectHemofilieEnDragerschap'
import SectKlinischeErnstEnBloedingen from './sections/SectKlinischeErnstEnBloedingen'
import SectDiagnostiekVanHemofilie from './sections/SectDiagnostiekVanHemofilie'
import SectBehandelingVanHemofilie from './sections/SectBehandelingVanHemofilie'
import SectDoserenVanStollingsfactoren from './sections/SectDoserenVanStollingsfactoren'
import SectProfylaxe from './sections/SectProfylaxe'
import SectSamenvattendPrimaireEnSecundaireHemo from './sections/SectSamenvattendPrimaireEnSecundaireHemo'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Hemofilie: wat is het en hoe presenteert het zich?", icon: FileText },
    { id: 'sect-03', title: "Diagnostiek bij een bloedingsneiging", icon: Microscope },
    { id: 'sect-04', title: "Hemofilie en dragerschap", icon: FileText },
    { id: 'sect-05', title: "Klinische ernst en bloedingen", icon: FileText },
    { id: 'sect-06', title: "Diagnostiek van hemofilie", icon: Microscope },
    { id: 'sect-07', title: "Behandeling van hemofilie", icon: HeartPulse },
    { id: 'sect-08', title: "Doseren van stollingsfactoren", icon: FileText },
    { id: 'sect-09', title: "Profylaxe", icon: FileText },
    { id: 'sect-10', title: "Samenvattend: primaire en secundaire hemostase", icon: FileText },
    { id: 'sect-11', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek6HemofilieSummary = () => (
  <SummaryLayout
    title="Hemofilie"
    description="Hemofilie: wat is het en hoe presenteert het zich?"
    caseLabel="Week 6 · Hemofilie"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectHemofilieWatIsHetEnHoePresenteertHet />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectDiagnostiekBijEenBloedingsneiging />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectHemofilieEnDragerschap />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectKlinischeErnstEnBloedingen />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectDiagnostiekVanHemofilie />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectBehandelingVanHemofilie />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectDoserenVanStollingsfactoren />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectProfylaxe />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectSamenvattendPrimaireEnSecundaireHemo />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek6HemofilieSummary
