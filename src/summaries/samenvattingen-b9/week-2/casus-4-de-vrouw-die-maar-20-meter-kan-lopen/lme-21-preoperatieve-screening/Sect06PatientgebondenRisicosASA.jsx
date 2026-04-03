export default function Sect06PatientgebondenRisicosASA() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Patiëntgebonden risico’s: de ASA-classificatie</h2>
      <p>
        Om de algemene gezondheidstoestand van een patiënt te beoordelen, wordt vaak de ASA-classificatie gebruikt. Dit is een indeling in zes klassen op basis van de fysieke toestand van de patiënt. Klasse I staat voor een volledig gezonde patiënt. Klasse VI staat voor een hersendode patiënt waarvan de organen worden gebruikt in een donorprocedure.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. ASA-classificatie in grote lijnen</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">ASA-klasse</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">ASA I</td>
                <td className="px-4 py-3">Volledig gezonde patiënt</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">ASA II</td>
                <td className="px-4 py-3">Patiënt met milde systemische ziekte</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">ASA III</td>
                <td className="px-4 py-3">Patiënt met ernstige systemische ziekte</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">ASA IV</td>
                <td className="px-4 py-3">Patiënt met ernstige systemische ziekte die een constante bedreiging vormt voor het leven</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">ASA V</td>
                <td className="px-4 py-3">Moribunde patiënt die zonder operatie niet verwacht wordt te overleven</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">ASA VI</td>
                <td className="px-4 py-3">Hersendode patiënt voor orgaandonatie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Bij de voorbeelden zie je hoe dit in de praktijk wordt gebruikt. Een gezonde marathonloper zonder medicatie past bijvoorbeeld bij ASA I. Iemand met een fractuur na een val en verder weinig klachten past bij ASA II. Een vitale oudere met een eerder hartinfarct en beroerte past bij ASA III. Een patiënt met een zeer groot aorta-aneurysma en groot ruptuurrisico past bij ASA IV. Een ernstig gewond slachtoffer met klaplong en gescheurde milt past bij ASA V. Een patiënt na een grote hersenbloeding met infauste prognose past bij ASA VI.
      </p>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandacht-vraagje: Wat is de kern van de ASA-classificatie?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Het is een snelle manier om de algemene lichamelijke toestand en daarmee het operatierisico van de patiënt in te schatten.
        </p>
      </div>
    </div>
  )
}
