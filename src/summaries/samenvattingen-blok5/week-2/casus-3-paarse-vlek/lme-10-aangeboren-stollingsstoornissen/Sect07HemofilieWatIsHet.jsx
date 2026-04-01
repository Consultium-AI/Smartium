export default function Sect07HemofilieWatIsHet() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hemofilie: wat is het?</h2>
      <p>
        Hemofilie is een stoornis van de secundaire hemostase en ontstaat door een tekort aan stollingsfactoren.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Hemofilie A: tekort aan stollingsfactor VIII</li>
        <li>Hemofilie B: tekort aan stollingsfactor IX</li>
      </ul>
      <p>
        De afwijkende genen liggen op het X-chromosoom. Daardoor hebben vooral mannen (XY) de aandoening, terwijl
        vrouwen (XX) meestal draagster zijn.
      </p>
      <p>Er zijn drie belangrijke genetische aandachtspunten:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>mannen hebben de aandoening;</li>
        <li>vrouwen zijn vaak draagster, maar kunnen ook klachten hebben;</li>
        <li>er kunnen binnen een familie ook nieuwe mutaties optreden.</li>
      </ul>
      <p>
        Dat vrouwen klachten kunnen hebben, komt door lyonisatie / X-inactivatie. Daardoor is het niet vanzelfsprekend
        dat een draagster helemaal geen bloedingsproblemen heeft.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Erfelijkheid van hemofilie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Situatie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kans / betekenis
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Hemofiliepatiënt krijgt een zoon
              </td>
              <td className="px-4 py-3 align-top">
                Kans op hemofilie bij de zoon: <strong>0%</strong>
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Hemofiliepatiënt krijgt een dochter
              </td>
              <td className="px-4 py-3 align-top">
                Kans dat zij draagster is: <strong>100%</strong>
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Draagster van hemofilie krijgt een zoon
              </td>
              <td className="px-4 py-3 align-top">
                Kans op hemofilie bij de zoon: <strong>25%</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Binnen één familie is de ernst van hemofilie bij mannen vrij gelijk, maar bij vrouwen kan het FVIII- of
        FIX-gehalte sterk variëren en is dit niet goed te voorspellen. Daarom moet bij alle mogelijke draagsters het
        stollingsfactorgehalte worden bepaald.
      </p>
      <p>
        Ook belangrijk: een deel van de jongens met hemofilie heeft geen positieve familie-anamnese. Dat kan door een
        nieuwe mutatie ontstaan zijn, ongeveer in 30% van de gevallen. Ook de moeder of oma kan dan draagster is geworden.
      </p>
    </div>
  )
}
