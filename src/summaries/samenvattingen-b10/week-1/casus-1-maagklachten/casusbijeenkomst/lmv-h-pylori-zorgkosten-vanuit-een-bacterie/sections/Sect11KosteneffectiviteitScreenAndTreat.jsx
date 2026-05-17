export default function Sect11KosteneffectiviteitScreenAndTreat() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Kosten-effectiviteit van <em>H. pylori</em> screen-and-treat
      </h2>
      <p>
        De kosten-effectiviteit van screen-and-treat hangt af van het risico op maagkanker in een land. In hoge-risicolanden
        is screen-and-treat kosten-effectief. In landen met een laag risico op maagkanker, zoals Nederland, is het meestal
        niet kosten-effectief.
      </p>
      <p>
        Een interessant punt is dat het meenemen van <strong className="text-slate-900 dark:text-slate-100">peptische ulcusziekte</strong> naast maagkanker de berekening gunstiger kan maken, omdat dan de winst van screening groter wordt. Toch blijft de conclusie: in hoog-risicolanden is de afweging veel gunstiger dan in laag-risicolanden.
      </p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 5. Kosten-effectiviteit in grote lijnen
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Situatie
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Conclusie
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Hoog-risicolanden</td>
                <td className="px-4 py-3 align-top">Kosten-effectief</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Laag-risicolanden, zoals Nederland</td>
                <td className="px-4 py-3 align-top">Niet kosten-effectief</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
