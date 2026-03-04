import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image15HerkenningImpetigoSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'impetigo', title: 'Impetigo (geen schimmel)', icon: AlertTriangle },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Herkenning – Impetigo/krentenbaard (geen schimmel)"
      description="Impetigo: bacteriële infectie met gelige korsten, veroorzaakt door Staphylococcus aureus."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 15"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image15"
    >
      <section id="impetigo" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Impetigo (krentenbaard)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Geen schimmelinfectie</h4>
            <p className="text-amber-700 text-sm m-0">
              Dit is impetigo (krentenbaard). Kenmerkend hiervoor zijn de gelige korsten. Deze aandoening wordt veroorzaakt door Staphylococcus aureus, een gram-positieve bacterie.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Differentiële diagnose</h4>
            <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
              <li><strong>Impetigo:</strong> gelige korsten, bacterieel (S. aureus)</li>
              <li><strong>Schimmelinfectie:</strong> schilfering, geen gelige korsten</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image15HerkenningImpetigoSummary
