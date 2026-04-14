import {
  Activity,
  BookOpen,
  CircleCheck,
  ClipboardList,
  HelpCircle,
  Layers,
  Pill,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02VanKlassiekeKankerbehandelingNaarImmunotherapie from './Sect02VanKlassiekeKankerbehandelingNaarImmunotherapie'
import Sect03AandachtVraagChemoVsImmunotherapie from './Sect03AandachtVraagChemoVsImmunotherapie'
import Sect04WatIsCheckpointInhibitie from './Sect04WatIsCheckpointInhibitie'
import Sect05WaaromKanImmunotherapieAutoImmuniteitVeroorzaken from './Sect05WaaromKanImmunotherapieAutoImmuniteitVeroorzaken'
import Sect06WelkeOrganenKunnenBetrokkenRaken from './Sect06WelkeOrganenKunnenBetrokkenRaken'
import Sect07Tabel1Orgaanbetrokkenheid from './Sect07Tabel1Orgaanbetrokkenheid'
import Sect08AandachtVraagTweeOrgaansystemen from './Sect08AandachtVraagTweeOrgaansystemen'
import Sect09BijwerkingenVerschillenPerMiddel from './Sect09BijwerkingenVerschillenPerMiddel'
import Sect10OnderliggendeAfweerreactie from './Sect10OnderliggendeAfweerreactie'
import Sect11KlinischeRelevantie from './Sect11KlinischeRelevantie'
import Sect12BehandelingEerstePrincipe from './Sect12BehandelingEerstePrincipe'
import Sect13StapsgewijzeAanpakIrAE from './Sect13StapsgewijzeAanpakIrAE'
import Sect14Tabel2BeleidPerErnstgraad from './Sect14Tabel2BeleidPerErnstgraad'
import Sect15AandachtVraagEersteStapIrAE from './Sect15AandachtVraagEersteStapIrAE'
import Sect16WaaromBehandelingOpMaat from './Sect16WaaromBehandelingOpMaat'
import Sect17Samenvatting from './Sect17Samenvatting'

const Blok5Week5Casus9LmvAutoImmuniteitAlsBijwerkingBijImmunotherapieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Van klassieke kankerbehandeling naar immunotherapie', icon: Layers },
    { id: 'sect-03', title: 'Aandacht-vraag: chemotherapie versus immunotherapie', icon: HelpCircle },
    { id: 'sect-04', title: 'Wat is checkpoint-inhibitie?', icon: Activity },
    { id: 'sect-05', title: 'Waarom kan immunotherapie auto-immuniteit veroorzaken?', icon: Stethoscope },
    { id: 'sect-06', title: 'Welke organen kunnen betrokken raken?', icon: Stethoscope },
    { id: 'sect-07', title: 'Tabel 1. Orgaanbetrokkenheid bij checkpoint-inhibitie', icon: Table2 },
    { id: 'sect-08', title: 'Aandacht-vraag: twee orgaansystemen', icon: HelpCircle },
    { id: 'sect-09', title: 'Bijwerkingen verschillen per middel en per mechanisme', icon: Layers },
    { id: 'sect-10', title: 'De onderliggende afweerreactie', icon: Activity },
    { id: 'sect-11', title: 'Klinische relevantie', icon: ClipboardList },
    { id: 'sect-12', title: 'Behandeling: eerste principe', icon: Pill },
    { id: 'sect-13', title: 'Stapsgewijze aanpak van irAE', icon: ClipboardList },
    { id: 'sect-14', title: 'Tabel 2. Beleid per ernstgraad', icon: Table2 },
    { id: 'sect-15', title: 'Aandacht-vraag: eerste stap bij vermoeden irAE', icon: HelpCircle },
    { id: 'sect-16', title: 'Waarom is behandeling op maat nodig?', icon: Stethoscope },
    { id: 'sect-17', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Auto-immuniteit als bijwerking bij immunotherapie"
      description="De behandeling van kanker was lange tijd vooral gericht op het direct aanpakken van kwaadaardige cellen. Daarbij kun je denken aan chemotherapie, operatieve verwijdering en bestraling. Bij deze benaderingen ligt de nadruk dus vooral op het tumorweefsel zelf. Met de ontwikkeling van immunotherapie is het perspectief verschoven."
      caseLabel="Week 5 · Casus 9: Patiënt met auto-immuunziekte"
      blokLabel="Blok 5"
      moduleKind="lmv"
      practiceLink="/oefenvragen?lme=blok5-week5-casus9-lmv-auto-immuniteit-als-bijwerking-bij-immunotherapie"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week5-casus9-lmv-auto-immuniteit-als-bijwerking-bij-immunotherapie',
      variants: [
        { id: 'blok5-week5-casus9-lmv-auto-immuniteit-als-bijwerking-bij-immunotherapie', label: 'Uitgebreid' },
        { id: 'blok5-week5-casus9-lmv-auto-immuniteit-als-bijwerking-bij-immunotherapie-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02VanKlassiekeKankerbehandelingNaarImmunotherapie />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03AandachtVraagChemoVsImmunotherapie />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04WatIsCheckpointInhibitie />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05WaaromKanImmunotherapieAutoImmuniteitVeroorzaken />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06WelkeOrganenKunnenBetrokkenRaken />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07Tabel1Orgaanbetrokkenheid />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08AandachtVraagTweeOrgaansystemen />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09BijwerkingenVerschillenPerMiddel />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10OnderliggendeAfweerreactie />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11KlinischeRelevantie />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12BehandelingEerstePrincipe />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13StapsgewijzeAanpakIrAE />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Tabel2BeleidPerErnstgraad />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15AandachtVraagEersteStapIrAE />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16WaaromBehandelingOpMaat />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week5Casus9LmvAutoImmuniteitAlsBijwerkingBijImmunotherapieSummary
