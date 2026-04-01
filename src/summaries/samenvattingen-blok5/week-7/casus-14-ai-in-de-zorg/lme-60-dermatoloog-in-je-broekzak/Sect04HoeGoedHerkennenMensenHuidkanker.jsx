export default function Sect04HoeGoedHerkennenMensenHuidkanker() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe goed herkennen mensen huidkanker?</h2>
      <p>
        De herkenning van huidkanker verschilt sterk per situatie en per beoordelaar. In de stof komen een paar getallen
        steeds terug:
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Herkenning van huidkanker: enkele genoemde prestaties
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Beoordelaar / situatie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Sensitiviteit
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Specificiteit
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Algemene bevolking met ABCDE-methode</td>
              <td className="px-4 py-3 align-top">84%</td>
              <td className="px-4 py-3 align-top">56%</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Huisarts</td>
              <td className="px-4 py-3 align-top">54–72%</td>
              <td className="px-4 py-3 align-top">71–72%</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Dermatoloog op basis van een foto</td>
              <td className="px-4 py-3 align-top">59–100%</td>
              <td className="px-4 py-3 align-top">30–100%</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Dermatoloog met dermatoscoop in de spreekkamer</td>
              <td className="px-4 py-3 align-top">90%</td>
              <td className="px-4 py-3 align-top">90%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Hieruit blijkt dat de prestaties sterk kunnen variëren. De algemene bevolking kan met de ABCDE-methode al redelijk
        goed verdachte plekken herkennen, maar een arts of dermatoloog doet het meestal beter, zeker met aanvullende
        hulpmiddelen zoals een dermatoscoop.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-3">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandachtspunt: wat betekent sensitiviteit eigenlijk?</strong>{' '}
          <strong className="text-primary-900 dark:text-primary-200">Mini-antwoord:</strong> de test vindt 80% van de
          mensen met de ziekte als de sensitiviteit 80% is.
        </p>
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandachtspunt: en wat betekent specificiteit?</strong>{' '}
          <strong className="text-primary-900 dark:text-primary-200">Mini-antwoord:</strong> 80% specificiteit betekent
          dat 80% van de mensen zonder ziekte ook echt een negatieve uitslag krijgt.
        </p>
      </div>
      <p>Dus:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>sensitiviteit zegt iets over het vinden van de ziekte</li>
        <li>specificiteit zegt iets over het juist herkennen van géén ziekte</li>
      </ul>
    </div>
  )
}
