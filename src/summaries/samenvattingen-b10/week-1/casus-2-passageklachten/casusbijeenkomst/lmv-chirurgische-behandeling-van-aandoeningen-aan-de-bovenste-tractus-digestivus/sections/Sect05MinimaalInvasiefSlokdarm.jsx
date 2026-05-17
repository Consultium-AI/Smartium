export default function Sect05MinimaalInvasiefSlokdarm() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Minimale invasieve chirurgie bij slokdarmkanker
      </h2>
      <p>
        Bij slokdarmchirurgie kan de operatie open, minimaal invasief, hybride of robot-geassisteerd worden uitgevoerd. De grote lijn is dat minder chirurgisch trauma leidt tot betere postoperatieve resultaten.
      </p>
      <p>De bekende gerandomiseerde studies laten zien dat minimaal invasieve technieken:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>minder complicaties geven, vooral pulmonale complicaties;</li>
        <li>een betere kwaliteit van leven geven;</li>
        <li>geen slechtere oncologische uitkomsten of overleving geven;</li>
        <li>een kortere opnameduur geven;</li>
        <li>hetzelfde percentage naadlekkages laten zien.</li>
      </ul>
      <p>
        Belangrijk is dat open chirurgie nog steeds mag als de operatie lastig is. Er is dus ruimte voor een praktische keuze.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">
        Tabel 3. Minimale invasieve versus open slokdarmresectie
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Onderdeel</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Minimale invasieve chirurgie</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Open chirurgie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Complicaties</td>
              <td className="p-3 align-top">Minder, vooral longcomplicaties</td>
              <td className="p-3 align-top">Meer trauma, meer complicaties</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Kwaliteit van leven</td>
              <td className="p-3 align-top">Beter</td>
              <td className="p-3 align-top">Lager</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Naadlekkage</td>
              <td className="p-3 align-top">Vergelijkbaar</td>
              <td className="p-3 align-top">Vergelijkbaar</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Oncologische uitkomsten</td>
              <td className="p-3 align-top">Vergelijkbaar</td>
              <td className="p-3 align-top">Vergelijkbaar</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Opnameduur</td>
              <td className="p-3 align-top">Korter</td>
              <td className="p-3 align-top">Langer</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
