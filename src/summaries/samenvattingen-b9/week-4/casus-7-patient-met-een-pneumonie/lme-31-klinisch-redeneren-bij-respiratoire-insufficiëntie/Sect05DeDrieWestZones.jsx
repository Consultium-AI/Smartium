export default function Sect05DeDrieWestZones() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De drie West-zones</h2>
      <p>Door dit verschil in ventilatie en perfusie kun je de long indelen in drie zones:</p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. V/Q-verhouding in de longzones</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Zone</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerk</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top font-semibold">Zone 1: longtop</td>
                <td className="px-4 py-3 align-top">
                  te veel ventilatie ten opzichte van perfusie → <strong>V/Q &gt; 1</strong>
                </td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top font-semibold">Zone 2: ongeveer ter hoogte van de 3e rib</td>
                <td className="px-4 py-3 align-top">
                  ideale matching → <strong>V/Q = 1</strong>
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top font-semibold">Zone 3: longbasis</td>
                <td className="px-4 py-3 align-top">
                  te veel perfusie ten opzichte van ventilatie → <strong>V/Q &lt; 1</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Dus: de longtop heeft relatief meer ventilatie dan perfusie, terwijl de longbasis relatief meer perfusie heeft dan ventilatie.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: wat betekent een V/Q &gt; 1?  Mini-antwoord: er is relatief meer lucht dan bloed aanwezig; dat past bij een situatie richting dode ruimte.
        </p>
      </div>
    </div>
  )
}
