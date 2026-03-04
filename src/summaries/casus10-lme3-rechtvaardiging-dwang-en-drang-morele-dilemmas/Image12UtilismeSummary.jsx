import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image12UtilismeSummary = ({ standalone = true }) => {
  const toc = [{ id: 'utilisme', title: 'Utilisme', icon: BarChart3 }]
  return (
    <SummaryLayout
      standalone={standalone}
 title="Utilisme" description="Het grootste goed voor het grootste aantal." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 12" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image12">
      <section id="utilisme" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Utilisme</h2>
        <p className="text-slate-700 mb-4">Utilistische argumenten voor vaccinatie: het voorkomt veel leed en sterfte. Het collectieve voordeel weegt op tegen individuele bezwaren.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image12UtilismeSummary
