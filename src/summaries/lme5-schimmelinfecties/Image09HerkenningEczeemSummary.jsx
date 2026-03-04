import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09HerkenningEczeemSummary = () => {
  const tableOfContents = [
    { id: 'differentieel', title: 'Differentieel: eczeem', icon: AlertTriangle },
  ]

  return (
    <SummaryLayout
      title="Herkenning – Eczeem (geen schimmel)"
      description="Differentiatie tussen eczeem en schimmelinfectie: lokalisatie in flexuren en lichenificatie."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image09"
    >
      <section id="differentieel" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Eczeem vs. schimmelinfectie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Geen schimmelinfectie</h4>
            <p className="text-amber-700 text-sm m-0">
              Deze afbeelding toont eczeem: het past beter bij eczeem door de lokalisatie (flexuren). Het erytheem is niet echt scherp begrensd en er is geen randactiviteit. Een clue voor eczeem is de lichenificatie (vergroving) van de huid in de flexuren door het overmatig krabben.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Differentiële kenmerken</h4>
            <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
              <li><strong>Eczeem:</strong> flexuren, onscherp begrensd, geen randactiviteit, lichenificatie</li>
              <li><strong>Schimmelinfectie:</strong> scherp begrensd, randactiviteit, fijne schilfering aan de rand</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image09HerkenningEczeemSummary
