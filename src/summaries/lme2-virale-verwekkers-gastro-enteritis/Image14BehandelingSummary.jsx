import { HeartPulse } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14BehandelingSummary = () => {
  const tableOfContents = [
    { id: 'behandeling', title: 'Behandeling virale gastro-enteritis', icon: HeartPulse },
  ]

  return (
    <SummaryLayout
      title="Behandeling virale gastro-enteritis"
      description="Supportive care, rehydratie en wanneer ziekenhuisopname nodig is."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 14"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image14"
    >
      <section id="behandeling" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <HeartPulse className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Behandeling virale gastro-enteritis
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Virale gastro-enteritis is een zelfbeperkende aandoening. Er is geen antivirale behandeling; de behandeling is <strong>supportive</strong>.
          </p>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Rehydratie</h4>
            <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
              <li><strong>Orale rehydratieoplossing (ORS)</strong> – eerste keuze bij milde tot matige dehydratie</li>
              <li><strong>Intraveneuze rehydratie</strong> – bij ernstige dehydratie, bewustzijnsstoornissen, of wanneer orale inname niet mogelijk is (bijv. aanhoudend braken)</li>
            </ul>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Overige maatregelen</h4>
            <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
              <li>Geen antibiotica – niet effectief bij virale infectie</li>
              <li>Antiemetica kunnen overwogen worden bij hevig braken (met name bij kinderen voorzichtig)</li>
              <li>Voedingsadvies: doorgaan met voeding zodra dit mogelijk is</li>
            </ul>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Indicaties ziekenhuisopname</h4>
            <p className="text-rose-700 text-sm m-0">
              Ernstige dehydratie, aanhoudend braken, neonaten, immuungecompromitteerde patienten, of onvoldoende respons op orale rehydratie.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image14BehandelingSummary
