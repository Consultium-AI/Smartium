export default function Sect05OntstaanDiabetischUlcus() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe ontstaat een diabetisch ulcus?</h2>
      <p>
        Het ontstaan van een diabetisch ulcus verloopt in stappen. Eerst is er vaak een vormafwijking van de voet. Daardoor ontstaan verhoogde schuif- en drukkrachten. Dit leidt tot eeltvorming en beschadiging. Onder het eelt kan een bloeding of huidbeschadiging ontstaan. Tegelijk is er vaak verminderde perfusie en voelt de patiënt de schade niet goed. Zo ontstaat uiteindelijk een diabetisch ulcus.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 3. Ontstaan van een diabetisch ulcus</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Stap</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Proces</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">1</td>
                <td className="px-4 py-3">Vormafwijking van de voet</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">2</td>
                <td className="px-4 py-3">Verhoogde schuif- en drukkrachten</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">3</td>
                <td className="px-4 py-3">Eeltvorming en beschadiging</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">4</td>
                <td className="px-4 py-3">Verminderde perfusie en geen duidelijke pijn</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">5</td>
                <td className="px-4 py-3">Diabetisch ulcus</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Ook het verwijderen van eelt is een belangrijk moment: na verwijdering kan een onderliggende wond zichtbaar worden.
      </p>
      <p>
        Een ulcus kan bovendien infecteren. Bij ernstige infectie kan de ontsteking dieper doordringen en zelfs bot of gewricht bereiken. Dan ontstaat risico op weefselverlies, botbetrokkenheid en amputatie.
      </p>
    </div>
  )
}
