import { Tag } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04BenamingenSummary = () => {
  const tableOfContents = [
    { id: 'benamingen', title: 'Benamingen dermatomycosen', icon: Tag },
  ]

  return (
    <SummaryLayout
      title="Benamingen – Dermatomycosen"
      description="Medische benamingen voor schimmelinfecties afhankelijk van de locatie op het lichaam."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 4"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image04"
    >
      <section id="benamingen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Tag className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Benamingen dermatomycosen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De medische benaming voor schimmelinfecties van de huid en nagels is afhankelijk van de locatie op het lichaam. Overlappend als groep worden ze dermatomycosen genoemd.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary-50">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-primary-800">Term</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-primary-800">Betekenis</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium text-slate-800">Tinea pedis</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">Schimmelinfectie van de voet</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium text-slate-800">Tinea corporis</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">Schimmelinfectie op het lichaam</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium text-slate-800">Tinea manus</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">Schimmelinfectie van de hand/vingers</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium text-slate-800">Onychomycose</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">Schimmelinfectie van de nagels</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-4 py-3 font-medium text-slate-800">Tinea capitis</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">Schimmelinfectie van de behaarde hoofdhuid</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-medium text-slate-800">Tinea barbae</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">Schimmelinfectie in de baardstreek</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Let op: Nederlandse termen</h4>
            <p className="text-amber-700 text-sm mb-2">
              De Nederlandse termen voor sommige schimmelinfecties zijn soms verwarrend:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
              <li><strong>Tinea corporis</strong> heet in de volksmond ringworm, maar wordt dus niet door een worm veroorzaakt! </li>
              <li><strong>Onychomycose</strong> wordt ook aangeduid als kalknagels</li>
              <li><strong>Tinea pedis</strong> wordt ook aangeduid als zwemmerseczeem</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image04BenamingenSummary
