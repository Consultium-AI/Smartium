export default function Sect06MechanischeBelastingEnWondgenezing() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Mechanische belasting en verwondingen</h2>
      <p>
        Mechanische belasting kan de huid beschadigen door trauma, prikken, een ingreep of langdurige druk. Daaronder
        vallen schaaf- en snijwonden, maar ook drukplekken.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Wondtypen</h3>
      <p>
        Bij open wonden komen haarvaatjes en zenuwuiteinden bloot te liggen. Daardoor kan pijn ontstaan en moet het
        lichaam bloedverlies beperken.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Decubitus</h3>
      <p>
        Decubitus ontstaat door weefselschade als gevolg van druk- of schuifkrachten, vooral druk. Het komt voor op
        plaatsen waar de druk het hoogst is, zoals de stuit, heupen en hielen, en ook op plekken waar bot onder de huid
        uitsteekt. Zowel een korte hoge belasting als een langdurige lage belasting kan druknecrose veroorzaken.
      </p>
      <p>
        Decubitus ontstaat vooral wanneer iemand niet goed in staat is om de druk te voelen of de houding te veranderen.
        Voorbeelden zijn patiënten met:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>neuropathie;</li>
        <li>hemiparese;</li>
        <li>dwarslaesie;</li>
        <li>narcose of sedatie;</li>
        <li>bedlegerigheid;</li>
        <li>fracturen;</li>
        <li>parese.</li>
      </ul>
      <p>
        Andere risicofactoren zijn slechte voedingstoestand, diabetes, arterieel vaatlijden, incontinentie en hoge
        leeftijd.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Vier fasen van wondgenezing</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Fase
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerken
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                1. Bloedstolling / hemostase
              </td>
              <td className="px-4 py-3 align-top">
                Vaten vernauwen lokaal, bloedplaatjes klonteren samen, fibrine vormt een netwerk en er ontstaat een korst
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                2. Ontstekingsfase / inflammatiefase
              </td>
              <td className="px-4 py-3 align-top">
                Vaten verwijden weer, afweercellen ruimen dode cellen op en maken bacteriën onschadelijk
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">3. Regeneratiefase</td>
              <td className="px-4 py-3 align-top">
                Nieuw weefsel wordt gevormd, nieuwe bloedvaatjes ontstaan, de wond sluit
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                4. Rijpingsfase / remodelling
              </td>
              <td className="px-4 py-3 align-top">
                Het granulatieweefsel rijpt uit tot dun, soepel bindweefsellitteken en overtollige haarvaatjes verdwijnen
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij de bloedstolling ontstaat eerst een stolsel. Daarna volgt de ontstekingsfase, waarin de wond wordt
        schoongemaakt. In de regeneratiefase groeit nieuw weefsel aan. In de laatste fase, de rijping of remodelling,
        wordt het nieuwe weefsel sterker en minder kwetsbaar.
      </p>
    </div>
  )
}
