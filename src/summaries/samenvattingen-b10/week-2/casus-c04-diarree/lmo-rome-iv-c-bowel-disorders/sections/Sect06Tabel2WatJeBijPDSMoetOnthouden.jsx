export default function Sect06Tabel2WatJeBijPDSMoetOnthouden() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Wat je bij PDS moet onthouden
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Begrip</th>
              <th className="px-4 py-3 font-semibold">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">PDS</td>
              <td className="px-4 py-3 align-top">Prikkelbaredarmsyndroom</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Kernsymptomen</td>
              <td className="px-4 py-3 align-top">De belangrijkste klachten die bij PDS horen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Diagnostische criteria</td>
              <td className="px-4 py-3 align-top">
                De afspraken waaraan de klachten moeten voldoen om PDS te kunnen vaststellen
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Rome IV</td>
              <td className="px-4 py-3 align-top">De indeling en criteria die hiervoor worden gebruikt</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
