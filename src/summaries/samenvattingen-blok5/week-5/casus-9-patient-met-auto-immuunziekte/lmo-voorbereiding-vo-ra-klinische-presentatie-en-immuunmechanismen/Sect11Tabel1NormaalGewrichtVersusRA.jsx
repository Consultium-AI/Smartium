export default function Sect11Tabel1NormaalGewrichtVersusRA() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tabel 1. Normaal gewricht versus RA</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100/90 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-3 py-2 font-semibold border-b border-slate-200 dark:border-slate-600">Onderdeel</th>
              <th className="px-3 py-2 font-semibold border-b border-slate-200 dark:border-slate-600">Normaal</th>
              <th className="px-3 py-2 font-semibold border-b border-slate-200 dark:border-slate-600">Bij RA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr>
              <td className="px-3 py-2 align-top">Synovium</td>
              <td className="px-3 py-2 align-top">Dun, rustig, weinig cellen</td>
              <td className="px-3 py-2 align-top">Verdikt, ontstoken, veel cellen</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Kraakbeen</td>
              <td className="px-3 py-2 align-top">Glad, veerkrachtig, intact</td>
              <td className="px-3 py-2 align-top">Beschadigd, afbraak van matrix</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Bot</td>
              <td className="px-3 py-2 align-top">Normale remodellering</td>
              <td className="px-3 py-2 align-top">Erosies door osteoclastactivatie</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Kliniek</td>
              <td className="px-3 py-2 align-top">Geen ontstekingsklachten</td>
              <td className="px-3 py-2 align-top">Pijn, zwelling, ochtendstijfheid</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Beeldvorming</td>
              <td className="px-3 py-2 align-top">Geen destructie</td>
              <td className="px-3 py-2 align-top">Later erosies en gewrichtsschade</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
