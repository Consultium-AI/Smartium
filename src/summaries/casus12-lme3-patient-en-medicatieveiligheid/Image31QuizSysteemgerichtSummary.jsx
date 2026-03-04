import { ClipboardCheck } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image31QuizSysteemgerichtSummary = ({ standalone = true }) => {
  const toc = [{ id: 'quiz', title: 'Quiz – Systeemgerichte aanpak', icon: ClipboardCheck }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Quiz – Systeemgerichte aanpak"
      description="Systeemgerichte aanpak richt zich op technologische en organisatorische oorzaken."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 31"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image31"
    >
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Systeemgerichte aanpak</h2>
        <p className="text-slate-700 mb-4">Een belangrijke eigenschap: het analyseren van technologische en organisatorische oorzaken. Een systeemgerichte aanpak richt zich op technologische en organisatorische oorzaken, in plaats van op de schuld van een individu.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image31QuizSysteemgerichtSummary
