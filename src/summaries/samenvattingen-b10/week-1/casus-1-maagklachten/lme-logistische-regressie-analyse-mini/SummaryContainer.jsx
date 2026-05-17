import SummaryLayout from '../../components/SummaryLayout.jsx';
import { BookOpen, Sigma, Scale, Ban, Activity, Target, CheckCircle2, Workflow, ShieldAlert, ListChecks, BarChart3, LineChart } from 'lucide-react';
import Section01LogistischeRegressieAnalyseMiniSummary from './Section01LogistischeRegressieAnalyseMiniSummary.jsx';
import Section02KansEnOddsMiniSummary from './Section02KansEnOddsMiniSummary.jsx';
import Section03RiskRatioEnOddsRatioMiniSummary from './Section03RiskRatioEnOddsRatioMiniSummary.jsx';
import Section04WaaromGeenLineaireRegressieMiniSummary from './Section04WaaromGeenLineaireRegressieMiniSummary.jsx';
import Section05LogitEnSCurveMiniSummary from './Section05LogitEnSCurveMiniSummary.jsx';
import Section06InterpretatieVanCoefficientenMiniSummary from './Section06InterpretatieVanCoefficientenMiniSummary.jsx';
import Section07KansBerekenenEnToetsingMiniSummary from './Section07KansBerekenenEnToetsingMiniSummary.jsx';
import Section08MeervoudigeLogistischeRegressieMiniSummary from './Section08MeervoudigeLogistischeRegressieMiniSummary.jsx';
import Section09PraktischeBeperkingenMiniSummary from './Section09PraktischeBeperkingenMiniSummary.jsx';
import Section10AantalVariabelenEnEPVMiniSummary from './Section10AantalVariabelenEnEPVMiniSummary.jsx';
import Section11PredictiemodellenMiniSummary from './Section11PredictiemodellenMiniSummary.jsx';
import Section12ClassificatieSensitiviteitSpecificiteitEnRocMiniSummary from './Section12ClassificatieSensitiviteitSpecificiteitEnRocMiniSummary.jsx';

const tableOfContents = [
  { id: 'sect-01', title: 'Logistische regressie analyse', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'sect-02', title: 'Kans en odds', icon: <Sigma className="w-4 h-4" /> },
  { id: 'sect-03', title: 'Risk ratio en odds ratio', icon: <Scale className="w-4 h-4" /> },
  { id: 'sect-04', title: 'Waarom geen lineaire regressie?', icon: <Ban className="w-4 h-4" /> },
  { id: 'sect-05', title: 'Logit en S-curve', icon: <Activity className="w-4 h-4" /> },
  { id: 'sect-06', title: 'Interpretatie van coëfficiënten', icon: <Target className="w-4 h-4" /> },
  { id: 'sect-07', title: 'Kans berekenen en toetsing', icon: <CheckCircle2 className="w-4 h-4" /> },
  { id: 'sect-08', title: 'Meervoudige logistische regressie', icon: <Workflow className="w-4 h-4" /> },
  { id: 'sect-09', title: 'Praktische beperkingen', icon: <ShieldAlert className="w-4 h-4" /> },
  { id: 'sect-10', title: 'Aantal variabelen en EPV', icon: <ListChecks className="w-4 h-4" /> },
  { id: 'sect-11', title: 'Predictiemodellen', icon: <BarChart3 className="w-4 h-4" /> },
  { id: 'sect-12', title: 'Classificatie, sensitiviteit, specificiteit en ROC', icon: <LineChart className="w-4 h-4" /> }
];

export default function LmeLogistischeRegressieAnalyseMiniSummary({ standalone = false }) {
  return (
    <SummaryLayout
      title="LME 4 – Logistische regressie analyse"
      description="Verkorte samenvatting van logistische regressie bij binaire uitkomsten, met uitleg over kans, odds, odds ratio, predictiemodellen, toetsing en classificatie."
      caseLabel="Week 1 Casus 1 - Maagklachten LME Logistische regressie analyse"
      practiceLink="/oefenvragen?lme=blok10-week1-casus1-maagklachten-logistische-regressie-analyse"
      tableOfContents={tableOfContents}
      standalone={standalone}
    >
      <Section01LogistischeRegressieAnalyseMiniSummary />
      <Section02KansEnOddsMiniSummary />
      <Section03RiskRatioEnOddsRatioMiniSummary />
      <Section04WaaromGeenLineaireRegressieMiniSummary />
      <Section05LogitEnSCurveMiniSummary />
      <Section06InterpretatieVanCoefficientenMiniSummary />
      <Section07KansBerekenenEnToetsingMiniSummary />
      <Section08MeervoudigeLogistischeRegressieMiniSummary />
      <Section09PraktischeBeperkingenMiniSummary />
      <Section10AantalVariabelenEnEPVMiniSummary />
      <Section11PredictiemodellenMiniSummary />
      <Section12ClassificatieSensitiviteitSpecificiteitEnRocMiniSummary />
    </SummaryLayout>
  );
}
