export default function Sect10BelangrijkeZiektebeeldenTabel() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Belangrijke ziektebeelden</h2>
      <p>
        Autoinflammatoire aandoeningen zijn vaak genetisch bepaald, maar niet altijd. Hieronder staan de
        belangrijkste ziektebeelden die uit de module naar voren komen.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Overzicht van belangrijke ziektebeelden
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Ziektebeeld
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">FMF</td>
              <td className="px-4 py-3 align-top">genetisch, autosomaal recessief</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Ziekte van Schnitzler
              </td>
              <td className="px-4 py-3 align-top">
                verworven autoinflammatoir ziektebeeld, vaak urticariële rash, monoclonale IgM
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">VEXAS</td>
              <td className="px-4 py-3 align-top">UBA1-mutatie, X-gebonden, somatisch, autoinflammatoir</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
