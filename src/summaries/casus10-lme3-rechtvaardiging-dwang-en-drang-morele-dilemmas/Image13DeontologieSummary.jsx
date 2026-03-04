import { Scale } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image13DeontologieSummary = () => {
  const toc = [{ id: 'deontologie', title: 'Deontologie', icon: Scale }]
  return (
    <SummaryLayout title="Deontologie" description="Plichten en rechten." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 13" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image13">
      <section id="deontologie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Deontologie</h2>
        <p className="text-slate-700 mb-4">Deontologische ethiek benadrukt plichten en rechten. Het recht op lichamelijke integriteit en autonomie kan botsen met de plicht om anderen te beschermen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image13DeontologieSummary
