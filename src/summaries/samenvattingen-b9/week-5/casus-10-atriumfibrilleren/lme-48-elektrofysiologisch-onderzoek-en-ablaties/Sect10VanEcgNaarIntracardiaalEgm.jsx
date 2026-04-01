export default function Sect10VanEcgNaarIntracardiaalEgm() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Van ECG naar intracardiaal EGM</h2>
      <p>
        Tijdens een EFO zie je niet alleen het gewone ECG, maar ook intracardiale elektrogrammen (EGM’s): signalen die rechtstreeks door de katheters in het hart worden gemeten.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijke katheters en hun functie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Katheter</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Ligging</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Wat meet of doet deze?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">HRA (High Right Atrium)</td>
              <td className="px-4 py-3 align-top">Hoog in de rechterboezem, vlak bij de sinusknoop</td>
              <td className="px-4 py-3 align-top">Activatie van de sinusknoop en het rechter atrium</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">HIS (Bundel van His)</td>
              <td className="px-4 py-3 align-top">Op de grens tussen boezem en kamer, boven de tricuspidalisklep</td>
              <td className="px-4 py-3 align-top">Belangrijke meetkatheter; hier zie je drie pieken: A, H en V</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">CS (Coronary Sinus)</td>
              <td className="px-4 py-3 align-top">In de coronairsinus, langs de achterkant van het hart</td>
              <td className="px-4 py-3 align-top">Activatie van linker atrium en linkerventrikel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">RVa (Rechter Ventrikel apex)</td>
              <td className="px-4 py-3 align-top">Punt van de rechterkamer</td>
              <td className="px-4 py-3 align-top">Activatie van de rechterkamer en pacing/backup-mogelijkheid</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>De His-katheter is extra belangrijk. Je ziet daar:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>A: lokale atriale activatie;</li>
        <li>H: het His-bundelpotentiaal;</li>
        <li>V: lokale ventriculaire activatie.</li>
      </ul>
      <p>
        De coronary sinus meet de activatie van links naar rechts. De katheter ligt dus heel bruikbaar om de linkerharthelft indirect te volgen.
      </p>
    </div>
  )
}
