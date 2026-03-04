import { LayoutList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02MenuSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie thema', icon: LayoutList },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Menu – Parasitaire verwekkers van gastro-enteritis"
      description="Inleiding op de module: parasitaire oorzaken van diarree en diagnostiek."
      caseLabel="Week 5 Casus 9 LME 1: Afbeelding 2"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-parasitaire-verwekkers-gastro-enteritis-image02"
    >
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <LayoutList className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Introductie thema
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Module-context</h4>
            <p className="text-primary-700 text-sm mb-3">
              Deze e-module hoort bij het drieluik: Bacteriële, parasitaire en virale verwekkers van gastro-enteritis. In deze e-module komen de verschillende aspecten van parasitaire gastro-enteritis aan bod.
            </p>
            <p className="text-primary-700 text-sm m-0">
              De module bestaat uit twee hoofdstukken, die direct gekoppeld zijn aan één of twee leerdoelen.
            </p>
          </div>
          
          <div className="grid gap-3 sm:grid-cols-1">
            {[
              { num: 1, title: 'Wat zijn de meest voorkomende darmparasieten en welke klachten veroorzaken zij?' },
              { num: 2, title: 'Hoe kunnen darmparasieten aangetoond worden en wat zijn de belangrijkste verschillen ten opzichte van virale en bacteriële verwekkers van diarree?' },
            ].map((item) => (
              <div key={item.num} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                <span className="text-primary-600 font-bold">{item.num}.</span>
                <h4 className="font-semibold text-slate-800">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image02MenuSummary
