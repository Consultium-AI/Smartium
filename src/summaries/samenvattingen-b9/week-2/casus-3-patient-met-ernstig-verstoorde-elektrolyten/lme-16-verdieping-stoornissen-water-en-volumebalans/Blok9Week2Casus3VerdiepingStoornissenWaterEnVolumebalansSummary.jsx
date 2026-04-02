import {
  BookOpen,
  Lightbulb,
  Droplets,
  Gauge,
  AlertTriangle,
  MessageCircleWarning,
  Coffee,
  ListOrdered,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02Inleiding from './Sect02Inleiding'
import Sect03BasisWaterEnVolumebalans from './Sect03BasisWaterEnVolumebalans'
import Sect04MaximaleWateruitscheiding from './Sect04MaximaleWateruitscheiding'
import Sect05Watervergiftiging from './Sect05Watervergiftiging'
import Sect06TweeLiterAdvies from './Sect06TweeLiterAdvies'
import Sect07TeaAndToast from './Sect07TeaAndToast'
import Sect08Kernpunten from './Sect08Kernpunten'
import Sect09Samenvatting from './Sect09Samenvatting'

const Blok9Week2Casus3VerdiepingStoornissenWaterEnVolumebalansSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Inleiding: waarom is dit onderwerp belangrijk?', icon: Lightbulb },
    { id: 'sect-03', title: 'De basis van water- en volumebalans', icon: Droplets },
    { id: 'sect-04', title: 'Maximale wateruitscheiding: hoeveel kan de nier eigenlijk kwijt?', icon: Gauge },
    { id: 'sect-05', title: 'Watervergiftiging: wanneer water te snel wordt gedronken', icon: AlertTriangle },
    { id: 'sect-06', title: 'Waarom is “2 liter water per dag” niet altijd goed advies?', icon: MessageCircleWarning },
    { id: 'sect-07', title: 'Tea-and-toast-hyponatriëmie', icon: Coffee },
    { id: 'sect-08', title: 'Wat moet je hier vooral van onthouden?', icon: ListOrdered },
    { id: 'sect-09', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Stoornissen van de water- en volumebalans - verdieping"
      description="Het lichaam moet de hoeveelheid water in balans houden met de hoeveelheid opgeloste deeltjes, zoals natrium, glucose, ureum en andere osmolen. De nieren spelen daarin een centrale rol. Ze kunnen water uitscheiden, maar dat kan niet onbeperkt."
      caseLabel="Week 2 · Casus 3: Patiënt met ernstig verstoorde elektrolyten"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok9-week2-casus3-stoornissen-water-en-volumebalans-verdieping"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02Inleiding /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03BasisWaterEnVolumebalans /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04MaximaleWateruitscheiding /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05Watervergiftiging /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06TweeLiterAdvies /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07TeaAndToast /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08Kernpunten /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week2Casus3VerdiepingStoornissenWaterEnVolumebalansSummary
