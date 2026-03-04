import { Calculator } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image20AfleidenR0Summary = () => {
  const toc = [{ id: 'afleiden', title: 'Afleiden van R₀', icon: Calculator }]
  return (
    <SummaryLayout
      title="Afleiden van R₀ uit het SIR-model"
      description="Voorwaarde voor uitbraak: dI/dt > 0, dus R₀ = β/γ = b × c × D."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 20"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image20"
    >
      <section id="afleiden" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Afleiding</h2>
        <p className="text-slate-700 mb-4">Voorwaarde voor uitbraak: dI/dt &gt; 0. Uit β·S·I − γ·I &gt; 0 volgt (bij S ≈ 1): β/γ &gt; 1. Dus R₀ = β/γ. Met β = b × c (besmettingskans × contacten) en 1/γ = D:</p>
        <div className="p-5 bg-primary-50 rounded-xl border border-primary-200 font-mono text-lg mb-4">
          R₀ = b × c × D
        </div>
        <p className="text-slate-700 text-sm">b = besmettingskans per contact, c = aantal contacten per tijdseenheid, D = duur van besmettelijkheid.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image20AfleidenR0Summary
