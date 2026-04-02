import {
  BookOpen,
  CircleCheck,
  GitBranch,
  HeartPulse,
  Layers,
  Microscope,
  Route,
  Shield,
  Sparkles,
  Stethoscope,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02DeThymusInGroteLijnen from './Sect02DeThymusInGroteLijnen'
import Sect03MigratieEnRijping from './Sect03MigratieEnRijping'
import Sect04Mediatoren from './Sect04Mediatoren'
import Sect05ThymusepitheelEnStroma from './Sect05ThymusepitheelEnStroma'
import Sect06ThymicCrossTalk from './Sect06ThymicCrossTalk'
import Sect07PositieveEnNegatieveSelectie from './Sect07PositieveEnNegatieveSelectie'
import Sect08Flowcytometrie from './Sect08Flowcytometrie'
import Sect09DiGeorge from './Sect09DiGeorge'
import Sect10SamenvattingVanHetGeheel from './Sect10SamenvattingVanHetGeheel'

const Blok5Week5Casus9BouwEnFunctieVanDeThymusSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'De thymus in grote lijnen', icon: HeartPulse },
    { id: 'sect-03', title: 'Migratie van prothymocyten en rijping van T-cellen', icon: Route },
    { id: 'sect-04', title: 'Mediatoren van migratie en proliferatie', icon: GitBranch },
    { id: 'sect-05', title: 'Thymusepitheel en thymusstroma', icon: Layers },
    { id: 'sect-06', title: 'Thymic cross-talk: wederzijdse beïnvloeding', icon: Sparkles },
    { id: 'sect-07', title: 'Positieve en negatieve selectie', icon: Shield },
    { id: 'sect-08', title: 'Flowcytometrie en thymocytenpopulaties', icon: Microscope },
    { id: 'sect-09', title: 'Klinische relevantie: DiGeorge-syndroom', icon: Stethoscope },
    { id: 'sect-10', title: 'Samenvatting van het geheel', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Bouw en functie van de thymus"
      description="De thymus is het orgaan waar T-lymfocyten rijpen. Dat is belangrijk, omdat T-cellen daar leren wat lichaamseigen is en wat lichaamsvreemd is. De voorlopercellen van T-lymfocyten, de prothymocyten, ontstaan net als B-lymfocyten in het beenmerg en migreren daarna via het bloed naar de thymus."
      caseLabel="Week 5 · Casus 9: Patiënt met auto-immuunziekte"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week5-casus9-bouw-en-functie-van-de-thymus"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02DeThymusInGroteLijnen />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03MigratieEnRijping />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04Mediatoren />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05ThymusepitheelEnStroma />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06ThymicCrossTalk />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07PositieveEnNegatieveSelectie />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Flowcytometrie />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09DiGeorge />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10SamenvattingVanHetGeheel />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week5Casus9BouwEnFunctieVanDeThymusSummary
