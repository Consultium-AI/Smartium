export default function Sect08Screeningsmethoden() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Welke screeningsmethoden bestaan er?</h2>
      <p>
        Er zijn verschillende manieren om op darmkanker te screenen. De belangrijkste eis is dat een test niet alleen
        darmkanker vroeg moet kunnen opsporen, maar ook advanced adenomen moet kunnen vinden. Anders mis je juist de
        voorstadia die je wilt verwijderen.
      </p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Overzicht van screeningsmethoden</h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
              <tr>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Methode</th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Wat doet het?</th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">
                  Belangrijkste punt
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900/40">
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  <strong className="text-slate-900 dark:text-slate-100">gFOBT</strong>
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Spoort bloed in ontlasting op via de heemgroep van hemoglobine
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Minder gevoelig dan FIT voor humaan bloed
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  <strong className="text-slate-900 dark:text-slate-100">FIT</strong>
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Spoort bloed in ontlasting op via het globinedeel van hemoglobine
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Gevoeliger dan gFOBT en wordt steeds vaker gebruikt
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  <strong className="text-slate-900 dark:text-slate-100">DNA-test in ontlasting</strong>
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Nieuwe ontlastingstest</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Kostbaar en niet beter dan FIT, daarom geen plaats in het Nederlandse bevolkingsonderzoek
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  <strong className="text-slate-900 dark:text-slate-100">Sigmoïdoscopie</strong>
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Kijkt alleen naar het linker deel van de darm
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Minder belastend, omdat niet de hele darm wordt bekeken
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  <strong className="text-slate-900 dark:text-slate-100">Coloscopie</strong>
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Kijkt de hele darm na, met mogelijkheid tot biopten
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Sterke test, maar deelname is lager
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  <strong className="text-slate-900 dark:text-slate-100">CT-colonografie</strong>
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">CT-scan van het colon</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Kan geen goed onderscheid maken tussen hyperplastische en adenomateuze poliepen; minder accuraat bij
                  poliepen &lt; 6 mm
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  <strong className="text-slate-900 dark:text-slate-100">Bloedtesten</strong>
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Zoekt tumor-gerelateerde biomarkers in bloed
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Minder effectief dan ontlastingstesten of coloscopie in voorkomen van darmkanker of sterfte
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
