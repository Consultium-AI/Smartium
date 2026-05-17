export default function Sect07ActivatieVanHetPancreassap () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Activatie van het pancreassap</h2>
      <p>
        Wanneer het pancreassap in het duodenum komt, neutraliseert het <strong className="text-slate-900 dark:text-slate-100">bicarbonaat</strong>{' '}het zure maagvocht. Hierdoor ontstaat een gunstiger milieu voor de activatie van de zymogenen.
      </p>
      <p>De activatie verloopt via een cascade:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          in het duodenum zorgen <strong className="text-slate-900 dark:text-slate-100">enteropeptidasen</strong>{' '}ervoor dat <strong className="text-slate-900 dark:text-slate-100">trypsinogeen</strong>{' '}wordt omgezet in <strong className="text-slate-900 dark:text-slate-100">trypsine</strong>;
        </li>
        <li>trypsine activeert vervolgens andere proteasen.</li>
      </ul>
      <p>
        Dat is een belangrijk punt: de verteringsenzymen worden dus pas actief nadat ze het duodenum hebben bereikt.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Van secretie tot activatie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Stap</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Gebeurtenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">1</td>
              <td className="p-3 align-top">Acinaire cellen scheiden enzymen uit in inactieve vorm</td>
            </tr>
            <tr>
              <td className="p-3 align-top">2</td>
              <td className="p-3 align-top">Ductcellen voegen bicarbonaatrijke vloeistof toe</td>
            </tr>
            <tr>
              <td className="p-3 align-top">3</td>
              <td className="p-3 align-top">Pancreassap komt in het duodenum</td>
            </tr>
            <tr>
              <td className="p-3 align-top">4</td>
              <td className="p-3 align-top">Bicarbonaat neutraliseert het maagzuur</td>
            </tr>
            <tr>
              <td className="p-3 align-top">5</td>
              <td className="p-3 align-top">Enteropeptidasen activeren trypsinogeen tot trypsine</td>
            </tr>
            <tr>
              <td className="p-3 align-top">6</td>
              <td className="p-3 align-top">Trypsine activeert andere proteasen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
