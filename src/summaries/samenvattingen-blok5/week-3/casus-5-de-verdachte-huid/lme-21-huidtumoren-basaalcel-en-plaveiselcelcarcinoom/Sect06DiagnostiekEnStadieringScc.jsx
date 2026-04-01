export default function Sect06DiagnostiekEnStadieringScc() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diagnostiek en aanvullende diagnostiek</h2>
      <p>
        Bij verdenking op een cutaan plaveiselcelcarcinoom is een biopt geïndiceerd om de diagnose te stellen. Als er een
        vergrote lymfeklier palpabel is, moet aanvullend onderzoek gericht worden verricht naar die lymfeklier.
      </p>
      <p>
        Het cutane plaveiselcelcarcinoom verspreidt zich over het algemeen naar de lokale lymfeklieren. De kans op
        metastasering naar locoregionale lymfeklieren is 2–5%.
      </p>
      <p>
        Bij laag- en intermediair-risicotumoren is palpatie van de lymfeklieren tijdens het lichamelijk onderzoek vaak
        voldoende. Als er een vergrote lymfeklier palpabel is, volgt een echo en een echo-geleide punctie. Bij
        hoog-risicotumoren in het hoofd-halsgebied wordt echografische screening van de hals aanbevolen.
      </p>
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Stadiëring</h2>
      <p>Voor de stadiëring van het cutane plaveiselcelcarcinoom wordt het TNM-stadiëringssysteem van de AJCC gebruikt.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Hoofdlijnen van de TNM-classificatie bij cutaan plaveiselcelcarcinoom
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Categorie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Indeling
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Tis</td>
              <td className="px-4 py-3 align-top">carcinoom in situ</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">T1</td>
              <td className="px-4 py-3 align-top">tumor ≤ 2 cm</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">T2</td>
              <td className="px-4 py-3 align-top">tumor &gt; 2 cm en ≤ 4 cm</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">T3</td>
              <td className="px-4 py-3 align-top">
                tumor &gt; 4 cm, of perineurale invasie, of diepe invasie, of minimale boterosie
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">T4a</td>
              <td className="px-4 py-3 align-top">tumor met bot-/beenmerginvasie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">T4b</td>
              <td className="px-4 py-3 align-top">tumor met ingroei in schedelbot of in openingen in de schedelbasis</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">N0</td>
              <td className="px-4 py-3 align-top">geen regionale lymfekliermetastase</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">N1</td>
              <td className="px-4 py-3 align-top">1 ipsilaterale lymfekliermetastase ≤ 3 cm zonder extranodale extensie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">N2</td>
              <td className="px-4 py-3 align-top">meerdere of grotere lymfekliermetastasen, afhankelijk van subcategorie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">N3</td>
              <td className="px-4 py-3 align-top">uitgebreide lymfeklierbetrokkenheid</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">M0 / M1</td>
              <td className="px-4 py-3 align-top">geen / wel metastasen op afstand</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>De prognostische stadiëring wordt vervolgens op basis van T, N en M ingedeeld in stadium 0 tot en met IV.</p>
    </div>
  )
}
