import {
  Activity,
  AlertTriangle,
  BookOpen,
  CircleCheck,
  ClipboardList,
  GitBranch,
  Lightbulb,
  MapPin,
  Microscope,
  Scan,
  Stethoscope,
  UserRound,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsEenSentinelNode from './Sect02WatIsEenSentinelNode'
import Sect03WanneerIsProcedureZinvol from './Sect03WanneerIsProcedureZinvol'
import Sect04WaarBevindtDeSentinelNodeZich from './Sect04WaarBevindtDeSentinelNodeZich'
import Sect05HoeWordtDeSentinelNodeOpgespoord from './Sect05HoeWordtDeSentinelNodeOpgespoord'
import Sect06WatLaatDeOperatieZien from './Sect06WatLaatDeOperatieZien'
import Sect07KlinischeRelevantiePositieveSentinelNode from './Sect07KlinischeRelevantiePositieveSentinelNode'
import Sect08WaaromGeenVolledigLymfekliertoilet from './Sect08WaaromGeenVolledigLymfekliertoilet'
import Sect09ComplicatiesVanDeProcedure from './Sect09ComplicatiesVanDeProcedure'
import Sect10CasusWatLeerJeHiervan from './Sect10CasusWatLeerJeHiervan'
import Sect11PraktischeKernOmTeOnthouden from './Sect11PraktischeKernOmTeOnthouden'
import Sect12Samenvatting from './Sect12Samenvatting'

const Blok5Week2Casus4SentinelNodeSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is een sentinel node?', icon: GitBranch },
    { id: 'sect-03', title: 'Wanneer is de procedure zinvol?', icon: ClipboardList },
    { id: 'sect-04', title: 'Waar bevindt de sentinel node zich?', icon: MapPin },
    { id: 'sect-05', title: 'Hoe wordt de sentinel node opgespoord?', icon: Scan },
    { id: 'sect-06', title: 'Wat laat de operatie zien?', icon: Microscope },
    { id: 'sect-07', title: 'Klinische relevantie positieve sentinel node', icon: Stethoscope },
    { id: 'sect-08', title: 'Waarom geen volledig lymfekliertoilet?', icon: AlertTriangle },
    { id: 'sect-09', title: 'Complicaties van de procedure', icon: Activity },
    { id: 'sect-10', title: 'Casus: wat leer je hiervan?', icon: UserRound },
    { id: 'sect-11', title: 'Praktische kern om te onthouden', icon: Lightbulb },
    { id: 'sect-12', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Sentinel node"
      description="De sentinel node heet ook wel de schildwachtklier. Dit is de eerste lymfeklier die het lymfevocht uit een tumor ontvangt. Als een tumorcellen via de lymfebanen verspreiden, is dit vaak de eerste plek waar ze terechtkomen. Daarom kan onderzoek van deze klier informatie geven over de N-status. Met N-status bedoelen we of er sprake is van uitzaaiing in de lymfeklieren."
      caseLabel="Week 2 · Casus 4: Donkere vlek"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok5-week2-casus4-sentinel-node"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WatIsEenSentinelNode />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03WanneerIsProcedureZinvol />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04WaarBevindtDeSentinelNodeZich />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05HoeWordtDeSentinelNodeOpgespoord />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06WatLaatDeOperatieZien />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07KlinischeRelevantiePositieveSentinelNode />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08WaaromGeenVolledigLymfekliertoilet />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09ComplicatiesVanDeProcedure />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10CasusWatLeerJeHiervan />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11PraktischeKernOmTeOnthouden />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week2Casus4SentinelNodeSummary
