export default function Sect02DeEndocrienePancreas() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De endocriene pancreas</h2>
      <p>
        De endocriene pancreas bestaat uit de <strong className="text-slate-900 dark:text-slate-100">eilandjes van Langerhans</strong>. Dit zijn kleine, microscopisch herkenbare groepjes cellen in de pancreas die hormonen maken. In deze eilandjes zitten onder andere de cellen die <strong className="text-slate-900 dark:text-slate-100">insuline</strong>, <strong className="text-slate-900 dark:text-slate-100">glucagon</strong> en <strong className="text-slate-900 dark:text-slate-100">somatostatine</strong> produceren.
      </p>
      <p>
        De twee belangrijkste hormonen voor deze stofwisseling zijn insuline en glucagon. Insuline is vooral actief na een maaltijd, wanneer er veel voedingsstoffen beschikbaar zijn. Glucagon is juist belangrijk wanneer de maaltijd langer geleden is en de bloedglucose daalt. Dan moet het lichaam energie vrijmaken en nieuwe glucose aanmaken.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijke hormonen en hun globale effect</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Hormoon</th>
              <th className="px-4 py-3 font-semibold">Situatie waarin het toeneemt</th>
              <th className="px-4 py-3 font-semibold">Hoofdeffect op metabolisme</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Insuline</td>
              <td className="px-4 py-3 align-top">Na de maaltijd</td>
              <td className="px-4 py-3 align-top">Opname, verwerking en opslag van voedingsstoffen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Glucagon</td>
              <td className="px-4 py-3 align-top">Bij vasten of lage bloedglucose</td>
              <td className="px-4 py-3 align-top">Vrijmaken en aanmaken van glucose</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Adrenaline</td>
              <td className="px-4 py-3 align-top">Stress, inspanning, acute noodsituatie</td>
              <td className="px-4 py-3 align-top">Snelle beschikbaarheid van energie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Cortisol</td>
              <td className="px-4 py-3 align-top">Stress, langere belasting</td>
              <td className="px-4 py-3 align-top">Verhoging van bloedglucose en afbraak van lichaamsweefsel</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
