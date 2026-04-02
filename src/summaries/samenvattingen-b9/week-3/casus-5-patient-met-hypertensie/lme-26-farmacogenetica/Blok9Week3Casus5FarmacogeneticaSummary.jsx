import {
  BookOpen,
  Dna,
  GitBranch,
  Star,
  FlaskConical,
  Scale,
  TestTube,
  ClipboardList,
  CalendarClock,
  Pill,
  Microscope,
  HeartPulse,
  Euro,
  IdCard,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02VanDnaNaarEiwit from './Sect02VanDnaNaarEiwit'
import Sect03GenetischeVariatieEnAllelen from './Sect03GenetischeVariatieEnAllelen'
import Sect04AllelenEnSternotatie from './Sect04AllelenEnSternotatie'
import Sect05CypEnzymenEnFaseIEnII from './Sect05CypEnzymenEnFaseIEnII'
import Sect06CompetitieRemmingInductie from './Sect06CompetitieRemmingInductie'
import Sect07FenotypeEnGenotypering from './Sect07FenotypeEnGenotypering'
import Sect08PreventiefEnRetrospectiefGenotyperen from './Sect08PreventiefEnRetrospectiefGenotyperen'
import Sect09ClopidogrelEnCyp2c19 from './Sect09ClopidogrelEnCyp2c19'
import Sect10ClopidogrelKlinischeStudies from './Sect10ClopidogrelKlinischeStudies'
import Sect11MetoprololEnCyp2d6 from './Sect11MetoprololEnCyp2d6'
import Sect12KostenEnPraktischeBetekenis from './Sect12KostenEnPraktischeBetekenis'
import Sect13DnaMedicatiepas from './Sect13DnaMedicatiepas'
import Sect14Samenvatting from './Sect14Samenvatting'

const Blok9Week3Casus5FarmacogeneticaSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Van DNA naar eiwit', icon: Dna },
    { id: 'sect-03', title: 'Genetische variatie en allelen', icon: GitBranch },
    { id: 'sect-04', title: 'Allelen en sternotatie', icon: Star },
    { id: 'sect-05', title: 'CYP-enzymen en geneesmiddelmetabolisme', icon: FlaskConical },
    { id: 'sect-06', title: 'Competitie, remming en inductie', icon: Scale },
    { id: 'sect-07', title: 'Fenotype en genotypering', icon: TestTube },
    { id: 'sect-08', title: 'Preventieve en retrospectieve genotypering', icon: CalendarClock },
    { id: 'sect-09', title: 'Clopidogrel en CYP2C19', icon: Pill },
    { id: 'sect-10', title: 'Belangrijke klinische voorbeelden bij clopidogrel', icon: Microscope },
    { id: 'sect-11', title: 'Metoprolol en CYP2D6', icon: HeartPulse },
    { id: 'sect-12', title: 'Kosten en praktische betekenis', icon: Euro },
    { id: 'sect-13', title: 'DNA-medicatiepas', icon: IdCard },
    { id: 'sect-14', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Farmacogenetica"
      description="Farmacogenetica draait om de vraag hoe genetische verschillen invloed hebben op de werking en afbraak van geneesmiddelen. Om dat goed te begrijpen, is het handig om eerst het ontstaan van een eiwit uit DNA stap voor stap te volgen."
      caseLabel="Week 3 · Casus 5: Patiënt met hypertensie"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok9-week3-casus5-farmacogenetica"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02VanDnaNaarEiwit /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03GenetischeVariatieEnAllelen /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04AllelenEnSternotatie /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05CypEnzymenEnFaseIEnII /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06CompetitieRemmingInductie /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07FenotypeEnGenotypering /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08PreventiefEnRetrospectiefGenotyperen /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09ClopidogrelEnCyp2c19 /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10ClopidogrelKlinischeStudies /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11MetoprololEnCyp2d6 /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12KostenEnPraktischeBetekenis /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Sect13DnaMedicatiepas /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Sect14Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week3Casus5FarmacogeneticaSummary
