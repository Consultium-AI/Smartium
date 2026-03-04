import { Layers } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07RodePulpaStructurenSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'rode-pulpa', title: 'Samenstelling rode pulpa', icon: Layers },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Rode pulpa – Samenstelling"
      description="De rode pulpa bestaat uit veneuze sinussen en rode pulpa parenchym (miltstrengen van Billroth)."
      caseLabel="Week 5 Casus 7 LME 6: Afbeelding 7"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme6-voorbereiding-vow-milt-image07"
    >
      <section id="rode-pulpa" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Welke structuren vormen de rode pulpa?
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Correcte antwoorden</h4>
            <p className="text-primary-700 text-sm mb-3">
              De rode pulpa vormt het grootste deel van de milt, en bestaat uit open bloedsinussen met daartussen het parenchym van de rode pulpa parenchym, ook wel miltstrengen of strengen van Billroth genoemd.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Rode pulpa parenchym / miltstrengen</li>
              <li>Veneuze sinus</li>
            </ul>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Niet tot de rode pulpa</h4>
            <p className="text-amber-700 text-sm m-0">
              T-celgebied, centrale arteriole, marginale zone en follikel behoren tot de witte pulpa.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image07RodePulpaStructurenSummary
