import {
  BookOpen,
  Utensils,
  Gauge,
  Activity,
  Apple,
  Repeat2,
  Pill,
  Sparkles,
  ClipboardList,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02WaaromPancreatitisInvloedVoeding from './sections/Sect02WaaromPancreatitisInvloedVoeding'
import Sect03OndervoedingHerkennen from './sections/Sect03OndervoedingHerkennen'
import Sect04VoedingAcutePancreatitis from './sections/Sect04VoedingAcutePancreatitis'
import Sect05VoedingChronischePancreatitis from './sections/Sect05VoedingChronischePancreatitis'
import Sect06EnteraleEnParenteraleVoeding from './sections/Sect06EnteraleEnParenteraleVoeding'
import Sect07PancreasenzymSuppletiePERT from './sections/Sect07PancreasenzymSuppletiePERT'
import Sect08KlinischeRelevantie from './sections/Sect08KlinischeRelevantie'
import Sect09Samenvatting from './sections/Sect09Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Pancreatitis en voeding · Tabel 1', icon: Utensils },
  { id: 'sect-03', title: 'Ondervoeding · PG-SGA · Tabel 2', icon: Gauge },
  { id: 'sect-04', title: 'Acute pancreatitis · Tabel 3', icon: Activity },
  { id: 'sect-05', title: 'Chronische pancreatitis', icon: Apple },
  { id: 'sect-06', title: 'Enterale en parenterale voeding', icon: Repeat2 },
  { id: 'sect-07', title: 'PERT · Tabel 4', icon: Pill },
  { id: 'sect-08', title: 'Klinische relevantie', icon: Sparkles },
  { id: 'sect-09', title: 'Samenvatting', icon: ClipboardList },
]

const Blok10Week3CasusC05ChronischePancreatitisLmeDieetPancreatitisPancreasenzymenSummary = () => (
  <SummaryLayout
    title="Dieet, pancreatitis en pancreasenzymen"
    moduleKind="lme"
    practiceLink="/oefenvragen?lme=blok10-week3-casus-c05-chronische-pancreatitis-dieet-pancreatitis-pancreasenzymen"
    description={
      <>
        Pancreatitis beïnvloedt de voedselvertering, de voedselpassage en de opname van voedingsstoffen. Daardoor ontstaat
        al snel een risico op ondervoeding. Dat geldt zowel bij{' '}
        <strong className="text-slate-800 dark:text-slate-100">acute</strong> als bij{' '}
        <strong className="text-slate-800 dark:text-slate-100">chronische</strong> pancreatitis.
      </>
    }
    caseLabel="Week 3 · Casus C05: Chronische pancreatitis"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02WaaromPancreatitisInvloedVoeding />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03OndervoedingHerkennen />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04VoedingAcutePancreatitis />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05VoedingChronischePancreatitis />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06EnteraleEnParenteraleVoeding />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07PancreasenzymSuppletiePERT />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08KlinischeRelevantie />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week3CasusC05ChronischePancreatitisLmeDieetPancreatitisPancreasenzymenSummary
