import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08QuizFactorenDalingSummary = () => {
  const toc = [{ id: 'quiz', title: 'Factoren daling vaccinatiegraad', icon: HelpCircle }]
  return (
    <SummaryLayout
      title="Quiz: Factoren daling"
      description="Pokkenbriefje, bijwerkingen en religieuze bezwaren."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 8"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image08"
    >
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Factoren die de vaccinatiegraad beïnvloeden</h2>
        <p className="text-slate-700 mb-4">Belangrijke factoren: afschaffing van het pokkenbriefje, angst voor bijwerkingen (postvaccinale encephalitis) en religieuze bezwaren. Deze factoren droegen bij aan de daling van de vaccinatiegraad in de jaren 1930.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image08QuizFactorenDalingSummary
