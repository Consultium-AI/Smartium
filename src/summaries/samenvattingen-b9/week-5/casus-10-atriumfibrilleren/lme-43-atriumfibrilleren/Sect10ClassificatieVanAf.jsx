export default function Sect10ClassificatieVanAf() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Classificatie van AF</h2>
      <p>
        De duur en het beloop van AF zijn belangrijk, omdat dit helpt bij het kiezen van de behandeling.
      </p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Classificatie</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Beschrijving</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Paroxysmaal AF</td>
              <td className="px-4 py-3 align-top">Stopt spontaan binnen 7 dagen, meestal binnen 48 uur</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Persisterend AF</td>
              <td className="px-4 py-3 align-top">Houdt langer aan dan 7 dagen of vereist cardioversie om te stoppen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Langdurig persisterend</td>
              <td className="px-4 py-3 align-top">Aanwezig gedurende meer dan 1 jaar</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Permanent AF</td>
              <td className="px-4 py-3 align-top">Continue aanwezigheid waarbij besloten is geen cardioversie meer te doen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Paroxysmaal AF wordt vaak uitgelokt door triggers uit de longvenen. Bij persisterende vormen is het atriale weefsel vaak al veranderd door remodeling. Bij permanent AF wordt het ritme geaccepteerd en ligt de focus op{' '}
        <span className="font-semibold">frequentiecontrole</span>.
      </p>
    </div>
  )
}
