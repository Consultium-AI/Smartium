export default function Sect11Tabel5DcisVersusLcis() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 5. DCIS versus LCIS</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                DCIS
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                LCIS
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Locatie</td>
              <td className="px-4 py-3 align-top">In de ductus</td>
              <td className="px-4 py-3 align-top">Lobulair</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Myoepitheel</td>
              <td className="px-4 py-3 align-top">Aanwezig</td>
              <td className="px-4 py-3 align-top">Aanwezig</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Calcificaties</td>
              <td className="px-4 py-3 align-top">Vaak aanwezig</td>
              <td className="px-4 py-3 align-top">Meestal afwezig</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Presentatie</td>
              <td className="px-4 py-3 align-top">Vaak via screening, meestal niet palpabel</td>
              <td className="px-4 py-3 align-top">Vaak toevalsbevinding</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Verdeling</td>
              <td className="px-4 py-3 align-top">Meer gelokaliseerd</td>
              <td className="px-4 py-3 align-top">Vaak diffuus en bilateraal</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Beleid</td>
              <td className="px-4 py-3 align-top">Vaak chirurgische verwijdering</td>
              <td className="px-4 py-3 align-top">Vaak follow-up</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Risico op invasief carcinoom</td>
              <td className="px-4 py-3 align-top">Ja</td>
              <td className="px-4 py-3 align-top">Ja</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
