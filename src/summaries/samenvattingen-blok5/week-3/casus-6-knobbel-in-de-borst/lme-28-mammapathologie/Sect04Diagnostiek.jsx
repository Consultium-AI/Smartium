export default function Sect04Diagnostiek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diagnostiek van afwijkingen in de mamma</h2>
      <p>
        Als er sprake is van een afwijking in de mamma, wordt doorgaans materiaal afgenomen voor pathologieonderzoek.
        Dit gebeurt pre-operatief en bij maligniteit ook post-operatief.
      </p>
      <p>Voor een eventuele operatie kan de diagnose op twee manieren worden gesteld:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Cytologie
          <br />
          Hierbij wordt met een dunne naald gewerkt en krijg je losse cellen.
        </li>
        <li>
          Histologie
          <br />
          Hierbij wordt met een dikkere naald gewerkt en wordt histologisch materiaal verkregen.
        </li>
      </ul>
      <p>
        De laatste jaren wordt cytologie van de mamma minder gedaan, omdat een histologisch biopt meer voordelen heeft.
        Histologie is namelijk vaker conclusief, maakt het mogelijk om DCIS en invasief carcinoom van elkaar te
        onderscheiden, en als het om een carcinoom gaat, kan direct aanvullend immunohistochemisch onderzoek plaatsvinden.
      </p>
      <p>Cytologie is wel sneller en iets minder invasief.</p>
      <p>Waarom is dit onderscheid belangrijk?</p>
      <p>
        Omdat de behandeling en prognose anders zijn bij niet-invasieve afwijkingen dan bij invasieve afwijkingen.
      </p>
      <p>
        DCIS is niet invasief en heeft dus een goede prognose. De behandeling is gericht op lokale controle, meestal
        chirurgie, vaak gecombineerd met radiotherapie.
      </p>
      <p>
        Een invasief carcinoom kan metastaseren en heeft een slechtere prognose. De behandeling is gericht op lokale
        controle én op controle op afstand, dus vaak ook systemische therapie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Cytologie versus histologie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Cytologie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Histologie
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Naald</td>
              <td className="px-4 py-3 align-top">Dunne naald</td>
              <td className="px-4 py-3 align-top">Dikkere naald</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Materiaal</td>
              <td className="px-4 py-3 align-top">Losse cellen</td>
              <td className="px-4 py-3 align-top">Weefsel</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Invasiviteit</td>
              <td className="px-4 py-3 align-top">Minder invasief</td>
              <td className="px-4 py-3 align-top">Meer materiaal, iets invasiever</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Snelheid</td>
              <td className="px-4 py-3 align-top">Sneller</td>
              <td className="px-4 py-3 align-top">Iets minder snel</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Conclusiviteit</td>
              <td className="px-4 py-3 align-top">Minder vaak conclusief</td>
              <td className="px-4 py-3 align-top">Vaker conclusief</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">DCIS versus invasief onderscheid</td>
              <td className="px-4 py-3 align-top">Beperkt</td>
              <td className="px-4 py-3 align-top">Goed mogelijk</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Immunohistochemie</td>
              <td className="px-4 py-3 align-top">Niet direct</td>
              <td className="px-4 py-3 align-top">Direct mogelijk</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
