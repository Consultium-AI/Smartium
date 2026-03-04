import { Shield } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07NationaleVeiligheidSummary = ({ standalone = true }) => {
  const toc = [{ id: 'veiligheid', title: 'Nationale veiligheid', icon: Shield }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Nationale veiligheid"
      description="Dalende vaccinatiegraad en staatscommissie 1937."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 7"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image07"
    >
      <section id="veiligheid" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Nationale veiligheid</h2>
        <p className="text-slate-700 mb-4">De dalende vaccinatiegraad na de suspensie van het pokkenbriefje leidde tot zorgen over nationale veiligheid. In 1937 werd een staatscommissie ingesteld om het vaccinatiebeleid te herzien.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image07NationaleVeiligheidSummary
