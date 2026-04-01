export default function Sect03VanCorrelatieNaarRegressie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Van correlatie naar regressie</h2>
      <p>
        Voordat je met regressie aan de slag gaat, is het handig om het verschil met correlatie goed te begrijpen. De correlatiecoëfficiënt (Pearson’s r) vat de sterkte en richting van een lineaire samenhang tussen twee continue variabelen samen.
      </p>
      <p>De waarde van r ligt altijd tussen -1 en 1:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>r &gt; 0: hogere X gaat gemiddeld samen met hogere Y;</li>
        <li>r &lt; 0: hogere X gaat gemiddeld samen met lagere Y;</li>
        <li>r ≈ 0: geen duidelijke lineaire samenhang; er kan nog wel een niet-lineair patroon zijn.</li>
      </ul>
      <p>Belangrijk is dat correlatie symmetrisch is: X en Y spelen dezelfde rol. Bovendien zegt correlatie niets over causaliteit.</p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. Correlatie versus regressie</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderdeel</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Correlatie</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Regressie</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Doel</td>
                <td className="px-4 py-3 align-top">Samenhang samenvatten</td>
                <td className="px-4 py-3 align-top">Y verklaren of voorspellen uit X</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Uitkomst</td>
                <td className="px-4 py-3 align-top">Correlatiecoëfficiënt r</td>
                <td className="px-4 py-3 align-top">Regressielijn met intercept en helling</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Richting van verband</td>
                <td className="px-4 py-3 align-top">Ja</td>
                <td className="px-4 py-3 align-top">Ja</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Sterkte van verband</td>
                <td className="px-4 py-3 align-top">Ja</td>
                <td className="px-4 py-3 align-top">Indirect, via de fit van het model</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Voorspellen van Y</td>
                <td className="px-4 py-3 align-top">Nee</td>
                <td className="px-4 py-3 align-top">Ja</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Causaliteit</td>
                <td className="px-4 py-3 align-top">Nee</td>
                <td className="px-4 py-3 align-top">Nee</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtspunt: wat is het verschil tussen correlatie en regressie?  Mini-antwoord: correlatie beschrijft samenhang; regressie beschrijft hoe Y verandert als X verandert en kan gebruikt worden voor voorspelling.
        </p>
      </div>
    </div>
  )
}
