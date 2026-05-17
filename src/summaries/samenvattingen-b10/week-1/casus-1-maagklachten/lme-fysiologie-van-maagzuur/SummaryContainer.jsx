import SummaryLayout from '../../components/SummaryLayout'
import { BookOpen, FlaskConical, Layers, Activity, Brain, GitCompare, Shield, AlertTriangle, Pill, ClipboardList } from 'lucide-react'
import Image01LeerdoelenSummary from './Image01LeerdoelenSummary'
import Image02InleidingSummary from './Image02InleidingSummary'
import Image03FunctioneleAnatomieVanDeMaagSummary from './Image03FunctioneleAnatomieVanDeMaagSummary'
import Image04FunctieVanHetMaagzuurSummary from './Image04FunctieVanHetMaagzuurSummary'
import Image05SecretieVanMaagzuurDoorDeParietaleCelSummary from './Image05SecretieVanMaagzuurDoorDeParietaleCelSummary'
import Image06RegulatieVanDeMaagzuursecretieSummary from './Image06RegulatieVanDeMaagzuursecretieSummary'
import Image07VergelijkingVanMaagzuurremmersSummary from './Image07VergelijkingVanMaagzuurremmersSummary'
import Image08BeschermingVanDeMaagwandTegenMaagzuurSummary from './Image08BeschermingVanDeMaagwandTegenMaagzuurSummary'
import Image09HelicobacterPyloriEnMaagzweerSummary from './Image09HelicobacterPyloriEnMaagzweerSummary'
import Image10LangdurigGebruikVanPPIsummary from './Image10LangdurigGebruikVanPPIsummary'
import Image11SamenvattingSummary from './Image11SamenvattingSummary'

export default function Week1Casus1MaagklachtenFysiologieVanMaagzuurSummaryContainer() {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: <BookOpen className={'w-4 h-4'} /> },
    { id: 'sect-02', title: 'Inleiding', icon: <BookOpen className={'w-4 h-4'} /> },
    { id: 'sect-03', title: 'Functionele anatomie van de maag', icon: <Layers className={'w-4 h-4'} /> },
    { id: 'sect-04', title: 'Functie van het maagzuur', icon: <Activity className={'w-4 h-4'} /> },
    { id: 'sect-05', title: 'Secretie van maagzuur door de pariètale cel', icon: <FlaskConical className={'w-4 h-4'} /> },
    { id: 'sect-06', title: 'Regulatie van de maagzuursecretie', icon: <Brain className={'w-4 h-4'} /> },
    { id: 'sect-07', title: 'Vergelijking van maagzuurremmers', icon: <GitCompare className={'w-4 h-4'} /> },
    { id: 'sect-08', title: 'Bescherming van de maagwand tegen maagzuur', icon: <Shield className={'w-4 h-4'} /> },
    { id: 'sect-09', title: 'Helicobacter pylori en maagzweer', icon: <AlertTriangle className={'w-4 h-4'} /> },
    { id: 'sect-10', title: 'Langdurig gebruik van PPI’s', icon: <Pill className={'w-4 h-4'} /> },
    { id: 'sect-11', title: 'Samenvatting', icon: <ClipboardList className={'w-4 h-4'} /> },
  ]

  return (
    <SummaryLayout
      title={'Fysiologie van maagzuur'}
      description={'Alle kernpunten over maagzuurproductie, regulatie, bescherming en behandeling in een rustige studievriendelijke opmaak.'}
      caseLabel={'Week 1 Casus 1 - Maagklachten LME Fysiologie van maagzuur'}
      tableOfContents={tableOfContents}
      practiceLink={'/oefenvragen?lme=blok10-week-1-casus-1-maagklachten-fysiologie-van-maagzuur'}
    >
      <section id={'sect-01'} className={'scroll-mt-24 mb-12'}><Image01LeerdoelenSummary standalone={false} /></section>
      <section id={'sect-02'} className={'scroll-mt-24 mb-12'}><Image02InleidingSummary standalone={false} /></section>
      <section id={'sect-03'} className={'scroll-mt-24 mb-12'}><Image03FunctioneleAnatomieVanDeMaagSummary standalone={false} /></section>
      <section id={'sect-04'} className={'scroll-mt-24 mb-12'}><Image04FunctieVanHetMaagzuurSummary standalone={false} /></section>
      <section id={'sect-05'} className={'scroll-mt-24 mb-12'}><Image05SecretieVanMaagzuurDoorDeParietaleCelSummary standalone={false} /></section>
      <section id={'sect-06'} className={'scroll-mt-24 mb-12'}><Image06RegulatieVanDeMaagzuursecretieSummary standalone={false} /></section>
      <section id={'sect-07'} className={'scroll-mt-24 mb-12'}><Image07VergelijkingVanMaagzuurremmersSummary standalone={false} /></section>
      <section id={'sect-08'} className={'scroll-mt-24 mb-12'}><Image08BeschermingVanDeMaagwandTegenMaagzuurSummary standalone={false} /></section>
      <section id={'sect-09'} className={'scroll-mt-24 mb-12'}><Image09HelicobacterPyloriEnMaagzweerSummary standalone={false} /></section>
      <section id={'sect-10'} className={'scroll-mt-24 mb-12'}><Image10LangdurigGebruikVanPPIsummary standalone={false} /></section>
      <section id={'sect-11'} className={'scroll-mt-24 mb-12'}><Image11SamenvattingSummary standalone={false} /></section>
    </SummaryLayout>
  )
}
