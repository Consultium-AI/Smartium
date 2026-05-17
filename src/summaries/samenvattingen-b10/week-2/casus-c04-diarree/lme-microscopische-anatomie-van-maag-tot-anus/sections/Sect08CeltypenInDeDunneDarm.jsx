export default function Sect08CeltypenInDeDunneDarm() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Celtypen in de dunne darm</h2>
      <p>In de dunne darm zitten verschillende epitheelcellen met elk een eigen functie:</p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Celtypen in de dunne darm</h3>
        <div className="overflow-x-auto mt-4 rounded-xl border border-emerald-200/80 dark:border-emerald-600/40">
          <table className="w-full text-sm border-collapse bg-white dark:bg-slate-900/50">
            <thead>
              <tr className="bg-emerald-100 dark:bg-emerald-900/40">
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">Celtype</th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">Functie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Enterocyt</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Opname van voedingsstoffen</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Gobletcel</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Slijmproductie</td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Stamcel</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Vernieuwing van het epitheel</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Paneth-cel</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Afweer tegen micro-organismen en hulp aan stamcellen</td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">M-cel</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Transport van antigenen voor immuunreactie</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Entero-endocriene cel</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Hormoonafgifte</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        De enterocyt is de meest voorkomende epitheelcel in de dunne darm en is verantwoordelijk voor de opname van voedingsstoffen. Gobletcellen maken slijm, wat de inhoud soepel houdt en
        beschermt. Panethcellen leveren een bijdrage aan de afweer en ondersteunen de stamcellen. M-cellen zijn belangrijk voor antigeentransport en dus voor de immuunreactie.
        Entero-endocriene cellen maken hormonen.
      </p>
      <div className="p-5 bg-violet-50 dark:bg-violet-950/40 rounded-xl border border-violet-200 dark:border-violet-600/40 space-y-2">
        <p>
          <strong className="text-violet-900 dark:text-violet-200">Aandachtsvraag:</strong> wat gebeurt er in de bodem van de crypten?{' '}
          <strong className="text-violet-900 dark:text-violet-200">Mini-antwoord:</strong> daar zitten de stamcellen; daar begint de vernieuwing van het darmepitheel.
        </p>
      </div>
    </div>
  )
}
