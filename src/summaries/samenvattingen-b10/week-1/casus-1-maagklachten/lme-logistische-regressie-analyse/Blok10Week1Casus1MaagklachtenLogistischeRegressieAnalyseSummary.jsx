import {
  BookOpen,
  HelpCircle,
  Scale,
  Ban,
  Spline,
  Calculator,
  FileCheck,
  Layers,
  ListTree,
  SlidersHorizontal,
  LineChart,
  LayoutGrid,
  ListChecks,
} from 'lucide-react';
import SummaryLayout from '../../../../../components/SummaryLayout';
import Sect01Leerdoelen from './sections/Sect01Leerdoelen';
import Sect02WatIsLogistischeRegressie from './sections/Sect02WatIsLogistischeRegressie';
import Sect03KansOddsRiskRatio from './sections/Sect03KansOddsRiskRatio';
import Sect04WaaromGeenLineaireRegressie from './sections/Sect04WaaromGeenLineaireRegressie';
import Sect05LogitTransformatie from './sections/Sect05LogitTransformatie';
import Sect06InterpretatieCoeff from './sections/Sect06InterpretatieCoeff';
import Sect07ToetsenBetrouwbaarheid from './sections/Sect07ToetsenBetrouwbaarheid';
import Sect08Meervoudige from './sections/Sect08Meervoudige';
import Sect09KeuzeVariabelen from './sections/Sect09KeuzeVariabelen';
import Sect10Vuistregel from './sections/Sect10Vuistregel';
import Sect11Predictiemodellen from './sections/Sect11Predictiemodellen';
import Sect12ClassificatieRoc from './sections/Sect12ClassificatieRoc';
import Sect13TotaleSamenvatting from './sections/Sect13TotaleSamenvatting';

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Wat is logistische regressie?', icon: HelpCircle },
  { id: 'sect-03', title: 'Kans, odds, risk ratio en odds ratio', icon: Scale },
  { id: 'sect-04', title: 'Waarom geen lineaire regressie bij een binaire uitkomst?', icon: Ban },
  { id: 'sect-05', title: 'De logit-transformatie en de S-curve', icon: Spline },
  { id: 'sect-06', title: 'Interpretatie van coëfficiënten', icon: Calculator },
  { id: 'sect-07', title: 'Toetsen en betrouwbaarheidsintervallen', icon: FileCheck },
  { id: 'sect-08', title: 'Meervoudige logistische regressie', icon: Layers },
  { id: 'sect-09', title: 'Keuze van variabelen en onderzoeksvraag', icon: ListTree },
  { id: 'sect-10', title: 'Vuistregel voor aantal variabelen', icon: SlidersHorizontal },
  { id: 'sect-11', title: 'Predictiemodellen', icon: LineChart },
  {
    id: 'sect-12',
    title: 'Classificatie, sensitiviteit, specificiteit en ROC',
    icon: LayoutGrid,
  },
  { id: 'sect-13', title: 'Samenvatting', icon: ListChecks },
];

const Blok10Week1Casus1MaagklachtenLogistischeRegressieAnalyseSummary = () => {
  return (
    <SummaryLayout
      title="Logistische regressie analyse"
      description={
        'Logistische regressie gebruik je wanneer de uitkomst binair is: de uitkomst is dan steeds ja/nee, wel/niet, 1/0. Denk bijvoorbeeld aan GORZ wel of niet aanwezig, een maagzweer wel of niet aanwezig, of complicaties wel of niet aanwezig.'
      }
      caseLabel="Week 1 · Casus 1: Maagklachten"
      blokLabel="Blok 10"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok10-week1-casus1-maagklachten-logistische-regressie-analyse"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02WatIsLogistischeRegressie /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03KansOddsRiskRatio /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04WaaromGeenLineaireRegressie /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05LogitTransformatie /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06InterpretatieCoeff /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07ToetsenBetrouwbaarheid /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08Meervoudige /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09KeuzeVariabelen /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10Vuistregel /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11Predictiemodellen /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12ClassificatieRoc /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Sect13TotaleSamenvatting /></section>
    </SummaryLayout>
  );
};

export default Blok10Week1Casus1MaagklachtenLogistischeRegressieAnalyseSummary;
