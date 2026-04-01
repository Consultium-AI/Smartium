export default function Sect04StadieringVanMelanoomAjcc() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Stadiëring van melanoom</h2>
      <p>
        De AJCC 8e editie gebruikt voor melanoom de indeling op basis van T, N en M. Deze stadiëring is belangrijk omdat ze
        iets zegt over de uitgebreidheid van de ziekte en dus ook over de behandeling.
      </p>
      <p>T gaat over de primaire tumor: dikte en ulceratie.</p>
      <p>N gaat over regionale lymfeklieren en regionale uitzaaiingen.</p>
      <p>M gaat over afstandsmetastasen, dus uitzaaiingen op afstand.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Belangrijkste onderdelen van de AJCC-stadiëring</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderdeel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">T</td>
              <td className="px-4 py-3 align-top">dikte van de tumor en aanwezigheid van ulceratie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">N</td>
              <td className="px-4 py-3 align-top">
                regionale lymfeklieren, in-transit/satelliet/microsatellietmetastasen
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">M</td>
              <td className="px-4 py-3 align-top">afstandsmetastasen, met onderverdeling op basis van locatie en LDH</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
