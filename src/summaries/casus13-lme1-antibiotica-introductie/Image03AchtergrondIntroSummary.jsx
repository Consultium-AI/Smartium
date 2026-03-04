import { History } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03AchtergrondIntroSummary = ({ standalone = true }) => {
  const toc = [{ id: 'achtergrond', title: 'Achtergrond', icon: History }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Achtergrond"
      description="Introductie op de geschiedenis en werking van antibiotica."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 3"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image03"
    >
      <section id="achtergrond" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Achtergrond</h2>
        <p className="text-slate-700 leading-relaxed">
          In dit hoofdstuk gaan we in op de geschiedenis en de werking van antibiotica. Je leert hoe antibiotica zijn ontdekt en hoe ze op bacteriën inwerken.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image03AchtergrondIntroSummary
