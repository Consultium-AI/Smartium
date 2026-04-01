export default function Sect06DeVierTypenShock() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De 4 typen shock</h2>
      <p>
        Er worden 4 hoofdtypen shock onderscheiden: <span className="font-semibold">hypovolemische</span>, <span className="font-semibold">cardiogene</span>, <span className="font-semibold">obstructieve</span> en <span className="font-semibold">distributieve shock</span>. Het schema helpt om ze van elkaar te onderscheiden: telkens moet je kijken waar het probleem zit binnen de circulatie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Overzicht van de typen shock</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Type shock</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kernprobleem</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Typische oorzaak/kenmerk</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Hypovolemisch</td>
              <td className="px-4 py-3 align-top">Te weinig volume in de circulatie</td>
              <td className="px-4 py-3 align-top">Bloedverlies, vochtverlies, plasmaverlies</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Cardiogeen</td>
              <td className="px-4 py-3 align-top">Slechte pompfunctie van het hart</td>
              <td className="px-4 py-3 align-top">Verminderde contractiliteit, lage cardiac output</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Obstructief</td>
              <td className="px-4 py-3 align-top">Obstructie/compressie van de circulatie</td>
              <td className="px-4 py-3 align-top">Longembolie, spanningspneumothorax, tamponade</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Distributief</td>
              <td className="px-4 py-3 align-top">Vergrote vaatcapaciteit door vasodilatatie</td>
              <td className="px-4 py-3 align-top">Sepsis, anafylaxie, neurogene shock</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
