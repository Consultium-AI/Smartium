import {
  Activity,
  BookOpen,
  ClipboardList,
  Dna,
  FlaskConical,
  HeartPulse,
  LayoutGrid,
  ListChecks,
  Microscope,
  Pill,
  Radio,
  Scan,
  Scissors,
  Stethoscope,
  Syringe,
  Table2,
  Target,
  Users,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02IntroEpidemiologie from './Sect02IntroEpidemiologie'
import Sect03Risicofactoren from './Sect03Risicofactoren'
import Sect04Tabel1RokenTumoren from './Sect04Tabel1RokenTumoren'
import Sect05KlinischeSymptomen from './Sect05KlinischeSymptomen'
import Sect06ParaneoplastischeSyndromen from './Sect06ParaneoplastischeSyndromen'
import Sect07DiagnostiekVanLongkanker from './Sect07DiagnostiekVanLongkanker'
import Sect08BeeldvormendeDiagnostiek from './Sect08BeeldvormendeDiagnostiek'
import Sect09Weefseldiagnostiek from './Sect09Weefseldiagnostiek'
import Sect10BetrokkenDisciplines from './Sect10BetrokkenDisciplines'
import Sect11HistologieEnPathologie from './Sect11HistologieEnPathologie'
import Sect12TnmClassificatie from './Sect12TnmClassificatie'
import Sect13Prognose from './Sect13Prognose'
import Sect14BehandelingOverzicht from './Sect14BehandelingOverzicht'
import Sect15Chirurgie from './Sect15Chirurgie'
import Sect16Radiotherapie from './Sect16Radiotherapie'
import Sect17Chemotherapie from './Sect17Chemotherapie'
import Sect18Immunotherapie from './Sect18Immunotherapie'
import Sect19DoelgerichteTherapie from './Sect19DoelgerichteTherapie'
import Sect20Samenvatting from './Sect20Samenvatting'

const Blok9Week5Casus9LongkankerSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Longkanker: introductie en epidemiologie', icon: Activity },
    { id: 'sect-03', title: 'Risicofactoren en preventie', icon: HeartPulse },
    { id: 'sect-04', title: 'Tabel 1. Voorbeelden van tumoren die sterk met roken samenhangen', icon: Table2 },
    { id: 'sect-05', title: 'Klinische symptomen van longkanker', icon: Stethoscope },
    { id: 'sect-06', title: 'Paraneoplastische syndromen', icon: Dna },
    { id: 'sect-07', title: 'Diagnostiek van longkanker', icon: Scan },
    { id: 'sect-08', title: 'Beeldvormende diagnostiek', icon: Scan },
    { id: 'sect-09', title: 'Weefseldiagnostiek', icon: Microscope },
    { id: 'sect-10', title: 'Betrokken disciplines', icon: Users },
    { id: 'sect-11', title: 'Histologie en pathologie', icon: ClipboardList },
    { id: 'sect-12', title: 'TNM-classificatie', icon: LayoutGrid },
    { id: 'sect-13', title: 'Prognose', icon: Activity },
    { id: 'sect-14', title: 'Behandeling', icon: Pill },
    { id: 'sect-15', title: 'Chirurgie', icon: Scissors },
    { id: 'sect-16', title: 'Radiotherapie', icon: Radio },
    { id: 'sect-17', title: 'Chemotherapie', icon: Syringe },
    { id: 'sect-18', title: 'Immunotherapie', icon: Target },
    { id: 'sect-19', title: 'Doelgerichte therapie', icon: FlaskConical },
    { id: 'sect-20', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Longkanker"
      description="Longkanker is wereldwijd al tientallen jaren een van de meest voorkomende en dodelijkste vormen van kanker."
      caseLabel="Week 5 · Casus 9: Longkanker, wat nu"
      blokLabel="Blok 9"
      practiceLink="/oefenvragen?lme=blok9-week5-casus9-longkanker"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02IntroEpidemiologie />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03Risicofactoren />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04Tabel1RokenTumoren />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05KlinischeSymptomen />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06ParaneoplastischeSyndromen />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07DiagnostiekVanLongkanker />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08BeeldvormendeDiagnostiek />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Weefseldiagnostiek />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10BetrokkenDisciplines />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11HistologieEnPathologie />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12TnmClassificatie />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13Prognose />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14BehandelingOverzicht />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Chirurgie />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16Radiotherapie />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17Chemotherapie />
      </section>
      <section id="sect-18" className="scroll-mt-24 mb-12">
        <Sect18Immunotherapie />
      </section>
      <section id="sect-19" className="scroll-mt-24 mb-12">
        <Sect19DoelgerichteTherapie />
      </section>
      <section id="sect-20" className="scroll-mt-24 mb-12">
        <Sect20Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok9Week5Casus9LongkankerSummary
