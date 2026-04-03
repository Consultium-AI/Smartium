export default function Sect08SchildklierGraves() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Auto-immuunziekten van de schildklier
      </h2>
      <p>De schildklier kan op twee heel verschillende manieren doelwit zijn van auto-immuniteit:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Ziekte van Graves: stimulatie van de schildklier en dus hyperthyreoïdie;</li>
        <li>Ziekte van Hashimoto: destructie van schildkliercellen en dus hypothyreoïdie.</li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Graves: stimulatie van de schildklier</h3>
      <p>
        Bij de ziekte van Graves zijn in het serum antistoffen aanwezig tegen de TSH-receptor. Deze
        antistoffen stimuleren de receptor, waardoor de schildklier meer hormoon gaat produceren. Daardoor
        daalt de TSH-productie door de hypofyse en is het TSH laag, terwijl het vrije T4 (FT4) hoog is.
      </p>
      <p>De diagnose hyperthyreoïdie wordt dus ondersteund door:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>verlaagd TSH;</li>
        <li>verhoogd FT4.</li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Graves versus Hashimoto</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Ziekte van Graves
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Ziekte van Hashimoto
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Hoofdmecanisme
              </td>
              <td className="px-4 py-3 align-top">Stimulatie van de TSH-receptor</td>
              <td className="px-4 py-3 align-top">Destructie van schildkliercellen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Schildklierfunctie
              </td>
              <td className="px-4 py-3 align-top">Hyperthyreoïdie</td>
              <td className="px-4 py-3 align-top">Hypothyreoïdie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Belangrijke antistoffen
              </td>
              <td className="px-4 py-3 align-top">TSH-receptor-antistoffen</td>
              <td className="px-4 py-3 align-top">Anti-TPO en anti-TG</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Behandeling</td>
              <td className="px-4 py-3 align-top">Onderdrukking van schildklierhormoonproductie</td>
              <td className="px-4 py-3 align-top">Hormoonsuppletie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-950 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtspunt:</strong> Waarom zijn bij
          Graves TSH laag en FT4 hoog?</p>
        <p className="mt-2">
          <span className="font-semibold">Kort antwoord:</span>{' '}de auto-antistoffen stimuleren de TSH-receptor direct, waardoor de schildklier
          veel hormoon maakt en de hypofyse minder TSH afgeeft.
        </p>
      </div>
    </div>
  )
}
