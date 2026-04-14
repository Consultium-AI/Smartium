import {
  Activity,
  BookOpen,
  Brain,
  CircleCheck,
  Layers,
  Scale,
  ShieldAlert,
  Smartphone,
  Stethoscope,
  Sun,
  Table2,
  Target,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WaaromEenHuidkankerApp from './Sect02WaaromEenHuidkankerApp'
import Sect03DeAbcdeMethode from './Sect03DeAbcdeMethode'
import Sect04HoeGoedHerkennenMensenHuidkanker from './Sect04HoeGoedHerkennenMensenHuidkanker'
import Sect05AiMachineLearningDeepLearning from './Sect05AiMachineLearningDeepLearning'
import Sect06HoeLeertEenDeepLearningAlgoritme from './Sect06HoeLeertEenDeepLearningAlgoritme'
import Sect07TrainenEnTestenGeneraliseerbaarheid from './Sect07TrainenEnTestenGeneraliseerbaarheid'
import Sect08PrevalentieEnPositiefVoorspellendeWaarde from './Sect08PrevalentieEnPositiefVoorspellendeWaarde'
import Sect09Bias from './Sect09Bias'
import Sect10InvoeringInDePraktijk from './Sect10InvoeringInDePraktijk'
import Sect11PreventieveToepassingen from './Sect11PreventieveToepassingen'
import Sect12Samenvatting from './Sect12Samenvatting'

const Blok5Week7Casus14DermatoloogInJeBroekzakSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Waarom een huidkanker-app?', icon: Smartphone },
    { id: 'sect-03', title: 'De ABCDE-methode', icon: Target },
    { id: 'sect-04', title: 'Hoe goed herkennen mensen huidkanker?', icon: Stethoscope },
    { id: 'sect-05', title: 'AI, Machine Learning en Deep Learning', icon: Brain },
    { id: 'sect-06', title: 'Hoe leert een Deep Learning-algoritme?', icon: Layers },
    { id: 'sect-07', title: 'Trainen en testen: generaliseerbaarheid', icon: Activity },
    { id: 'sect-08', title: 'Prevalentie en positief voorspellende waarde', icon: Scale },
    { id: 'sect-09', title: 'Bias', icon: ShieldAlert },
    { id: 'sect-10', title: 'Invoering in de praktijk en regulering', icon: Table2 },
    { id: 'sect-11', title: 'Preventieve toepassingen', icon: Sun },
    { id: 'sect-12', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Dermatoloog in je broekzak"
      description="Huidkanker komt veel voor en de incidentie neemt toe. Juist daarom is vroege herkenning belangrijk, vooral bij melanoom."
      caseLabel="Week 7 · Casus 14: AI in de zorg"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week7-casus14-dermatoloog-in-je-broekzak"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week7-casus14-dermatoloog-in-je-broekzak',
      variants: [
        { id: 'blok5-week7-casus14-dermatoloog-in-je-broekzak', label: 'Uitgebreid' },
        { id: 'blok5-week7-casus14-dermatoloog-in-je-broekzak-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WaaromEenHuidkankerApp />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03DeAbcdeMethode />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04HoeGoedHerkennenMensenHuidkanker />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05AiMachineLearningDeepLearning />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06HoeLeertEenDeepLearningAlgoritme />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07TrainenEnTestenGeneraliseerbaarheid />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08PrevalentieEnPositiefVoorspellendeWaarde />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Bias />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10InvoeringInDePraktijk />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11PreventieveToepassingen />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week7Casus14DermatoloogInJeBroekzakSummary
