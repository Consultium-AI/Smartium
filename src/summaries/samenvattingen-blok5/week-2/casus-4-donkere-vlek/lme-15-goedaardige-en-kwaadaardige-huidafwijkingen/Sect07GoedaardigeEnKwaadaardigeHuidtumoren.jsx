export default function Sect07GoedaardigeEnKwaadaardigeHuidtumoren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Goedaardige en kwaadaardige huidtumoren</h2>
      <p>Huidtumoren kunnen ontstaan uit verschillende celtypen. Er wordt onderscheid gemaakt tussen tumoren uitgaande van:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>keratinocyten en adnexen</li>
        <li>pigmentcellen</li>
        <li>endotheelcellen</li>
      </ul>
      <p>
        Bij benigne tumoren blijft de groei meer lokaal, terwijl maligne tumoren omliggend weefsel binnendringen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Voorbeelden van benigne en maligne huidtumoren</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Oorsprong
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Benigne voorbeelden
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Maligne voorbeelden
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Keratinocyten en adnexen</td>
              <td className="px-4 py-3 align-top">
                Talgklierhyperplasie, verruca seborrhoica, naevus sebaceus, syringoom, epidermale cyste
              </td>
              <td className="px-4 py-3 align-top">
                Eccrien carcinoom, pilomatrixcarcinoom, basaalcelcarcinoom, kerato-acanthoom, sebaceus carcinoom,
                plaveiselcelcarcinoom
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Pigmentcellen</td>
              <td className="px-4 py-3 align-top">Naevus naevocellularis</td>
              <td className="px-4 py-3 align-top">Melanoom</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Endotheelcellen</td>
              <td className="px-4 py-3 align-top">Angioma senilis, angiokeratomen, granuloma teleangiectaticum (pyogenicum)</td>
              <td className="px-4 py-3 align-top">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
