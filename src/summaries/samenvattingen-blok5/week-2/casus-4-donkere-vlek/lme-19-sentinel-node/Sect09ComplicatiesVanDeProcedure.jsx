export default function Sect09ComplicatiesVanDeProcedure() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Complicaties van de procedure</h2>
      <p>
        De kans op complicaties na een sentinel node procedure is ongeveer 10%. Deze complicaties kunnen op verschillende
        momenten optreden.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Vroege complicaties</h3>
      <p>Deze ontstaan binnen uren tot dagen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>nabloeding;</li>
        <li>problemen met wondgenezing;</li>
        <li>infectie van de wond.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Late complicaties</h3>
      <p>Deze ontstaan na dagen tot weken:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>seroom: ophoping van wondvocht in het operatiegebied;</li>
        <li>lymfoedeem: zwelling door gestoorde lymfedrainage.</li>
      </ul>
      <p>
        Bij lymfoedeem kan er ook spanning op de huid ontstaan, met een tintelend gevoel als gevolg.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Complicaties op een rij</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Complicatie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Wanneer
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kern
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Nabloeding</td>
              <td className="px-4 py-3 align-top">Vroeg</td>
              <td className="px-4 py-3 align-top">Bloedverlies na de operatie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Wondinfectie</td>
              <td className="px-4 py-3 align-top">Vroeg</td>
              <td className="px-4 py-3 align-top">Ontsteking van het operatiegebied</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Problemen met wondgenezing
              </td>
              <td className="px-4 py-3 align-top">Vroeg</td>
              <td className="px-4 py-3 align-top">Het wondgebied herstelt minder goed</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Seroom</td>
              <td className="px-4 py-3 align-top">Laat</td>
              <td className="px-4 py-3 align-top">Ophoping van wondvocht</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Lymfoedeem</td>
              <td className="px-4 py-3 align-top">Laat</td>
              <td className="px-4 py-3 align-top">Zwelling door slechte lymfedrainage</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        In de casus van de heer Jansen past de zwelling in de oksel bij een seroom, lymfoedeem, of ook bij een recidief
        van het melanoom in het operatiegebied. Omdat hij eerder een positieve sentinel node had, moet ook aan recidief
        worden gedacht.
      </p>
    </div>
  )
}
