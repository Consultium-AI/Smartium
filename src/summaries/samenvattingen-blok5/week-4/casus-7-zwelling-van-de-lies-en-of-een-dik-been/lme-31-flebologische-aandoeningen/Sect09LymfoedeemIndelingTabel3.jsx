export default function Sect09LymfoedeemIndelingTabel3() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Indeling van lymfoedeem</h2>
      <p>Lymfoedeem wordt onderverdeeld in primaire en secundaire vormen.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Indeling van lymfoedeem</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Primair lymfoedeem</td>
              <td className="px-4 py-3 align-top">
                Turner-syndroom, Noonan-syndroom, Milroy, distichiasis-syndroom, cysteuze lymfatische malformatie
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Secundair door lymfatische obstructie
              </td>
              <td className="px-4 py-3 align-top">
                Maligne infiltratie, postinfectieus, na bestraling of lymfeklierdissectie, podoconiosis, strangulatie
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Secundair door lymfatische overload/combinaties
              </td>
              <td className="px-4 py-3 align-top">
                Bij inflammatie, obesitas-geïnduceerd lymfoedeem, lipolymfoedeem, lump-oedeem
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Ook obesitas is belangrijk: bij morbide obesitas komt lymfoedeem van de benen vaak voor.</p>
    </div>
  )
}
