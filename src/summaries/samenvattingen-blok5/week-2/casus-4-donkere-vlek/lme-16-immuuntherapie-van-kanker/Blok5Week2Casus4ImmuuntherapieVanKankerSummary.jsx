import {
  BookOpen,
  CircleCheck,
  Dna,
  GitBranch,
  Layers,
  Microscope,
  Shield,
  Stethoscope,
  Syringe,
  Table2,
  Target,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02KankerEnHetImmuunsysteem from './Sect02KankerEnHetImmuunsysteem'
import Sect03TumorMicroOmgeving from './Sect03TumorMicroOmgeving'
import Sect04HallmarksEnDirecteInvloed from './Sect04HallmarksEnDirecteInvloed'
import Sect05KankerImmuunEditing from './Sect05KankerImmuunEditing'
import Sect06HoePassenTumorcellenZichAan from './Sect06HoePassenTumorcellenZichAan'
import Sect07DeKankerImmuunCyclus from './Sect07DeKankerImmuunCyclus'
import Sect08WieZijnEssentieel from './Sect08WieZijnEssentieel'
import Sect09ImmuneCheckpointInhibitie from './Sect09ImmuneCheckpointInhibitie'
import Sect10BelangVoorImmunotherapie from './Sect10BelangVoorImmunotherapie'
import Sect11OntwikkelingenEnKlinischeRelevantie from './Sect11OntwikkelingenEnKlinischeRelevantie'
import Sect12Samenvatting from './Sect12Samenvatting'

const Blok5Week2Casus4ImmuuntherapieVanKankerSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Kanker en het immuunsysteem: één wisselwerking', icon: GitBranch },
    { id: 'sect-03', title: 'De tumor-micro-omgeving', icon: Layers },
    { id: 'sect-04', title: 'Hallmarks en directe invloed immuunsysteem', icon: Table2 },
    { id: 'sect-05', title: 'Kanker–immuun editing', icon: Dna },
    { id: 'sect-06', title: 'Hoe passen tumorcellen zich aan?', icon: Microscope },
    { id: 'sect-07', title: 'De kanker-immuun cyclus', icon: Zap },
    { id: 'sect-08', title: 'Wie zijn essentieel voor anti-tumorrespons?', icon: Target },
    { id: 'sect-09', title: 'Immune checkpoint inhibitie', icon: Shield },
    { id: 'sect-10', title: 'Belang voor immunotherapie van kanker', icon: Syringe },
    { id: 'sect-11', title: 'Ontwikkelingen en klinische relevantie', icon: Stethoscope },
    { id: 'sect-12', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Immuuntherapie van kanker"
      description="Kanker ontstaat niet los van de omgeving. Tumoren vormen samen met hun directe omgeving, en vooral met immuuncellen, een soort ecosysteem. Juist die wisselwerking is belangrijk voor het ontstaan en het voortbestaan van maligniteiten."
      caseLabel="Week 2 · Casus 4: Donkere vlek"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week2-casus4-immuuntherapie-van-kanker"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02KankerEnHetImmuunsysteem />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03TumorMicroOmgeving />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04HallmarksEnDirecteInvloed />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05KankerImmuunEditing />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06HoePassenTumorcellenZichAan />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07DeKankerImmuunCyclus />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08WieZijnEssentieel />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09ImmuneCheckpointInhibitie />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10BelangVoorImmunotherapie />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11OntwikkelingenEnKlinischeRelevantie />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week2Casus4ImmuuntherapieVanKankerSummary
