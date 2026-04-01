export default function Sect08MyelomaDefiningEvents() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Myeloma defining events</h2>
      <p>
        De diagnose symptomatisch multipel myeloom wordt mede gesteld op basis van myeloma defining events, afgekort MDE.
        Deze criteria zijn belangrijk omdat veel patiënten met een asymptomatische fase uiteindelijk binnen enkele jaren
        symptomen ontwikkelen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Myeloma defining events (MDE)</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                MDE
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Uitleg
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Serum free light chain ratio ≥100
              </td>
              <td className="px-4 py-3 align-top">
                sterke scheefgroei tussen betrokken en niet-betrokken vrije lichte ketens
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Plasmacelpopulatie in beenmerg ≥60%
              </td>
              <td className="px-4 py-3 align-top">zeer hoge plasmacelbezitting van het beenmerg</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                {'>'}1 focale laesie op MRI
              </td>
              <td className="px-4 py-3 align-top">elke focale laesie moet ≥5 mm zijn</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Ongeveer 70–80% van de patiënten met deze criteria ontwikkelt binnen 2 jaar symptomatisch multipel myeloom.
      </p>
    </div>
  )
}
