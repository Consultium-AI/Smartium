export default function Sect08OsteolyseEnOsteoscleroseBijMetastasen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Osteolyse en osteosclerose bij metastasen</h2>
      <p>
        Tumormetastasen naar bot kunnen leiden tot twee verschillende reacties: osteolyse en osteosclerose. Meestal is er
        botafbraak, maar soms juist botaanmaak.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 6. Osteolyse versus osteosclerose</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Reactie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Wat gebeurt er?
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijkste cel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Osteolyse</td>
              <td className="px-4 py-3 align-top">Botresorptie</td>
              <td className="px-4 py-3 align-top">Osteoclastactivatie</td>
              <td className="px-4 py-3 align-top">Multiple myeloom, nier, mamma, long</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Osteosclerose</td>
              <td className="px-4 py-3 align-top">Botaanmaak</td>
              <td className="px-4 py-3 align-top">Osteoblastactivatie</td>
              <td className="px-4 py-3 align-top">Prostaat, mamma, long</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Osteolyse</h3>
      <p>
        Bij osteolyse is er een netto toegenomen botresorptie door activatie van osteoclasten. Hierbij speelt onder
        andere RANKL een rol. Een voorbeeld van een osteolytische tumor is multiple myeloom.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Osteosclerose</h3>
      <p>
        Bij osteosclerose is er een netto toegenomen botaanmaak door activatie van osteoblasten. Daarbij spelen onder
        andere endothelin-1 en BMP een rol. Een voorbeeld van een osteosclerotische tumor is prostaatkanker.
      </p>
      <p>Dus bij metastasen kan de balans tussen afbraak en opbouw verschuiven:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>meer osteoclastactiviteit → osteolyse;</li>
        <li>meer osteoblastactiviteit → osteosclerose.</li>
      </ul>
    </div>
  )
}
