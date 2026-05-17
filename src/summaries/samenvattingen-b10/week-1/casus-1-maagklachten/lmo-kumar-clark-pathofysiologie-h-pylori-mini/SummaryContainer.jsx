import SummaryLayout from '../../components/SummaryLayout.jsx';
import { Activity, AlertTriangle, BookOpen, ClipboardList, FileText, FlaskConical, HeartPulse, Layers3, Search, ShieldAlert } from 'lucide-react';
import Section01IntroMiniSummary from './Section01IntroMiniSummary.jsx';
import Section02KernVanDePathofysiologieMiniSummary from './Section02KernVanDePathofysiologieMiniSummary.jsx';
import Section03KlinischeGevolgenVanHPyloriInfectieMiniSummary from './Section03KlinischeGevolgenVanHPyloriInfectieMiniSummary.jsx';
import Section04GastritisMiniSummary from './Section04GastritisMiniSummary.jsx';
import Section05UlcuslijdenMiniSummary from './Section05UlcuslijdenMiniSummary.jsx';
import Section06VerhoogdRisicoOpMaligniteitMiniSummary from './Section06VerhoogdRisicoOpMaligniteitMiniSummary.jsx';
import Section07BelangVanKolonisatieMiniSummary from './Section07BelangVanKolonisatieMiniSummary.jsx';
import Section08BeschadigingVanDeMaagwandMiniSummary from './Section08BeschadigingVanDeMaagwandMiniSummary.jsx';
import Section09KlinischeRelevantieMiniSummary from './Section09KlinischeRelevantieMiniSummary.jsx';
import Section10SamenvattingVanDeLeerpuntenMiniSummary from './Section10SamenvattingVanDeLeerpuntenMiniSummary.jsx';

const tableOfContents = [
  { id: 'sect-01', title: 'LME 6 – LMO Kumar & Clark Pathofysiologie H.pylori', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'sect-02', title: 'Kern van de pathofysiologie', icon: <Activity className="w-4 h-4" /> },
  { id: 'sect-03', title: 'Klinische gevolgen van H. pylori-infectie', icon: <FileText className="w-4 h-4" /> },
  { id: 'sect-04', title: 'Gastritis', icon: <FlaskConical className="w-4 h-4" /> },
  { id: 'sect-05', title: 'Ulcuslijden', icon: <AlertTriangle className="w-4 h-4" /> },
  { id: 'sect-06', title: 'Verhoogd risico op maligniteit', icon: <ShieldAlert className="w-4 h-4" /> },
  { id: 'sect-07', title: 'Belang van kolonisatie', icon: <Search className="w-4 h-4" /> },
  { id: 'sect-08', title: 'Beschadiging van de maagwand', icon: <Layers3 className="w-4 h-4" /> },
  { id: 'sect-09', title: 'Klinische relevantie', icon: <HeartPulse className="w-4 h-4" /> },
  { id: 'sect-10', title: 'Samenvatting van de leerpunten', icon: <ClipboardList className="w-4 h-4" /> }
];

export default function LmoKumarClarkPathofysiologieHPyloriMiniSummary() {
  return (
    <SummaryLayout
      standalone
      caseLabel="Week 1 Casus 1 - Maagklachten LMO Kumar & Clark Pathofysiologie H.pylori"
      title="LME 6 – LMO Kumar & Clark Pathofysiologie H.pylori"
      description="Verkorte samenvatting van de e-module over Helicobacter pylori, kolonisatie van het maagslijmvlies, slijmvliesbeschadiging, gastritis, ulcuslijden en een verhoogd risico op maligniteit."
      practiceLink="/oefenvragen?lme=blok10-week1-casus1-maagklachten-lmo-kumar-clark-pathofysiologie-h-pylori"
      tableOfContents={tableOfContents}
    >
      <div className="space-y-6">
        <Section01IntroMiniSummary />
        <Section02KernVanDePathofysiologieMiniSummary />
        <Section03KlinischeGevolgenVanHPyloriInfectieMiniSummary />
        <Section04GastritisMiniSummary />
        <Section05UlcuslijdenMiniSummary />
        <Section06VerhoogdRisicoOpMaligniteitMiniSummary />
        <Section07BelangVanKolonisatieMiniSummary />
        <Section08BeschadigingVanDeMaagwandMiniSummary />
        <Section09KlinischeRelevantieMiniSummary />
        <Section10SamenvattingVanDeLeerpuntenMiniSummary />
      </div>
    </SummaryLayout>
  );
}
