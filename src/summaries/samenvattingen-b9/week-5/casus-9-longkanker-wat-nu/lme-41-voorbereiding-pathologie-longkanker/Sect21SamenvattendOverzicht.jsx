export default function Sect21SamenvattendOverzicht() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Samenvattend overzicht</h2>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Kernpunten uit de casus</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderdeel</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Uitleg</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Klachten</td>
              <td className="px-4 py-3 align-top">Kortademigheid, moeheid, gewichtsverlies, verminderde eetlust, hoesten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Infecties</td>
              <td className="px-4 py-3 align-top">Door bronchusobstructie met slijmstase</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Zwelling boven sleutelbeen</td>
              <td className="px-4 py-3 align-top">Waarschijnlijk uitzaaiing</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Handafwijking</td>
              <td className="px-4 py-3 align-top">Pulmonale osteo-artropathie / horlogeglasnagels</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Hypercalciëmie</td>
              <td className="px-4 py-3 align-top">Paraneoplastisch of door botmetastasen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Behandeling</td>
              <td className="px-4 py-3 align-top">Niet curatief, wel palliatieve opties zoals chemo of radiotherapie</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
