import { Brain } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image19StressSummary = () => {
  const toc = [{ id: 'stress', title: 'Stress, ontspanning en verbinding', icon: Brain }]
  return (
    <SummaryLayout
      title="Andere leefstijlfactoren (3) – Stress, ontspanning en verbinding"
      description="Cortisol, burn-out en de koppeling tussen psychische stress en immuunsysteem."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 19"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image19"
    >
      <section id="stress" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Stress, ontspanning en verbinding</h2>
        <p className="text-slate-700 mb-4">Cortisol koppelt psychische stress aan het immuunsysteem. Burn-out hangt samen met immunosenescence en tolerantie.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image19StressSummary
