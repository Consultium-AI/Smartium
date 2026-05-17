import SummaryLayout from '../../components/SummaryLayout.jsx';
import Section01LmeRefluxBijKinderenMiniSummary from './Section01LmeRefluxBijKinderenMiniSummary.jsx';
import Section02LmeRefluxBijKinderenMiniSummary from './Section02LmeRefluxBijKinderenMiniSummary.jsx';
import Section03LmeRefluxBijKinderenMiniSummary from './Section03LmeRefluxBijKinderenMiniSummary.jsx';
import Section04LmeRefluxBijKinderenMiniSummary from './Section04LmeRefluxBijKinderenMiniSummary.jsx';
import Section05LmeRefluxBijKinderenMiniSummary from './Section05LmeRefluxBijKinderenMiniSummary.jsx';
import Section06LmeRefluxBijKinderenMiniSummary from './Section06LmeRefluxBijKinderenMiniSummary.jsx';
import Section07LmeRefluxBijKinderenMiniSummary from './Section07LmeRefluxBijKinderenMiniSummary.jsx';
import { BookOpen, Baby, ClipboardList, AlertTriangle, Scale, Milk, Sparkles } from 'lucide-react';

const tableOfContents = [
  { id: 'sect-01', title: 'Wat is reflux bij kinderen?', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'sect-02', title: 'Waarom komt reflux vaak voor bij zuigelingen?', icon: <Baby className="w-4 h-4" /> },
  { id: 'sect-03', title: 'Hoe stel je de diagnose?', icon: <ClipboardList className="w-4 h-4" /> },
  { id: 'sect-04', title: 'Welke red flags zijn belangrijk?', icon: <AlertTriangle className="w-4 h-4" /> },
  { id: 'sect-05', title: 'Eerste stappen: groei en voedingsinname', icon: <Scale className="w-4 h-4" /> },
  { id: 'sect-06', title: 'Praktische adviezen en koemelkallergie', icon: <Milk className="w-4 h-4" /> },
  { id: 'sect-07', title: 'Voorbeelden uit de praktijk en kernsamenvatting', icon: <Sparkles className="w-4 h-4" /> },
];

export default function LmeRefluxBijKinderenMiniSummary() {
  return (
    <SummaryLayout
      title="LME 5 – Reflux bij kinderen"
      description="Verkorte samenvatting van reflux bij kinderen."
      caseLabel="Week 1 Casus 1 - Maagklachten LME Reflux bij kinderen"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok10-week1-casus1-maagklachten-reflux-bij-kinderen"
      standalone
    >
      <div className="space-y-6">
        <Section01LmeRefluxBijKinderenMiniSummary />
        <Section02LmeRefluxBijKinderenMiniSummary />
        <Section03LmeRefluxBijKinderenMiniSummary />
        <Section04LmeRefluxBijKinderenMiniSummary />
        <Section05LmeRefluxBijKinderenMiniSummary />
        <Section06LmeRefluxBijKinderenMiniSummary />
        <Section07LmeRefluxBijKinderenMiniSummary />
      </div>
    </SummaryLayout>
  );
}
