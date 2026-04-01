export default function Sect05PSIEnRisicoklassen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p>
        De PSI bevat veel meer variabelen dan de CURB-65. Het gaat onder andere om leeftijd, geslacht, verpleeghuisbewoning, maligniteit, leverziekten, hartfalen, cerebrovasculaire ziekte, nierziekte, verandering van mentale status, ademhalingsfrequentie, bloeddruk, temperatuur, pols, pH, ureum, natrium, glucose, hematocriet, zuurstofwaarden en pleuravocht. Omdat dit veel variabelen zijn, is de PSI lastiger uit te rekenen.
      </p>
      <p>Voor de PSI wordt eerst gekeken of de patiënt al aan bepaalde criteria voldoet, zoals:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ouder dan 50 jaar;</li>
        <li>verandering in mentale status;</li>
        <li>pols ≥ 125/min;</li>
        <li>ademfrequentie &gt; 30/min;</li>
        <li>systolische bloeddruk &lt; 90 mmHg;</li>
        <li>temperatuur &lt; 35°C of ≥ 40°C;</li>
        <li>of voorgeschiedenis van onder andere maligne ziekte, hartfalen, cerebrovasculaire ziekte, nierziekte of leverziekte.</li>
      </ul>
      <p>Als dat niet zo is, valt de patiënt in risicoklasse I. Zo niet, dan wordt de volledige score berekend.</p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 3. PSI-risicoklassen en mortaliteit</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Risicoklasse</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Punten</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Mortaliteit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">I</td>
                <td className="px-4 py-3">n.v.t.</td>
                <td className="px-4 py-3">0,1%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">II</td>
                <td className="px-4 py-3">≤ 70</td>
                <td className="px-4 py-3">0,6%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">III</td>
                <td className="px-4 py-3">71–90</td>
                <td className="px-4 py-3">0,9%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">IV</td>
                <td className="px-4 py-3">91–130</td>
                <td className="px-4 py-3">9,3%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">V</td>
                <td className="px-4 py-3">&gt; 130</td>
                <td className="px-4 py-3">27%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandacht-vraagje: Waarom gebruiken we deze scores?  Mini-antwoord: Om de ernst en overlijdenskans in te schatten, zodat behandeling en opnamemaatregelen beter gekozen kunnen worden.
        </p>
      </div>
    </div>
  )
}
