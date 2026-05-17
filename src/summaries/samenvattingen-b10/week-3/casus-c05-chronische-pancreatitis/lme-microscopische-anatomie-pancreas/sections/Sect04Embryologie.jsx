export default function Sect04Embryologie () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Embryologie van de pancreas</h2>
      <p>
        De pancreas ontstaat uit een <strong className="text-slate-900 dark:text-slate-100">ventrale</strong> en een{' '}
        <strong className="text-slate-900 dark:text-slate-100">dorsale</strong> bud, dus uit twee aanlegknoppen. Normaal
        fuseren deze twee delen tijdens de ontwikkeling. De ventrale en dorsale aanleg hebben elk eerst hun eigen duct.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          de <strong className="text-slate-900 dark:text-slate-100">ventrale duct</strong> heet de{' '}
          <strong className="text-slate-900 dark:text-slate-100">duct van Santorini</strong>;
        </li>
        <li>
          de <strong className="text-slate-900 dark:text-slate-100">dorsale duct</strong> heet de{' '}
          <strong className="text-slate-900 dark:text-slate-100">duct van Wirsung</strong>.
        </li>
      </ul>
      <p>
        Als de twee pancreasknoppen niet goed met elkaar fuseren, ontstaat een{' '}
        <strong className="text-slate-900 dark:text-slate-100">pancreas divisum</strong>. Dan blijven beide ducten
        afzonderlijk draineren via een eigen papil in het duodenum.
      </p>
      <p>
        Verder komen de <strong className="text-slate-900 dark:text-slate-100">ductus pancreaticus</strong> en de{' '}
        <strong className="text-slate-900 dark:text-slate-100">ductus choledochus</strong> in een groot deel van de mensen samen in een{' '}
        <strong className="text-slate-900 dark:text-slate-100">common channel</strong>. Dit kanaal mondt uit in het duodenum via de{' '}
        <strong className="text-slate-900 dark:text-slate-100">papil van Vater</strong>. In veel gevallen is dit de normale situatie. Er bestaan ook variaties, waarbij er een <strong className="text-slate-900 dark:text-slate-100">papilla minor</strong> en een{' '}
        <strong className="text-slate-900 dark:text-slate-100">papilla major</strong> zijn.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Korte denkvraag:</strong> waarom is de embryologie hier belangrijk voor de kliniek?
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          <strong className="font-semibold">Mini-antwoord:</strong> omdat afwijkingen in de fusie en in de ductaanleg gevolgen kunnen hebben voor de afvoer van gal en pancreassap.
        </p>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Embryologische kernpunten</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Begrip</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Ventrale bud</td>
              <td className="p-3 align-top">Deel van de embryonale pancreasaanleg</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Dorsale bud</td>
              <td className="p-3 align-top">Ander deel van de embryonale pancreasaanleg</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Duct van Santorini</td>
              <td className="p-3 align-top">Ventrale duct</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Duct van Wirsung</td>
              <td className="p-3 align-top">Dorsale duct</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Common channel</td>
              <td className="p-3 align-top">Gezamenlijke uitmonding van ductus pancreaticus en ductus choledochus</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Papil van Vater</td>
              <td className="p-3 align-top">Uitmonding in het duodenum</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Pancreas divisum</td>
              <td className="p-3 align-top">Onvoldoende fusie van de twee buds, waardoor beide ducten apart blijven draineren</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
