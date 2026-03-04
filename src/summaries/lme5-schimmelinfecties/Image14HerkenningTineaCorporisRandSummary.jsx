import { CircleDot } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14HerkenningTineaCorporisRandSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'randactiviteit', title: 'Randactiviteit tinea corporis', icon: CircleDot },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Herkenning – Tinea corporis met randactiviteit"
      description="Typische kenmerken: ronde scherpbegrensde plaque met randactiviteit en schilfering aan de rand."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 14"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image14"
    >
      <section id="randactiviteit" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <CircleDot className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Tinea corporis – randactiviteit
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Schimmelinfectie: juist</h4>
            <p className="text-primary-700 text-sm m-0">
              Dit is tinea corporis. Het is een ronde scherpbegrensde plaque waarbij je randactiviteit ziet (de rand is roder) en aan die rand schilfering.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Kernpunten</h4>
            <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
              <li>Ronde scherpbegrensde plaque</li>
              <li>Randactiviteit: de rand is roder dan het midden</li>
              <li>Schilfering aan de rand</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image14HerkenningTineaCorporisRandSummary
