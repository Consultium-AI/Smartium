export default function Sect09KliniekVanEenPneumonie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Kliniek van een pneumonie</h2>
      <p>
        Een pneumonie is een veelvoorkomende en potentieel ernstige infectie van het longparenchym. Het ontstekingsproces in de alveoli en de omliggende bronchioli vormt de basis van de klachten. Die ontsteking zorgt ervoor dat gaswisseling minder goed verloopt en geeft de typische symptomen en lichamelijke afwijkingen.
      </p>
      <p>De belangrijkste klachten bij volwassenen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>hoesten</li>
        <li>sputumproductie</li>
        <li>nieuwe of verergerde dyspnoe</li>
      </ul>
      <p>De belangrijkste bevindingen bij lichamelijk onderzoek zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>tachypnoe</li>
        <li>hypoxemie</li>
        <li>auscultatoire afwijkingen zoals crepitaties of rhonchi</li>
        <li>koorts</li>
      </ul>

      <div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Klacht of bevinding</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Hoe vaak / hoe bruikbaar?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Hoesten</td>
                <td className="px-4 py-3">Komt vaak voor, maar is weinig specifiek</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Sputumtoename</td>
                <td className="px-4 py-3">Komt geregeld voor, matig sensitief en specifiek</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Dyspnoe</td>
                <td className="px-4 py-3">Vaak aanwezig, maar ook matig sensitief en specifiek</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Tachypnoe</td>
                <td className="px-4 py-3">Vaak aanwezig, redelijk specifiek, maar weinig sensitief</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Hypoxemie</td>
                <td className="px-4 py-3">Komt niet bij iedereen voor</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Auscultatoire afwijkingen</td>
                <td className="px-4 py-3">Vaak hoorbaar, maar normaal longonderzoek sluit pneumonie niet uit</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Koorts</td>
                <td className="px-4 py-3">Redelijk specifiek, maar weinig sensitief</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: Sluit een normale saturatie een pneumonie uit?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Nee. Een normale saturatie sluit een pneumonie niet uit.
        </p>
      </div>
    </div>
  )
}
