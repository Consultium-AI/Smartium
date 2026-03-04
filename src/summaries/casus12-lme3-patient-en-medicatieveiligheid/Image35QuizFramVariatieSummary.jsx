import { ClipboardCheck } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image35QuizFramVariatieSummary = ({ standalone = true }) => {
  const toc = [{ id: 'quiz', title: 'Quiz – FRAM en dagelijkse variaties', icon: ClipboardCheck }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Quiz – FRAM en dagelijkse variaties"
      description="FRAM sluit aan bij observatie van creatieve oplossingen in de praktijk."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 35"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image35"
    >
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">FRAM en variaties</h2>
        <p className="text-slate-700 mb-4">Wanneer een team observeert hoe medicatie dagelijks wordt toegediend en verpleegkundigen creatieve oplossingen gebruiken om tijd te besparen, sluit FRAM het beste aan. FRAM is gericht op het begrijpen van dagelijkse variaties en hoe deze bijdragen aan de algehele prestaties van het systeem.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image35QuizFramVariatieSummary
