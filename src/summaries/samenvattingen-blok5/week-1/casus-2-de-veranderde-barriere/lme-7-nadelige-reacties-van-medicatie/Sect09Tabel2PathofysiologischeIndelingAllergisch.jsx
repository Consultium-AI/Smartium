export default function Sect09Tabel2PathofysiologischeIndelingAllergisch() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De typen allergische reacties</h2>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Pathofysiologische indeling van allergische reacties
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Mechanisme
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Tijdsbeloop
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden / kenmerken
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type I</td>
              <td className="px-4 py-3 align-top">IgE-gemedieerd en soms niet-IgE-gemedieerd</td>
              <td className="px-4 py-3 align-top">Meestal binnen 1 uur, maximaal 6 uur</td>
              <td className="px-4 py-3 align-top">Urticaria, angio-oedeem, anafylaxie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type II</td>
              <td className="px-4 py-3 align-top">Antistoffen tegen celoppervlak</td>
              <td className="px-4 py-3 align-top">Direct of na blootstelling</td>
              <td className="px-4 py-3 align-top">Cytopenieën, hemolytische anemie, trombocytopenie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type III</td>
              <td className="px-4 py-3 align-top">Immuuncomplexvorming</td>
              <td className="px-4 py-3 align-top">Meestal later dan 1 dag</td>
              <td className="px-4 py-3 align-top">Serumziekte, vasculitis, Arthusreactie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type IV</td>
              <td className="px-4 py-3 align-top">T-cel-gemedieerd</td>
              <td className="px-4 py-3 align-top">Meestal pas na 12 uur of later</td>
              <td className="px-4 py-3 align-top">Maculopapulair exantheem, DRESS, SJS/TEN</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Niet-immuun</td>
              <td className="px-4 py-3 align-top">Pseudoallergisch</td>
              <td className="px-4 py-3 align-top">Variabel</td>
              <td className="px-4 py-3 align-top">Histamine, bradykinine, complement, leukotriënen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
