import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11QuizCalcineurineSummary = ({ standalone = true }) => {
  const toc = [{ id: 'quiz', title: 'Quiz calcineurine-remmers', icon: HelpCircle }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Quiz: Calcineurine-remmers"
      description="Kenmerkende bijwerking: nefrotoxiciteit."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 11"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image11"
    >
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Kenmerkende bijwerking</h2>
        <p className="text-slate-700 mb-4">De meest kenmerkende bijwerking van calcineurine-remmers is nefrotoxiciteit. Bij verslechtering van de nierfunctie wordt vaak de dosering verlaagd en een geneesmiddel uit een andere groep (bijv. mycofenolaatmofetil) bijgestart.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image11QuizCalcineurineSummary
