export default function Sect14HuidbarriereKinderenVsVolwassenen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Huidbarrière bij kinderen versus volwassenen</h2>
      <p>De huid van een kind verschilt van die van een volwassene. In vergelijking met volwassenen heeft de kinderhuid:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>een dunnere epidermis</li>
        <li>een dunnere huidbarrière</li>
        <li>minder melaninepigment</li>
        <li>kleinere cellen</li>
        <li>sneller waterverlies</li>
      </ul>
      <p>De volwassen huid heeft juist:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>een dikkere stratum corneum</li>
        <li>een dikkere epidermis</li>
        <li>meer melaninepigment</li>
        <li>grotere cellen</li>
        <li>trager waterverlies</li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 4. Verschillen tussen kinderhuid en volwassen huid
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kinderhuid
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Volwassen huid
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Waterverlies</td>
              <td className="px-4 py-3 align-top">Sneller</td>
              <td className="px-4 py-3 align-top">Langzamer</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">UV-bescherming</td>
              <td className="px-4 py-3 align-top">Minder melaninepigment</td>
              <td className="px-4 py-3 align-top">Meer melaninepigment</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Celgrootte</td>
              <td className="px-4 py-3 align-top">Kleiner</td>
              <td className="px-4 py-3 align-top">Groter</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Stratum corneum</td>
              <td className="px-4 py-3 align-top">Dunner</td>
              <td className="px-4 py-3 align-top">Dikker</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Epidermis</td>
              <td className="px-4 py-3 align-top">Dunner</td>
              <td className="px-4 py-3 align-top">Dikker</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
