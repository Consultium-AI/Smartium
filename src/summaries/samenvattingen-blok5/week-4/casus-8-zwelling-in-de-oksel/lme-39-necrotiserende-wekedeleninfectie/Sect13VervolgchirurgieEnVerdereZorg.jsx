export default function Sect13VervolgchirurgieEnVerdereZorg() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Vervolgchirurgie en verdere zorg</h2>
      <p>
        De behandeling stopt niet na de eerste operatie. Er is vaak sprake van een actief vervolgbeleid met herhaalde
        controles.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Vervolgbeleid na de eerste operatie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderdeel
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Wat gebeurt er?
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Eerste re-inspectie</td>
              <td className="px-3 py-3 align-top">
                Binnen <strong>6 tot 12 uur</strong>
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Verdere controles</td>
              <td className="px-3 py-3 align-top">
                Herhalen tot de patiënt <strong>necrosevrij</strong> is
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Eventuele re-excisie</td>
              <td className="px-3 py-3 align-top">Verwijderen van nieuw of resterend necrotisch weefsel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Wondinspectie</td>
              <td className="px-3 py-3 align-top">Regelmatig controleren</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Aanvullend debridement</td>
              <td className="px-3 py-3 align-top">
                Indien nodig elke <strong>6–12 uur</strong>
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Bij onvoldoende vitale huid</td>
              <td className="px-3 py-3 align-top">Uiteindelijk kan reseceren nodig zijn</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Latere fase</td>
              <td className="px-3 py-3 align-top">
                Soms is <strong>amputatie</strong> van een functioneel geworden extremiteit de beste oplossing
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een belangrijke boodschap is dat deze infectie vaak meerdere operaties vraagt. Als de huid uiteindelijk toch niet
        voldoende vitaal blijkt, moet die alsnog worden verwijderd. Dit kan leiden tot forse mutilerende resecties met
        aanzienlijke morbiditeit.
      </p>
    </div>
  )
}
