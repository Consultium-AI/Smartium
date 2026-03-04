import { Layers } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08WittePulpaStructurenSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'witte-pulpa', title: 'Samenstelling witte pulpa', icon: Layers },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Witte pulpa – Samenstelling"
      description="De witte pulpa bestaat uit T-celgebied, follikel en marginale zone."
      caseLabel="Week 5 Casus 7 LME 6: Afbeelding 8"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme6-voorbereiding-vow-milt-image08"
    >
      <section id="witte-pulpa" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Welke structuren vormen de witte pulpa?
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Correcte antwoorden</h4>
            <p className="text-primary-700 text-sm mb-3">
              De witte pulpa is het gebied van de milt waar lymfocyten georganiseerd aanwezig zijn. Hier bevinden zich vooral B- en T-lymfocyten. De witte pulpa is georganiseerd rondom de centrale arteriolen, die omgeven worden door een soort manchet van T-lymfocyten. De centrale arteriolen maken strikt gezien dus geen deel uit van de witte pulpa, maar bevinden zich wel in dit gebied. B-lymfocyten zijn aanwezig in de follikels, en in de marginale zone.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>T-celgebied</li>
              <li>Marginale zone</li>
              <li>Follikel</li>
            </ul>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Let op</h4>
            <p className="text-amber-700 text-sm m-0">
              De centrale arteriole bevindt zich in het witte pulpa-gebied maar maakt strikt gezien geen deel uit van de witte pulpa. Rode pulpa parenchym en veneuze sinus behoren tot de rode pulpa.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image08WittePulpaStructurenSummary
