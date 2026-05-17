export default function Sect16Prognose() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Prognose van coloncarcinoom</h2>
      <p>
        De stadiëring geeft een indruk van de prognose. Een gemiddelde 5-jaars overleving ziet er als volgt uit:
      </p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 6. Prognose per AJCC TNM-stadium</h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
              <tr>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Stadium</th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Definitie</th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">
                  5-jaars overall survival
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900/40">
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">I</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">T1-2, N0, M0</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">&gt;90%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">IIA</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">T3, N0, M0</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">75–85%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">IIB</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">T4a, N0, M0</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">70–80%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">IIC</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">T4b, N0, M0</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">60–70%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">IIIA</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">T1-2, N1/N1c, M0</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">~60%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">IIIB</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">T3-4a, N1/N1c, M0</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">~40%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">IIIC</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Any T, N2, M0</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">~25–30%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">IV</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Any T, Any N, M1</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">&lt;15%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
