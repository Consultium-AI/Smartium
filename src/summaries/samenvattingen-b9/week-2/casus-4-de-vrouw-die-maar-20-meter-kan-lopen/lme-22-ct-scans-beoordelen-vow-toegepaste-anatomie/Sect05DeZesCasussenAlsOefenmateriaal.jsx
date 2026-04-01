export default function Sect05DeZesCasussenAlsOefenmateriaal() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De zes casussen als oefenmateriaal</h2>
      <p>
        In deze module komen zes verschillende casussen aan bod. Elke casus heeft eigen CT-scans en eigen klinische gegevens. Samen vormen ze een oefenreeks waarin je steeds opnieuw leert kijken naar de combinatie van patiëntgegevens en beeldvorming.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. Overzicht van de casussen</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Casus</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kerngegevens</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Klachten / klinische aanwijzing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium align-top">Casus 1</td>
                <td className="px-4 py-3 align-top">63-jarige man, hypertensie, pacemaker</td>
                <td className="px-4 py-3 align-top">Geen klachten</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium align-top">Casus 2</td>
                <td className="px-4 py-3 align-top">68-jarige man, diabetes mellitus, hypertensie, pacemaker, myocardinfarct</td>
                <td className="px-4 py-3 align-top">Klachten bij lopen na ongeveer 500 meter, links meer dan rechts</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium align-top">Casus 3</td>
                <td className="px-4 py-3 align-top">48-jarige vrouw, CVA in voorgeschiedenis met intracraniële trombectomie (IAT)</td>
                <td className="px-4 py-3 align-top">Klachten van het rechterbeen, veel minder goed lopen, klachten na 50–60 meter</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium align-top">Casus 4</td>
                <td className="px-4 py-3 align-top">59-jarige man, hypertensie, 50 pack years roken</td>
                <td className="px-4 py-3 align-top">Klachten van beide benen met krachtverlies, zwakte en atrofie, vooral rechts; maximale loopafstand ongeveer 50 meter</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium align-top">Casus 5</td>
                <td className="px-4 py-3 align-top">69-jarige man, hypertensie, appendectomie, TIA</td>
                <td className="px-4 py-3 align-top">Klachten van het linkerbeen na 150 meter, ’s nachts wakker worden van pijnlijk en doof gevoel in de linker voet</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium align-top">Casus 6</td>
                <td className="px-4 py-3 align-top">73-jarige man, hypertensie, diabetes mellitus, maagperforatie met laparotomie, stabiele angina pectoris</td>
                <td className="px-4 py-3 align-top">Klachten van het rechterbeen na 300 meter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
