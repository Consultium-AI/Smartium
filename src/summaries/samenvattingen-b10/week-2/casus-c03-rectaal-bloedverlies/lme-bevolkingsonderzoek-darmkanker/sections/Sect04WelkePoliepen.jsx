export default function Sect04WelkePoliepen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Welke poliepen zijn belangrijk?</h2>
      <p>
        Niet elke poliep ontwikkelt zich tot kanker. Tijdens coloscopie kun je vaak nog niet goed zien welke poliep
        gevaarlijk wordt en welke niet. Pas nadat de poliep is verwijderd en door de patholoog is beoordeeld, weet je het
        precieze type.
      </p>
      <p>De meest voorkomende typen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>adenoom;</li>
        <li>serrated poliep;</li>
        <li>hyperplastische poliep.</li>
      </ul>
      <p>Van de hyperplastische poliep weten we dat deze niet in staat is om darmkanker te vormen.</p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijke polieptypen</h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
              <tr>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Type poliep</th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">
                  Betekenis in deze stof
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900/40">
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">Adenoom</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Goedaardige poliep, kan een voorstadium van darmkanker zijn
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">Serrated poliep</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Kan ook een voorstadium van darmkanker zijn
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  Hyperplastische poliep
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Vormt geen darmkanker</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
