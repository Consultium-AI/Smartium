import {
  BookOpen,
  Layers,
  TableProperties,
  Activity,
  Stethoscope,
  Camera,
  CircleDot,
  GitCompare,
  ClipboardList,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02WatIsAdvancedEndoscopy from './sections/Sect02WatIsAdvancedEndoscopy'
import Sect03AnatomieGalwegen from './sections/Sect03AnatomieGalwegen'
import Sect04EUS from './sections/Sect04EUS'
import Sect05ERCP from './sections/Sect05ERCP'
import Sect06EUSenGalstenen from './sections/Sect06EUSenGalstenen'
import Sect07EUSGeleideTechnieken from './sections/Sect07EUSGeleideTechnieken'
import Sect08SamenvattingEUSenERCP from './sections/Sect08SamenvattingEUSenERCP'
import Sect09Samenvatting from './sections/Sect09Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Advanced endoscopy · Tabel 1 (EUS vs ERCP)', icon: Layers },
  { id: 'sect-03', title: 'Anatomie galwegen · Tabel 2', icon: TableProperties },
  { id: 'sect-04', title: 'EUS: endoscopische echografie', icon: Activity },
  { id: 'sect-05', title: 'ERCP', icon: Camera },
  { id: 'sect-06', title: 'EUS en galstenen', icon: CircleDot },
  { id: 'sect-07', title: 'EUS-geleide technieken', icon: Stethoscope },
  { id: 'sect-08', title: 'Samenvatting van EUS en ERCP', icon: GitCompare },
  { id: 'sect-09', title: 'Samenvatting', icon: ClipboardList },
]

const Blok10Week3CasusC05ChronischePancreatitisLmeAdvancedEndoscopieEusErcpSummary = () => (
  <SummaryLayout
    title="Advanced endoscopie (EUS en ERCP)"
    moduleKind="lme"
    practiceLink="/oefenvragen?lme=blok10-week3-casus-c05-chronische-pancreatitis-advanced-endoscopie-eus-ercp"
    description={
      <>
        Endoscopie is een techniek waarbij een MDL-arts met een flexibele slang met camera in het maag-darmkanaal kijkt.
        Daarmee kun je afwijkingen zien, zoals ontstekingen, zweren of poliepen, en soms ook een biopt nemen. Bij advanced
        endoscopy gaat het een stap verder: de endoscoop wordt niet alleen gebruikt om te kijken, maar ook om gericht te
        behandelen of ingrepen te doen in en vanuit het maag-darmstelsel. Het zijn meestal technisch complexe procedures die
        door speciaal opgeleide MDL-artsen worden uitgevoerd.
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
      <Sect02WatIsAdvancedEndoscopy />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03AnatomieGalwegen />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04EUS />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05ERCP />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06EUSenGalstenen />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07EUSGeleideTechnieken />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08SamenvattingEUSenERCP />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week3CasusC05ChronischePancreatitisLmeAdvancedEndoscopieEusErcpSummary
