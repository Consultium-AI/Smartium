import { Calculator } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04WiskundigeModellenSummary = ({ standalone = true }) => {
  const toc = [{ id: 'modellen', title: 'Waarom wiskundige modellen?', icon: Calculator }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Waarom wiskundige modellen in de infectieziekte-epidemiologie?"
      description="Introductie van het eerste hoofdstuk over het nut van wiskundige modellen."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 4"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image04"
    >
      <section id="modellen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Waarom wiskundige modellen?</h2>
        <p className="text-slate-700 mb-4">Infectieziekten zijn uniek omdat mensen interactie hebben; besmetting van de één kan leiden tot besmetting van anderen. Dit maakt de epidemiologie van infectieziekten complex. Wiskundige modellen zijn waardevol om deze complexiteit te beheersen en te begrijpen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image04WiskundigeModellenSummary
