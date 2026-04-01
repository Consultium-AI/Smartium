export default function Sect07KortetermijnreactiesInEenOverzicht() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Kortetermijnreacties in één overzicht</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Reactie op UV
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijkste kenmerken
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Zonnebrand</td>
              <td className="px-4 py-3 align-top">Rood, pijnlijk, soms blaren en schilfering</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Directe bruining</td>
              <td className="px-4 py-3 align-top">Snelle kleurverandering door oxidatie en herverdeling van melanine</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Vertraagde bruining</td>
              <td className="px-4 py-3 align-top">Ontstaat later, vooral na UVB, via meer melanineproductie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Pijn</td>
              <td className="px-4 py-3 align-top">Samenhangend met ionkanaalactivatie en calciuminstroom</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
