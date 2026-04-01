export default function Sect13Tabel3Testen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Testen bij primaire en secundaire hemostase
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Hemostase
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijke testen
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Waarvoor gebruik je ze?
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Primaire hemostase</td>
              <td className="px-4 py-3 align-top">Trombocyten, Von Willebrand factor, PFA</td>
              <td className="px-4 py-3 align-top">Beoordeling van bloedplaatjes en vWF</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Secundaire hemostase</td>
              <td className="px-4 py-3 align-top">PT, APTT</td>
              <td className="px-4 py-3 align-top">Beoordeling van de stollingscascade</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Fibrinolyse</td>
              <td className="px-4 py-3 align-top">D-dimeren</td>
              <td className="px-4 py-3 align-top">Beoordeling van afbraak van fibrine</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
