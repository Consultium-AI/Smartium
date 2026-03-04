import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11SpanningenElspeetSummary = ({ standalone = true }) => {
  const toc = [{ id: 'spanningen', title: 'Spanningen Elspeet', icon: AlertTriangle }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Spanningen Elspeet"
      description="12 februari 1966: protest en omgeduwde auto's."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 11"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image11"
    >
      <section id="spanningen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Spanningen in Elspeet</h2>
        <p className="text-slate-700 mb-4">Op 12 februari 1966 escaleerden de spanningen rond de polio-vaccinatie in Elspeet. Er was protest; auto's werden omgeduwd. Dit illustreert hoe emotioneel het debat over vaccinatie kon worden.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image11SpanningenElspeetSummary
