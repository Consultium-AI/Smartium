export default function Sect06OpvangEnStabilisatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Opvang en stabilisatie</h2>
      <p>
        Bij een vermoeden van een gastro-intestinale bloeding moet je eerst denken aan hemodynamische stabiliteit. De
        eerste beoordeling richt zich op het herkennen van instabiliteit en het inschatten van de ernst van de bloeding.
      </p>
      <p>Belangrijke klinische parameters zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>bloeddruk;</li>
        <li>hartfrequentie;</li>
        <li>bewustzijnsniveau;</li>
        <li>urineproductie.</li>
      </ul>
      <p>
        Ook let je op klachten zoals duizeligheid, collaps of syncope. Die kunnen wijzen op een significante
        volumedepletie.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Wat is een klinisch relevante bloeding?</h3>
      <p>
        Een gastro-intestinale bloeding wordt als klinisch relevant beschouwd wanneer er sprake is van hemodynamische
        instabiliteit. Dit is gedefinieerd als:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          systolische bloeddruk {'<'} 100 mmHg;
        </li>
        <li>
          hartfrequentie {'>'} 100/min.
        </li>
      </ul>
      <p>
        Daarbij moet je rekening houden met medicatie zoals β-blokkers, omdat die de hartfrequentie kunnen verlagen.
        Patiënten met een klinisch relevante bloeding hebben een verhoogd risico op complicaties en moeten snel worden
        gestabiliseerd en onderzocht.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Eerste stappen in de opvang</h3>
      <p>De eerste behandeling bestaat uit:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>minimaal één goedlopend infuus met grote infuusnaald;</li>
        <li>zo nodig een tweede infuus;</li>
        <li>volume-resuscitatie met crystalloïden, zoals NaCl 0,9% of Ringer-lactaat;</li>
        <li>
          continue monitoring van bloeddruk, polsfrequentie en urineproductie, met als doel {'>'} 30 ml/uur.
        </li>
      </ul>
      <p>
        Patiënten met ernstige instabiliteit of belangrijke comorbiditeit moeten opgenomen worden op een bewaakte
        afdeling, zoals MCU of ICU. Let ook op aspiratierisico, vooral bij hematemesis, verminderd bewustzijn of massaal
        bloedverlies. In zulke situaties kan endotracheale intubatie nodig zijn.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Opvang en monitoring</h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Onderdeel
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Wat doe je?
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Eerste beoordeling</td>
                <td className="px-4 py-3 align-top">Hemodynamische instabiliteit herkennen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Infuus</td>
                <td className="px-4 py-3 align-top">Minstens één groot infuus, zo nodig een tweede</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Volume</td>
                <td className="px-4 py-3 align-top">Crystalloïden geven</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Monitoring</td>
                <td className="px-4 py-3 align-top">Bloeddruk, hartfrequentie, bewustzijn, urineproductie</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Opname</td>
                <td className="px-4 py-3 align-top">MCU/ICU bij instabiliteit of comorbiditeit</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Extra aandacht</td>
                <td className="px-4 py-3 align-top">Aspiratierisico en zo nodig intubatie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
