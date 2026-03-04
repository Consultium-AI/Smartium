import { FlaskConical } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image17QuizRabiesSummary = ({ standalone = true }) => {
  const toc = [{ id: 'rabies', title: 'Rabies – passieve en actieve immunisatie', icon: FlaskConical }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Quiz – Rabies"
      description="Behandeling bij mogelijke blootstelling aan rabies."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 17"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image17"
    >
      <section id="rabies" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Rabies – post-expositieprofylaxe</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Bij mogelijke blootstelling aan het rabiësvirus (bijvoorbeeld door een beet van een besmet dier) is snelle actie vereist. Rabies is vrijwel altijd dodelijk zodra symptomen optreden. De juiste benadering bestaat uit een combinatie van passieve en actieve immunisatie.
        </p>
        <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
          <h4 className="font-bold text-emerald-800 mb-2">Behandeling</h4>
          <p className="text-emerald-700 text-sm mb-2">Onmiddellijk toedienen van:</p>
          <ul className="list-disc pl-6 space-y-1 text-emerald-700 text-sm">
            <li><strong>Rabies-immunoglobulinen</strong> (passieve immunisatie) – voor directe neutralisatie van het virus</li>
            <li><strong>Rabiësvaccin</strong> (actieve immunisatie) – om langdurige bescherming op te bouwen</li>
          </ul>
          <p className="text-emerald-700 text-sm mt-2">Wachten tot symptomen optreden is geen optie; dan is de ziekte niet meer te behandelen.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image17QuizRabiesSummary
