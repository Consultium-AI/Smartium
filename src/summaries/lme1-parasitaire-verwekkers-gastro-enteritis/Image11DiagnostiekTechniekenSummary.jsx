import { Microscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11DiagnostiekTechniekenSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'technieken', title: 'Diagnostische technieken', icon: Microscope },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Aanvullende diagnostiek naar darmparasieten"
      description="Technieken om darmparasieten aan te tonen en waarom kweek niet geschikt is."
      caseLabel="Week 5 Casus 9 LME 1: Afbeelding 11"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-parasitaire-verwekkers-gastro-enteritis-image11"
    >
      <section id="technieken" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Diagnostische technieken
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Welke technieken worden vaak gebruikt om darmparasieten aan te tonen?
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Microscopie</h4>
              <p className="text-teal-700 text-sm">
                Parasieten zijn eukaryoot en relatief groot. Ze zijn microscopisch (en soms macroscopisch) zichtbaar in ontlasting, in tegenstelling tot virussen en bacteriën.
              </p>
            </div>
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">DNA-amplificatie (PCR)</h4>
              <p className="text-amber-700 text-sm">
                Wordt frequent gebruikt vanwege hoge specificiteit, sensitiviteit en geschiktheid voor automatisering.
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Kweek is niet geschikt</h4>
            <p className="text-rose-700 text-sm m-0">
              Parasieten zijn vaak moeilijk te kweken, in tegenstelling tot bacteriën. Kweek is daarom geen geschikte methode voor het aantonen van darmparasieten.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image11DiagnostiekTechniekenSummary
