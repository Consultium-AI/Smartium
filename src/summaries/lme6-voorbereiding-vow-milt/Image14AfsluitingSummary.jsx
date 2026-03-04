import { CheckCircle2 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14AfsluitingSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'afsluiting', title: 'Afsluiting', icon: CheckCircle2 },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Afsluiting – Voorbereiding VOW Milt"
      description="Zelfreflectie: opbouw milt, bloedcirculatie en samenstelling witte/rode pulpa."
      caseLabel="Week 5 Casus 7 LME 6: Afbeelding 14"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme6-voorbereiding-vow-milt-image14"
    >
      <section id="afsluiting" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Afsluiting
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Zelfreflectie</h4>
            <p className="text-primary-700 text-sm mb-3">Ga voor jezelf na of je een goed beeld hebt van:</p>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>De <strong>opbouw van de milt</strong></li>
              <li>Hoe de <strong>bloedcirculatie</strong> van de milt in elkaar zit en wat het verschil is tussen de open en gesloten bloedcirculatie</li>
              <li>Uit welke structuren de <strong>witte en de rode pulpa</strong> zijn opgebouwd</li>
            </ul>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Tip</h4>
            <p className="text-teal-700 text-sm m-0">
              Probeer of je zonder afbeelding kunt aangeven hoe de bloedcirculatie van de milt in elkaar zit. Dit helpt om de preparaten tijdens het VOW Milt beter te begrijpen.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image14AfsluitingSummary
