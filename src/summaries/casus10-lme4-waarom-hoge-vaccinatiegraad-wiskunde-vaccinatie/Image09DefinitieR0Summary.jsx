import { Hash } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09DefinitieR0Summary = () => {
  const toc = [{ id: 'definitie', title: 'Definitie R₀', icon: Hash }]
  return (
    <SummaryLayout
      title="Definitie van het basisreproductiegetal R₀"
      description="Wat R₀ betekent en wanneer er een uitbraak plaatsvindt."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 9"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image09"
    >
      <section id="definitie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Definitie R₀</h2>
        <p className="text-slate-700 mb-4">R₀ = het gemiddeld aantal secundaire besmettingen per primair geval in een volledig vatbare populatie.</p>
        <div className="space-y-3">
          <div className="p-4 bg-red-50 rounded-xl border border-red-200">
            <strong>R₀ &gt; 1:</strong> epidemie – het aantal geïnfecteerden neemt toe.
          </div>
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <strong>R₀ &lt; 1:</strong> geen epidemie – de infectie verdwijnt uiteindelijk.
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <strong>R₀ = 1:</strong> de situatie blijft ongeveer gelijk.
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image09DefinitieR0Summary
