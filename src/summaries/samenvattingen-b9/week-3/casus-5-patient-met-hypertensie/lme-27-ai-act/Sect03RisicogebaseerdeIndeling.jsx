export default function Sect03RisicogebaseerdeIndeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Risicogebaseerde indeling van AI-systemen</h2>
      <p>
        De AI Act gebruikt een risicogebaseerde indeling. Hoe groter het risico van een AI-systeem voor mens en maatschappij, hoe strenger de eisen. In de wet worden vier niveaus onderscheiden: onaanvaardbaar risico, hoog risico, beperkt risico en minimaal risico.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. Risicoklassen in de AI Act</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Risicoklasse</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerk</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Gevolg</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top font-semibold">Onaanvaardbaar risico</td>
                <td className="px-4 py-3 align-top">AI schendt fundamentele rechten of vormt een duidelijk onacceptabel gevaar</td>
                <td className="px-4 py-3 align-top font-semibold">Verboden</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top font-semibold">Hoog risico</td>
                <td className="px-4 py-3 align-top">AI beïnvloedt belangrijke beslissingen, veiligheid of toegang tot zorg</td>
                <td className="px-4 py-3 align-top">Alleen toegestaan bij <strong>strenge eisen</strong></td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top font-semibold">Beperkt risico</td>
                <td className="px-4 py-3 align-top">AI heeft interactie met mensen, maar beïnvloedt geen medische kernbeslissingen</td>
                <td className="px-4 py-3 align-top">Vooral <strong>transparantieplicht</strong></td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top font-semibold">Minimaal risico</td>
                <td className="px-4 py-3 align-top">AI ondersteunt slechts eenvoudig, zonder grote gevolgen</td>
                <td className="px-4 py-3 align-top font-semibold">Geen extra verplichtingen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Bij hoog-risico-systemen gelden extra eisen aan onder andere veiligheid, transparantie, menselijk toezicht en traceerbaarheid. De eisen zijn dus strenger naarmate de mogelijke schade groter is.
      </p>
    </div>
  )
}
