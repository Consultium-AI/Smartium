export default function Sect07RechtvaardigheidEnInclusiviteit() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Rechtvaardigheid en inclusiviteit</h2>
      <p>
        Een van de zwaarste ethische punten in deze stof is rechtvaardigheid. AI-systemen zijn afhankelijk van de data waarop ze zijn ontwikkeld en getest. Als die data bepaalde groepen onvoldoende vertegenwoordigen, kan het systeem ongelijk presteren. Bij derma-apps is dat extra belangrijk, omdat huidskleur en huidtype invloed kunnen hebben op hoe afwijkingen eruitzien. In de analyse wordt beschreven dat er beperkte rapportage is over diversiteit van huidtypen en dat SkinVision gebruikers met zeer donkere huid waarschuwt voor gebruik bij gepigmenteerde laesies. Dat betekent dat de voordelen van de app niet voor iedereen even groot zijn.
      </p>
      <p>
        Daar komt nog iets bij: niet iedereen kan zo’n app even makkelijk gebruiken. Oudere gebruikers of mensen met minder digitale vaardigheden kunnen uitgesloten raken. Ook dat is een kwestie van rechtvaardigheid. Formele rechtvaardigheid betekent gelijke gevallen gelijk behandelen, maar in de praktijk vraagt rechtvaardigheid vaak juist extra aandacht voor groepen die anders structureel benadeeld worden. Een app die technisch modern is maar vooral goed werkt voor lichte huidtypen en digitaal vaardige gebruikers, kan bestaande ongelijkheden juist verdiepen.
      </p>

      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-2">Tabel 2. Rechtvaardigheid bij derma-apps</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="w-full min-w-[36rem] border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800/80">
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-center font-semibold text-slate-900 dark:text-slate-100">
                Mogelijke winst
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-center font-semibold text-slate-900 dark:text-slate-100">
                Mogelijke bedreiging
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">snellere toegang tot eerste beoordeling</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">slechtere prestaties bij ondervertegenwoordigde huidtypen</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">minder geografische drempels</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">uitsluiting van mensen met lage digitale vaardigheid</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">eerder hulp zoeken</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">ongelijke verdeling van baten en risico’s</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
