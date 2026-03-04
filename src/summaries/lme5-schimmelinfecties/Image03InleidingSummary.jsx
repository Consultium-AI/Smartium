import { Info } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03InleidingSummary = () => {
  const tableOfContents = [
    { id: 'inleiding', title: 'Inleiding huidinfecties', icon: Info },
  ]

  return (
    <SummaryLayout
      title="Inleiding – Huidinfecties"
      description="Achtergrond over huidinfecties: oorzaken, factoren en verwekkers."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 3"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image03"
    >
      <section id="inleiding" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Info className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Inleiding huidinfecties
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Algemene achtergrond</h4>
            <p className="text-primary-700 text-sm mb-4">
              Huidinfecties komen bij ieder mens in het leven voor. Ernst en uitbreiding variëren enorm en hangen behalve van het veroorzakende micro-organisme af van de conditie van de huid, de staat van het huidmicrobioom, en van de immuunrespons van de gastheer.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Bij droogte, trauma of een huidziekte zoals eczeem is de huidbarrière verstoord en kan ook het microbioom uit evenwicht zijn.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Belangrijkste verwekkers</h4>
            <p className="text-teal-700 text-sm m-0">
              De belangrijkste verwekkers van huidinfecties zijn bacteriën, virussen, schimmels en gisten, en parasieten.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Focus van deze module</h4>
            <p className="text-amber-700 text-sm m-0">
              Deze module richt zich op dermatomycosen en dermatofyten – schimmelinfecties van de huid, nagels en haren.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image03InleidingSummary
