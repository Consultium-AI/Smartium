export default function Sect06ConditioneringEnInfusie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Conditionering en infusie</h2>
      <p>
        Voor allogene HSCT wordt een conditionering of voorbehandeling gegeven. Dat is chemotherapie, al dan niet
        gecombineerd met totale lichaamsbestraling, vlak vóór de transplantatie. Het doel is de afweer van de patiënt te
        verzwakken, zodat het donortransplantaat niet wordt afgestoten.
      </p>
      <p>Er zijn twee hoofdtypen conditionering:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>myeloablatief: hoge dosis chemotherapie, al dan niet met totale lichaamsbestraling;</li>
        <li>niet-myeloablatief of reduced intensity: lage dosis chemotherapie, al dan niet met totale lichaamsbestraling.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Myeloablatieve versus niet-myeloablatieve conditionering</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Myeloablatief
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Niet-myeloablatief
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Dosis</td>
              <td className="px-4 py-3 align-top">Hoog</td>
              <td className="px-4 py-3 align-top">Laag</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Beenmergsuppressie</td>
              <td className="px-4 py-3 align-top">Diep</td>
              <td className="px-4 py-3 align-top">Weinig</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Pancytopenie</td>
              <td className="px-4 py-3 align-top">1–3 weken, ernstig</td>
              <td className="px-4 py-3 align-top">Nauwelijks</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Toxiciteit</td>
              <td className="px-4 py-3 align-top">Veel</td>
              <td className="px-4 py-3 align-top">Minder</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Anti-ziekte-effect</td>
              <td className="px-4 py-3 align-top">Door conditionering én graft-versus-ziekte</td>
              <td className="px-4 py-3 align-top">Vooral door graft-versus-ziekte</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Herstel bij falen transplantaat</td>
              <td className="px-4 py-3 align-top">Niet vanzelf</td>
              <td className="px-4 py-3 align-top">Eigen bloedcelvorming kan weer op gang komen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Na ontdooien wordt het transplantaat toegediend via een perifere infuuslijn of een centraal veneuze katheter.
      </p>
    </div>
  )
}
