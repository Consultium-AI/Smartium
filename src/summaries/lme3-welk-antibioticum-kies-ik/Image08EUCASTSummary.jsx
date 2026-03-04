import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08EUCASTSummary = ({ standalone = true }) => {
  const toc = [{ id: 'eucast', title: 'EUCAST', icon: BarChart3 }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Gevoeligheid EUCAST"
      description="EUCAST richtlijnen voor gevoeligheidsinterpretatie."
      caseLabel="Week 5 Casus 9 LME 3: Afbeelding 8"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=lme3-welk-antibioticum-kies-ik-image08"
    >
      <section id="eucast" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">EUCAST</h2>
        <p className="text-slate-700">In Europa EUCAST. Breakpoints op in vitro en PK/PD data. Voorbeeld: E. coli amoxicilline MIC 2, MIC kleiner of gelijk 8 is S.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image08EUCASTSummary
