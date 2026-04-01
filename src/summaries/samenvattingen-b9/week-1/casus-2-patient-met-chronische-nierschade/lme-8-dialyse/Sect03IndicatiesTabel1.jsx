export default function Sect03IndicatiesTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Indicaties voor dialyse</h2>
      <p>
        Dialyse kan dus zowel chronisch als acuut nodig zijn. Bij een acute indicatie gaat het vaak om een situatie waarin snel ingrijpen nodig is om ernstige schade of complicaties te voorkomen.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 1. Belangrijke indicaties voor acute start van dialyse</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Indicatie</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis in de praktijk</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Ernstige hyperkaliëmie</td>
              <td className="px-4 py-3">Te hoog kaliumgehalte in het bloed</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">Overvulling met acute dyspnoe</td>
              <td className="px-4 py-3">Te veel vocht met benauwdheid</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Ernstige metabole acidose</td>
              <td className="px-4 py-3">Ernstige verzuring van het bloed</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">Ernstige hyperfosfatemie</td>
              <td className="px-4 py-3">Ernstig verhoogd fosfaat</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Belangrijk is dat tekorten aan elektrolyten geen reden voor dialyse zijn, omdat die meestal eenvoudiger met andere behandelingen gecorrigeerd kunnen worden. Ook bij intoxicaties kan acute dialyse nodig zijn, als het belangrijk is om een toxische stof zo snel mogelijk uit het lichaam te verwijderen. Dat hangt af van de eigenschappen van de stof, zoals eiwitbinding en verdelingsvolume.
      </p>
    </div>
  )
}
