import { ArrowRight } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11OpenCirculatieBelangrijkSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'open', title: 'Open circulatie belangrijkst', icon: ArrowRight },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Open circulatie – Meest belangrijk"
      description="Bij de mens is de open bloedcirculatie het meest belangrijk."
      caseLabel="Week 5 Casus 7 LME 6: Afbeelding 11"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme6-voorbereiding-vow-milt-image11"
    >
      <section id="open" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Open circulatie bij de mens
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Kernpunt</h4>
            <p className="text-primary-700 text-sm m-0">
              Bij de mens is de open bloedcirculatie het meest belangrijk. Er zijn zelfs onderzoekers die zich afvragen of niet al het bloed via de open bloedcirculatie door de milt loopt.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image11OpenCirculatieBelangrijkSummary
