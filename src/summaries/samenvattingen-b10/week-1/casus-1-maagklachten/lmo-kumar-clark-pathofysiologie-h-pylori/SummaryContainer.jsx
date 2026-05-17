import SummaryLayout from '../../components/SummaryLayout'
import { BookOpen, ClipboardList, Activity, Microscope, Shield, Stethoscope, Target, Brain } from 'lucide-react'
import Image01LeerdoelenSummary from './Image01LeerdoelenSummary'
import Image02AlgemeneBeschrijvingVanHetOnderwerpSummary from './Image02AlgemeneBeschrijvingVanHetOnderwerpSummary'
import Image03HelicobacterPyloriEnKlinischeBeeldenSummary from './Image03HelicobacterPyloriEnKlinischeBeeldenSummary'
import Image04HoeKoloniseertHelicobacterPyloriDeMaagwandSummary from './Image04HoeKoloniseertHelicobacterPyloriDeMaagwandSummary'
import Image05BeschadigingVanDeMaagwandSummary from './Image05BeschadigingVanDeMaagwandSummary'
import Image06KlinischeRelevantieSummary from './Image06KlinischeRelevantieSummary'
import Image07BelangrijkOmMeeTeNemenSummary from './Image07BelangrijkOmMeeTeNemenSummary'
import Image08SamenvattingSummary from './Image08SamenvattingSummary'

export default function SummaryContainer() {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: <ClipboardList className='w-4 h-4' /> },
    { id: 'sect-02', title: 'Algemene beschrijving van het onderwerp', icon: <BookOpen className='w-4 h-4' /> },
    { id: 'sect-03', title: 'Helicobacter pylori en klinische beelden', icon: <Activity className='w-4 h-4' /> },
    { id: 'sect-04', title: 'Hoe koloniseert Helicobacter pylori de maagwand?', icon: <Microscope className='w-4 h-4' /> },
    { id: 'sect-05', title: 'Beschadiging van de maagwand', icon: <Shield className='w-4 h-4' /> },
    { id: 'sect-06', title: 'Klinische relevantie', icon: <Stethoscope className='w-4 h-4' /> },
    { id: 'sect-07', title: 'Belangrijk om mee te nemen', icon: <Target className='w-4 h-4' /> },
    { id: 'sect-08', title: 'Samenvatting', icon: <Brain className='w-4 h-4' /> },
  ]

  return (
    <SummaryLayout
      title='Helicobacter pylori: kolonisatie, beschadiging en klinische gevolgen'
      description='Overzicht van de leerdoelen, pathofysiologie en klinische gevolgen van Helicobacter pylori in de maag.'
      caseLabel='Week 1 Casus 1 - Maagklachten LMO Kumar & Clark Pathofysiologie H.pylori'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-lmo-kumar-clark-pathofysiologie-h-pylori'
    >
      <section id='sect-01' className='scroll-mt-24 mb-12'><Image01LeerdoelenSummary standalone={false} /></section>
      <section id='sect-02' className='scroll-mt-24 mb-12'><Image02AlgemeneBeschrijvingVanHetOnderwerpSummary standalone={false} /></section>
      <section id='sect-03' className='scroll-mt-24 mb-12'><Image03HelicobacterPyloriEnKlinischeBeeldenSummary standalone={false} /></section>
      <section id='sect-04' className='scroll-mt-24 mb-12'><Image04HoeKoloniseertHelicobacterPyloriDeMaagwandSummary standalone={false} /></section>
      <section id='sect-05' className='scroll-mt-24 mb-12'><Image05BeschadigingVanDeMaagwandSummary standalone={false} /></section>
      <section id='sect-06' className='scroll-mt-24 mb-12'><Image06KlinischeRelevantieSummary standalone={false} /></section>
      <section id='sect-07' className='scroll-mt-24 mb-12'><Image07BelangrijkOmMeeTeNemenSummary standalone={false} /></section>
      <section id='sect-08' className='scroll-mt-24 mb-12'><Image08SamenvattingSummary standalone={false} /></section>
    </SummaryLayout>
  )
}
