export default function Sect02HetElektrischeNetwerk() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Het elektrische netwerk van het hart</h2>
      <p>
        Het hart heeft een eigen elektrisch geleidingssysteem dat ervoor zorgt dat de boezems en kamers in de juiste volgorde samenknijpen. De belangrijkste onderdelen zijn de sinusknoop, de AV-knoop, de bundel van His en de bundeltakken met Purkinjevezels.
      </p>
      <p>
        De <span className="font-semibold">sinusknoop</span> is de natuurlijke pacemaker van het hart. Hij ligt hoog in het rechteratrium, vlak bij de inmonding van de vena cava superior. De sinusknoop vuurt spontaan impulsen af door diastolische depolarisatie. In rust ligt de normale frequentie rond de{' '}
        <span className="font-semibold">60-100 slagen per minuut</span>.
      </p>
      <p>
        De <span className="font-semibold">AV-knoop</span> ligt in het septum, vlak boven de ventrikels. Hij werkt als een poortwachter: hij vertraagt de elektrische prikkel. Daardoor krijgen de atria tijd om samen te trekken en de ventrikels goed te vullen. Op het ECG zie je dit terug als het{' '}
        <span className="font-semibold">PR-interval</span>.
      </p>
      <p>
        De <span className="font-semibold">bundel van His</span> is de enige elektrische snelweg door de isolerende laag tussen atria en ventrikels, de{' '}
        <span className="font-semibold">annulus fibrosus</span>. Daarna splitst de prikkel in een rechter- en linkerbundeltak en verspreidt zich via de Purkinjevezels razendsnel door de kamers. Dat zorgt voor een gelijktijdige en krachtige contractie.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Onderdelen van het geleidingssysteem</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600 whitespace-nowrap">Onderdeel</th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600 whitespace-nowrap">Locatie</th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600 whitespace-nowrap">Functie</th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600 whitespace-nowrap">Intrinsieke frequentie</th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600 whitespace-nowrap">ECG-kenmerk</th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600 whitespace-nowrap">Betrouwbaarheid als escape ritme</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">SA-knoop</td>
              <td className="px-3 py-3 align-top">Hoog in rechteratrium</td>
              <td className="px-3 py-3 align-top">Natuurlijke pacemaker</td>
              <td className="px-3 py-3 align-top">60-100 bpm</td>
              <td className="px-3 py-3 align-top">P-top voor elk QRS</td>
              <td className="px-3 py-3 align-top">Hoog</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">AV-knoop / His</td>
              <td className="px-3 py-3 align-top">Septum boven ventrikels</td>
              <td className="px-3 py-3 align-top">Vertraagt impuls</td>
              <td className="px-3 py-3 align-top">40-60 bpm</td>
              <td className="px-3 py-3 align-top">Smal QRS ({'<'}0,12 s)</td>
              <td className="px-3 py-3 align-top">Redelijk betrouwbaar</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">Ventrikel / Purkinje</td>
              <td className="px-3 py-3 align-top">Lage geleiding in kamers</td>
              <td className="px-3 py-3 align-top">Kameractivatie</td>
              <td className="px-3 py-3 align-top">15-40 bpm</td>
              <td className="px-3 py-3 align-top">Breed QRS ({'>'}0,12 s)</td>
              <td className="px-3 py-3 align-top">Onbetrouwbaar, risico op asystolie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <span className="font-semibold">Aandacht-vraag:</span> Waarom is de AV-knoop zo belangrijk?{' '}
        <br />
        <span className="font-semibold">Mini-antwoord:</span> Omdat hij de prikkel even vertraagt, zodat de kamers pas vullen nadat de boezems hebben meegepompt.
      </p>
    </div>
  )
}
