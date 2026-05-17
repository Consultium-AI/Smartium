export default function Sect03KlinischePresentatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Klinische presentatie: welke symptomen passen waarbij?
      </h2>
      <p>
        De klassieke symptomen zijn belangrijk, omdat ze meteen richting geven aan de plaats van de bloeding.
      </p>
      <p>
        Hematemesis betekent braken van vers bloed of koffiedikachtig materiaal. Dit wijst meestal op een bloeding in de
        hoge tractus digestivus.
      </p>
      <p>
        Melena is zwarte, teerachtige ontlasting. Dit ontstaat doordat bloed tijdens de passage door maag en darm wordt
        verteerd.
      </p>
      <p>Hematochezie is helder rood bloedverlies per anum. Dit past meestal bij een lage tractus bloeding.</p>
      <p>
        Steatorroe is gele, vette ontlasting. Dit past bij een probleem met vertering of opname van vet en is dus iets
        anders dan bloeding.
      </p>
      <p>Bij ernstig bloedverlies kunnen ook algemene klachten ontstaan, zoals duizeligheid, syncope en tekenen van shock.</p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Klachten en hun betekenis</h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Klacht
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Betekenis
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Past meestal bij
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Hematemesis</td>
                <td className="px-4 py-3 align-top">Braken van bloed of koffiedikachtig materiaal</td>
                <td className="px-4 py-3 align-top">Hoge tractus bloeding</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Melena</td>
                <td className="px-4 py-3 align-top">Zwarte, teerachtige ontlasting</td>
                <td className="px-4 py-3 align-top">Hoge tractus bloeding</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Hematochezie</td>
                <td className="px-4 py-3 align-top">Helderrood bloed per anum</td>
                <td className="px-4 py-3 align-top">Lage tractus bloeding</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Steatorroe</td>
                <td className="px-4 py-3 align-top">Gele, vette ontlasting</td>
                <td className="px-4 py-3 align-top">Vetverterings- of absorptiestoornis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Aandacht-vraagje: Wat zegt melena meestal over de plaats van de bloeding?&nbsp;&nbsp;Mini-antwoord: Melena wijst
        meestal op een bloeding hoog in het maag-darmkanaal, zoals slokdarm, maag of duodenum.
      </p>
    </div>
  )
}
