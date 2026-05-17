export default function Sect06WanneerGeefJeOmeprazol() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wanneer geef je omeprazol?</h2>
      <p>Omeprazol wordt het vaakst gebruikt bij de volgende indicaties:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">gastro-oesofageale refluxziekte</strong>
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">dyspepsie</strong>
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">ulcus pepticum</strong>
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">
            preventie van maagproblemen bij gebruik van niet-selectieve NSAID's
          </strong>
        </li>
      </ul>
      <p>
        Vooral dat laatste is klinisch belangrijk. Niet-selectieve NSAID&apos;s kunnen de maag beschadigen. Daarom wordt omeprazol preventief gegeven wanneer iemand een NSAID gebruikt én risicofactoren heeft.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 3. Risicofactoren bij preventief gebruik met NSAID's
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Risicofactor
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Waarom relevant?
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Hogere leeftijd</td>
                <td className="px-4 py-3 align-top">Geeft meer kans op maagcomplicaties</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Ulcus of maagcomplicaties in de voorgeschiedenis</td>
                <td className="px-4 py-3 align-top">Wijst op verhoogde kwetsbaarheid van de maag</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Comorbiditeit</td>
                <td className="px-4 py-3 align-top">Verhoogt het totale risico</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Comedicatie</td>
                <td className="px-4 py-3 align-top">Kan het risico op maagproblemen verder verhogen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Bij deze risicofactoren is het dus verstandig om een PPI toe te voegen wanneer een niet-selectieve NSAID nodig is.
      </p>
    </div>
  )
}
