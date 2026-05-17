import SummaryLayout from '../../components/SummaryLayout'
import { BookOpen, HeartPulse, Layers, Target, ClipboardList, Stethoscope, AlertTriangle, Shield } from 'lucide-react'
import Image01LeerdoelenSummary from './Image01LeerdoelenSummary'
import Image02RefluxklachtenVanOnschuldigTotRelevantSummary from './Image02RefluxklachtenVanOnschuldigTotRelevantSummary'
import Image03DeBravoFactorenLeefstijlAlsBasisSummary from './Image03DeBravoFactorenLeefstijlAlsBasisSummary'
import Image04OvergewichtBmiEnRefluxSummary from './Image04OvergewichtBmiEnRefluxSummary'
import Image05VoedingBijRefluxGewoonGezondEtenVolgensDeSchijfVanVijfSummary from './Image05VoedingBijRefluxGewoonGezondEtenVolgensDeSchijfVanVijfSummary'
import Image06RefluxEnZwangerschapDrukInDeBuikTeltMeeSummary from './Image06RefluxEnZwangerschapDrukInDeBuikTeltMeeSummary'
import Image07DiabetischeGastropareseVertraagdeMaagontledigingSummary from './Image07DiabetischeGastropareseVertraagdeMaagontledigingSummary'
import Image08ErnstVanDeDiabetischeOntregelingSummary from './Image08ErnstVanDeDiabetischeOntregelingSummary'
import Image09VoedingsEnLeefstijladviezenBijGastropareseSummary from './Image09VoedingsEnLeefstijladviezenBijGastropareseSummary'
import Image10PraktischeAanpakEnBeleidSummary from './Image10PraktischeAanpakEnBeleidSummary'
import Image11SamenvattingSummary from './Image11SamenvattingSummary'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: <BookOpen className='w-4 h-4' /> },
  { id: 'sect-02', title: 'Refluxklachten: van onschuldig tot relevant', icon: <HeartPulse className='w-4 h-4' /> },
  { id: 'sect-03', title: 'De BRAVO-factoren: leefstijl als basis', icon: <Layers className='w-4 h-4' /> },
  { id: 'sect-04', title: 'Overgewicht, BMI en reflux', icon: <Target className='w-4 h-4' /> },
  { id: 'sect-05', title: 'Voeding bij reflux: gewoon gezond eten volgens de Schijf van Vijf', icon: <ClipboardList className='w-4 h-4' /> },
  { id: 'sect-06', title: 'Reflux en zwangerschap: druk in de buik telt mee', icon: <HeartPulse className='w-4 h-4' /> },
  { id: 'sect-07', title: 'Diabetische gastroparese: vertraagde maagontlediging', icon: <Stethoscope className='w-4 h-4' /> },
  { id: 'sect-08', title: 'Ernst van de diabetische ontregeling', icon: <AlertTriangle className='w-4 h-4' /> },
  { id: 'sect-09', title: 'Voedings- en leefstijladviezen bij gastroparese', icon: <ClipboardList className='w-4 h-4' /> },
  { id: 'sect-10', title: 'Praktische aanpak en beleid', icon: <Shield className='w-4 h-4' /> },
  { id: 'sect-11', title: 'Samenvatting', icon: <BookOpen className='w-4 h-4' /> },
]

export default function SummaryContainer() {
  return (
    <SummaryLayout
      title='Leefstijl bij reflux'
      description='Leefstijladviezen bij reflux met aandacht voor BRAVO, BMI, voeding, gastroparese en ontregeling.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Leefstijl bij reflux'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-leefstijl-bij-reflux'
    >
      <section id='sect-01' className='scroll-mt-24 mb-12'>
        <Image01LeerdoelenSummary standalone={false} />
      </section>
      <section id='sect-02' className='scroll-mt-24 mb-12'>
        <Image02RefluxklachtenVanOnschuldigTotRelevantSummary standalone={false} />
      </section>
      <section id='sect-03' className='scroll-mt-24 mb-12'>
        <Image03DeBravoFactorenLeefstijlAlsBasisSummary standalone={false} />
      </section>
      <section id='sect-04' className='scroll-mt-24 mb-12'>
        <Image04OvergewichtBmiEnRefluxSummary standalone={false} />
      </section>
      <section id='sect-05' className='scroll-mt-24 mb-12'>
        <Image05VoedingBijRefluxGewoonGezondEtenVolgensDeSchijfVanVijfSummary standalone={false} />
      </section>
      <section id='sect-06' className='scroll-mt-24 mb-12'>
        <Image06RefluxEnZwangerschapDrukInDeBuikTeltMeeSummary standalone={false} />
      </section>
      <section id='sect-07' className='scroll-mt-24 mb-12'>
        <Image07DiabetischeGastropareseVertraagdeMaagontledigingSummary standalone={false} />
      </section>
      <section id='sect-08' className='scroll-mt-24 mb-12'>
        <Image08ErnstVanDeDiabetischeOntregelingSummary standalone={false} />
      </section>
      <section id='sect-09' className='scroll-mt-24 mb-12'>
        <Image09VoedingsEnLeefstijladviezenBijGastropareseSummary standalone={false} />
      </section>
      <section id='sect-10' className='scroll-mt-24 mb-12'>
        <Image10PraktischeAanpakEnBeleidSummary standalone={false} />
      </section>
      <section id='sect-11' className='scroll-mt-24 mb-12'>
        <Image11SamenvattingSummary standalone={false} />
      </section>
    </SummaryLayout>
  )
}
