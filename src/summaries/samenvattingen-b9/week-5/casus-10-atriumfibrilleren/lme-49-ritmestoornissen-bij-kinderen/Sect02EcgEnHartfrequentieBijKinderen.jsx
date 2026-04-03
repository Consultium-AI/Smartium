export default function Sect02EcgEnHartfrequentieBijKinderen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">ECG en hartfrequentie bij kinderen</h2>
      <p>
        Bij kinderen is het belangrijk om de hartfrequentie altijd op het ECG te bepalen. Dat is niet zomaar een detail: de cardiac output van een kind hangt voor een groot deel af van de hartfrequentie, omdat het slagvolume kleiner is dan bij volwassenen. De hartfrequentie verandert bovendien met de leeftijd. Een zuigeling heeft dus een veel snellere hartslag dan een ouder kind of een volwassene.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. ECG-papier en snelle schatting van de hartfrequentie
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderdeel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Groot hokje</td>
              <td className="px-4 py-3 align-top">5 mm breed = 0,20 seconde</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Klein hokje</td>
              <td className="px-4 py-3 align-top">1 mm breed = 0,04 seconde</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Aftelmethode</td>
              <td className="px-4 py-3 align-top">
                Tel van een R-top naar de volgende R-top in grote hokjes en gebruik de reeks 300-150-100-75-60-50-43-37
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De aftelmethode gebruik je vooral bij een normaal sinusritme. Je kiest een willekeurige R-top als startpunt en telt hoeveel grote hokjes er tussen twee opeenvolgende R-toppen zitten. Ligt de volgende R-top precies na 1 groot hokje, dan is de frequentie ongeveer 300/min. Na 2 grote hokjes is dat 150/min, na 3 grote hokjes 100/min, enzovoort.
      </p>
      <p>
        <span className="font-semibold">Aandachtvraag:</span> waarom is de hartfrequentie bij een baby zo belangrijk?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}<em>omdat het slagvolume klein is en de circulatie dus sterk afhangt van de snelheid van het hart.</em>
      </p>
    </div>
  )
}
