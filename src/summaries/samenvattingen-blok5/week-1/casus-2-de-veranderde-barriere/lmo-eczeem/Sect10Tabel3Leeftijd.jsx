export default function Sect10Tabel3Leeftijd() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Constitutioneel eczeem per leeftijd</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Leeftijd
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorkeurslokalisatie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerken
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">0–2 jaar</td>
              <td className="px-4 py-3 align-top">Gelaat, later ook romp en extremiteiten</td>
              <td className="px-4 py-3 align-top">Vaak nat, crusteus, hevige jeuk, narcosekapje vrij</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Peuterleeftijd</td>
              <td className="px-4 py-3 align-top">Minder diffuus, minder exsudatief</td>
              <td className="px-4 py-3 align-top">Meer richting plooien</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Na peuterleeftijd / volwassenen</td>
              <td className="px-4 py-3 align-top">Elleboogsplooien, knieholten, polsen, hals, nek, oogleden</td>
              <td className="px-4 py-3 align-top">Chronisch recidiverend, droge huid, lichenificatie</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
