export default function Sect03MechanismenTriggersEnSubstraat() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Mechanismen: triggers en substraat</h2>
      <p>Er zijn twee hoofdmechanismen die samen AF mogelijk maken: triggers en substraat.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Triggers zijn de vonken die het ritme ontregelen. Dit zijn vaak snelle, automatische foci, meestal in de longvenen.</li>
        <li>Substraat is de brandstof of bodem waarop AF kan blijven bestaan. Daarbij spelen structurele veranderingen in het atriale weefsel een rol, zoals fibrose, dilatatie en inflammatie.</li>
      </ul>
      <p>
        Fibrose maakt de geleiding trager. Daardoor kunnen elektrische impulsen blijven rondcirkelen en ontstaat re-entry. Als de “ring” van weefsel groot genoeg is en de geleiding traag genoeg, haalt de staart van de impuls de kop niet in en blijft de cirkelbeweging bestaan.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Mechanismen van AF</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Begrip</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Uitleg</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Trigger</td>
              <td className="px-4 py-3 align-top">Snelle prikkel die AF op gang brengt, vaak uit de longvenen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Substraat</td>
              <td className="px-4 py-3 align-top">Veranderd atriaal weefsel waarin AF kan blijven bestaan</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Re-entry</td>
              <td className="px-4 py-3 align-top">Impuls blijft in een kring rondlopen zonder uit te doven</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Remodeling</td>
              <td className="px-4 py-3 align-top">Structurele verandering van het atrium, bijvoorbeeld fibrose en dilatatie</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
