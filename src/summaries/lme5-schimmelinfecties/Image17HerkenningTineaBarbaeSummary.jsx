import { Circle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image17HerkenningTineaBarbaeSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'barbae', title: 'Tinea barbae', icon: Circle },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Herkenning – Tinea barbae"
      description="Schimmelinfectie in de baardstreek met folliculaire pustels en folliculitis."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 17"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image17"
    >
      <section id="barbae" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Circle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Tinea barbae
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Schimmelinfectie: juist</h4>
            <p className="text-primary-700 text-sm mb-3">
              Dit is tinea barbae. Typisch voor schimmel in de baardregio is dat hier folliculaire pusteltjes bij kunnen ontstaan. Deze kun je kweken op schimmels.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Je ziet hier een folliculitis: ontsteking van de haarzakjes. Dit kan op basis van een schimmel, maar er zijn verschillende verwekkers/oorzaken mogelijk.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Kernpunten</h4>
            <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
              <li>Folliculaire pustels in de baardstreek</li>
              <li>Folliculitis: ontsteking van de haarzakjes</li>
              <li>Kweek kan schimmel aantonen; differentiaal diagnose breed</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image17HerkenningTineaBarbaeSummary
