export default function Sect05Insulinesecretagogen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Insulinesecretagogen: meer insuline uit de pancreas</h2>
      <p>
        Een tweede belangrijke groep zijn de <strong className="text-slate-900 dark:text-slate-100">insulinesecretagogen</strong>, zoals de <strong className="text-slate-900 dark:text-slate-100">sulfonylureumderivaten</strong>. Deze middelen stimuleren de bètacellen in de pancreas om meer insuline af te geven. Ze dwingen als het ware de bètacel om insuline uit te scheiden.
      </p>
      <p>
        Het werkingsmechanisme verloopt via het <strong className="text-slate-900 dark:text-slate-100">kaliumtransport</strong>. Door dit transport te remmen, kan kalium niet goed uit de bètacel stromen. Daardoor ontstaat <strong className="text-slate-900 dark:text-slate-100">depolarisatie</strong> van de bètacel. Die depolarisatie leidt vervolgens tot afgifte van insuline uit de vesikels.
      </p>
      <p>Kort gezegd: deze middelen zorgen ervoor dat de pancreas meer insuline afgeeft.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Bijwerkingen van insulinesecretagogen</h3>
      <p>De belangrijkste bijwerkingen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">hypoglykemie</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">gewichtstoename</strong>.
        </li>
      </ul>
      <p>
        Hypoglykemie is een belangrijk risico, omdat het middel de insulineafgifte stimuleert, ook wanneer dat niet altijd nodig is.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Insulinesecretagogen in één overzicht</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Kenmerk</th>
              <th className="px-4 py-3 font-semibold">Uitleg</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Werkingsplaats</td>
              <td className="px-4 py-3 align-top">bètacellen van de pancreas</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Hoofdeffect</td>
              <td className="px-4 py-3 align-top">meer insuline-afgifte</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Mechanisme</td>
              <td className="px-4 py-3 align-top">remming van kaliumtransport, depolarisatie van de bètacel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Belangrijkste bijwerkingen</td>
              <td className="px-4 py-3 align-top">hypoglykemie, gewichtstoename</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
