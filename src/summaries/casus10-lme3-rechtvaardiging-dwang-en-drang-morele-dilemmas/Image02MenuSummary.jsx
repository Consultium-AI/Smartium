import { LayoutList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02MenuSummary = () => {
  const toc = [{ id: 'menu', title: 'Menu', icon: LayoutList }]
  return (
    <SummaryLayout
      title="Menu – Rechtvaardiging dwang en drang"
      description="Overzicht van de module over morele dilemma's bij vaccineren."
      caseLabel="Week 5 Casus 10 LME 3: Afbeelding 2"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image02"
    >
      <section id="menu" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Menu</h2>
        <p className="text-slate-700 mb-4">Deze module behandelt de ethische rechtvaardiging van dwang en drang bij vaccinatie, en de morele dilemma's die artsen en beleidsmakers tegenkomen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image02MenuSummary
