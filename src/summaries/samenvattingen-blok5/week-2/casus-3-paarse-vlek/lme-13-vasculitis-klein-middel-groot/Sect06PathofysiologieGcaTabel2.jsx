export default function Sect06PathofysiologieGcaTabel2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Pathofysiologie van GCA</h2>
      <p>
        De pathofysiologie van GCA begint in de vaatwand, vooral in de adventitia. Daar raken residenten dendritische
        cellen geactiveerd. Die zetten vervolgens een immuunreactie in gang, waarbij vooral CD4+ T-cellen, macrofagen en
        uiteindelijk ook multinucleaire reuscellen betrokken raken.
      </p>
      <p>Belangrijke cytokinen hierbij zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>IFN-gamma;</li>
        <li>IL-6;</li>
        <li>IL-1 beta;</li>
        <li>IL-17.</li>
      </ul>
      <p>
        De ontsteking speelt zich af in verschillende stappen. Eerst treedt verlies van tolerantie op, daarna worden
        T-cellen gerekruteerd en geactiveerd, vervolgens volgen monocyten en CD8+ T-cellen, en uiteindelijk ontstaat
        vaatwandremodellering. Daarbij migreren en prolifereren vasculaire gladde spiercellen, waardoor de intima dikker
        wordt en het lumen nauwer. Ook kunnen elastische structuren in de vaatwand beschadigd raken.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Vereenvoudigde pathofysiologie van GCA
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Fase
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Wat gebeurt er?
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                1. Start in de adventitia
              </td>
              <td className="px-4 py-3 align-top">Residenten dendritische cellen raken geactiveerd</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">2. T-celactivatie</td>
              <td className="px-4 py-3 align-top">CD4+ T-cellen differentiëren onder invloed van cytokinen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                3. Ontstekingsversterking
              </td>
              <td className="px-4 py-3 align-top">
                Macrofagen, CD8+ T-cellen en cytokinen versterken de ontsteking
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                4. Vaatwandverandering
              </td>
              <td className="px-4 py-3 align-top">Intimale verdikking, vernauwing van het lumen en ischemie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De histologie laat vaak een granulomateuze ontsteking zien met reuscellen, maar niet elke biopt toont alle
        klassieke kenmerken. De kern is dat de vaatwand geïnfiltreerd raakt en uiteindelijk vernauwt.
      </p>
    </div>
  )
}
