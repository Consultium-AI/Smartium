export default function Sect08KlinischeBetekenis() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Klinische betekenis van nutritional assessment</h2>
      <p>
        Het grote klinische belang van nutritional assessment is dat ondervoeding vroeg herkend kan worden. Dat is nodig, omdat ondervoeding samenhangt met complicaties zoals infecties, vertraagde wondgenezing en verminderde weerstand. Vroege signalering maakt het mogelijk om tijdig en gericht in te grijpen.
      </p>
      <p>
        Daarom is het niet voldoende om alleen naar gewicht of BMI te kijken. Een patiënt kan ogenschijnlijk niet ernstig afwijkend lijken, terwijl er toch sprake is van een duidelijke achteruitgang in voedingstoestand. Door meerdere domeinen samen te beoordelen, krijg je een betrouwbaarder beeld.
      </p>
      <p>
        Bij een patiënt met bijvoorbeeld gewichtsverlies en een normale BMI moet je dus verder kijken dan alleen het getal op de weegschaal. Dan zijn vooral aanvullende gegevens over inname, spiermassa, reserves en functie relevant.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Waarom meerdere domeinen nodig zijn</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Alleen kijken naar…</th>
              <th className="px-4 py-3 font-semibold">Beperking</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Gewicht</td>
              <td className="px-4 py-3 align-top">Zegt niets over spiermassa of reserves</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">BMI</td>
              <td className="px-4 py-3 align-top">Zegt niets over samenstelling of functie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Eén functionele test</td>
              <td className="px-4 py-3 align-top">Geeft maar één deel van het totaalbeeld</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Samen geven de domeinen een globale uitspraak over de voedingsstatus van een patiënt. Dat is precies de kracht van nutritional assessment: niet één losse maat, maar een brede beoordeling.
      </p>
    </div>
  )
}
