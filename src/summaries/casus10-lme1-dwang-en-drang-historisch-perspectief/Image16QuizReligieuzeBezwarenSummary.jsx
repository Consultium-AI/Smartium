import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image16QuizReligieuzeBezwarenSummary = () => {
  const toc = [{ id: 'quiz', title: 'Quiz religieuze bezwaren', icon: HelpCircle }]
  return (
    <SummaryLayout
      title="Quiz: Religieuze bezwaren"
      description="Bezwaren gebaseerd op Gods voorzienigheid."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 16"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image16"
    >
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Religieuze bezwaren tegen vaccinatie</h2>
        <p className="text-slate-700 mb-4">Religieuze bezwaren zijn vaak gebaseerd op het geloof in Gods voorzienigheid: ziekte en gezondheid worden gezien als onderdeel van Gods plan. Vaccinatie kan dan worden ervaren als ingrijpen in dat plan.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image16QuizReligieuzeBezwarenSummary
