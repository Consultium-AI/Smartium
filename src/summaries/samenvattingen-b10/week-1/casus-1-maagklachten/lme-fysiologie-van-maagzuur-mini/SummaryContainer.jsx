import SummaryLayout from '../../components/SummaryLayout.jsx';
import { Activity, AlertTriangle, BookOpen, Clock3, Cpu, Droplets, Flame, LayoutGrid, Pill, Shield } from 'lucide-react';
import Section01SamenstellingVanHetMaagsapMiniSummary from './Section01SamenstellingVanHetMaagsapMiniSummary.jsx';
import Section02AnatomieEnCelopbouwVanDeMaagMiniSummary from './Section02AnatomieEnCelopbouwVanDeMaagMiniSummary.jsx';
import Section03FunctiesVanMaagzuurMiniSummary from './Section03FunctiesVanMaagzuurMiniSummary.jsx';
import Section04VetverteringEnVitamineB12MiniSummary from './Section04VetverteringEnVitamineB12MiniSummary.jsx';
import Section05ParietaleCelEnHKATPaseMiniSummary from './Section05ParietaleCelEnHKATPaseMiniSummary.jsx';
import Section06RegulatieVanDeMaagzuursecretieMiniSummary from './Section06RegulatieVanDeMaagzuursecretieMiniSummary.jsx';
import Section07CefaleGastrischeEnIntestinaleFaseMiniSummary from './Section07CefaleGastrischeEnIntestinaleFaseMiniSummary.jsx';
import Section08MaagzuurremmersMiniSummary from './Section08MaagzuurremmersMiniSummary.jsx';
import Section09SlijmlaagEnProstaglandinenMiniSummary from './Section09SlijmlaagEnProstaglandinenMiniSummary.jsx';
import Section10HelicobacterPyloriMiniSummary from './Section10HelicobacterPyloriMiniSummary.jsx';
import Section11LangdurigPPIGebruikMiniSummary from './Section11LangdurigPPIGebruikMiniSummary.jsx';

const tableOfContents = [
  { id: 'sect-01', title: 'Samenstelling van het maagsap', icon: <BookOpen className='w-4 h-4' /> },
  { id: 'sect-02', title: 'Anatomie en celopbouw van de maag', icon: <LayoutGrid className='w-4 h-4' /> },
  { id: 'sect-03', title: 'Functies van maagzuur', icon: <Flame className='w-4 h-4' /> },
  { id: 'sect-04', title: 'Vetvertering en vitamine B12', icon: <Droplets className='w-4 h-4' /> },
  { id: 'sect-05', title: 'Pariètale cel en H+/K+-ATPase', icon: <Cpu className='w-4 h-4' /> },
  { id: 'sect-06', title: 'Regulatie van de maagzuursecretie', icon: <Activity className='w-4 h-4' /> },
  { id: 'sect-07', title: 'Cefale, gastrische en intestinale fase', icon: <Clock3 className='w-4 h-4' /> },
  { id: 'sect-08', title: 'Maagzuurremmers', icon: <Pill className='w-4 h-4' /> },
  { id: 'sect-09', title: 'Slijmlaag en prostaglandinen', icon: <Shield className='w-4 h-4' /> },
  { id: 'sect-10', title: 'Helicobacter pylori', icon: <AlertTriangle className='w-4 h-4' /> },
  { id: 'sect-11', title: 'Langdurig PPI-gebruik', icon: <Pill className='w-4 h-4' /> }
];

export default function LmeFysiologieVanMaagzuurMiniSummary({ standalone = false }) {
  return (
    <SummaryLayout
      title='LME 2 – Fysiologie van maagzuur'
      description='Verkorte samenvatting van de fysiologie van maagzuur, met aandacht voor secretie, regulatie, bescherming, remming en H. pylori.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Fysiologie van maagzuur'
      practiceLink='/oefenvragen?lme=blok10-week-1-casus-1-maagklachten-fysiologie-van-maagzuur'
      tableOfContents={tableOfContents}
      standalone={standalone}
    >
      <Section01SamenstellingVanHetMaagsapMiniSummary />
      <Section02AnatomieEnCelopbouwVanDeMaagMiniSummary />
      <Section03FunctiesVanMaagzuurMiniSummary />
      <Section04VetverteringEnVitamineB12MiniSummary />
      <Section05ParietaleCelEnHKATPaseMiniSummary />
      <Section06RegulatieVanDeMaagzuursecretieMiniSummary />
      <Section07CefaleGastrischeEnIntestinaleFaseMiniSummary />
      <Section08MaagzuurremmersMiniSummary />
      <Section09SlijmlaagEnProstaglandinenMiniSummary />
      <Section10HelicobacterPyloriMiniSummary />
      <Section11LangdurigPPIGebruikMiniSummary />
    </SummaryLayout>
  );
}
