export default function Sect12Tabel4Organen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Beoordeling van de circulatie per orgaan</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Orgaan</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Waar let je op?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold">Hersenen</td>
              <td className="px-4 py-3 align-top">Is iemand helder, geagiteerd of verward?</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold">Longen</td>
              <td className="px-4 py-3 align-top">Is de gaswisseling goed, of moet iemand sneller ademen voor hetzelfde effect?</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold">Hart</td>
              <td className="px-4 py-3 align-top">Zijn er tekenen van zuurstoftekort, zoals pijn op de borst of ECG-veranderingen?</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold">Nieren</td>
              <td className="px-4 py-3 align-top">Is er goede nierfunctie en maakt de patiënt voldoende urine?</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold">Lever</td>
              <td className="px-4 py-3 align-top">Ontstaan er leverfunctiestoornissen?</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold">Darmen</td>
              <td className="px-4 py-3 align-top">Misselijkheid, braken, stille buik of juist forse diarree?</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold">Huid</td>
              <td className="px-4 py-3 align-top">Is de huid bleek, koud of zelfs aan het afsterven?</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Er is veel overlap tussen symptomen van verminderde orgaanfunctie en symptomen van activatie van RAAS en de baroreceptorreflex, zoals <span className="font-semibold">oligurie</span>. Het lichaam probeert namelijk eerst de organen te beschermen die direct levensbepalend zijn: <span className="font-semibold">hart, longen en hersenen</span>. Soms gaat dat ten koste van de <span className="font-semibold">huid, nieren, lever en darmen</span>.
      </p>
    </div>
  )
}
