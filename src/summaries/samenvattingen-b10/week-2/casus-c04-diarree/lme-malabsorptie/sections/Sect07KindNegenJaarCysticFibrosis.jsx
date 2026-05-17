export default function Sect07KindNegenJaarCysticFibrosis() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <hr className="my-8 border-slate-200 dark:border-slate-600" />
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Kind van 9 jaar met groeiachterstand en luchtweginfecties: denk aan cystic fibrosis
      </h2>
      <p>
        Bij het 9-jarige meisje zijn de klachten duidelijk uitgebreider: recidiverende luchtweginfecties, chronische hoest, vettige stinkende ontlasting, ondergewicht, groeiachterstand,
        droge huid en beginnende clubbing van de nagels. Dit maakt de verdenking op cystic fibrosis (CF) sterk.
      </p>
      <p>
        CF is een systemische aandoening die autosomaal recessief overerft. De meest voorkomende mutatie is dF508. Sinds 2011 wordt er gescreend via de neonatale hielprik. Een positieve
        hielprik maakt CF waarschijnlijk, maar een negatieve uitslag sluit CF niet volledig uit. Na een positieve hielprik volgt snelle verwijzing naar een kinderlongarts in een CF-centrum.
      </p>
      <p>
        Bij CF zijn meerdere orgaansystemen betrokken. Vooral de longen, pancreas, darmen, lever en het mannelijk voortplantingssysteem zijn belangrijk.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Betrokken organen en klachten bij CF</h3>
        <div className="overflow-x-auto mt-4 rounded-xl border border-emerald-200/80 dark:border-emerald-600/40">
          <table className="w-full text-sm border-collapse bg-white dark:bg-slate-900/50">
            <thead>
              <tr className="bg-emerald-100 dark:bg-emerald-900/40">
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  Orgaan
                </th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  Betrokkenheid
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Longen
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Longontsteking, bronchitis, taai slijm, chronische infecties
                </td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Pancreas
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Pancreasfibrose, exocriene insufficiëntie, malabsorptie
                </td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Darm
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Darmobstructie, DIOS</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Lever
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Levercirrose, cholestase</td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Mannelijk voortplantingssysteem
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Mannelijke steriliteit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>Klachten bij CF zijn onder meer:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>recidiverende luchtweginfecties;</li>
        <li>vetdiarree of steatorroe;</li>
        <li>groeiachterstand;</li>
        <li>vitamine- en voedingsdeficiënties;</li>
        <li>buikklachten;</li>
        <li>soms zout zweet.</li>
      </ul>
    </div>
  )
}
