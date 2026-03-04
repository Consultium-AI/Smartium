import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08KlinischePresentatieSummary = () => {
  const tableOfContents = [
    { id: 'verwekkers', title: 'Belangrijke verwekkers', icon: Stethoscope },
    { id: 'verdeling', title: 'Verdeling meningitis 2014', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Klinische presentatie – Verwekkers van meningitis"
      description="Commensalen, virulente stammen en verdeling van bacteriële meningitisverwekkers in Nederland."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 8"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image08"
    >
      <section id="verwekkers" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Belangrijke verwekkers
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Meningokokken en pneumokokken zijn vaak <strong>commensalen</strong> in neus en keel; ze eliciteren meestal een beschermende immuunrespons. Soms kan een virulente stam via bacteriëmie de bloed-hersenbarrière passeren en meningitis veroorzaken – het precieze mechanisme is nog niet volledig begrepen.
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Grootste verwekker:</strong> <em>Streptococcus pneumoniae</em> – belangrijkste oorzaak van luchtweginfecties en bacteriële meningitis</li>
            <li><strong>Op 1 na grootste verwekker:</strong> <em>Neisseria meningitidis</em> – belangrijke oorzaak van meningitis bij jongeren</li>
          </ul>
          
          <p>
            Dankzij vaccinatieprogramma&apos;s zijn infecties door <em>H. influenzae</em>, <em>N. meningitidis</em> en <em>S. pneumoniae</em> sterk gedaald in recente decennia.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="verdeling" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Verdeling meningitis 2014 (Nederland)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Verwekker</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">S. pneumoniae</td><td className="border border-slate-200 pl-3 py-2">50%</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">N. meningitidis</td><td className="border border-slate-200 pl-3 py-2">14%</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">S. agalactiae</td><td className="border border-slate-200 pl-3 py-2">7%</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">H. influenzae</td><td className="border border-slate-200 pl-3 py-2">6%</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">L. monocytogenes</td><td className="border border-slate-200 pl-3 py-2">6%</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Overige</td><td className="border border-slate-200 pl-3 py-2">17%</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image08KlinischePresentatieSummary
