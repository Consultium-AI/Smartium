import { Users } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07GroepsimmuniteitSummary = ({ standalone = true }) => {
  const toc = [{ id: 'groep', title: 'Groepsimmuniteit', icon: Users }]
  return (
    <SummaryLayout
      standalone={standalone}

      title="Groepsimmuniteit"
      description="Het collectieve belang van vaccinatie."
      caseLabel="Week 5 Casus 10 LME 3: Afbeelding 7"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image07"
    >
      <section id="groep" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Groepsimmuniteit</h2>
        <p className="text-slate-700 mb-4">Groepsimmuniteit beschermt mensen die niet gevaccineerd kunnen worden. Dit collectieve belang wordt vaak aangevoerd om vaccinatie te stimuleren of te verplichten.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image07GroepsimmuniteitSummary
