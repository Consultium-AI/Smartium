export default function Sect08BeeldvormingSamengevat() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Beeldvorming samengevat: wat zie je waar?</h2>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Wat CT en PET/CT vooral laten zien</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Modaliteit</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Sterkte</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Beperking</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">CT</td>
              <td className="px-4 py-3 align-top">Anatomie, grootte, invasie</td>
              <td className="px-4 py-3 align-top">Geen metabole informatie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">PET/CT</td>
              <td className="px-4 py-3 align-top">Metabole activiteit, detectie metastasen</td>
              <td className="px-4 py-3 align-top">Vals-positief bij ontsteking/infectie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        CT is dus de basis voor de anatomische beoordeling, terwijl PET/CT vooral helpt bij het opsporen van <span className="font-semibold">metabool actieve</span> afwijkingen.
      </p>
    </div>
  )
}
