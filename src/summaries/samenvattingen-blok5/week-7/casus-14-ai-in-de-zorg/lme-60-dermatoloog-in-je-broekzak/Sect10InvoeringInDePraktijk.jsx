export default function Sect10InvoeringInDePraktijk() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Invoering in de praktijk: overvloed aan apps en regulering
      </h2>
      <p>
        Er zijn inmiddels heel veel gezondheidsapps. Daardoor wordt het voor beroepsverenigingen moeilijk om van elke app
        te beoordelen of die wel of niet goed genoeg is. In Nederland is daarvoor onder andere een medische app checker
        ontwikkeld.
      </p>
      <p>
        Voor huidkankerapps geldt dat er veel apps zijn die beweren huidkanker te kunnen detecteren op basis van een
        foto, maar een systematische review concludeerde dat vrijwel alle apps onvoldoende gevalideerd zijn.
      </p>
      <p>
        Toch worden sommige apps wél vergoed door zorgverzekeraars. Dat maakt de implementatie in Nederland extra
        relevant. Voordelen die daarvoor worden genoemd zijn onder meer:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>vroegere detectie</li>
        <li>mogelijk lagere drempel voor zorggebruik</li>
        <li>mogelijk lagere zorguitgaven</li>
      </ul>
      <p>Tegelijk zijn er duidelijke risico’s:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>fout-positieven</li>
        <li>overdiagnostiek</li>
        <li>onnodige verwijzingen</li>
        <li>belasting voor patiënt en zorgverlener</li>
      </ul>
      <p>
        Overdiagnostiek betekent hier: het stellen van een diagnose van een aandoening die, als die niet was gevonden
        door screening, niet tot klachten zou hebben geleid. Bij huidkanker kan dat bijvoorbeeld spelen bij bepaalde
        melanomen of atypische naevi die nooit klachten zouden hebben gegeven.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 4. Regulering: Europa en Verenigde Staten
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderwerp
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Europa
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Verenigde Staten
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Toelatingsregime</td>
              <td className="px-4 py-3 align-top">Strenger geworden onder de MDR</td>
              <td className="px-4 py-3 align-top">Nog strenger bij toelating op de markt</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                CE-classificatie voor een huidkanker-app
              </td>
              <td className="px-4 py-3 align-top">Minimaal klasse 2a</td>
              <td className="px-4 py-3 align-top">Geen directe CE-vergelijking</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Wie certificeert?</td>
              <td className="px-4 py-3 align-top">Notified body</td>
              <td className="px-4 py-3 align-top">FDA</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Wat moet worden aangetoond?
              </td>
              <td className="px-4 py-3 align-top">Vooral klinisch bewijs dat de app werkt zoals aangegeven</td>
              <td className="px-4 py-3 align-top">Nauwkeurigheid én toegevoegde waarde</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Toegevoegde waarde voor het zorgsysteem
              </td>
              <td className="px-4 py-3 align-top">Niet altijd verplicht aan te tonen</td>
              <td className="px-4 py-3 align-top">Wel nodig</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De kern is dat een app voor huidkanker in Europa niet zomaar door de ontwikkelaar zelf gecertificeerd kan worden.
        Voor een app als SkinVision is minimaal klasse 2a van toepassing. Daarbij is een certificaat van een notified body
        nodig. In de Verenigde Staten is de toelating strenger, en daar is voor een app als deze juist ook de toegevoegde
        waarde voor het zorgsysteem belangrijk.
      </p>
    </div>
  )
}
