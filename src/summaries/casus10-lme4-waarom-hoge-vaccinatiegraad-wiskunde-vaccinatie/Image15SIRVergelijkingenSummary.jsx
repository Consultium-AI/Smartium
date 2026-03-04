import { Calculator } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image15SIRVergelijkingenSummary = ({ standalone = true }) => {
  const toc = [{ id: 'vergelijkingen', title: 'SIR-vergelijkingen', icon: Calculator }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="De wiskunde van het SIR-model"
      description="Parameters β en γ, en de differentiaalvergelijkingen."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 15"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image15"
    >
      <section id="vergelijkingen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Parameters</h2>
        <p className="text-slate-700 mb-4">β = transmissiesnelheid. γ = herstelsnelheid; 1/γ = D = gemiddelde duur van infectie.</p>
        <div className="p-5 bg-slate-100 rounded-xl font-mono text-sm mb-4">
          dS/dt = −β·S·I<br />
          dI/dt = +β·S·I − γ·I<br />
          dR/dt = +γ·I
        </div>
        <p className="text-slate-700 text-sm">Voor S→I zijn beide S en I nodig (transmissie vereist ontmoeting). Voor I→R is alleen I van belang.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image15SIRVergelijkingenSummary
