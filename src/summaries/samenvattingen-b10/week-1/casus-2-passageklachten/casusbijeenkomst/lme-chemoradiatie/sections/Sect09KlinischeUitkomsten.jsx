export default function Sect09KlinischeUitkomsten() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Klinische uitkomsten van dCRT</h2>
      <p>
        In een retrospectieve analyse van patiënten die dCRT kregen, werden verschillende indicaties voor behandeling
        meegenomen, zoals:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          een <strong className="text-slate-900 dark:text-slate-100">cervicale tumor</strong>,
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">T4b-tumor of irresectabele lymfekliermetastasen</strong>
          ,
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">onfit voor chirurgie</strong>,
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">voorkeur van patiënt en/of arts</strong>.
        </li>
      </ul>
      <p>
        Van de geïncludeerde patiënten voltooide ongeveer{' '}
        <strong className="text-slate-900 dark:text-slate-100">73,9%</strong> het volledige dCRT-schema. De mortaliteit
        was <strong className="text-slate-900 dark:text-slate-100">2,5% na 30 dagen</strong> en{' '}
        <strong className="text-slate-900 dark:text-slate-100">8,3% na 90 dagen</strong>. De mediane overleving voor alle
        patiënten was <strong className="text-slate-900 dark:text-slate-100">22,9 maanden</strong>, met een{' '}
        <strong className="text-slate-900 dark:text-slate-100">5-jaars overleving van 31,4%</strong>.
      </p>
      <p>
        De uitkomsten verschilden per indicatie. Vooral patiënten met{' '}
        <strong className="text-slate-900 dark:text-slate-100">irresectabele ziekte</strong> hadden een slechtere prognose.
        Dat laat zien dat de reden waarom iemand dCRT krijgt, belangrijk is voor de uitkomst.
      </p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 7. Belangrijke uitkomsten bij dCRT
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Uitkomst
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Resultaat
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Voltooien volledig schema</td>
                <td className="px-4 py-3 align-top">73,9%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">30-dagenmortaliteit</td>
                <td className="px-4 py-3 align-top">2,5%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">90-dagenmortaliteit</td>
                <td className="px-4 py-3 align-top">8,3%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Mediane OS totaal</td>
                <td className="px-4 py-3 align-top">22,9 maanden</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">5-jaars OS totaal</td>
                <td className="px-4 py-3 align-top">31,4%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Slechtste prognose</td>
                <td className="px-4 py-3 align-top">Irresectabele ziekte</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 8. 5-jaars overleving per indicatie
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Indicatie
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  5-jaars OS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Cervicale tumor</td>
                <td className="px-4 py-3 align-top">36,7%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">T4b-tumor / irresectabele LNM</td>
                <td className="px-4 py-3 align-top">12,7%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Onfit voor chirurgie</td>
                <td className="px-4 py-3 align-top">33,6%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Voorkeur van patiënt en/of arts</td>
                <td className="px-4 py-3 align-top">33,9%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        De belangrijkste boodschap is dat er{' '}
        <strong className="text-slate-900 dark:text-slate-100">meerdere redenen zijn om voor dCRT te kiezen</strong>, en
        dat deze behandeling daadwerkelijk invloed heeft op de uitkomsten. De resultaten passen redelijk bij een curatieve
        benadering zoals nCRT gevolgd door operatie. Tegelijkertijd gaat dCRT gepaard met de nodige bijwerkingen en kan niet
        iedereen de behandeling volledig afronden.
      </p>
    </div>
  )
}
