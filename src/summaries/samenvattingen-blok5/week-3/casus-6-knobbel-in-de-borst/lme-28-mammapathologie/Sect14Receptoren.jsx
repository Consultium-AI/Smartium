export default function Sect14Receptoren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Receptoren en predictieve factoren</h3>
      <p>
        Op ieder mammacarcinoom worden meestal via immunohistochemie de volgende receptoren bepaald:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Oestrogeenreceptor (ER)</li>
        <li>Progesteronreceptor (PR)</li>
        <li>Human Epidermal Growth Factor Receptor 2 (HER2)</li>
      </ul>
      <p>Deze zijn essentieel voor de keuze van mogelijke systemische therapie en hebben een predictieve betekenis.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ER- en PR-expressie zijn belangrijk voor de keuze van endocriene therapie</li>
        <li>HER2-expressie is belangrijk voor de keuze van doelgerichte HER2-blokkade</li>
      </ul>
      <p>
        In Nederland geldt dat een tumor ER- of PR-positief heet bij 10% van de tumorcellen. Als de tumor positief is,
        kan een patiënt dus baat hebben bij endocriene therapie.
      </p>
      <p>Een HER2-bepaling gebeurt doorgaans aanvankelijk met immunohistochemie en wordt in 4 categorieën beoordeeld:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Score 0 = negatief</li>
        <li>Score 1+ = negatief</li>
        <li>Score 2+ = onzeker</li>
        <li>Score 3+ = positief</li>
      </ul>
      <p>
        Bij score 2+ wordt een aanvullende test gedaan, meestal in situ hybridisatie. Afhankelijk daarvan wordt de tumor
        als negatief of positief voor HER2 beschouwd.
      </p>
      <p>De meeste mammacarcinomen zijn ER+ HER2-.</p>
      <p>Er is een sterke samenhang tussen gradering en markerprofiel:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Een graad 1 carcinoom is bijna altijd ER+ HER2-</li>
        <li>Een graad 3 carcinoom is heterogeen: het kan ER- HER2- zijn, maar ook HER2+ of triple negatief</li>
        <li>Een triple negatief carcinoom is negatief voor ER, PR en HER2</li>
      </ul>
      <p>Omgekeerd is een triple negatief carcinoom doorgaans graad 3</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 7. Receptoren bij mammacarcinoom</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Receptor
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belang
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">ER</td>
              <td className="px-4 py-3 align-top">Keuze voor endocriene therapie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">PR</td>
              <td className="px-4 py-3 align-top">Keuze voor endocriene therapie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">HER2</td>
              <td className="px-4 py-3 align-top">Keuze voor HER2-gerichte therapie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">ER/PR-positief</td>
              <td className="px-4 py-3 align-top">Bij 10% van de tumorcellen positief</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">HER2 IHC 2+</td>
              <td className="px-4 py-3 align-top">Aanvullend onderzoek nodig</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
