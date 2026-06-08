export default function Sect04HoeKiesJeEenInsulineschema() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe kies je een insulineschema?</h2>
      <p>
        Bij de keuze van een schema kijk je naar de situatie van de patiënt. Een nieuw gediagnosticeerde patiënt met diabetes type 1 heeft meestal een schema nodig dat zowel basale als maaltijdgebonden insuline bevat. Dat komt doordat er bij type 1 diabetes een tekort is aan eigen insulineproductie.
      </p>
      <p>
        Bij ontregelde glucosewaarden onder bestaande therapie moet je eerst analyseren waar het probleem zit. Zijn de nuchtere waarden te hoog, dan past dat vaak bij onvoldoende basale insuline. Zijn de waarden vooral na maaltijden te hoog, dan wijst dat eerder op onvoldoende of verkeerd getimede bolusinsuline.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Denkstappen bij de keuze van een schema</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Situatie</th>
              <th className="px-4 py-3 font-semibold">Waar let je op?</th>
              <th className="px-4 py-3 font-semibold">Mogelijke richting</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Nieuw gediagnosticeerde diabetes type 1</td>
              <td className="px-4 py-3 align-top">Er is behoefte aan zowel basis- als maaltijdinsuline</td>
              <td className="px-4 py-3 align-top">Bas-bolusregime of vergelijkbaar intensief schema</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Hoge nuchtere glucosewaarden</td>
              <td className="px-4 py-3 align-top">Basale dekking is mogelijk onvoldoende</td>
              <td className="px-4 py-3 align-top">Basale insuline aanpassen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Hoge postprandiale glucosewaarden</td>
              <td className="px-4 py-3 align-top">Maaltijdinsuline is mogelijk onvoldoende of te laat gegeven</td>
              <td className="px-4 py-3 align-top">Bolusinsuline, timing of koolhydraatinname aanpassen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Wisselende glucosewaarden over de dag</td>
              <td className="px-4 py-3 align-top">Schema, timing of dosering is mogelijk niet passend</td>
              <td className="px-4 py-3 align-top">Dagcurve analyseren en schema herzien</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <h3 className="text-base font-semibold text-amber-900 dark:text-amber-100 m-0">Aandachtsvraag</h3>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Wat zegt een hoge nuchtere glucosewaarde meestal?</strong>
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          Dat de basale insuline waarschijnlijk niet voldoende is.
        </p>
      </div>
    </div>
  )
}
