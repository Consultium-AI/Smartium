import { ClipboardCheck } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image29QuizPrismaSummary = ({ standalone = true }) => {
  const toc = [{ id: 'quiz', title: 'Quiz – PRISMA', icon: ClipboardCheck }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Quiz – PRISMA"
      description="PRISMA identificeert en pakt oorzaken van incidenten aan."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 29"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image29"
    >
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">PRISMA</h2>
        <p className="text-slate-700 mb-4">Het doel van de PRISMA-analyse: het identificeren en aanpakken van de oorzaken van incidenten. PRISMA is een retrospectieve methode gericht op het analyseren van de oorzaken van incidenten en het treffen van preventieve maatregelen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image29QuizPrismaSummary
