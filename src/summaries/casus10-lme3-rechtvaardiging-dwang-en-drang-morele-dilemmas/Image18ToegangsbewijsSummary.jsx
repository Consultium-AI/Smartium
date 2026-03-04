import { FileText } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image18ToegangsbewijsSummary = ({ standalone = true }) => {
  const toc = [{ id: 'toegang', title: 'Toegangsbewijs', icon: FileText }]
  return (
    <SummaryLayout
      standalone={standalone}
 title="Toegangsbewijs" description="Corona-toegangsbewijs als vorm van drang." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 18" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image18">
      <section id="toegang" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Toegangsbewijs</h2>
        <p className="text-slate-700 mb-4">Het corona-toegangsbewijs was een vorm van drang: geen verplichting om te vaccineren, maar wel beperking toegang tot bepaalde locaties zonder vaccinatie of test.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image18ToegangsbewijsSummary
