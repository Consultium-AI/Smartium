import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image28OefenvraagVijfdeZiekteSummary = () => {
  const tableOfContents = [
    { id: 'oefen', title: 'Oefenvraag vijfde ziekte', icon: HelpCircle },
  ]

  return (
    <SummaryLayout
      title="Oefenen – Vijfde ziekte"
      description="Klinische casus: differentiaaldiagnose bij rash beginnend op de wangen."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 28"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image28"
    >
      <section id="oefen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Casus – vijfde ziekte
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Typische presentatie</h4>
            <p className="text-primary-700 text-sm mb-2">
              Een 5-jarig meisje met lichte temperatuursverhoging (38,2°C) en een rode huiduitslag die begon op de wangen en zich verspreidt naar armen en benen. Geen andere symptomen. Meerdere kinderen in de klas met soortgelijke klachten.
            </p>
            <p className="text-primary-700 text-sm m-0">
              <strong>Diagnose:</strong> Vijfde ziekte (erythema infectiosum).
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-amber-700 text-sm m-0">
              Kinderen met de vijfde ziekte zijn meestal niet erg ziek; het exantheem is hierbij het meest opvallende symptoom waarmee ouders naar de (huis)arts gaan.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image28OefenvraagVijfdeZiekteSummary
