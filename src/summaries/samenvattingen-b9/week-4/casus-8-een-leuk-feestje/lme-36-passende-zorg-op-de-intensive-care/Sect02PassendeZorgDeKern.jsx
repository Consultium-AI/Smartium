export default function Sect02PassendeZorgDeKern() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Passende zorg op de intensive care: de kern</h2>
      <p>
        Op de intensive care worden patiënten opgenomen die zo ernstig ziek zijn dat zij zonder orgaanondersteuning een grote kans hebben om te overlijden. De IC is dus bedoeld voor zeer intensieve behandeling. Die ondersteuning kan uit verschillende vormen bestaan, zoals beademing, medicijnen die de bloeddruk verhogen, dialyse en monitoring van de hersendruk. Omdat patiënten vaak erg ziek zijn, kunnen zij een delier krijgen. Daarom zijn sedativa vaak nodig om iemand rustig genoeg in bed te laten liggen voor de behandeling.
      </p>
      <p>
        Wat de IC bijzonder maakt, is dat hier niet alleen naar één ziekte wordt gekeken, maar naar het geheel van levensbedreigende problemen en de bijbehorende ondersteuning. Dat maakt de zorg zwaarder en intensiever dan op een gewone ziekenhuisafdeling.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Verschillen tussen een gewone ziekenhuisafdeling en de IC</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderdeel</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Gewone ziekenhuisafdeling</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Intensive care</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Monitoring</td>
              <td className="px-4 py-3 align-top">Minder intensief</td>
              <td className="px-4 py-3 align-top">Zeer intensief, met voortdurende bewaking</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Verpleegkundige inzet</td>
              <td className="px-4 py-3 align-top">Minder verpleegkundigen per patiënt</td>
              <td className="px-4 py-3 align-top">Veel meer verpleegkundigen per patiënt</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Orgaanondersteuning</td>
              <td className="px-4 py-3 align-top">Beperkt of afwezig</td>
              <td className="px-4 py-3 align-top">Vaak nodig, bijvoorbeeld beademing, dialyse, circulatie-ondersteuning</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Rust en sedatie</td>
              <td className="px-4 py-3 align-top">Meestal minder nodig</td>
              <td className="px-4 py-3 align-top">Regelmatig nodig door ernst van ziekte en invasieve behandeling</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Doel</td>
              <td className="px-4 py-3 align-top">Behandeling en herstel</td>
              <td className="px-4 py-3 align-top">Behandeling van levensbedreigende aandoeningen en zo nodig herstel mogelijk maken</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <span className="font-semibold">Aandachtsvraagje:</span> Waarom is de IC zo anders dan een gewone afdeling?{' '}
        <br />
        <span className="font-semibold">Mini-antwoord:</span> Omdat patiënten daar vaak meerdere levensbedreigende problemen tegelijk hebben en intensieve orgaanondersteuning nodig is.
      </p>
    </div>
  )
}
