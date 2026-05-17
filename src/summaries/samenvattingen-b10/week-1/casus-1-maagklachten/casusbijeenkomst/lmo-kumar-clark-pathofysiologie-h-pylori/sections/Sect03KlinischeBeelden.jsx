export default function Sect03KlinischeBeelden() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        <em>Helicobacter pylori</em> en klinische beelden
      </h2>
      <p>
        Een infectie met <em>H. pylori</em> kan verschillende klinische beelden veroorzaken. De kern daarvan is dat de
        bacterie de maagwand beïnvloedt en daardoor ontsteking en schade kan veroorzaken. De belangrijkste uitkomsten die je
        moet kennen zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>gastritis</li>
        <li>ulcuslijden</li>
        <li>verhoogd risico op maligniteit</li>
      </ul>
      <p>
        Deze drie uitkomsten horen bij elkaar in de zin dat ze allemaal kunnen voortkomen uit een aanhoudende infectie en
        beschadiging van het maagslijmvlies. Gastritis is hierbij de ontstekingsreactie van het maagslijmvlies. Ulcuslijden
        betekent dat er een zweer ontstaat. Het verhoogde risico op maligniteit laat zien dat langdurige infectie en
        chronische beschadiging van de maagwand ook op langere termijn gevolgen kan hebben.
      </p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 2. Klinische gevolgen van <em>H. pylori</em> infectie
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top font-medium text-slate-900 dark:text-slate-100">Gastritis</td>
                <td className="px-4 py-3 align-top">Ontsteking van het maagslijmvlies</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top font-medium text-slate-900 dark:text-slate-100">Ulcuslijden</td>
                <td className="px-4 py-3 align-top">Vorming van een zweer in het maag-darmgebied</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top font-medium text-slate-900 dark:text-slate-100">
                  Verhoogd risico op maligniteit
                </td>
                <td className="px-4 py-3 align-top">
                  Langdurige infectie hangt samen met een groter risico op kwaadaardige afwijkingen
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        De belangrijke gedachte is dus: een infectie blijft niet beperkt tot de aanwezigheid van een bacterie, maar kan
        uitmonden in ontsteking, weefselschade en ernstigere ziektebeelden.
      </p>
    </div>
  )
}
