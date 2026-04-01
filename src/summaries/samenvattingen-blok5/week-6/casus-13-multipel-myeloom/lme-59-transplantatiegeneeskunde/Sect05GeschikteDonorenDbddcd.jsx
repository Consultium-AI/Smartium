export default function Sect05GeschikteDonorenDbddcd() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Geschikte donoren en donorselectie</h2>
      <p>
        Bij het zoeken naar een donor zijn er meerdere vragen belangrijk. Het gaat niet alleen om medische geschiktheid,
        maar ook om geschiktheid van het donororgaan zelf.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Overleden donoren: DBD en DCD</h3>
      <p>Er zijn twee hoofdvormen van postmortale donatie:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>DBD: donation after brain death, donatie na hersendood</li>
        <li>DCD: donation after circulatory death, donatie na circulatiestilstand</li>
      </ul>
      <p>
        Bij DBD is sprake van onherstelbaar uitgevallen hersenfunctie, terwijl hart en longen tijdelijk door ondersteuning
        nog kunnen functioneren. Bij DCD zijn de hersenfuncties niet allemaal onherstelbaar uitgevallen, maar stopt de
        behandeling en volgt uiteindelijk circulatiestilstand. Om als donor geschikt te zijn, moet het overlijden
        gecontroleerd plaatsvinden, meestal in het ziekenhuis.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. DBD en DCD naast elkaar</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600 w-40" />
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                DBD
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                DCD
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Voordeel</td>
              <td className="px-4 py-3 align-top">
                Optimale orgaanbehoud door afwezigheid van hypotensie/hypoxie
              </td>
              <td className="px-4 py-3 align-top">Vergroot de donorpool omdat meer mensen in aanmerking komen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Nadeel</td>
              <td className="px-4 py-3 align-top">
                Tijdens hersendood kunnen pro-inflammatoire processen ontstaan en orgaanschade geven
              </td>
              <td className="px-4 py-3 align-top">
                Ischemie is het grootste probleem; dit kan leiden tot schade en slechtere orgaanfunctie
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Beleving voor familie
              </td>
              <td className="px-4 py-3 align-top">Afscheid van een nog levend ogende persoon</td>
              <td className="px-4 py-3 align-top">
                Familie is aanwezig bij het stoppen van ademhaling en hartfunctie
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        In Nederland is er daarnaast nog een speciale categorie: donatie na euthanasie. Daarvoor gelden strikte
        wettelijke regels en de euthanasie moet in het ziekenhuis plaatsvinden. Het gaat dan altijd om een DCD-procedure.
        Jaarlijks zijn er ongeveer 20-30 van zulke donoren, op een totaal van ongeveer 350 orgaandonoren.
      </p>
    </div>
  )
}
