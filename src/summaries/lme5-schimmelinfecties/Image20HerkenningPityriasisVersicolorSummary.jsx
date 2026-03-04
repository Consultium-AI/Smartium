import { Droplets } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image20HerkenningPityriasisVersicolorSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'pityriasis', title: 'Pityriasis versicolor', icon: Droplets },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Herkenning – Pityriasis versicolor"
      description="Oppervlakkige schimmelinfectie met hypopigmentatie, vaak op romp en bovenste extremiteiten."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 20"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image20"
    >
      <section id="pityriasis" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Droplets className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Pityriasis versicolor
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Schimmelinfectie: juist</h4>
            <p className="text-primary-700 text-sm m-0">
              Dit is pityriasis versicolor (ook wel tinea versicolor genoemd). Het presenteert zich vaak als hypopigmentatie (lichtere plekken) op de romp en bovenste extremiteiten, met fijne schilfering. Het wordt veroorzaakt door Malassezia gisten.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Kernpunten</h4>
            <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
              <li>Hypopigmentatie (lichtere plekken op donkere huid)</li>
              <li>Typisch op romp en bovenste extremiteiten</li>
              <li>Fijne schilfering</li>
              <li>Veroorzaakt door Malassezia (gist, geen dermatofyt)</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image20HerkenningPityriasisVersicolorSummary
