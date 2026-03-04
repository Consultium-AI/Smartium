import { MessageCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image23MaatschappelijkDebatSummary = ({ standalone = true }) => {
  const toc = [{ id: 'maatschappelijk-debat', title: 'Maatschappelijk debat', icon: MessageCircle }]
  return (
    <SummaryLayout
      standalone={standalone}
 title="Maatschappelijk debat" description="Het maatschappelijke debat over vaccinatie en dwang." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 23" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image23">
      <section id="maatschappelijk-debat" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Maatschappelijk debat</h2>
        <p className="text-slate-700 mb-4">Het maatschappelijke debat over vaccinatie polariseert vaak. Verschillende perspectieven—individuele vrijheid versus collectieve bescherming—spelen een rol bij morele dilemma's rond dwang en drang.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image23MaatschappelijkDebatSummary
