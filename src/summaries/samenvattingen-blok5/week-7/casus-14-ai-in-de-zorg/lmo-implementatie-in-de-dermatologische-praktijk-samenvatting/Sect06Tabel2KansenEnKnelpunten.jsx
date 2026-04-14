export default function Sect06Tabel2KansenEnKnelpunten() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Tabel 2. Belangrijkste kansen en knelpunten in de huisartsenpraktijk</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="w-full min-w-[36rem] border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800/80">
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Kansen
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Knelpunten
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">mogelijk minder consulten voor goedaardige huidafwijkingen</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">fout-positieve en fout-negatieve beoordelingen blijven mogelijk</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">haalbaar om patiënten en huisartsen in studies te laten deelnemen</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">veel patiënten hebben hulp nodig bij het maken van goede foto’s</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">huisarts kan steun ervaren bij behandelkeuzes</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">app kan ook leiden tot onnodig agressiever beleid</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">potentieel om huisartsenzorg te ontlasten</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">implementatie vraagt tijd, uitleg, ondersteuning en goede logistiek</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/40 p-4 space-y-3">
        <p className="whitespace-pre-line">
          {`Aandacht-vraag:
Waarom is gebruiksgemak hier zo belangrijk?`}
        </p>
        <p className="whitespace-pre-line">
          {`Mini-antwoord:
Omdat een goede AI-toepassing alleen effect heeft als patiënten en zorgverleners haar ook echt correct kunnen gebruiken.`}
        </p>
      </div>
    </div>
  )
}
