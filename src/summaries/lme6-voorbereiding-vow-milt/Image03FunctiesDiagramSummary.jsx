import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03FunctiesDiagramSummary = () => {
  const tableOfContents = [
    { id: 'anatomie', title: 'Anatomie van de milt', icon: Activity },
  ]

  return (
    <SummaryLayout
      title="Functies van de milt – Anatomisch overzicht"
      description="Globale opbouw van de milt: capsule, trabeculae, rode en witte pulpa, vasculatuur."
      caseLabel="Week 5 Casus 7 LME 6: Afbeelding 3"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme6-voorbereiding-vow-milt-image03"
    >
      <section id="anatomie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Anatomisch overzicht van de milt
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Belangrijkste structuren</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li><strong>Capsule:</strong> buitenste beschermende laag</li>
              <li><strong>Trabeculae:</strong> bindweefseluitlopers die de milt in compartimenten verdelen</li>
              <li><strong>Arterie:</strong> miltarterie (aanvoerende slagader)</li>
              <li><strong>Vene:</strong> miltvene (afvoerende ader)</li>
              <li><strong>Vasculaire sinusoiden:</strong> bloedvaten in de rode pulpa voor bloedfiltratie</li>
              <li><strong>Witte pulpa:</strong> lymfoïd weefsel voor immuunfunctie</li>
              <li><strong>Rode pulpa:</strong> grootste deel van de milt, bloedfiltratie en opslag</li>
            </ul>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Functionele componenten</h4>
            <p className="text-teal-700 text-sm m-0">
              De milt heeft een rode pulpa (bloedfiltratie, verwijdering van oude erytrocyten, bloedopslag) en een witte pulpa (lymfoïd weefsel voor immuunresponsen).
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image03FunctiesDiagramSummary
