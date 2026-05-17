import SummaryLayout from '../../components/SummaryLayout'
import { BookOpen, Layers, Activity, HeartPulse, AlertTriangle, ClipboardList, Beaker, Shield, Target } from 'lucide-react'
import Image01LeerdoelenSummary from './Image01LeerdoelenSummary'
import Image02RefluxBijKinderenWatBedoelenWeErmeeSummary from './Image02RefluxBijKinderenWatBedoelenWeErmeeSummary'
import Image03WaaromIsRefluxBijZuigelingenZoVaakNormaalSummary from './Image03WaaromIsRefluxBijZuigelingenZoVaakNormaalSummary'
import Image04WanneerDenkJeAanRefluxziekteSummary from './Image04WanneerDenkJeAanRefluxziekteSummary'
import Image05RedFlagsWanneerMoetJeVerderDenkenDanRefluxSummary from './Image05RedFlagsWanneerMoetJeVerderDenkenDanRefluxSummary'
import Image06EersteBeoordelingEnBeleidSummary from './Image06EersteBeoordelingEnBeleidSummary'
import Image07WatDoeJeAlsJeDenktAanEenOnderliggendeOorzaakSummary from './Image07WatDoeJeAlsJeDenktAanEenOnderliggendeOorzaakSummary'
import Image08Casus1GezondeBabyMetNormaleRefluxSummary from './Image08Casus1GezondeBabyMetNormaleRefluxSummary'
import Image09Casus2BabyMetRefluxklachtenEnOnvoldoendeGroeiSummary from './Image09Casus2BabyMetRefluxklachtenEnOnvoldoendeGroeiSummary'
import Image10SamenvattingSummary from './Image10SamenvattingSummary'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Reflux bij kinderen: wat bedoelen we ermee?', icon: Layers },
  { id: 'sect-03', title: 'Waarom is reflux bij zuigelingen zo vaak normaal?', icon: Activity },
  { id: 'sect-04', title: 'Wanneer denk je aan refluxziekte?', icon: HeartPulse },
  { id: 'sect-05', title: 'Red flags: wanneer moet je verder denken dan reflux?', icon: AlertTriangle },
  { id: 'sect-06', title: 'Eerste beoordeling en beleid', icon: ClipboardList },
  { id: 'sect-07', title: 'Wat doe je als je denkt aan een onderliggende oorzaak?', icon: Beaker },
  { id: 'sect-08', title: 'Casus 1: gezonde baby met normale reflux', icon: HeartPulse },
  { id: 'sect-09', title: 'Casus 2: baby met refluxklachten en onvoldoende groei', icon: Shield },
  { id: 'sect-10', title: 'Samenvatting', icon: Target },
]

export default function RefluxBijKinderenSummaryContainer() {
  return (
    <SummaryLayout
      title='Reflux bij kinderen'
      description='Normale reflux, refluxziekte, red flags en eerste beleid bij kinderen.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Reflux bij kinderen'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-reflux-bij-kinderen'
    >
      <section id='sect-01' className='scroll-mt-24 mb-12'>
        <Image01LeerdoelenSummary standalone={false} />
      </section>
      <section id='sect-02' className='scroll-mt-24 mb-12'>
        <Image02RefluxBijKinderenWatBedoelenWeErmeeSummary standalone={false} />
      </section>
      <section id='sect-03' className='scroll-mt-24 mb-12'>
        <Image03WaaromIsRefluxBijZuigelingenZoVaakNormaalSummary standalone={false} />
      </section>
      <section id='sect-04' className='scroll-mt-24 mb-12'>
        <Image04WanneerDenkJeAanRefluxziekteSummary standalone={false} />
      </section>
      <section id='sect-05' className='scroll-mt-24 mb-12'>
        <Image05RedFlagsWanneerMoetJeVerderDenkenDanRefluxSummary standalone={false} />
      </section>
      <section id='sect-06' className='scroll-mt-24 mb-12'>
        <Image06EersteBeoordelingEnBeleidSummary standalone={false} />
      </section>
      <section id='sect-07' className='scroll-mt-24 mb-12'>
        <Image07WatDoeJeAlsJeDenktAanEenOnderliggendeOorzaakSummary standalone={false} />
      </section>
      <section id='sect-08' className='scroll-mt-24 mb-12'>
        <Image08Casus1GezondeBabyMetNormaleRefluxSummary standalone={false} />
      </section>
      <section id='sect-09' className='scroll-mt-24 mb-12'>
        <Image09Casus2BabyMetRefluxklachtenEnOnvoldoendeGroeiSummary standalone={false} />
      </section>
      <section id='sect-10' className='scroll-mt-24 mb-12'>
        <Image10SamenvattingSummary standalone={false} />
      </section>
    </SummaryLayout>
  )
}
