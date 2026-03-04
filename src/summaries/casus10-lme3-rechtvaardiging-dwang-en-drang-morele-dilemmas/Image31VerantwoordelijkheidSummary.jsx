import { Target } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image31VerantwoordelijkheidSummary = ({ standalone = true }) => {
  const toc = [{ id: 'verantwoordelijkheid', title: 'Verantwoordelijkheid', icon: Target }]
  return (
    <SummaryLayout
      standalone={standalone}
 title="Verantwoordelijkheid" description="Verantwoordelijkheden bij vaccinatie en morele dilemma's." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 31" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image31">
      <section id="verantwoordelijkheid" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Verantwoordelijkheid</h2>
        <p className="text-slate-700 mb-4">Artsen dragen verantwoordelijkheid voor het welzijn van het kind, ouders voor de opvoedingskeuzes, en de overheid voor de volksgezondheid. Deze verantwoordelijkheden kunnen botsen bij vaccinatieweigering.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image31VerantwoordelijkheidSummary
