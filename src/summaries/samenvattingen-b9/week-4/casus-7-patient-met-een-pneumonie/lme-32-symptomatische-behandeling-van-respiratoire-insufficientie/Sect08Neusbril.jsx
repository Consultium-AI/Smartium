export default function Sect08Neusbril() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Zuurstoftoediening: van neusbril tot Optiflow</h2>
      <p>
        Als iemand extra zuurstof nodig heeft, zijn er verschillende manieren om dat toe te dienen. De keuze hangt af van de ernst van de hypoxie, de gewenste FiO2 en de situatie van de patiënt.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Neusbril</h3>
      <p>
        Met een neusbril kun je extra zuurstof geven aan een patiënt. Per liter zuurstof die je toedient, gaat de FiO2 met ongeveer 4% omhoog.
      </p>
      <p>Een handige vuistregel is:</p>
      <p className="font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Neusbril: hoeveelheid zuurstof en verwachte FiO2</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Toediening</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Verwachte FiO2</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3">0 L/min</td>
              <td className="px-4 py-3">21%</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3">1 L/min</td>
              <td className="px-4 py-3">25%</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3">2 L/min</td>
              <td className="px-4 py-3">29%</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3">3 L/min</td>
              <td className="px-4 py-3">33%</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3">4 L/min</td>
              <td className="px-4 py-3">37%</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3">5 L/min</td>
              <td className="px-4 py-3">41%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Meer dan 5 L/min op een neusbril is pijnlijk voor de patiënt, omdat de lucht dan niet verwarmd en niet bevochtigd is. Je kunt dus maximaal ongeveer 40% FiO2 bereiken met een neusbril.
      </p>
    </div>
  )
}
