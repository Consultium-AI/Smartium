export default function Sect08Tabel2Signalen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Signalen bij T-celactivatie en anergie
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Situatie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Wat gebeurt er?
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Gevolg
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Signaal 1 + signaal 2</td>
              <td className="px-4 py-3 align-top">Antigeenherkenning mét co-stimulatie</td>
              <td className="px-4 py-3 align-top">Activatie van de T-cel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Alleen signaal 1</td>
              <td className="px-4 py-3 align-top">Antigeenherkenning zonder co-stimulatie</td>
              <td className="px-4 py-3 align-top">Anergie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Remmende signalen overheersen
              </td>
              <td className="px-4 py-3 align-top">Bijvoorbeeld via CTLA-4 of PD-1-route</td>
              <td className="px-4 py-3 align-top">Verminderde activatie / tolerantie</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
