import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image16KliniekTabelSummary = () => {
  const tableOfContents = [
    { id: 'tabel', title: 'Klinische presentatie', icon: Stethoscope },
    { id: 'sepsis', title: 'Sepsis vs meningitis', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Klinische presentatie – Otitis, sinusitis, meningitis"
      description="Vergelijking van symptomen bij pneumokokken- en meningokokkeninfecties."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 16"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image16"
    >
      <section id="tabel" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Klinische presentatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Aandoening</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Pneumokokken</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Meningokokken</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Otitis media</td><td className="border border-slate-200 pl-3 py-2">Oorpijn, koorts, gehoorverlies; meestal mild</td><td className="border border-slate-200 pl-3 py-2">Zeer zeldzaam</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Sinusitis</td><td className="border border-slate-200 pl-3 py-2">Verstopte neus, purulente uitvloed, gezichtspijn, koorts; meestal mild</td><td className="border border-slate-200 pl-3 py-2">Zeer zeldzaam</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Meningitis</td><td className="border border-slate-200 pl-3 py-2">Koorts, hoofdpijn, stijve nek, fotofobie; zeer hoog sterfterisico</td><td className="border border-slate-200 pl-3 py-2">Idem + <strong>petechiën</strong></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="sepsis" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Sepsis vs meningitis
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De klachtenpresentatie tussen sepsis en meningitis is <strong>zeer vergelijkbaar</strong>. Sepsis door bacteriëmie gaat hand in hand met bacteriën die de bloed-hersenbarrière passeren. Meningitisklachten zijn vaak een combinatie van het sepsisbeeld en neurologische prikkeling door infectie in het brein. Meningitis zonder sepsis komt ook voor; dan staan de neurologische klachten meer op de voorgrond.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image16KliniekTabelSummary
