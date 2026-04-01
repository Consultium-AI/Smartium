export default function Sect04GezondeLevensverwachting() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Gezonde levensverwachting</h2>
      <p>
        Levensverwachting zegt iets over hoeveel jaren mensen gemiddeld leven, maar niet over hoe gezond die jaren zijn.
        Daarom bestaat ook de gezonde levensverwachting. Die schat het aantal gezonde resterende levensjaren van een man
        of vrouw van een bepaalde leeftijd, onder de aanname dat de omstandigheden in de toekomst gelijk blijven aan die
        van het gekozen jaar.
      </p>
      <p>De gezonde levensverwachting wordt in Nederland vooral beschreven op basis van vier gezondheidsbegrippen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>levensverwachting in als goed ervaren gezondheid;</li>
        <li>levensverwachting zonder fysieke beperkingen;</li>
        <li>levensverwachting zonder chronische ziekten;</li>
        <li>levensverwachting in goede geestelijke gezondheid.</li>
      </ul>
      <p>
        De berekening gebeurt door eerst een overlevingstafel te maken. Daarna wordt het aantal geleefde jaren per
        leeftijdsklasse vermenigvuldigd met de prevalentie van gezondheid of ongezondheid in die leeftijdsklasse. De
        gegevens daarvoor komen uit de Gezondheidsenquête van het CBS.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Gezonde levensverwachting in Nederland
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Maat
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Mannen
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Vrouwen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">Levensverwachting</td>
              <td className="px-3 py-3 align-top">80,06</td>
              <td className="px-3 py-3 align-top">83,32</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">LV in als goed ervaren gezondheid</td>
              <td className="px-3 py-3 align-top">65,0</td>
              <td className="px-3 py-3 align-top">63,8</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">LV zonder matige en ernstige beperking</td>
              <td className="px-3 py-3 align-top">73,2</td>
              <td className="px-3 py-3 align-top">70,7</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">LV zonder chronische ziekten</td>
              <td className="px-3 py-3 align-top">46,0</td>
              <td className="px-3 py-3 align-top">41,4</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">LV in goede geestelijke gezondheid</td>
              <td className="px-3 py-3 align-top">73,7</td>
              <td className="px-3 py-3 align-top">73,7</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Hier zie je meteen dat gezonde levensverwachting veel informatie toevoegt. Twee mensen kunnen even oud worden,
        maar toch een heel verschillende hoeveelheid gezonde jaren hebben.
      </p>
    </div>
  )
}
