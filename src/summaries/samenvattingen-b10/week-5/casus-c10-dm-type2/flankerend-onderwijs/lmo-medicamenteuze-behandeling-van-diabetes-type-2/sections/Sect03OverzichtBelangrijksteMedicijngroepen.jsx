export default function Sect03OverzichtBelangrijksteMedicijngroepen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Overzicht van de belangrijkste medicijngroepen</h2>
      <p>
        Er zijn verschillende groepen medicijnen die op verschillende plekken in het lichaam werken. Sommige middelen verhogen de insulinewerking, andere zorgen dat de pancreas meer insuline afgeeft, en weer andere verminderen de opname van glucose uit de darm.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijkste medicijngroepen bij diabetes type 2</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Groep</th>
              <th className="px-4 py-3 font-semibold">Voorbeeld</th>
              <th className="px-4 py-3 font-semibold">Werkingsplaats</th>
              <th className="px-4 py-3 font-semibold">Belangrijk effect</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Biguaniden</td>
              <td className="px-4 py-3 align-top">metformine</td>
              <td className="px-4 py-3 align-top">lever, weefsels</td>
              <td className="px-4 py-3 align-top">verhoogt insulinegevoeligheid, verhoogt glucoseopname, remt glycogenolyse</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Insulinesecretagogen</td>
              <td className="px-4 py-3 align-top">sulfonylureumderivaten</td>
              <td className="px-4 py-3 align-top">pancreas, bètacellen</td>
              <td className="px-4 py-3 align-top">stimuleren afgifte van insuline</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Insulinesensitizers</td>
              <td className="px-4 py-3 align-top">thiazolidinedionen</td>
              <td className="px-4 py-3 align-top">weefsels, vetweefsel</td>
              <td className="px-4 py-3 align-top">verhogen insulinegevoeligheid, verminderen afgifte van vrije vetzuren</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Alfa-glucosidaseremmers</td>
              <td className="px-4 py-3 align-top">acarbose</td>
              <td className="px-4 py-3 align-top">dunne darm</td>
              <td className="px-4 py-3 align-top">remmen afbraak en opname van koolhydraten</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">GLP-1-analogen</td>
              <td className="px-4 py-3 align-top">GLP-1-analogen</td>
              <td className="px-4 py-3 align-top">pancreas</td>
              <td className="px-4 py-3 align-top">stimuleren insulineafgifte via GLP-1-receptor</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
