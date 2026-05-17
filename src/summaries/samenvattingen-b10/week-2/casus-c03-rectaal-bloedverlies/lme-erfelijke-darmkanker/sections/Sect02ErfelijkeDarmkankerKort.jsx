export default function Sect02ErfelijkeDarmkankerKort() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Erfelijke darmkanker in het kort</h2>
      <p>
        Colorectaal carcinoom (CRC) is een van de meest voorkomende vormen van kanker in Nederland. Het lifetime risico op
        CRC ligt in de bevolking rond de 5–6%. In 2025 kregen ongeveer 12.000 mensen de diagnose CRC en ongeveer 4.500
        mensen overleden aan de gevolgen ervan.
      </p>
      <p>
        Belangrijk om te onthouden: CRC is meestal niet erfelijk. Vaak is er een verband met leefstijlfactoren. Slechts bij
        ongeveer 5% van alle CRC’s is sprake van een aantoonbare erfelijke aanleg.
      </p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. CRC en erfelijkheid in het kort</h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
              <tr>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Onderwerp</th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Kerngegeven</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900/40">
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Lifetime risico op CRC</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">ongeveer 5–6%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Aantal nieuwe diagnoses per jaar</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">ongeveer 12.000</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Aantal sterfgevallen per jaar</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">ongeveer 4.500</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Aantoonbaar erfelijke oorzaak</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">ongeveer 5% van alle CRC’s</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
