export default function Sect06KlinischeCriteriaFamiliairMelanoom() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Klinische criteria om aan familiair melanoom of FAMMM te denken
      </h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Situatie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">
                Drie of meer personen in de familie aan dezelfde familiezijde met invasief melanoom, waarvan twee
                eerstegraadsverwanten
              </td>
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Denk aan familiair melanoom/FAMMM
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">
                Twee eerstegraadsverwanten met invasief melanoom, van wie er één meerdere melanomen heeft
              </td>
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Denk aan familiair melanoom/FAMMM
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">
                Twee eerstegraadsverwanten met invasief melanoom, van wie er één jonger dan 40 jaar is bij diagnose
              </td>
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Denk aan familiair melanoom/FAMMM
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Drie of meer invasieve maligne melanomen bij één persoon</td>
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Denk aan familiair melanoom/FAMMM
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">
                Twee eerstegraadsverwanten met invasief melanoom en één bloedverwant met pancreascarcinoom aan dezelfde
                familiezijde
              </td>
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Denk aan familiair melanoom/FAMMM
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
