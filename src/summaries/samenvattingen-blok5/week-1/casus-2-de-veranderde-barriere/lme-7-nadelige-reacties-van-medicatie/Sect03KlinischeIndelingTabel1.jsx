export default function Sect03KlinischeIndelingTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Klinische indeling van nadelige reacties</h2>
      <p>
        Klinisch worden nadelige reacties op medicatie meestal onderverdeeld in type A en type B reacties. Daarnaast
        bestaan er nog andere typen, zoals type C en D.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Klinische indeling van nadelige reacties op medicatie
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kern
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerken
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type A</td>
              <td className="px-4 py-3 align-top">Farmacologische bijwerking</td>
              <td className="px-4 py-3 align-top">Ongewenst effect of doorgeschoten normaal effect van het geneesmiddel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type B</td>
              <td className="px-4 py-3 align-top">Overgevoeligheidsreactie</td>
              <td className="px-4 py-3 align-top">
                Reactie die klinisch lijkt op allergie; kan immuun-gemedieerd of niet-immuun-gemedieerd zijn
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type C</td>
              <td className="px-4 py-3 align-top">Reactie door langdurig en continu gebruik</td>
              <td className="px-4 py-3 align-top">Ontstaat pas na langer gebruik</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type D</td>
              <td className="px-4 py-3 align-top">Vertraagde reactie</td>
              <td className="px-4 py-3 align-top">Ontstaat pas enige tijd nadat het medicijn is gestopt</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
