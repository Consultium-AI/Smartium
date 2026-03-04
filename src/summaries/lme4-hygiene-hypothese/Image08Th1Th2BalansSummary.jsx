import { Scale } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08Th1Th2BalansSummary = () => {
  const tableOfContents = [
    { id: 'balans', title: 'Th1/Th2-balans', icon: Scale },
  ]

  return (
    <SummaryLayout
      title="Th1/Th2-balans in de hygiënehypothese"
      description="Verstoring van de balans tussen Th1 en Th2: verminderde Th1 en verhoogde Th2 activiteit bij allergie."
      caseLabel="Week 5 Casus 7 LME 4: Afbeelding 8"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme4-hygiene-hypothese-image08"
    >
      <section id="balans" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Scale className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Th1/Th2-balans
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Binnen de hygiënehypothese staat met name een verstoring in de balans tussen T-helper-1 cellen en T-helper-2 cellen centraal.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Aanname</h4>
            <p className="text-primary-700 text-sm mb-2">
              Er wordt veelal aangenomen dat een verminderd contact met pathogene bacteriën resulteert in een verminderde Th1-activiteit en een verhoogde Th2-activiteit.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Verhoogde activiteit van Th2-cellen is sterk geassocieerd met de ontwikkeling van allergische ziekte.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Visueel</h4>
            <p className="text-amber-700 text-sm m-0">
              Een wip illustreert de balans: Th1/Th17 (auto-immuunziekte) aan de ene kant, Th2 (allergie) aan de andere kant. Bij een verstoorde balans met verhoogde Th2 domineert allergie.
            </p>
          </div>
          
          <p className="text-slate-600 text-sm">
            Bron: Afdeling immunologie, Erasmus MC
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image08Th1Th2BalansSummary
