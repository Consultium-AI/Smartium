export default function Sect04Maagkanker() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        <em>H. pylori</em> en maagkanker
      </h2>
      <p>
        Een belangrijk voorbeeld van maatschappelijke impact is de relatie tussen <em>H. pylori</em> en maagkanker. Mensen met{' '}
        <em>H. pylori</em> hebben ongeveer <strong className="text-slate-900 dark:text-slate-100">5 keer</strong> zoveel kans op{' '}
        <strong className="text-slate-900 dark:text-slate-100">non-cardia maagkanker</strong> als mensen zonder <em>H. pylori</em>.
      </p>
      <p>
        Wereldwijd wordt <strong className="text-slate-900 dark:text-slate-100">89% van de non-cardia maagkankers</strong> toegeschreven aan <em>H. pylori</em> als population attributable fraction. Dat laat zien hoe groot de bijdrage van deze bacterie aan de ziektelast kan zijn.
      </p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 2. Voorbeeld: <em>H. pylori</em> en maagkanker
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Begrip
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Waarde
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Relatief risico op non-cardia maagkanker</td>
                <td className="px-4 py-3 align-top">~5</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Wereldwijde PAF voor non-cardia maagkanker door <em>H. pylori</em></td>
                <td className="px-4 py-3 align-top">89%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        Dit voorbeeld maakt duidelijk dat een sterke risicofactor, zeker als die veel voorkomt, een enorme populatie-impact kan hebben.
      </p>
    </div>
  )
}
