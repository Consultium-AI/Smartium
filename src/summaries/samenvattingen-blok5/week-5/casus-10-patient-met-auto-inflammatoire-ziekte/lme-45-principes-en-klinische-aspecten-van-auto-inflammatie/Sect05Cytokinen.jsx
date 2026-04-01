export default function Sect05Cytokinen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Cytokinen: pro-inflammatoir en anti-inflammatoir
      </h2>
      <p>
        Bij activatie van het immuunsysteem spelen verschillende cytokinen een belangrijke rol. Vooral IL-1β
        en TNF-alfa zijn pro-inflammatoir. Dat betekent dat zij de ontstekingsreactie versterken.
      </p>
      <p>Daartegenover staan cytokinen die juist anti-inflammatoir werken. Die remmen de ontsteking af.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Belangrijke cytokinen bij autoinflammatie
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type cytokine
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Pro-inflammatoir
              </td>
              <td className="px-4 py-3 align-top">IL-1β, TNF-alfa</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Anti-inflammatoir
              </td>
              <td className="px-4 py-3 align-top">IL-10, IL-11, IL-13, IL1RA</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        IL1RA staat voor een remmer van het IL-1-systeem. Samen zorgen deze cytokinen ervoor dat de
        ontstekingsreactie normaal gezien in balans blijft. Bij autoinflammatie is die balans verstoord.
      </p>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-950 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtsvraag</strong>
        </p>
        <p className="text-amber-950 dark:text-amber-100 mt-2">
          Welke cytokinen zijn vooral pro-inflammatoir?{'  '}
          <strong className="text-amber-950 dark:text-amber-50">Mini-antwoord:</strong> vooral IL-1β en
          TNF-alfa.
        </p>
      </div>
    </div>
  )
}
