export default function Sect09Patronen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Patronen bij acute nierschade</h2>
      <p>
        Patroonherkenning helpt je om sneller aan de juiste oorzaak te denken. Het is geen wet van meden en persen, maar wel een heel nuttig hulpmiddel. Als je bepaalde combinaties van klachten en bevindingen ziet, moet er een belletje gaan rinkelen.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 3. Patronen die extra aandacht verdienen</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Patroon</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Denk aan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Hypercalciëmie en proteïnurie</td>
              <td className="px-4 py-3">Multipel myeloom</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Hypokaliëmie</td>
              <td className="px-4 py-3">Diuretica of braken</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Persisterende bovenste luchtweginfectie en urineafwijkingen</td>
              <td className="px-4 py-3">Vasculitis</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Huidafwijkingen en conjunctivitis</td>
              <td className="px-4 py-3">Medicatie-geïnduceerde vasculitis of infecties, zoals hantavirus en leptospirose</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Acute anurie en verder gezond</td>
              <td className="px-4 py-3">Urine-obstructie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Hypertensie en bloedbeeldafwijkingen of hemolyse</td>
              <td className="px-4 py-3">Trombotische microangiopathie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De meeste combinaties spreken vrij duidelijk voor zich. Vooral vasculitis kan verschillende gezichten hebben, en daarom moet je bij huidafwijkingen, luchtwegklachten en urineafwijkingen extra breed denken. Een plotselinge anurie bij een verder gezonde patiënt doet juist sterk aan obstructie denken. En hypertensie samen met bloedbeeldafwijkingen of hemolyse past bij trombotische microangiopathie.
      </p>
    </div>
  )
}
