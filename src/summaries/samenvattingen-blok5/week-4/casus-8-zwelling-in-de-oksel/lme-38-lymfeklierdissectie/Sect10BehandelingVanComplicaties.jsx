export default function Sect10BehandelingVanComplicaties() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling van complicaties</h2>
      <p>
        Complicaties van een lymfeklierdissectie kunnen op verschillende manieren worden behandeld. Welke behandeling
        passend is, hangt af van de ernst en het type complicatie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Behandeling van complicaties</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Complicatie
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Behandeling
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Bloeding</td>
              <td className="px-3 py-3 align-top">
                Expectatief of heroperatie met coagulatie, afhankelijk van de ernst
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Infectie</td>
              <td className="px-3 py-3 align-top">
                Antibiotica, en soms operatie; wond spoelen met fysiologisch zout kan ook een behandeling op zichzelf zijn
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Seroom</td>
              <td className="px-3 py-3 align-top">Expectatief of ontlastende punctie, afhankelijk van de ernst</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Zenuwschade</td>
              <td className="px-3 py-3 align-top">Expectatief</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Lymfoedeem</td>
              <td className="px-3 py-3 align-top">Compressietherapie en oedeemtherapie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Fibrose/keloïd</td>
              <td className="px-3 py-3 align-top">
                Expectatief of specialistische behandeling door dermatoloog/plastisch chirurg
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
