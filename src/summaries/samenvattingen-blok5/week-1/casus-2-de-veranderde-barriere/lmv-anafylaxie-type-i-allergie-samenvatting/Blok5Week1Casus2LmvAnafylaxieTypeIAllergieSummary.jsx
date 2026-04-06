import {
  Activity,
  BookOpen,
  CircleCheck,
  ClipboardList,
  HelpCircle,
  Layers,
  Pill,
  Stethoscope,
  Syringe,
  Table2,
  Thermometer,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02AllergieEnTabel1GellCoombs from './Sect02AllergieEnTabel1GellCoombs'
import Sect03DefinitieVanAnafylaxie from './Sect03DefinitieVanAnafylaxie'
import Sect04AandachtSensibilisatie from './Sect04AandachtSensibilisatie'
import Sect05ConsensusdefinitieVanAnafylaxie from './Sect05ConsensusdefinitieVanAnafylaxie'
import Sect06KlinischePresentatieEnTabel2 from './Sect06KlinischePresentatieEnTabel2'
import Sect07MechanismenVanAnafylaxie from './Sect07MechanismenVanAnafylaxie'
import Sect08AandachtIgE from './Sect08AandachtIgE'
import Sect09OorzakenVanAnafylaxie from './Sect09OorzakenVanAnafylaxie'
import Sect10DiagnostiekTypeIAllergischeReacties from './Sect10DiagnostiekTypeIAllergischeReacties'
import Sect11Tryptase from './Sect11Tryptase'
import Sect12BehandelingMetAdrenalineEnTabel3 from './Sect12BehandelingMetAdrenalineEnTabel3'
import Sect13NutVanAntihistaminicaEnSteroiden from './Sect13NutVanAntihistaminicaEnSteroiden'
import Sect14TeLateOfGeenAdrenaline from './Sect14TeLateOfGeenAdrenaline'
import Sect15AandachtBehandeling from './Sect15AandachtBehandeling'
import Sect16ObservatieEnBifasischeReacties from './Sect16ObservatieEnBifasischeReacties'
import Sect17Differentiaaldiagnose from './Sect17Differentiaaldiagnose'
import Sect18SlotSamenvatting from './Sect18SlotSamenvatting'

const Blok5Week1Casus2LmvAnafylaxieTypeIAllergieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Allergie en plaats · Tabel 1 Gell en Coombs', icon: Layers },
    { id: 'sect-03', title: 'Definitie van anafylaxie', icon: Stethoscope },
    { id: 'sect-04', title: 'Kort aandacht-vraagje: sensibilisatie', icon: HelpCircle },
    { id: 'sect-05', title: 'Consensusdefinitie van anafylaxie', icon: ClipboardList },
    { id: 'sect-06', title: 'Klinische presentatie · Tabel 2 Ring en Messmer', icon: Table2 },
    { id: 'sect-07', title: 'Mechanismen van anafylaxie', icon: Activity },
    { id: 'sect-08', title: 'Kort aandacht-vraagje: IgE', icon: HelpCircle },
    { id: 'sect-09', title: 'Oorzaken van anafylaxie', icon: Thermometer },
    { id: 'sect-10', title: 'Diagnostiek van type I allergische reacties', icon: ClipboardList },
    { id: 'sect-11', title: 'Tryptase', icon: Activity },
    { id: 'sect-12', title: 'Behandeling · Tabel 3 effecten van adrenaline', icon: Syringe },
    { id: 'sect-13', title: 'Nut van antihistaminica en steroïden', icon: Pill },
    { id: 'sect-14', title: 'Te late of geen adrenaline', icon: Stethoscope },
    { id: 'sect-15', title: 'Kort aandacht-vraagje: behandeling', icon: HelpCircle },
    { id: 'sect-16', title: 'Observatie en bifasische reacties', icon: ClipboardList },
    { id: 'sect-17', title: 'Differentiaaldiagnose: anafylaxie of angio-oedeem?', icon: Stethoscope },
    { id: 'sect-18', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Anafylaxie, type I allergie"
      description="Anafylaxie is een acute, systemische en potentieel levensbedreigende reactie die meestal snel ontstaat. Binnen de allergische reacties past zij vooral bij type I reacties, die IgE-gemedieerd zijn en waarbij mestcellen centrale effectorcellen zijn."
      caseLabel="Week 1 · Casus 2: De veranderde barrière"
      blokLabel="Blok 5"
      moduleKind="lmv"
      practiceLink="/oefenvragen?lme=blok5-week1-casus2-lmv-anafylaxie-type-i-allergie"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02AllergieEnTabel1GellCoombs />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03DefinitieVanAnafylaxie />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04AandachtSensibilisatie />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05ConsensusdefinitieVanAnafylaxie />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06KlinischePresentatieEnTabel2 />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07MechanismenVanAnafylaxie />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08AandachtIgE />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09OorzakenVanAnafylaxie />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10DiagnostiekTypeIAllergischeReacties />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Tryptase />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12BehandelingMetAdrenalineEnTabel3 />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13NutVanAntihistaminicaEnSteroiden />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14TeLateOfGeenAdrenaline />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15AandachtBehandeling />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16ObservatieEnBifasischeReacties />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17Differentiaaldiagnose />
      </section>
      <section id="sect-18" className="scroll-mt-24 mb-12">
        <Sect18SlotSamenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week1Casus2LmvAnafylaxieTypeIAllergieSummary
