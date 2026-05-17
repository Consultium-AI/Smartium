export default function Sect04Tabel2TumorenEnGeheugensteun() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Tumoren die geassocieerd zijn met Lynchsyndroom</h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
              <tr>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">
                  Wel geassocieerd met Lynchsyndroom
                </th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">
                  Niet Lynch-geassocieerd in deze context
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900/40">
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Maagcarcinoom</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Melanoom</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Ovariumcarcinoom</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Longkanker</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Duodenumcarcinoom</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Leverkanker</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Galwegcarcinoom</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Sarcoom</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Urotheelcelcarcinoom</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Borstkanker</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Pancreascarcinoom</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Baarmoederhalskanker</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Hersentumor (gliom)</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2" />
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Prostaatcarcinoom</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2" />
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Talgkliercarcinoom</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Een handige manier om dit te onthouden is dat je bij Lynchsyndroom vooral denkt aan darm, baarmoederslijmvlies,
        eierstok, urinewegen, en daarnaast ook aan maag, dunne darm, pancreas, galwegen en hersenen.
      </p>
      <p>
        Aandacht-vragetje: Waarom is Lynchsyndroom zo belangrijk om te herkennen?  Mini-antwoord: Omdat de diagnose
        gevolgen heeft voor de patiënt zelf, maar ook voor familieleden die mogelijk dezelfde erfelijke aanleg hebben.
      </p>
    </div>
  )
}
