import {
  ClipboardList,
  Table2,
  Scissors,
  Box,
  History,
  Pill,
  Gauge,
  AlertTriangle,
  Bug,
  Stethoscope,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01VoorbereidingEnScreening from '../../../../samenvattingen-b9/week-1/casus-2-patient-met-chronische-nierschade/lme-7-niertransplantatie/Sect01VoorbereidingEnScreening'
import Sect02PretransplantatieOnderdelen from '../../../../samenvattingen-b9/week-1/casus-2-patient-met-chronische-nierschade/lme-7-niertransplantatie/Sect02PretransplantatieOnderdelen'
import Sect03ChirurgischeBeoordeling from '../../../../samenvattingen-b9/week-1/casus-2-patient-met-chronische-nierschade/lme-7-niertransplantatie/Sect03ChirurgischeBeoordeling'
import Sect04BeschikbareRuimte from '../../../../samenvattingen-b9/week-1/casus-2-patient-met-chronische-nierschade/lme-7-niertransplantatie/Sect04BeschikbareRuimte'
import Sect05ImmunosuppressivaOntwikkeling from '../../../../samenvattingen-b9/week-1/casus-2-patient-met-chronische-nierschade/lme-7-niertransplantatie/Sect05ImmunosuppressivaOntwikkeling'
import Sect06TacrolimusFormuleringen from '../../../../samenvattingen-b9/week-1/casus-2-patient-met-chronische-nierschade/lme-7-niertransplantatie/Sect06TacrolimusFormuleringen'
import Sect07TdmInteracties from '../../../../samenvattingen-b9/week-1/casus-2-patient-met-chronische-nierschade/lme-7-niertransplantatie/Sect07TdmInteracties'
import Sect08Nefrotoxiciteit from '../../../../samenvattingen-b9/week-1/casus-2-patient-met-chronische-nierschade/lme-7-niertransplantatie/Sect08Nefrotoxiciteit'
import Sect09CmvProfylaxe from '../../../../samenvattingen-b9/week-1/casus-2-patient-met-chronische-nierschade/lme-7-niertransplantatie/Sect09CmvProfylaxe'
import Sect10CmvKliniekBehandeling from '../../../../samenvattingen-b9/week-1/casus-2-patient-met-chronische-nierschade/lme-7-niertransplantatie/Sect10CmvKliniekBehandeling'
import Sect11Samengevat from '../../../../samenvattingen-b9/week-1/casus-2-patient-met-chronische-nierschade/lme-7-niertransplantatie/Sect11Samengevat'

const Blok9Week1Casus2NiertransplantatieMiniSummary = () => {
  const tableOfContents = [
    { id: 'mini-sect-01', title: 'Voorbereiding en screening', icon: ClipboardList },
    { id: 'mini-sect-02', title: 'Pretransplantatiescreening', icon: Table2 },
    { id: 'mini-sect-03', title: 'Chirurgische beoordeling', icon: Scissors },
    { id: 'mini-sect-04', title: 'Beschikbare ruimte', icon: Box },
    { id: 'mini-sect-05', title: 'Ontwikkeling van immunosuppressiva', icon: History },
    { id: 'mini-sect-06', title: 'Tacrolimus: formuleringen', icon: Pill },
    { id: 'mini-sect-07', title: 'Therapeutic drug monitoring en interacties', icon: Gauge },
    { id: 'mini-sect-08', title: 'Nefrotoxiciteit', icon: AlertTriangle },
    { id: 'mini-sect-09', title: 'CMV en profylaxe', icon: Bug },
    { id: 'mini-sect-10', title: 'CMV: kliniek en behandeling', icon: Stethoscope },
    { id: 'mini-sect-11', title: 'Samengevat', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Niertransplantatie"
      description="Niertransplantatie vraagt om een zorgvuldige voorbereiding, omdat niet alleen een donororgaan nodig is, maar ook een ontvanger die de operatie kan ondergaan en voldoende is beoordeeld. Patiënten met nierfalen zijn kwetsbaar, ולכן start de screening bij voorkeur al ongeveer één jaar voordat de eGFR onder 15 ml/min komt. De screening gebeurt meestal multidisciplinair, met onder meer de internist-nefroloog en chirurg. Sommige onderdelen zijn standaard, maar met name de cardiovasculaire screening is internationaal onderwerp van discussie."
      caseLabel="Week 1 · Casus 2: Patiënt met chronische nierschade"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      summaryVariantToggle={{
        activeLmeId: 'blok9-week1-casus2-niertransplantatie-mini',
        variants: [
          { id: 'blok9-week1-casus2-niertransplantatie', label: 'Uitgebreid' },
          { id: 'blok9-week1-casus2-niertransplantatie-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="mini-sect-01" className="scroll-mt-24 mb-12"><Sect01VoorbereidingEnScreening /></section>
      <section id="mini-sect-02" className="scroll-mt-24 mb-12"><Sect02PretransplantatieOnderdelen /></section>
      <section id="mini-sect-03" className="scroll-mt-24 mb-12"><Sect03ChirurgischeBeoordeling /></section>
      <section id="mini-sect-04" className="scroll-mt-24 mb-12"><Sect04BeschikbareRuimte /></section>
      <section id="mini-sect-05" className="scroll-mt-24 mb-12"><Sect05ImmunosuppressivaOntwikkeling /></section>
      <section id="mini-sect-06" className="scroll-mt-24 mb-12"><Sect06TacrolimusFormuleringen /></section>
      <section id="mini-sect-07" className="scroll-mt-24 mb-12"><Sect07TdmInteracties /></section>
      <section id="mini-sect-08" className="scroll-mt-24 mb-12"><Sect08Nefrotoxiciteit /></section>
      <section id="mini-sect-09" className="scroll-mt-24 mb-12"><Sect09CmvProfylaxe /></section>
      <section id="mini-sect-10" className="scroll-mt-24 mb-12"><Sect10CmvKliniekBehandeling /></section>
      <section id="mini-sect-11" className="scroll-mt-24 mb-12"><Sect11Samengevat /></section>
    </SummaryLayout>
  )
}

export default Blok9Week1Casus2NiertransplantatieMiniSummary
