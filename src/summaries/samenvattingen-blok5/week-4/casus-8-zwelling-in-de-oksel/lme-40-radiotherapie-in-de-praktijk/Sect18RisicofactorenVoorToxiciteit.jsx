export default function Sect18RisicofactorenVoorToxiciteit() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Risicofactoren voor toxiciteit</h2>
      <p>
        Niet alle patiënten en niet alle behandelingen hebben evenveel risico op toxiciteit. Er zijn
        behandelingsgerelateerde en patiëntgerelateerde risicofactoren.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 6. Risicofactoren voor toxiciteit</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Behandeling
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Patiënt
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">
                Combinatiebehandeling: <strong>chemoradiatie</strong>
              </td>
              <td className="px-3 py-3 align-top">
                <strong>Bestaande hart- en vaatziekte</strong>
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">
                <strong>Bestralingsvolume</strong>
              </td>
              <td className="px-3 py-3 align-top">
                <strong>Eerdere radiotherapie</strong>
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">
                <strong>Gevoeligheid van bestraald weefsel</strong>
              </td>
              <td className="px-3 py-3 align-top">
                <strong>Roken</strong>
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">
                <strong>Totale dosis</strong>
              </td>
              <td className="px-3 py-3 align-top">
                <strong>Diabetes mellitus</strong>
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">
                <strong>Dosis per fractie</strong>
              </td>
              <td className="px-3 py-3 align-top">
                <strong>Eerdere chirurgische ingrepen</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
