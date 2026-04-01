export default function Sect08NefrotoxiciteitTabel3() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Nefrotoxiciteit van tacrolimus</h2>
      <p>
        Tacrolimus is effectief, maar kan ook nefrotoxisch zijn. Dat is extra belangrijk bij niertransplantatie, omdat het nieuwe orgaan juist beschermd moet worden. De toxiciteit wordt verdeeld in een acute en een chronische vorm.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 3. Acute en chronische nefrotoxiciteit van tacrolimus</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Acute nefrotoxiciteit</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Chronische nefrotoxiciteit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3">Tubulaire dysfunctie</td>
              <td className="px-4 py-3">Arteriolaire hyalinose</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3">Vasoconstrictie van de afferente arteriole in het glomerulus</td>
              <td className="px-4 py-3">Glomerulosclerose</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3">Endotheeldysfunctie</td>
              <td className="px-4 py-3">Tubulaire atrofie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3" />
              <td className="px-4 py-3">Interstitiële fibrose</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De acute effecten hangen vooral samen met vasoconstrictie, waardoor de doorbloeding en de filtratie afnemen. De chronische schade geeft juist structurele veranderingen in het nierweefsel, zoals schade aan arteriolen, glomeruli, tubuli en het interstitium. Tacrolimus en ciclosporine zijn beide nefrotoxisch.
      </p>
    </div>
  )
}
