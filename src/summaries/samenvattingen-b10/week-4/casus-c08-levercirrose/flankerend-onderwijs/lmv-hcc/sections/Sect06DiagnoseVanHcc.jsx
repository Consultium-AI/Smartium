export default function Sect06DiagnoseVanHcc() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diagnose van HCC</h2>
      <p>
        De diagnose van HCC hangt af van de situatie van de patiënt. Bij cirrotische patiënten kan de diagnose vaak non-invasief worden gesteld op basis van beeldvorming en/of pathologie. Bij niet-cirrotische patiënten moet HCC worden bevestigd met pathologie.
      </p>
      <p>
        Non-invasieve criteria mogen alleen worden toegepast bij cirrotische patiënten met noduli van 1 cm of groter. Dat komt doordat de voorafkans op HCC in deze groep hoog is. De beeldvorming gebeurt met multiphasische CT, dynamische contrastversterkte MRI of CEUS.
      </p>
      <p>Belangrijke beeldvormingskenmerken zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>arteriële hyperenhancement;</li>
        <li>wash-out in de vertraagde portale fase.</li>
      </ul>
      <p>Dat zijn typische kenmerken die passen bij HCC.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Diagnostische benadering van HCC</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Situatie</th>
              <th className="px-4 py-3 font-semibold">Diagnostiek</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Cirrose + nodus ≥1 cm</td>
              <td className="px-4 py-3 align-top">Non-invasieve criteria op basis van beeldvorming mogelijk</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Cirrose + verdenking</td>
              <td className="px-4 py-3 align-top">Multiphasische CT, dynamische MRI of CEUS</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Geen cirrose</td>
              <td className="px-4 py-3 align-top">Bevestiging met pathologie nodig</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
