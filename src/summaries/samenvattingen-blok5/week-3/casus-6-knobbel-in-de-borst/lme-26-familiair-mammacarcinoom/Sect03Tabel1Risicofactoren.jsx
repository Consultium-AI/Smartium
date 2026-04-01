export default function Sect03Tabel1Risicofactoren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Risicofactoren voor borstkanker</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Modificeerbare risicofactoren
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Niet-modificeerbare risicofactoren
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">
                Hormoongebruik: tijdens gebruik van de anticonceptiepil is het risico licht verhoogd; na stoppen neemt het
                risico weer af
              </td>
              <td className="px-4 py-3 align-top">Dragerschap van een erfelijke aanleg voor borstkanker</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Alcoholgebruik</td>
              <td className="px-4 py-3 align-top">Vrouwelijk geslacht</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Weinig lichaamsbeweging</td>
              <td className="px-4 py-3 align-top">Dens borstklierweefsel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Roken</td>
              <td className="px-4 py-3 align-top">Vroege leeftijd van eerste menstruatie en late overgang</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Overgewicht</td>
              <td className="px-4 py-3 align-top" />
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Deze indeling is belangrijk: bij modificeerbare risicofactoren kan iemand zelf, eventueel met ondersteuning,
        invloed hebben. Bij niet-modificeerbare factoren is dat niet zo.
      </p>
    </div>
  )
}
