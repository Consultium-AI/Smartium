import { ClipboardCheck } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image26QuizSafetyISummary = ({ standalone = true }) => {
  const toc = [{ id: 'quiz', title: 'Quiz – Safety I', icon: ClipboardCheck }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Quiz – Safety I"
      description="Safety I richt zich op het retrospectief analyseren van incidenten."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 26"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image26"
    >
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Safety I</h2>
        <p className="text-slate-700 mb-4">Safety I richt zich op het retrospectief analyseren van incidenten om te voorkomen dat deze opnieuw gebeuren. Safety I is gericht op het voorkomen van herhaling van fouten.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image26QuizSafetyISummary
