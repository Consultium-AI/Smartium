export default function Sect03Tabel1TolerantieMechanismen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Tabel 1. Mechanismen van tolerantie tegen autoantigenen bij B- en T-lymfocyten
      </h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100/90 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-3 py-2 font-semibold border-b border-slate-200 dark:border-slate-600">Niveau</th>
              <th className="px-3 py-2 font-semibold border-b border-slate-200 dark:border-slate-600">Mechanisme</th>
              <th className="px-3 py-2 font-semibold border-b border-slate-200 dark:border-slate-600">Effect</th>
              <th className="px-3 py-2 font-semibold border-b border-slate-200 dark:border-slate-600">Gebruik</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr>
              <td className="px-3 py-2 align-top">Centrale tolerantie</td>
              <td className="px-3 py-2 align-top">Klonale deletie</td>
              <td className="px-3 py-2 align-top">deletie van autoreactieve klonen</td>
              <td className="px-3 py-2 align-top">B- en T-lymfocyten</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Centrale tolerantie</td>
              <td className="px-3 py-2 align-top">Receptoraanpassing</td>
              <td className="px-3 py-2 align-top">verandering van de specificiteit van de antigeenreceptor</td>
              <td className="px-3 py-2 align-top">B-lymfocyten</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Centrale tolerantie</td>
              <td className="px-3 py-2 align-top">Regulatorie T-lymfocyten</td>
              <td className="px-3 py-2 align-top">
                differentiatie tot T-lymfocyten die autoreactieve lymfocyten onderdrukken
              </td>
              <td className="px-3 py-2 align-top">T-lymfocyten</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Perifere tolerantie</td>
              <td className="px-3 py-2 align-top">Anergie</td>
              <td className="px-3 py-2 align-top">uitblijven van lymfocytactivatie</td>
              <td className="px-3 py-2 align-top">B- en T-lymfocyten</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Perifere tolerantie</td>
              <td className="px-3 py-2 align-top">Suppressie</td>
              <td className="px-3 py-2 align-top">onderdrukking door regulatorie T-lymfocyten</td>
              <td className="px-3 py-2 align-top">B- en T-lymfocyten</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
