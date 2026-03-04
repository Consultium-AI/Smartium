import { Layers } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image13AntiTNFStructurenSummary = ({ standalone = true }) => {
  const toc = [{ id: 'structuren', title: 'Anti-TNF structuren', icon: Layers }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Anti-TNF-alpha structuren"
      description="Verschillende vormen: humaan en deels dierlijk."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 13"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image13"
    >
      <section id="structuren" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Anti-TNF-alpha structuren</h2>
        <p className="text-slate-700 mb-4">Er zijn verschillende vormen anti-TNF-alpha die kunnen verschillen in eiwitstructuur. Sommige zijn volledig humaan (adalimumab, golimumab), andere deels dierlijk (infliximab: chimeer). Voorbeelden: infliximab, etanercept, adalimumab, certolizumab pegol, golimumab.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image13AntiTNFStructurenSummary
