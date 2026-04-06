export default function Sect12OverzichtTabellen() {
  return (
    <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Overzicht van belangrijke factoren</h2>

      <p className="font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Mogelijke redenen voor zorgmijding</p>

      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <caption className="sr-only">Tabel 1. Mogelijke redenen voor zorgmijding</caption>
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-100 text-center">
                Soort factor
              </th>
              <th className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-100 text-center">
                Voorbeelden
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr>
              <td className="px-4 py-2 align-top">Financieel</td>
              <td className="px-4 py-2">eigen risico, angst voor kosten</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Emotioneel</td>
              <td className="px-4 py-2">schaamte, angst, ontkenning</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Ervaringsgebonden</td>
              <td className="px-4 py-2">wantrouwen, eerdere negatieve ervaringen</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Praktisch</td>
              <td className="px-4 py-2">afspraken, vervoer, administratie, taal</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Psychosociaal</td>
              <td className="px-4 py-2">stress, schulden, psychische problemen, verslaving</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Systeemgebonden</td>
              <td className="px-4 py-2">ingewikkelde zorg, voorwaarden, tijdsdruk, slechte communicatie</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="font-semibold text-slate-900 dark:text-slate-100 pt-4">
        Tabel 2. Twee hoofdcategorieën bij dak- en thuisloze mensen
      </p>

      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <caption className="sr-only">Tabel 2. Twee hoofdcategorieën bij dak- en thuisloze mensen</caption>
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-100 text-center">
                Categorie
              </th>
              <th className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-100 text-center">Kern</th>
              <th className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-100 text-center">
                Voorbeelden
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr>
              <td className="px-4 py-2 align-top">Persoonsgebonden</td>
              <td className="px-4 py-2 align-top">wat iemand zelf meemaakt of ervaart</td>
              <td className="px-4 py-2">
                complexe problemen, andere prioriteiten, behoefte aan controle, angst voor stigma
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Systeemgebonden</td>
              <td className="px-4 py-2 align-top">hoe zorg georganiseerd en aangeboden wordt</td>
              <td className="px-4 py-2">
                ingewikkeld systeem, onduidelijke regels, drukke opvang, wantrouwende houding, tijdsdruk
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
