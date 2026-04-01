export default function Sect05RisicofactorenEnPreventie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Risicofactoren en preventie</h2>
      <p>Bij PAV horen duidelijke risicofactoren. De belangrijkste zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>roken;</li>
        <li>diabetes mellitus;</li>
        <li>hypertensie;</li>
        <li>hypercholesterolemie;</li>
        <li>hyperhomocysteïnemie;</li>
        <li>familiaire belasting;</li>
        <li>leeftijd.</li>
      </ul>
      <p>In de behandeling van risicofactoren ligt de nadruk op:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>stoppen met roken;</li>
        <li>tensieregulatie;</li>
        <li>starten van een statine;</li>
        <li>glucose-regulatie;</li>
        <li>en algemeen secundair preventief beleid, onder andere met clopidogrel en leefstijladvies.</li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Soorten preventie</h3>
      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 3. Primaire, secundaire en tertiaire preventie</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Type preventie</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Primair</td>
                <td className="px-4 py-3">Voorkomen dat gezonde mensen een ziekte krijgen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Secundair</td>
                <td className="px-4 py-3">Vroege opsporing en behandeling bij mensen met verhoogd risico of een beginnende ziekte</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Tertiair</td>
                <td className="px-4 py-3">Complicaties en verergering voorkomen en zelfredzaamheid bevorderen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
