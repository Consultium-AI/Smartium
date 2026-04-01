import {
  BookOpen,
  Target,
  Salad,
  Apple,
  LeafyGreen,
  Egg,
  Gauge,
  Banana,
  Bone,
  Droplets,
  Pill,
  FlaskConical,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02BehandelingKern from './Sect02BehandelingKern'
import Sect03Leefstijl from './Sect03Leefstijl'
import Sect04DieetIntro from './Sect04DieetIntro'
import Sect05PlantaardigTabel2 from './Sect05PlantaardigTabel2'
import Sect06Eiwit from './Sect06Eiwit'
import Sect07NatriumZout from './Sect07NatriumZout'
import Sect08Kalium from './Sect08Kalium'
import Sect09Fosfaat from './Sect09Fosfaat'
import Sect10Vocht from './Sect10Vocht'
import Sect11RenaleAnemie from './Sect11RenaleAnemie'
import Sect12MetaboleAcidose from './Sect12MetaboleAcidose'
import Sect13Samenvatting from './Sect13Samenvatting'

const Blok9Week1Casus2VerdiepingChronischeNierschadeSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Waar draait de behandeling om?', icon: Target },
    { id: 'sect-03', title: 'Leefstijl bij chronische nierschade', icon: Salad },
    { id: 'sect-04', title: 'Dieet: intro en voedingstoestand', icon: Apple },
    { id: 'sect-05', title: 'Plantaardig eten en voedingsthema’s', icon: Egg },
    { id: 'sect-06', title: 'Eiwit', icon: Egg },
    { id: 'sect-07', title: 'Natrium en zout', icon: Gauge },
    { id: 'sect-08', title: 'Kalium', icon: Banana },
    { id: 'sect-09', title: 'Fosfaat', icon: Bone },
    { id: 'sect-10', title: 'Vocht', icon: Droplets },
    { id: 'sect-11', title: 'Overige therapie: renale anemie', icon: Pill },
    { id: 'sect-12', title: 'Metabole acidose', icon: FlaskConical },
    { id: 'sect-13', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Chronische nierschade - verdieping"
      description="Bij chronische nierschade staat niet alleen de nierfunctie zelf centraal, maar vooral het remmen van verdere achteruitgang en het verkleinen van het risico op complicaties. Leefstijl en voeding vormen daarbij de basis van de behandeling. Daarnaast kunnen soms extra behandelingen nodig zijn, vooral bij problemen zoals renale anemie en metabole acidose."
      caseLabel="Week 1 · Casus 2: Patiënt met chronische nierschade"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02BehandelingKern /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03Leefstijl /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04DieetIntro /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05PlantaardigTabel2 /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06Eiwit /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07NatriumZout /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08Kalium /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09Fosfaat /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10Vocht /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11RenaleAnemie /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12MetaboleAcidose /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Sect13Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week1Casus2VerdiepingChronischeNierschadeSummary
