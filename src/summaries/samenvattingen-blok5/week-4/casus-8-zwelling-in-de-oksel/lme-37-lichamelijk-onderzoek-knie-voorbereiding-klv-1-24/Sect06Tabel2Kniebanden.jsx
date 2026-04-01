export default function Sect06Tabel2Kniebanden() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tabel 2. Belangrijkste kniebanden en hun functie</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Band
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Ligging
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijkste functie
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Voorste kruisband (ACL)
              </td>
              <td className="px-3 py-3 align-top">In het gewricht</td>
              <td className="px-3 py-3 align-top">
                Voorkomt voorwaartse verschuiving van de tibia en helpt rotatiestabiliteit.
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Achterste kruisband (PCL)
              </td>
              <td className="px-3 py-3 align-top">In het gewricht</td>
              <td className="px-3 py-3 align-top">Voorkomt achterwaartse verschuiving van de tibia.</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Mediale collaterale band (MCL)
              </td>
              <td className="px-3 py-3 align-top">Binnenzijde</td>
              <td className="px-3 py-3 align-top">Geeft mediale stabiliteit en voorkomt valgusbeweging.</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Laterale collaterale band (LCL)
              </td>
              <td className="px-3 py-3 align-top">Buitenzijde</td>
              <td className="px-3 py-3 align-top">Geeft laterale stabiliteit en voorkomt varusbeweging.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
