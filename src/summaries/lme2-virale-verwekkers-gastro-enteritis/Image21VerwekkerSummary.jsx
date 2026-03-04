import { Target } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image21VerwekkerSummary = () => {
  const tableOfContents = [{ id: 'verwekker', title: 'Meest waarschijnlijke verwekker', icon: Target }]
  return (
    <SummaryLayout
      title="Meest waarschijnlijke verwekker"
      description="Rotavirus als meest waarschijnlijke oorzaak bij Elise."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 21"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image21"
    >
      <section id="verwekker" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Meest waarschijnlijke verwekker</h2>
        </div>
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>Rotavirus. Argumenten: winter, jonge leeftijd, koorts, waterige diarree, langdurig braken, geen rotavirusvaccinatie.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image21VerwekkerSummary
