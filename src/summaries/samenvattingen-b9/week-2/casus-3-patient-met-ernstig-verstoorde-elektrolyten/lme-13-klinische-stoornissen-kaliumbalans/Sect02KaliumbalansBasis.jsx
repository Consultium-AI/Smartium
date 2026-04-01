export default function Sect02KaliumbalansBasis() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Kaliumbalans: wat moet je in de basis weten?</h2>
      <p>
        Kalium is een belangrijk ion dat vooral intracellulair zit: het overgrote deel bevindt zich dus in de cellen en maar een heel klein deel in het serum. Juist daarom kan de serumkaliumspiegel snel veranderen door verschuivingen tussen intra- en extracellulair compartiment.
      </p>
      <p>
        De voeding bevat vaak verrassend veel kalium. Een gezonde maaltijd met veel groente en fruit kan al snel 50–100 mmol kalium bevatten. Toch ontstaat er normaal geen hyperkaliëmie, omdat het lichaam dit goed opvangt:
      </p>
      <p>Kalium verschuift snel de cel in, vooral onder invloed van insuline.</p>
      <p>Ook adrenerge prikkels en de zuur-basebalans beïnvloeden die verplaatsing.</p>
      <p>Tegelijkertijd begint het lichaam al met de definitieve uitscheiding via de nieren.</p>
      <p>
        De nieren kunnen snel grote hoeveelheden kalium uitscheiden, mits aldosteron aanwezig is en er natrium in het tubuluslumen zit. Daardoor blijft de kaliumbalans in normale omstandigheden stabiel.
      </p>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtvraag: Waarom kan een maaltijd rijk aan kalium toch geen hyperkaliëmie geven?  Mini-antwoord: Omdat kalium snel de cel in verschuift en daarna via de nieren wordt uitgescheiden.
        </p>
      </div>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. Kern van de kaliumregulatie</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderdeel</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Rol</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Insuline</td>
                <td className="px-4 py-3">Stuurt kalium snel de cel in</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Adrenerge prikkels</td>
                <td className="px-4 py-3">Beïnvloeden de intracellulaire verschuiving</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Zuur-basebalans</td>
                <td className="px-4 py-3">Verandert de kaliumverdeling tussen cel en plasma</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Nieren</td>
                <td className="px-4 py-3">Zorgen voor definitieve uitscheiding</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Aldosteron + natrium in tubulus</td>
                <td className="px-4 py-3">Noodzakelijk voor goede kaliumexcretie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
