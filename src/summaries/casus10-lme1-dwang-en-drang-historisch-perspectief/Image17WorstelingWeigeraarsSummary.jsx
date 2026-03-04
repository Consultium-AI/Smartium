import { Heart } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image17WorstelingWeigeraarsSummary = ({ standalone = true }) => {
  const toc = [{ id: 'worsteling', title: 'Worsteling weigeraars', icon: Heart }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Worsteling weigeraars"
      description="Staphorst 1971, Kier Bouman, horizontale vs verticale verantwoordelijkheid."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 17"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image17"
    >
      <section id="worsteling" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Worsteling van weigeraars</h2>
        <p className="text-slate-700 mb-4">In Staphorst in 1971 illustreerde Kier Bouman de worsteling van weigeraars: horizontale verantwoordelijkheid (naastenliefde, bescherming van anderen) versus verticale verantwoordelijkheid (gehoorzaamheid aan God). Beide perspectieven kunnen botsen bij vaccinatie.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image17WorstelingWeigeraarsSummary
