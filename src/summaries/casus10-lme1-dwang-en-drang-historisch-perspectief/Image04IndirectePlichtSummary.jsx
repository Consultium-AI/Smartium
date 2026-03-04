import { FileText } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04IndirectePlichtSummary = ({ standalone = true }) => {
  const toc = [{ id: 'plicht', title: 'Indirecte plicht', icon: FileText }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Indirecte plicht"
      description="Wet 1872 en pokkenbriefje."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 4"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image04"
    >
      <section id="plicht" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Indirecte plicht</h2>
        <p className="text-slate-700">Wet op Besmettelijke Ziekten 1872: kinderen zonder pokkenvaccinatie mochten geen openbare school bezoeken. Bewijs via pokkenbriefje.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image04IndirectePlichtSummary
