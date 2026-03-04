import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image27SlotSummary = ({ standalone = true }) => {
  const toc = [{ id: 'slot', title: 'Slot', icon: BookOpen }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Slot"
      description="Afsluiting immunomodulatie."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 27"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image27"
    >
      <section id="slot" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Slot</h2>
        <p className="text-slate-700 mb-4">Immunomodulatie omvat immunosuppressie en immunostimulatie. Beide zijn essentieel voor de behandeling van ziekten en preventie van infecties.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image27SlotSummary
