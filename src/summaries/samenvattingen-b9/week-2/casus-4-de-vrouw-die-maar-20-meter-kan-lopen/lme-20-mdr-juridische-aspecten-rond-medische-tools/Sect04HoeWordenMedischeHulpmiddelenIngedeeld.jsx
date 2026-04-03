export default function Sect04HoeWordenMedischeHulpmiddelenIngedeeld() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe worden medische hulpmiddelen ingedeeld?</h2>
      <p>
        De MDR werkt risicogebaseerd. Medische hulpmiddelen worden ingedeeld in klassen op basis van het risico voor de patiënt. Er zijn vier hoofdklassen: I, IIa, IIb en III.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Risicoklassen van medische hulpmiddelen</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Klasse</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Risico</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerk</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Klasse I</td>
                <td className="px-4 py-3">Laag risico</td>
                <td className="px-4 py-3">minst streng gereguleerd</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Klasse IIa</td>
                <td className="px-4 py-3">Middelgroot risico</td>
                <td className="px-4 py-3">strengere eisen dan klasse I</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Klasse IIb</td>
                <td className="px-4 py-3">Hoog risico</td>
                <td className="px-4 py-3">nog strengere eisen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Klasse III</td>
                <td className="px-4 py-3">Hoogste risico</td>
                <td className="px-4 py-3">falen kan de dood van de patiënt tot gevolg hebben</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Bij hulpmiddelen in klasse III is het risico het hoogst. Hoe dichter een hulpmiddel bij het hart staat, hoe hoger de klasse vaak is. Dat is een eenvoudige vuistregel om de indeling beter te begrijpen.
      </p>
      <p>Er zijn ook subklassen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Is: steriele hulpmiddelen;</li>
        <li>Im: meetinstrumenten;</li>
        <li>Ir: herbruikbare chirurgische instrumenten.</li>
      </ul>
      <p>Naast het risico kijkt de MDR ook naar andere kenmerken. In de classificatieregels wordt bijvoorbeeld onderscheid gemaakt tussen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de duur van gebruik: tijdelijk, kortdurend of langdurig;</li>
        <li>niet-invasieve en invasieve hulpmiddelen;</li>
        <li>actieve en niet-actieve hulpmiddelen.</li>
      </ul>
      <p>
        Er zijn in totaal 22 classificatieregels om te bepalen in welke risicoklasse een hulpmiddel valt. Er bestaan dus meerdere routes om tot dezelfde klasse te komen.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Voorbeelden per klasse</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Klasse</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Voorbeelden</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Klasse I</td>
              <td className="px-4 py-3">krukken, pleisters, hoog-laag bed</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">Klasse IIa</td>
              <td className="px-4 py-3">echoapparaat, bloeddrukmeter, blaaskatheter</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Klasse IIb</td>
              <td className="px-4 py-3">katheter die bij een hartoperatie wordt gebruikt, bloedzak, lenzenvloeistof</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">Klasse III</td>
              <td className="px-4 py-3">ICD, heupprotheses, stents, hartkleppen</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Voor hulpmiddelen in klasse I mag de fabrikant zelf certificeren. Voor alle andere klassen is een notified body nodig. Dat is een beoordelende instantie die controleert of het hulpmiddel aan de eisen voldoet voordat het op de markt mag komen.
      </p>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: wanneer is een notified body nodig?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}bij alle klassen behalve klasse I.
        </p>
      </div>
    </div>
  )
}
