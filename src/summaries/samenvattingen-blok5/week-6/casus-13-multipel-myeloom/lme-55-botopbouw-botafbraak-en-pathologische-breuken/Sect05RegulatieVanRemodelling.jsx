export default function Sect05RegulatieVanRemodelling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Regulatie van remodelling</h2>
      <p>De activiteit van osteoclasten en osteoblasten wordt geregeld door hormonen.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Calcitonine en PTH</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Hormoon
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Productieorgaan
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Effect op osteoclasten
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Direct of indirect?
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Calcitonine</td>
              <td className="px-4 py-3 align-top">Schildklier</td>
              <td className="px-4 py-3 align-top">Inhibitie van osteoclastactiviteit</td>
              <td className="px-4 py-3 align-top">Direct</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Parathyroïd hormoon (PTH)</td>
              <td className="px-4 py-3 align-top">Bijschildklier</td>
              <td className="px-4 py-3 align-top">Activatie van osteoclasten</td>
              <td className="px-4 py-3 align-top">Indirect</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Calcitonine wordt geproduceerd door de C-cellen van de schildklier. Het grijpt direct aan op osteoclasten via de
        calcitoninereceptor en remt zo hun activiteit. Daardoor is er minder botafbraak.
      </p>
      <p>
        PTH wordt geproduceerd door de bijschildklieren. Het grijpt niet direct aan op osteoclasten, maar werkt indirect
        via osteoblasten. Via de PTH-receptor zorgen osteoblasten voor paracriene secretie van interleukines, zoals IL’s,
        die osteoclasten activeren. Daardoor wordt bot afgebroken en komt onder andere calcium vrij.
      </p>
      <p>Dus heel simpel:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>calcitonine remt osteoclasten;</li>
        <li>PTH activeert osteoclasten indirect.</li>
      </ul>
    </div>
  )
}
