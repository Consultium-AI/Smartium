export default function Sect06MaagcarcinoomEpidemiologie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Maagcarcinoom: epidemiologie en typen
      </h2>
      <p>
        Maagcarcinoom is nog steeds één van de vijf meest voorkomende en dodelijkste tumoren. De prevalentie daalt mee met de
        dalende prevalentie van H. pylori. Tegelijkertijd lijkt er in de laatste tien jaar groei te zijn in de jongere populatie
        van 15-39 jaar.
      </p>
      <p>Er zijn twee hoofdtypen maagcarcinoom:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>het intestinale type;</li>
        <li>het diffuse type.</li>
      </ul>
      <p>
        Het intestinale type is het meest voorkomende type, ongeveer 55-65%. Dit ontstaat uit gastrische intestinale metaplasie.
        H. pylori is daarbij de belangrijkste oorzakelijke factor. Het diffuse type maakt ongeveer 35-45% uit. Dit bestaat uit
        slecht gedifferentieerde cellen met zegelringcellen en infiltreert vaak onder de mucosa. Klinisch past dit vaak bij
        linitis plastica.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 4. Kenmerken van de twee typen maagcarcinoom
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Type
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Kenmerken
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Intestinaal type</td>
                <td className="px-4 py-3 align-top">
                  Meest voorkomend, 55-65%, uit gastrische intestinale metaplasie, H. pylori belangrijk
                </td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Diffuus type</td>
                <td className="px-4 py-3 align-top">
                  35-45%, slecht gedifferentieerde cellen, zegelringcellen, submucosale infiltratie, linitis plastica
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-3">
        <p className="text-slate-800 dark:text-amber-100 m-0">
          <strong className="text-slate-900 dark:text-amber-50">Aandachtsvraag:</strong> welk type maagcarcinoom is het meest
          voorkomend?
          <br />
          <strong className="text-slate-900 dark:text-amber-50">Antwoord:</strong> het intestinale type.
        </p>
      </div>
    </div>
  )
}
