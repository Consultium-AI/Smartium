export default function Sect12Tabel5BehandelingHemofilie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Behandeling van hemofilie in het kort</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Middel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Werking
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Indicatie
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">FVIII-concentraat</td>
              <td className="px-4 py-3 align-top">Stijging van FVIII</td>
              <td className="px-4 py-3 align-top">Hemofilie A</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">FIX-concentraat</td>
              <td className="px-4 py-3 align-top">Stijging van FIX</td>
              <td className="px-4 py-3 align-top">Hemofilie B</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Desmopressine</td>
              <td className="px-4 py-3 align-top">Vrijmaken van FVIII en VWF uit endotheel</td>
              <td className="px-4 py-3 align-top">Milde hemofilie A</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Tranexaminezuur</td>
              <td className="px-4 py-3 align-top">Remt fibrinolyse</td>
              <td className="px-4 py-3 align-top">Vooral slijmvliesbloedingen of ingrepen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een belangrijke complicatie van behandeling van hemofilie is dat patiënten een remmer tegen vooral FVIII kunnen
        ontwikkelen.
      </p>
    </div>
  )
}
