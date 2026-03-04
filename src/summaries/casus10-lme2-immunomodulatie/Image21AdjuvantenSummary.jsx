import { Beaker } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image21AdjuvantenSummary = () => {
  const toc = [{ id: 'adjuvanten', title: 'Adjuvanten', icon: FlaskConical }]
  return (
    <SummaryLayout
      title="Adjuvanten"
      description="Stoffen die de immuunrespons versterken."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 21"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image21"
    >
      <section id="adjuvanten" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Adjuvanten</h2>
        <p className="text-slate-700 mb-4">Adjuvanten zijn toevoegingen aan vaccins die de immuunrespons versterken. Ze verbeteren de opname en presentatie van antigenen en versterken het gevaarsignaal.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image21AdjuvantenSummary
