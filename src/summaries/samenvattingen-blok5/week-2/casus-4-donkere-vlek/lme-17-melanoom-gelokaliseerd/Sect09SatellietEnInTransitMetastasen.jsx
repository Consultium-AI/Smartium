export default function Sect09SatellietEnInTransitMetastasen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Satelliet- en in-transitmetastasen</h2>
      <p>
        Bij melanoom kunnen er naast lymfekliermetastasen ook lokale metastasen ontstaan. Twee belangrijke vormen zijn
        satellietmetastasen en in-transitmetastasen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Satellietmetastasen</h3>
      <p>
        Satellietmetastasen zijn lokale metastasen die dicht bij de primaire tumor liggen, in principe binnen een gebied
        van 2 cm. Ze liggen vaak in de huid of subcutis. Ze wijzen op lokale verspreiding en kunnen soms operatief worden
        verwijderd. Ze zijn geassocieerd met een slechtere prognose, omdat ze wijzen op een verhoogd risico op verdere
        verspreiding.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">In-transitmetastasen</h3>
      <p>
        In-transitmetastasen liggen in de lymfevaten tussen de primaire tumor en de regionale lymfeklieren. Ze komen vaak
        voor op de ledematen en kunnen meerdere plekken in het lymfestelsel betreffen. Ze zijn een teken van verder
        gevorderde verspreiding.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Verschil tussen beide</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Satellietmetastasen
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                In-transitmetastasen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Ligging</td>
              <td className="px-4 py-3 align-top">Dicht bij de primaire tumor</td>
              <td className="px-4 py-3 align-top">Langs de lymfevaten tussen primaire tumor en regionale klieren</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Betekenis</td>
              <td className="px-4 py-3 align-top">Lokale verspreiding</td>
              <td className="px-4 py-3 align-top">Verspreiding via het lymfestelsel</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Stadium</td>
              <td className="px-4 py-3 align-top">Beide passen bij AJCC stadium III</td>
              <td className="px-4 py-3 align-top">Beide passen bij AJCC stadium III</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Belangrijk is dat beide vormen horen bij AJCC stadium III melanoom.</p>
    </div>
  )
}
