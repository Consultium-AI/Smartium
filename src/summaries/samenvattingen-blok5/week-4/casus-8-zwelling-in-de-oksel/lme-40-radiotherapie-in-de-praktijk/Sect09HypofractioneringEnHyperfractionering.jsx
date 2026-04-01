export default function Sect09HypofractioneringEnHyperfractionering() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hypofractionering en hyperfractionering</h2>
      <p>
        Hypofractionering: fracties groter dan 2 Gy. Voor dezelfde totale dosis zijn dan minder fracties nodig.
      </p>
      <p>
        Hyperfractionering: fracties kleiner dan 2 Gy. Voor dezelfde totale dosis zijn dan meer fracties nodig.
      </p>
      <p>
        Bij fractionering draait het om de juiste balans tussen het doden van tumorcellen en het beschermen van gezond
        weefsel.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Vormen van fractionering</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Vorm
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Fractiegrootte
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Normofractionering</td>
              <td className="px-3 py-3 align-top">ongeveer 2 Gy per fractie</td>
              <td className="px-3 py-3 align-top">Standaard schema</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hypofractionering</td>
              <td className="px-3 py-3 align-top">{`> 2 Gy per fractie`}</td>
              <td className="px-3 py-3 align-top">Minder fracties voor dezelfde totale dosis</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hyperfractionering</td>
              <td className="px-3 py-3 align-top">{`< 2 Gy per fractie`}</td>
              <td className="px-3 py-3 align-top">Meer fracties voor dezelfde totale dosis</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
