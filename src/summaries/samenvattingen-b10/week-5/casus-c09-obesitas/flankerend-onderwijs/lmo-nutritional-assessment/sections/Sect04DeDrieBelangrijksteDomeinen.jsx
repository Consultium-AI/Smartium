export default function Sect04DeDrieBelangrijksteDomeinen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De drie belangrijkste domeinen</h2>
      <p>Binnen nutritional assessment worden drie hoofdgebieden onderscheiden:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Voedselinname, verbruik en verliezen</strong>
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Lichaamssamenstelling en nutriëntenreserves</strong>
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Functionele parameters</strong>
        </li>
      </ol>
      <p>Deze drie domeinen vullen elkaar aan. Samen geven ze een veel completer beeld dan één losse meting.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. De drie domeinen van nutritional assessment</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Domein</th>
              <th className="px-4 py-3 font-semibold">Waar kijk je naar?</th>
              <th className="px-4 py-3 font-semibold">Wat zegt het je?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Voedselinname, verbruik en verliezen</td>
              <td className="px-4 py-3 align-top">Hoeveel iemand eet, hoeveel nodig is en hoeveel verloren gaat</td>
              <td className="px-4 py-3 align-top">Of er een tekort of disbalans is</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Lichaamssamenstelling en nutriëntenreserves</td>
              <td className="px-4 py-3 align-top">Gewicht, spiermassa, vetmassa en voorraad van nutriënten</td>
              <td className="px-4 py-3 align-top">Of het lichaam reserves heeft verbruikt</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Functionele parameters</td>
              <td className="px-4 py-3 align-top">Spierkracht en lichamelijk functioneren</td>
              <td className="px-4 py-3 align-top">Of de voedingstoestand ook gevolgen heeft voor functioneren</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
