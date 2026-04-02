import {
  BookOpen,
  CircleCheck,
  ClipboardList,
  MessageCircle,
  Scale,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02BorstkankerscreeningWaaromBelangrijk from './Sect02BorstkankerscreeningWaaromBelangrijk'
import Sect03VoordeelEnNadeelTabel1 from './Sect03VoordeelEnNadeelTabel1'
import Sect04WatIsOverdiagnose from './Sect04WatIsOverdiagnose'
import Sect05BegrippenTabel2 from './Sect05BegrippenTabel2'
import Sect06BalansWinstEnSchade from './Sect06BalansWinstEnSchade'
import Sect07WaaromMoeilijkTeMeten from './Sect07WaaromMoeilijkTeMeten'
import Sect08TweeVormenVertekening from './Sect08TweeVormenVertekening'
import Sect09HoeWordtOverdiagnoseGeschat from './Sect09HoeWordtOverdiagnoseGeschat'
import Sect10ObservationeleStudies from './Sect10ObservationeleStudies'
import Sect11Tabel3Schattingsmethoden from './Sect11Tabel3Schattingsmethoden'
import Sect12OnzekerhedenInDeStatistiek from './Sect12OnzekerhedenInDeStatistiek'
import Sect13InteractieScreeningEnBehandeling from './Sect13InteractieScreeningEnBehandeling'
import Sect14WatBetekentDitVoorDePraktijk from './Sect14WatBetekentDitVoorDePraktijk'
import Sect15Samenvatting from './Sect15Samenvatting'

const Blok5Week3Casus6OverdiagnoseBijBevolkingsonderzoekMammacarcinoomSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Borstkankerscreening: waarom is dit onderwerp belangrijk?', icon: Stethoscope },
    { id: 'sect-03', title: 'Voordeel en nadeel in één oogopslag', icon: Table2 },
    { id: 'sect-04', title: 'Wat is overdiagnose?', icon: ClipboardList },
    { id: 'sect-05', title: 'Begrippen kort uitgelegd', icon: Table2 },
    { id: 'sect-06', title: 'De balans tussen winst en schade', icon: Scale },
    { id: 'sect-07', title: 'Waarom is overdiagnose moeilijk te meten?', icon: ClipboardList },
    { id: 'sect-08', title: 'Twee belangrijke vormen van vertekening', icon: ClipboardList },
    { id: 'sect-09', title: 'Hoe wordt overdiagnose geschat?', icon: Stethoscope },
    { id: 'sect-10', title: 'Wat laten observationele studies zien?', icon: ClipboardList },
    { id: 'sect-11', title: 'Tabel 3. Overzicht van schattingsmethoden voor overdiagnose', icon: Table2 },
    { id: 'sect-12', title: 'Onzekerheden in de statistiek', icon: ClipboardList },
    { id: 'sect-13', title: 'Interactie tussen screening en behandeling', icon: Scale },
    { id: 'sect-14', title: 'Wat betekent dit voor de praktijk?', icon: MessageCircle },
    { id: 'sect-15', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Overdiagnose bij bevolkingsonderzoek mammacarcinoom"
      description="Borstkankerscreening is bedoeld om borstkanker eerder op te sporen, zodat behandeling eerder kan starten en de prognose beter wordt. In het besproken artikel gaat het over het bevolkingsonderzoek zoals dat in het Verenigd Koninkrijk wordt aangeboden: vrouwen van 50 tot 70 jaar worden daar elke 3 jaar uitgenodigd voor mammografie."
      caseLabel="Week 3 · Casus 6: Knobbel in de borst"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week3-casus6-overdiagnose-bij-bevolkingsonderzoek-mammacarcinoom"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02BorstkankerscreeningWaaromBelangrijk />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03VoordeelEnNadeelTabel1 />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04WatIsOverdiagnose />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05BegrippenTabel2 />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06BalansWinstEnSchade />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07WaaromMoeilijkTeMeten />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08TweeVormenVertekening />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09HoeWordtOverdiagnoseGeschat />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10ObservationeleStudies />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Tabel3Schattingsmethoden />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12OnzekerhedenInDeStatistiek />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13InteractieScreeningEnBehandeling />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14WatBetekentDitVoorDePraktijk />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week3Casus6OverdiagnoseBijBevolkingsonderzoekMammacarcinoomSummary
