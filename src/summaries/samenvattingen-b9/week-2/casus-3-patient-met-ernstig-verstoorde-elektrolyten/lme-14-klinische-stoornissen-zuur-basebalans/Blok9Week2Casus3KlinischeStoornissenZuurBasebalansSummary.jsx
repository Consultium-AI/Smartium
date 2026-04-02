import {
  BookOpen,
  LayoutTemplate,
  Wind,
  Activity,
  Sigma,
  ListTree,
  Droplets,
  Lightbulb,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02AlgemeneInleiding from './Sect02AlgemeneInleiding'
import Sect03RespiratoireAcidose from './Sect03RespiratoireAcidose'
import Sect04RespiratoireAlkalose from './Sect04RespiratoireAlkalose'
import Sect05MetaboleAcidoseAnionGap from './Sect05MetaboleAcidoseAnionGap'
import Sect06MetaboleAcidoseOorzaken from './Sect06MetaboleAcidoseOorzaken'
import Sect07MetaboleAlkalose from './Sect07MetaboleAlkalose'
import Sect08PraktischeKernpunten from './Sect08PraktischeKernpunten'
import Sect09Samenvatting from './Sect09Samenvatting'

const Blok9Week2Casus3KlinischeStoornissenZuurBasebalansSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Algemene inleiding', icon: LayoutTemplate },
    { id: 'sect-03', title: 'Respiratoire acidose', icon: Wind },
    { id: 'sect-04', title: 'Respiratoire alkalose', icon: Activity },
    { id: 'sect-05', title: 'Metabole acidose', icon: Sigma },
    { id: 'sect-06', title: 'Oorzaken van metabole acidose', icon: ListTree },
    { id: 'sect-07', title: 'Metabole alkalose', icon: Droplets },
    { id: 'sect-08', title: 'Praktische kernpunten om te onthouden', icon: Lightbulb },
    { id: 'sect-09', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Klinische stoornissen van de zuur-basebalans"
      description="De zuur-basebalans draait om het evenwicht tussen zuur en base in het lichaam. Daarbij spelen vooral de longen en de nieren een grote rol. De longen regelen de hoeveelheid CO2, en CO2 hangt direct samen met de zuurgraad. De nieren regelen vooral bicarbonaat (HCO3-) en de uitscheiding van zuur."
      caseLabel="Week 2 · Casus 3: Patiënt met ernstig verstoorde elektrolyten"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok9-week2-casus3-klinische-stoornissen-zuur-basebalans"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02AlgemeneInleiding /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03RespiratoireAcidose /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04RespiratoireAlkalose /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05MetaboleAcidoseAnionGap /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06MetaboleAcidoseOorzaken /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07MetaboleAlkalose /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08PraktischeKernpunten /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week2Casus3KlinischeStoornissenZuurBasebalansSummary
