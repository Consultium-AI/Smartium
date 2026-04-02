import {
  BookOpen,
  Globe2,
  Stethoscope,
  Table2,
  AlertCircle,
  FileWarning,
  UserCog,
  ShieldAlert,
  ListChecks,
  ClipboardList,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WaaromEuropeseRegelgeving from './Sect02WaaromEuropeseRegelgeving'
import Sect03WatIsEenMedischHulpmiddel from './Sect03WatIsEenMedischHulpmiddel'
import Sect04HoeWordenMedischeHulpmiddelenIngedeeld from './Sect04HoeWordenMedischeHulpmiddelenIngedeeld'
import Sect05WaaromIsDeMDRBelangrijk from './Sect05WaaromIsDeMDRBelangrijk'
import Sect06VoorbeeldenDieDuidelijkMakenWaaromToezichtNodigIs from './Sect06VoorbeeldenDieDuidelijkMakenWaaromToezichtNodigIs'
import Sect07RolVanDeArtsEnDeStudent from './Sect07RolVanDeArtsEnDeStudent'
import Sect08VeiligheidsincidentenHerkennenEnMelden from './Sect08VeiligheidsincidentenHerkennenEnMelden'
import Sect09SamenvattingVanDeKern from './Sect09SamenvattingVanDeKern'
import Sect10Samenvatting from './Sect10Samenvatting'

const Blok9Week2Casus4MdrJuridischeAspectenMedischeToolsSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Waarom een Europese regelgeving voor medische hulpmiddelen?', icon: Globe2 },
    { id: 'sect-03', title: 'Wat is een medisch hulpmiddel?', icon: Stethoscope },
    { id: 'sect-04', title: 'Hoe worden medische hulpmiddelen ingedeeld?', icon: Table2 },
    { id: 'sect-05', title: 'Waarom is de MDR belangrijk?', icon: AlertCircle },
    { id: 'sect-06', title: 'Voorbeelden die duidelijk maken waarom toezicht nodig is', icon: FileWarning },
    { id: 'sect-07', title: 'Rol van de arts en de student', icon: UserCog },
    { id: 'sect-08', title: 'Veiligheidsincidenten herkennen en melden', icon: ShieldAlert },
    { id: 'sect-09', title: 'Samenvatting van de kern', icon: ListChecks },
    { id: 'sect-10', title: 'Samenvatting', icon: ClipboardList },
  ]

  return (
    <SummaryLayout
      title="MDR juridische aspecten rond medische tools"
      description="In de zorg worden heel veel medische hulpmiddelen gebruikt, van eenvoudige hulpmiddelen zoals krukken tot ingewikkelde apparatuur zoals een MRI. Juist omdat deze middelen zo vaak worden ingezet, is het belangrijk dat ze veilig zijn en veilig gebruikt kunnen worden. Daarvoor is Europese regelgeving nodig."
      caseLabel="Week 2 · Casus 4: De vrouw die maar 20 meter kan lopen"
      blokLabel="Blok 9"
      practiceLink="/oefenvragen?lme=blok9-week2-casus4-mdr-juridische-aspecten-medische-tools"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02WaaromEuropeseRegelgeving /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03WatIsEenMedischHulpmiddel /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04HoeWordenMedischeHulpmiddelenIngedeeld /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05WaaromIsDeMDRBelangrijk /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06VoorbeeldenDieDuidelijkMakenWaaromToezichtNodigIs /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07RolVanDeArtsEnDeStudent /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08VeiligheidsincidentenHerkennenEnMelden /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09SamenvattingVanDeKern /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week2Casus4MdrJuridischeAspectenMedischeToolsSummary
