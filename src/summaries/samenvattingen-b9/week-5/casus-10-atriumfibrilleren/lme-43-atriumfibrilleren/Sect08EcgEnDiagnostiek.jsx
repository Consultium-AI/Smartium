export default function Sect08EcgEnDiagnostiek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">ECG en diagnostiek</h2>
      <p>
        Een onregelmatige pols is een aanwijzing, maar de diagnose stel je met een 12-afleidingen ECG. De klassieke kenmerken van AF zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>geen P-toppen zichtbaar;</li>
        <li>een chaotische basislijn met fijne, snelle oscillaties (f-waves);</li>
        <li>een volledig onregelmatig ritme: de RR-intervallen variëren willekeurig;</li>
        <li>meestal een smal QRS-complex ({'<'}120 ms), tenzij er al een bundeltakblok of aberrante geleiding bestaat.</li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Belangrijkste ECG-verschillen</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Ritme</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerken</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Sinusritme</td>
              <td className="px-4 py-3 align-top">Duidelijke P-top vóór elk QRS, regelmatig ritme</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Atriumfibrilleren</td>
              <td className="px-4 py-3 align-top">Geen P-toppen, rommelige basislijn, irregulair irregulair</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Atriumflutter</td>
              <td className="px-4 py-3 align-top">Regelmatige zaagtandgolven, vaak regelmatige ventriculaire respons</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Ventriculaire tachycardie</td>
              <td className="px-4 py-3 align-top">Brede QRS-complexen, snel en regelmatig, geen P-toppen zichtbaar</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
