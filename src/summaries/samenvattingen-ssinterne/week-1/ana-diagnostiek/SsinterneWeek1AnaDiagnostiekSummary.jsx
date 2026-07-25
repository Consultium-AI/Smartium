// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module ana-diagnostiek
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
import SectAnaDiagnostiekBijSysteemziekten from './sections/SectAnaDiagnostiekBijSysteemziekten'
import SectWanneerIsAnaBepalingZinvol from './sections/SectWanneerIsAnaBepalingZinvol'
import SectHoeWordtAnaBepaald from './sections/SectHoeWordtAnaBepaald'
import SectAnaPatronenEnHunBetekenis from './sections/SectAnaPatronenEnHunBetekenis'
import SectAnaAlsOndersteunendDiagnostischMidde from './sections/SectAnaAlsOndersteunendDiagnostischMidde'
import SectMorbusSjGren from './sections/SectMorbusSjGren'
import SectSystemischeSclerose from './sections/SectSystemischeSclerose'
import SectMixedConnectiveTissueDisease from './sections/SectMixedConnectiveTissueDisease'
import SectSleEnAna from './sections/SectSleEnAna'
import SectKlinischeVoorbeeldenVanAnaInterpreta from './sections/SectKlinischeVoorbeeldenVanAnaInterpreta'
import SectSamenwerkingEnGerichtAanvragen from './sections/SectSamenwerkingEnGerichtAanvragen'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "ANA-diagnostiek bij systeemziekten", icon: Microscope },
    { id: 'sect-03', title: "Wanneer is ANA-bepaling zinvol?", icon: FileText },
    { id: 'sect-04', title: "Hoe wordt ANA bepaald?", icon: FileText },
    { id: 'sect-05', title: "ANA-patronen en hun betekenis", icon: FileText },
    { id: 'sect-06', title: "ANA als ondersteunend diagnostisch middel", icon: Microscope },
    { id: 'sect-07', title: "Morbus Sjögren", icon: FileText },
    { id: 'sect-08', title: "Systemische sclerose", icon: FileText },
    { id: 'sect-09', title: "Mixed connective tissue disease", icon: FileText },
    { id: 'sect-10', title: "SLE en ANA", icon: FileText },
    { id: 'sect-11', title: "Klinische voorbeelden van ANA-interpretatie", icon: FileText },
    { id: 'sect-12', title: "Samenwerking en gericht aanvragen", icon: FileText },
    { id: 'sect-13', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek1AnaDiagnostiekSummary = () => (
  <SummaryLayout
    title="ANA Diagnostiek"
    description="Immuungemedieerde systeemaandoeningen zijn zeldzame aandoeningen waarbij één of meerdere orgaansystemen betrokken kunnen zijn. Ze kunnen een ernstig beloop hebben en leiden tot blijvende orgaanschade. Daarom is het belangrijk om deze…"
    caseLabel="Week 1 · ANA Diagnostiek"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectAnaDiagnostiekBijSysteemziekten />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectWanneerIsAnaBepalingZinvol />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectHoeWordtAnaBepaald />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectAnaPatronenEnHunBetekenis />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectAnaAlsOndersteunendDiagnostischMidde />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectMorbusSjGren />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectSystemischeSclerose />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectMixedConnectiveTissueDisease />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectSleEnAna />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectKlinischeVoorbeeldenVanAnaInterpreta />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectSamenwerkingEnGerichtAanvragen />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek1AnaDiagnostiekSummary
