export default function Sect03VoordeelEnNadeelTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Voordeel en nadeel in één oogopslag</h2>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Belangrijkste effect van borstkankerscreening
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <th className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100 w-1/3 border-b border-slate-200 dark:border-slate-600">
                Voordeel
              </th>
              <td className="px-4 py-3 align-top border-b border-slate-200 dark:border-slate-600">
                Minder sterfte aan borstkanker
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <th className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijk nadeel
              </th>
              <td className="px-4 py-3 align-top border-b border-slate-200 dark:border-slate-600">Overdiagnose</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <th className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Andere mogelijke nadelen</th>
              <td className="px-4 py-3 align-top">
                Onrust, ongemak, extra diagnostiek, onnodige behandeling en de gevolgen daarvan
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Aandacht-vraag: Waarom is overdiagnose zo belangrijk?{'  '}
        Mini-antwoord: Omdat een vrouw dan wel een kankerdiagnose krijgt en wordt behandeld, terwijl die kanker zonder
        screening waarschijnlijk nooit problemen had gegeven.
      </p>
    </div>
  )
}
