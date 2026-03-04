import {
  BookOpen, LayoutList, FileText, Target, Microscope, Pill,
  TestTube, BarChart3, Activity, HeartPulse, AlertTriangle, DollarSign, Layers
} from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'
import Image01IntroductieSummary from './Image01IntroductieSummary'
import Image02MenuSummary from './Image02MenuSummary'
import Image03IntroductieStofnamenSummary from './Image03IntroductieStofnamenSummary'
import Image04PrincipesFocusSummary from './Image04PrincipesFocusSummary'
import Image05EmpirieSummary from './Image05EmpirieSummary'
import Image06ToedieningswegSummary from './Image06ToedieningswegSummary'
import Image07GevoeligheidSummary from './Image07GevoeligheidSummary'
import Image08EUCASTSummary from './Image08EUCASTSummary'
import Image09FarmacokinetiekSummary from './Image09FarmacokinetiekSummary'
import Image10FarmacodynamiekSummary from './Image10FarmacodynamiekSummary'
import Image11ContraIndicatiesSummary from './Image11ContraIndicatiesSummary'
import Image12KostenSummary from './Image12KostenSummary'
import Image13RichtlijnenSummary from './Image13RichtlijnenSummary'
import Image14CombinatiesSummary from './Image14CombinatiesSummary'

const Lme3WelkAntibioticumKiesIkSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Introductie en leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Menu', icon: LayoutList },
    { id: 'sect-03', title: 'Stofnamen', icon: FileText },
    { id: 'sect-04', title: 'Focus van de infectie', icon: Target },
    { id: 'sect-05', title: 'Empirische therapie', icon: Microscope },
    { id: 'sect-06', title: 'Toedieningsweg en dosering', icon: Pill },
    { id: 'sect-07', title: 'Gevoeligheid MIC MBC', icon: TestTube },
    { id: 'sect-08', title: 'EUCAST', icon: BarChart3 },
    { id: 'sect-09', title: 'Farmacokinetiek', icon: Activity },
    { id: 'sect-10', title: 'Farmacodynamiek', icon: HeartPulse },
    { id: 'sect-11', title: 'Relatieve contra-indicaties', icon: AlertTriangle },
    { id: 'sect-12', title: 'Kosten', icon: DollarSign },
    { id: 'sect-13', title: 'Richtlijnen', icon: BookOpen },
    { id: 'sect-14', title: 'Combinaties antibiotica', icon: Layers },
  ]

  return (
    <SummaryLayout
      title="Welk antibioticum kies ik"
      description="Complete samenvatting van de module over antibioticakeuze: stofnamen, empirische therapie, farmacokinetiek, farmacodynamiek en richtlijnen."
      caseLabel="Week 5 Casus 9 LME 3"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-welk-antibioticum-kies-ik"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Image01IntroductieSummary standalone={false} />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Image02MenuSummary standalone={false} />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Image03IntroductieStofnamenSummary standalone={false} />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Image04PrincipesFocusSummary standalone={false} />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Image05EmpirieSummary standalone={false} />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Image06ToedieningswegSummary standalone={false} />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Image07GevoeligheidSummary standalone={false} />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Image08EUCASTSummary standalone={false} />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Image09FarmacokinetiekSummary standalone={false} />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Image10FarmacodynamiekSummary standalone={false} />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Image11ContraIndicatiesSummary standalone={false} />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Image12KostenSummary standalone={false} />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Image13RichtlijnenSummary standalone={false} />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Image14CombinatiesSummary standalone={false} />
      </section>
    </SummaryLayout>
  )
}

export default Lme3WelkAntibioticumKiesIkSummary
