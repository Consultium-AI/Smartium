export default function Sect03OrganisatieVanDeLaterZorg() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De organisatie van de LATER-zorg</h2>
      <p>
        De zorg na kinderkanker verloopt in fases. Eerst is er de behandeling zelf. Daarna volgt een periode van follow-up.
        Later verschuift de aandacht naar de lange termijn gevolgen. Deze overgang is belangrijk, omdat de zorgdoelen
        veranderen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Fasen in de zorg na kinderkanker</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Fase
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Waar is de zorg op gericht?
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerken
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Behandeling</td>
              <td className="px-4 py-3 align-top">Het behandelen van de ziekte</td>
              <td className="px-4 py-3 align-top">Intensieve oncologische therapie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Follow-up</td>
              <td className="px-4 py-3 align-top">Signaleren van tumorrecidief en gevolgen van de behandeling</td>
              <td className="px-4 py-3 align-top">
                Duurt tot <strong>5 jaar na diagnose</strong>
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">LATER-zorg</td>
              <td className="px-4 py-3 align-top">Gevolgen van de behandeling op lange termijn</td>
              <td className="px-4 py-3 align-top">Geen routinematig ziektegericht onderzoek meer; focus op late effecten</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>In de follow-up kijkt men dus vooral naar:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>aanwijzingen voor terugkeer van de tumor;</li>
        <li>gevolgen van de behandeling.</li>
      </ul>
      <p>
        Na ongeveer 5 jaar na diagnose begint de volgende fase: de LATER-zorg. In deze fase is de zorg volledig gericht op de
        gevolgen van de behandeling. Er wordt dan geen routinematig onderzoek meer gedaan dat alleen op de ziekte zelf gericht
        is. De frequentie van controles hangt af van de behandeling die iemand heeft gehad en kan in principe levenslang nodig
        zijn.
      </p>
    </div>
  )
}
