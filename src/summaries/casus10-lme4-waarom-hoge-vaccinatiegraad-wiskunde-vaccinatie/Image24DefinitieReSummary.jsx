import { Hash } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image24DefinitieReSummary = ({ standalone = true }) => {
  const toc = [{ id: 'definitiere', title: 'Definitie Re', icon: Hash }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Definitie van het effectief reproductiegetal Re"
      description="Re = gemiddeld aantal secundaire besmettingen in een niet meer volledig vatbare populatie."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 24"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image24"
    >
      <section id="definitiere" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Re (effectief R)</h2>
        <p className="text-slate-700 mb-4">Re = het gemiddeld aantal secundaire besmettingen per primair geval in een <strong>niet meer volledig vatbare</strong> populatie <strong>over de tijd</strong>.</p>
        <p className="text-slate-700 mb-4">Aan het begin (t = 0, populatie volledig vatbaar): Re = R₀. Later is de populatie niet meer volledig vatbaar door immuniteit na infectie en/of bestrijdingsmaatregelen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image24DefinitieReSummary
