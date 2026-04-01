export default function Sect07TypeIEnTypeIIFouten() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Type I- en type II-fouten</h2>
      <p>Bij hypothesetoetsing kun je fouten maken. De uitkomst hangt af van wat in werkelijkheid waar is en wat jij concludeert.</p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Type I- en type II-fouten</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Werkelijkheid</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Conclusie: H0 verwerpen</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Conclusie: H0 niet verwerpen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">H0 is waar</td>
                <td className="px-4 py-3 align-top">
                  <strong>Type I-fout</strong>: kans = α
                </td>
                <td className="px-4 py-3 align-top">Correcte beslissing: kans = 1 - α</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">H0 is onwaar</td>
                <td className="px-4 py-3 align-top">Correcte beslissing: kans = 1 - β</td>
                <td className="px-4 py-3 align-top">
                  <strong>Type II-fout</strong>: kans = β
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Type I-fout: je verwerpt de nulhypothese terwijl die eigenlijk waar is. De kans daarop is alpha (α). Dit is ook het significantieniveau.
      </p>
      <p>
        Type II-fout: je verwerpt de nulhypothese niet terwijl die eigenlijk onwaar is. De kans daarop is beta (β).
      </p>
      <p>Power is 1 - β.</p>
    </div>
  )
}
