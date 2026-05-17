import {
  BookOpen,
  Tags,
  Baby,
  Stethoscope,
  AlertOctagon,
  ClipboardList,
  Search,
  FileText,
  UserCircle2,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02WatBedoelenWe from './sections/Sect02WatBedoelenWe'
import Sect03ZuigelingenNormaal from './sections/Sect03ZuigelingenNormaal'
import Sect04Refluxziekte from './sections/Sect04Refluxziekte'
import Sect05RedFlags from './sections/Sect05RedFlags'
import Sect06EersteBeoordeling from './sections/Sect06EersteBeoordeling'
import Sect07OnderliggendeOorzaak from './sections/Sect07OnderliggendeOorzaak'
import Sect08CasusEen from './sections/Sect08CasusEen'
import Sect09CasusTwee from './sections/Sect09CasusTwee'
import Sect10TotaleSamenvatting from './sections/Sect10TotaleSamenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  {
    id: 'sect-02',
    title: 'Reflux bij kinderen: wat bedoelen we ermee?',
    icon: Tags,
  },
  { id: 'sect-03', title: 'Waarom is reflux bij zuigelingen zo vaak normaal?', icon: Baby },
  { id: 'sect-04', title: 'Wanneer denk je aan refluxziekte?', icon: Stethoscope },
  { id: 'sect-05', title: 'Red flags: wanneer moet je verder denken dan reflux?', icon: AlertOctagon },
  { id: 'sect-06', title: 'Eerste beoordeling en beleid', icon: ClipboardList },
  {
    id: 'sect-07',
    title: 'Wat doe je als je denkt aan een onderliggende oorzaak?',
    icon: Search,
  },
  { id: 'sect-08', title: 'Casus 1: gezonde baby met normale reflux', icon: FileText },
  { id: 'sect-09', title: 'Casus 2: baby met refluxklachten en onvoldoende groei', icon: UserCircle2 },
  { id: 'sect-10', title: 'Samenvatting', icon: ListChecks },
]

const Blok10Week1Casus1MaagklachtenRefluxBijKinderenSummary = () => (
  <SummaryLayout
    title="Reflux bij kinderen"
    description={
      'Bij kinderen komt maaginhoud soms via de mond weer terug. Ouders zien dat vaak als een teken van ziekte of problemen van maag of darmen. Toch is dat bij zuigelingen lang niet altijd zo. Het teruggeven van kleine beetjes voeding is in de eerste levensmaanden juist heel gebruikelijk.'
    }
    caseLabel="Week 1 · Casus 1: Maagklachten"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02WatBedoelenWe />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03ZuigelingenNormaal />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04Refluxziekte />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05RedFlags />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06EersteBeoordeling />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07OnderliggendeOorzaak />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08CasusEen />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09CasusTwee />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10TotaleSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week1Casus1MaagklachtenRefluxBijKinderenSummary
