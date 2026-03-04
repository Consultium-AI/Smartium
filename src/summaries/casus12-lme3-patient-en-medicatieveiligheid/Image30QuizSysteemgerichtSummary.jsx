import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image30QuizSysteemgerichtSummary = () => {
  const toc = [{ id: 'quiz', title: 'Quiz – Systeemgerichte aanpak', icon: HelpCircle }]
  return (
    <SummaryLayout
      title="Quiz – Systeemgerichte aanpak"
      description="Systeemgerichte aanpak richt zich op technologische en organisatorische oorzaken."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 30"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image30"
    >
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Systeemgerichte aanpak</h2>
        <p className="text-slate-700 mb-4">Een belangrijke eigenschap van een systeemgerichte aanpak bij foutenanalyses is het analyseren van technologische en organisatorische oorzaken. De aanpak richt zich op deze oorzaken in plaats van op de schuld van een individu.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image30QuizSysteemgerichtSummary
