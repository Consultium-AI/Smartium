export default function Sect11Tabel2TnmAjccVoorbeelden() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Voorbeelden van TNM- en AJCC-classificatie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Casus
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Beschrijving
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                TNM / AJCC
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Casus 1</td>
              <td className="px-4 py-3 align-top">
                67-jarige man met melanoom op de onderarm, Breslow 3,0 mm, zonder ulceratie, met mitosen. Twee
                sentinelklieren verwijderd, beide zonder metastasen.
              </td>
              <td className="px-4 py-3 align-top">
                <strong>T3a N0 M0, AJCC IIA</strong>
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Casus 1 vervolg</td>
              <td className="px-4 py-3 align-top">
                Na een jaar een nodus naast het litteken; histopathologie toont satellietmetastase; geen palpabele klieren.
              </td>
              <td className="px-4 py-3 align-top">
                <strong>T3a N1c M0, AJCC IIIB</strong>
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Casus 2</td>
              <td className="px-4 py-3 align-top">
                80-jarige vrouw met melanoom op het linker onderbeen, Breslow 0,8 mm met ulceratie, geen palpabele klieren.
              </td>
              <td className="px-4 py-3 align-top">
                <strong>T1b N0 M0, AJCC IB</strong>
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Casus 2 vervolg</td>
              <td className="px-4 py-3 align-top">
                Na 3 jaar zwelling in de lies; punctie toont metastase van het melanoom; geen andere vergrote klieren.
              </td>
              <td className="px-4 py-3 align-top">
                <strong>T1b N1b M0, AJCC IIIB</strong>
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Casus 3</td>
              <td className="px-4 py-3 align-top">30-jarige man met melanoma in situ op de bovenrug, geen palpabele klieren.</td>
              <td className="px-4 py-3 align-top">
                <strong>Tis N0 M0, AJCC 0</strong>
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Casus 4</td>
              <td className="px-4 py-3 align-top">
                43-jarige vrouw met melanoom op het rechter bovenbeen, Breslow 1,6 mm met ulceratie, geen palpabele klieren;
                bij sentinelprocedure twee positieve klieren.
              </td>
              <td className="px-4 py-3 align-top">
                <strong>T2b N2a M0, AJCC IIIB</strong>
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Casus 4 vervolg</td>
              <td className="px-4 py-3 align-top">
                Na aanvullende klierdissectie nog één extra positieve klier; geen andere verdachte laesies.
              </td>
              <td className="px-4 py-3 align-top">
                <strong>T2b N2a M0, AJCC IIIB</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
