export default function Sect03MigratieEnRijping() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Migratie van prothymocyten en rijping van T-cellen
      </h2>
      <p>
        Prothymocyten komen de thymus binnen via bloedvaten in het corticomedullaire gebied. Vanaf daar
        bewegen ze door de cortex naar het gebied direct onder het kapsel, dus naar de subcapsulaire cortex.
        Daarna migreren ze weer terug richting de medulla. Tijdens deze route door de thymus rijpen ze stap
        voor stap uit tot volwassen T-lymfocyten.
      </p>
      <p>
        Een belangrijke ontwikkeling onderweg is dat de T-celreceptorgenen worden herschikt, zodat de cel
        een functionele TCR kan gaan expressen. Daarna volgen selectieprocessen die bepalen welke cellen
        mogen doorontwikkelen en welke niet.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Belangrijke thymocytenpopulaties en hun locatie
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Populatie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                CD4/CD8-profiel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Locatie in de thymus
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Dubbelnegatieve thymocyt
              </td>
              <td className="px-4 py-3 align-top">CD4- CD8-</td>
              <td className="px-4 py-3 align-top">Subcapsulaire cortex</td>
              <td className="px-4 py-3 align-top">Meest onrijp</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Dubbelpositieve thymocyt
              </td>
              <td className="px-4 py-3 align-top">CD4+ CD8+</td>
              <td className="px-4 py-3 align-top">Cortex</td>
              <td className="px-4 py-3 align-top">Iets rijper</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Enkelpositieve thymocyt
              </td>
              <td className="px-4 py-3 align-top">CD4+ of CD8+</td>
              <td className="px-4 py-3 align-top">Medulla</td>
              <td className="px-4 py-3 align-top">Meest rijp, klaar voor circulatie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De volgorde van rijping is dus: dubbelnegatief → dubbelpositief → enkelpositief. De meest onrijpe
        voorlopercellen zitten in de subcapsulaire cortex, de dubbelpositieve cellen vooral in de cortex en
        de meest rijpe enkelpositieve cellen in de medulla.
      </p>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-950 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtsvraag:</strong> Waar zitten de
          allereerste thymocyten?{' '}
          <span className="text-amber-900 dark:text-amber-100">
            Kort antwoord: In het subcapsulaire deel van de cortex.
          </span>
        </p>
      </div>
    </div>
  )
}
