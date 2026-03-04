import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image28QuizPRISMASummary = () => {
  const toc = [{ id: 'quiz', title: 'Quiz – PRISMA', icon: HelpCircle }]
  return (
    <SummaryLayout
      title="Quiz – PRISMA"
      description="PRISMA is retrospectief en richt zich op het identificeren en aanpakken van oorzaken van incidenten."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 28"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image28"
    >
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Doel PRISMA</h2>
        <p className="text-slate-700 mb-4">Het doel van de PRISMA-analyse is het identificeren en aanpakken van de oorzaken van incidenten. PRISMA is een retrospectieve methode gericht op het analyseren van de oorzaken van incidenten en het treffen van preventieve maatregelen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image28QuizPRISMASummary
