import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07OorzakenSummary = ({ standalone = true }) => {
  const toc = [{ id: 'oorzaken', title: 'Oorzaken van sepsis', icon: HelpCircle }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Oorzaken van sepsis"
      description="Gram-positieve en gram-negatieve bacteriën als belangrijkste verwekkers."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 7"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image07"
    >
      <section id="oorzaken" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Oorzaken van sepsis</h2>
        <p className="text-slate-700 mb-4">Sepsis wordt meestal veroorzaakt door:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li><strong>Gram-negatieve bacteriën:</strong> Escherichia coli, Klebsiella spp., Pseudomonas aeruginosa</li>
          <li><strong>Gram-positieve bacteriën:</strong> Staphylococcus aureus, Streptococcus pneumoniae</li>
        </ul>
        <p className="text-slate-700 mt-4 text-sm">Schimmels (Candida) en virussen zijn minder vaak de oorzaak. Beide groepen bacteriën zijn opgenomen in de empirische therapie.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image07OorzakenSummary
