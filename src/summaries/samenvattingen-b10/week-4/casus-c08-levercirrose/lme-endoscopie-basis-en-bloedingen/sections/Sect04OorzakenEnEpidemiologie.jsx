export default function Sect04OorzakenEnEpidemiologie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Oorzaken en epidemiologie</h2>
      <p>
        De oorzaken van hoge en lage GI-bloedingen verschillen van elkaar. Dat is klinisch belangrijk, omdat diagnostiek
        en behandeling daardoor anders zijn.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Hoge tractus digestivusbloeding</h3>
      <p>De belangrijkste oorzaken zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Ulcus pepticum van ventrikel of duodenum; dit is de meest voorkomende oorzaak en verklaart ongeveer 50% van de
          hoge bloedingen.
        </li>
        <li>Inflammatie, zoals oesofagitis, gastritis, duodenitis of erosieve gastroduodenitis.</li>
        <li>Varices, zoals slokdarmvarices of maagvarices bij levercirrose en portale hypertensie.</li>
        <li>Angiodysplasie en andere vaatafwijkingen.</li>
        <li>Maligniteit, zoals oesofaguscarcinoom, maagcarcinoom of duodenumtumoren.</li>
        <li>Mechanische mucosale schade, zoals een Mallory-Weiss-laesie na braken.</li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Lage tractus digestivusbloeding</h3>
      <p>De belangrijkste oorzaken zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Divertikelbloeding;</li>
        <li>Angiodysplasieën;</li>
        <li>Colitis, waaronder infectieuze, inflammatoire of ischemische colitis;</li>
        <li>Proctitis;</li>
        <li>Poliepen en colorectaal carcinoom;</li>
        <li>Hemorroïden;</li>
        <li>Anale fissuur;</li>
        <li>bloedingen na poliepectomie.</li>
      </ul>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 3. Veelvoorkomende oorzaken met globale frequentie
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Oorzaakgroep
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
                <td className="px-4 py-3 align-top">Peptisch ulcus ventriculi of duodeni, ±50%</td>
                <td className="px-4 py-3 align-top">Ulceraties bij ischemische colitis of inflammatoire darmziekte, 5–10%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Inflammatie</td>
                <td className="px-4 py-3 align-top">Oesofagitis, gastritis, duodenitis, erosieve gastroduodenitis, 10–15%</td>
                <td className="px-4 py-3 align-top">Colitis/proctitis, 10–20%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Varices</td>
                <td className="px-4 py-3 align-top">Oesofagus- en maagvarices, 10–20%</td>
                <td className="px-4 py-3 align-top">
                  Rectale varices, zelden, {'<'}1%
                </td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Vaatafwijkingen</td>
                <td className="px-4 py-3 align-top">Angiodysplasie, Dieulafoy-laesie, GAVE, 5–10%</td>
                <td className="px-4 py-3 align-top">Angiodysplasie, divertikelbloeding, 30–40%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Maligniteit</td>
                <td className="px-4 py-3 align-top">Oesofagus-, maag- en duodenumtumoren, 2–5%</td>
                <td className="px-4 py-3 align-top">Colorectaal carcinoom en poliepen, 5–10%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Mechanische schade</td>
                <td className="px-4 py-3 align-top">Mallory-Weiss-laesie, 5–10%</td>
                <td className="px-4 py-3 align-top">Anale fissuur, 5%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Overig</td>
                <td className="px-4 py-3 align-top">Hemobilie, hemosuccus pancreaticus</td>
                <td className="px-4 py-3 align-top">Post-polypectomie-bloeding, hemorroïden, 5–15%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        De incidentie van een acute hoge tractus digestivusbloeding in Nederland is ongeveer 48–62 per 100.000 volwassenen
        per jaar. De incidentie neemt toe met de leeftijd. Personen ouder dan 75 jaar hebben ongeveer zesmaal zoveel
        risico als jongere patiënten.
      </p>

      <p>Bij lage tractus bloedingen komen ernstige bloedingen vooral voor bij:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          leeftijd {'>'} 60 jaar;
        </li>
        <li>comorbiditeit;</li>
        <li>persisterend bloedverlies;</li>
        <li>anemie of verhoogd creatinine.</li>
      </ul>

      <p>
        Bij hoge bloedingen is de prognose belangrijk: recidiefbloeding en mortaliteit komen nog steeds voor, vooral bij
        gehospitaliseerde patiënten met comorbiditeit.
      </p>
    </div>
  )
}
