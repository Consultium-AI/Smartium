export default function Sect07Zwangerschap() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Zwangerschap na niertransplantatie</h2>
      <p>
        Er zijn wereldwijd veel patiënten met een niertransplantaat, en een deel daarvan is vrouw in de vruchtbare leeftijd. Ongeveer 10% van deze vrouwen raakt zwanger. Dat zijn altijd hoog-risico zwangerschappen, omdat er risico’s zijn voor:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>de moeder;</li>
        <li>het kind;</li>
        <li>het transplantaat.</li>
      </ul>
      <p>
        Voor sommige vrouwen is elk risico op nierfunctieverlies onacceptabel, terwijl anderen een kinderwens zwaarder laten wegen. De afweging blijft daarom individueel.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Wanneer zijn de uitkomsten het best?</h3>
        <p className="mb-2">De beste zwangerschapsuitkomsten zie je bij:</p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>goede nierfunctie;</li>
          <li>afwezigheid of minimale proteïnurie;</li>
          <li>goed gereguleerde bloeddruk, liefst &lt;130/80 mmHg.</li>
        </ul>
        <p className="mb-2">De slechtste uitkomsten zie je bij:</p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>ernstig gestoorde nierfunctie (&lt;30 ml/min);</li>
          <li>hypertensie;</li>
          <li>proteïnurie van &gt;1 gram per dag.</li>
        </ul>
        <p>
          Er is geen harde grens waarboven het absoluut te risicovol wordt, maar hoe ongunstiger deze factoren samen zijn, hoe slechter de uitkomst.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Uitkomsten voor moeder en kind</h3>
        <p className="mb-3">
          In Nederlandse gegevens bij 288 zwangeren met een niertransplantaat werden de uitkomsten vergeleken met de algemene Nederlandse populatie.
        </p>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 4. Zwangerschapsuitkomsten na niertransplantatie</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600 mb-4">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Uitkomst</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Moeder met transplantaat</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Algemene populatie</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Hoge bloeddruk</td>
                <td className="px-4 py-3">26%</td>
                <td className="px-4 py-3">5%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Zwangerschapsvergiftiging</td>
                <td className="px-4 py-3">34%</td>
                <td className="px-4 py-3">0,5%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Keizersnede</td>
                <td className="px-4 py-3">48%</td>
                <td className="px-4 py-3">17%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Transplantaatverlies</td>
                <td className="px-4 py-3">23%</td>
                <td className="px-4 py-3">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Voor het kind:</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600 mb-3">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Uitkomst</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kind van moeder met transplantaat</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Algemene populatie</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Levend geboren</td>
                <td className="px-4 py-3">93%</td>
                <td className="px-4 py-3">99,9%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Vroeggeboorte</td>
                <td className="px-4 py-3">50%</td>
                <td className="px-4 py-3">7%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Zwangerschapsduur</td>
                <td className="px-4 py-3">35,6 weken</td>
                <td className="px-4 py-3">40 weken</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Te klein voor zwangerschapsduur</td>
                <td className="px-4 py-3">42%</td>
                <td className="px-4 py-3">10%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Geboortegewicht</td>
                <td className="px-4 py-3">2383 g (±885)</td>
                <td className="px-4 py-3">3250 g</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-3">
          De kinderen worden dus gemiddeld ongeveer 4 weken eerder geboren en wegen ongeveer 1 kilo minder. De uitkomsten zijn slechter dan bij vrouwen zonder transplantaat, maar onder de meest gunstige omstandigheden zeker niet als hopeloos te bestempelen.
        </p>
        <p className="mb-4">
          Ook werd genoemd dat 1 op de 5 moeders overleed voordat het kind 18 jaar was. Dat onderstreept dat de levensverwachting na niertransplantatie niet volledig normaliseert.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Begeleiding</h3>
        <p>Zwangerschap na niertransplantatie vraagt om:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>uitgebreide voorlichting vooraf;</li>
          <li>een individuele beslissing;</li>
          <li>begeleiding tijdens de zwangerschap in het transplantatiecentrum;</li>
          <li>samenwerking tussen nefroloog en gynaecoloog.</li>
        </ul>
      </div>
    </div>
  )
}
