export default function Sect05Plaveiselcelcarcinoom() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Plaveiselcelcarcinoom van de slokdarm</h2>
      <p>
        Naast adenocarcinoom bestaat ook het plaveiselcelcarcinoom van de slokdarm. Dit type komt meer voor in Aziatische
        landen. De risicofactoren zijn daar vooral toxische blootstellingen zoals alcohol, roken, hete dranken en het eten
        van gepekeld voedsel. Gepekeld voedsel bevat carcinogenen zoals nitriet en nitraat, en in sommige Aziatische diëten is de inname van groenten en fruit lager.
      </p>
      <p>
        In westerse landen wordt ongeveer 90% van de plaveiselcelcarcinomen van de slokdarm veroorzaakt door roken en alcohol.
        Deze factoren zijn ook geassocieerd met hoofd-halstumoren. Plaveiselcelcarcinoom ligt meestal proximaal of in het midden van de slokdarm, terwijl adenocarcinomen vooral distaal voorkomen.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 3. Belangrijk verschil tussen slokdarmtumoren
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Kenmerk
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Plaveiselcelcarcinoom
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Adenocarcinoom
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Vóórkomen</td>
                <td className="px-4 py-3 align-top">Meer in Aziatische landen</td>
                <td className="px-4 py-3 align-top">Meer in westerse landen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Belangrijke risicofactoren</td>
                <td className="px-4 py-3 align-top">Roken, alcohol, hete dranken, gepekeld voedsel</td>
                <td className="px-4 py-3 align-top">Barrett's oesofagus, reflux</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Typische locatie</td>
                <td className="px-4 py-3 align-top">Proximaal of mid-oesofagaal</td>
                <td className="px-4 py-3 align-top">Distaal</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Samenhang met KNO-tumoren</td>
                <td className="px-4 py-3 align-top">Duidelijke associatie</td>
                <td className="px-4 py-3 align-top">Minder nadruk op deze relatie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
