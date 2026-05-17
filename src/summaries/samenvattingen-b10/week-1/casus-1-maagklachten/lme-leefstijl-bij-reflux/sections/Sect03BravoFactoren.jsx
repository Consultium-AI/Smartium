export default function Sect03BravoFactoren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De BRAVO-factoren: leefstijl als basis</h2>
      <p>
        Bij reflux spelen de zogeheten <strong className="text-slate-900 dark:text-slate-100">BRAVO-factoren</strong> een
        centrale rol. Dat zijn leefstijlfactoren die invloed kunnen hebben op klachten:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">B</strong>: bewegen
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">R</strong>: roken
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">A</strong>:{' '}
          {'alcohol & drugs'}
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">V</strong>: voeding
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">O</strong>: ontspanning
        </li>
      </ul>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 1. BRAVO-factoren en hun betekenis bij reflux
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Factor
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Waar let je op?
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Voorbeeld uit de casus
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Bewegen</td>
                <td className="px-4 py-3 align-top">Voldoende lichamelijke activiteit helpt mee aan een gezondere leefstijl</td>
                <td className="px-4 py-3 align-top">Minder sporten, bijvoorbeeld niet meer voetballen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Roken</td>
                <td className="px-4 py-3 align-top">Roken kan refluxklachten veroorzaken of verergeren</td>
                <td className="px-4 py-3 align-top">In deze casus niet aanwezig, maar wel belangrijk in het algemeen</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">{'Alcohol & drugs'}</td>
                <td className="px-4 py-3 align-top">Alcohol kan klachten verergeren</td>
                <td className="px-4 py-3 align-top">In het weekend bier drinken</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Voeding</td>
                <td className="px-4 py-3 align-top">Ongezonde voeding en grotere maaltijden kunnen reflux bevorderen</td>
                <td className="px-4 py-3 align-top">Ongezond eten, snackbarvoeding</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Ontspanning</td>
                <td className="px-4 py-3 align-top">
                  Stress en onvoldoende ontspanning kunnen klachten in stand houden
                </td>
                <td className="px-4 py-3 align-top">
                  Veel ballen in de lucht, stress door studie en ouders, slechte studieresultaten
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Bij de student uit de eerste casus sluiten meerdere leefstijlfactoren niet goed aan bij wat wenselijk is. Er is
        sprake van weinig beweging, alcoholgebruik, ongezonde voeding en weinig ontspanning. Dat maakt het aannemelijk
        dat leefstijl een belangrijke rol speelt bij de refluxklachten.
      </p>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-3">
        <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-200 m-0">Aandacht-vraag</h3>
        <p className="text-slate-800 dark:text-amber-100 m-0">
          <strong className="text-slate-900 dark:text-amber-50">Welke BRAVO-factoren blijken in deze situatie vooral belangrijk?</strong>
        </p>
        <p className="m-0 text-slate-800 dark:text-amber-100">
          Kort antwoord: vooral bewegen, alcohol, voeding en ontspanning.
        </p>
      </div>
    </div>
  )
}
