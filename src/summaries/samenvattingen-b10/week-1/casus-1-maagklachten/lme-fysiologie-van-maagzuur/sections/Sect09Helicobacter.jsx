export default function Sect09Helicobacter() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Helicobacter pylori en maagzweer</h2>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Helicobacter pylori</strong> kan de mucosalaag van de
        maag aantasten. De bacterie is zuurbestendig, onder andere door de productie van{' '}
        <strong className="text-slate-900 dark:text-slate-100">urease</strong>. Ze hecht zich aan de epitheelcellen van
        de maagwand, vooral in het antrum.
      </p>
      <p>
        De kolonisatie van de mucosalaag leidt tot afbraak van de beschermende laag, waardoor zuur en pepsine de
        epitheelcellen kunnen bereiken. Daardoor ontstaat lokale beschadiging en een ontstekingsreactie. Dit kan gepaard
        gaan met maagzweren.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Belangrijke keten bij H. pylori-infectie</h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Stap
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Gevolg
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">H. pylori remt somatostatine-afgifte door D-cellen</td>
                <td className="px-4 py-3 align-top">minder remming</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Minder somatostatine</td>
                <td className="px-4 py-3 align-top">meer gastrine-afgifte door G-cellen</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Meer gastrine</td>
                <td className="px-4 py-3 align-top">{'meer stimulatie van pari\u00E8tale cellen'}</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Meer zoutzuur</td>
                <td className="px-4 py-3 align-top">meer schade aan epitheel</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Meer schade</td>
                <td className="px-4 py-3 align-top">heftigere ontstekingsreactie en maagklachten</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>Bij chronische H. pylori-infectie kan de maagzuurproductie toenemen doordat de remming wegvalt.</p>
    </div>
  )
}
