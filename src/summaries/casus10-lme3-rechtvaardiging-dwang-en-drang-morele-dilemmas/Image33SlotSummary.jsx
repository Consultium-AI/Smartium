import { Target } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image33SlotSummary = ({ standalone = true }) => {
  const toc = [{ id: 'slot', title: 'Slot', icon: Target }]
  return (
    <SummaryLayout
      standalone={standalone}
 title="Slot" description="Afsluiting van de module." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 33" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image33">
      <section id="slot" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Slot</h2>
        <p className="text-slate-700 mb-4">Rechtvaardiging van dwang en drang bij vaccinatie blijft een complex thema. Blijf reflecteren op je eigen positie en de waarden die voor jou leidend zijn.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image33SlotSummary
