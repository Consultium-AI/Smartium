export default function Sect03OnderdelenTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Welke onderdelen zijn belangrijk?</h2>
      <p>Bij hemostase zijn meerdere factoren betrokken:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de vaatwand;</li>
        <li>het endotheel;</li>
        <li>bloedplaatjes (trombocyten);</li>
        <li>stollingsfactoren;</li>
        <li>de lever;</li>
        <li>vitamine K;</li>
        <li>Von Willebrand factor;</li>
        <li>fibrinogeen.</li>
      </ul>
      <p>Deze onderdelen werken samen. Dat betekent ook dat een probleem in één van deze onderdelen al invloed kan hebben op de bloedstolling.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijke onderdelen van hemostase</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderdeel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Rol in de hemostase
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Vaatwand</td>
              <td className="px-4 py-3 align-top">Reageert op beschadiging met vasoconstrictie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Endotheel</td>
              <td className="px-4 py-3 align-top">Heeft een andere functie in rust dan bij beschadiging</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Trombocyten</td>
              <td className="px-4 py-3 align-top">Vormen samen een bloedplaatjesplug</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Von Willebrand factor</td>
              <td className="px-4 py-3 align-top">Helpt bloedplaatjes hechten en samenklonteren</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Stollingsfactoren</td>
              <td className="px-4 py-3 align-top">Zorgen voor vorming van fibrine</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Lever</td>
              <td className="px-4 py-3 align-top">Plaats waar stollingsfactoren worden gemaakt</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Vitamine K</td>
              <td className="px-4 py-3 align-top">Nodig voor aanmaak van een deel van de stollingsfactoren</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Fibrinogeen</td>
              <td className="px-4 py-3 align-top">Wordt omgezet in fibrine</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
