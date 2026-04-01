export default function Sect04VijfStappenmethode() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De 5-stappenmethode</h2>
      <p>Een ECG analyseer je systematisch. De volgorde helpt je om niets over het hoofd te zien.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 2. De 5 stappen van ECG-beoordeling</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Stap</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Waar kijk je naar?</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Waar let je op?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">1</td>
              <td className="px-4 py-3 align-top"><span className="font-semibold">Ritme</span></td>
              <td className="px-4 py-3 align-top">Regelmatig of onregelmatig, sinus of niet</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">2</td>
              <td className="px-4 py-3 align-top"><span className="font-semibold">Frequentie</span></td>
              <td className="px-4 py-3 align-top">Hartslag per minuut</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">3</td>
              <td className="px-4 py-3 align-top"><span className="font-semibold">As</span></td>
              <td className="px-4 py-3 align-top">Richting van de gemiddelde QRS-vector</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">4</td>
              <td className="px-4 py-3 align-top"><span className="font-semibold">Intervallen</span></td>
              <td className="px-4 py-3 align-top">PQ/PR, QRS, QT</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">5</td>
              <td className="px-4 py-3 align-top"><span className="font-semibold">Morfologie</span></td>
              <td className="px-4 py-3 align-top">P-top, QRS-vorm, ST-segment, T-top</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
