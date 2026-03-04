import { Layers } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08GramPosNegSummary = () => {
  const toc = [{ id: 'gram', title: 'Gram-positieve en gram-negatieve bacteriën', icon: Layers }]
  return (
    <SummaryLayout
      title="Gram-positieve en gram-negatieve bacteriën bij sepsis"
      description="Prevalentie en herkenning via Toll-like Receptors (TLR)."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 8"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image08"
    >
      <section id="gram" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Gram-positief en gram-negatief bij sepsis</h2>
        <p className="text-slate-700 mb-4">Beide bacteriegroepen zijn significante oorzaken van sepsis. Literatuur varieert: sommige studies tonen meer gram-positief, andere meer gram-negatief. Een Nederlandse trial (Alam N et al., Lancet Respir Med 2018) vond bij community-onset sepsis 30% gram-negatief en 21% gram-positief. Nethmap 2023 toont vooral gram-positief door Coagulase-negatieve stafylokokken (vaak contaminatie).</p>
        <div className="p-4 bg-primary-50 rounded-xl border border-primary-200">
          <h4 className="font-bold text-primary-800 mb-2">Herkenning door TLRs</h4>
          <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
            <li><strong>Gram-negatief:</strong> LPS (TLR4), lipoproteïnen (TLR2), flagellen (TLR5), peptidoglycaan (TLR2)</li>
            <li><strong>Gram-positief:</strong> Peptidoglycaan, lipoteichoïnezuur, lipoproteïnen (TLR2), flagellen (TLR5)</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image08GramPosNegSummary
