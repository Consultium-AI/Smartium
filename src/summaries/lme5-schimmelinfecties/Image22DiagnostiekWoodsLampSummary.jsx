import { Lightbulb } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image22DiagnostiekWoodsLampSummary = () => {
  const tableOfContents = [
    { id: 'woods', title: "Wood's lamp", icon: Lightbulb },
  ]

  return (
    <SummaryLayout
      title="Diagnostiek – Wood's lamp"
      description="UVA-licht voor fluorescentie van schimmels en gisten."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 22"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image22"
    >
      <section id="woods" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Wood&apos;s lamp
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Principe</h4>
            <p className="text-primary-700 text-sm m-0">
              Een Wood&apos;s lamp gebruikt UVA licht. Schimmels en gisten lichten in verschillende kleuren op zoals geel, groen of rood.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Kernpunten</h4>
            <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
              <li>Gebruikt UVA licht</li>
              <li>Fluorescentie: geel, groen of rood</li>
              <li>Kan helpen bij bepaalde schimmelinfecties (bijv. Microsporum bij tinea capitis)</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image22DiagnostiekWoodsLampSummary
