export default function Sect12Tabel3Risicofactoren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tabel 3. Risicofactoren voor longcarcinoom</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Risicofactor</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Samenhang</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Roken</td>
              <td className="px-4 py-3 align-top">Voor alle vormen, vooral plaveiselcelcarcinoom en kleincellig carcinoom</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Asbest</td>
              <td className="px-4 py-3 align-top">Geassocieerd met diverse typen longcarcinoom, vooral in combinatie met roken</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Ioniserende straling</td>
              <td className="px-4 py-3 align-top">Bijvoorbeeld radon in huizen of blootstelling in mijnen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Zware metalen</td>
              <td className="px-4 py-3 align-top">Chroom, arsenicum, nikkel, uranium</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
