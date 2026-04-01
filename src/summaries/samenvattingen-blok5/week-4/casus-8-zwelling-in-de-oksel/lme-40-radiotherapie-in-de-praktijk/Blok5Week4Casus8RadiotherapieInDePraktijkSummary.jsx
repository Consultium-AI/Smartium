import {
  Activity,
  BookOpen,
  CircleCheck,
  ClipboardList,
  Layers,
  MessageCircle,
  Microscope,
  Stethoscope,
  Table2,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsRadiotherapie from './Sect02WatIsRadiotherapie'
import Sect03DirecteEnIndirecteDNASchade from './Sect03DirecteEnIndirecteDNASchade'
import Sect04WaaromWerktRadiotherapieNietAlleenInDeTumor from './Sect04WaaromWerktRadiotherapieNietAlleenInDeTumor'
import Sect05TumorControlProbability from './Sect05TumorControlProbability'
import Sect06NormalTissueComplicationProbability from './Sect06NormalTissueComplicationProbability'
import Sect07TherapeutischeBreedte from './Sect07TherapeutischeBreedte'
import Sect08Fractionering from './Sect08Fractionering'
import Sect09HypofractioneringEnHyperfractionering from './Sect09HypofractioneringEnHyperfractionering'
import Sect10VoorbeeldenVanFractionering from './Sect10VoorbeeldenVanFractionering'
import Sect11WaaromFractioneren from './Sect11WaaromFractioneren'
import Sect12Tabel4DeVierRs from './Sect12Tabel4DeVierRs'
import Sect13AcuteBijwerkingen from './Sect13AcuteBijwerkingen'
import Sect14LateBijwerkingen from './Sect14LateBijwerkingen'
import Sect15Tabel5AcuteVersusLate from './Sect15Tabel5AcuteVersusLate'
import Sect16LymfoedeemAlsLateComplicatie from './Sect16LymfoedeemAlsLateComplicatie'
import Sect17BehandelingVanLymfoedeem from './Sect17BehandelingVanLymfoedeem'
import Sect18RisicofactorenVoorToxiciteit from './Sect18RisicofactorenVoorToxiciteit'
import Sect19Samenvatting from './Sect19Samenvatting'

const Blok5Week4Casus8RadiotherapieInDePraktijkSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is radiotherapie?', icon: Zap },
    { id: 'sect-03', title: 'Directe en indirecte DNA-schade', icon: Layers },
    { id: 'sect-04', title: 'Waarom niet alleen in de tumor?', icon: Stethoscope },
    { id: 'sect-05', title: 'Tumor Control Probability (TCP)', icon: Activity },
    { id: 'sect-06', title: 'Normal Tissue Complication Probability (NTCP)', icon: Activity },
    { id: 'sect-07', title: 'Therapeutische breedte en Tabel 2', icon: Table2 },
    { id: 'sect-08', title: 'Fractionering', icon: MessageCircle },
    { id: 'sect-09', title: 'Hypo- en hyperfractionering', icon: Table2 },
    { id: 'sect-10', title: 'Voorbeelden van fractionering', icon: ClipboardList },
    { id: 'sect-11', title: 'Waarom fractioneren we?', icon: MessageCircle },
    { id: 'sect-12', title: "Tabel 4. De vier R's", icon: Table2 },
    { id: 'sect-13', title: 'Acute bijwerkingen', icon: Stethoscope },
    { id: 'sect-14', title: 'Late bijwerkingen', icon: Stethoscope },
    { id: 'sect-15', title: 'Tabel 5. Acute versus late toxiciteit', icon: Table2 },
    { id: 'sect-16', title: 'Lymfoedeem als late complicatie', icon: Microscope },
    { id: 'sect-17', title: 'Behandeling van lymfoedeem', icon: Stethoscope },
    { id: 'sect-18', title: 'Risicofactoren voor toxiciteit', icon: Table2 },
    { id: 'sect-19', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Radiotherapie in de praktijk"
      description="Radiotherapie is een medische behandeling met röntgenstraling: dat is ioniserende straling. In de meeste gevallen wordt deze behandeling ingezet tegen kanker. Het doel is om tumorcellen zo veel mogelijk te beschadigen en te laten sterven, terwijl het omliggende normale weefsel zo veel mogelijk gespaard blijft."
      caseLabel="Week 4 · Casus 8: Zwelling in de oksel"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WatIsRadiotherapie />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03DirecteEnIndirecteDNASchade />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04WaaromWerktRadiotherapieNietAlleenInDeTumor />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05TumorControlProbability />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06NormalTissueComplicationProbability />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07TherapeutischeBreedte />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Fractionering />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09HypofractioneringEnHyperfractionering />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10VoorbeeldenVanFractionering />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11WaaromFractioneren />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Tabel4DeVierRs />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13AcuteBijwerkingen />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14LateBijwerkingen />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Tabel5AcuteVersusLate />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16LymfoedeemAlsLateComplicatie />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17BehandelingVanLymfoedeem />
      </section>
      <section id="sect-18" className="scroll-mt-24 mb-12">
        <Sect18RisicofactorenVoorToxiciteit />
      </section>
      <section id="sect-19" className="scroll-mt-24 mb-12">
        <Sect19Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week4Casus8RadiotherapieInDePraktijkSummary
