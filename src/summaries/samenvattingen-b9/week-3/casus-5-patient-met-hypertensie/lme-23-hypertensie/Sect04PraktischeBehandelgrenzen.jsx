export default function Sect04PraktischeBehandelgrenzen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Praktische behandelgrenzen en streefwaarden</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Richtlijn</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Start behandeling bij</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Behandeldoel</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">American Heart Association</td>
                <td className="px-4 py-3 align-top">&gt;130/80 mmHg bij CVD of 10-jaarsrisico &gt;10%</td>
                <td className="px-4 py-3 align-top">&lt;130/80 mmHg</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">European Society of Hypertension</td>
                <td className="px-4 py-3 align-top">&gt;140/90 mmHg</td>
                <td className="px-4 py-3 align-top">&lt;130/80 mmHg, als behandeling goed verdragen wordt</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Bij de beoordeling kijk je dus niet alleen naar de bloeddruk zelf, maar ook naar het totale risicoplaatje. Bij een ouder, gezond persoon kan bijvoorbeeld 138/84 mmHg nog prima zijn, terwijl je bij iemand met diabetes en nefropathie liever lager wilt zitten.
      </p>
    </div>
  )
}
