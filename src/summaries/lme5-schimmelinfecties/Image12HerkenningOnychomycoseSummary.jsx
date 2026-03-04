import { Square } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image12HerkenningOnychomycoseSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'onychomycose', title: 'Onychomycose', icon: Square },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Herkenning – Onychomycose"
      description="Visuele kenmerken van onychomycose: gele verkleuring, olievlek en onycholyse."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 12"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image12"
    >
      <section id="onychomycose" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Square className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Onychomycose
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Schimmelinfectie: juist</h4>
            <p className="text-primary-700 text-sm m-0">
              Dit is onychomycose. Je ziet een gele verkleuring als een soort olievlek distaal aan de nagel. De gele verkleuring komt door onycholyse (loslating van de nagel).
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Kernpunten</h4>
            <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
              <li>Gele verkleuring distaal (olievlek-patroon)</li>
              <li>Onycholyse: loslating van de nagel van het nagelbed</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image12HerkenningOnychomycoseSummary
