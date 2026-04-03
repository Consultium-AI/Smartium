export default function Sect10Preventie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Preventie van een diabetische voet</h2>
      <p>
        Preventie is een belangrijk deel van de behandeling. Er worden drie vormen onderscheiden.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 6. Preventie bij de diabetische voet</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Vorm</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Primaire preventie</td>
                <td className="px-4 py-3">Voorkomen van het ontstaan van diabetes mellitus; als er geen diabetes is, kan er ook geen diabetische voet ontstaan</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Secundaire preventie</td>
                <td className="px-4 py-3">Voorkomen dat bij patiënten met diabetes een diabetische voet ontstaat</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Tertiaire preventie</td>
                <td className="px-4 py-3">Voorkomen van complicaties van de diabetische voet, zoals verlies van een deel van de voet</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>Bij secundaire preventie horen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>goede glucose-regulatie;</li>
        <li>gezonde leefregels;</li>
        <li>adequate voetverzorging;</li>
        <li>periodieke inspectie.</li>
      </ul>

      <p>Bij tertiaire preventie horen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>eventuele standscorrecties;</li>
        <li>wondbehandeling;</li>
        <li>infectiebehandeling;</li>
        <li>zo nodig revascularisatie.</li>
      </ul>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandacht-vraag: Wat is het verschil tussen secundaire en tertiaire preventie?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Secundaire preventie probeert een diabetische voet te voorkomen; tertiaire preventie probeert complicaties van een bestaande diabetische voet te voorkomen.
        </p>
      </div>
    </div>
  )
}
