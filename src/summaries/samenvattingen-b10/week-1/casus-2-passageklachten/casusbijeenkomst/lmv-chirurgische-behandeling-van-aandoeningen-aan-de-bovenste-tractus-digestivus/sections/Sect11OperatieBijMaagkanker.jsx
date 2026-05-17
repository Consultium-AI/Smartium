export default function Sect11OperatieBijMaagkanker() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Operatie bij maagkanker</h2>
      <p>
        De operatie hangt af van de locatie van de tumor en de mate van uitbreiding. Er kan gekozen worden voor:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">subtotale gastrectomie</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">totale gastrectomie</strong>.
        </li>
      </ul>
      <p>
        Bij een totale gastrectomie moet de continuïteit worden hersteld, vaak via een{' '}
        <strong className="text-slate-900 dark:text-slate-100">Roux-en-Y esophagojejunostomie</strong>. Bij een subtotale
        gastrectomie blijft een deel van de maag behouden. De reconstructie van de continuïteit hangt af van de operateur.
      </p>
      <p>
        De locoregionale lymfeklieren rond de maag en langs de truncus coeliacus zijn belangrijk in de lymfeklierdissectie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">Laparoscopisch versus open bij maagkanker</h3>
      <p>
        Bij maagkanker laten studies zoals LOGICA zien dat laparoscopische en open gastrectomie vergelijkbare uitkomsten hebben. Gemiddeld is de opnameduur ongeveer 7 dagen. Er is geen verschil in totale complicaties, pijn, naadlekkage of pneumonie. Laparoscopie geeft wel minder bloedverlies, terwijl de operatieduur bij open chirurgie korter kan zijn.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">
        Tabel 6. Laparoscopische versus open gastrectomie
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Uitkomst</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Laparoscopisch</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Open</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Opnameduur</td>
              <td className="p-3 align-top">Gemiddeld 7 dagen</td>
              <td className="p-3 align-top">Gemiddeld 7 dagen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Complicaties</td>
              <td className="p-3 align-top">Geen verschil</td>
              <td className="p-3 align-top">Geen verschil</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Bloedverlies</td>
              <td className="p-3 align-top">Minder</td>
              <td className="p-3 align-top">Meer</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Operatieduur</td>
              <td className="p-3 align-top">Langer</td>
              <td className="p-3 align-top">Korter</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Pijn</td>
              <td className="p-3 align-top">Geen verschil</td>
              <td className="p-3 align-top">Geen verschil</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Naadlekkage</td>
              <td className="p-3 align-top">Geen verschil</td>
              <td className="p-3 align-top">Geen verschil</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Pneumonie</td>
              <td className="p-3 align-top">Geen verschil</td>
              <td className="p-3 align-top">Geen verschil</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
