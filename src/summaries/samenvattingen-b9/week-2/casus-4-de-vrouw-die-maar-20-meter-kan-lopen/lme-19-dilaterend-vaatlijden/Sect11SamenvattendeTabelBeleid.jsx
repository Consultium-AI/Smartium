export default function Sect11SamenvattendeTabelBeleid() {
  return (
    <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Samenvattende tabel voor het hele beleid</h2>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 5. Praktisch beleid bij AAA in één overzicht</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Situatie</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Beleid</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Aorta &lt; 3,0 cm</td>
                <td className="px-4 py-3">Geen AAA</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">3,0–3,9 cm</td>
                <td className="px-4 py-3">Conservatieve follow-up, echo elke 3 jaar</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">4,0–4,9 cm</td>
                <td className="px-4 py-3">Conservatieve follow-up, echo jaarlijks</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">5,0–5,4 cm</td>
                <td className="px-4 py-3">Intensieve follow-up, echo of CT elke 3–6 maanden</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">≥ 5,5 cm bij man</td>
                <td className="px-4 py-3">Interventie overwegen/aanbevolen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">≥ 5,0 cm bij vrouw</td>
                <td className="px-4 py-3">Interventie overwegen/aanbevolen</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Snelle groei</td>
                <td className="px-4 py-3">Interventie overwegen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Symptomen</td>
                <td className="px-4 py-3">Interventie overwegen</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Ruptuur</td>
                <td className="px-4 py-3">Spoedinterventie</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Na behandeling of follow-up</td>
                <td className="px-4 py-3">Altijd cardiovasculair risicomanagement</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
