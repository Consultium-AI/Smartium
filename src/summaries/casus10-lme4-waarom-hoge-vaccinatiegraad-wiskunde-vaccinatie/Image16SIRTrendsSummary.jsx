import { TrendingUp } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image16SIRTrendsSummary = ({ standalone = true }) => {
  const toc = [{ id: 'trends', title: 'Trends over de tijd', icon: TrendingUp }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="SIR-model – Trends over de tijd"
      description="Hoe S, I en R veranderen bij R₀ > 1."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 16"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image16"
    >
      <section id="trends" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Dynamiek van S, I en R</h2>
        <p className="text-slate-700 mb-4">Bij R₀ &gt; 1, na introductie van één geïnfecteerde in een volledig vatbare populatie:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li><strong>S:</strong> start op 100%, kan alleen dalen</li>
          <li><strong>I:</strong> stijgt eerst exponentieel, daarna daalt het</li>
          <li><strong>R:</strong> stijgt later en blijft stijgen</li>
        </ul>
        <p className="text-slate-700 mt-4 text-sm">Uiteindelijk is bijna iedereen immuun en is de epidemie voorbij. Check: S + I + R = 100%.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image16SIRTrendsSummary
