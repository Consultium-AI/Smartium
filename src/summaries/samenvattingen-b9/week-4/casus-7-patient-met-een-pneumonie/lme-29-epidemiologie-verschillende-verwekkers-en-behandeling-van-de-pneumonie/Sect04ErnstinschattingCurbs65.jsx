export default function Sect04ErnstinschattingCurbs65() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Ernstinschatting met risicoscores</h2>
      <p>
        Om de ernst van een pneumonie en de kans op overlijden in te schatten worden vooral twee scores gebruikt: de CURB-65 en de Pneumonia Severity Index (PSI). In de praktijk hangt de antibiotische keuze vaak samen met de ernst van de pneumonie.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. CURB-65 en PSI in het kort</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Score</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderdeel</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Opmerking</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top font-semibold">CURB-65</td>
                <td className="px-4 py-3 align-top">
                  Confusion, Ureum &gt; 7 mmol/L, Respiratory rate ≥ 30/min, Blood pressure systolisch &lt; 90 mmHg of diastolisch ≤ 60 mmHg, leeftijd ≥ 65 jaar
                </td>
                <td className="px-4 py-3 align-top">Elk onderdeel levert 1 punt op; totaalscore 0–5</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top font-semibold">PSI</td>
                <td className="px-4 py-3 align-top">Bevat veel meer variabelen</td>
                <td className="px-4 py-3 align-top">Lastiger en tijdrovender, maar uitgebreider</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        De CURB-65 wordt gebruikt om de ernst van een buiten het ziekenhuis opgelopen pneumonie in te schatten. De onderdelen zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>C = confusion, verwardheid</li>
        <li>U = ureum &gt; 7 mmol/L</li>
        <li>R = ademfrequentie ≥ 30/min</li>
        <li>B = systolische bloeddruk &lt; 90 mmHg of diastolische bloeddruk ≤ 60 mmHg</li>
        <li>65 = leeftijd ≥ 65 jaar</li>
      </ul>
      <p>Hoe hoger de score, hoe hoger de geschatte 30-dagenmortaliteit.</p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. CURB-65 en geschatte 30-dagenmortaliteit</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">CURB-65-score</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">30-dagenmortaliteit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">0</td>
                <td className="px-4 py-3">1%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3">2%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">2</td>
                <td className="px-4 py-3">9%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">3</td>
                <td className="px-4 py-3">15%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">≥ 4</td>
                <td className="px-4 py-3">38%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
