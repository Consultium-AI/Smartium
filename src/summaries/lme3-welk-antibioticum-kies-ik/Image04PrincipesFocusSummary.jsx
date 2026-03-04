import { Target } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04PrincipesFocusSummary = ({ standalone = true }) => {
  const tableOfContents = [{ id: 'focus', title: 'Focus van de infectie', icon: Target }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Principes – Focus van de infectie"
      description="Het bepalen van de infectiebron en doelorganen bij antibioticakeuze."
      caseLabel="Week 5 Casus 9 LME 3: Afbeelding 4"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-welk-antibioticum-kies-ik-image04"
    >
      <section id="focus" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Focus van de infectie</h2>
        </div>
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>Vragen: waar komen de klachten vandaan? Wat is het focus? Zijn er lokale of systemische klachten? Welke doelorganen wil je bereiken?</p>
          <p>Dit bepaalt welk middel en de toedieningswijze (oraal, parenteraal, lokaal). Goede anamnese en beeldvorming zijn nodig. Met kennis van het focus kun je bepalen welke verwekkers meest waarschijnlijk zijn.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image04PrincipesFocusSummary
