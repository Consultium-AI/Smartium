import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07QuizCorticosteroidenSummary = ({ standalone = true }) => {
  const toc = [{ id: 'quiz', title: 'Quiz corticosteroïden', icon: HelpCircle }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Quiz: Bijwerkingen corticosteroïden"
      description="Langdurig gebruik en belangrijke bijwerkingen."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 7"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image07"
    >
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Bijwerkingen corticosteroïden</h2>
        <p className="text-slate-700 mb-4">Corticosteroïden worden veel voorgeschreven, maar gaan gepaard met bijwerkingen. Langdurig gebruik is in principe ongewenst. Belangrijke bijwerkingen: verhoogde kans op infecties, diabetes mellitus, osteoporose.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image07QuizCorticosteroidenSummary
