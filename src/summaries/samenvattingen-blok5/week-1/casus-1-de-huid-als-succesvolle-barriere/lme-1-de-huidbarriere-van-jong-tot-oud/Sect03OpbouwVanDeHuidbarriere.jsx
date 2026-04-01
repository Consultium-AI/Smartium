export default function Sect03OpbouwVanDeHuidbarriere() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Opbouw van de huidbarrière</h2>
      <p>
        De huidbarrière zit vooral in de epidermis, de opperhuid. De epidermis heeft meerdere lagen en verschillende celtypen. De bovenste laag is het stratum corneum, ook wel de hoornlaag. Daaronder liggen het stratum granulosum, stratum spinosum en stratum basale. Onder de epidermis ligt de basale membraan.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Opbouw van de epidermis</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Laag
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Nederlandse naam
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Stratum corneum</td>
              <td className="px-4 py-3 align-top">Hoornlaag</td>
              <td className="px-4 py-3 align-top">Bovenste beschermende laag</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Stratum granulosum</td>
              <td className="px-4 py-3 align-top">Korrelcel-laag</td>
              <td className="px-4 py-3 align-top">Belangrijk voor barrièrefunctie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Stratum spinosum</td>
              <td className="px-4 py-3 align-top">Stekelcel-laag</td>
              <td className="px-4 py-3 align-top">Tussenlaag van de epidermis</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Stratum basale</td>
              <td className="px-4 py-3 align-top">Basaalcel-laag</td>
              <td className="px-4 py-3 align-top">Onderste laag van de epidermis</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Basaal membraan</td>
              <td className="px-4 py-3 align-top">-</td>
              <td className="px-4 py-3 align-top">Scheiding tussen epidermis en dermis</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>In de epidermis zitten verschillende cellen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Corneocyten: hoorncellen in het stratum corneum</li>
        <li>Keratinoctyten: de belangrijkste huidcellen van de epidermis</li>
        <li>Langerhanscellen: immuuncellen</li>
        <li>Melanocyten: pigmentcellen</li>
      </ul>
      <p>
        De huidbarrière bestaat dus niet uit één enkel onderdeel, maar uit een combinatie van cellagen, cellen en stoffen in de huid.
      </p>
    </div>
  )
}
