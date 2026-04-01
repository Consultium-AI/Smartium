export default function Sect12Tabel4DeVierRs() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tabel 4. De vier R’s die bij fractionering een rol spelen</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Begrip
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Uitleg
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Repair</td>
              <td className="px-3 py-3 align-top">Herstel van stralingsschade tussen fracties</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Repopulatie</td>
              <td className="px-3 py-3 align-top">Opnieuw delen van cellen tussen fracties</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Redistributie</td>
              <td className="px-3 py-3 align-top">Verdelen van cellen over de celcyclus; G2/M is gevoelig</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Reoxygenatie</td>
              <td className="px-3 py-3 align-top">Verbetering van zuurstofvoorziening van hypoxische cellen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
