import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image26RisicocommunicatieSummary = ({ standalone = true }) => {
  const toc = [{ id: 'risicocommunicatie', title: 'Risicocommunicatie', icon: HelpCircle }]
  return (
    <SummaryLayout
      standalone={standalone}
 title="Risicocommunicatie" description="Effectief communiceren over risico's van vaccinatie." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 26" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image26">
      <section id="risicocommunicatie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Risicocommunicatie</h2>
        <p className="text-slate-700 mb-4">Risicocommunicatie over vaccins moet eerlijk en begrijpelijk zijn. Angst voor bijwerkingen kan vaccinatieweigering versterken; transparante communicatie draagt bij aan vertrouwen en geïnformeerde keuzes.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image26RisicocommunicatieSummary
