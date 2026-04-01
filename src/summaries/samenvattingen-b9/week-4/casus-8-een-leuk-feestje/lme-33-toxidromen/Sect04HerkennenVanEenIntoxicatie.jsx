export default function Sect04HerkennenVanEenIntoxicatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">3. Herkennen van een intoxicatie</h2>
      <p>
        Een intoxicatie herkennen op de spoedeisende hulp kan lastig zijn. Soms vertelt de patiënt zelf nog wat er is gebeurd, soms is er informatie van omstanders, maar soms komt iemand verward binnen of is de patiënt zelfs bewusteloos. Dan moet je dus vooral letten op wat je <span className="font-semibold">ziet, hoort en meet</span>.
      </p>
      <p>
        De eerste opvang gebeurt volgens de <span className="font-semibold">ABCDE-methode</span>. Die methode gebruik je om snel overzicht te krijgen en direct gevaarlijke problemen aan te pakken. Daarbij let je onder andere op:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><span className="font-semibold">A</span>irway: luchtweg</li>
        <li><span className="font-semibold">B</span>reathing: ademhaling</li>
        <li><span className="font-semibold">C</span>irculation: circulatie</li>
        <li><span className="font-semibold">D</span>isability: bewustzijn en neurologische toestand</li>
        <li><span className="font-semibold">E</span>xposure/environment: verdere lichamelijke afwijkingen en temperatuur</li>
      </ul>
      <p>
        Het idee is dat je op een gestructureerde manier snel ziet of er direct levensbedreigende afwijkingen zijn, zoals een veranderde ademhaling, een afwijkende hartslag of een afwijkende temperatuur.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Waar let je op bij de eerste beoordeling?</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderdeel</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Waar let je op?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Luchtweg</td>
              <td className="px-4 py-3 align-top">Is de luchtweg vrij? Zit er iets in de mond?</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Ademhaling</td>
              <td className="px-4 py-3 align-top">Is de ademhaling hoorbaar, zichtbaar en voelbaar?</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Circulatie</td>
              <td className="px-4 py-3 align-top">Hartslag, bloeddruk, tekenen van slechte doorbloeding</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Bewustzijn</td>
              <td className="px-4 py-3 align-top">Reageert de patiënt nog, is er verwardheid of bewusteloosheid?</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Temperatuur en lichaam</td>
              <td className="px-4 py-3 align-top">Is de temperatuur afwijkend, zijn er andere opvallende lichamelijke tekenen?</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij een intoxicatie kunnen verschijnselen aan meerdere orgaansystemen tegelijk optreden. Daarom helpt een gestructureerde beoordeling zo goed: je kijkt niet alleen naar één klacht, maar naar het <span className="font-semibold">geheel van symptomen</span>.
      </p>
    </div>
  )
}
