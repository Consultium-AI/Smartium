export default function Sect05Tabel2Situaties() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Voorbeelden van situaties waarbij erfelijkheidsonderzoek past
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Situatie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Indicatie voor erfelijkheidsonderzoek
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Borstkanker in beide borsten, eerste tumor vóór 50 jaar</td>
              <td className="px-4 py-3 align-top">Ja</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Een tante met borstkanker op 80-jarige leeftijd</td>
              <td className="px-4 py-3 align-top">Nee</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Moeder met eierstokkanker</td>
              <td className="px-4 py-3 align-top">Ja</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Geen borstkanker in de familie</td>
              <td className="px-4 py-3 align-top">Nee</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">
                Zus met borstkanker op 53-jarige leeftijd én tante met borstkanker op 70-jarige leeftijd
              </td>
              <td className="px-4 py-3 align-top">Ja, als de familiebelasting in dezelfde tak past en de criteria worden gehaald</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
