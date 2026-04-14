import {
  BookOpen,
  LayoutGrid,
  Syringe,
  Pill,
  ShieldAlert,
  HeartHandshake,
  Baby,
  Hospital,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02GroteLijnen from './Sect02GroteLijnen'
import Sect03DiabetesNaTransplantatie from './Sect03DiabetesNaTransplantatie'
import Sect04DiabetesBehandeling from './Sect04DiabetesBehandeling'
import Sect05ChronischeRejectie from './Sect05ChronischeRejectie'
import Sect06Transplantaatafalen from './Sect06Transplantaatafalen'
import Sect07Zwangerschap from './Sect07Zwangerschap'
import Sect08DialyseOpDeIC from './Sect08DialyseOpDeIC'
import Sect09Samenvatting from './Sect09Samenvatting'

const Blok9Week1Casus2NierfunctievervangendeTherapieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'De grote lijnen', icon: LayoutGrid },
    { id: 'sect-03', title: 'Diabetes mellitus na niertransplantatie', icon: Syringe },
    { id: 'sect-04', title: 'Behandeling diabetes na transplantatie', icon: Pill },
    { id: 'sect-05', title: 'Chronische rejectie', icon: ShieldAlert },
    { id: 'sect-06', title: 'Transplantaatafalen', icon: HeartHandshake },
    { id: 'sect-07', title: 'Zwangerschap na niertransplantatie', icon: Baby },
    { id: 'sect-08', title: 'Dialyse op de IC', icon: Hospital },
    { id: 'sect-09', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Nierfunctievervangende therapie"
      description="Deze verdieping gaat dieper in op een aantal belangrijke thema’s rond niertransplantatie en dialyse op de intensive care. De nadruk ligt op complicaties die je in de klinische praktijk kunt tegenkomen, vooral bij patiënten met een niertransplantaat of bij ernstig zieke patiënten op de IC."
      caseLabel="Week 1 · Casus 2: Patiënt met chronische nierschade"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok9-week1-casus2-nierfunctievervangende-therapie"
      summaryVariantToggle={{
        activeLmeId: 'blok9-week1-casus2-nierfunctievervangende-therapie',
        variants: [
          { id: 'blok9-week1-casus2-nierfunctievervangende-therapie', label: 'Uitgebreid' },
          { id: 'blok9-week1-casus2-nierfunctievervangende-therapie-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02GroteLijnen /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03DiabetesNaTransplantatie /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04DiabetesBehandeling /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05ChronischeRejectie /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06Transplantaatafalen /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07Zwangerschap /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08DialyseOpDeIC /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week1Casus2NierfunctievervangendeTherapieSummary
