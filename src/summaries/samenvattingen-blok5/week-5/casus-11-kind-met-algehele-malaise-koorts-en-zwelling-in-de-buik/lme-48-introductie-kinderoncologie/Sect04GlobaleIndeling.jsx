export default function Sect04GlobaleIndeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Globale indeling van kinderkanker</h2>
      <p>Binnen de kinderoncologie worden diagnosen globaal verdeeld in drie groepen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Hematologie-oncologie</li>
        <li>Solide tumoren</li>
        <li>Neuro-oncologie</li>
      </ul>
      <p>Deze drie groepen komen ongeveer even vaak voor.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Globale indeling van kinderkanker</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Hoofdcategorie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hematologie-oncologie</td>
              <td className="px-4 py-3 align-top">leukemie, lymfoom, MDS</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Solide tumoren</td>
              <td className="px-4 py-3 align-top">
                neuroblastoom, retinoblastoom, niertumoren, levertumoren, bottumoren, wekedelensarcomen, kiemceltumoren
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Neuro-oncologie</td>
              <td className="px-4 py-3 align-top">hersentumoren</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Deze indeling is handig om kinderkanker als geheel te begrijpen. Je hoeft dus niet meteen alle losse tumoren uit het
        hoofd te kennen om de hoofdlijn te zien: kinderkanker bestaat uit een aantal duidelijk herkenbare groepen die samen
        ongeveer gelijk verdeeld zijn.
      </p>
    </div>
  )
}
