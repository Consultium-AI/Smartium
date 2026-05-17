export default function Sect06DuctsysteemEnPancreassap () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Ductsysteem en pancreassap</h2>
      <p>
        De kleine ducten in het centrum van een acinus bestaan uit:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">intercalated duct cells</strong>;
        </li>
        <li>
          en nog centraler <strong className="text-slate-900 dark:text-slate-100">centro-acinaire cellen</strong>.
        </li>
      </ul>
      <p>
        Deze cellen produceren een <strong className="text-slate-900 dark:text-slate-100">bicarbonaatrijke vloeistof</strong>{' '}die de enzymen meeneemt. Samen met de enzymen vormt dit het{' '}
        <strong className="text-slate-900 dark:text-slate-100">pancreassap</strong>.
      </p>
      <p>Pancreassap bestaat dus uit twee onderdelen:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">enzymrijke secretie</strong> vanuit de acinaire cellen;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">NaHCO₃-rijke secretie</strong>{' '}
          vanuit de ductcellen.
        </li>
      </ol>
      <p>
        De ductcellen produceren een vloeistof die helpt om het pancreasvocht door de afvoerkanalen te transporteren. De pancreas produceert in totaal een grote hoeveelheid verteringssap per dag.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 4. Exocriene celtypen en hun bijdrage
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Celtype</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Ligging</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Product / functie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Acinaire cel</td>
              <td className="p-3 align-top">Rond het acinuslumen</td>
              <td className="p-3 align-top">Verteringsenzymen, opgeslagen in zymogeengranula</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Centro-acinaire cel</td>
              <td className="p-3 align-top">Centraal in het acinus</td>
              <td className="p-3 align-top">Onderdeel van het ductsysteem</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Intercalated duct cell</td>
              <td className="p-3 align-top">Kleine afvoerbuisjes</td>
              <td className="p-3 align-top">Bicarbonaatrijke vloeistof</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Ductcel</td>
              <td className="p-3 align-top">Grotere afvoerkanalen</td>
              <td className="p-3 align-top">Bicarbonaatrijke vloeistof en transport van secreet</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
