export default function Sect08SamenvattendOnderscheidTabel2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Samenvattend onderscheid</h2>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. De kern in één overzicht</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Onderdeel</th>
              <th className="px-4 py-3 font-semibold">Waar je op let</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Onderbouwde differentiaaldiagnose</td>
              <td className="px-4 py-3 align-top">
                Niet één losse oorzaak, maar een beredeneerde lijst van mogelijkheden
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Indeling naar orgaansystemen</td>
              <td className="px-4 py-3 align-top">GI, urogenitaal, vasculair en metabool</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Alarmsymptomen</td>
              <td className="px-4 py-3 align-top">Tekenen dat urgent handelen nodig is</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Vervolgstappen</td>
              <td className="px-4 py-3 align-top">Handelen op basis van klinische bevindingen en urgentie</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
