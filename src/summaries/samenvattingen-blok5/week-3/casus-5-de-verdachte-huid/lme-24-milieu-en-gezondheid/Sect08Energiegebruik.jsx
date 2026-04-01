export default function Sect08Energiegebruik() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Energiegebruik: kleine keuzes, grote winst</h2>
      <p>Bij energiegebruik zijn er veel praktische mogelijkheden om uitstoot te verminderen.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Voorbeelden van maatregelen bij energiegebruik
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Doel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Energievraag verminderen</td>
              <td className="px-4 py-3 align-top">
                ledverlichting, apparaten uitschakelen als ze niet nodig zijn, computers buiten kantooruren uitzetten,
                dataverbruik beperken
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Energie slimmer gebruiken</td>
              <td className="px-4 py-3 align-top">
                temperatuur standaard een graad lager zetten, apparatuur kiezen met een goed energielabel
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Duurzame opwekking</td>
              <td className="px-4 py-3 align-top">zonnepanelen, warmtepompen, groene stroom inkopen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een aantal concrete voorbeelden maken dit duidelijk. Zo kan je op een afdeling apparatuur uitzetten buiten
        kantooruren en kun je onnodig groot datagebruik verminderen door geen grote bijlagen te mailen en bestanden te
        delen via een gezamenlijke schijf. Ook het standaard een graad lager zetten van de temperatuur kan helpen.
      </p>
      <p>
        In de zorg is daarnaast de luchtbehandeling belangrijk. Op operatiekamers is die vaak een grote energieverbruiker.
        Het uitzetten van de luchtbehandeling wanneer er niet geopereerd wordt, kan veel besparen. Verder kan duurzaam
        omgaan met warm water belangrijk zijn, vooral in de langdurige zorg, waar een deel van het aardgasverbruik naar
        warm kraanwater gaat.
      </p>
    </div>
  )
}
