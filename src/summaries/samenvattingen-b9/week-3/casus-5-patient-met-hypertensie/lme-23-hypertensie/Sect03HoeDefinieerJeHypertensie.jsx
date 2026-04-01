export default function Sect03HoeDefinieerJeHypertensie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe definieer je hypertensie?</h2>
      <p>
        De bloeddruk wordt meestal ingedeeld in categorieën op basis van systolische en diastolische waarden. Daarbij geldt: hoe hoger de bloeddruk, hoe groter het risico.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. Indeling van bloeddruk volgens WHO</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Categorie</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Systolisch (mmHg)</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Diastolisch (mmHg)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Optimaal</td>
                <td className="px-4 py-3">&lt;120</td>
                <td className="px-4 py-3">&lt;80</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Normaal</td>
                <td className="px-4 py-3">120–129</td>
                <td className="px-4 py-3">80–84</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Hoognormaal</td>
                <td className="px-4 py-3">130–139</td>
                <td className="px-4 py-3">85–90</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Graad 1 hypertensie</td>
                <td className="px-4 py-3">140–159</td>
                <td className="px-4 py-3">90–99</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Graad 2 hypertensie</td>
                <td className="px-4 py-3">160–179</td>
                <td className="px-4 py-3">100–109</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Graad 3 hypertensie</td>
                <td className="px-4 py-3">&gt;180</td>
                <td className="px-4 py-3">&gt;110</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Geïsoleerde systolische hypertensie</td>
                <td className="px-4 py-3">&gt;140</td>
                <td className="px-4 py-3">&lt;90</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Belangrijk is ook dat de afkapwaarden en behandelgrenzen kunnen veranderen. Ze hangen samen met hoe effectief, veilig en goedkoop de behandeling is geworden.
      </p>
    </div>
  )
}
