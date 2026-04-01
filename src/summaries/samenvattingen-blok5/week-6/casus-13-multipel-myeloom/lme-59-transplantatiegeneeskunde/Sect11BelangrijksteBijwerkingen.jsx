export default function Sect11BelangrijksteBijwerkingen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Belangrijkste bijwerkingen</h2>
      <p>De belangrijkste bijwerkingen verschillen per middel.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 5. Belangrijkste bijwerkingen van immunosuppressiva
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Middel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijke bijwerkingen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Prednison</td>
              <td className="px-4 py-3 align-top">
                Hypertensie, suikerziekte / verslechtering daarvan, spierzwakte, overgewicht / dik gezicht
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Tacrolimus</td>
              <td className="px-4 py-3 align-top">
                Hypertensie, suikerziekte, nierschade, zenuwprikkeling of zenuwschade, verhoogd cholesterol
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Cyclosporine</td>
              <td className="px-4 py-3 align-top">
                Hypertensie, meer haargroei, suikerziekte, nierschade, zenuwprikkeling of zenuwschade, verhoogd cholesterol
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Mycofenolaat mofetil</td>
              <td className="px-4 py-3 align-top">Beenmergremming, buikklachten / diarree</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Sirolimus / Everolimus</td>
              <td className="px-4 py-3 align-top">
                Nierschade, mondzweren, verhoogd cholesterol, gestoorde leverwaarden, beenmergremming, buikklachten /
                diarree
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Er zijn ook algemene nadelen van immuunsuppressie:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>verhoogd risico op infecties</li>
        <li>verhoogd risico op kanker</li>
        <li>verhoogd risico op hart- en vaatziekten</li>
      </ul>
    </div>
  )
}
