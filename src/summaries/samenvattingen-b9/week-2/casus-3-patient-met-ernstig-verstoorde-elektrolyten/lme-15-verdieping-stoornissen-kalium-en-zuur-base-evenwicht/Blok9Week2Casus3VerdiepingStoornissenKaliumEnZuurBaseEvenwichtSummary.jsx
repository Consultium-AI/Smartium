import {
  BookOpen,
  GitBranch,
  Droplets,
  CircleAlert,
  Pill,
  FlaskConical,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02BrakenHypokaliemieKern from './Sect02BrakenHypokaliemieKern'
import Sect03NierEnVerzamelbuis from './Sect03NierEnVerzamelbuis'
import Sect04KlinischeRelevantie from './Sect04KlinischeRelevantie'
import Sect05Protonpompremmers from './Sect05Protonpompremmers'
import Sect06LabEnBehandeling from './Sect06LabEnBehandeling'
import Sect07Samenvatting from './Sect07Samenvatting'

const Blok9Week2Casus3VerdiepingStoornissenKaliumEnZuurBaseEvenwichtSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Braken en hypokaliëmie: de kern', icon: GitBranch },
    { id: 'sect-03', title: 'De rol van de nier en de verzamelbuis', icon: Droplets },
    { id: 'sect-04', title: 'Klinische relevantie en uitzonderingen', icon: CircleAlert },
    { id: 'sect-05', title: 'Let op bij protonpompremmers', icon: Pill },
    { id: 'sect-06', title: 'Laboratoriumonderzoek en behandeling', icon: FlaskConical },
    { id: 'sect-07', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Stoornissen kalium en zuur-base evenwicht - verdieping"
      description="Braken lijkt op het eerste gezicht vooral een verlies van maaginhoud, maar de belangrijkste verklaring voor de hypokaliëmie zit niet in het directe kaliumverlies uit het braaksel. Hypokaliëmie betekent een te laag kaliumgehalte in het bloed."
      caseLabel="Week 2 · Casus 3: Patiënt met ernstig verstoorde elektrolyten"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok9-week2-casus3-stoornissen-kalium-en-zuur-base-evenwicht-verdieping"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02BrakenHypokaliemieKern /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03NierEnVerzamelbuis /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04KlinischeRelevantie /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05Protonpompremmers /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06LabEnBehandeling /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week2Casus3VerdiepingStoornissenKaliumEnZuurBaseEvenwichtSummary
