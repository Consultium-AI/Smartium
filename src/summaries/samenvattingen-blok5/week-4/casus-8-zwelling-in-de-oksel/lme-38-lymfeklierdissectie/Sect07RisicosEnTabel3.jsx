export default function Sect07RisicosEnTabel3() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Risico's en complicaties</h2>
      <p>
        Een lymfeklierdissectie kan verschillende complicaties geven. Het is handig om ze te verdelen in acute en
        chronische complicaties.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Complicaties na lymfeklierdissectie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type complicatie
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Acuut</td>
              <td className="px-3 py-3 align-top">Bloeding/hematoom, wondinfectie, seroom, zenuwschade</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Chronisch</td>
              <td className="px-3 py-3 align-top">Lymfoedeem, aanhoudende neurologische klachten, fibrose/keloïdvorming</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
