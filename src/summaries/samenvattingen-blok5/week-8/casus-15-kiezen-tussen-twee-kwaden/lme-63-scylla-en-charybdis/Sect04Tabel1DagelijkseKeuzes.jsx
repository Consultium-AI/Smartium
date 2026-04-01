export default function Sect04Tabel1DagelijkseKeuzes() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Tabel 1. Voorbeelden van dagelijkse keuzes in de zorg
      </h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Gebied
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden van keuzes
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Contact met zorg</td>
              <td className="px-4 py-3 align-top">Wel of niet naar de dokter bij klachten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Informatie zoeken</td>
              <td className="px-4 py-3 align-top">Vertrouwen op de arts, of op internet/TikTok/influencers</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Behandeling volgen</td>
              <td className="px-4 py-3 align-top">Advies opvolgen, behandeling afmaken, second opinion vragen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Leefstijl</td>
              <td className="px-4 py-3 align-top">Wel of niet roken, drinken, stoppen met roken of drinken</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Ondersteuning</td>
              <td className="px-4 py-3 align-top">Wel of niet hulp zoeken bij stoppen; wie betaalt die hulp?</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
