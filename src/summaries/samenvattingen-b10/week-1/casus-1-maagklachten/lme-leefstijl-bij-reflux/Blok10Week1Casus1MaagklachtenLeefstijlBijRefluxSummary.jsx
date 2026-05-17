import {
  BookOpen,
  MessageCircle,
  Layers,
  Scale,
  Apple,
  Baby,
  Stethoscope,
  AlertTriangle,
  UtensilsCrossed,
  ListOrdered,
  ListChecks,
} from 'lucide-react';
import SummaryLayout from '../../../../../components/SummaryLayout';
import Sect01Leerdoelen from './sections/Sect01Leerdoelen';
import Sect02Refluxklachten from './sections/Sect02Refluxklachten';
import Sect03BravoFactoren from './sections/Sect03BravoFactoren';
import Sect04OvergewichtBmi from './sections/Sect04OvergewichtBmi';
import Sect05VoedingSchijfVijf from './sections/Sect05VoedingSchijfVijf';
import Sect06RefluxZwangerschap from './sections/Sect06RefluxZwangerschap';
import Sect07DiabetischeGastroparese from './sections/Sect07DiabetischeGastroparese';
import Sect08ErnstDiabetischeOntregeling from './sections/Sect08ErnstDiabetischeOntregeling';
import Sect09VoedingLeefstijlGastroparese from './sections/Sect09VoedingLeefstijlGastroparese';
import Sect10PraktischeAanpak from './sections/Sect10PraktischeAanpak';
import Sect11Samenvatting from './sections/Sect11Samenvatting';

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Refluxklachten: van onschuldig tot relevant', icon: MessageCircle },
  { id: 'sect-03', title: 'De BRAVO-factoren: leefstijl als basis', icon: Layers },
  { id: 'sect-04', title: 'Overgewicht, BMI en reflux', icon: Scale },
  {
    id: 'sect-05',
    title: 'Voeding bij reflux: gewoon gezond eten volgens de Schijf van Vijf',
    icon: Apple,
  },
  { id: 'sect-06', title: 'Reflux en zwangerschap: druk in de buik telt mee', icon: Baby },
  { id: 'sect-07', title: 'Diabetische gastroparese: vertraagde maagontlediging', icon: Stethoscope },
  { id: 'sect-08', title: 'Ernst van de diabetische ontregeling', icon: AlertTriangle },
  {
    id: 'sect-09',
    title: 'Voedings- en leefstijladviezen bij gastroparese',
    icon: UtensilsCrossed,
  },
  { id: 'sect-10', title: 'Praktische aanpak en beleid', icon: ListOrdered },
  { id: 'sect-11', title: 'Samenvatting', icon: ListChecks },
];

const Blok10Week1Casus1MaagklachtenLeefstijlBijRefluxSummary = () => {
  return (
    <SummaryLayout
      title="Leefstijl bij reflux"
      description={
        'Refluxklachten bij volwassenen kunnen sterk verschillen. Soms gaat het om simpele, hinderlijke zuurbranden, maar soms zijn de klachten een uiting van een onderliggende medische situatie. Daarom is het belangrijk om niet alleen naar de klacht zelf te kijken, maar ook naar het verhaal eromheen: leefstijl, gewicht, voeding, stress en eventuele andere aandoeningen.'
      }
      caseLabel="Week 1 · Casus 1: Maagklachten"
      blokLabel="Blok 10"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok10-week1-casus1-maagklachten-leefstijl-bij-reflux"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02Refluxklachten /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03BravoFactoren /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04OvergewichtBmi /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05VoedingSchijfVijf /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06RefluxZwangerschap /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07DiabetischeGastroparese /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08ErnstDiabetischeOntregeling /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09VoedingLeefstijlGastroparese /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10PraktischeAanpak /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11Samenvatting /></section>
    </SummaryLayout>
  );
};

export default Blok10Week1Casus1MaagklachtenLeefstijlBijRefluxSummary;
