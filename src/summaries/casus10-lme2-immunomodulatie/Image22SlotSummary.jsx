import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image22SlotSummary = () => {
  const toc = [{ id: 'slot', title: 'Slot', icon: BookOpen }]
  return (
    <SummaryLayout
      title="Slot"
      description="Samenvatting immunomodulatie."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 22"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image22"
    >
      <section id="slot" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Slot</h2>
        <p className="text-slate-700 mb-4">Immunomodulatie omvat zowel immunosuppressie (bij auto-immuunziekten en transplantatie) als immunostimulatie (vaccins). Beide strategieën zijn essentieel voor moderne geneeskunde.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image22SlotSummary
