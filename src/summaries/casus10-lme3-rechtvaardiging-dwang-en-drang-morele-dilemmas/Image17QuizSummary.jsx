import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image17QuizSummary = () => {
  const toc = [{ id: 'quiz', title: 'Quiz', icon: HelpCircle }]
  return (
    <SummaryLayout title="Quiz" description="Test je kennis." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 17" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image17">
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Quiz</h2>
        <p className="text-slate-700 mb-4">Test je kennis over de ethische rechtvaardiging van dwang en drang bij vaccinatie.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image17QuizSummary
