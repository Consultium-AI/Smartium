import { LayoutList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02MenuSummary = () => {
  const tableOfContents = [{ id: 'menu', title: 'Menu', icon: LayoutList }]
  return (
    <SummaryLayout
      title="Menu – Dwang en drang in historisch perspectief"
      description="Overzicht: rol van de overheid en vaccinatieweigering."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 2"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image02"
    >
      <section id="menu" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Menu</h2>
        <p className="text-slate-700 mb-4">Deze module zet drang en dwang bij vaccinatie in historisch perspectief. Deel 1: de rol van de overheid. Deel 2: vaccinatieweigeraars.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image02MenuSummary
