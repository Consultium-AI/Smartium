export default function Sect10ContraIndicatiesEnPatientkenmerken() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Contra-indicaties en patiëntkenmerken</h2>
      <p>
        Voor alle soorten gewichtsreducerende medicatie geldt één belangrijke contra-indicatie: <strong className="text-slate-900 dark:text-slate-100">zwangerschap</strong>. De reden is dat deze middelen niet bedoeld zijn voor gebruik tijdens de zwangerschap.
      </p>
      <p>
        Bij de keuze voor een middel kijk je niet alleen naar BMI en buikomvang, maar ook naar andere patiëntkenmerken, zoals:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>diabetes type 2;</li>
        <li>hypertensie;</li>
        <li>atherosclerose;</li>
        <li>eerdere pogingen tot afvallen;</li>
        <li>gebruik van andere medicatie;</li>
        <li>praktische haalbaarheid, zoals prikangst.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Voorbeelden van factoren die meewegen bij de keuze</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Patiëntkenmerk</th>
              <th className="px-4 py-3 font-semibold">Betekenis voor de behandeling</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Diabetes type 2</td>
              <td className="px-4 py-3 align-top">Kan de keuze voor een middel ondersteunen dat ook metabole winst geeft</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Hypertensie / atherosclerose</td>
              <td className="px-4 py-3 align-top">Verhoogt de ziektelast en maakt behandeling relevanter</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Eerdere GLI of andere leefstijlbehandeling</td>
              <td className="px-4 py-3 align-top">Laat zien of leefstijl al voldoende effect had</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Prikangst</td>
              <td className="px-4 py-3 align-top">Maakt injecteerbare middelen minder geschikt</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Gebruik van andere medicatie</td>
              <td className="px-4 py-3 align-top">Kan invloed hebben op keuze en haalbaarheid</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
