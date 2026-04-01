export default function Sect06Transplantaatafalen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Transplantaatafalen</h2>
      <p>
        De langetermijnresultaten na niertransplantatie zijn veel beter dan na dialyse. Tegelijk laten de cijfers zien dat transplantaatverlies nog steeds voorkomt en sterk afhangt van donorsoort en leeftijd.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Langetermijnresultaten</h3>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Voorbeelden van langetermijnuitkomsten na niertransplantatie</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Regio / donorsoort</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Patiëntoverleving</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Transplantaatoverleving</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">15-jaars patiënt / transplantaatoverleving</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">USA, 10 jaar, levende donor</td>
                <td className="px-4 py-3">75%</td>
                <td className="px-4 py-3">65%</td>
                <td className="px-4 py-3">60% / 45%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">USA, 10 jaar, overleden donor</td>
                <td className="px-4 py-3">60%</td>
                <td className="px-4 py-3">50%</td>
                <td className="px-4 py-3">45% / 30%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Europa (CTS), 10 jaar, levende donor</td>
                <td className="px-4 py-3">?</td>
                <td className="px-4 py-3">70%</td>
                <td className="px-4 py-3">?</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Europa (CTS), 10 jaar, overleden donor</td>
                <td className="px-4 py-3">?</td>
                <td className="px-4 py-3">55%</td>
                <td className="px-4 py-3">?</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Australië/Nieuw-Zeeland, 10 jaar, levende donor</td>
                <td className="px-4 py-3">85%</td>
                <td className="px-4 py-3">75%</td>
                <td className="px-4 py-3">75% / 60%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Australië/Nieuw-Zeeland, 10 jaar, overleden donor</td>
                <td className="px-4 py-3">75%</td>
                <td className="px-4 py-3">65%</td>
                <td className="px-4 py-3">55% / 40%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          De resultaten zijn dus duidelijk beter bij een levende donor dan bij een overleden donor. Ook leeftijd speelt een belangrijke rol. Bij patiënten jonger dan 40 jaar zijn de resultaten uitstekend, maar in andere leeftijdsgroepen gaan er veel nieren verloren.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Belangrijkste reden van transplantaatverlies</h3>
        <p className="mb-3">
          Bij oudere patiënten, vooral boven de 50 jaar, is de belangrijkste reden van transplantaatverlies vaak overlijden van de patiënt. Dat is een belangrijk en soms verrassend gegeven.
        </p>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 3. Belangrijkste oorzaken van transplantaatverlies</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600 mb-3">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Situatie</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Oorzaken</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">&lt; 1 jaar na transplantatie</td>
                <td className="px-4 py-3">In eerste plaats technische/vasculaire problemen, daarna acute rejectie</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">&gt; 1 jaar na transplantatie</td>
                <td className="px-4 py-3">Vooral rejectie, daarnaast onbekend/geen biopt en glomerulaire ziekten</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Oudere patiënten (&gt;50 jaar)</td>
                <td className="px-4 py-3">Vaak overlijden van de patiënt zelf als belangrijkste oorzaak van transplantaatverlies</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-2">Ook de doodsoorzaken veranderen in de tijd:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>&lt; 1 jaar: vooral infecties, hart- en vaatziekten en kanker;</li>
          <li>&gt; 1 jaar: kanker, hart- en vaatziekten en infecties.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Wat gebeurt er bij dreigend transplantaatfalen?</h3>
        <p className="mb-3">
          Als transplantaatfalen dreigt, dan staan dezelfde keuzes opnieuw centraal als bij het oorspronkelijke nierfalen:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>conservatief beleid;</li>
          <li>dialyse;</li>
          <li>niertransplantatie.</li>
        </ul>
        <p className="mb-3">
          In de meeste gevallen zal de keuze weer op een nieuwe niertransplantatie vallen. Dat is echter uitdagender dan de eerste keer, onder andere door immunologische redenen: de patiënt is immers al “geïmmuniseerd” door de huidige transplantatie. Bovendien zijn patiënten inmiddels ouder geworden en hebben ze vaak extra aandoeningen ontwikkeld, bijvoorbeeld diabetes mellitus na niertransplantatie.
        </p>
        <p className="mb-2">Het oude transplantaat wordt meestal in situ gelaten, net als een oude native nier bij niertransplantatiefalen, tenzij het transplantaat:</p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>acuut geïnfecteerd is;</li>
          <li>ernstig ontstoken is door rejectie.</li>
        </ul>
        <p className="mb-3">
          Dan kan verwijdering nodig zijn, of embolisatie.
        </p>
        <p>
          Een transplantaatoperatie, zeker in acute setting, is een grote ingreep met een sterfterisico van ongeveer 4%.
        </p>
      </div>
    </div>
  )
}
