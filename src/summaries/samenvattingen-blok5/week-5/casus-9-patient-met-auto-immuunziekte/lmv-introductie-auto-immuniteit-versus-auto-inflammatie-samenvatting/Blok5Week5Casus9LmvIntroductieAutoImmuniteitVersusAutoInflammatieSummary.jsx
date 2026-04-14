import {
  BookOpen,
  CircleCheck,
  ClipboardList,
  GitBranch,
  HelpCircle,
  Layers,
  ListTree,
  Microscope,
  Shield,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02HetImmuunsysteemAlsVerdediging from './Sect02HetImmuunsysteemAlsVerdediging'
import Sect03AlsHetAfweersysteemFaalt from './Sect03AlsHetAfweersysteemFaalt'
import Sect04AandachtVraagOnderscheid from './Sect04AandachtVraagOnderscheid'
import Sect05BasisgedachteEnTabel1 from './Sect05BasisgedachteEnTabel1'
import Sect06GeenStrikteScheiding from './Sect06GeenStrikteScheiding'
import Sect07AandachtVraagTweedelingVsContinuum from './Sect07AandachtVraagTweedelingVsContinuum'
import Sect08HetImmunologischeZiektecontinuum from './Sect08HetImmunologischeZiektecontinuum'
import Sect09VoorbeeldenAutoInflammatoir from './Sect09VoorbeeldenAutoInflammatoir'
import Sect10VoorbeeldenMidden from './Sect10VoorbeeldenMidden'
import Sect11VoorbeeldenAutoImmuun from './Sect11VoorbeeldenAutoImmuun'
import Sect12WaaromOverlapLogisch from './Sect12WaaromOverlapLogisch'
import Sect13VoorbeeldenBegrijpenVanuitHetModel from './Sect13VoorbeeldenBegrijpenVanuitHetModel'
import Sect14Tabel2PraktischeManier from './Sect14Tabel2PraktischeManier'
import Sect15DeRolVanDeKlassiekeTweedeling from './Sect15DeRolVanDeKlassiekeTweedeling'
import Sect16WatMoetJeOnthoudenVoorZiektebeelden from './Sect16WatMoetJeOnthoudenVoorZiektebeelden'
import Sect17AandachtVraagModel from './Sect17AandachtVraagModel'
import Sect18TakeHomeMessages from './Sect18TakeHomeMessages'
import Sect19KlinischeManierVanKijken from './Sect19KlinischeManierVanKijken'
import Sect20Samenvatting from './Sect20Samenvatting'

const Blok5Week5Casus9LmvIntroductieAutoImmuniteitVersusAutoInflammatieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Het immuunsysteem als verdediging', icon: Shield },
    { id: 'sect-03', title: 'Als het afweersysteem faalt', icon: Stethoscope },
    { id: 'sect-04', title: 'Aandacht-vraag: onderscheid nuttig', icon: HelpCircle },
    { id: 'sect-05', title: 'Auto-immuniteit en auto-inflammatie: de basisgedachte', icon: Layers },
    { id: 'sect-06', title: 'Er is geen strikte scheiding', icon: GitBranch },
    { id: 'sect-07', title: 'Aandacht-vraag: tweedeling versus continuüm', icon: HelpCircle },
    { id: 'sect-08', title: 'Het immunologische ziektecontinuüm', icon: ListTree },
    { id: 'sect-09', title: 'Voorbeelden meer aan de auto-inflammatoire kant', icon: Microscope },
    { id: 'sect-10', title: 'Voorbeelden meer in het midden', icon: Layers },
    { id: 'sect-11', title: 'Voorbeelden meer aan de auto-immuunkant', icon: Microscope },
    { id: 'sect-12', title: 'Waarom overlap logisch is', icon: GitBranch },
    { id: 'sect-13', title: 'Voorbeelden begrijpen vanuit het model', icon: ClipboardList },
    { id: 'sect-14', title: 'Tabel 2. Praktische manier van denken', icon: Table2 },
    { id: 'sect-15', title: 'De rol van de klassieke tweedeling', icon: Layers },
    { id: 'sect-16', title: 'Wat moet je onthouden voor ziektebeelden?', icon: ClipboardList },
    { id: 'sect-17', title: 'Aandacht-vraag: model onbruikbaar?', icon: HelpCircle },
    { id: 'sect-18', title: 'Take-home messages uitgewerkt', icon: BookOpen },
    { id: 'sect-19', title: 'Klinische manier van kijken', icon: Stethoscope },
    { id: 'sect-20', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Introductie auto-immuniteit versus auto-inflammatie"
      description="Het immuunsysteem van gewervelde dieren is bedoeld als verdedigingssysteem tegen aanvallers van buitenaf. Daarbij kun je grofweg denken aan twee grote onderdelen: het aangeboren afweersysteem en het verworven afweersysteem."
      caseLabel="Week 5 · Casus 9: Patiënt met auto-immuunziekte"
      blokLabel="Blok 5"
      moduleKind="lmv"
      practiceLink="/oefenvragen?lme=blok5-week5-casus9-lmv-introductie-auto-immuniteit-versus-auto-inflammatie"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week5-casus9-lmv-introductie-auto-immuniteit-versus-auto-inflammatie',
      variants: [
        { id: 'blok5-week5-casus9-lmv-introductie-auto-immuniteit-versus-auto-inflammatie', label: 'Uitgebreid' },
        { id: 'blok5-week5-casus9-lmv-introductie-auto-immuniteit-versus-auto-inflammatie-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02HetImmuunsysteemAlsVerdediging />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03AlsHetAfweersysteemFaalt />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04AandachtVraagOnderscheid />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05BasisgedachteEnTabel1 />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06GeenStrikteScheiding />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07AandachtVraagTweedelingVsContinuum />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08HetImmunologischeZiektecontinuum />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09VoorbeeldenAutoInflammatoir />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10VoorbeeldenMidden />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11VoorbeeldenAutoImmuun />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12WaaromOverlapLogisch />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13VoorbeeldenBegrijpenVanuitHetModel />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Tabel2PraktischeManier />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15DeRolVanDeKlassiekeTweedeling />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16WatMoetJeOnthoudenVoorZiektebeelden />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17AandachtVraagModel />
      </section>
      <section id="sect-18" className="scroll-mt-24 mb-12">
        <Sect18TakeHomeMessages />
      </section>
      <section id="sect-19" className="scroll-mt-24 mb-12">
        <Sect19KlinischeManierVanKijken />
      </section>
      <section id="sect-20" className="scroll-mt-24 mb-12">
        <Sect20Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week5Casus9LmvIntroductieAutoImmuniteitVersusAutoInflammatieSummary
