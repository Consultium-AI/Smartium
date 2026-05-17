import {
  BookOpen,
  Factory,
  FlaskConical,
  GitBranch,
  Pill,
  Wine,
  AlertTriangle,
  TableProperties,
  Wrench,
  HeartPulse,
  ClipboardList,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import { blok10Week4CasusC07LeververvettingLmeDeLeverAlsFabriekPracticeHref } from './Blok10Week4CasusC07LeververvettingLmeDeLeverAlsFabriekOefenvragen'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02LeverAlsUitscheidingsorgaan from './sections/Sect02LeverAlsUitscheidingsorgaan'
import Sect03LevermetabolismeTweeFasen from './sections/Sect03LevermetabolismeTweeFasen'
import Sect04CytochroomP450 from './sections/Sect04CytochroomP450'
import Sect05Paracetamol from './sections/Sect05Paracetamol'
import Sect06Alcohol from './sections/Sect06Alcohol'
import Sect07DiliHili from './sections/Sect07DiliHili'
import Sect08DrieTypenLeverschade from './sections/Sect08DrieTypenLeverschade'
import Sect09MechanismenLeverschade from './sections/Sect09MechanismenLeverschade'
import Sect10BehandelingEnBeloop from './sections/Sect10BehandelingEnBeloop'
import Sect11Samenvatting from './sections/Sect11Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'De lever als uitscheidingsorgaan', icon: Factory },
  { id: 'sect-03', title: 'Levermetabolisme in twee fasen · Tabel 1', icon: FlaskConical },
  { id: 'sect-04', title: 'Cytochroom P450 en interacties · Tabel 2', icon: GitBranch },
  { id: 'sect-05', title: 'Paracetamol · Tabel 3', icon: Pill },
  { id: 'sect-06', title: 'Alcohol', icon: Wine },
  { id: 'sect-07', title: 'DILI en HILI', icon: AlertTriangle },
  { id: 'sect-08', title: 'Drie typen leverschade · Tabel 4', icon: TableProperties },
  { id: 'sect-09', title: 'Mechanismen van leverschade', icon: Wrench },
  { id: 'sect-10', title: 'Behandeling en beloop', icon: HeartPulse },
  { id: 'sect-11', title: 'Samenvatting', icon: ClipboardList },
]

const Blok10Week4CasusC07LeververvettingLmeDeLeverAlsFabriekSummary = () => (
  <SummaryLayout
    title="De lever als fabriek"
    moduleKind="lme"
    description={
      <>
        De lever speelt een centrale rol bij het verwerken en uitscheiden van veel stoffen. Dat geldt niet alleen voor
        geneesmiddelen, maar ook voor kruidenpreparaten en alcohol. Veel van deze stoffen zijn{' '}
        <strong className="text-slate-800 dark:text-slate-100">lipofiel</strong>: ze lossen goed op in vet, maar niet
        goed in water. Daardoor kunnen ze niet zomaar via de nieren met de urine worden uitgescheiden.
      </>
    }
    caseLabel="Week 4 · Casus C07: Leververvetting"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink={blok10Week4CasusC07LeververvettingLmeDeLeverAlsFabriekPracticeHref}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02LeverAlsUitscheidingsorgaan />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03LevermetabolismeTweeFasen />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04CytochroomP450 />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05Paracetamol />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06Alcohol />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07DiliHili />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08DrieTypenLeverschade />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09MechanismenLeverschade />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10BehandelingEnBeloop />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week4CasusC07LeververvettingLmeDeLeverAlsFabriekSummary
