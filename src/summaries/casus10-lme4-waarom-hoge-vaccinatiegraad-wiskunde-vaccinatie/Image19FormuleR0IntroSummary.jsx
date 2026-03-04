import { Calculator } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image19FormuleR0IntroSummary = ({ standalone = true }) => {
  const toc = [{ id: 'formule', title: 'Formule voor R₀', icon: Calculator }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Een eenvoudige wiskundige formule voor R₀"
      description="Introductie van hoofdstuk 4: afleiden van R₀ uit het SIR-model."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 19"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image19"
    >
      <section id="formule" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Formule voor R₀</h2>
        <p className="text-slate-700 mb-4">Uit het SIR-model kan R₀ worden afgeleid. Voor een uitbraak moet dI/dt &gt; 0. Dit leidt tot de formule R₀ = β/γ = b × c × D.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image19FormuleR0IntroSummary
