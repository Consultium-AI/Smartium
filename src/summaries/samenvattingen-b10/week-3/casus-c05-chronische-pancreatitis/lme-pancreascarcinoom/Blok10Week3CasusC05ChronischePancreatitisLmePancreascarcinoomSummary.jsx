import {
  BookOpen,
  BarChart3,
  Stethoscope,
  ScanSearch,
  GitFork,
  Pill,
  Activity,
  ClipboardList,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02Epidemiologie from './sections/Sect02Epidemiologie'
import Sect03KlinischePresentatie from './sections/Sect03KlinischePresentatie'
import Sect04Diagnose from './sections/Sect04Diagnose'
import Sect05StagingResectabiliteit from './sections/Sect05StagingResectabiliteit'
import Sect06Behandeling from './sections/Sect06Behandeling'
import Sect07PrognoseEnBeloop from './sections/Sect07PrognoseEnBeloop'
import Sect08Samenvatting from './sections/Sect08Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Epidemiologie · Tabel 1', icon: BarChart3 },
  { id: 'sect-03', title: 'Klinische presentatie', icon: Stethoscope },
  { id: 'sect-04', title: 'Diagnose', icon: ScanSearch },
  { id: 'sect-05', title: 'Stadiëring · Tabel 2', icon: GitFork },
  { id: 'sect-06', title: 'Behandeling · Tabel 3', icon: Pill },
  { id: 'sect-07', title: 'Prognose en beloop', icon: Activity },
  { id: 'sect-08', title: 'Samenvatting', icon: ClipboardList },
]

const Blok10Week3CasusC05ChronischePancreatitisLmePancreascarcinoomSummary = () => (
  <SummaryLayout
    title="Pancreascarcinoom"
    moduleKind="lme"
    description={
      <>
        Pancreascarcinoom is wereldwijd een relatief vaak voorkomende tumor, maar tegelijk een van de dodelijkste vormen van kanker. De incidentie staat rond de{' '}
        <strong className="text-slate-800 dark:text-slate-100">12e plaats</strong> en de kankersterfte rond de{' '}
        <strong className="text-slate-800 dark:text-slate-100">6e plaats</strong>. Wereldwijd zijn er ongeveer{' '}
        <strong className="text-slate-800 dark:text-slate-100">6–7 nieuwe gevallen per 100.000 personen per jaar</strong>. Het{' '}
        <strong className="text-slate-800 dark:text-slate-100">levenslange risico</strong> om pancreascarcinoom te ontwikkelen is ongeveer{' '}
        <strong className="text-slate-800 dark:text-slate-100">0,9%</strong>.
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
      <Sect02Epidemiologie />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03KlinischePresentatie />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04Diagnose />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05StagingResectabiliteit />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06Behandeling />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07PrognoseEnBeloop />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week3CasusC05ChronischePancreatitisLmePancreascarcinoomSummary
