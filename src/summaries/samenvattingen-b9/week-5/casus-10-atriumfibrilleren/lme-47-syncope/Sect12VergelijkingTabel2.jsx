export default function Sect12VergelijkingTabel2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Vasovagaal versus Stokes-Adams</h2>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Vergelijking van vasovagale syncope en Stokes-Adams-aanval</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerk</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Vasovagale syncope</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Stokes-Adams-aanval</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Oorzaak</td>
              <td className="px-4 py-3 align-top">Paradoxale reflex</td>
              <td className="px-4 py-3 align-top">Falende hartgeleiding</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Prodromen</td>
              <td className="px-4 py-3 align-top">Ja: misselijkheid, zweten, duizeligheid</td>
              <td className="px-4 py-3 align-top">Nee, zeer plotseling</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Pols tijdens aanval</td>
              <td className="px-4 py-3 align-top">Vaak traag, maar nog voelbaar</td>
              <td className="px-4 py-3 align-top">Extreem traag of afwezig</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Kleur tijdens aanval</td>
              <td className="px-4 py-3 align-top">Vaak bleek en klam</td>
              <td className="px-4 py-3 align-top">Lijkbleek</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Herstel</td>
              <td className="px-4 py-3 align-top">Snel en volledig</td>
              <td className="px-4 py-3 align-top">Snel, met kenmerkende flush</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een handig inzicht is dat vasovagale syncope meer lijkt op een “softwarefout”: het systeem reageert verkeerd. Stokes-Adams lijkt meer op een “hardwarefout”: de elektrische geleiding valt plotseling uit.
      </p>
    </div>
  )
}
