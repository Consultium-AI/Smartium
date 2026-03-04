import { Footprints } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08HerkenningTineaPedisSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'herkenning', title: 'Herkenning tinea pedis', icon: Footprints },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Herkenning – Tinea pedis"
      description="Typische presentatie van tinea pedis (zwemmerseczeem) in de interdigitale ruimte."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 8"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image08"
    >
      <section id="herkenning" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Footprints className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Herkenning tinea pedis
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Typische presentatie</h4>
            <p className="text-primary-700 text-sm m-0">
              Op deze afbeelding is sprake van een schimmelinfectie: tinea pedis. Dit komt vaak door onvoldoende afdrogen interdigitaal, waardoor er maceraties (verweking) van de huid ontstaan en er wondjes kunnen komen. Dit is een goede voedingsbodem voor schimmels.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Belangrijke punten</h4>
            <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
              <li>Interdigitale ruimte (tussen de tenen) is typische locatie</li>
              <li>Maceratie: verweking van de huid door vocht</li>
              <li>Onvoldoende afdrogen bevordert het ontstaan</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image08HerkenningTineaPedisSummary
