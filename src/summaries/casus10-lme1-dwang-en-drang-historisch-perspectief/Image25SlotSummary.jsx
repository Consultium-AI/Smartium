import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image25SlotSummary = ({ standalone = true }) => {
  const toc = [{ id: 'slot', title: 'Slot', icon: BookOpen }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Slot"
      description="Maatschappelijke controversie en rol artsen als bruggenbouwers."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 25"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image25"
    >
      <section id="slot" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Slot</h2>
        <p className="text-slate-700 mb-4">Vaccinatie blijft een maatschappelijke controversie. Artsen kunnen als bruggenbouwers fungeren door respectvol te communiceren.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image25SlotSummary
