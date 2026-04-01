export default function Sect05Fibroblasten() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Fibroblasten</h2>
      <p>Fibroblasten zijn bindweefselcellen. Tumoren die hiervan uitgaan, zijn onder meer:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>keloïd</li>
        <li>hypertrofisch litteken</li>
        <li>fibroom</li>
        <li>dermatofibroom</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Keloïd versus hypertrofisch litteken</h3>
      <p>
        Zowel een keloïd als een hypertrofisch litteken is een verheven bindweefselproliferatie die kan ontstaan na
        wondgenezing. Ze komen vaker voor bij mensen met huidtype 4 tot 6.
      </p>
      <p>Het verschil zit in de begrenzing:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Hypertrofisch litteken: blijft binnen de grenzen van de oorspronkelijke wond</li>
        <li>Keloïd: groeit buiten de grenzen van de oorspronkelijke wond</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Verschil tussen hypertrofisch litteken en keloïd
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Hypertrofisch litteken
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Keloïd
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Begrenzing</td>
              <td className="px-4 py-3 align-top">Binnen oorspronkelijke wond</td>
              <td className="px-4 py-3 align-top">Buiten oorspronkelijke wond</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Ontstaan</td>
              <td className="px-4 py-3 align-top">Na wondgenezing</td>
              <td className="px-4 py-3 align-top">Na wondgenezing</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Behandeling</td>
              <td className="px-4 py-3 align-top">Niet apart uitgelicht</td>
              <td className="px-4 py-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">Injectie met corticosteroïden</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een shave-excisie is bij een keloïd geen geschikte behandeling en kan de situatie zelfs verergeren.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Fibroom</h3>
      <p>
        Fibromen zijn kleine huidkleurige of lichtbruine tumoren, vaak gesteeld. Het gaat om een proliferatie van losmazig
        bindweefsel. Ze komen vaker voor op plekken waar veel frictie is. Andere namen zijn onder andere:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>fibroma pendulans</li>
        <li>acrochordon</li>
        <li>skin tag</li>
        <li>fibroma molle</li>
        <li>fibroma filiformis</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Dermatofibroom</h3>
      <p>
        Een dermatofibroom is een vast aanvoelende, ronde nodulus die licht- tot donkerbruin van kleur kan zijn. Het komt
        vaak voor op de (onder)benen en ontstaat vaak na een microtrauma aan de huid, zoals een insectenbeet.
      </p>
      <p>
        Bij lichamelijk onderzoek is het dimpling sign kenmerkend: het dermatofibroom zit zo vast aan de onderlaag dat het
        bij indrukken een intrekking geeft.
      </p>
      <p>Bij dermatoscopie zie je bij dermatofibromen geen pigmentnetwerk.</p>
    </div>
  )
}
