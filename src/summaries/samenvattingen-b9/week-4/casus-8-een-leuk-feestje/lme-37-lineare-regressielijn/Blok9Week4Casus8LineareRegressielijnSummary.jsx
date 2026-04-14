import {
  BookOpen,
  LineChart,
  GitCompare,
  Table2,
  Link2,
  FlaskConical,
  Percent,
  AlertTriangle,
  Ruler,
  Sigma,
  CircleDot,
  Gauge,
  ListChecks,
  Layers,
  ClipboardList,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsLineaireRegressie from './Sect02WatIsLineaireRegressie'
import Sect03VanCorrelatieNaarRegressie from './Sect03VanCorrelatieNaarRegressie'
import Sect04CorrelatieIsGeenCausaliteit from './Sect04CorrelatieIsGeenCausaliteit'
import Sect05HypothesenToetsenMetRegressie from './Sect05HypothesenToetsenMetRegressie'
import Sect06DePwaarde from './Sect06DePwaarde'
import Sect07TypeIEnTypeIIFouten from './Sect07TypeIEnTypeIIFouten'
import Sect08HoeSchatJeEenRegressielijn from './Sect08HoeSchatJeEenRegressielijn'
import Sect09InterpretatieB0EnB1 from './Sect09InterpretatieB0EnB1'
import Sect10LineaireRegressieDichotomeVariabele from './Sect10LineaireRegressieDichotomeVariabele'
import Sect11Rsquared from './Sect11Rsquared'
import Sect12AannamesVanLineaireRegressie from './Sect12AannamesVanLineaireRegressie'
import Sect13WelkeRegressieWanneer from './Sect13WelkeRegressieWanneer'
import Sect14SamenvattingVanDeKern from './Sect14SamenvattingVanDeKern'
import Sect15Samenvatting from './Sect15Samenvatting'

const Blok9Week4Casus8LineareRegressielijnSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is lineaire regressie?', icon: LineChart },
    { id: 'sect-03', title: 'Van correlatie naar regressie', icon: GitCompare },
    { id: 'sect-04', title: 'Correlatie is geen causaliteit', icon: Link2 },
    { id: 'sect-05', title: 'Hypothesen toetsen met regressie', icon: FlaskConical },
    { id: 'sect-06', title: 'De p-waarde', icon: Percent },
    { id: 'sect-07', title: 'Type I- en type II-fouten', icon: AlertTriangle },
    { id: 'sect-08', title: 'Hoe schat je een regressielijn?', icon: Ruler },
    { id: 'sect-09', title: 'Interpretatie van b0 en b1', icon: Sigma },
    { id: 'sect-10', title: 'Lineaire regressie bij een dichotome variabele', icon: CircleDot },
    { id: 'sect-11', title: 'R-squared', icon: Gauge },
    { id: 'sect-12', title: 'Aannames van lineaire regressie', icon: ListChecks },
    { id: 'sect-13', title: 'Welke regressie gebruik je wanneer?', icon: Table2 },
    { id: 'sect-14', title: 'Samenvatting van de kern', icon: Layers },
    { id: 'sect-15', title: 'Samenvatting', icon: ClipboardList },
  ]

  return (
    <SummaryLayout
      title="Lineare regressielijn"
      description="Lineaire regressie gebruik je om de relatie tussen twee variabelen te beschrijven en om een uitkomst te voorspellen."
      caseLabel="Week 4 · Casus 8: Een leuk feestje"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok9-week4-casus8-lineare-regressielijn"
      summaryVariantToggle={{
        activeLmeId: 'blok9-week4-casus8-lineare-regressielijn',
        variants: [
          { id: 'blok9-week4-casus8-lineare-regressielijn', label: 'Uitgebreid' },
          { id: 'blok9-week4-casus8-lineare-regressielijn-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02WatIsLineaireRegressie /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03VanCorrelatieNaarRegressie /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04CorrelatieIsGeenCausaliteit /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05HypothesenToetsenMetRegressie /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06DePwaarde /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07TypeIEnTypeIIFouten /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08HoeSchatJeEenRegressielijn /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09InterpretatieB0EnB1 /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10LineaireRegressieDichotomeVariabele /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11Rsquared /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12AannamesVanLineaireRegressie /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Sect13WelkeRegressieWanneer /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Sect14SamenvattingVanDeKern /></section>
      <section id="sect-15" className="scroll-mt-24 mb-12"><Sect15Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week4Casus8LineareRegressielijnSummary
