import { Baby, BookOpen, ClipboardList, Droplets, FileText, Layers, Pill, Stethoscope } from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02BuikpijnBreed from './sections/Sect02BuikpijnBreed'
import Sect03AcuteBuikpijn from './sections/Sect03AcuteBuikpijn'
import Sect04ChronischeBuikpijn from './sections/Sect04ChronischeBuikpijn'
import Sect05IBDKinderen from './sections/Sect05IBDKinderen'
import Sect06Obstipatie from './sections/Sect06Obstipatie'
import Sect07Hyperbilirubinemie from './sections/Sect07Hyperbilirubinemie'
import Sect08Samenvatting from './sections/Sect08Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Buikpijn bij kinderen: denk breed', icon: Baby },
  { id: 'sect-03', title: 'Acute buikpijn · Tabel 1', icon: ClipboardList },
  { id: 'sect-04', title: 'Chronische buikpijn · Tabel 2', icon: Stethoscope },
  { id: 'sect-05', title: 'IBD bij kinderen', icon: Layers },
  { id: 'sect-06', title: 'Obstipatie · Tabel 3', icon: Pill },
  { id: 'sect-07', title: 'Hyperbilirubinemie · Tabel 4', icon: Droplets },
  { id: 'sect-08', title: 'Samenvatting', icon: FileText },
]

const Blok10Week1Casus2PassageklachtenLmeKindergerelateerdeZiektenSummary = () => (
  <SummaryLayout
    title="Kindergerelateerde ziekten"
    moduleKind="lme"
    practiceLink="/oefenvragen?lme=blok10-week1-casus2-passageklachten-lme-kindergerelateerde-ziekten"
    description={
      <>
        Buikpijn bij kinderen vraagt om een brede kijk. De differentiaaldiagnose is vaak anders dan bij volwassenen en
        hangt sterk samen met de leeftijd en de ontwikkeling van het kind. Ook is het belangrijk om te beseffen dat
        klachten uit een ander orgaan zich als buikpijn kunnen presenteren. Een longontsteking kan bijvoorbeeld buikpijn
        geven. Dat heet{' '}
        <strong className="text-slate-800 dark:text-slate-100">referred pain</strong>: pijn die op een andere plek gevoeld
        wordt dan waar het probleem zit.
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
      <Sect02BuikpijnBreed />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03AcuteBuikpijn />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04ChronischeBuikpijn />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05IBDKinderen />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06Obstipatie />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07Hyperbilirubinemie />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week1Casus2PassageklachtenLmeKindergerelateerdeZiektenSummary
