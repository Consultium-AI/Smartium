import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09FarmacokinetiekSummary = () => {
  const toc = [{ id: 'pk', title: 'Farmacokinetiek', icon: Activity }]
  return (
    <SummaryLayout
      title="Farmacokinetiek"
      description="Processen antibioticum in lichaam."
      caseLabel="Week 5 Casus 9 LME 3: Afbeelding 9"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=lme3-welk-antibioticum-kies-ik-image09"
    >
      <section id="pk" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Farmacokinetiek</h2>
        <p className="text-slate-700">Processen met antibioticum in lichaam na toediening.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image09FarmacokinetiekSummary
