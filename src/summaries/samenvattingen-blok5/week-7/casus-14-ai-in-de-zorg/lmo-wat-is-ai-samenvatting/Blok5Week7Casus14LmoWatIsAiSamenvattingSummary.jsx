import {
  BookOpen,
  Building2,
  CircleCheck,
  HeartPulse,
  Image,
  Layers,
  LayoutList,
  MessageSquare,
  Sparkles,
  Table2,
  Wrench,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsAi from './Sect02WatIsAi'
import Sect03BasisAlgoritmenDataResultaat from './Sect03BasisAlgoritmenDataResultaat'
import Sect04MachineLearning from './Sect04MachineLearning'
import Sect05DeepLearningEnBeeldherkenning from './Sect05DeepLearningEnBeeldherkenning'
import Sect06GeneratieveAI from './Sect06GeneratieveAI'
import Sect07TabelGeneratieveBegrippen from './Sect07TabelGeneratieveBegrippen'
import Sect08ChatGPTWerkingEnBeperkingen from './Sect08ChatGPTWerkingEnBeperkingen'
import Sect09AiInHetDagelijksLeven from './Sect09AiInHetDagelijksLeven'
import Sect10OverheidEnMaatschappij from './Sect10OverheidEnMaatschappij'
import Sect11AiInDeZorg from './Sect11AiInDeZorg'
import Sect12CreativiteitDeepfakesAuteursrecht from './Sect12CreativiteitDeepfakesAuteursrecht'
import Sect13AiEnWerk from './Sect13AiEnWerk'
import Sect14Samenvatting from './Sect14Samenvatting'

const Blok5Week7Casus14LmoWatIsAiSamenvattingSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is AI?', icon: Sparkles },
    { id: 'sect-03', title: 'De basis: algoritmen, data en resultaat', icon: LayoutList },
    { id: 'sect-04', title: 'Machine learning: computers leren van data', icon: Layers },
    { id: 'sect-05', title: 'Deep learning en neurale netwerken', icon: Image },
    { id: 'sect-06', title: 'Generatieve AI: teksten, beelden en video maken', icon: MessageSquare },
    { id: 'sect-07', title: 'Tabel: belangrijke begrippen rond generatieve AI', icon: Table2 },
    { id: 'sect-08', title: 'Hoe werkt ChatGPT in grote lijnen?', icon: MessageSquare },
    { id: 'sect-09', title: 'AI in het dagelijks leven', icon: LayoutList },
    { id: 'sect-10', title: 'AI, overheid en maatschappij', icon: Building2 },
    { id: 'sect-11', title: 'AI in de zorg', icon: HeartPulse },
    { id: 'sect-12', title: 'Creativiteit, deepfakes en auteursrecht', icon: Image },
    { id: 'sect-13', title: 'AI en werk: vervanging of verandering?', icon: Wrench },
    { id: 'sect-14', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Wat is AI?"
      description="Kunstmatige intelligentie (AI) is een verzamelterm voor technieken waarmee computers gedrag kunnen vertonen dat wij als slim of doelgericht ervaren. Het gaat dus niet om één enkele techniek, maar om een hele familie van methoden."
      caseLabel="Week 7 · Casus 14: AI in de zorg"
      blokLabel="Blok 5"
      moduleKind="lmo"
      practiceLink="/oefenvragen?lme=blok5-week7-casus14-lmo-wat-is-ai"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week7-casus14-lmo-wat-is-ai',
      variants: [
        { id: 'blok5-week7-casus14-lmo-wat-is-ai', label: 'Uitgebreid' },
        { id: 'blok5-week7-casus14-lmo-wat-is-ai-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WatIsAi />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03BasisAlgoritmenDataResultaat />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04MachineLearning />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05DeepLearningEnBeeldherkenning />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06GeneratieveAI />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07TabelGeneratieveBegrippen />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08ChatGPTWerkingEnBeperkingen />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09AiInHetDagelijksLeven />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10OverheidEnMaatschappij />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11AiInDeZorg />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12CreativiteitDeepfakesAuteursrecht />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13AiEnWerk />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week7Casus14LmoWatIsAiSamenvattingSummary
