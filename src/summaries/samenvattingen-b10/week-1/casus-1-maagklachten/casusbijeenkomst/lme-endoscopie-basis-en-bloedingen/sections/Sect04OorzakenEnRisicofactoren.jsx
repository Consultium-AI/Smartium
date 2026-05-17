export default function Sect04OorzakenEnRisicofactoren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Oorzaken en risicofactoren</h2>
      <p>
        De oorzaken verschillen tussen hoge en lage bloedingen. Het onderstaande overzicht helpt om de meest
        waarschijnlijke oorzaak te koppelen aan de kliniek.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 2. Belangrijkste oorzaken en risicofactoren
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Categorie
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
                <td className="px-4 py-3 align-top">Ulcera</td>
                <td className="px-4 py-3 align-top">
                  Peptisch ulcus ventriculi of duodeni; meest voorkomende oorzaak, ongeveer 50% van hoge bloedingen
                </td>
                <td className="px-4 py-3 align-top">
                  Ulceraties bij ischemische colitis of inflammatoire darmziekte, 5–10%
                </td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Inflammatie</td>
                <td className="px-4 py-3 align-top">
                  Oesofagitis, gastritis, duodenitis, erosieve gastroduodenitis, 10–15%
                </td>
                <td className="px-4 py-3 align-top">
                  Colitis (infectieus, inflammatoir, ischemisch), proctitis, 10–20%
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Varices</td>
                <td className="px-4 py-3 align-top">
                  Oesofagusvarices, maagvarices bij levercirrose en portale hypertensie, 10–20%
                </td>
                <td className="px-4 py-3 align-top">
                  Zelden relevant; soms rectale varices bij portale hypertensie, &lt;1%
                </td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Vaatafwijkingen</td>
                <td className="px-4 py-3 align-top">Angiodysplasie, Dieulafoy-laesie, GAVE, 5–10%</td>
                <td className="px-4 py-3 align-top">Angiodysplasie van colon, divertikelbloeding, 30–40%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Maligniteit</td>
                <td className="px-4 py-3 align-top">Oesofaguscarcinoom, maagcarcinoom, duodenumtumoren, 2–5%</td>
                <td className="px-4 py-3 align-top">Colorectaal carcinoom, poliepen, 5–10%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Mechanische mucosale schade</td>
                <td className="px-4 py-3 align-top">Mallory-Weiss-laesie, 5–10%</td>
                <td className="px-4 py-3 align-top">Anale fissuur, 5%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Overig</td>
                <td className="px-4 py-3 align-top">Haemobilie, hemosuccus pancreaticus</td>
                <td className="px-4 py-3 align-top">Post-polypectomie-bloeding, hemorroïden, 5–15%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Belangrijkste risicofactoren</h3>
        <p className="mt-4">Voor een hoge bloeding zijn belangrijke risicofactoren:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <strong className="text-slate-900 dark:text-slate-100">NSAID- of aspirinegebruik</strong>: beschadigt het
            maagslijmvlies en kan ulcusvorming geven;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">antistolling</strong> zoals DOAC&apos;s, coumarines en
            clopidogrel: verhoogt het bloedingsrisico bij bestaande laesies;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">levercirrose / portale hypertensie</strong>: bevordert
            vorming van slokdarm- en maagvarices;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">voorgeschiedenis van ulcuslijden</strong>: geeft meer
            kans op recidiefbloeding;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">overmatig alcoholgebruik</strong>: kan gastritis geven
            en het risico op varices verhogen.
          </li>
        </ul>
        <p className="mt-6">Voor een lage bloeding zijn belangrijke risicofactoren:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <strong className="text-slate-900 dark:text-slate-100">hoge leeftijd</strong>;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">diverticulose in de voorgeschiedenis</strong>;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">angiodysplasie</strong>;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">antistollingsgebruik / plaatjesremmers</strong>;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">comorbiditeit</strong>, bijvoorbeeld nierfalen of
            cardiovasculaire ziekte.
          </li>
        </ul>
      </div>
    </div>
  )
}
