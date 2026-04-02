import {
  BookOpen,
  Wind,
  Brain,
  Link2,
  Layers,
  CircleDashed,
  AlertCircle,
  GitBranch,
  Sparkles,
  Table2,
  ClipboardList,
  Lightbulb,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02BasisVanGaswisseling from './Sect02BasisVanGaswisseling'
import Sect03HoeWordtDeAdemhalingGeregeld from './Sect03HoeWordtDeAdemhalingGeregeld'
import Sect04VqMatchingEnZwaartekracht from './Sect04VqMatchingEnZwaartekracht'
import Sect05DeDrieWestZones from './Sect05DeDrieWestZones'
import Sect06DodeRuimte from './Sect06DodeRuimte'
import Sect07VoorbeeldenDodeRuimte from './Sect07VoorbeeldenDodeRuimte'
import Sect08Shunt from './Sect08Shunt'
import Sect09Diffusiestoornissen from './Sect09Diffusiestoornissen'
import Sect10KlinischeRedeneerstappen from './Sect10KlinischeRedeneerstappen'
import Sect11EnkeleTypischeCasussen from './Sect11EnkeleTypischeCasussen'
import Sect12KlinischeKern from './Sect12KlinischeKern'
import Sect13Samenvatting from './Sect13Samenvatting'

const Blok9Week4Casus7KlinischRedenerenRespiratoireInsufficiëntieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Basis van gaswisseling', icon: Wind },
    { id: 'sect-03', title: 'Hoe wordt de ademhaling geregeld?', icon: Brain },
    { id: 'sect-04', title: 'V/Q-matching: ventilatie en perfusie', icon: Link2 },
    { id: 'sect-05', title: 'De drie West-zones', icon: Layers },
    { id: 'sect-06', title: 'Dode ruimte: wel lucht, geen bloed', icon: CircleDashed },
    { id: 'sect-07', title: 'Voorbeelden van dode ruimte', icon: AlertCircle },
    { id: 'sect-08', title: 'Shunt: wel bloed, geen lucht', icon: GitBranch },
    { id: 'sect-09', title: 'Diffusiestoornissen: probleem in het membraan', icon: Sparkles },
    { id: 'sect-10', title: 'Klinische redeneerstappen: het patroon herkennen', icon: Table2 },
    { id: 'sect-11', title: 'Enkele typische casussen', icon: ClipboardList },
    { id: 'sect-12', title: 'Klinische kern om te onthouden', icon: Lightbulb },
    { id: 'sect-13', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Klinisch redeneren bij respiratoire insufficiëntie"
      description="De long heeft twee hoofdrollen: zuurstof opnemen en koolstofdioxide afgeven. Dat is van levensbelang, want als één van deze functies faalt, kan iemand snel achteruitgaan."
      caseLabel="Week 4 · Casus 7: Patiënt met een pneumonie"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok9-week4-casus7-klinisch-redeneren-respiratoire-insufficiëntie"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02BasisVanGaswisseling /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03HoeWordtDeAdemhalingGeregeld /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04VqMatchingEnZwaartekracht /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05DeDrieWestZones /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06DodeRuimte /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07VoorbeeldenDodeRuimte /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08Shunt /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09Diffusiestoornissen /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10KlinischeRedeneerstappen /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11EnkeleTypischeCasussen /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12KlinischeKern /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Sect13Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week4Casus7KlinischRedenerenRespiratoireInsufficiëntieSummary
