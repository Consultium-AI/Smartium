import { Layers } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05StructurenMiltSummary = () => {
  const tableOfContents = [
    { id: 'structuren', title: 'Structuren in de milt', icon: Layers },
  ]

  return (
    <SummaryLayout
      title="Structuren in de milt"
      description="Genummerde structuren in de milt: van miltarterie tot marginale zone."
      caseLabel="Week 5 Casus 7 LME 6: Afbeelding 5"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme6-voorbereiding-vow-milt-image05"
    >
      <section id="structuren" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Structuren in de milt
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary-50">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-primary-800">Nr.</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-primary-800">Structuur</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white"><td className="border border-slate-200 px-4 py-3 font-medium">1</td><td className="border border-slate-200 px-4 py-3">Aanvoerende miltarterie</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 font-medium">2</td><td className="border border-slate-200 px-4 py-3">Afvoerende miltvene</td></tr>
                <tr className="bg-white"><td className="border border-slate-200 px-4 py-3 font-medium">3</td><td className="border border-slate-200 px-4 py-3">Verzamelvene</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 font-medium">4</td><td className="border border-slate-200 px-4 py-3">Veneuze sinus</td></tr>
                <tr className="bg-white"><td className="border border-slate-200 px-4 py-3 font-medium">5</td><td className="border border-slate-200 px-4 py-3">Rode pulpa parenchym / miltstrengen</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 font-medium">6</td><td className="border border-slate-200 px-4 py-3">Kapsel</td></tr>
                <tr className="bg-white"><td className="border border-slate-200 px-4 py-3 font-medium">7</td><td className="border border-slate-200 px-4 py-3">Centrale arteriole</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 font-medium">8</td><td className="border border-slate-200 px-4 py-3">Follikel</td></tr>
                <tr className="bg-white"><td className="border border-slate-200 px-4 py-3 font-medium">9</td><td className="border border-slate-200 px-4 py-3">T-celgebied</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 font-medium">10</td><td className="border border-slate-200 px-4 py-3">Marginale zone</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-slate-600 text-sm m-0">
              Bron afbeelding: Nat Rev Immunol. 2005 Aug;5(8):606-16.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image05StructurenMiltSummary
