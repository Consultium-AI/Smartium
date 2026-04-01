export default function Sect07DeHartas() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De hartas</h2>
      <p>
        De hartas geeft de richting van de gemiddelde QRS-vector in het frontale vlak. Je hoeft daarvoor niet exact graden te berekenen. Je gebruikt vooral afleiding I en aVF, die loodrecht op elkaar staan.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">De duimenregel</h3>
      <p>Zie het QRS-complex als een duim:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>is het complex in een afleiding overwegend positief? Dan wijst de duim omhoog;</li>
        <li>is het complex overwegend negatief? Dan wijst de duim omlaag.</li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Hartas in het kort</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">As</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Patroon in I</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Patroon in aVF</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Normaal</td>
              <td className="px-4 py-3 align-top">positief</td>
              <td className="px-4 py-3 align-top">positief</td>
              <td className="px-4 py-3 align-top">normale as</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Linkerasdeviatie</td>
              <td className="px-4 py-3 align-top">positief</td>
              <td className="px-4 py-3 align-top">negatief</td>
              <td className="px-4 py-3 align-top">stroom trekt sterk naar links</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Rechterasdeviatie</td>
              <td className="px-4 py-3 align-top">negatief</td>
              <td className="px-4 py-3 align-top">positief</td>
              <td className="px-4 py-3 align-top">stroom trekt naar rechts</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Extreme as</td>
              <td className="px-4 py-3 align-top">negatief</td>
              <td className="px-4 py-3 align-top">negatief</td>
              <td className="px-4 py-3 align-top">“no man’s land”</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Normaal loopt de stroom van rechtsboven naar linksonder. Dat past bij een normale as.</p>
    </div>
  )
}
