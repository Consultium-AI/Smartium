export default function Sect03LocatieVanDePijn() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Locatie van de pijn als eerste oriëntatie</h2>
      <p>De plek van de buikpijn helpt om de eerste richting van de differentiaaldiagnose te bepalen.</p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 2. Pijnlocatie en typische diagnose
        </h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
              <tr>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">
                  Locatie van de pijn
                </th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">
                  Meest kenmerkende diagnose
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900/40">
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Linksonder</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Diverticulitis</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Rechtsonder</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Appendicitis</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Rechtsboven</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Cholecystitis</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Diffuus</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Ileus</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Let op: in principe kan diverticulitis ook rechts onderin zitten en kan appendicitis soms op andere plekken pijn
        geven.
      </p>
    </div>
  )
}
