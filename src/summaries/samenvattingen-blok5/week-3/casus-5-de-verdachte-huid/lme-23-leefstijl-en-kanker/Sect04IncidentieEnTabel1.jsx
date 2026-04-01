export default function Sect04IncidentieEnTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Incidentie van kanker in Nederland</h2>
      <p>
        De stijging van kankerincidentie betekent niet dat één oorzaak alles verklaart. Het is een combinatie van
        vergrijzing, betere opsporing en veranderingen in leefstijl. In analyses van Nederlandse gegevens is geschat dat
        ongeveer 30% van alle nieuwe kankerdiagnoses aan leefstijlfactoren kan worden toegeschreven. Voor sterfte door
        kanker ging het zelfs om 38%.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Belangrijkste leefstijlfactoren en hun bijdrage
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Leefstijlfactor
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Geschatte bijdrage in Nederlandse analyse
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Roken</td>
              <td className="px-4 py-3 align-top">19%</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Voedingsgewoonten</td>
              <td className="px-4 py-3 align-top">10%</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Overgewicht</td>
              <td className="px-4 py-3 align-top">4%</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Alcoholgebruik</td>
              <td className="px-4 py-3 align-top">3%</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Onvoldoende beweging</td>
              <td className="px-4 py-3 align-top">2%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Roken levert dus verreweg de grootste bijdrage. Daarna volgen voedingsgewoonten. Overgewicht, alcohol en
        onvoldoende beweging dragen ook bij, maar in deze analyse in kleinere mate.
      </p>
      <p>
        Op wereldniveau laten analyses zien dat de kwaliteit van leven sterk kan dalen doordat leefstijlfactoren bijdragen
        aan kankerincidentie. Daarbij verschilt per kankersoort welke factoren vooral meespelen.
      </p>
    </div>
  )
}
