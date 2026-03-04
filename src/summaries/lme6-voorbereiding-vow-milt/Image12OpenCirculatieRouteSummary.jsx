import { ListOrdered } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image12OpenCirculatieRouteSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'route', title: 'Route open circulatie', icon: ListOrdered },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Route open circulatie"
      description="De volgorde van structuren via welke het bloed door de open circulatie de milt passeert."
      caseLabel="Week 5 Casus 7 LME 6: Afbeelding 12"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme6-voorbereiding-vow-milt-image12"
    >
      <section id="route" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <ListOrdered className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Route open bloedcirculatie (1 t/m 8)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Volgorde van structuren</h4>
            <ol className="list-decimal pl-6 space-y-1 text-primary-700 text-sm">
              <li>Miltarterie</li>
              <li>Trabekelarterie</li>
              <li>Centrale arteriole</li>
              <li>Penseelarteriole</li>
              <li>Rode pulpa parenchym</li>
              <li>Veneuze sinus</li>
              <li>Rode pulpa vene</li>
              <li>Miltvene</li>
            </ol>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Proces</h4>
            <p className="text-teal-700 text-sm mb-2">
              Nadat het bloed in het parenchym van de rode pulpa terecht is gekomen, wordt het gefilterd, waarna het weer terugstroomt de veneuze sinussen in.
            </p>
            <p className="text-teal-700 text-sm m-0">
              NB: er zijn ook penseelarteriolen die eindigen in de marginale zone, waar antigenen kunnen worden opgevangen en naar de witte pulpa worden getransporteerd.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image12OpenCirculatieRouteSummary
