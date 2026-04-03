export default function Sect08AnesthesiologischeRisicosLuchtweg() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Anesthesiologische risico’s: de luchtwegbeoordeling</h2>
      <p>
        Een van de belangrijkste anesthesiologische risicomomenten is de inductie, oftewel het in slaap brengen van de patiënt. Onder narcose stopt een patiënt met ademen, dus het creëren van een veilige luchtweg is cruciaal. Tijdens de preoperatieve screening wordt daarom ingeschat of de luchtweg lastig kan zijn.
      </p>
      <p>
        De luchtwegbeoordeling richt zich vooral op de vraag: hoe moeilijk zal intubatie zijn? Intubatie betekent het inbrengen van een buisje in de luchtpijp om de ademhaling over te nemen. Een kleine mondopening of beperkte ruimte in de mond en keel maakt dit moeilijker.
      </p>
      <p>
        Een veelgebruikte beoordeling is de Mallampati-score. Daarbij kijkt men hoe goed structuren in de mond zichtbaar zijn als de patiënt de mond zo ver mogelijk opent.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 3. Mallampati-score in grote lijnen</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Klasse</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Klasse 1</td>
                <td className="px-4 py-3">Ruime zichtbaarheid van structuren; gemakkelijkere luchtweg</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Klasse 2</td>
                <td className="px-4 py-3">Nog steeds redelijk goed overzicht</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Klasse 3</td>
                <td className="px-4 py-3">Minder overzicht; intubatie kan lastiger worden</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Klasse 4</td>
                <td className="px-4 py-3">Slecht zicht; luchtweg kan moeilijk zijn</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Daarnaast wordt de 3-3-2-regel gebruikt om de ruimte van mond tot larynx in te schatten. Hiermee wordt het risico op moeilijke intubatie beter ingeschat.
      </p>
      <p>Ook andere factoren zijn belangrijk:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>obesitas: door fors overgewicht is het vrijmaken van de luchtweg vaak lastiger en is er minder ruimte voor luchtverplaatsing;</li>
        <li>anatomische afwijkingen: bijvoorbeeld een orofaryngeale tumor of een grote struma;</li>
        <li>gezichtsbeharing: een volle baard kan masker-ballon-ventilatie bemoeilijken, omdat het masker minder goed afsluit.</li>
      </ul>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandacht-vraagje: Waarom is een baard relevant voor de anesthesioloog?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Omdat een baard het maken van een goede afsluiting met het masker moeilijker maakt, waardoor ventileren lastiger kan worden.
        </p>
      </div>
    </div>
  )
}
