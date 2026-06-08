export default function Sect07PatronenInGlucoseprofielenHerkennen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Patronen in glucoseprofielen herkennen</h2>
      <p>
        Een glucoseprofiel of dagcurve laat zien hoe de glucosewaarden zich over de dag gedragen. Daarmee kun je patronen herkennen die wijzen op een probleem met basale of bolusinsuline.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Patronen en mogelijke betekenis</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Patroon in glucosewaarden</th>
              <th className="px-4 py-3 font-semibold">Mogelijke verklaring</th>
              <th className="px-4 py-3 font-semibold">Denk aan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Hoge nuchtere waarden</td>
              <td className="px-4 py-3 align-top">Te weinig basale insuline</td>
              <td className="px-4 py-3 align-top">Basale dosis verhogen of schema aanpassen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Hoge waarden na maaltijden</td>
              <td className="px-4 py-3 align-top">Te weinig of te laat gegeven bolusinsuline</td>
              <td className="px-4 py-3 align-top">Bolusdosering, timing of koolhydraatinname aanpassen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Grote schommelingen over de dag</td>
              <td className="px-4 py-3 align-top">Onbalans tussen basis- en maaltijdinsuline</td>
              <td className="px-4 py-3 align-top">Het hele schema opnieuw beoordelen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Lage waarden op vaste momenten</td>
              <td className="px-4 py-3 align-top">Mogelijk te hoge insulinedosis op dat tijdstip</td>
              <td className="px-4 py-3 align-top">Dosis verlagen of timing aanpassen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Het doel is steeds om uit het patroon af te leiden waar de verstoring zit. Zo kun je gerichter ingrijpen in plaats van zomaar de hele behandeling te veranderen.
      </p>
    </div>
  )
}
