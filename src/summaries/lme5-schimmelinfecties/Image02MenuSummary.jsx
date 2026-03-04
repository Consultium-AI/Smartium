import { LayoutList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02MenuSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'intro', title: 'Module-overzicht', icon: LayoutList },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Menu – Schimmelinfecties"
      description="Inleiding op de module: verdieping in schimmelinfecties van de huid, nagels en haren."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 2"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image02"
    >
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <LayoutList className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Module-overzicht
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Introductie thema</h4>
            <p className="text-primary-700 text-sm m-0">
              Met deze e-module ga je je verdiepen in schimmelinfecties van de huid, nagels en haren.
            </p>
          </div>
          
          <div className="grid gap-3 sm:grid-cols-1">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <span className="text-primary-600 font-bold">1.</span>
              <div>
                <h4 className="font-semibold text-slate-800">Inleiding</h4>
              </div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <span className="text-primary-600 font-bold">2.</span>
              <div>
                <h4 className="font-semibold text-slate-800">Voorkomen</h4>
              </div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <span className="text-primary-600 font-bold">3.</span>
              <div>
                <h4 className="font-semibold text-slate-800">Klachten en symptomen</h4>
              </div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <span className="text-primary-600 font-bold">4.</span>
              <div>
                <h4 className="font-semibold text-slate-800">Herkenning</h4>
              </div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <span className="text-primary-600 font-bold">5.</span>
              <div>
                <h4 className="font-semibold text-slate-800">Diagnostiek</h4>
              </div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <span className="text-primary-600 font-bold">6.</span>
              <div>
                <h4 className="font-semibold text-slate-800">Behandeling</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image02MenuSummary
