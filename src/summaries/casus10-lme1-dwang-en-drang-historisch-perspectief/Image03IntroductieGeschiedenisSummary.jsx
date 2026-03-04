import { History } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03IntroductieGeschiedenisSummary = () => {
  const toc = [{ id: 'geschiedenis', title: 'Geschiedenis', icon: History }]
  return (
    <SummaryLayout
      title="Geschiedenis en actualiteit"
      description="Van pokkenbriefje tot corona-toegangsbewijs."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 3"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image03"
    >
      <section id="geschiedenis" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Geschiedenis en actualiteit</h2>
        <p className="text-slate-700">Van pokkenbriefje tot polio in de Bible Belt. Het corona-toegangsbewijs (2021) riep vergelijkbare vragen op. Reflecteer op je rol als arts.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image03IntroductieGeschiedenisSummary
