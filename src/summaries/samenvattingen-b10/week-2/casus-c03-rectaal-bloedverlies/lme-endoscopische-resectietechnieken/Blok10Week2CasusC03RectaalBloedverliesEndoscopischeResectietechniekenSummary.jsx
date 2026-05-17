import { Activity, AlertTriangle, BookOpen, Layers, Scissors, Syringe, Table2, Target } from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import { blok10Week2CasusC03RectaalBloedverliesEndoscopischeResectietechniekenPracticeHref } from './Blok10Week2CasusC03RectaalBloedverliesEndoscopischeResectietechniekenOefenvragen'
import Sect01Inleiding from './sections/Sect01Inleiding'
import Sect02Darmwand from './sections/Sect02Darmwand'
import Sect03OverzichtTechnieken from './sections/Sect03OverzichtTechnieken'
import Sect04KoudeLisPoliepectomie from './sections/Sect04KoudeLisPoliepectomie'
import Sect05EMR from './sections/Sect05EMR'
import Sect06ESD from './sections/Sect06ESD'
import Sect07EFTR from './sections/Sect07EFTR'
import Sect08KeuzeVoorDeTechniek from './sections/Sect08KeuzeVoorDeTechniek'
import Sect09Complicaties from './sections/Sect09Complicaties'
import Sect10Samengevat from './sections/Sect10Samengevat'

const tableOfContents = [
  { id: 'sect-01', title: 'Endoscopische resectietechnieken', icon: BookOpen },
  { id: 'sect-02', title: 'Mucosa, submucosa, muscularis propria, serosa', icon: Layers },
  { id: 'sect-03', title: 'Koude lis, EMR, ESD, eFTR', icon: Table2 },
  { id: 'sect-04', title: 'Koude lis poliepectomie', icon: Scissors },
  { id: 'sect-05', title: 'EMR', icon: Target },
  { id: 'sect-06', title: 'ESD', icon: Syringe },
  { id: 'sect-07', title: 'eFTR', icon: Target },
  { id: 'sect-08', title: 'Keuze voor de techniek', icon: Activity },
  { id: 'sect-09', title: 'Complicaties', icon: AlertTriangle },
  { id: 'sect-10', title: 'Samengevat', icon: BookOpen },
]

const Blok10Week2CasusC03RectaalBloedverliesEndoscopischeResectietechniekenSummary = () => (
  <SummaryLayout
    title="Endoscopische resectietechnieken"
    moduleKind="lme"
    description="Endoscopische resectietechnieken worden gebruikt om poliepen in colon en rectum te verwijderen. Dit is belangrijk omdat een deel van de poliepen kan uitgroeien tot coloncarcinoom. De keuze voor een techniek hangt vooral af van drie factoren: de grootte van de poliep, de verdenking op een vroege vorm van coloncarcinoom en de lokalisatie in colon of rectum."
    caseLabel="Week 2 · Casus C03: Rectaal bloedverlies"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink={blok10Week2CasusC03RectaalBloedverliesEndoscopischeResectietechniekenPracticeHref}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Inleiding />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02Darmwand />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03OverzichtTechnieken />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04KoudeLisPoliepectomie />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05EMR />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06ESD />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07EFTR />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08KeuzeVoorDeTechniek />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09Complicaties />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10Samengevat />
    </section>
  </SummaryLayout>
)

export default Blok10Week2CasusC03RectaalBloedverliesEndoscopischeResectietechniekenSummary
