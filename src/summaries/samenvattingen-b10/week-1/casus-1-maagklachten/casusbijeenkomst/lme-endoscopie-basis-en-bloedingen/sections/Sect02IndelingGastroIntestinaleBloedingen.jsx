export default function Sect02IndelingGastroIntestinaleBloedingen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Indeling van gastro-intestinale bloedingen</h2>
      <p>
        Een bloeding uit de tractus digestivus is een veelvoorkomende en potentieel levensbedreigende acute presentatie.
        De indeling gebeurt vooral op basis van de plek van de bloeding ten opzichte van het{' '}
        <strong className="text-slate-900 dark:text-slate-100">ligament van Treitz</strong>:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Hoge tractus digestivusbloeding</strong>: de bron ligt{' '}
          <strong className="text-slate-900 dark:text-slate-100">proximaal</strong> van het ligament van Treitz. Daarbij gaat
          het meestal om de slokdarm, maag en duodenum.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Lage tractus digestivusbloeding</strong>: de bron ligt{' '}
          <strong className="text-slate-900 dark:text-slate-100">distaal</strong> van het ligament van Treitz. Dit betreft
          vooral colon, rectum en terminale ileum.
        </li>
      </ul>
      <p>
        Deze indeling is klinisch belangrijk, omdat oorzaak, diagnostiek en behandeling verschillen. Tegelijk kan de
        presentatie overlappen. Zo kan een zeer snelle hoge bloeding zich soms uiten als helder rood bloedverlies per
        anum.
      </p>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Aandachtsvraag:</strong> Waarom is de indeling hoog versus laag
        zo belangrijk?
        <br />
        <strong className="text-slate-900 dark:text-slate-100">Kort antwoord:</strong> Omdat de locatie van de bloeding meteen
        richting geeft aan de meest waarschijnlijke oorzaak, het juiste onderzoek en de behandeling.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 1. Hoog versus laag tractus digestivusbloeding
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Kenmerk
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Hoge tractus bloeding
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Lage tractus bloeding
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Locatie</td>
                <td className="px-4 py-3 align-top">Proximaal van ligament van Treitz</td>
                <td className="px-4 py-3 align-top">Distaal van ligament van Treitz</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Typische presentatie</td>
                <td className="px-4 py-3 align-top">Hematemesis, melena</td>
                <td className="px-4 py-3 align-top">Hematochezie</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Meest voorkomende gebieden</td>
                <td className="px-4 py-3 align-top">Slokdarm, maag, duodenum</td>
                <td className="px-4 py-3 align-top">Colon, rectum, terminale ileum</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Belangrijke diagnostiek</td>
                <td className="px-4 py-3 align-top">Gastroscopie</td>
                <td className="px-4 py-3 align-top">Colonoscopie, soms CT-angiografie</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Mogelijke kleine-darmdiagnostiek</td>
                <td className="px-4 py-3 align-top">Enteroscopie met overtube en ballon</td>
                <td className="px-4 py-3 align-top">Enteroscopie, maar zeldzaam nodig</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
