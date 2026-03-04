import { MessageCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image15ReflectieSummary = ({ standalone = true }) => {
  const toc = [{ id: 'reflectie', title: 'Reflectie', icon: MessageCircle }]
  return (
    <SummaryLayout
      standalone={standalone}
 title="Reflectie" description="Terugblik op morele dilemma's." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 15" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image15">
      <section id="reflectie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Reflectie</h2>
        <p className="text-slate-700 mb-4">Reflecteer op je eigen positie: hoe zou jij omgaan met vaccinatieweigering? Welke waarden zijn voor jou leidend?</p>
      </section>
    </SummaryLayout>
  )
}

export default Image15ReflectieSummary
