export default function Sect06Tabel2EnNegatieveSelectieMedulla() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Tabel 2. Uitkomst van T-celselectie op basis van binding van TCR aan MHC
      </h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100/90 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-3 py-2 font-semibold border-b border-slate-200 dark:border-slate-600">
                Binding van TCR aan MHC
              </th>
              <th className="px-3 py-2 font-semibold border-b border-slate-200 dark:border-slate-600">Uitkomst</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr>
              <td className="px-3 py-2 align-top">Geen binding</td>
              <td className="px-3 py-2 align-top">apoptose</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Intermediaire binding</td>
              <td className="px-3 py-2 align-top">positieve selectie</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Zeer sterke binding</td>
              <td className="px-3 py-2 align-top">negatieve selectie / klonale deletie</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Negatieve selectie in de medulla</h3>
      <p>
        Na positieve selectie migreren de overlevende thymocyten naar de medulla. Daar ontmoeten zij andere cellen,
        vooral medullaire thymusepitheelcellen en dendritische cellen, die lichaamseigen antigenen presenteren.
      </p>
      <p>
        Wanneer een T-celreceptor met hoge affiniteit bindt aan lichaamseigen peptide-MHC-complexen, is de cel
        potentieel gevaarlijk. Zo’n thymocyt wordt verwijderd door apoptose. Dit heet negatieve selectie of klonale
        deletie.
      </p>
      <p>Negatieve selectie voorkomt dus dat sterk autoreactieve T-lymfocyten de periferie bereiken.</p>
    </div>
  )
}
