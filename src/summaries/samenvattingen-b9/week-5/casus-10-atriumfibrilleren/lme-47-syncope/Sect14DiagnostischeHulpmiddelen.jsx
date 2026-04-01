export default function Sect14DiagnostischeHulpmiddelen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diagnostische hulpmiddelen</h2>
      <p>Twee diagnostische technieken worden belangrijk gevonden: de kantelproef en de carotissinusmassage.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Diagnostische hulpmiddelen bij syncope</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderzoek</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Indicatie</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Principe</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Positieve test</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Kantelproef (tilt test)</td>
              <td className="px-4 py-3 align-top">
                Sterke verdenking op vasovagale syncope, maar diagnose blijft onzeker na de basisanamnese
              </td>
              <td className="px-4 py-3 align-top">
                De patiënt wordt passief rechtop gekanteld terwijl ECG en bloeddruk worden bewaakt
              </td>
              <td className="px-4 py-3 align-top">
                Ontwikkeling van (pre-)syncope <span className="font-semibold">gelijktijdig</span> met hypotensie en/of bradycardie
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Carotissinusmassage</td>
              <td className="px-4 py-3 align-top">
                Verdenking op carotissinussyndroom, bijvoorbeeld bij syncope na hoofd draaien of strak boord
              </td>
              <td className="px-4 py-3 align-top">Manuele druk op één sinus caroticus terwijl ECG wordt bewaakt</td>
              <td className="px-4 py-3 align-top">Asystolie {'>'} 3 sec en/of systolische bloeddrukdaling {'>'} 50 mmHg</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
