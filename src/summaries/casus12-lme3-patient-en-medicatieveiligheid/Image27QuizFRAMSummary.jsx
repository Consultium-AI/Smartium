import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image27QuizFRAMSummary = () => {
  const toc = [{ id: 'quiz', title: 'Quiz – FRAM', icon: HelpCircle }]
  return (
    <SummaryLayout
      title="Quiz – FRAM"
      description="FRAM geeft inzicht in de dynamiek van complexe processen."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 27"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image27"
    >
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Voordeel FRAM</h2>
        <p className="text-slate-700 mb-4">Een voordeel van het FRAM-model is dat het inzicht geeft in de dynamiek van complexe processen. FRAM biedt een dynamisch beeld van systemen door te analyseren hoe variaties en interacties bijdragen aan processen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image27QuizFRAMSummary
