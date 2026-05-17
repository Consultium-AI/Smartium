import {
  Activity,
  BookOpen,
  FileText,
  HelpCircle,
  Layers,
  ListOrdered,
  Pill,
  ShieldAlert,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02WatIsOmeprazol from './sections/Sect02WatIsOmeprazol'
import Sect03ProtonpompEnMaagzuur from './sections/Sect03ProtonpompEnMaagzuur'
import Sect04HoeWerktProtonpompremmer from './sections/Sect04HoeWerktProtonpompremmer'
import Sect05RefluxMaagklachten from './sections/Sect05RefluxMaagklachten'
import Sect06WanneerGeefJeOmeprazol from './sections/Sect06WanneerGeefJeOmeprazol'
import Sect07Farmacokinetiek from './sections/Sect07Farmacokinetiek'
import Sect08BijwerkingenInteracties from './sections/Sect08BijwerkingenInteracties'
import Sect09SamenvattendeBlik from './sections/Sect09SamenvattendeBlik'
import Sect10Samenvatting from './sections/Sect10Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  {
    id: 'sect-02',
    title: 'Wat is omeprazol? · Tabel 1',
    icon: Pill,
  },
  { id: 'sect-03', title: 'De protonpomp en maagzuur · Tabel 2', icon: Activity },
  {
    id: 'sect-04',
    title: 'Hoe werkt een protonpompremmer?',
    icon: HelpCircle,
  },
  {
    id: 'sect-05',
    title: 'Refluxziekte en maagklachten',
    icon: Stethoscope,
  },
  { id: 'sect-06', title: 'Wanneer geef je omeprazol? · Tabel 3', icon: Table2 },
  {
    id: 'sect-07',
    title: 'Farmacokinetiek en doseerfrequentie',
    icon: Layers,
  },
  {
    id: 'sect-08',
    title: 'Bijwerkingen, interacties en aandachtspunten',
    icon: ShieldAlert,
  },
  {
    id: 'sect-09',
    title: 'Samenvattende blik op de behandeling',
    icon: ListOrdered,
  },
  { id: 'sect-10', title: 'Samenvatting', icon: FileText },
]

const Blok10Week1Casus1MaagklachtenLmvPpiSummary = () => (
  <SummaryLayout
    title="Omeprazol en protonpompremmers"
    moduleKind="lmv"
    description={
      'Omeprazol is een veelgebruikt voorbeeld van een protonpompremmer, ook wel protonpompinhibitor of PPI genoemd. Het is een maagzuurremmer: een geneesmiddel dat de zuurproductie in de maag langdurig onderdrukt. Daardoor wordt het maagsap minder zuur.'
    }
    caseLabel="Week 1 · Casus 1: Maagklachten"
    blokLabel="Blok 10"
    practiceLink="/oefenvragen?lme=blok10-week1-casus1-maagklachten-lmv-ppi"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02WatIsOmeprazol />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03ProtonpompEnMaagzuur />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04HoeWerktProtonpompremmer />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05RefluxMaagklachten />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06WanneerGeefJeOmeprazol />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07Farmacokinetiek />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08BijwerkingenInteracties />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09SamenvattendeBlik />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week1Casus1MaagklachtenLmvPpiSummary
