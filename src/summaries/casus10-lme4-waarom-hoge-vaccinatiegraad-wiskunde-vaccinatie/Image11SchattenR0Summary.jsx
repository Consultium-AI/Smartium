import { TrendingUp } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11SchattenR0Summary = () => {
  const toc = [{ id: 'schatten', title: 'Het schatten van R₀', icon: TrendingUp }]
  return (
    <SummaryLayout
      title="Het schatten van R₀"
      description="Generatietijd, serieel interval en epidemische curves."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 11"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image11"
    >
      <section id="schatten" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Schatten van R₀</h2>
        <p className="text-slate-700 mb-4">R₀ wordt geschat op basis van waargenomen nieuwe gevallen en kennis van de generatietijd.</p>
        <div className="space-y-3 mb-4">
          <div className="p-4 bg-primary-50 rounded-xl border border-primary-200">
            <strong>Generatietijd:</strong> gemiddelde tijd tussen het moment van besmetting van de bron en het moment van besmetting van de secundaire gevallen.
          </div>
          <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
            <strong>Serieel interval:</strong> tijd tussen de eerste ziektedag van de bron en de eerste ziektedag van de secundaire gevallen. Vaak gebruikt omdat het moment van besmetting onduidelijk is. Gemiddeld gelijk aan de generatietijd.
          </div>
        </div>
        <p className="text-slate-700 text-sm">In een epidemische curve: de verhouding tussen het aantal nieuwe gevallen nu en één generatietijd geleden is gelijk aan R₀.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image11SchattenR0Summary
