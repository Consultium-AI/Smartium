import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image33QuizSummary = () => {
  const toc = [{ id: 'quiz', title: 'Quiz', icon: HelpCircle }]
  return (
    <SummaryLayout
      title="Quiz – Medicatieveiligheid"
      description="Test je kennis over medicatieveiligheid."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 33"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image33"
    >
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Quiz</h2>
        <p className="text-slate-700">Test je kennis met de oefenvragen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image33QuizSummary
