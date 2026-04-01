export default function Sect13SubcutaanEnIntramusculairInjecteren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Subcutaan en intramusculair injecteren</h2>
      <p>
        Subcutane en intramusculaire injecties worden veel gebruikt in de klinische praktijk. Elke techniek heeft eigen
        voor- en nadelen.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Subcutane injectie</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Locatie: in het subcutane vetweefsel, net onder de dermis maar boven de spierlaag.</li>
        <li>Veelvoorkomende plaatsen: buik, bovenarm, dijbeen.</li>
        <li>Volume: ongeveer 0,5–1,5 ml.</li>
        <li>
          Absorptie: langzamer, omdat het middel door vetweefsel moet diffunderen; geschikt voor middelen met een langzame,
          gestage afgifte, zoals insuline en heparine.
        </li>
        <li>Techniek: vaak onder 45° of 90°; de naaldlengte varieert van 6 tot 32 mm.</li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Intramusculaire injectie</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Locatie: in de spier, die dieper ligt dan het subcutane vet.</li>
        <li>Veelgebruikte plaatsen: musculus deltoideus, gluteus maximus, vastus lateralis.</li>
        <li>Volume: doorgaans 3–5 ml, afhankelijk van spiergroep en patiënt.</li>
        <li>Absorptie: sneller, dankzij de betere doorbloeding van spierweefsel.</li>
        <li>Techniek: meestal onder 90°; de naaldlengte varieert van 20 tot 38 mm.</li>
      </ul>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Injectietype
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Plaats
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Typische hoek
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Typisch volume
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Opname
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Subcutaan</td>
              <td className="px-4 py-3 align-top">Onder de dermis, boven de spier</td>
              <td className="px-4 py-3 align-top">45° of 90°</td>
              <td className="px-4 py-3 align-top">0,5–1,5 ml</td>
              <td className="px-4 py-3 align-top">Langzaam</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Intramusculair</td>
              <td className="px-4 py-3 align-top">In de spier</td>
              <td className="px-4 py-3 align-top">90°</td>
              <td className="px-4 py-3 align-top">3–5 ml</td>
              <td className="px-4 py-3 align-top">Sneller</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Intradermaal</td>
              <td className="px-4 py-3 align-top">In de huid</td>
              <td className="px-4 py-3 align-top">15°</td>
              <td className="px-4 py-3 align-top">Klein</td>
              <td className="px-4 py-3 align-top">Oppervlakkig</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Intraveneus</td>
              <td className="px-4 py-3 align-top">In de vene</td>
              <td className="px-4 py-3 align-top">25°</td>
              <td className="px-4 py-3 align-top">Afhankelijk van indicatie</td>
              <td className="px-4 py-3 align-top">Direct in bloedbaan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
