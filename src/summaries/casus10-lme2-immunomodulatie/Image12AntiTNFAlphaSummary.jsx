import { Target } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image12AntiTNFAlphaSummary = ({ standalone = true }) => {
  const toc = [
    { id: 'antiTNF', title: 'Anti-TNF-alpha', icon: Target },
    { id: 'pleiotroop', title: 'Pleiotroop effect TNF-alpha', icon: Target },
  ]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Anti-TNF-alpha"
      description="Anti-TNF-alpha als biological en het pleiotrope effect van TNF-alpha."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 12"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image12"
    >
      <section id="antiTNF" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Anti-TNF-alpha</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Anti-TNF-alpha is een voorbeeld van een biological die vaak wordt gebruikt bij aandoeningen als reumatoïde artritis, inflammatoire darmziekten en psoriasis. Deze medicatie remt de TNF-alpha pathway en heeft daarmee een sterk immuunmodulerend effect.
        </p>
      </section>
      <section id="pleiotroop" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Pleiotroop effect van TNF-alpha</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          TNF-alpha heeft een pleiotroop effect: het induceert cytokinen en chemokinen, adhesiemoleculen, matrix metalloproteïnasen, angiogenese en acute-fase-eiwitten. Het verhoogt de rekrutering van inflammatoire cellen naar ontstoken weefsel en draagt bij aan anemie, leucocytose en trombocytose. Samen leiden deze effecten tot ontsteking en weefselschade.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image12AntiTNFAlphaSummary
