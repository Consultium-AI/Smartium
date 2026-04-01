export default function Sect04NefrotischVsNefritisch() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Nefrotisch versus nefritisch syndroom</h2>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 1. Nefrotisch versus nefritisch syndroom</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerk</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Nefrotisch syndroom</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Nefritisch syndroom</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Hoofdmechanisme</td>
              <td className="px-4 py-3">Podocytschade met lekkage van eiwit</td>
              <td className="px-4 py-3">Ontstekingsschade van glomerulus/GBM</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-medium">Urine</td>
              <td className="px-4 py-3">Forse proteïnurie</td>
              <td className="px-4 py-3">Hematurie, dysmorfe erytrocyten, erytrocytencilinders</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Nierfunctie</td>
              <td className="px-4 py-3">Vaak behouden, soms gestoord</td>
              <td className="px-4 py-3">Bijna altijd gestoord, soms snel ernstig</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-medium">Kliniek</td>
              <td className="px-4 py-3">Oedeem, hypoalbuminemie, hypercholesterolemie, vaak hypertensie</td>
              <td className="px-4 py-3">Hematurie, snelle functiedaling, vaak hypertensie, soms oligurie/anurie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Belang</td>
              <td className="px-4 py-3">Risico op nierfalen, infecties en trombosen</td>
              <td className="px-4 py-3">Spoed: snelle diagnose en behandeling zijn cruciaal</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Het nefrotisch en nefritisch syndroom zijn dus twee uitersten van hetzelfde spectrum. Het ene beeld draait vooral om eiwitverlies, het andere vooral om ontsteking en hematurie.
      </p>
    </div>
  )
}
