export default function Sect07VanMgusNaarMultipelMyeloom() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Van MGUS naar multipel myeloom</h2>
      <p>
        Niet elke plasmacelafwijking is meteen actief multipel myeloom. Er is een overgang van een asymptomatische fase
        naar een symptomatische fase.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 4. Ontwikkeling van MGUS naar multipel myeloom
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Stadium
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerken
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">MGUS</td>
              <td className="px-4 py-3 align-top">
                beenmergplasmacellen {'<'}10%, M-proteïne {'<'}30 g/L, geen MDE
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">SMM</td>
              <td className="px-4 py-3 align-top">
                beenmergplasmacellen ≥10% en/of M-proteïne ≥30 g/L, maar nog geen MDE
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">MM</td>
              <td className="px-4 py-3 align-top">aanwezigheid van M-proteïne, plasmacellen in beenmerg en ROTI/CRAB</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        MGUS betekent monoclonale gammopathie van onzekere betekenis. Dit is een asymptomatische toestand. Daarna kan
        smouldering myeloom ontstaan, ook wel SMM genoemd. Pas bij multipel myeloom is er sprake van duidelijke ziekte
        met schade of myeloma defining events.
      </p>
    </div>
  )
}
