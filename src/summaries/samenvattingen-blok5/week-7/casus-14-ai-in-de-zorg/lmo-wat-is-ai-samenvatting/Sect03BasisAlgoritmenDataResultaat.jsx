export default function Sect03BasisAlgoritmenDataResultaat() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De basis: algoritmen, data en resultaat</h2>
      <p className="whitespace-pre-line">
        {`Een 
algoritme
 is een reeks instructies die naar een bepaald einddoel leiden. Je kunt het zien als een stappenplan dat een computer volgt.`}
      </p>
      <p>Bij een AI-systeem zie je vaak grofweg deze onderdelen terug:</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800/80">
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Onderdeel
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Betekenis
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Instructie</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">wat het systeem moet doen</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Data</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">de informatie waarmee het systeem werkt</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Algoritme</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">de regels of leerprocedure</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Resultaat</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">de uitkomst, voorspelling of beslissing</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Zo’n systeem gebruik je vaak zonder dat je het merkt. Als je iets googelt, als Netflix een serie aanbeveelt of als je
        spamfilter een mail tegenhoudt, zit daar een algoritme achter.
      </p>
      <p className="whitespace-pre-line">
        {`Een belangrijke groep zijn 
aanbevelingssystemen
. Die proberen op basis van eerdere keuzes te voorspellen wat jij waarschijnlijk interessant vindt. Denk aan: “mensen die dit leuk vonden, bekeken ook dat.” Zulke systemen spelen een enorme rol in het internetgebruik van alledag.`}
      </p>
      <div className="rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/40 p-4 space-y-3">
        <p className="font-semibold text-slate-900 dark:text-slate-100">Aandacht-vraag</p>
        <p>Waarom zijn aanbevelingssystemen zo invloedrijk?</p>
        <p className="whitespace-pre-line">
          {`Mini-antwoord:
Omdat ze bepalen wat je te zien krijgt. Ze sturen dus mede je aandacht, keuzes en online gedrag.`}
        </p>
      </div>
    </div>
  )
}
