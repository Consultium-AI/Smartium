export default function Sect11AntiAritmicaVaughanWilliams() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Anti-aritmica volgens Vaughan Williams</h2>
      <p>Anti-aritmica worden ingedeeld op basis van hun effect op het actiepotentiaal van hartspiercellen.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Vaughan Williams-classificatie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Klasse</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Werkingspunt</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Voorbeelden</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">**Klasse I**</td>
              <td className="px-4 py-3 align-top">Natriumkanaalblokkers</td>
              <td className="px-4 py-3 align-top">Flecaïnide, lidocaïne</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">**Klasse II**</td>
              <td className="px-4 py-3 align-top">Beta-blokkers</td>
              <td className="px-4 py-3 align-top">Metoprolol, bisoprolol, atenolol</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">**Klasse III**</td>
              <td className="px-4 py-3 align-top">Kaliumkanaalblokkers</td>
              <td className="px-4 py-3 align-top">Sotalol, amiodaron</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">**Klasse IV**</td>
              <td className="px-4 py-3 align-top">Calciumkanaalblokkers</td>
              <td className="px-4 py-3 align-top">Verapamil, diltiazem</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">**Klasse V**</td>
              <td className="px-4 py-3 align-top">Overig</td>
              <td className="px-4 py-3 align-top">Digoxine, adenosine</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
