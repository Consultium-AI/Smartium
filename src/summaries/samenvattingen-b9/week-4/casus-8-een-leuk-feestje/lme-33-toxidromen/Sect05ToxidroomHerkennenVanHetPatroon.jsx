export default function Sect05ToxidroomHerkennenVanHetPatroon() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">4. Toxidroom: herkennen van het patroon</h2>
      <p>
        Een <span className="font-semibold">toxidroom</span> is een <span className="font-semibold">verzameling van symptomen die passen bij een bepaalde intoxicatie</span>. Het woord helpt je dus om op basis van het klachtenpatroon te denken aan een bepaald middel of een bepaalde groep middelen.
      </p>
      <p>Je kijkt daarbij onder andere naar:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><span className="font-semibold">pupilgrootte</span>;</li>
        <li><span className="font-semibold">temperatuur</span>;</li>
        <li><span className="font-semibold">darmgeluiden</span>;</li>
        <li>en in bredere zin ook naar hartslag, bloeddruk, huid, ademhaling en bewustzijn.</li>
      </ul>
      <p>
        Op basis van deze combinatie van symptomen kun je vaak al een eerste onderscheid maken. Dat is handig, omdat je dan sneller kunt bedenken welke groep middelen erbij past.
      </p>
      <p>
        Er wordt bij intoxicaties met drugs vaak grofweg gekeken naar <span className="font-semibold">uppers</span> en <span className="font-semibold">downers</span>:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>bij een <span className="font-semibold">upper</span> is de patiënt vaak erg druk of geagiteerd;</li>
        <li>bij een <span className="font-semibold">downer</span> is de patiënt juist vaak versuft.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Globale kenmerken van toxidromen</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Toxidroomgroep</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Typische richting van klachten</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Cholinerg</td>
              <td className="px-4 py-3 align-top">Vaak pupilvernauwing en hyperactieve darmgeluiden</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Opiaten</td>
              <td className="px-4 py-3 align-top">Vaak pupilvernauwing en hypoactieve darmgeluiden</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Sympathicomimetica</td>
              <td className="px-4 py-3 align-top">Vaak verwijde pupillen, hoge temperatuur en hyperactieve darmgeluiden</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Anticholinergica</td>
              <td className="px-4 py-3 align-top">Vaak verwijde pupillen, hoge temperatuur en hypoactieve darmgeluiden</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Hallucinogenen</td>
              <td className="px-4 py-3 align-top">Vaak verwijde pupillen en normaal/lage temperatuur met hyperactieve darmgeluiden</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Sedatief-hypnotisch</td>
              <td className="px-4 py-3 align-top">Vaak normale of verwijde pupillen en normaal/lage temperatuur met hypoactieve darmgeluiden</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 text-sm text-amber-900 dark:text-amber-100 space-y-2">
        <p className="m-0">
          <span className="font-semibold">Aandachtsvraag:</span>
          {' '}
          waarom is een toxidroom nuttig?
        </p>
        <p className="m-0">
          <span className="font-semibold">Mini-antwoord:</span>
          {' '}
          omdat je met een combinatie van symptomen sneller kunt herkennen <span className="font-semibold">welke groep middelen</span> waarschijnlijk is ingenomen.
        </p>
      </div>
    </div>
  )
}
