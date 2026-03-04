import { GitBranch } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08BasisreproductiegetalSummary = ({ standalone = true }) => {
  const toc = [{ id: 'r0', title: 'Het basisreproductiegetal R₀', icon: GitBranch }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Het basisreproductiegetal R₀"
      description="Visuele weergave van de transmissieketen en R₀."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 8"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image08"
    >
      <section id="r0" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Transmissieboom</h2>
        <p className="text-slate-900 mb-4">Een transmissieboom toont hoe een infectie zich verspreidt: het primaire geval (rood) besmet secundaire gevallen (donkerblauw), die op hun beurt weer anderen besmetten (lichtblauw, roze). De vertakkingsfactor per generatie relateert aan R₀.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image08BasisreproductiegetalSummary
