import {
  Activity,
  BookOpen,
  ClipboardList,
  FileText,
  FlaskConical,
  HeartPulse,
  Layers,
  Stethoscope,
  TableProperties,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02NormaleAnatomie from './sections/Sect02NormaleAnatomie'
import Sect03Tabel1 from './sections/Sect03Tabel1'
import Sect04Gerd from './sections/Sect04Gerd'
import Sect05DiagnostiekReflux from './sections/Sect05DiagnostiekReflux'
import Sect06Achalasie from './sections/Sect06Achalasie'
import Sect07Gastroparese from './sections/Sect07Gastroparese'
import Sect08FunctioneleDyspepsie from './sections/Sect08FunctioneleDyspepsie'
import Sect09Samenvatting from './sections/Sect09Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Normale anatomie en motiliteit', icon: Activity },
  { id: 'sect-03', title: 'Tabel 1 · Normale motiliteit', icon: TableProperties },
  { id: 'sect-04', title: 'GERD · Klachten en Tabel 2', icon: HeartPulse },
  { id: 'sect-05', title: 'Diagnostiek en behandeling reflux', icon: ClipboardList },
  { id: 'sect-06', title: 'Achalasie · HRM · Tabel 3', icon: Stethoscope },
  { id: 'sect-07', title: 'Gastroparese · Tabel 4', icon: FlaskConical },
  { id: 'sect-08', title: 'Functionele dyspepsie · Rome IV · Tabel 5', icon: Layers },
  { id: 'sect-09', title: 'Samenvatting', icon: FileText },
]

const Blok10Week1Casus2PassageklachtenLmeMotiliteitVanDeBovensteTractusDigestivusSummary = () => (
  <SummaryLayout
    title="Motiliteit van de bovenste tractus digestivus"
    moduleKind="lme"
    description={
      <>
        De <strong className="text-slate-800 dark:text-slate-100">slokdarm</strong> begint ter hoogte van de farynx, loopt
        achter de trachea door de thorax en komt na passage door het diafragma uit in de maag. De{' '}
        <strong className="text-slate-800 dark:text-slate-100">LES</strong> en het{' '}
        <strong className="text-slate-800 dark:text-slate-100">rechter crus van het diafragma</strong> vormen samen de
        belangrijkste anti-refluxbarrière.
      </>
    }
    caseLabel="Week 1 · Casus 2: Passageklachten"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02NormaleAnatomie />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03Tabel1 />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04Gerd />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05DiagnostiekReflux />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06Achalasie />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07Gastroparese />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08FunctioneleDyspepsie />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week1Casus2PassageklachtenLmeMotiliteitVanDeBovensteTractusDigestivusSummary
