import { Layers } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image34SlotSummary = ({ standalone = true }) => {
  const toc = [{ id: 'slot', title: 'Slot', icon: Layers }]
  return (
    <SummaryLayout
      standalone={standalone}
 title="Slot" description="Afsluiting van de module." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 34" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image34">
      <section id="slot" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Slot</h2>
        <p className="text-slate-700 mb-4">De balans tussen individuele autonomie en collectieve bescherming is dynamisch. Gezamenlijke besluitvorming en voorlichting verdienen altijd de voorkeur boven dwang.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image34SlotSummary
