export default function Sect06Tabel3BelangrijkeInflammasomen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tabel 3. Belangrijke inflammasomen</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Inflammasoom
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Typische activatie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeeld van prikkel of ziektebeeld
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">NLRP3</td>
              <td className="px-4 py-3 align-top">Geactiveerd door zowel gram-positieve als gram-negatieve bacteriën</td>
              <td className="px-4 py-3 align-top">Bijvoorbeeld Staphylococcus aureus</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">NLRC4</td>
              <td className="px-4 py-3 align-top">Geactiveerd door vooral gram-negatieve bacteriën</td>
              <td className="px-4 py-3 align-top">Salmonella, Legionella, Shigella</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Pyrine-inflammasoom</td>
              <td className="px-4 py-3 align-top">Geactiveerd door veranderingen in RhoA-activiteit</td>
              <td className="px-4 py-3 align-top">Verandering in RhoA, remming door bacteriële toxines</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
