import {
  Activity,
  BookOpen,
  Brain,
  CircleCheck,
  GitBranch,
  Layers,
  Microscope,
  Network,
  Stethoscope,
  Table2,
  Target,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02GroteIndelingVanKinderkanker from './Sect02GroteIndelingVanKinderkanker'
import Sect03LeukemieTabel1 from './Sect03LeukemieTabel1'
import Sect04SymptomenVanLeukemie from './Sect04SymptomenVanLeukemie'
import Sect05DiagnostiekVanLeukemie from './Sect05DiagnostiekVanLeukemie'
import Sect06BehandelingEnComplicatiesLeukemie from './Sect06BehandelingEnComplicatiesLeukemie'
import Sect07LymfomenIntroEnTabel2 from './Sect07LymfomenIntroEnTabel2'
import Sect08LymfomenDiagnostiekEnBehandeling from './Sect08LymfomenDiagnostiekEnBehandeling'
import Sect09HersentumorenIntroEnTabel3 from './Sect09HersentumorenIntroEnTabel3'
import Sect10HersentumorenDiagnostiek from './Sect10HersentumorenDiagnostiek'
import Sect11HersentumorenBehandeling from './Sect11HersentumorenBehandeling'
import Sect12HersentumorenComplicatiesEnLateEffecten from './Sect12HersentumorenComplicatiesEnLateEffecten'
import Sect13SolideTumorenTabel4 from './Sect13SolideTumorenTabel4'
import Sect14OverlevingEnLangeTermijn from './Sect14OverlevingEnLangeTermijn'
import Sect15Samenvatting from './Sect15Samenvatting'

const Blok5Week5Casus11TypenKinderoncologieBijKinderenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'De grote indeling van kinderkanker', icon: GitBranch },
    { id: 'sect-03', title: 'Leukemie', icon: Activity },
    { id: 'sect-04', title: 'Symptomen van leukemie', icon: Stethoscope },
    { id: 'sect-05', title: 'Diagnostiek van leukemie', icon: Microscope },
    { id: 'sect-06', title: 'Behandeling en complicaties', icon: Target },
    { id: 'sect-07', title: 'Lymfomen', icon: Network },
    { id: 'sect-08', title: 'Diagnostiek van lymfomen; behandeling en late effecten', icon: Layers },
    { id: 'sect-09', title: 'Hersentumoren', icon: Brain },
    { id: 'sect-10', title: 'Diagnostiek', icon: Microscope },
    { id: 'sect-11', title: 'Behandeling', icon: Target },
    { id: 'sect-12', title: 'Complicaties en late effecten', icon: Activity },
    { id: 'sect-13', title: 'Solide tumoren', icon: Table2 },
    { id: 'sect-14', title: 'Overleving en lange termijn', icon: Stethoscope },
    { id: 'sect-15', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Typen kinderoncologie bij kinderen"
      description="Kanker bij kinderen kan grofweg worden ingedeeld in drie grote groepen: hemato-oncologie, hersentumoren en solide tumoren. Binnen de hemato-oncologie vallen vooral leukemieën en lymfomen."
      caseLabel="Week 5 · Casus 11: Kind met algehele malaise, koorts en zwelling in de buik"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week5-casus11-typen-kinderoncologie-bij-kinderen"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02GroteIndelingVanKinderkanker />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03LeukemieTabel1 />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04SymptomenVanLeukemie />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05DiagnostiekVanLeukemie />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06BehandelingEnComplicatiesLeukemie />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07LymfomenIntroEnTabel2 />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08LymfomenDiagnostiekEnBehandeling />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09HersentumorenIntroEnTabel3 />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10HersentumorenDiagnostiek />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11HersentumorenBehandeling />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12HersentumorenComplicatiesEnLateEffecten />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13SolideTumorenTabel4 />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14OverlevingEnLangeTermijn />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week5Casus11TypenKinderoncologieBijKinderenSummary
