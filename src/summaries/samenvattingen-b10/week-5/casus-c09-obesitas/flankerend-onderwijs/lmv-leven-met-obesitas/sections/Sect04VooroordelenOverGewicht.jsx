export default function Sect04VooroordelenOverGewicht() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Vooroordelen over gewicht</h3>
      <p>
        Mensen met overgewicht kunnen te maken krijgen met allerlei vooroordelen. Vaak wordt er gedacht dat iemand lui is, weinig discipline heeft of zelf schuld heeft aan het gewicht. Zulke aannames kunnen heel hardnekkig zijn. De module vraagt je om stil te staan bij de vraag of die vooroordelen terecht zijn. Binnen deze leerstof is het belangrijk om te zien dat zulke vooroordelen bestaan en dat ze invloed hebben op hoe iemand wordt behandeld.
      </p>
      <p>Vooroordelen kunnen op verschillende manieren zichtbaar worden:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>in de maatschappij, bijvoorbeeld in hoe mensen reageren of praten over obesitas;</li>
        <li>in de zorg, bijvoorbeeld in de manier waarop een patiënt wordt benaderd;</li>
        <li>in de persoon zelf, doordat iemand die reacties gaat verwachten en zich daardoor anders gaat gedragen.</li>
      </ul>
      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Expliciete en impliciete vooroordelen</h4>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Begrip</th>
              <th className="px-4 py-3 font-semibold">Betekenis</th>
              <th className="px-4 py-3 font-semibold">Voorbeeld</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Expliciet vooroordeel</td>
              <td className="px-4 py-3 align-top">Een vooroordeel dat openlijk wordt uitgesproken</td>
              <td className="px-4 py-3 align-top">Iemand zegt direct iets negatiefs over overgewicht</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Impliciet vooroordeel</td>
              <td className="px-4 py-3 align-top">Een onbewuste aanname of houding</td>
              <td className="px-4 py-3 align-top">Iemand behandelt een patiënt anders zonder zich daarvan bewust te zijn</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
