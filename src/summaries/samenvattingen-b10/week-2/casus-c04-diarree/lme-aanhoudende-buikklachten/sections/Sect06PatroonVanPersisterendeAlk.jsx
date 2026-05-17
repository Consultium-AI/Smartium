export default function Sect06PatroonVanPersisterendeAlk() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Het patroon van persisterende ALK</h2>
      <p>
        Bij persisterende ALK is er vaak een grote overlap in klachtenpatronen en in factoren die de klachten in stand houden. Dat zijn onder andere:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>activatie van het autonome zenuwstelsel;</li>
        <li>sensitisatie van pijn;</li>
        <li>niet-herstellende slaap;</li>
        <li>optreden van stress;</li>
        <li>traumatische gebeurtenissen, zoals een operatie, een ongeluk of een echtscheiding.</li>
      </ul>
      <p>Deze factoren kunnen elkaar versterken. Daardoor blijven klachten bestaan of worden ze erger.</p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Factoren die ALK kunnen in stand houden</h3>
        <div className="overflow-x-auto mt-4 rounded-xl border border-emerald-200/80 dark:border-emerald-600/40">
          <table className="w-full text-sm border-collapse bg-white dark:bg-slate-900/50">
            <thead>
              <tr className="bg-emerald-100 dark:bg-emerald-900/40">
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  In stand houdende factor
                </th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  Wat betekent dit in gewone taal?
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Activatie van het autonome zenuwstelsel
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Het lichaam staat als het ware “aan” en komt minder goed tot rust
                </td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Sensitisatie van pijn
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Pijnsignalen worden sterker ervaren</td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Niet-herstellende slaap
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Slapen geeft onvoldoende herstel</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Stress</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Spanning kan klachten versterken of onderhouden
                </td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Traumatische gebeurtenissen
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Grote ingrijpende gebeurtenissen kunnen een rol spelen in het blijven bestaan van klachten
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
