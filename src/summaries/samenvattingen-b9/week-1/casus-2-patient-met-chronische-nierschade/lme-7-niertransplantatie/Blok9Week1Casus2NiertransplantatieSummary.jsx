import {
  BookOpen,
  Bird,
  Table2,
  Scissors,
  History,
  Pill,
  AlertTriangle,
  CircleAlert,
  Bug,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02Vogelvlucht from './Sect02Vogelvlucht'
import Sect03Tabel1Pretransplantatie from './Sect03Tabel1Pretransplantatie'
import Sect04Chirurgie from './Sect04Chirurgie'
import Sect05GeschiedenisImmunosuppressiva from './Sect05GeschiedenisImmunosuppressiva'
import Sect06TacrolimusPraktijk from './Sect06TacrolimusPraktijk'
import Sect07InteractiesEnOpname from './Sect07InteractiesEnOpname'
import Sect08NefrotoxiciteitTabel3 from './Sect08NefrotoxiciteitTabel3'
import Sect09CMV from './Sect09CMV'
import Sect10Samenvatting from './Sect10Samenvatting'

const Blok9Week1Casus2NiertransplantatieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Niertransplantatie in vogelvlucht', icon: Bird },
    { id: 'sect-03', title: 'Pretransplantatiescreening', icon: Table2 },
    { id: 'sect-04', title: 'Chirurgie van niertransplantatie', icon: Scissors },
    { id: 'sect-05', title: 'Geschiedenis van de immunosuppressiva', icon: History },
    { id: 'sect-06', title: 'Tacrolimus: de praktijk van het middel', icon: Pill },
    { id: 'sect-07', title: 'Interacties en opname', icon: AlertTriangle },
    { id: 'sect-08', title: 'Nefrotoxiciteit van tacrolimus', icon: CircleAlert },
    { id: 'sect-09', title: 'CMV na niertransplantatie', icon: Bug },
    { id: 'sect-10', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Niertransplantatie"
      description="Een niertransplantatie is meer dan alleen het plaatsen van een donororgaan. Er is ook een ontvanger nodig die de operatie kan ondergaan en voldoende beoordeeld is om de ingreep veilig te laten verlopen. De patiënt die een transplantatie nodig heeft, heeft per definitie nierfalen en is daardoor kwetsbaar. Daarom start de voorbereiding op tijd, bij voorkeur al ongeveer één jaar voordat de eGFR onder de 15 ml/min komt."
      caseLabel="Week 1 · Casus 2: Patiënt met chronische nierschade"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02Vogelvlucht /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03Tabel1Pretransplantatie /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04Chirurgie /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05GeschiedenisImmunosuppressiva /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06TacrolimusPraktijk /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07InteractiesEnOpname /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08NefrotoxiciteitTabel3 /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09CMV /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week1Casus2NiertransplantatieSummary
