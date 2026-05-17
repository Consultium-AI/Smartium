export default function Sect03DkaEnHhsVerschil () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">DKA en HHS: wat is het verschil?</h2>
      <p>
        DKA en HHS zijn allebei ernstige hyperglykemische urgenties. Ze overlappen deels, maar hebben ook duidelijke verschillen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Vergelijking tussen DKA en HHS</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Kenmerk</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">DKA</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">HHS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Vooral bij</td>
              <td className="p-3 align-top">Meestal DM1</td>
              <td className="p-3 align-top">Meestal DM2</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Insulinetekort</td>
              <td className="p-3 align-top">Absoluut</td>
              <td className="p-3 align-top">Relatief</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Glucose</td>
              <td className="p-3 align-top">Verhoogd, vaak &gt; 11 mmol/L</td>
              <td className="p-3 align-top">Sterk verhoogd, vaak &gt; 30 mmol/L</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Ketonen</td>
              <td className="p-3 align-top">Aanwezig, vaak significant</td>
              <td className="p-3 align-top">Geen of minimale ketonen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Acidose</td>
              <td className="p-3 align-top">Duidelijk aanwezig</td>
              <td className="p-3 align-top">Geen of milde metabole acidose</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Dehydratie</td>
              <td className="p-3 align-top">Aanwezig</td>
              <td className="p-3 align-top">Aanwezig, vaak prominent</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Symptomen</td>
              <td className="p-3 align-top">Gastro-intestinale klachten, snelle ontregeling</td>
              <td className="p-3 align-top">Neurologische symptomen, langzame ontregeling</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Ontstaan</td>
              <td className="p-3 align-top">Uren tot dagen</td>
              <td className="p-3 align-top">Dagen tot weken</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij DKA spelen vooral <strong className="text-slate-900 dark:text-slate-100">ketonen</strong> en{' '}
        <strong className="text-slate-900 dark:text-slate-100">metabole acidose</strong> een grote rol. Bij HHS is de kern juist <strong className="text-slate-900 dark:text-slate-100">extreme hyperglykemie met hyperosmolariteit en dehydratie</strong>, maar zonder noemenswaardige ketonenproductie.
      </p>
    </div>
  )
}
