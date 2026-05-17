import {
  BookOpen,
  Beaker,
  Layers,
  Activity,
  FlaskConical,
  GitCompare,
  Pill,
  Shield,
  AlertTriangle,
  Clock,
  ClipboardList,
} from 'lucide-react';
import SummaryLayout from '../../../../../components/SummaryLayout';
import Sect01Leerdoelen from './sections/Sect01Leerdoelen';
import Sect02Inleiding from './sections/Sect02Inleiding';
import Sect03FunctioneleAnatomie from './sections/Sect03FunctioneleAnatomie';
import Sect04FunctieVanHetMaagzuur from './sections/Sect04FunctieVanHetMaagzuur';
import Sect05SecretiePariëtaleCel from './sections/Sect05SecretiePariëtaleCel';
import Sect06RegulatieMaagzuursecretie from './sections/Sect06RegulatieMaagzuursecretie';
import Sect07Maagzuurremmers from './sections/Sect07Maagzuurremmers';
import Sect08BeschermingMaagwand from './sections/Sect08BeschermingMaagwand';
import Sect09Helicobacter from './sections/Sect09Helicobacter';
import Sect10LangdurigPpis from './sections/Sect10LangdurigPpis';
import Sect11Samenvatting from './sections/Sect11Samenvatting';

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Inleiding', icon: Beaker },
  { id: 'sect-03', title: 'Functionele anatomie van de maag', icon: Layers },
  { id: 'sect-04', title: 'Functie van het maagzuur', icon: Activity },
  { id: 'sect-05', title: 'Secretie van maagzuur door de pari\u00E8tale cel', icon: FlaskConical },
  { id: 'sect-06', title: 'Regulatie van de maagzuursecretie', icon: GitCompare },
  { id: 'sect-07', title: 'Vergelijking van maagzuurremmers', icon: Pill },
  { id: 'sect-08', title: 'Bescherming van de maagwand tegen maagzuur', icon: Shield },
  { id: 'sect-09', title: 'Helicobacter pylori en maagzweer', icon: AlertTriangle },
  { id: 'sect-10', title: 'Langdurig gebruik van PPI\u2019s', icon: Clock },
  { id: 'sect-11', title: 'Samenvatting', icon: ClipboardList },
];

const Blok10Week1Casus1MaagklachtenFysiologieVanMaagzuurSummary = () => {
  return (
    <SummaryLayout
      title="Fysiologie van maagzuur"
      description={
        'De maag produceert per dag ongeveer 1,5 tot 2,5 liter maagsap met een zeer lage pH, meestal tussen 1 en 2,5. Dat betekent dat de maaginhoud sterk zuur is.'
      }
      caseLabel="Week 1 · Casus 1: Maagklachten"
      blokLabel="Blok 10"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok10-week1-casus1-maagklachten-fysiologie-van-maagzuur"
      summaryVariantToggle={{
        activeLmeId: 'blok10-week1-casus1-maagklachten-fysiologie-van-maagzuur',
        variants: [
          { id: 'blok10-week1-casus1-maagklachten-fysiologie-van-maagzuur', label: 'Uitgebreid' },
          { id: 'blok10-week1-casus1-maagklachten-fysiologie-van-maagzuur-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02Inleiding /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03FunctioneleAnatomie /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04FunctieVanHetMaagzuur /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05SecretiePariëtaleCel /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06RegulatieMaagzuursecretie /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07Maagzuurremmers /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08BeschermingMaagwand /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09Helicobacter /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10LangdurigPpis /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok10Week1Casus1MaagklachtenFysiologieVanMaagzuurSummary
