import {
  BookOpen,
  Droplets,
  ClipboardList,
  GitBranch,
  Syringe,
  Cpu,
  FileText,
  Stethoscope,
  FlaskConical,
  CalendarClock,
  Scale,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02Introductie from './Sect02Introductie'
import Sect03IndicatiesTabel1 from './Sect03IndicatiesTabel1'
import Sect04PrincipesDialyse from './Sect04PrincipesDialyse'
import Sect05HemodialyseVaattoegang from './Sect05HemodialyseVaattoegang'
import Sect06HemodialyseTechniek from './Sect06HemodialyseTechniek'
import Sect07HemodialyseBehandelplan from './Sect07HemodialyseBehandelplan'
import Sect08PeritonealeToegang from './Sect08PeritonealeToegang'
import Sect09PeritonealeMachineEnVloeistof from './Sect09PeritonealeMachineEnVloeistof'
import Sect10PeritonealeBehandelplan from './Sect10PeritonealeBehandelplan'
import Sect11KeuzeMethodeTabel2 from './Sect11KeuzeMethodeTabel2'
import Sect12Samenvatting from './Sect12Samenvatting'

const Blok9Week1Casus2DialyseSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Introductie: wat is dialyse?', icon: Droplets },
    { id: 'sect-03', title: 'Indicaties voor dialyse', icon: ClipboardList },
    { id: 'sect-04', title: 'De principes van dialyse', icon: GitBranch },
    { id: 'sect-05', title: 'Hemodialyse: vaattoegang', icon: Syringe },
    { id: 'sect-06', title: 'Hemodialyse: machine, kunstnier, vloeistof', icon: Cpu },
    { id: 'sect-07', title: 'Hemodialyse: behandelplan', icon: FileText },
    { id: 'sect-08', title: 'Peritoneale dialyse: toegang', icon: Stethoscope },
    { id: 'sect-09', title: 'Peritoneale dialyse: machine en vloeistof', icon: FlaskConical },
    { id: 'sect-10', title: 'Peritoneale dialyse: behandelplan', icon: CalendarClock },
    { id: 'sect-11', title: 'Keuze tussen hemo- en peritoneale dialyse', icon: Scale },
    { id: 'sect-12', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Dialyse"
      description="Dialyse is een vorm van nierfunctievervangende therapie. Het doel is om stoffen en water uit het lichaam te verwijderen wanneer de nieren dat niet goed meer kunnen. Dialyse kan worden gestart in een acute situatie of in een chronische situatie."
      caseLabel="Week 1 · Casus 2: Patiënt met chronische nierschade"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok9-week1-casus2-dialyse"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02Introductie /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03IndicatiesTabel1 /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04PrincipesDialyse /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05HemodialyseVaattoegang /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06HemodialyseTechniek /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07HemodialyseBehandelplan /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08PeritonealeToegang /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09PeritonealeMachineEnVloeistof /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10PeritonealeBehandelplan /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11KeuzeMethodeTabel2 /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week1Casus2DialyseSummary
