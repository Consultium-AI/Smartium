export default function Sect16BehandelingVonWillebrand() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling van Von Willebrandziekte</h2>
      <p>
        De behandeling hangt af van het type en van de ernst van de bloedingen. Het doel is, net als bij hemofilie, om
        bloedingen te voorkomen en ze zo snel mogelijk te stoppen.
      </p>
      <p>De belangrijkste middelen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>desmopressine;</li>
        <li>stollingsfactorconcentraat;</li>
        <li>tranexaminezuur.</li>
      </ul>
      <p>
        Desmopressine is vaak de eerste keuze bij type 1 VWD, omdat het zorgt voor vrijmaken van VWF uit het endotheel.
        Bij sommige typen 2 kan de respons wisselen; bij type 3 is DDAVP geen optie, omdat er geen VWF is.
      </p>
      <p>
        Stollingsfactorconcentraat bevat exogeen VWF, met of zonder FVIII. Dit middel heeft wel hoge kosten en kan in
        principe alleen in een hemofiliebehandelcentrum gegeven worden.
      </p>
      <p>
        Tranexaminezuur wordt gebruikt als adjuvante behandeling, vooral bij slijmvliesgerelateerde bloedingen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 7. Behandeling per type VWD</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type VWD
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Behandeling van keuze
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Adjuvante behandeling
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">1</td>
              <td className="px-4 py-3 align-top">DDAVP</td>
              <td className="px-4 py-3 align-top">Tranexaminezuur</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">2A</td>
              <td className="px-4 py-3 align-top">Haemate-P / DDAVP</td>
              <td className="px-4 py-3 align-top">Tranexaminezuur</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">2B</td>
              <td className="px-4 py-3 align-top">Haemate-P</td>
              <td className="px-4 py-3 align-top">Tranexaminezuur</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">2M</td>
              <td className="px-4 py-3 align-top">Haemate-P / DDAVP</td>
              <td className="px-4 py-3 align-top">Tranexaminezuur</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">2N</td>
              <td className="px-4 py-3 align-top">Haemate-P / DDAVP</td>
              <td className="px-4 py-3 align-top">Tranexaminezuur</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">3</td>
              <td className="px-4 py-3 align-top">Haemate-P</td>
              <td className="px-4 py-3 align-top">Tranexaminezuur</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
