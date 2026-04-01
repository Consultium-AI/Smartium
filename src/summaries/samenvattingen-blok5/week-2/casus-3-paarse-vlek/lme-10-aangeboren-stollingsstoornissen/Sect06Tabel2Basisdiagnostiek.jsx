export default function Sect06Tabel2Basisdiagnostiek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Basisdiagnostiek bij bloedingsneiging
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Vragen / testen
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Wat wil je weten?
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Anamnese</td>
              <td className="px-4 py-3 align-top">Aangeboren of verworven klachten, medicatie, familie-anamnese</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">aPTT</td>
              <td className="px-4 py-3 align-top">Verlengd bij laag FVIII of FIX</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">FVIII</td>
              <td className="px-4 py-3 align-top">Verlaagd bij hemofilie A; kan ook laag zijn bij Von Willebrandziekte</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">FIX</td>
              <td className="px-4 py-3 align-top">Verlaagd bij hemofilie B</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">VWF</td>
              <td className="px-4 py-3 align-top">Belangrijk omdat een laag VWF ook een laag FVIII kan geven</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Trombocytenaantal</td>
              <td className="px-4 py-3 align-top">Normaal bij hemofilie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">D-dimeer</td>
              <td className="px-4 py-3 align-top">Niet veranderd bij hemofilie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Creatinine</td>
              <td className="px-4 py-3 align-top">Niet gestoord bij hemofilie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Aandachtsvraag: waarom meet je vaak ook VWF als je aan hemofilie denkt?{'  '}
        Mini-antwoord: omdat VWF een drager-eiwit is voor FVIII; een laag FVIII kan dus ook passen bij Von
        Willebrandziekte.
      </p>
    </div>
  )
}
