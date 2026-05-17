import {
  Activity,
  AlertTriangle,
  Ban,
  BarChart3,
  BookOpen,
  FileText,
  Microscope,
  Stethoscope,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02Presentatie from './sections/Sect02Presentatie'
import Sect03Diagnostiek from './sections/Sect03Diagnostiek'
import Sect04Epidemiologie from './sections/Sect04Epidemiologie'
import Sect05Prognose from './sections/Sect05Prognose'
import Sect06ConceptChemoradiotherapie from './sections/Sect06ConceptChemoradiotherapie'
import Sect07GeenOperatie from './sections/Sect07GeenOperatie'
import Sect08RolDCrt from './sections/Sect08RolDCrt'
import Sect09KlinischeUitkomsten from './sections/Sect09KlinischeUitkomsten'
import Sect10Bijwerkingen from './sections/Sect10Bijwerkingen'
import Sect11Samenvatting from './sections/Sect11Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Presentatie · Tabel 1', icon: Stethoscope },
  { id: 'sect-03', title: 'Diagnostiek · Tabel 2', icon: Microscope },
  { id: 'sect-04', title: 'Epidemiologie · Tabel 3', icon: TrendingUp },
  { id: 'sect-05', title: 'Prognose en overleving', icon: Activity },
  { id: 'sect-06', title: 'Concept chemoradiatie · Tabellen 4–5', icon: Zap },
  { id: 'sect-07', title: 'Geen operatie · Tabel 6', icon: Ban },
  { id: 'sect-08', title: 'Rol definitieve chemoradiotherapie', icon: Target },
  { id: 'sect-09', title: 'Uitkomsten dCRT · Tabellen 7–8', icon: BarChart3 },
  { id: 'sect-10', title: 'Bijwerkingen · Tabel 9', icon: AlertTriangle },
  { id: 'sect-11', title: 'Samenvatting', icon: FileText },
]

const Blok10Week1Casus2PassageklachtenLmeChemoradiatieSummary = () => (
  <SummaryLayout
    title="Chemoradiatie"
    moduleKind="lme"
    description="Het oesofaguscarcinoom is een maligniteit van de slokdarm. Een belangrijke klinische gedachte is dat klachten vaak pas laat ontstaan. Dat gebeurt meestal wanneer de tumor zo groot is dat er passageklachten ontstaan of wanneer de tumor druk geeft op de omgeving. De plaats van de tumor is daarbij heel bepalend: een tumor hoog in de slokdarm geeft vaak andere klachten dan een tumor laag bij de maagovergang."
    caseLabel="Week 1 · Casus 2: Passageklachten"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02Presentatie />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03Diagnostiek />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04Epidemiologie />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05Prognose />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06ConceptChemoradiotherapie />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07GeenOperatie />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08RolDCrt />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09KlinischeUitkomsten />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10Bijwerkingen />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week1Casus2PassageklachtenLmeChemoradiatieSummary
