export default function Sect06OVanOmvangTabel2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">O van Omvang</h2>
      <p>Bij omvang gaat het om aantal en grootte. Tegenwoordig beschrijf je dit in millimeters en centimeters.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Veelgebruikte maten bij omvang</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Benaming
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Grootte
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">miliair</td>
              <td className="px-4 py-3 align-top">1–2 mm</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">lenticulair</td>
              <td className="px-4 py-3 align-top">3–10 mm</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">nummulair</td>
              <td className="px-4 py-3 align-top">1–3 cm</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">kinderhandpalmgroot</td>
              <td className="px-4 py-3 align-top">3–5 cm</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">handpalmgroot</td>
              <td className="px-4 py-3 align-top">5–10 cm</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Hierbij let je dus op of het om kleine puntvormige laesies gaat of om grotere plekken of plaques.
      </p>
    </div>
  )
}
