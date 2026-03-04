import { ClipboardCheck } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image27QuizSafetyIISummary = ({ standalone = true }) => {
  const toc = [{ id: 'quiz', title: 'Quiz – Safety II', icon: ClipboardCheck }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Quiz – Safety II"
      description="Safety II onderzoekt waarom processen goed verlopen."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 27"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image27"
    >
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Safety II</h2>
        <p className="text-slate-700 mb-4">Safety II onderzoekt hoe succesvolle prestaties worden geleverd en hoe systemen adaptief zijn in verschillende situaties. Een belangrijk kenmerk: het onderzoeken waarom processen goed verlopen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image27QuizSafetyIISummary
