import { CheckCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image37SlotSummary = () => {
  const toc = [{ id: 'slot', title: 'Slot', icon: CheckCircle }]
  return (
    <SummaryLayout
      title="Slot – De wiskunde van vaccinatie"
      description="Afsluiting van de e-module."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 37"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image37"
    >
      <section id="slot" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Slot</h2>
        <p className="text-slate-700 mb-4">Je hebt de module doorlopen. Herhaal de drie belangrijke formules: R₀ = b × c × D, f = 1 − 1/R₀ (en f = [1 − (1/R₀)]/P bij imperfect vaccin), en de SIR-vergelijkingen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image37SlotSummary
