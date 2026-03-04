import { Baby } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06KindEnOudersSummary = () => {
  const toc = [{ id: 'kind', title: 'Kind en ouders', icon: Baby }]
  return (
    <SummaryLayout
      title="Kind en ouders"
      description="Wie beslist over vaccinatie van het kind?"
      caseLabel="Week 5 Casus 10 LME 3: Afbeelding 6"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image06"
    >
      <section id="kind" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Kind en ouders</h2>
        <p className="text-slate-700 mb-4">Ouders hebben in Nederland het recht om te beslissen over vaccinatie van hun kind. Het kind heeft nog geen wilsbekwame autonomie. Dit creëert een moreel dilemma wanneer ouders weigeren.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image06KindEnOudersSummary
