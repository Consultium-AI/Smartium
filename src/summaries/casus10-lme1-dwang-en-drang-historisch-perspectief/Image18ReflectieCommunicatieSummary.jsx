import { MessageCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image18ReflectieCommunicatieSummary = () => {
  const toc = [{ id: 'reflectie', title: 'Reflectie communicatie', icon: MessageCircle }]
  return (
    <SummaryLayout
      title="Reflectie: Communicatiestrategieën"
      description="Respect, empathie en gedeelde waarden."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 18"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image18"
    >
      <section id="reflectie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Communicatiestrategieën</h2>
        <p className="text-slate-700 mb-4">Effectieve communicatie bij vaccinatieweigering vraagt om respect, empathie en het zoeken naar gedeelde waarden. Dit helpt vertrouwen op te bouwen en het gesprek open te houden.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image18ReflectieCommunicatieSummary
