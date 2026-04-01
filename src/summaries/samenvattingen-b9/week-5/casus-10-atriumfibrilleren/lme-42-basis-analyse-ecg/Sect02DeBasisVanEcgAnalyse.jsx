export default function Sect02DeBasisVanEcgAnalyse() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De basis van ECG-analyse</h2>
      <p>
        Een ECG lees je het beste stap voor stap. Het idee is dat je niet zomaar naar losse pieken kijkt, maar steeds eerst bedenkt wat je bekijkt, vanuit welke richting en wat dat betekent voor de elektrische stroom in het hart. Zo wordt het ECG een logisch verhaal.
      </p>
      <p>
        De eerste vuistregel is simpel: een ECG meet spanningverschillen. Hoe meer elektrische activiteit en hoe meer spiermassa, hoe groter de uitslag. Dood weefsel geeft geen elektrische activiteit en kan daardoor juist een negatieve uitslag geven, bijvoorbeeld een Q-golf.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Praktische basisinstellingen en normale waarden</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderdeel</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Normaal / standaard</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Papiersnelheid</td>
              <td className="px-4 py-3 align-top"><span className="font-semibold">25 mm/s</span></td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">IJking</td>
              <td className="px-4 py-3 align-top"><span className="font-semibold">10 mm/mV</span></td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">1 klein hokje</td>
              <td className="px-4 py-3 align-top"><span className="font-semibold">0,04 s</span></td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">1 groot hokje</td>
              <td className="px-4 py-3 align-top"><span className="font-semibold">0,20 s</span></td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Normale hartfrequentie</td>
              <td className="px-4 py-3 align-top"><span className="font-semibold">60–100/min</span></td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">PQ-interval</td>
              <td className="px-4 py-3 align-top"><span className="font-semibold">120–200 ms</span></td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">QRS-duur</td>
              <td className="px-4 py-3 align-top"><span className="font-semibold">{'<'} 120 ms</span></td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">QT-tijd</td>
              <td className="px-4 py-3 align-top">
                <span className="font-semibold">{'<'} 450 ms (mannen)</span>
                {' '}/{' '}
                <span className="font-semibold">{'<'} 460 ms (vrouwen)</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <span className="font-semibold">Aandacht-vraagje:</span> waarom is die ijking belangrijk?{' '}
        <br />
        <span className="font-semibold">Mini-antwoord:</span> omdat een verkeerde instelling de hoogte van het ECG kan laten lijken alsof signalen klein of groot zijn, terwijl dat technisch komt.
      </p>
    </div>
  )
}
