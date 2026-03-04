import { History } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14SIRKermackSummary = () => {
  const toc = [{ id: 'kermack', title: 'Kermack & McKendrick', icon: History }]
  return (
    <SummaryLayout
      title="Het SIR-model – Kermack & McKendrick (1927)"
      description="Oorsprong en aannames van het SIR-model."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 14"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image14"
    >
      <section id="kermack" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Het SIR-model</h2>
        <p className="text-slate-700 mb-4">Kermack & McKendrick introduceerden het SIR-model in 1927. Het toont hoe de proporties S, I en R in de tijd veranderen. Aannames: alle geïnfecteerden zijn besmettelijk; na herstel levenslange immuniteit.</p>
        <p className="text-slate-700 mb-4">Het model past goed bij klassieke kinderziekten uit het RVP. De snelheid van verandering hangt af van de transmissiesnelheid (β) en de herstelsnelheid (γ).</p>
      </section>
    </SummaryLayout>
  )
}

export default Image14SIRKermackSummary
