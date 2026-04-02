import {
  Activity,
  BookOpen,
  CircleCheck,
  ClipboardList,
  FlaskConical,
  Layers,
  ListChecks,
  Microscope,
  Shield,
  Stethoscope,
  Syringe,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02HuidkankerAlgemeen from './Sect02HuidkankerAlgemeen'
import Sect03BiologieVanDeHuid from './Sect03BiologieVanDeHuid'
import Sect04RisicofactorenEnPreventie from './Sect04RisicofactorenEnPreventie'
import Sect05CutaanPlaveiselcelcarcinoomKliniek from './Sect05CutaanPlaveiselcelcarcinoomKliniek'
import Sect06DiagnostiekEnStadieringScc from './Sect06DiagnostiekEnStadieringScc'
import Sect07RisicoclassificatieScc from './Sect07RisicoclassificatieScc'
import Sect08BehandelingCutaanPlaveiselcelcarcinoom from './Sect08BehandelingCutaanPlaveiselcelcarcinoom'
import Sect09BasaalcelcarcinoomSubtypen from './Sect09BasaalcelcarcinoomSubtypen'
import Sect10DifferentiaaldiagnoseBcc from './Sect10DifferentiaaldiagnoseBcc'
import Sect11DiagnostiekBcc from './Sect11DiagnostiekBcc'
import Sect12BehandelingBcc from './Sect12BehandelingBcc'
import Sect13KlinischeKeuzeEnFollowUp from './Sect13KlinischeKeuzeEnFollowUp'
import Sect14Samenvatting from './Sect14Samenvatting'

const Blok5Week3Casus5HuidtumorenBasaalcelEnPlaveiselcelcarcinoomSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Huidkanker in het algemeen', icon: Layers },
    { id: 'sect-03', title: 'Biologie van de huid en het ontstaan van tumoren', icon: Microscope },
    { id: 'sect-04', title: 'Risicofactoren en preventie', icon: Shield },
    { id: 'sect-05', title: 'Cutaan plaveiselcelcarcinoom', icon: Activity },
    { id: 'sect-06', title: 'Diagnostiek, aanvullende diagnostiek en stadiëring', icon: Stethoscope },
    { id: 'sect-07', title: 'Risicoclassificatie', icon: ListChecks },
    { id: 'sect-08', title: 'Behandeling van het cutane plaveiselcelcarcinoom', icon: Syringe },
    { id: 'sect-09', title: 'Basaalcelcarcinoom: subtypen en klinisch beeld', icon: Table2 },
    { id: 'sect-10', title: 'Differentiaaldiagnose', icon: ClipboardList },
    { id: 'sect-11', title: 'Diagnostiek bij verdenking op BCC', icon: FlaskConical },
    { id: 'sect-12', title: 'Behandeling van het basaalcelcarcinoom', icon: Activity },
    { id: 'sect-13', title: 'Klinische keuze van behandeling en follow-up', icon: ListChecks },
    { id: 'sect-14', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Huidtumoren basaalcel- en plaveiselcelcarcinoom"
      description="Huidkanker hoort bij de meest voorkomende vormen van kanker. De incidentie zal de komende jaren naar verwachting blijven stijgen. De belangrijkste vormen zijn het basaalcelcarcinoom, het cutaan plaveiselcelcarcinoom en het melanoom."
      caseLabel="Week 3 · Casus 5: De verdachte huid"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week3-casus5-huidtumoren-basaalcel-en-plaveiselcelcarcinoom"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02HuidkankerAlgemeen />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03BiologieVanDeHuid />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04RisicofactorenEnPreventie />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05CutaanPlaveiselcelcarcinoomKliniek />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06DiagnostiekEnStadieringScc />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07RisicoclassificatieScc />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08BehandelingCutaanPlaveiselcelcarcinoom />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09BasaalcelcarcinoomSubtypen />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10DifferentiaaldiagnoseBcc />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11DiagnostiekBcc />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12BehandelingBcc />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13KlinischeKeuzeEnFollowUp />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week3Casus5HuidtumorenBasaalcelEnPlaveiselcelcarcinoomSummary
