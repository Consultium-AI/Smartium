export default function Sect12AbCDERegel() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De ABCDE-regel</h2>
      <p>
        De ABCDE-methode wordt gebruikt om een melanoom te herkennen. Het is een systematische manier om naar een
        gepigmenteerde huidafwijking te kijken.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 7. De ABCDE-regel</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Letter
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">A – Asymmetrie</td>
              <td className="px-4 py-3 align-top">De moedervlek is niet symmetrisch in kleur of vorm</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">B – Border</td>
              <td className="px-4 py-3 align-top">De moedervlek heeft een onregelmatige, grillige rand</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">C – Color</td>
              <td className="px-4 py-3 align-top">De moedervlek verandert van kleur of heeft verschillende kleuren</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">D – Diameter</td>
              <td className="px-4 py-3 align-top">De moedervlek heeft een doorsnede van meer dan 6 mm</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">E – Evolving</td>
              <td className="px-4 py-3 align-top">De moedervlek jeukt, bloedt of verandert</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De ABCDE-regel is bedoeld als hulp bij het herkennen van een melanoom. De kenmerken worden ook geïllustreerd met
        voorbeelden van benigne en maligne moedervlekken: benigne laesies zijn meestal regelmatiger, terwijl maligne
        laesies vaker asymmetrisch zijn, onregelmatige randen hebben en meer kleurvariatie tonen.
      </p>
    </div>
  )
}
