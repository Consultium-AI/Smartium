export default function Sect07TumorlocatiesInHetHoofd() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Tumorlocaties in het hoofd: de belangrijkste koppelingen
      </h2>
      <p>Bij hersentumoren helpt de anatomische locatie om aan een bepaalde tumor te denken.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 4. Locatie in de hersenen en typische tumoren
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Anatomische locatie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Bijpassende tumoren
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Nervus opticus</td>
              <td className="px-4 py-3 align-top">Opticusgliom</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hypofyse</td>
              <td className="px-4 py-3 align-top">Craniopharyngeoom, hypofysetumoren</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Grote hersenen</td>
              <td className="px-4 py-3 align-top">Metastasen van solide tumoren, meningeoom</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Ventrikels</td>
              <td className="px-4 py-3 align-top">Ependymoom, pinealistumor</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Cerebellum</td>
              <td className="px-4 py-3 align-top">Pilocytair astrocytoom, medulloblastoom</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Deze indeling is handig omdat klachten vaak samenhangen met de plek van de tumor. Een tumor in het cerebellum geeft
        bijvoorbeeld eerder problemen met lopen en coördinatie, terwijl een massa in de achterste schedelgroeve ook snel tot
        inklemming kan leiden.
      </p>
    </div>
  )
}
