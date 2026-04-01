export default function Sect10BiradsTabel3() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">BI-RADS-classificatie</h2>
      <p>
        BI-RADS is een gestandaardiseerd systeem voor verslaglegging en follow-up van mammografische bevindingen. Het
        loopt van 0 tot en met 6.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. BI-RADS-classificatie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                BI-RADS
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Vervolg
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">0</td>
              <td className="px-3 py-3 align-top">Beoordeling nog niet definitief; aanvullend onderzoek nodig</td>
              <td className="px-3 py-3 align-top">Extra mammografische opname, echografie of oude beelden opvragen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">1</td>
              <td className="px-3 py-3 align-top">Volledig normaal</td>
              <td className="px-3 py-3 align-top">Geen verdere diagnostiek of follow-up</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">2</td>
              <td className="px-3 py-3 align-top">Duidelijk benigne afwijking</td>
              <td className="px-3 py-3 align-top">Geen verdere diagnostiek of follow-up</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">3</td>
              <td className="px-3 py-3 align-top">Waarschijnlijk benigne, kans op maligniteit &lt;2%</td>
              <td className="px-3 py-3 align-top">Korte termijn follow-up, meestal na 6 maanden, of punctie/biopt</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">4</td>
              <td className="px-3 py-3 align-top">Verdacht, kans op maligniteit 2–95%</td>
              <td className="px-3 py-3 align-top">Biopsie geïndiceerd</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">5</td>
              <td className="px-3 py-3 align-top">
                Sterk verdacht, klassieke kenmerken van borstkanker, kans op maligniteit &gt;95%
              </td>
              <td className="px-3 py-3 align-top">Biopsie noodzakelijk</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">6</td>
              <td className="px-3 py-3 align-top">Histologisch bewezen maligniteit zonder chirurgische excisie</td>
              <td className="px-3 py-3 align-top">
                Gebruik voor monitoring van therapierespons, behandelplanning of second opinion
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Aandachtsvraag: Wat betekent BI-RADS 0?{'  '}
        Mini-antwoord: Dat de beoordeling nog niet definitief is en dat aanvullend onderzoek nodig is.
      </p>
    </div>
  )
}
