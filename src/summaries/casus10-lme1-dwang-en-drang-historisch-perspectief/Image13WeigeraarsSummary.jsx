import { UserX } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image13WeigeraarsSummary = ({ standalone = true }) => {
  const toc = [{ id: 'weigeraars', title: 'Weigeraars', icon: UserX }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Weigeraars"
      description="Polio-uitbraken 1963, 1966, 1971 en media-aandacht."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 13"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image13"
    >
      <section id="weigeraars" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Weigeraars en polio-uitbraken</h2>
        <p className="text-slate-700 mb-4">Polio-uitbraken in 1963, 1966 en 1971 troffen vooral gebieden met veel vaccinatieweigeraars. De media besteedden veel aandacht aan deze uitbraken.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image13WeigeraarsSummary
