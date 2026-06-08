export default function Sect09Tabel1BelangrijkeOnderdelen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijke onderdelen van leefstijlbehandeling bij obesitas</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Onderdeel</th>
              <th className="px-4 py-3 font-semibold">Wat houdt het in?</th>
              <th className="px-4 py-3 font-semibold">Waarom is het belangrijk?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Voeding</td>
              <td className="px-4 py-3 align-top">Minder energie-inname en gezondere samenstelling van de voeding</td>
              <td className="px-4 py-3 align-top">Helpt bij gewichtsverlies en verbetering van de gezondheid</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Beweging</td>
              <td className="px-4 py-3 align-top">Meer dagelijkse activiteit en eventueel extra geplande beweging</td>
              <td className="px-4 py-3 align-top">Verhoogt energieverbruik en ondersteunt de leefstijlverandering</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Gedrag</td>
              <td className="px-4 py-3 align-top">Leren omgaan met gewoonten, motivatie en terugval</td>
              <td className="px-4 py-3 align-top">Maakt verandering beter vol te houden</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Begeleiding</td>
              <td className="px-4 py-3 align-top">Structuur en ondersteuning door zorgverleners</td>
              <td className="px-4 py-3 align-top">Vergroot de kans op succes op de lange termijn</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
