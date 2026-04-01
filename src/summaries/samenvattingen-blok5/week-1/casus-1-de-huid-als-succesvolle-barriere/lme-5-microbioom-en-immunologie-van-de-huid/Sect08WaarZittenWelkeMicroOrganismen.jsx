export default function Sect08WaarZittenWelkeMicroOrganismen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Waar zitten welke micro-organismen?</h2>
      <p>
        De samenstelling van het huidmicrobioom verschilt per huidgebied. Dat komt doordat elk gebied andere
        omgevingsfactoren heeft, zoals vocht, temperatuur en talgproductie.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Microbioom per huidtype</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Huidtype
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerken
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Typische micro-organismen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Vochtige huidgebieden</td>
              <td className="px-4 py-3 align-top">
                Hoger vochtgehalte en hogere temperatuur, vaak in gesloten delen zoals oksels en liezen
              </td>
              <td className="px-4 py-3 align-top">
                Vooral bacteriën zoals <em>Staphylococcus</em> en <em>Corynebacterium</em>, en schimmels zoals{' '}
                <em>Malassezia</em>
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Droge huidgebieden</td>
              <td className="px-4 py-3 align-top">
                Lage vochtigheid en minder talgproductie, bijvoorbeeld onderarmen en benen
              </td>
              <td className="px-4 py-3 align-top">
                Grotere diversiteit, onder andere soorten van <em>Corynebacterium</em> en andere Gram-positieve bacteriën
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Vette / talgrijke huidgebieden
              </td>
              <td className="px-4 py-3 align-top">Hoge talgproductie, bijvoorbeeld neus, hoofdhuid en borst</td>
              <td className="px-4 py-3 align-top">
                Lipofiele micro-organismen zoals <em>Malassezia</em> en <em>Cutibacterium acnes</em>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Op vette huidgebieden floreert Cutibacterium acnes vooral in de haarfollikels. Dat is belangrijk bij acne.
      </p>
    </div>
  )
}
