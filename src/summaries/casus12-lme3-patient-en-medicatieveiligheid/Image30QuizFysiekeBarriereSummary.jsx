import { ClipboardCheck } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image30QuizFysiekeBarriereSummary = () => {
  const toc = [{ id: 'quiz', title: 'Quiz – Fysieke barrière', icon: ClipboardCheck }]
  return (
    <SummaryLayout
      title="Quiz – Fysieke barrière"
      description="Fysieke barrières voorkomen automatisch fouten."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 30"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image30"
    >
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Fysieke barrière</h2>
        <p className="text-slate-700 mb-4">Voorbeeld van een fysieke barrière: het gebruik van een digitaal systeem dat niet verdergaat zonder alle verplichte velden in te vullen. Fysieke barrières zijn ontworpen om automatisch fouten te voorkomen; je kunt er niet omheen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image30QuizFysiekeBarriereSummary
