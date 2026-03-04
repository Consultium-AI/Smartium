import {
  BookOpen, LayoutList, Globe, Layers, AlertTriangle, Activity, BarChart3,
  Flame, Shield, TrendingUp, Utensils, Pill, Droplets, BarChart2, Apple,
  Footprints, Moon, Brain, Heart, CheckCircle
} from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'
import Image01IntroductieSummary from './Image01IntroductieSummary'
import Image02MenuSummary from './Image02MenuSummary'
import Image03ExposoomSummary from './Image03ExposoomSummary'
import Image04ExposoomCategorieenSummary from './Image04ExposoomCategorieenSummary'
import Image05ExposoomOntstekingSummary from './Image05ExposoomOntstekingSummary'
import Image06LeefstijlfactorenSummary from './Image06LeefstijlfactorenSummary'
import Image07LeefstijlInvloedSummary from './Image07LeefstijlInvloedSummary'
import Image08InflammagingSummary from './Image08InflammagingSummary'
import Image09ImmunosenescenceSummary from './Image09ImmunosenescenceSummary'
import Image10TrainedImmunitySummary from './Image10TrainedImmunitySummary'
import Image11VoedingIntroSummary from './Image11VoedingIntroSummary'
import Image12WestersDieetSummary from './Image12WestersDieetSummary'
import Image13MicronutriëntenSummary from './Image13MicronutriëntenSummary'
import Image14IjzergebrekSummary from './Image14IjzergebrekSummary'
import Image15DIIIntroSummary from './Image15DIIIntroSummary'
import Image16DIIVoedingsmiddelenSummary from './Image16DIIVoedingsmiddelenSummary'
import Image17BewegingSummary from './Image17BewegingSummary'
import Image18SlaapSummary from './Image18SlaapSummary'
import Image19StressSummary from './Image19StressSummary'
import Image20CTRAMeditatieSummary from './Image20CTRAMeditatieSummary'
import Image21AfsluitingSummary from './Image21AfsluitingSummary'

const Casus11Lme1LeefstijlSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Introductie en leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Menu', icon: LayoutList },
    { id: 'sect-03', title: 'Het exposoom', icon: Globe },
    { id: 'sect-04', title: 'Drie categorieën van het exposoom', icon: Layers },
    { id: 'sect-05', title: 'Ontsteking als exposoomfactor?', icon: AlertTriangle },
    { id: 'sect-06', title: 'Leefstijlfactoren en leefstijlziekten', icon: Activity },
    { id: 'sect-07', title: 'Invloed op het immuunsysteem', icon: BarChart3 },
    { id: 'sect-08', title: 'Inflammaging en accelerated aging', icon: Flame },
    { id: 'sect-09', title: 'Immunosenescence en epigenetica', icon: Shield },
    { id: 'sect-10', title: 'Trained immunity en tolerantie', icon: TrendingUp },
    { id: 'sect-11', title: 'Voeding en immuunsysteem – introductie', icon: Utensils },
    { id: 'sect-12', title: 'Westers dieet', icon: Utensils },
    { id: 'sect-13', title: 'Micronutriënten', icon: Pill },
    { id: 'sect-14', title: 'Ijzergebrek en neutrofielen', icon: Droplets },
    { id: 'sect-15', title: 'Dietary Inflammatory Index', icon: BarChart3 },
    { id: 'sect-16', title: 'DII – Pro- en anti-inflammatoire voeding', icon: Apple },
    { id: 'sect-17', title: 'Beweging en immuunsysteem', icon: Activity },
    { id: 'sect-18', title: 'Slaap en circadiaan ritme', icon: Moon },
    { id: 'sect-19', title: 'Stress, ontspanning en verbinding', icon: Brain },
    { id: 'sect-20', title: 'CTRA, stress en meditatie', icon: Heart },
    { id: 'sect-21', title: 'Afsluiting en leefstijladviezen', icon: CheckCircle },
  ]

  return (
    <SummaryLayout
      title="Leefstijl en immuunsysteem"
      description="Complete samenvatting van de module over de invloed van leefstijl op het immuunsysteem."
      caseLabel="Week 6 Casus 11 Primaire immuundeficiënties LME 1"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Image01IntroductieSummary standalone={false} /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Image02MenuSummary standalone={false} /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Image03ExposoomSummary standalone={false} /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Image04ExposoomCategorieenSummary standalone={false} /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Image05ExposoomOntstekingSummary standalone={false} /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Image06LeefstijlfactorenSummary standalone={false} /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Image07LeefstijlInvloedSummary standalone={false} /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Image08InflammagingSummary standalone={false} /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Image09ImmunosenescenceSummary standalone={false} /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Image10TrainedImmunitySummary standalone={false} /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Image11VoedingIntroSummary standalone={false} /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Image12WestersDieetSummary standalone={false} /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Image13MicronutriëntenSummary standalone={false} /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Image14IjzergebrekSummary standalone={false} /></section>
      <section id="sect-15" className="scroll-mt-24 mb-12"><Image15DIIIntroSummary standalone={false} /></section>
      <section id="sect-16" className="scroll-mt-24 mb-12"><Image16DIIVoedingsmiddelenSummary standalone={false} /></section>
      <section id="sect-17" className="scroll-mt-24 mb-12"><Image17BewegingSummary standalone={false} /></section>
      <section id="sect-18" className="scroll-mt-24 mb-12"><Image18SlaapSummary standalone={false} /></section>
      <section id="sect-19" className="scroll-mt-24 mb-12"><Image19StressSummary standalone={false} /></section>
      <section id="sect-20" className="scroll-mt-24 mb-12"><Image20CTRAMeditatieSummary standalone={false} /></section>
      <section id="sect-21" className="scroll-mt-24 mb-12"><Image21AfsluitingSummary standalone={false} /></section>
    </SummaryLayout>
  )
}

export default Casus11Lme1LeefstijlSummary
