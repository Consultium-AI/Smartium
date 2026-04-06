export default function Sect03Tabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Tabel 1. Overzicht van de belangrijkste verworven stollingsstoornissen in deze module
      </h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/80">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Onderdeel</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Probleem</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Voorbeelden</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr>
              <td className="p-3 align-top">Primaire hemostase</td>
              <td className="p-3 align-top">Trombocyten functioneren niet goed</td>
              <td className="p-3 align-top">trombocytopathie</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Primaire hemostase</td>
              <td className="p-3 align-top">Te weinig trombocyten</td>
              <td className="p-3 align-top">trombopenie, zoals ITP</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Primaire hemostase</td>
              <td className="p-3 align-top">Te weinig vWF</td>
              <td className="p-3 align-top">verworven VWD</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Secundaire hemostase</td>
              <td className="p-3 align-top">Te weinig functionele stollingsfactoren</td>
              <td className="p-3 align-top">verworven hemofilie A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
