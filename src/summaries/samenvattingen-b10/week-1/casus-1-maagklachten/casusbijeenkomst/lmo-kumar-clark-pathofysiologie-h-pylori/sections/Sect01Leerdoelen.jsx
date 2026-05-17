export default function Sect01Leerdoelen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Leerdoelen</h2>
      <p>In deze stof draait het om twee hoofddoelen:</p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Leerdoelen</h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">
                  Uitleggen hoe infectie met <em>Helicobacter pylori</em> kan leiden tot verschillende klinische beelden,
                  zoals gastritis, ulcuslijden en een verhoogd risico op maligniteit.
                </td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">
                  Beschrijven via welke pathofysiologische mechanismen <em>Helicobacter pylori</em> de maagwand koloniseert en
                  beschadigt.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
