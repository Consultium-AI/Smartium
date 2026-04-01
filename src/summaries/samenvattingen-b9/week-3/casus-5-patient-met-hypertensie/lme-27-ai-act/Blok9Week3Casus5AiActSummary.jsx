import {
  BookOpen,
  Scale,
  LayoutGrid,
  Ban,
  AlertTriangle,
  Layers,
  Heart,
  ScanSearch,
  Crosshair,
  Camera,
  Gavel,
  UserCheck,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsDeAiAct from './Sect02WatIsDeAiAct'
import Sect03RisicogebaseerdeIndeling from './Sect03RisicogebaseerdeIndeling'
import Sect04OnaanvaardbaarRisico from './Sect04OnaanvaardbaarRisico'
import Sect05HoogRisicoZorg from './Sect05HoogRisicoZorg'
import Sect06BeperktEnMinimaalRisico from './Sect06BeperktEnMinimaalRisico'
import Sect07Echocardiografie from './Sect07Echocardiografie'
import Sect08DetectieLongembolie from './Sect08DetectieLongembolie'
import Sect09AutomatischIntekenenRadiotherapie from './Sect09AutomatischIntekenenRadiotherapie'
import Sect10AutomatischeGezichtsherkenning from './Sect10AutomatischeGezichtsherkenning'
import Sect11ReclasseringEnRecidiverisico from './Sect11ReclasseringEnRecidiverisico'
import Sect12WatBetekentDitVoorDeZorgverlener from './Sect12WatBetekentDitVoorDeZorgverlener'
import Sect13Samenvatting from './Sect13Samenvatting'

const Blok9Week3Casus5AiActSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is de AI Act en waarom bestaat deze?', icon: Scale },
    { id: 'sect-03', title: 'Risicogebaseerde indeling van AI-systemen', icon: LayoutGrid },
    { id: 'sect-04', title: 'Onaanvaardbaar risico: verboden toepassingen', icon: Ban },
    { id: 'sect-05', title: 'Hoog risico: toepassingen met invloed op zorg en veiligheid', icon: AlertTriangle },
    { id: 'sect-06', title: 'Beperkt risico en minimaal risico', icon: Layers },
    { id: 'sect-07', title: 'Voorbeelden: echocardiografie', icon: Heart },
    { id: 'sect-08', title: 'Detectie van longembolie', icon: ScanSearch },
    { id: 'sect-09', title: 'Automatisch intekenen bij radiotherapie', icon: Crosshair },
    { id: 'sect-10', title: 'Automatische gezichtsherkenning', icon: Camera },
    { id: 'sect-11', title: 'Reclassering en recidiverisico', icon: Gavel },
    { id: 'sect-12', title: 'Wat betekent dit voor de zorgverlener?', icon: UserCheck },
    { id: 'sect-13', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="AI Act"
      description="De AI Act is de Europese wet die het gebruik van kunstmatige intelligentie in goede banen moet leiden. De kern is dat AI veilig, transparant, niet-discriminerend en betrouwbaar moet zijn. De wet moet Europese burgers beschermen tegen onveilige, onbetrouwbare, discriminerende of ondoorzichtige AI-toepassingen."
      caseLabel="Week 3 · Casus 5: Patiënt met hypertensie"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02WatIsDeAiAct /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03RisicogebaseerdeIndeling /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04OnaanvaardbaarRisico /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05HoogRisicoZorg /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06BeperktEnMinimaalRisico /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07Echocardiografie /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08DetectieLongembolie /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09AutomatischIntekenenRadiotherapie /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10AutomatischeGezichtsherkenning /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11ReclasseringEnRecidiverisico /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12WatBetekentDitVoorDeZorgverlener /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Sect13Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week3Casus5AiActSummary
