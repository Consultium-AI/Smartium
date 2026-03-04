import { ClipboardCheck } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image34QuizPrismaBijnaSummary = () => {
  const toc = [{ id: 'quiz', title: 'Quiz – PRISMA bij bijna-incident', icon: ClipboardCheck }]
  return (
    <SummaryLayout
      title="Quiz – PRISMA bij bijna-incident"
      description="PRISMA is geschikt voor retrospectieve analyse van bijna-incidenten."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 34"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image34"
    >
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">PRISMA bij bijna-incident</h2>
        <p className="text-slate-700 mb-4">Bij een bijna-incident (bijv. verpleegkundige ontdekt net op tijd dubbele dosis insuline) is PRISMA de meest geschikte analysemethode. PRISMA is geschikt om incidenten en bijna-incidenten retrospectief te analyseren en hoe vergelijkbare situaties in de toekomst kunnen worden voorkomen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image34QuizPrismaBijnaSummary
