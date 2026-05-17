export default function Sect02WatIsOmeprazol() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wat is omeprazol?</h2>
      <p>
        Omeprazol is een veelgebruikt voorbeeld van een protonpompremmer, ook wel protonpompinhibitor of PPI genoemd. Het is
        een <strong className="text-slate-900 dark:text-slate-100">maagzuurremmer</strong>: een geneesmiddel dat de
        zuurproductie in de maag langdurig onderdrukt. Daardoor wordt het maagsap minder zuur.
      </p>
      <p>PPI's worden gebruikt bij klachten en aandoeningen waarbij maagzuur een belangrijke rol speelt, zoals:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>gastro-oesofageale refluxziekte;</li>
        <li>dyspepsie;</li>
        <li>ulcus pepticum;</li>
        <li>maagbescherming, vooral bij gebruik van niet-selectieve NSAID&apos;s en bij risicofactoren.</li>
      </ul>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 1. Belangrijkste toepassingen van omeprazol
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Toepassing
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Wat betekent het in de praktijk?
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Gastro-oesofageale refluxziekte</td>
                <td className="px-4 py-3 align-top">
                  Bij brandend maagzuur en terugvloeien van maaginhoud naar de slokdarm
                </td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Dyspepsie</td>
                <td className="px-4 py-3 align-top">
                  Bij maagklachten waarbij zuurremming verlichting kan geven
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Ulcus pepticum</td>
                <td className="px-4 py-3 align-top">Bij een maag- of twaalfvingerige-darmzweer</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Preventie bij NSAID-gebruik</td>
                <td className="px-4 py-3 align-top">
                  Ter bescherming van de maag bij niet-selectieve NSAID's, vooral als er risicofactoren zijn
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Een belangrijk klinisch punt is dus dat omeprazol niet alleen wordt gegeven om klachten te behandelen, maar ook om
        schade aan de maag te voorkomen.
      </p>
    </div>
  )
}
