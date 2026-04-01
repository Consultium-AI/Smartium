export default function Sect06MProteineInHetBloed() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">M-proteïne in het bloed</h2>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Serum-eiwitelektroforese (SPE)</h3>
      <p>
        Bij SPE worden eiwitten in het serum gescheiden op basis van hun eigenschappen. Normaal zie je de albuminepiek en
        daarna de alfa-, beta- en gammafractie. Bij een M-proteïne zie je een smalle, duidelijke piek of M-spike, vaak in
        de gammafractie. Dat past bij hypergammaglobulinemie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Immunofixatie (IFE)</h3>
      <p>
        Immunofixatie wordt gebruikt om te bepalen welk type M-proteïne er aanwezig is. Daarbij wordt gekeken naar de
        zware keten, zoals IgG, IgA, IgM, IgD of IgE, en naar de lichte keten kappa of lambda.
      </p>
      <p>
        Een normale immunofixatie laat geen smalle band zien. Een monoklonale band zie je juist wél in de lane die past
        bij de specifieke zware en lichte keten.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Vrije lichte ketens (FLC)</h3>
      <p>
        De bepaling van vrije lichte ketens in bloed of urine meet de kappa- en lambda-waarden. Dit is vooral handig
        omdat:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          bij 80–90% van de patiënten met multipel myeloom de FLC afwijkend zijn, in absolute waarde of in ratio;
        </li>
        <li>er soms geen intact M-proteïne aanwezig is, maar alleen een lichte-ketenziekte;</li>
        <li>
          de halfwaardetijd kort is: ongeveer 3–6 uur, waardoor je snel een respons kunt beoordelen.
        </li>
      </ul>
      <p>
        Een nadeel is dat verschillende laboratoria soms verschillende methoden gebruiken, waardoor de uitslagen niet
        altijd precies overeenkomen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Belangrijkste kenmerken van bloedonderzoek
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Methode
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Wat zie je?
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijk punt
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">SPE</td>
              <td className="px-4 py-3 align-top">Hoeveelheid M-proteïne, M-spike</td>
              <td className="px-4 py-3 align-top">Goed voor kwantificatie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">IFE</td>
              <td className="px-4 py-3 align-top">Type M-proteïne</td>
              <td className="px-4 py-3 align-top">Nodig voor typering</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">FLC</td>
              <td className="px-4 py-3 align-top">Kappa/lambda en ratio</td>
              <td className="px-4 py-3 align-top">Zeer nuttig bij lichte-ketenziekte en snelle opvolging</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
