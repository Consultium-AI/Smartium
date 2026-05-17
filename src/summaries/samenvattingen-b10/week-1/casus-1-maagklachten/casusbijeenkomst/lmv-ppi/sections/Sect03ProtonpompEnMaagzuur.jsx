export default function Sect03ProtonpompEnMaagzuur() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        De protonpomp en de aanmaak van maagzuur
      </h2>
      <p>
        Om te begrijpen hoe een PPI werkt, is het belangrijk om eerst te weten hoe maagzuur normaal wordt aangemaakt. In de
        maagwand zitten <strong className="text-slate-900 dark:text-slate-100">pariëtaal cellen</strong>. Deze cellen maken
        zuur door middel van de{' '}
        <strong className="text-slate-900 dark:text-slate-100">
          H<sup>+</sup>/K<sup>+</sup>-ATPase
        </strong>
        , ook wel de protonpomp genoemd. Deze pomp verplaatst waterstofionen naar het maaglumen in ruil voor kaliumionen. Zo ontstaat maagzuur.
      </p>
      <p>De zuurproductie wordt gestimuleerd door meerdere prikkels:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">histamine</strong> via de H2-receptor;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">acetylcholine</strong> via de M3-receptor;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">gastrine</strong> via de CCK2-receptor.
        </li>
      </ul>
      <p>
        Deze signalen lopen via verschillende routes, maar komen uiteindelijk allemaal uit bij dezelfde eindstap: de
        protonpomp.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-3">
        <p className="text-slate-800 dark:text-amber-100 m-0">
          <strong className="text-slate-900 dark:text-amber-50">Aandachtsvraag:</strong> Waarom is de protonpomp zo belangrijk?
          <br />
          <strong className="text-slate-900 dark:text-amber-50">Kort antwoord:</strong> Omdat dit de laatste stap is in de aanmaak van maagzuur. Als je deze pomp blokkeert, rem je de zuurproductie dus heel effectief.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 2. Prikkels van de pariëtale cel en aangrijpingspunt van de PPI
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Prikkel
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Receptor
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Signaalroute
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Effect
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Histamine</td>
                <td className="px-4 py-3 align-top">H2-receptor</td>
                <td className="px-4 py-3 align-top">cAMP-afhankelijk</td>
                <td className="px-4 py-3 align-top">Stimuleert zuurproductie</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Acetylcholine</td>
                <td className="px-4 py-3 align-top">M3-receptor</td>
                <td className="px-4 py-3 align-top">Ca2+-afhankelijk</td>
                <td className="px-4 py-3 align-top">Stimuleert zuurproductie</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Gastrine</td>
                <td className="px-4 py-3 align-top">CCK2-receptor</td>
                <td className="px-4 py-3 align-top">Ca2+-afhankelijk</td>
                <td className="px-4 py-3 align-top">Stimuleert zuurproductie</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Protonpompremmer</td>
                <td className="px-4 py-3 align-top">
                  H<sup>+</sup>/K<sup>+</sup>-ATPase
                </td>
                <td className="px-4 py-3 align-top">Eindstap</td>
                <td className="px-4 py-3 align-top">Blokkeert zuursecretie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        De PPI grijpt dus niet aan op één van de prikkelroutes bovenin, maar op de{' '}
        <strong className="text-slate-900 dark:text-slate-100">laatste gemeenschappelijke stap</strong>. Daardoor wordt de
        maagzuurproductie krachtig onderdrukt.
      </p>
    </div>
  )
}
