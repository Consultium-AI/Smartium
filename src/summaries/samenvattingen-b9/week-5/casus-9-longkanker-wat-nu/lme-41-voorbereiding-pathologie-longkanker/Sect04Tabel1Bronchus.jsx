export default function Sect04Tabel1Bronchus() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijke onderdelen van de bronchus</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderdeel</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerk / functie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Trilhaardragend epitheel</td>
              <td className="px-4 py-3 align-top">Verplaatst slijm en stofdeeltjes richting trachea</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Slijmbekercellen</td>
              <td className="px-4 py-3 align-top">Produceren slijm</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Basale cellen</td>
              <td className="px-4 py-3 align-top">Onderhoud en vernieuwing van het epitheel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Clubcellen</td>
              <td className="px-4 py-3 align-top">Onderdeel van het bronchiale epitheel</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Neuro-endocriene cellen</td>
              <td className="px-4 py-3 align-top">Aanwezig, maar niet goed zichtbaar met routine lichtmicroscopie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Kraakbeen</td>
              <td className="px-4 py-3 align-top">Zorgt voor stevigheid en voorkomt dichtvallen bij uitademen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Bindweefsel</td>
              <td className="px-4 py-3 align-top">Ondersteunende laag rondom de luchtweg</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
