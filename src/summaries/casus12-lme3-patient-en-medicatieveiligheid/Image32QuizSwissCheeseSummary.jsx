import { ClipboardCheck } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image32QuizSwissCheeseSummary = ({ standalone = true }) => {
  const toc = [{ id: 'quiz', title: 'Quiz – Swiss Cheese Model', icon: ClipboardCheck }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Quiz – Swiss Cheese Model"
      description="Het Swiss Cheese Model toont systematische barrières."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 32"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image32"
    >
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Swiss Cheese Model</h2>
        <p className="text-slate-700 mb-4">Het Swiss Cheese Model wordt gebruikt om systematische barrières binnen een proces weer te geven. Het toont aan hoe meerdere lagen van bescherming niet effectief kunnen zijn, waardoor fouten optreden.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image32QuizSwissCheeseSummary
