export default function Sect05UrgenteEnNietUrgenteOorzaken() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Urgente en niet-urgente oorzaken</h3>
      <p>
        Bij buikpijn moet je altijd denken in termen van urgentie. Sommige oorzaken vragen snelle beoordeling en
        behandeling, terwijl andere minder acuut zijn.
      </p>
      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">Urgente oorzaken</h4>
      <p>
        Urgente oorzaken zijn aandoeningen waarbij snelle herkenning belangrijk is om complicaties te voorkomen. Denk
        hierbij aan situaties met:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">peritonitis</strong>: ontsteking van het buikvlies, vaak met hevige pijn en een ziek indruk;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">shock</strong>: een toestand van onvoldoende circulatie, waarbij de patiënt ernstig ziek kan zijn;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">sepsis</strong>: een ernstige systemische reactie op een infectie.
        </li>
      </ul>
      <p>Deze alarmsituaties zijn belangrijk omdat ze direct levensbedreigend kunnen zijn.</p>
      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">Niet-urgente oorzaken</h4>
      <p>
        Niet-urgente oorzaken zijn klachten waarbij de patiënt wel buikpijn heeft, maar waarbij geen directe
        levensbedreiging op de voorgrond staat. De klachten kunnen nog steeds hinderlijk of relevant zijn, maar vragen
        meestal geen onmiddellijke spoedbehandeling.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Voorbeelden van indeling naar urgentie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Urgente oorzaken</th>
              <th className="px-4 py-3 font-semibold">Niet-urgente oorzaken</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Peritonitis</td>
              <td className="px-4 py-3 align-top">Minder ernstige functionele of voorbijgaande buikklachten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Shock</td>
              <td className="px-4 py-3 align-top">Klachten zonder tekenen van acute instabiliteit</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Sepsis</td>
              <td className="px-4 py-3 align-top">Klachten zonder alarmsymptomen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Deze indeling helpt om snel te bepalen of verdere diagnostiek en behandeling direct nodig zijn.</p>
    </div>
  )
}
