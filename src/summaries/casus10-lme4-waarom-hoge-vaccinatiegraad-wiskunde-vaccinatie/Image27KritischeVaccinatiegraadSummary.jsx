import { Target } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image27KritischeVaccinatiegraadSummary = ({ standalone = true }) => {
  const toc = [{ id: 'kritisch', title: 'Groepsimmuniteit', icon: Target }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="De kritische vaccinatiegraad – Groepsimmuniteit"
      description="Visuele weergave: vatbaren (geel), geïnfecteerden (rood), immune/gevaccineerden (blauw)."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 27"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image27"
    >
      <section id="kritisch" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Groepsimmuniteit (kudde-immuniteit)</h2>
        <p className="text-slate-700 mb-4">Als de vaccinatiegraad boven de kritische drempel ligt, kan een virus zich in principe niet meer door de populatie verspreiden. Gevaccineerden (blauw) vormen een barrière en beschermen ook niet-gevaccineerden.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image27KritischeVaccinatiegraadSummary
