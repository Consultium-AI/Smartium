export default function Sect06SurveillanceEnFollowUp() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Surveillance en follow-up</h2>
      <p>Kleine asymptomatische AAA: actieve surveillance met echo (CT/CTA bij twijfel of voor planning). Groei en klachten bepalen het tempo.</p>

      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Diameter</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Beleid (kort)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">kleiner dan 3,0 cm</td>
              <td className="px-4 py-3">Geen AAA; geen follow-up</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">3,0–3,9 cm</td>
              <td className="px-4 py-3">Conservatief; echo ongeveer elke 3 jaar</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">4,0–4,9 cm</td>
              <td className="px-4 py-3">Conservatief; echo jaarlijks</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">5,0–5,4 cm</td>
              <td className="px-4 py-3">Intensiever; echo of CT elke 3–6 maanden</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">5,5 cm of meer (mannen)</td>
              <td className="px-4 py-3">Electieve interventie (EVAR of open)</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">5,0 cm of meer (vrouwen)</td>
              <td className="px-4 py-3">Electieve interventie (hoger ruptuurrisico)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Extra: snelle groei (bijv. meer dan 10 mm per jaar of meer dan 5 mm in 6 maanden), symptomen of ruptuur → andere urgentie.</p>
    </div>
  )
}
