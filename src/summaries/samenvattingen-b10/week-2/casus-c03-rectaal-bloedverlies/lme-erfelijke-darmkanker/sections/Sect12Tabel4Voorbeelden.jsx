export default function Sect12Tabel4Voorbeelden() {
  return (
    <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 4. Voorbeelden waarbij je wel of niet denkt aan Lynchsyndroom
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Situatie</th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Verdacht?</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-900/40">
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Man met CRC op 34-jarige leeftijd</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Ja</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                Vrouw met CRC op 68-jarige leeftijd en een zus met longkanker op 49-jarige leeftijd
              </td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Nee</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                Vrouw met baarmoederhalskanker op 39-jarige leeftijd
              </td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Nee</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                Gezonde man met vader die op 42-jarige leeftijd CRC had en tante met endometriumcarcinoom op 38-jarige
                leeftijd
              </td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Ja</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                Vrouw met triple-negatief mammacarcinoom op 29-jarige leeftijd
              </td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Nee</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                Vrouw met CRC op 78-jarige leeftijd en broer met CRC op 72-jarige leeftijd
              </td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Nee</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                Man met CRC op 61-jarige leeftijd en talgklierkanker op 66-jarige leeftijd
              </td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Ja</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
