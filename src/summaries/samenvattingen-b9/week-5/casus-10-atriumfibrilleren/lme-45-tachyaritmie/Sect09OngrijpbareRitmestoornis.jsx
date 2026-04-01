export default function Sect09OngrijpbareRitmestoornis() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De ongrijpbare ritmestoornis</h2>
      <p>Paroxysmale ritmestoornissen zie je vaak niet op een momentopname. Daarom gebruik je aanvullende diagnostiek om het ritme later te “vangen”.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Hulpmiddelen bij ritmediagnostiek</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderzoek</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Wanneer zinvol?</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Opmerking</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">**Holter (24–48 uur)**</td>
              <td className="px-4 py-3 align-top">Bij dagelijkse klachten</td>
              <td className="px-4 py-3 align-top">Continu registratie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">**Event recorder**</td>
              <td className="px-4 py-3 align-top">Bij wekelijkse of maandelijkse klachten</td>
              <td className="px-4 py-3 align-top">Patiënt activeert zelf tijdens klachten</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">**Implantable loop recorder (ILR)**</td>
              <td className="px-4 py-3 align-top">Bij zeer zeldzame klachten, zoals 1× per jaar syncope</td>
              <td className="px-4 py-3 align-top">Onderhuids apparaatje</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">**Inspanningstest**</td>
              <td className="px-4 py-3 align-top">Bij inspanningsgebonden klachten</td>
              <td className="px-4 py-3 align-top">Vooral als klachten tijdens inspanning ontstaan</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">**Smartwatches/wearables**</td>
              <td className="px-4 py-3 align-top">Voor dagelijkse klachten en korte aanvallen</td>
              <td className="px-4 py-3 align-top">Nuttig voor documentatie, maar geen 12-afleidingen-ECG</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Wearables, zoals horloges, meten vaak de pols optisch en kunnen soms een <span className="font-semibold">1-afleiding ECG</span> maken. Dat is handig om een aanval te documenteren, maar het blijft geen volledig 12-afleidingen-ECG.
      </p>
    </div>
  )
}
