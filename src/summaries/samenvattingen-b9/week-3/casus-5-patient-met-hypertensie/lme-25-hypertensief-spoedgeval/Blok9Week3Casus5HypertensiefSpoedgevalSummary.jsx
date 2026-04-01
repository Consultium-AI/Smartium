import {
  BookOpen,
  Info,
  Gauge,
  Dna,
  ClipboardList,
  ListPlus,
  Stethoscope,
  Syringe,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02Inleiding from './Sect02Inleiding'
import Sect03DefinitieEnFrequentie from './Sect03DefinitieEnFrequentie'
import Sect04Pathofysiologie from './Sect04Pathofysiologie'
import Sect05Anamnese from './Sect05Anamnese'
import Sect06VerderBelangrijkInDeAnamnese from './Sect06VerderBelangrijkInDeAnamnese'
import Sect07LichamelijkOnderzoek from './Sect07LichamelijkOnderzoek'
import Sect08Behandeling from './Sect08Behandeling'
import Sect09Samenvatting from './Sect09Samenvatting'

const Blok9Week3Casus5HypertensiefSpoedgevalSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Inleiding', icon: Info },
    { id: 'sect-03', title: 'Definitie en frequentie', icon: Gauge },
    { id: 'sect-04', title: 'Pathofysiologie', icon: Dna },
    { id: 'sect-05', title: 'Anamnese: waar moet je op letten?', icon: ClipboardList },
    { id: 'sect-06', title: 'Verder belangrijk in de anamnese', icon: ListPlus },
    { id: 'sect-07', title: 'Lichamelijk onderzoek en aanvullend onderzoek', icon: Stethoscope },
    { id: 'sect-08', title: 'Behandeling', icon: Syringe },
    { id: 'sect-09', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Hypertensief spoedgeval"
      description="Een hypertensief spoedgeval is een ernstige situatie waarbij een plotselinge, sterke bloeddrukstijging leidt tot acute schade aan eindorganen. Het gaat dus niet alleen om een hoge bloeddruk, maar vooral om het feit dat organen zoals hersenen, hart, nieren, bloedvaten of ogen acuut beschadigd raken. Snelle herkenning is belangrijk, omdat tijdige behandeling irreversibele schade en mortaliteit kan verminderen."
      caseLabel="Week 3 · Casus 5: Patiënt met hypertensie"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02Inleiding /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03DefinitieEnFrequentie /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04Pathofysiologie /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05Anamnese /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06VerderBelangrijkInDeAnamnese /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07LichamelijkOnderzoek /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08Behandeling /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week3Casus5HypertensiefSpoedgevalSummary
