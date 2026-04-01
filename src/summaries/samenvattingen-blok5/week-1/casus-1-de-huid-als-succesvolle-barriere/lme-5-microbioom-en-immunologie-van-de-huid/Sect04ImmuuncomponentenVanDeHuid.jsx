export default function Sect04ImmuuncomponentenVanDeHuid() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Immuuncomponenten van de huid</h2>
      <p>
        De huid bevat niet alleen keratinocyten, maar ook diverse immuuncellen. In normale, niet-aangedane huid komen onder
        andere de volgende cellen voor:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>B-cellen</li>
        <li>CD4+ T-cellen</li>
        <li>CD8+ T-cellen</li>
        <li>Langerhanscellen</li>
        <li>macrofagen</li>
        <li>NK-cellen</li>
        <li>mestcellen</li>
      </ul>
      <p>Deze cellen zitten niet allemaal op dezelfde plek. Hun locatie hangt samen met hun functie.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Belangrijke immuuncellen in de huid</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Cel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voornamelijke locatie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijkste rol
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Langerhanscellen</td>
              <td className="px-4 py-3 align-top">Epidermis, vooral stratum spinosum</td>
              <td className="px-4 py-3 align-top">Monitort verstoringen, neemt materiaal op en presenteert antigenen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">CD8+ T-cellen</td>
              <td className="px-4 py-3 align-top">Vooral epidermis, ook dermis</td>
              <td className="px-4 py-3 align-top">Doden van geïnfecteerde cellen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">CD4+ T-cellen</td>
              <td className="px-4 py-3 align-top">Dermis</td>
              <td className="px-4 py-3 align-top">Ondersteunen en sturen de immuunreactie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">B-cellen</td>
              <td className="px-4 py-3 align-top">Dermis</td>
              <td className="px-4 py-3 align-top">Onderdeel van adaptieve afweer</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Macrofagen</td>
              <td className="px-4 py-3 align-top">Dermis</td>
              <td className="px-4 py-3 align-top">Opruimen van pathogenen en dode cellen, reguleren ontsteking</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">NK-cellen</td>
              <td className="px-4 py-3 align-top">Dermis</td>
              <td className="px-4 py-3 align-top">Onderdeel van snelle afweer tegen afwijkende cellen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Mestcellen</td>
              <td className="px-4 py-3 align-top">Dermis</td>
              <td className="px-4 py-3 align-top">Betrokken bij ontstekingsreacties</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een gezonde menselijke huid bevat ongeveer 20 miljard T-cellen. Dat is meer dan bijna twee keer zoveel T-cellen
        als in het bloed. Daarmee wordt duidelijk hoe belangrijk de huid is als immuunorgaan.
      </p>
    </div>
  )
}
