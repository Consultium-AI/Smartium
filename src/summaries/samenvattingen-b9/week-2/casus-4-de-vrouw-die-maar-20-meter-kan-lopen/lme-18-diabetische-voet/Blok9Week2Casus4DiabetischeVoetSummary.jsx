import {
  BookOpen,
  Footprints,
  GitBranch,
  Eye,
  ListOrdered,
  Activity,
  Gauge,
  ClipboardList,
  AlertTriangle,
  Shield,
  Bandage,
  Pill,
  FileText,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsDeDiabetischeVoet from './Sect02WatIsDeDiabetischeVoet'
import Sect03OntstaanswijzeNeuropathie from './Sect03OntstaanswijzeNeuropathie'
import Sect04HuidafwijkingenEnVoetstand from './Sect04HuidafwijkingenEnVoetstand'
import Sect05OntstaanDiabetischUlcus from './Sect05OntstaanDiabetischUlcus'
import Sect06DoorbloedingEAI from './Sect06DoorbloedingEAI'
import Sect07Teendruk from './Sect07Teendruk'
import Sect08ConsultBeoordeling from './Sect08ConsultBeoordeling'
import Sect09Risicofactoren from './Sect09Risicofactoren'
import Sect10Preventie from './Sect10Preventie'
import Sect11BehandelingDrukontlasting from './Sect11BehandelingDrukontlasting'
import Sect12BehandelingInfectieEnIschemie from './Sect12BehandelingInfectieEnIschemie'
import Sect13Casus from './Sect13Casus'
import Sect14Samenvatting from './Sect14Samenvatting'

const Blok9Week2Casus4DiabetischeVoetSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is de diabetische voet?', icon: Footprints },
    { id: 'sect-03', title: 'Ontstaanswijze: neurogeen, autonoom en motorisch', icon: GitBranch },
    { id: 'sect-04', title: 'Huidafwijkingen en voetstand: signalen die je moet herkennen', icon: Eye },
    { id: 'sect-05', title: 'Hoe ontstaat een diabetisch ulcus?', icon: ListOrdered },
    { id: 'sect-06', title: 'Doorbloeding en perifere vaatziekten', icon: Activity },
    { id: 'sect-07', title: 'Teendruk: waarom is die belangrijk?', icon: Gauge },
    { id: 'sect-08', title: 'Hoe beoordeel je een patiënt met een diabetische voet?', icon: ClipboardList },
    { id: 'sect-09', title: 'Risicofactoren: wanneer ben je extra alert?', icon: AlertTriangle },
    { id: 'sect-10', title: 'Preventie van een diabetische voet', icon: Shield },
    { id: 'sect-11', title: 'Behandeling: drukontlasting en wondzorg', icon: Bandage },
    { id: 'sect-12', title: 'Behandeling van infectie en ischemie', icon: Pill },
    { id: 'sect-13', title: 'Casus: wat leerde je hiervan?', icon: FileText },
    { id: 'sect-14', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Diabetische voet"
      description="De diabetische voet is een complicatie van diabetes mellitus waarbij beschadiging van zenuwen en/of verminderde doorbloeding leidt tot voetafwijkingen, drukplekken, ulcera, infecties en soms verlies van weefsel of zelfs een deel van de voet. Het gaat dus niet om één enkel probleem, maar om een combinatie van factoren die elkaar versterken."
      caseLabel="Week 2 · Casus 4: De vrouw die maar 20 meter kan lopen"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok9-week2-casus4-diabetische-voet"
      summaryVariantToggle={{
        activeLmeId: 'blok9-week2-casus4-diabetische-voet',
        variants: [
          { id: 'blok9-week2-casus4-diabetische-voet', label: 'Uitgebreid' },
          { id: 'blok9-week2-casus4-diabetische-voet-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02WatIsDeDiabetischeVoet /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03OntstaanswijzeNeuropathie /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04HuidafwijkingenEnVoetstand /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05OntstaanDiabetischUlcus /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06DoorbloedingEAI /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07Teendruk /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08ConsultBeoordeling /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09Risicofactoren /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10Preventie /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11BehandelingDrukontlasting /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12BehandelingInfectieEnIschemie /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Sect13Casus /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Sect14Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week2Casus4DiabetischeVoetSummary
