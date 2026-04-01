export default function Sect14Tabel5Vergelijking() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 5. Kern van ANCA-geassocieerde versus immuuncomplex-gemedieerde kleinevatenvasculitis
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                ANCA-geassocieerd
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Immune complex-gemedieerd
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Belangrijk mechanisme</td>
              <td className="px-4 py-3 align-top">Antistoffen tegen neutrofielen</td>
              <td className="px-4 py-3 align-top">Neerslag van immuuncomplexen in de vaatwand</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Belangrijkste antigeen/cel</td>
              <td className="px-4 py-3 align-top">MPO, PR3, neutrofielen</td>
              <td className="px-4 py-3 align-top">Immuuncomplexen, complement, neutrofielen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Typische schade</td>
              <td className="px-4 py-3 align-top">Vaatwandbeschadiging door geactiveerde neutrofielen</td>
              <td className="px-4 py-3 align-top">Leukocytoclastische vasculitis</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Voorbeelden</td>
              <td className="px-4 py-3 align-top">GPA, MPA, EGPA</td>
              <td className="px-4 py-3 align-top">
                IgA-vasculitis, cryoglobulinemische vasculitis, urticariële vormen
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Klinische relevantie</td>
              <td className="px-4 py-3 align-top">Vaak ernstig en levensbedreigend</td>
              <td className="px-4 py-3 align-top">Vaak huidafwijkingen, maar kan ook orgaanbetrokkenheid geven</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
