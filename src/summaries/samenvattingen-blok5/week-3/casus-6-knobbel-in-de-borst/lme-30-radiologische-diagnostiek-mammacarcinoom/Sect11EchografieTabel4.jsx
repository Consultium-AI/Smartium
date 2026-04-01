export default function Sect11EchografieTabel4() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Echografie van de mamma</h2>
      <p>Echografie gebruik je als aanvulling op mammografie, vooral in een aantal situaties:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>bij palpabele afwijkingen;</li>
        <li>bij jonge patiënten onder de 30 jaar;</li>
        <li>bij zwangerschap of borstvoeding.</li>
      </ul>
      <p>
        Bij jonge patiënten is de borst vaak dicht, en mammografie is dan minder goed bruikbaar. Echografie is ook
        stralingsvrij, wat belangrijk is bij zwangerschap en borstvoeding.
      </p>
      <p>Op echografie beoordeel je onder andere:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>vorm;</li>
        <li>oriëntatie;</li>
        <li>begrenzing;</li>
        <li>echopatroon;</li>
        <li>posterior phenomena;</li>
        <li>het omgevende weefsel.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Typische echografische kenmerken</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Benigne
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Maligne
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">Vorm</td>
              <td className="px-3 py-3 align-top">Ovaal, rond, macrolobulair</td>
              <td className="px-3 py-3 align-top">Irregulair, grillig, hoekig</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">Oriëntatie</td>
              <td className="px-3 py-3 align-top">Parallel aan de huid, “wider than tall”</td>
              <td className="px-3 py-3 align-top">Niet-parallel, verticaal, “taller than wide”</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">Begrenzing</td>
              <td className="px-3 py-3 align-top">Scherp en glad</td>
              <td className="px-3 py-3 align-top">Onscherp, microlobulair, gespiculeerd</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">Echopatroon</td>
              <td className="px-3 py-3 align-top">Anechogeen, hypoechogeen, homogeen</td>
              <td className="px-3 py-3 align-top">Heterogeen, complex/gemengd, zeer hypoechogeen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">Posterior fenomeen</td>
              <td className="px-3 py-3 align-top">Akoestische versterking, vaak bij cysten</td>
              <td className="px-3 py-3 align-top">Akoestische schaduw, of combinatie van schaduw en versterking</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">Omgevend weefsel</td>
              <td className="px-3 py-3 align-top">Normaal, geen verstoring</td>
              <td className="px-3 py-3 align-top">Oedeem, architectuurverstoring, ductectasie, huidverdikking</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een cyste is bijvoorbeeld ovaal, scherp begrensd en heeft een hoog signaal op T2. Een solide benigne laesie kan
        ook parallel aan de huid liggen en duidelijke akoestische versterking geven.
      </p>
    </div>
  )
}
