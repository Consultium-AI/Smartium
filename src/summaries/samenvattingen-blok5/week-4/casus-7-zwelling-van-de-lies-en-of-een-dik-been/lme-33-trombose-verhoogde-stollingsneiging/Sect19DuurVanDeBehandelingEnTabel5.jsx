export default function Sect19DuurVanDeBehandelingEnTabel5() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Duur van de behandeling</h2>
      <p>De optimale duur van de behandeling hangt af van het risico op:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>terugkeer van trombose;</li>
        <li>bloeding tijdens antistolling.</li>
      </ul>
      <p>Bij een eerste event geldt:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>tijdelijke risicofactor: behandeling 3 maanden;</li>
        <li>
          idiopathisch: behandeling onbeperkt, tenzij er sprake is van een bloedingsrisico; dit wordt jaarlijks geëvalueerd.
        </li>
      </ul>
      <p>Bij een tweede (recidief) trombose geldt: onbeperkte duur antistolling.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Voorbeelden van tijdelijke en niet-tijdelijke risicofactoren</h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Tijdelijke risicofactoren</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Idiopathische of niet-tijdelijke risicofactoren</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-3 align-top">Tijdelijke centrale veneuze lijn</td>
              <td className="p-3 align-top">Permanente centrale lijn</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Immobiliteit, gedefinieerd als &gt; 3 dagen bedrust</td>
              <td className="p-3 align-top">Chronische leukemie</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Orale anticonceptiva of hormoonsubstitutie die gestopt wordt</td>
              <td className="p-3 align-top">
                Orale anticonceptie die niet gestopt kan worden, bijvoorbeeld bij endometriose
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">Gipsimmobilisatie</td>
              <td className="p-3 align-top">Inflammatoire darmziekte</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Morbide obesitas indien later niet meer aanwezig</td>
              <td className="p-3 align-top">Zonder aanwijsbare oorzaak, “uit het niets ontstaan”</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Operatie</td>
              <td className="p-3 align-top">Zwangerschap / kraambed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
