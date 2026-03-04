import { ClipboardCheck } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image28QuizFramSummary = ({ standalone = true }) => {
  const toc = [{ id: 'quiz', title: 'Quiz – FRAM', icon: ClipboardCheck }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Quiz – FRAM"
      description="FRAM biedt inzicht in de dynamiek van complexe processen."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 28"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image28"
    >
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">FRAM</h2>
        <p className="text-slate-700 mb-4">Een voordeel van het FRAM-model: het geeft inzicht in de dynamiek van complexe processen. FRAM biedt een dynamisch beeld van systemen door te analyseren hoe variaties en interacties bijdragen aan processen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image28QuizFramSummary
