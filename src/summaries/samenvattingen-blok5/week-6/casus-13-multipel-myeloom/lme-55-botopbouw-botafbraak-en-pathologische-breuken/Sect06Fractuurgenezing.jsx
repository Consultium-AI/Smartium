export default function Sect06Fractuurgenezing() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Fractuurgenezing</h2>
      <p>
        Na een fractuur verloopt het herstel in een vaste volgorde. In de eerste fase ontstaat een bloeding en daarna
        volgt geleidelijke vervanging van dat wondgebied door nieuw bot.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Microscospische stadia van fractuurgenezing</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Stadium
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Tijd
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerken
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hematoom</td>
              <td className="px-4 py-3 align-top">Binnen uren tot dagen</td>
              <td className="px-4 py-3 align-top">Bloeduitstorting op de fractuurplek</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Ontstekingsfase</td>
              <td className="px-4 py-3 align-top">Begint binnen 48 uur</td>
              <td className="px-4 py-3 align-top">Ontstekingscellen en fibrine</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Granulatieweefsel</td>
              <td className="px-4 py-3 align-top">2–12 dagen</td>
              <td className="px-4 py-3 align-top">Mesenchymale cellen, fibroblasten, nieuwe capillairen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Zachte callus</td>
              <td className="px-4 py-3 align-top">1 week tot enkele maanden</td>
              <td className="px-4 py-3 align-top">Kraakbeen en trabeculair bot</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Harde callus</td>
              <td className="px-4 py-3 align-top">1 week tot enkele maanden</td>
              <td className="px-4 py-3 align-top">Meer vast bot, stabilisatie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Remodelling</td>
              <td className="px-4 py-3 align-top">Enkele maanden</td>
              <td className="px-4 py-3 align-top">Omvorming naar lamellair bot</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>De volgorde is dus:</p>
      <p>hematoom → ontsteking → granulatieweefsel → zachte callus → harde callus → remodelling</p>
      <p>
        In de vroege fase ontstaat een hematoom. Binnen ongeveer 48 uur start de ontstekingsfase. Daarna komt
        granulatieweefsel met mesenchymale cellen, fibroblasten en nieuwe capillairen. Vervolgens ontstaat een zachte
        callus met kraakbeen en trabeculair bot. Daarna volgt de harde callus. Uiteindelijk wordt dit alles omgebouwd
        tijdens de remodelling.
      </p>
      <p>
        Tijdens de genezing ontstaat eerst tijdelijk woven bot via intramembraneuze en enchondrale ossificatie. Dat gebeurt
        in de eerste 1–4 weken. Daarna wordt dit omgezet in lamellair bot. Het remodelleringsproces kan dus lang doorgaan.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandacht:</strong> wat is de juiste volgorde van
          fractuurgenezing?{'  '}
          <strong className="text-primary-900 dark:text-primary-200">Kort antwoord:</strong> hematoom → ontsteking →
          granulatieweefsel → zachte callus → harde callus → remodelling.
        </p>
      </div>
    </div>
  )
}
