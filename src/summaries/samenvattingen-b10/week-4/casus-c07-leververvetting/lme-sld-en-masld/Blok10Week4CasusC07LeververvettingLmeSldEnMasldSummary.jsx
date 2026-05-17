import {
  Activity,
  BarChart3,
  BookOpen,
  ClipboardList,
  Globe2,
  HeartPulse,
  Layers,
  Route,
  Search,
  TestTube2,
  Wine,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import { blok10Week4CasusC07LeververvettingLmeSldEnMasldPracticeHref } from './Blok10Week4CasusC07LeververvettingLmeSldEnMasldOefenvragen'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02WatIsSldEnMasld from './sections/Sect02WatIsSldEnMasld'
import Sect03SpectrumEnEpidemiologie from './sections/Sect03SpectrumEnEpidemiologie'
import Sect04Pathofysiologie from './sections/Sect04Pathofysiologie'
import Sect05PrognoseEnFibrose from './sections/Sect05PrognoseEnFibrose'
import Sect06Screening from './sections/Sect06Screening'
import Sect07NietInvasieveDiagnostiek from './sections/Sect07NietInvasieveDiagnostiek'
import Sect08SldPatiententraject from './sections/Sect08SldPatiententraject'
import Sect09MetaldEnAld from './sections/Sect09MetaldEnAld'
import Sect10BehandelingMasld from './sections/Sect10BehandelingMasld'
import Sect11Samenvatting from './sections/Sect11Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Wat is SLD en MASLD? · Tabel 1', icon: Layers },
  { id: 'sect-03', title: 'Spectrum en epidemiologie · Tabel 2', icon: Globe2 },
  { id: 'sect-04', title: 'Pathofysiologie en ziekteprogressie', icon: Activity },
  { id: 'sect-05', title: 'Prognose en belang van fibrose · Tabel 3', icon: BarChart3 },
  { id: 'sect-06', title: 'Screening: waarom en bij wie? · Tabel 4', icon: Search },
  { id: 'sect-07', title: 'Niet-invasieve diagnostiek', icon: TestTube2 },
  { id: 'sect-08', title: 'Het SLD-patiëntentraject · Tabel 5', icon: Route },
  { id: 'sect-09', title: 'MetALD en alcohol-gerelateerde leverziekte · Tabel 6', icon: Wine },
  { id: 'sect-10', title: 'Behandeling van MASLD', icon: HeartPulse },
  { id: 'sect-11', title: 'Samenvatting', icon: ClipboardList },
]

const Blok10Week4CasusC07LeververvettingLmeSldEnMasldSummary = () => (
  <SummaryLayout
    title="SLD en MASLD"
    moduleKind="lme"
    description={
      <>
        <strong className="text-slate-800 dark:text-slate-100">Steatotic Liver Disease (SLD)</strong> is een verzamelnaam voor leverziekten waarbij{' '}
        <strong className="text-slate-800 dark:text-slate-100">vetstapeling in hepatocyten</strong> centraal staat. Het is een zeer frequente leverziekte en verloopt vaak{' '}
        <strong className="text-slate-800 dark:text-slate-100">asymptomatisch</strong>. Daardoor wordt SLD vaak pas toevallig ontdekt.
      </>
    }
    caseLabel="Week 4 · Casus C07: Leververvetting"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink={blok10Week4CasusC07LeververvettingLmeSldEnMasldPracticeHref}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02WatIsSldEnMasld />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03SpectrumEnEpidemiologie />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04Pathofysiologie />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05PrognoseEnFibrose />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06Screening />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07NietInvasieveDiagnostiek />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08SldPatiententraject />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09MetaldEnAld />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10BehandelingMasld />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week4CasusC07LeververvettingLmeSldEnMasldSummary
