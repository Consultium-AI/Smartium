import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image16HerkenningPsoriasisNagelsSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'psoriasis-nagels', title: 'Psoriasis nagels (geen schimmel)', icon: AlertTriangle },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Herkenning – Psoriasis nagels (geen schimmel)"
      description="Nagelpsoriasis: putjes in de nagel, geen schimmelinfectie."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 16"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image16"
    >
      <section id="psoriasis-nagels" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Psoriasis nagels
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Geen schimmelinfectie</h4>
            <p className="text-amber-700 text-sm m-0">
              Dit is psoriasis (putjes in de nagel). In blok 5 komt dermatologie aan bod en zullen jullie meer uitleg krijgen over psoriasis.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Differentiële diagnose</h4>
            <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
              <li><strong>Psoriasis nagels:</strong> putjes (pitting) in de nagel</li>
              <li><strong>Onychomycose:</strong> gele verkleuring, olievlek, onycholyse</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image16HerkenningPsoriasisNagelsSummary
