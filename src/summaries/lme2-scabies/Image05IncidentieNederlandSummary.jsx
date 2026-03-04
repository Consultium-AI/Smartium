import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05IncidentieNederlandSummary = () => {
  const tableOfContents = [
    { id: 'incidentie', title: 'Incidentie scabiës', icon: BarChart3 },
  ]

  return (
    <SummaryLayout
      title="Incidentie scabiës – Nederland"
      description="Wereldwijd stijgende incidentie; in Nederland vooral jong volwassenen (20-25 jaar)."
      caseLabel="Week 5 Casus 7 LME 2: Afbeelding 5"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-scabies-image05"
    >
      <section id="incidentie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Incidentie scabiës
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De incidentie van scabiës <strong>stijgt wereldwijd</strong>.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Nederland</h4>
            <p className="text-amber-700 m-0">
              In Nederland betreft het <strong>voornamelijk jong volwassenen (20-25 jaar)</strong>, niet vooral kinderen. Dit hangt samen met de leefsituatie (studentenhuizen, gemeenschappelijke woonruimtes) waar nauw huidcontact en gedeelde ruimtes de transmissie bevorderen.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image05IncidentieNederlandSummary
