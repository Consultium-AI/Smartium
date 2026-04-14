export default function Sect07Arbovirussen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Arbovirussen: dengue, chikungunya en zika</h2>
      <p>
        De module laat daarna zien dat je na uitsluiten van malaria vaak moet denken aan <strong>arbovirussen</strong>.
        Arbovirussen zijn virussen die door geleedpotigen, meestal muggen, worden overgedragen.
      </p>
      <p>
        In de Europese studie waren arbovirussen zelfs de <strong>meest voorkomende oorzaak</strong> van acute
        ongedifferentieerde koorts, nog vóór malaria. Dengue was veruit de meest voorkomende arbovirose. Rash, retro-orbitale
        pijn, leukopenie, neutropenie en lymfopenie maakten een arbovirale oorzaak waarschijnlijker.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Dengue</h3>
      <p>
        De module presenteert dengue als een patiënt met hoge koorts, spier- en gewrichtspijn, hoofdpijn, pijn achter de ogen
        en huiduitslag, bijvoorbeeld na verblijf in Mexico. Dat is een klassiek patroon.
      </p>
      <p>Typisch voor dengue zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>hoge koorts</li>
        <li>hoofdpijn</li>
        <li>retro-orbitale pijn</li>
        <li>myalgieën en artralgieën</li>
        <li>rash</li>
        <li>vaak leukopenie en trombocytopenie</li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Chikungunya</h3>
      <p>
        Chikungunya lijkt op dengue, maar <strong>gewrichtspijn</strong> staat vaak nog sterker op de voorgrond en kan lang
        aanhouden.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Zika</h3>
      <p>
        Zika verloopt vaak milder, maar conjunctivitis en rash passen er goed bij. In de module wordt Zika vooral in de
        vergelijking met dengue en chikungunya geplaatst.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Eenvoudige vergelijking arbovirussen</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/80">
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">
                <strong>Diagnose</strong>
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">
                <strong>Wat valt vaak op?</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100 dark:border-slate-700/80">
              <td className="px-4 py-3 align-top">Dengue</td>
              <td className="px-4 py-3 align-top">Hoge koorts, hoofdpijn, retro-orbitale pijn, rash, trombocytopenie</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-700/80">
              <td className="px-4 py-3 align-top">Chikungunya</td>
              <td className="px-4 py-3 align-top">Koorts met opvallende en vaak hevige gewrichtsklachten</td>
            </tr>
            <tr>
              <td className="px-4 py-3 align-top">Zika</td>
              <td className="px-4 py-3 align-top">Mildere ziekte, rash en conjunctivitis vaker op de voorgrond</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
