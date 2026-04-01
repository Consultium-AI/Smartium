export default function Sect10IndelingAllergischeRhinitis() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Indeling van allergische rhinitis</h2>
      <p>De klachten kunnen worden ingedeeld naar frequentie en ernst.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Indeling van allergische rhinitis</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Frequentie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Ernst
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerken
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Intermitterend</td>
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Mild</td>
              <td className="px-4 py-3 align-top">
                Minder dan 4 dagen per week of korter dan 4 weken aaneengesloten; geen verstoorde slaap, geen
                beperking in dagelijkse activiteiten, vrije tijd of sport, geen beperkingen in werk- of
                schoolprestaties, geen hinderlijke symptomen
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Persisterend</td>
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Matig tot ernstig</td>
              <td className="px-4 py-3 align-top">
                Meer dan 4 dagen per week en langer dan 4 weken aaneengesloten; verstoorde slaap, wel beperkingen in
                activiteiten, vrije tijd of sport, wel beperkingen in werk- of schoolprestaties, hinderlijke symptomen
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Bij lichamelijk onderzoek kun je typische kenmerken zien zoals:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de allergische groet: met de hand langs de neus omhoog wrijven;</li>
        <li>de allergische groeve: een streepje over de neus door veel omhoog wrijven;</li>
        <li>allergic shiners: blauwe wallen onder de ogen.</li>
      </ul>
    </div>
  )
}
