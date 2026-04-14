export default function Sect05KlinischePresentatieVanSleTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Klinische presentatie van SLE</h2>
      <p>
        SLE kan zich op veel manieren presenteren. Sommige patiënten beginnen met algemene klachten, andere met heel
        specifieke orgaanproblemen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Presenterende verschijnselen en cumulatieve orgaanbetrokkenheid bij SLE
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/80">
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Orgaan/weefsel
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Presenterende verschijnselen (%)
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Uiteindelijke orgaanbetrokkenheid (%)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Constitutionele klachten</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">50</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">–</td>
            </tr>
            <tr className="bg-slate-50/50 dark:bg-slate-800/30">
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Gewrichten/spieren</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">62</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">80</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Huid</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">50</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">80</td>
            </tr>
            <tr className="bg-slate-50/50 dark:bg-slate-800/30">
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Long/pleura</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">–</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">30</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Bloed</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">8</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">60</td>
            </tr>
            <tr className="bg-slate-50/50 dark:bg-slate-800/30">
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Brein</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">15</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">30</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Nieren</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">25</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">40</td>
            </tr>
            <tr className="bg-slate-50/50 dark:bg-slate-800/30">
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Hart</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">–</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">15</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Deze cijfers laten twee dingen zien. Ten eerste zijn gewrichts-/spierklachten en huidklachten veelvoorkomende
        eerste presentaties. Ten tweede neemt de orgaanbetrokkenheid in de loop van de ziekte vaak toe: zo is bijvoorbeeld
        bloedbetrokkenheid aanvankelijk minder vaak het eerste signaal, maar ontwikkelt zich uiteindelijk wel regelmatig.
      </p>
    </div>
  )
}
