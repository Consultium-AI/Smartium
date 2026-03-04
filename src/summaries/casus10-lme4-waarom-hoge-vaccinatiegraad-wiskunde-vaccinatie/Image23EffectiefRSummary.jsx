import { TrendingDown } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image23EffectiefRSummary = () => {
  const toc = [{ id: 'effectiefr', title: 'Het effectief reproductiegetal R', icon: TrendingDown }]
  return (
    <SummaryLayout
      title="Het effectief reproductiegetal R"
      description="R over de tijd – wanneer is R < 1?"
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 23"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image23"
    >
      <section id="effectiefr" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Effectieve R</h2>
        <p className="text-slate-700 mb-4">De effectieve R toont hoe het reproductiegetal in de loop van de tijd verandert. R &gt; 1: epidemie groeit. R &lt; 1: epidemie krimpt. R = 1 is de kritische drempel.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image23EffectiefRSummary
