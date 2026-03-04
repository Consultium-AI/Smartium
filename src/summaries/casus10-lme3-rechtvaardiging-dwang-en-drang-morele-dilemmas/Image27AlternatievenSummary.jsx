import { Layers } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image27AlternatievenSummary = ({ standalone = true }) => {
  const toc = [{ id: 'alternatieven', title: 'Alternatieven', icon: Layers }]
  return (
    <SummaryLayout
      standalone={standalone}
 title="Alternatieven" description="Alternatieven voor dwang en drang bij vaccinatie." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 27" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image27">
      <section id="alternatieven" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Alternatieven</h2>
        <p className="text-slate-700 mb-4">Voordat dwang of drang wordt overwogen, verdienen minder ingrijpende alternatieven de voorkeur: voorlichting, gesprek, toegankelijkheid van vaccinatie en het wegnemen van praktische drempels.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image27AlternatievenSummary
