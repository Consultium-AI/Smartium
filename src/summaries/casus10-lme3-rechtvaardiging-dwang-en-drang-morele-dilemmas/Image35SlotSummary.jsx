import { Shield } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image35SlotSummary = () => {
  const toc = [{ id: 'slot', title: 'Slot', icon: Shield }]
  return (
    <SummaryLayout title="Slot" description="Afsluiting van de module." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 35" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image35">
      <section id="slot" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Slot</h2>
        <p className="text-slate-700 mb-4">Morele dilemma's bij vaccineren vragen om zorgvuldige afweging. Er is geen eenvoudig antwoord; context en empathie zijn belangrijk.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image35SlotSummary
