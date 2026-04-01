export default function Sect09InkomensniveauEnEpidemiologischeTransitie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Inkomensniveau en epidemiologische transitie</h2>
      <p>
        Naast geografische indeling is ook de indeling in inkomensgroepen belangrijk. De Wereldbank verdeelt landen in:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>low income countries</li>
        <li>lower middle income countries</li>
        <li>upper middle income countries</li>
        <li>high income countries</li>
      </ul>
      <p>
        Hier zie je een duidelijk patroon: hoe hoger het inkomensniveau, hoe lager het totale aantal DALY’s per 1000
        inwoners.
      </p>
      <p>
        De belangrijkste verschuiving is dat bij lage inkomens groep 1-ziekten domineren, vooral infectieziekten. Bij
        hogere inkomens verschuift het patroon naar groep 2, dus niet-overdraagbare aandoeningen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 5. Globaal patroon van ziektelast per inkomensgroep
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Inkomensgroep
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijkste patroon
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Low income</td>
              <td className="px-3 py-3 align-top">Veel groep 1-ziekten, vooral infectieziekten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Lower middle income</td>
              <td className="px-3 py-3 align-top">Nog steeds veel groep 1, maar groep 2 wordt belangrijker</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Upper middle income</td>
              <td className="px-3 py-3 align-top">Groep 2 krijgt duidelijk meer gewicht</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">High income</td>
              <td className="px-3 py-3 align-top">Groep 2 domineert; groep 1 is veel minder belangrijk</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Wat opvalt, is dat road injuries in alle inkomenscategorieën hoog scoren. In DALY’s tellen niet alleen
        sterfgevallen mee, maar ook de verloren levensjaren. Daarom kunnen verkeersletsels relatief zwaar wegen, zeker
        als slachtoffers jong zijn.
      </p>
      <p>Ook andere patronen worden zichtbaar:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>child and maternal malnutrition neemt af bij stijgend inkomensniveau;</li>
        <li>unsafe sex neemt juist toe met stijgend inkomensniveau;</li>
        <li>low back and neck pain wordt een belangrijke oorzaak van DALY’s bij hogere inkomens;</li>
        <li>congenital defects worden minder belangrijk naarmate het inkomensniveau stijgt.</li>
      </ul>
      <p>
        Een belangrijk inzicht is dus dat de indeling naar ontwikkelings- of inkomensniveau vaak meer verklaart dan
        alleen geografische ligging. Het geeft iets aan over de fase van de epidemiologische transitie waarin een
        bevolking zich bevindt.
      </p>
    </div>
  )
}
