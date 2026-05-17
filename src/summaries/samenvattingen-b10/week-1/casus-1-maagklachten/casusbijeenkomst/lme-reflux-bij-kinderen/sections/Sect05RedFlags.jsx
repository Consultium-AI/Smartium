export default function Sect05RedFlags() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Red flags: wanneer moet je verder denken dan reflux?
      </h2>
      <p>
        Bij (recidiverend) braken is het heel belangrijk om <strong className="text-slate-900 dark:text-slate-100">red flags</strong> te herkennen. Dan kan er direct beleid nodig zijn, of zelfs spoedhandeling. De differentiaaldiagnose van braken bij kinderen is breed, en de oorzaak hangt ook af van de leeftijd.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 3. Red flags bij kinderen met reflux- of braakklachten
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Groep
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Red flags
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">
                  <strong className="text-slate-900 dark:text-slate-100">Algemeen</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  gewichtsverlies/onvoldoende groei, lethargie, koorts, extreem geprikkeld/pijnlijk, dysurie, start van
                  klachten &gt; 6 maanden of persisterende klachten na 12-18 maanden
                </td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">
                  <strong className="text-slate-900 dark:text-slate-100">Neurologisch</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  bombende fontanel, snel groeiende schedelomtrek, insulten, macro-/microcefalie
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">
                  <strong className="text-slate-900 dark:text-slate-100">Gastro-intestinaal</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  persisterend braken met grote kracht, nachtelijk braken, galbraken, hematemesis, chronische diarree,
                  rectaal bloedverlies, abdominale distensie
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>Het is belangrijk om in de anamnese gericht te vragen naar onderscheidende onderdelen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>alarmsymptomen;</li>
        <li>
          voeding, en dan <strong className="text-slate-900 dark:text-slate-100">gedetailleerd</strong>;
        </li>
        <li>buikpijn;</li>
        <li>ontlasting;</li>
        <li>koorts;</li>
        <li>groei;</li>
        <li>aspect van het braaksel;</li>
        <li>voorgeschiedenis, bijvoorbeeld een buikoperatie;</li>
        <li>
          familieanamnese, zoals coeliakie, IBD of migraine.
        </li>
      </ul>
      <p>Door deze vragen kun je beter bepalen of het om een gewone reflux gaat of om iets anders.</p>
      <p>Klinisch gezien is dit belangrijk, omdat refluxklachten soms eigenlijk passen bij een andere aandoening, zoals bijvoorbeeld een voedselallergie of een obstructie.</p>
    </div>
  )
}
