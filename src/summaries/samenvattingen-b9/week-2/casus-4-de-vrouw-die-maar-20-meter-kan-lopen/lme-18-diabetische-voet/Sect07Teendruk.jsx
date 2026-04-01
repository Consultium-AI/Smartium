export default function Sect07Teendruk() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Teendruk: waarom is die belangrijk?</h2>
      <p>
        Omdat de onderbeensarteriën bij diabetes vaak verkalkt zijn, kan de enkel/arm-index soms minder betrouwbaar zijn. De teendruk is dan een betere maat voor de perifere perfusie.
      </p>
      <p>
        Teendruk wordt gemeten in de teen, meestal de hallux, met een kleine manchet en fotoplethysmografie of Doppler.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 5. Interpretatie van absolute teendruk</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Teendruk (mmHg)</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Interpretatie</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">≥ 60 mmHg</td>
                <td className="px-4 py-3">Adequate perfusie</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">40–59 mmHg</td>
                <td className="px-4 py-3">Verminderde perfusie</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">30–39 mmHg</td>
                <td className="px-4 py-3">Kritisch</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">&lt; 30 mmHg</td>
                <td className="px-4 py-3">Ernstige ischemie, slechte wondgenezing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>Teendruk is belangrijk:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ter beoordeling van ischemie;</li>
        <li>als objectieve maat voor perifere doorbloeding;</li>
        <li>om neuropathische en neuro-ischemische voet van elkaar te onderscheiden;</li>
        <li>om de kans op wondgenezing in te schatten;</li>
        <li>om te helpen bepalen of revascularisatie nodig is.</li>
      </ul>
      <p>
        Een teendruk van 30–40 mmHg geeft nog een redelijke kans op wondgenezing. Een teendruk onder de 30 mmHg past bij een hoge kans op falende genezing.
      </p>
    </div>
  )
}
