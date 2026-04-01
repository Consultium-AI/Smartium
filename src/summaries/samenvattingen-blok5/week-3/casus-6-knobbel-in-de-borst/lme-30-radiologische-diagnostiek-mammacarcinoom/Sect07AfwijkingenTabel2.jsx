export default function Sect07AfwijkingenTabel2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Afwijkingen herkennen: benigne en maligne kenmerken</h2>
      <p>Bij de beoordeling van een mammogram kijk je steeds systematisch naar een aantal hoofdgroepen van afwijkingen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>massa’s;</li>
        <li>architectuurverstoring;</li>
        <li>calcificaties;</li>
        <li>tepel- en huidafwijkingen;</li>
        <li>axillaire lymfeklieren.</li>
      </ul>
      <p>Vaak komen meerdere afwijkingen tegelijk voor.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Kenmerken van benigne en maligne afwijkingen
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderdeel
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Benigne kenmerken
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Maligne kenmerken
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">Vorm massa</td>
              <td className="px-3 py-3 align-top">Rond, ovaal, macrolobulair</td>
              <td className="px-3 py-3 align-top">Irregulier, vertakt, onregelmatig</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">Begrenzing</td>
              <td className="px-3 py-3 align-top">Scherp, duidelijk afgrensbaar</td>
              <td className="px-3 py-3 align-top">Onscherp, microlobulair, gespiculeerd</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">Calcificaties</td>
              <td className="px-3 py-3 align-top">Macrocalcificaties, popcornverkalkingen, vaatverkalkingen</td>
              <td className="px-3 py-3 align-top">Microcalcificaties, pleomorfe of fijne lineaire vertakkende calcificaties</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">Architectuur</td>
              <td className="px-3 py-3 align-top">Geen verstoring</td>
              <td className="px-3 py-3 align-top">Architectuurverstoring, trekkingen in het weefsel</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">Tepel/huid</td>
              <td className="px-3 py-3 align-top">Normaal</td>
              <td className="px-3 py-3 align-top">Tepel- of huidintrekking, huidverdikking</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">Lymfeklieren</td>
              <td className="px-3 py-3 align-top">Ovale lymfeklieren met vetrijke hilus</td>
              <td className="px-3 py-3 align-top">Vergrote, afwijkende klieren</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een belangrijke benigne massa is bijvoorbeeld een fibroadenoom: vaak ovaal, scherp begrensd en zonder verdachte
        calcificaties. Maligne massa’s zijn vaker onregelmatig en hebben uitlopers of spiculae.
      </p>
    </div>
  )
}
