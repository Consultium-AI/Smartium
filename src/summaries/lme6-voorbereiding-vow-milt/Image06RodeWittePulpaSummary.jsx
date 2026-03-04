import { Circle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06RodeWittePulpaSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'pulpa', title: 'Rode en witte pulpa', icon: Circle },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Rode en witte pulpa"
      description="Onderscheid tussen rode en witte pulpa in de milt."
      caseLabel="Week 5 Casus 7 LME 6: Afbeelding 6"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme6-voorbereiding-vow-milt-image06"
    >
      <section id="pulpa" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Circle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Rode en witte pulpa
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            In de milt kan onderscheid worden gemaakt tussen rode en witte pulpa.
          </p>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
              <h4 className="font-bold text-rose-800 mb-2">Rode pulpa</h4>
              <p className="text-rose-700 text-sm mb-2">
                Diffuse, minder georganiseerde, sponsachtige netwerk. Lichter roze-paars gekleurd bij microscopie.
              </p>
              <p className="text-rose-700 text-sm m-0">
                Bestaat uit veneuze sinussen en rode pulpa parenchym (miltstrengen van Billroth).
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">Witte pulpa</h4>
              <p className="text-slate-700 text-sm mb-2">
                Duidelijke, compacte, donker gekleurde cirkel- of ovaalvormige structuren (lymfoïde follikels).
              </p>
              <p className="text-slate-700 text-sm m-0">
                Gebied waar lymfocyten georganiseerd aanwezig zijn (B- en T-lymfocyten).
              </p>
            </div>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image06RodeWittePulpaSummary
