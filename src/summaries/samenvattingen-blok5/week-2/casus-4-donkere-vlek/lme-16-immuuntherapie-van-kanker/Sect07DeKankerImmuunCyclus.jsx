export default function Sect07DeKankerImmuunCyclus() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De kanker-immuun cyclus</h2>
      <p>
        Een effectieve anti-tumorreactie bestaat uit een cyclus van stappen die uiteindelijk leiden tot het doden van
        tumorcellen door geactiveerde cytotoxische T-cellen. Deze cyclus begint bij het vrijkomen van tumorantigenen op de
        tumorlocatie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Stappen van de kanker-immuun cyclus</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Stap
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Wat gebeurt er?
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">1. Vrijkomen van tumorantigenen</td>
              <td className="px-4 py-3 align-top">Tumorcellen of tumormateriaal komen vrij op de plaats van de tumor</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                2. Migratie van dendritische cellen
              </td>
              <td className="px-4 py-3 align-top">Dendritische cellen nemen antigenen op en migreren naar de drainerende lymfeklier</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">3. Presentatie van tumorantigenen</td>
              <td className="px-4 py-3 align-top">DC presenteren antigeenpeptiden aan naïeve T-cellen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                4. Activatie en migratie van CD8+ T-cellen
              </td>
              <td className="px-4 py-3 align-top">
                Geactiveerde cytotoxische T-cellen reizen via het bloed terug naar de tumor en kunnen daar weer
                tumorantigenen herkennen
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Dendritische cellen zijn hierbij essentieel. Zij zijn de belangrijkste antigeenpresenterende cellen voor het
        activeren van naïeve T-lymfocyten in de drainerende lymfeklier. Voor een effectieve anti-tumorrespons zijn dus
        niet alleen CD8+ cytotoxische T-cellen belangrijk, maar ook T-helpercellen en dendritische cellen.
      </p>
      <p>
        De presentatie van tumorantigenen kan plaatsvinden in de tumor en in een lymfeklier. Als het gaat om
        tumorantigenen die nieuw zijn door mutatie, vindt presentatie vooral plaats in de tumorlocatie en de drainerende
        lymfeklier. Als een antigeen juist een lichaamseigen antigeen is, is er in principe ook presentatie in het beenmerg
        en de thymus, omdat daar tolerantie tegen deze antigenen ontstaat.
      </p>
    </div>
  )
}
