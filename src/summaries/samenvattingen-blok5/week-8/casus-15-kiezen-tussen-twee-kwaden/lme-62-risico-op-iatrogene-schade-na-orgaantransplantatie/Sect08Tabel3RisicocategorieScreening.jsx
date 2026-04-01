export default function Sect08Tabel3RisicocategorieScreening() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Tabel 3. Risicocategorie en screeninginterval
      </h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Risicocategorie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Gemiddeld risico
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Advies voor screening
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Laag risico</td>
              <td className="px-4 py-3 align-top">ongeveer 2% 10-jaarsrisico</td>
              <td className="px-4 py-3 align-top">Screening binnen 10 jaar na transplantatie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Matig risico</td>
              <td className="px-4 py-3 align-top">ongeveer 14% 10-jaarsrisico</td>
              <td className="px-4 py-3 align-top">Screening binnen 2 jaar na transplantatie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hoog risico</td>
              <td className="px-4 py-3 align-top">ongeveer 32% 10-jaarsrisico</td>
              <td className="px-4 py-3 align-top">Screening binnen 1 jaar na transplantatie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Zeer hoog risico</td>
              <td className="px-4 py-3 align-top">ongeveer 75% 10-jaarsrisico</td>
              <td className="px-4 py-3 align-top">Screening binnen 6 maanden na transplantatie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De boodschap van deze indeling is dat het risico snel kan oplopen. Zeker bij patiënten die al een PCC hebben
        gehad, is de kans op een tweede PCC groot. De kans op een tweede plaveiselcelcarcinoom binnen 5 jaar is ongeveer
        74%.
      </p>
    </div>
  )
}
