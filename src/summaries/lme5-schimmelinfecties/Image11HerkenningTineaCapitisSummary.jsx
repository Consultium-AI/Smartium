import { Circle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11HerkenningTineaCapitisSummary = () => {
  const tableOfContents = [
    { id: 'capitis', title: 'Tinea capitis', icon: Circle },
  ]

  return (
    <SummaryLayout
      title="Herkenning – Tinea capitis"
      description="Kenmerken van tinea capitis: pustels, kale plekken, afgebroken haren en korsten."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 11"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image11"
    >
      <section id="capitis" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Circle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Tinea capitis
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Schimmelinfectie: juist</h4>
            <p className="text-primary-700 text-sm mb-3">
              Dit is tinea capitis. Kenmerken van tinea capitis kunnen zijn:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Pustels</li>
              <li>Kale plekken met afgebroken haren</li>
              <li>Korsten</li>
              <li>Schilfering</li>
              <li>Minimale jeuk</li>
            </ul>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Complicatie</h4>
            <p className="text-amber-700 text-sm m-0">
              Bij een lang bestaande tinea capitis kan er sprake zijn van verlittekening.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image11HerkenningTineaCapitisSummary
