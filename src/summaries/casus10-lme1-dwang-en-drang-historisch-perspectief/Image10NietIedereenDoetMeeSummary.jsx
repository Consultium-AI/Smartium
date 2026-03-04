import { Users } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10NietIedereenDoetMeeSummary = () => {
  const toc = [{ id: 'weigeraars', title: 'Niet iedereen doet mee', icon: Users }]
  return (
    <SummaryLayout
      title="Niet iedereen doet mee"
      description="Religieuze weigeraars en polio-uitbraken jaren 60."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 10"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image10"
    >
      <section id="weigeraars" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Niet iedereen doet mee</h2>
        <p className="text-slate-700 mb-4">Religieuze weigeraars in gebieden als Elspeet, Tholen en Staphorst namen geen deel aan het polio-vaccinatieprogramma. Dit leidde tot lokale uitbraken en maatschappelijke spanningen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image10NietIedereenDoetMeeSummary
