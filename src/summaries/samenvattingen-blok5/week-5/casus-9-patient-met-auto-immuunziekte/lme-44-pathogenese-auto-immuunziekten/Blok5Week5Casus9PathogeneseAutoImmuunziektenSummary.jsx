import {
  BookOpen,
  CircleCheck,
  Dna,
  FlaskConical,
  GitBranch,
  Layers,
  ListTree,
  Microscope,
  Pill,
  Scale,
  Shield,
  Sparkles,
  Syringe,
  Table2,
  Target,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02Inleiding from './Sect02Inleiding'
import Sect03ImmunologischeTolerantie from './Sect03ImmunologischeTolerantie'
import Sect04HoeVerdwijntImmunologischeTolerantie from './Sect04HoeVerdwijntImmunologischeTolerantie'
import Sect05GenetischeFactoren from './Sect05GenetischeFactoren'
import Sect06NietGenetischeFactoren from './Sect06NietGenetischeFactoren'
import Sect07AutoImmuunziekteVersusAutoImmuuniteit from './Sect07AutoImmuunziekteVersusAutoImmuuniteit'
import Sect08DiagnostischeEnVastFase from './Sect08DiagnostischeEnVastFase'
import Sect09SystemischEnOrgaanspecifiek from './Sect09SystemischEnOrgaanspecifiek'
import Sect10EffectormechanismenIntro from './Sect10EffectormechanismenIntro'
import Sect11TypeII from './Sect11TypeII'
import Sect12TypeIII from './Sect12TypeIII'
import Sect13TypeIV from './Sect13TypeIV'
import Sect14Behandeling from './Sect14Behandeling'
import Sect15SamenvattingVanDeKern from './Sect15SamenvattingVanDeKern'
import Sect16Samenvatting from './Sect16Samenvatting'

const Blok5Week5Casus9PathogeneseAutoImmuunziektenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Inleiding', icon: Sparkles },
    { id: 'sect-03', title: 'Immunologische tolerantie', icon: Shield },
    { id: 'sect-04', title: 'Hoe verdwijnt immunologische tolerantie?', icon: GitBranch },
    { id: 'sect-05', title: 'Genetische factoren bij auto-immuniteit', icon: Dna },
    { id: 'sect-06', title: 'Niet-genetische factoren', icon: Layers },
    { id: 'sect-07', title: 'Auto-immuniteit versus auto-immuunziekte', icon: Scale },
    { id: 'sect-08', title: 'Diagnostische antistoffen · Vast-fase immunoassays', icon: Microscope },
    { id: 'sect-09', title: 'Systemische en orgaanspecifieke auto-immuunziekten', icon: Table2 },
    { id: 'sect-10', title: 'Effectormechanismen van auto-immuunziekten', icon: ListTree },
    { id: 'sect-11', title: 'Type II: antistoffen tegen autoantigenen', icon: Syringe },
    { id: 'sect-12', title: 'Type III: immuuncomplexen', icon: Target },
    { id: 'sect-13', title: 'Type IV: T-cellen tegen autoantigenen', icon: FlaskConical },
    { id: 'sect-14', title: 'Behandeling', icon: Pill },
    { id: 'sect-15', title: 'Samenvatting van de kern', icon: CircleCheck },
    { id: 'sect-16', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Pathogenese auto-immuunziekten"
      description="Auto-immuniteit en auto-immuunziekten horen bij elkaar, maar zijn niet hetzelfde. Auto-immuniteit betekent dat het immuunsysteem reageert op lichaamseigen antigenen. Dat hoeft nog niet meteen tot ziekte te leiden. Pas wanneer deze reactie schade veroorzaakt aan cellen, weefsels of organen, spreken we van een auto-immuunziekte."
      caseLabel="Week 5 · Casus 9: Patiënt met auto-immuunziekte"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02Inleiding />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03ImmunologischeTolerantie />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04HoeVerdwijntImmunologischeTolerantie />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05GenetischeFactoren />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06NietGenetischeFactoren />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07AutoImmuunziekteVersusAutoImmuuniteit />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08DiagnostischeEnVastFase />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09SystemischEnOrgaanspecifiek />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10EffectormechanismenIntro />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11TypeII />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12TypeIII />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13TypeIV />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Behandeling />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15SamenvattingVanDeKern />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week5Casus9PathogeneseAutoImmuunziektenSummary
