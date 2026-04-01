export default function Sect07TherapeutischeBreedte() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Therapeutische breedte</h2>
      <p>
        De therapeutische breedte is het verschil tussen TCP en NTCP. Dit laat zien hoe groot het verschil is tussen de
        dosis die nodig is voor tumorcontrole en de dosis waarbij normaal weefsel schade oploopt.
      </p>
      <p>Radiosensitieve tumoren hebben een grote therapeutische breedte.</p>
      <p>Radioresistente tumoren hebben een kleine therapeutische breedte.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. TCP, NTCP en therapeutische breedte</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Begrip
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Klinische betekenis
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">TCP</td>
              <td className="px-3 py-3 align-top">Kans op tumorcontrole</td>
              <td className="px-3 py-3 align-top">Hoe groter, hoe beter de tumor reageert</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">NTCP</td>
              <td className="px-3 py-3 align-top">Kans op schade aan normaal weefsel</td>
              <td className="px-3 py-3 align-top">Hoe groter, hoe meer kans op complicaties</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Therapeutische breedte</td>
              <td className="px-3 py-3 align-top">Verschil tussen TCP en NTCP</td>
              <td className="px-3 py-3 align-top">Geeft aan hoe ruim de behandelruimte is</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
