export default function Sect05TweeHoofdmechanismenEnTabel2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De twee hoofdmechanismen van type IV reacties</h2>
      <p>Robbins beschrijft twee hoofdvormen van T-cel-gemedieerde weefselschade:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Cytokine-gemedieerde inflammatie, vooral door CD4+ T-cellen</li>
        <li>Directe cytotoxiciteit, vooral door CD8+ T-cellen</li>
      </ul>
      <p>Dat onderscheid is belangrijk, omdat niet elke type IV reactie op precies dezelfde manier verloopt.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Belangrijkste mechanismen binnen type IV overgevoeligheid
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Mechanisme
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijkste cel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijkste mediatoren
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Gevolg
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">CD4+ T-cel-gemedieerde inflammatie</td>
              <td className="px-4 py-3 align-top">Th1-cellen, soms ook Th17-cellen</td>
              <td className="px-4 py-3 align-top">vooral IFN-γ, daarnaast o.a. IL-17</td>
              <td className="px-4 py-3 align-top">activatie van macrofagen en ontsteking</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">CD8+ T-cel-gemedieerde cytotoxiciteit</td>
              <td className="px-4 py-3 align-top">cytotoxische T-cellen (CTLs)</td>
              <td className="px-4 py-3 align-top">perforine, granzymen, ook cytokinen</td>
              <td className="px-4 py-3 align-top">directe celdoding en weefselschade</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
