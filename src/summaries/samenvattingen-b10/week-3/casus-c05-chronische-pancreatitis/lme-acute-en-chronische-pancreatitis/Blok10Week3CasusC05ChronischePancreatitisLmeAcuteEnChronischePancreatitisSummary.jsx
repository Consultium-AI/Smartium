import {
  BookOpen,
  Activity,
  Stethoscope,
  Syringe,
  ListTree,
  AlertTriangle,
  Pill,
  GitCompare,
  ClipboardList,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02HetPancreasBouwEnFunctie from './sections/Sect02HetPancreasBouwEnFunctie'
import Sect03AcuteDiagnose from './sections/Sect03AcuteDiagnose'
import Sect04AcuteOorzaken from './sections/Sect04AcuteOorzaken'
import Sect05AcuteKlinischBeloop from './sections/Sect05AcuteKlinischBeloop'
import Sect06AcuteVormenComplicaties from './sections/Sect06AcuteVormenComplicaties'
import Sect07AcuteBehandeling from './sections/Sect07AcuteBehandeling'
import Sect08ChronischDiagnostiek from './sections/Sect08ChronischDiagnostiek'
import Sect09ChronischKlinisch from './sections/Sect09ChronischKlinisch'
import Sect10ChronischBehandeling from './sections/Sect10ChronischBehandeling'
import Sect11ChronischPrognose from './sections/Sect11ChronischPrognose'
import Sect12AcuteVsChronisch from './sections/Sect12AcuteVsChronisch'
import Sect13Samenvatting from './sections/Sect13Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Het pancreas: bouw en functie', icon: Activity },
  { id: 'sect-03', title: 'Acute pancreatitis · diagnose · Tabel 1', icon: Stethoscope },
  { id: 'sect-04', title: 'Acute · oorzaken · GET SMASHED', icon: ListTree },
  { id: 'sect-05', title: 'Acute · kliniek · Tabel 2 (Atlanta)', icon: AlertTriangle },
  { id: 'sect-06', title: 'Acute · vormen en complicaties', icon: Syringe },
  { id: 'sect-07', title: 'Acute · behandeling', icon: Pill },
  { id: 'sect-08', title: 'Chronische pancreatitis · TIGAR-O · Tabel 3', icon: GitCompare },
  { id: 'sect-09', title: 'Chronisch · kliniek en functieverlies', icon: Stethoscope },
  { id: 'sect-10', title: 'Chronisch · behandeling', icon: Pill },
  { id: 'sect-11', title: 'Chronisch · prognose', icon: Activity },
  { id: 'sect-12', title: 'Acute versus chronisch · Tabel 4', icon: GitCompare },
  { id: 'sect-13', title: 'Samenvatting', icon: ClipboardList },
]

const Blok10Week3CasusC05ChronischePancreatitisLmeAcuteEnChronischePancreatitisSummary = () => (
  <SummaryLayout
    title="Acute en chronische pancreatitis"
    moduleKind="lme"
    practiceLink="/oefenvragen?lme=blok10-week3-casus-c05-chronische-pancreatitis-acute-en-chronische-pancreatitis"
    description={
      <>
        Acute pancreatitis is een <strong className="text-slate-800 dark:text-slate-100">plots ontstane ontsteking van het pancreas</strong>. Er ontstaat een{' '}
        <strong className="text-slate-800 dark:text-slate-100">systemische inflammatoire respons</strong> (SIRS), doordat verteringsenzymen voortijdig in het pancreas
        zelf worden geactiveerd. Het orgaan begint als het ware zichzelf te verteren. Dat geeft lokale ontsteking, zwelling en weefselschade.
        <br />
        <br />
        Het beloop verschilt sterk. Veel patiënten hebben een milde vorm en herstellen volledig, maar een deel ontwikkelt een ernstige ontstekingsreactie met{' '}
        <strong className="text-slate-800 dark:text-slate-100">orgaandisfunctie</strong> en levensbedreigende complicaties.
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
      <Sect02HetPancreasBouwEnFunctie />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03AcuteDiagnose />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04AcuteOorzaken />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05AcuteKlinischBeloop />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06AcuteVormenComplicaties />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07AcuteBehandeling />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08ChronischDiagnostiek />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09ChronischKlinisch />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10ChronischBehandeling />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11ChronischPrognose />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12AcuteVsChronisch />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Sect13Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week3CasusC05ChronischePancreatitisLmeAcuteEnChronischePancreatitisSummary
