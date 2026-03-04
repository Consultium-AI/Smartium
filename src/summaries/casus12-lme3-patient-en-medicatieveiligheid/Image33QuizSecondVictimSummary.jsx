import { ClipboardCheck } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image33QuizSecondVictimSummary = ({ standalone = true }) => {
  const toc = [{ id: 'quiz', title: 'Quiz – Second victim', icon: ClipboardCheck }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Quiz – Second victim"
      description="Peer support van getrainde collega&apos;s is essentieel voor herstel."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 33"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image33"
    >
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Second victim ondersteunen</h2>
        <p className="text-slate-700 mb-4">Een second victim kan het beste worden ondersteund door peer support aan te bieden van getrainde collega&apos;s. Peer support biedt second victims een veilige omgeving om te praten en ervaringen te delen, wat essentieel is voor herstel.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image33QuizSecondVictimSummary
