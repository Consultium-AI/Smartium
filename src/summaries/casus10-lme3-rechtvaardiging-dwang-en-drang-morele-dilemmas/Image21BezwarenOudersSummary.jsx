import { User } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image21BezwarenOudersSummary = ({ standalone = true }) => {
  const toc = [{ id: 'bezwaren-ouders', title: 'Bezwaren ouders', icon: User }]
  return (
    <SummaryLayout
      standalone={standalone}
 title="Bezwaren ouders" description="Omgaan met bezwaren van ouders tegen vaccinatie." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 21" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image21">
      <section id="bezwaren-ouders" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Bezwaren ouders</h2>
        <p className="text-slate-700 mb-4">Ouders kunnen religieuze, filosofische of medische bezwaren hebben tegen vaccinatie. Het respecteren van deze bezwaren en tegelijk het belang van het kind bewaken, levert morele dilemma's op bij rechtvaardiging van dwang en drang.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image21BezwarenOudersSummary
