export default function Sect03Tabel1BelangrijkeMechanismen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Tabel 1. Belangrijke mechanismen binnen het spectrum
      </h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Mechanisme
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Wat gaat er mis?
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijke cytokinen/signalen
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Inflammasomopathie</td>
              <td className="px-4 py-3 align-top">Het inflammasoom is overactief</td>
              <td className="px-4 py-3 align-top">IL-1β, IL-18</td>
              <td className="px-4 py-3 align-top">Familaire Mediterrane Koorts (FMF)</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Interferonopathie</td>
              <td className="px-4 py-3 align-top">Overmatige interferonproductie</td>
              <td className="px-4 py-3 align-top">Type I interferon, soms ook type II interferon</td>
              <td className="px-4 py-3 align-top">Aicardi-Goutières syndroom, SAVI, CANDLE/PRAAS</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Endoplasmatisch reticulum stress syndroom
              </td>
              <td className="px-4 py-3 align-top">Celdruk door verkeerd gevouwen eiwitten en UPR-activatie</td>
              <td className="px-4 py-3 align-top">IL-1β, interferonen</td>
              <td className="px-4 py-3 align-top">TRAPS</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Relopathy</td>
              <td className="px-4 py-3 align-top">Overactivatie van NF-kappa-B</td>
              <td className="px-4 py-3 align-top">IL-1β, IL-6, IL-18, TNF-α</td>
              <td className="px-4 py-3 align-top">Haplo-insufficiëntie van A20, ziekte van Behçet</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
