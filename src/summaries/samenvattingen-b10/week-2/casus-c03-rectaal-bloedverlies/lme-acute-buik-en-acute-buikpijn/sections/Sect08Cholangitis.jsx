export default function Sect08Cholangitis() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Cholangitis</h2>
      <p>
        In plaats van een ontstoken galblaas kunnen ook de galwegen zelf ontsteken. Dat heet cholangitis. Acute
        cholangitis is een serieus ziektebeeld met:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>acute buikpijn rechtsboven of in de bovenbuik;</li>
        <li>hoge koorts;</li>
        <li>algemene ziekteverschijnselen;</li>
        <li>en een voorgeschiedenis van galstenen, eerdere biliaire chirurgie of een biliaire stent.</li>
      </ul>
      <p>Voor de diagnose zijn drie domeinen belangrijk:</p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Diagnose van cholangitis</h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
              <tr>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Domein</th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Criteria</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900/40">
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  A. Systemische inflammatie
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Koorts en/of koude rillingen, of bewijs van ontsteking op lab: leukocyten &lt; 4 of &gt; 10 x 10^3/µL, CRP
                  ≥ 10 mg/L
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">B. Cholestase</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Icterus (totaal bilirubine ≥ 34 µmol/L) of afwijkende leverfuncties zoals AF, γGT, ASAT of ALAT &gt;
                  1,5x bovengrens
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">C. Beeldvorming</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Biliaire dilatatie of oorzaak zichtbaar, zoals stricture, steen of stent
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Bij verdenking op cholangitis is er één item uit A plus één item uit B of C nodig. Bij vastgestelde cholangitis
        is er één item uit A, één uit B én één uit C.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Behandeling van cholangitis</h3>
        <p className="mt-4">De behandeling bestaat uit:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>antibiotica;</li>
          <li>en decompressie van de galwegen.</li>
        </ul>
        <p className="mt-4">De decompressie kan gebeuren via:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>ERCP met papillotomie;</li>
          <li>percutane transhepatische drainage;</li>
          <li>of chirurgische galwegdrainage.</li>
        </ul>
        <p className="mt-4">
          Als er een vastzittende steen zichtbaar is, heeft ERCP met steenextractie de voorkeur.
        </p>
      </div>
    </div>
  )
}
