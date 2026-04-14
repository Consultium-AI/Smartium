import {
  Activity,
  BookOpen,
  ClipboardList,
  GitBranch,
  HeartPulse,
  Layers,
  LayoutList,
  ListChecks,
  Microscope,
  Route,
  Ruler,
  Stethoscope,
  Table2,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02DeBasisVanEcgAnalyse from './Sect02DeBasisVanEcgAnalyse'
import Sect03ContextEnKwaliteit from './Sect03ContextEnKwaliteit'
import Sect04VijfStappenmethode from './Sect04VijfStappenmethode'
import Sect05RitmeEnFrequentie from './Sect05RitmeEnFrequentie'
import Sect06Geleidingstijden from './Sect06Geleidingstijden'
import Sect07DeHartas from './Sect07DeHartas'
import Sect08DePTop from './Sect08DePTop'
import Sect09HetQrsComplex from './Sect09HetQrsComplex'
import Sect10QGolven from './Sect10QGolven'
import Sect11StSegmentEnTtop from './Sect11StSegmentEnTtop'
import Sect12WandEnAfleiding from './Sect12WandEnAfleiding'
import Sect13KlinischeVoorbeelden from './Sect13KlinischeVoorbeelden'
import Sect14Samenvatting from './Sect14Samenvatting'

const Blok9Week5Casus10BasisAnalyseEcgSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'De basis van ECG-analyse', icon: Activity },
    { id: 'sect-03', title: 'Context en kwaliteit: de twee eerste pluspunten', icon: ClipboardList },
    { id: 'sect-04', title: 'De 5-stappenmethode', icon: LayoutList },
    { id: 'sect-05', title: 'Ritme en frequentie', icon: HeartPulse },
    { id: 'sect-06', title: 'Geleidingstijden', icon: Ruler },
    { id: 'sect-07', title: 'De hartas', icon: Route },
    { id: 'sect-08', title: 'De P-top: de atria', icon: Zap },
    { id: 'sect-09', title: 'Het QRS-complex: massa en geleiding', icon: GitBranch },
    { id: 'sect-10', title: 'Q-golven: littekenvorming', icon: Layers },
    { id: 'sect-11', title: 'ST-segment en T-top: ischemie en infarct', icon: Stethoscope },
    { id: 'sect-12', title: 'Welke wand hoort bij welke afleiding?', icon: Table2 },
    { id: 'sect-13', title: 'Klinische voorbeelden om te onthouden', icon: Microscope },
    { id: 'sect-14', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Basis analyse ECG"
      description="Een ECG lees je het beste stap voor stap. Het idee is dat je niet zomaar naar losse pieken kijkt, maar steeds eerst bedenkt wat je bekijkt, vanuit welke richting en wat dat betekent voor de elektrische stroom in het hart."
      caseLabel="Week 5 · Casus 10: Atriumfibrilleren"
      blokLabel="Blok 9"
      practiceLink="/oefenvragen?lme=blok9-week5-casus10-basis-analyse-ecg"
      tableOfContents={tableOfContents}
      summaryVariantToggle={{
        activeLmeId: 'blok9-week5-casus10-basis-analyse-ecg',
        variants: [
          { id: 'blok9-week5-casus10-basis-analyse-ecg', label: 'Uitgebreid' },
          { id: 'blok9-week5-casus10-basis-analyse-ecg-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02DeBasisVanEcgAnalyse /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03ContextEnKwaliteit /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04VijfStappenmethode /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05RitmeEnFrequentie /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06Geleidingstijden /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07DeHartas /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08DePTop /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09HetQrsComplex /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10QGolven /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11StSegmentEnTtop /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12WandEnAfleiding /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Sect13KlinischeVoorbeelden /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Sect14Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week5Casus10BasisAnalyseEcgSummary
