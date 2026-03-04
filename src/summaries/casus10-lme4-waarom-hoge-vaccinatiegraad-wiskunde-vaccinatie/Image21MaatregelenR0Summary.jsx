import { Shield } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image21MaatregelenR0Summary = ({ standalone = true }) => {
  const toc = [{ id: 'maatregelen', title: 'Maatregelen en R₀', icon: Shield }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Maatregelen en de parameters van R₀"
      description="Welke maatregelen beïnvloeden b, c of D?"
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 21"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image21"
    >
      <section id="maatregelen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Maatregelen en R₀</h2>
        <p className="text-slate-700 mb-4">R₀ = b × c × D. Een relatieve verandering in b, c of D geeft dezelfde relatieve verandering in R₀. Halvering van één parameter halveert R₀.</p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-red-50 rounded-xl border border-red-200">
            <strong>b</strong> (besmettingskans): afstand houden, vaccinatie, handen wassen
          </div>
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
            <strong>c</strong> (contacten): horeca sluiten, thuiswerken, geen evenementen
          </div>
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <strong>D</strong> (duur): opsporen en isoleren, intensief testen
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image21MaatregelenR0Summary
