export default function Sect07AutoImmuunziekteVersusAutoImmuuniteit() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Auto-immuniteit versus auto-immuunziekte</h2>
      <p>
        Auto-immuniteit komt voor bij gezonde mensen zonder dat dit meteen ziekte veroorzaakt. Daarbij kunnen
        auto-antistoffen aanwezig zijn tegen antigenen van verschillende cellen, weefsels of organen. Deze
        worden natuurlijke of fysiologische auto-antistoffen genoemd. Ze horen bij het normale immuunsysteem.
      </p>
      <p>
        Daartegenover staan de pathofysiologische auto-antistoffen. Die kunnen wel schade veroorzaken en zo
        bijdragen aan een auto-immuunziekte.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 4. Verschil tussen natuurlijke en pathofysiologische auto-antistoffen
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Natuurlijke auto-antistoffen
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Pathofysiologische auto-antistoffen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Aanwezig bij</td>
              <td className="px-4 py-3 align-top">Gezonde personen</td>
              <td className="px-4 py-3 align-top">Patiënten met auto-immuunziekten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Affiniteit</td>
              <td className="px-4 py-3 align-top">Laag</td>
              <td className="px-4 py-3 align-top">Hoog</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Specificiteit</td>
              <td className="px-4 py-3 align-top">Laag</td>
              <td className="px-4 py-3 align-top">Hoog</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Titer</td>
              <td className="px-4 py-3 align-top">Laag</td>
              <td className="px-4 py-3 align-top">Hoog</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Isotype</td>
              <td className="px-4 py-3 align-top">IgM</td>
              <td className="px-4 py-3 align-top">vaak IgG</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Effect</td>
              <td className="px-4 py-3 align-top">Onderdeel van normaal immuunsysteem</td>
              <td className="px-4 py-3 align-top">Kan schade en ziekte veroorzaken</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een belangrijk kenmerk van natuurlijke auto-antistoffen is dus dat ze meestal laag-affiniteit,
        laag-specifiek en laag-titer zijn, en meestal van het IgM-isotype. Pathofysiologische
        auto-antistoffen zijn juist sterker gericht tegen een bepaald auto-antigeen en kunnen veel
        schadelijker zijn.
      </p>
    </div>
  )
}
